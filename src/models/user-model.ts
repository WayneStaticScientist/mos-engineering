import { Schema, models, model } from "mongoose";
const userSchema = new Schema({
  gender: { type: String },
  idNumber: { type: String },
  name: { type: String },
  satellite: { type: String },
  phoneNumber: { type: String },
  token: { type: String, default: null },
  role: { type: String, default: "client" },
  password: { type: String, default: null },
  email: { type: String, required: [true, "email is required"] },
});
export default models.User || model("User", userSchema);
