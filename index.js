'use strict';

module.exports = function objectIdToTimestamp(objectId) {
  return parseInt(objectId.slice(0, 8), 16) * 1000 + 
         Math.round(parseInt(objectId.slice(-6), 16) / 16777.216);
};