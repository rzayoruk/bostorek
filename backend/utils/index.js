import mongoose from "mongoose"

const isValidObjectId = (id, res) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Object id is invalid" })
  }
  return true
}

const findDocumentById = async (model, id, res) => {
  try {
    const document = await model.findById(id)
    if (!document) {
      res.status(404).json({ error: `The ${model.modelName} was not found.` })
      return null
    }
    return document
  } catch (error) {
    console.error(`Error while finding ${model.modelName} by ID`, error)
    return res.status(500).json({ error: "Internal Server Error" })
  }
}

export { isValidObjectId, findDocumentById }
