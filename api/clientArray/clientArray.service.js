const dbService = require('../../services/db.service');
const logger = require('../../services/logger.service');
const axios = require('axios');
const BASE_URL = process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:3031/api/';

module.exports = {
  add,
};

async function add(num) {
  const desiredArray = _buildArray(num.number);
  log(desiredArray);
  console.log('num', num);
  console.log('num.number', num.number);
  console.log('desired array', desiredArray);
  try {
    const collection = await dbService.getCollection('clientArray');
    await collection.insertOne({ desiredArray });
    console.log('inserted ');
    return desiredArray;
  } catch (err) {
    logger.error('cannot insert desiredArray', err);
    throw err;
  }
}

function _buildArray(num) {
  const array = [];
  for (let i = num - 1; i > 0; i--) {
    array.push(i);
  }
  return array;
}

async function log(array) {
  console.log('sending to logggg- pre try', array);
  try {
    console.log('sending to logggg', BASE_URL);
    await axios.post(`${BASE_URL}logService`, array);
    console.log('post axios');
  } catch (err) {
    console.log('error in POST to log');
  }
}
