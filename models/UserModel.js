import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  internships: { type: [String], default: [] },
  gradYear: Number,
  educationStatus: String,
});

const Users = models.Users || model("Users", userSchema);
export default Users;
