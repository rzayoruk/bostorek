import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("mongodb conneciton has been establish...")
  } catch (error) {
    console.log("mongodb connection has been failed", error.message)
    throw error
  }
}
export default connectDB
