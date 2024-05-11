const { MongoClient } = require("mongodb");

// url of mongodb
const url = "mongodb://localhost:27017";

// database name
const dbName = "MongodbPratise";
const client = new MongoClient(url);

module.exports = { client, dbName };
