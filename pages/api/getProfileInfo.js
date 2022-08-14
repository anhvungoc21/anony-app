import Users from "../../models/UserModel";
import Internships from "../../models/InternshipModel";

export default async function handler(req, res) {
  const { email } = req.body;

  let jobsApplied = await Internships.find({ email, jobStatus: "Applied" });
  let jobsTestTaken = await Internships.find({
    email,
    jobStatus: "Online Test",
  });
  let jobsInterviewed = await Internships.find({
    email,
    jobStatus: "Interview",
  });
  let jobsAccepted = await Internships.find({ email, jobStatus: "Accepted" });
  const currentUser = await Users.findOne({ email });
  if (!currentUser) {
    return res.status(200).json({ data: undefined });
  }

  const data = {
    name: currentUser.name,
    email: currentUser.email,
    gradYear: currentUser.gradYear,
    jobsApplied: jobsApplied.length,
    jobsTestTaken: jobsTestTaken.length,
    jobsInterviewed: jobsInterviewed.length,
    jobsAccepted: jobsAccepted.length,
  };

  return res.status(200).json({ data });
}
