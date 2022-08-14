import Internships from "../../../models/InternshipModel";

export default async function handler(req, res) {
  const exploreInternships = await Internships.find();
  return res.status(200).json({ data: exploreInternships });
}
