const { createHash } = require('./utils/hash');
const { prepare } = require('./utils/partition-key');

const TRIVIAL_PARTITION_KEY = "0";

exports.deterministicPartitionKey = (event) => {
  if (!event) { return TRIVIAL_PARTITION_KEY; }

  if (!event.partitionKey) { return createHash(event); }

  return prepare(event.partitionKey);
};