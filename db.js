/** Database setup for BizTime. */

const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql:///biztime" // can edit later when we have a testing database
});

client.connect();


module.exports = client;
