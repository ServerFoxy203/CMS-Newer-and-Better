import mongoose from "mongoose";

const ReactionCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [1, "Reaction category length cannot be less than 1 characters"],
    maxLength: [
      100,
      "Reaction category length cannot be more than 100 characters",
    ],
    index: true,
  },
  node: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    required: true,
  },
  modified: {
    type: Date,
    required: true,
  },
});

module.exports =
  mongoose.models.ReactionCategory ||
  mongoose.model("ReactionCategory", ReactionCategorySchema);
