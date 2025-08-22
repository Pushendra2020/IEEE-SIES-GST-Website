import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors({
    origin:process.env.ORIGIN,
    credentials:true
}))


app.use(express.json({limit:"16kb"})) //Limit for how much json data will allowed one time.
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

//Routes Imports
import personRouter from "./routes/person.routes.js"
import eventRouter from "./routes/event.routes.js"


app.use("/api/v1/person",personRouter)
app.use("/api/v1/event",eventRouter)

export default app