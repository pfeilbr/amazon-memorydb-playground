const redis = require('redis');

const clusterNodes = [
    { host: '127.0.0.1', port: 7000 },
    { host: '127.0.0.1', port: 7001 },
    { host: '127.0.0.1', port: 7002 }
  ];
  
  // Create a new Redis client
  const client = redis.createClient({
    clusterMode: true,
    clusterNodes: clusterNodes
  });

exports.handler = async (event) => {
  const data = "Hello, MemoryDB!";
  const response = {
    statusCode: 200,
    body: JSON.stringify(data, null, 2),
  };

  return response;
};
