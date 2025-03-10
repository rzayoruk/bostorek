import express from "express"
import bookRouter from "./routes/bookRoutes.js"
import connectDB from "./config/db.js"
const app = express()
app.use(express.json())
app.use("/api/v1/books", bookRouter)

try {
  await connectDB()
  app.listen(3000, () => {
    console.log("listening on port 3000")
  })
} catch (error) {
  process.exit(1)
}
