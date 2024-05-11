const mongoose = require("mongoose");

const dbConnection = () => {
  const DB = process.env.DB_URI;
  mongoose
    .connect(DB)
    .then((conn) => {
      console.log(`DB connection: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.error(`DB Error: ${err}`);
    });
};

module.exports = dbConnection;
