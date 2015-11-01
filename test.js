'use strict';

var assert = require('assert');
var objectIdToTimestamp = require('./');

assert.equal(objectIdToTimestamp('563229dd1ee6030100644cbe'), 1446128093392);
assert.equal(objectIdToTimestamp('563228c91ee6030100644cbc'), 1446127817392);
assert.equal(objectIdToTimestamp('55d700442a333f2f0a5b8e74'), 1440153668358);