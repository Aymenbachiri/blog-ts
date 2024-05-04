import { Schema, model, models } from "mongoose";

const ArticleSchema = new Schema(
  {
    creator: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageurl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Article = models.Article || model("Article", ArticleSchema);
export default Article;
