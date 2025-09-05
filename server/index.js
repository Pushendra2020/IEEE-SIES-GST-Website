import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.database.js";
import app from "./app.js";

dotenv.config({ path: "./.env" });

// Connect to database
connectDB()
  .then(() => {
    console.log("✅ Database connected successfully");
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  });

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Server is health is ok"
  });
});
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Backend is running"
  });
});

// Handle production errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Something went wrong!"
  });
});

// Export the Express API
export default app;