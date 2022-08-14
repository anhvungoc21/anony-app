import Users from "../../models/UserModel";

export default async function handler(req, res) {
  const body = req.body;
  const checkExisting = await Users.findOne({ email: body.email });

  if (checkExisting) {
    res.status(200).json({ message: "Already registered" });
    return;
  }

  const user = new Users({
    name: body.name,
    email: body.email,
    password: body.password,
    gradYear: body.gradYear,
  });
  await user.save();

  return res.status(200).json({
    message: "Registered successfully!",
  });
}
