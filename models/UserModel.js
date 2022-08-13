import { Schema, model, models } from "mongoose";
import { internshipSchema } from "./InternshipModel";

const userSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
  internships: { type: [internshipSchema], default: [] },
  gradYear: Number,
  educationStatus: String,
});

const Users = models.Users || model("Users", userSchema);
export default Users;
