const { MongoClient } = require("mongodb");

// url of mongodb
const url = "mongodb://localhost:27017";

// database name
const dbName = "foodExpress";
const client = new MongoClient(url);
const usersCollection = client.db(dbName).collection("users");

module.exports = { client, dbName, usersCollection };
