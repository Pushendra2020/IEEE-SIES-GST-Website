// import connectDB from "./database/db.database.js";
// import app from "./app.js";
// import dotenv from 'dotenv'

// dotenv.config({
//     path:'./.env'
// })

// connectDB()
// .then(()=>{
//     // app.listen(process.env.PORT || 3000,()=>{
//     //     console.log(`The PORT is running on ${process.env.PORT}`)
//     // })
//     app.get(`${process.env.ORIGIN1}/api/hello`, (req, res) => {
//   res.json({ message: "Hello from Express on Vercel!" });
// });
// }).catch((error)=>{
//     console.log("Failed to Connect :( ",error)
// })

// app.get('/', (req, res) => {
//     res.send('Backend is running');
// });











import express from "express";
import serverless from "serverless-http";
import dotenv from "dotenv";
import connectDB from "./database/db.database.js"; 
import app from "./app.js"; // if you have routes folder

dotenv.config({ path: "./.env" });

//const app = express();

// Middleware
app.use(express.json());

// Connect DB (runs only once when cold start happens)
connectDB()
  .then(() => {
    console.log("✅ Database connected");
  })
  .catch((err) => {
    console.error("❌ DB connection failed", err);
  });

// Routes
app.get("/", (req, res) => {
    console.log("Backend is running")
  res.send("Backend is running 🚀");
});
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express on Vercel!" });
});

//app.use("/api", app); // your existing routes

// Export for Vercel
export default serverless(app);