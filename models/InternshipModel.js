import { Schema, model, models } from "mongoose";

const internshipSchema = new Schema({
  email: { type: String, required: true },
  companyName: { type: String },
  jobStatus: { type: String },
  dateApplied: String,
  lastUpdatedDate: String,
  jobPosition: String,
  jobCategory: String,
  location: String,
  positionUrl: String,
});

const Internships =
  models.Internships || model("Internships", internshipSchema);
export default Internships;
