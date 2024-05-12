const express = require("express");
const { client, dbName } = require("./db/dbConnect");
const matchAgg = require("./routers/aggregation/matchAgg");
const addField = require("./routers/aggregation/addField");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const usersCollection = client.db(dbName).collection("users");
  const result = await usersCollection.find({ gender: "Male" }).toArray();
  res.json(result);
});

// $match Aggregation
app.get("/matchAgg", matchAgg);
app.get("/addField", addField);
app.listen(port, () => {
  console.log("server is running");
});
