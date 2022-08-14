import Internships from "../../../models/InternshipModel";

export default async function handler(req, res) {
  const { newStatus, id } = req.body;
  await Internships.updateOne({ _id: id }, { jobStatus: newStatus });
  return res.status(200).json();
}
