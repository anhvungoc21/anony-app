import Users from "../../../models/UserModel";
import Internships from "../../../models/InternshipModel";
import stripLower from "../../../helper/stripLower";

export default async function handler(req, res) {
  const { email, jobCategory, location, jobStatus, dateApplied } = req.body;
  const companyName = stripLower(req.body.companyName);
  const position = stripLower(req.body.jobPosition);
  const positionUrl = stripLower(req.body.positionUrl);
  const checkExistingApplication = await Internships.findOne({
    email,
    companyName,
    position,
  });

  if (checkExistingApplication) {
    res.status(200).json({
      message: "Application already added! Please check your current listings!",
    });
    return;
  }

  const newInternship = new Internships({
    email,
    companyName,
    jobStatus,
    dateApplied,
    position,
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
