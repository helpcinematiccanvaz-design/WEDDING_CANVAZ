import express from "express";
import path from "path";
import compression from "compression";
import { fileURLToPath } from "url";

// ESM dirname resolution
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use compression for better performance
  app.use(compression());

  // Logging
  app.use((req, res, next) => {
    if (req.url !== "/api/health") {
      console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    }
    next();
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, the bundled server.cjs is IN the dist folder.
    // So __dirname points directly to the dist folder.
    const distPath = __dirname;
    
    console.log(`> Production mode active`);
    console.log(`> Serving static files from: ${distPath}`);
    
    app.use(express.static(distPath, {
      maxAge: '1d',
      etag: true
    }));
    
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`> Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("FAILED TO START SERVER:", err);
  process.exit(1);
});
