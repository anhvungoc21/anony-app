import { Schema, model, models } from "mongoose";

const internshipSchema = new Schema({
  email: { type: String, required: true, unique: true },
  companyName: { type: String },
  jobStatus: { type: String },
  dateApplied: { type: Date },
  lastUpdatedDate: { type: Date, default: Date.now() },
  position: String,
  jobCategory: String,
  location: String,
  positionUrl: String,
});

const Internships =
  models.Internships || model("Internships", internshipSchema);
export default Internships;
