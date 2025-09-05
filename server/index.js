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