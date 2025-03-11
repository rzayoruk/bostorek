import express from "express"
import * as bookController from "../controllers/bookController.js"

const router = express.Router()

router.post("/", bookController.createABook)
router.get("/", bookController.getAllBooks)
router.get("/:id", bookController.getABook)
router.put("/:id", bookController.updateABook)
router.delete("/:id", bookController.deleteABook)

export default router
