import { Schema, models, model } from "mongoose";
const productSchema = new Schema({
  itemName: { type: String },
  price: { type: String },
  description: { type: String },
  path: { type: String },
});
export default models.Product || model("Product", productSchema);
