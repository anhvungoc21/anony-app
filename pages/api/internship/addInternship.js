import Users from "../../../models/UserModel";
import Internships from "../../../models/InternshipModel";
import moment from "moment";

export default async function handler(req, res) {
  const {
    email,
    companyName,
    jobPosition,
    positionUrl,
    jobCategory,
    location,
    jobStatus,
    dateApplied,
  } = req.body;
  const checkExistingApplication = await Internships.findOne({
    email,
    companyName,
    jobPosition,
  });
  const dateAppliedTo =
    dateApplied == "" ? moment().format("MM/DD/YYYY") : dateApplied;
  const lastUpdatedDate = moment().format("MM/DD/YYYY");

  if (checkExistingApplication) {
    res.status(200).json({
      message: "Application already added! Please check your current listings!",
    });
    return;
  }

  const newInternship = new Internships({
    email,
    companyName: companyName.trim(),
    jobStatus,
    dateApplied: dateAppliedTo,
    lastUpdatedDate,
    jobPosition: jobPosition.trim(),
    jobCategory,
    location,
    positionUrl,
  });
  await newInternship.save();

  await Users.updateOne(
    { email },
    { $push: { internships: newInternship._id } }
  );

  return res.status(200).json({
    message: "Application added successfully!",
  });
}
