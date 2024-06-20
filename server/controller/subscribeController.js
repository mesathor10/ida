import subModel from "../model/subModel.js";

const SubData = async (req, res) => {
  const { Name, Email, Phone } = req.body;
  try {
    const user = await subModel.findOne({ Email });
    console.log(user);

    if (user) {
      res.json({ msg: "exist" });
    } else {
      const subData = new subModel({
        Name,
        Email,
        Phone,
        Date: new Date(),
      });
      await subData.save();
      res.json({ msg: "added" });
    }
  } catch (err) {
    res.json({ msg: "error" });
  }
};

export default SubData;
