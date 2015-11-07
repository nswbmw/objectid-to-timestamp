'use strict';

module.exports = function objectIdToTimestamp(objectId) {
  return parseInt(objectId.slice(0, 8), 16) * 1000 +
    // to convert between 0x000001 ~ 0xffffff to
    // something between 1 ~ 999
    Math.round(
        parseInt(objectId.slice(-6), 16) /
        parseInt('1000000', 16) * 1000
    );
};
