const { createHash } = require('./hash');

const MAX_PARTITION_KEY_LENGTH = 256;

const stringify = (partitionKey) => 
  !partitionKey || typeof partitionKey === "string" 
    ? partitionKey 
    : JSON.stringify(partitionKey);

const limit = (partitionKey) => 
  partitionKey?.length > MAX_PARTITION_KEY_LENGTH
    ? createHash(partitionKey)
    : partitionKey;

exports.prepare = (partitionKey) => limit(stringify(partitionKey));