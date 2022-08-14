import Internships from "../../../models/InternshipModel";

export default async function handler(req, res) {
  const { id } = req.body;
  await Internships.deleteOne({ _id: id });
  return res.status(200).json();
}
