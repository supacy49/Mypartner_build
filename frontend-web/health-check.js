"use strict";
const MyChannelLogger = require("mychannel-logger");
MyChannelLogger.writeEmptyLog({
    path: process.env.LOG_PATH,
    rotateTime: process.env.LOG_ROTATE_TIME,
    serviceNames: JSON.parse(process.env.SERVICE_NAMES)
},true);
