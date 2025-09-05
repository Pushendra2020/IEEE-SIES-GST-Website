// // import express from "express";
// // import serverless from "serverless-http";

// // const app = express();

// // app.get(`${process.env.ORIGIN1}/api/hello`, (req, res) => {
// //   res.json({ message: "Hello from Express on Vercel!" });
// // });

// // export default serverless(app);










// import express from "express";
// import serverless from "serverless-http";
// import dotenv from "dotenv";
// import connectDB from "../database/db.database.js"; 
// import appRoutes from "../app.js"; // if you have routes folder

// dotenv.config({ path: "./.env" });

// const app = express();

// // Middleware
// app.use(express.json());

// // Connect DB (runs only once when cold start happens)
// connectDB()
//   .then(() => {
//     console.log("✅ Database connected");
//   })
//   .catch((err) => {
//     console.error("❌ DB connection failed", err);
//   });

// // Routes
// app.get("/", (req, res) => {
//   res.send("Backend is running 🚀");
// });
// app.get("/api/hello", (req, res) => {
//   res.json({ message: "Hello from Express on Vercel!" });
// });

// app.use("/api", appRoutes); // your existing routes

// // Export for Vercel
// export default serverless(app);


import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express on Vercel!" });
});

export default serverless(app);
