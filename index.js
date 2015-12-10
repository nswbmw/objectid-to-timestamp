'use strict';

module.exports = function objectIdToTimestamp(objectId) {
  objectId = objectId.toString();
  return parseInt(objectId.slice(0, 8), 16) * 1000 + 
         Math.floor(parseInt(objectId.slice(-6), 16) / 16777.217); // convert 0x000000 ~ 0xffffff to 0 ~ 999
};