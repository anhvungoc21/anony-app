import Internships from "../../../models/InternshipModel";

export default async function handler(req, res) {
  /*
  let googleCount = 0;
  let metaCount = 0;
  let amazonCount = 0;
  let appleCount = 0;
  let microsoftCount = 0;
  const allInternships = await Internships.find();
  for (let i = 0; i < allInternships.length; i++) {
    let item = allInternships[i];
    console.log(item.companyName);
    switch (item.companyName) {
      case "Google":
        googleCount++;
      case "Meta":
        metaCount++;
      case "Amazon":
        amazonCount++;
      case "Apple":
        appleCount++;
      case "Microsoft":
        microsoftCount++;
    }
  }
  */
  const googleCount = await Internships.find({ companyName: "Google" });
  const metaCount = await Internships.find({ companyName: "Meta" });
  const amazonCount = await Internships.find({ companyName: "Amazon" });
  const appleCount = await Internships.find({ companyName: "Apple" });
  const microsoftCount = await Internships.find({ companyName: "Microsoft" });
  const data = [
    {
      company: "Google",
      count: googleCount.length,
    },
    {
      company: "Meta",
      count: metaCount.length,
    },
    {
      company: "Amazon",
      count: amazonCount.length,
    },
    {
      company: "Apple",
      count: appleCount.length,
    },
    {
      company: "Microsoft",
      count: microsoftCount.length,
    },
  ];
  // console.log(data);

  return res.status(200).json({ data });
}
