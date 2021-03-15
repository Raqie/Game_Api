const path = require('path')
const child_process = require("child_process");
module.exports = async () => {
    global.server = child_process.fork(path.join(path.dirname(__dirname), './index.js') )
  };