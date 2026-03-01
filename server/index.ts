import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes (add your routes here)
// app.use("/api/projects", projectRoutes);
// app.use("/api/contact", contactRoutes);

// Serve static files from React build in production
if (process.env.NODE_ENV === "production") {
  // Serve static files from dist/public (matching Vite output)
  app.use(express.static(path.join(__dirname, "../dist/public")));
  
  // Handle React routing - return index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "../dist/public/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});