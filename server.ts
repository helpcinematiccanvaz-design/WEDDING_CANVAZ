import express from "express";
import path from "path";
import compression from "compression";
import { fileURLToPath } from "url";

// In ESM, we need to derive __dirname. 
// When bundled by esbuild to CJS, esbuild will replace this or it will work as-is.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  // PORT must be 3000 for Cloud Run in this environment
  const PORT = 3000;

  // Use compression to reduce payload size
  app.use(compression());

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", env: process.env.NODE_ENV });
  });

  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, the server is bundled into dist/server.cjs
    // So __dirname refers to the dist directory itself
    const distPath = __dirname;
    
    app.use(express.static(distPath, {
      maxAge: '1d',
      etag: true
    }));
    
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on 0.0.0.0:${PORT} (NODE_ENV: ${process.env.NODE_ENV})`);
  });
}

startServer().catch((err) => {
  console.error("Critical server startup failure:", err);
  process.exit(1);
});
