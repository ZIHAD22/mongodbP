const { usersCollection } = require("../../db/dbConnect");

const addField = async (req, res) => {
  const result = await usersCollection
    .aggregate([
      { $match: { gender: "Male" } },
      { $project: { gender: 1, course: 1 } },
      { $addFields: { eduTech: "PhHero" } },
      //   {$marge:"users"} this will merge data with new fields
      { $out: "newUsers" }, // this will create newUsers collection and put all filter user to this collection
    ])
    .toArray();
  res.json(result);
};

module.exports = addField;
