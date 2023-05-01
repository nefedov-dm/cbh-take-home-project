const crypto = require("crypto");

exports.createHash = (value) => crypto
  .createHash("sha3-512")
  .update(!value || typeof value === "string" 
    ? value || ''
    : JSON.stringify(value))
  .digest("hex");
