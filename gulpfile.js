'use strict';

var gulp = require('gulp');
var argv = require("yargs").argv;

require('gulp-load-plugins')();
require('require-dir')('./gulp/tasks');

// DEVELOPMENT TASKS
//================================================
var gulp = require('gulp');
var karma = require('karma').server;

// Tests
// --case= : e2e  : e2e  test
//           else : unit test
gulp.task('test', function(done) {
  if (argv.case === 'e2e'){
    gulp.run('test:e2e',done);
  }else {
    karma.start({
      configFile: __dirname + '/karma.conf.js'
    }, done);
  }
});

//================================================

// Default
gulp.task('default', ['serve']);