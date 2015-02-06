// jspm config
var package_config = require('../package.json');

var System = require('systemjs');
require('../' + package_config.jspm.directories.baseURL + '/config.js');

module.exports = {
  System: {
    transpiler: System.transpiler
  },
  test:{
    e2e:{
      tmp: './.tmp/e2e',
      src: './e2e/**/*.js'
    }
  }
};