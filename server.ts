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

  // Logging middleware (only for non-health checks)
  app.use((req, res, next) => {
    if (req.url !== "/api/health") {
      console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    }
    next();
  });

  // Health check endpoint for Cloud Run
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  if (process.env.NODE_ENV !== "production") {
    // Development mode with Vite middleware
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production mode: Serve static files from the dist directory
    // In production, server.cjs is in /dist, so __dirname is the dist folder
    const distPath = path.resolve(__dirname);
    
    // Fallback if not running from dist
    const finalDistPath = distPath.endsWith("dist") ? distPath : path.join(process.cwd(), "dist");

    console.log(`> Serving static files from: ${finalDistPath}`);

    app.use(express.static(finalDistPath, {
      maxAge: '1d',
      etag: true
    }));
    
    // Catch-all route for Single Page Application
    app.get("*", (req, res) => {
      res.sendFile(path.join(finalDistPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`> Server active on port ${PORT}`);
    console.log(`> Environment: ${process.env.NODE_ENV || 'development'}`);
  });
}

startServer().catch((err) => {
  console.error("CRITICAL: Server failed to start:", err);
  process.exit(1);
});
