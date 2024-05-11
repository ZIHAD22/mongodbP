const express = require("express");
const { client, dbName } = require("./db/dbConnect");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const usersCollection = client.db(dbName).collection("test");
  const result = await usersCollection.find().toArray();
  res.json(result);
});
app.listen(port, () => {
  console.log("server is running");
});
