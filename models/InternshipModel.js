import { Schema, model, models } from "mongoose";

export const internshipSchema = new Schema({
  email: { type: String, required: true, unique: true },
  companyName: { type: String, required: true },
  status: { type: String, required: true },
  dateApplied: { type: Date, default: Date.now() },
  lastUpdatedDate: { type: Date, default: Date.now() },
  position: String,
  category: String,
  location: String,
});

const Internships =
  models.Internships || model("Internships", internshipSchema);
export default Internships;
