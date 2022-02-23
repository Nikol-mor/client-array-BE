const clientArrayService = require('./clientArray.service');
const logger = require('../../services/logger.service');
const socket = require('../../services/socket.service');

module.exports = {
  addclientArray,
};

async function addclientArray(req, res) {
  console.log('req.body hahahhaahah', req.body);
  try {
    const clientArray = req.body;
    const addedclientArray = await clientArrayService.add(clientArray);
    res.send(addedclientArray);
  } catch (err) {
    logger.error('Failed to add clientArray', err);
    res.status(500).send({ err: 'Failed to update clientArray' });
  }
}
