const { usersCollection } = require("../../db/dbConnect");

const matchAgg = async (req, res) => {
  const result = await usersCollection
    .aggregate([{ $match: { gender: "Male" } }, { $project: { gender: 1 } }])
    .toArray();
  res.json(result);
};

module.exports = matchAgg;
