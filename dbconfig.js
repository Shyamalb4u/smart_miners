const { prototype } = require("jsonwebtoken/lib/JsonWebTokenError");

const config = {
  user: "smart_miner_user", // Database username
  password: "SmT597Cn*Dat", // Database password
  server: "103.69.196.81", // Server IP address
  database: "smart_miner_data", // Database name
  options: {
    encrypt: false, // Disable encryption
  },
  port: 1533,
};

module.exports = config;
