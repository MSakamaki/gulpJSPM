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
//           unit : unit test
//           else : unit and e2e test
gulp.task('test', function(done) {
  if (argv.case === 'e2e'){
    gulp.run('test:e2e',done);
  }else if(argv.case === 'unit'){
    gulp.run('test:unit',done);
  }else {
    gulp.run('test:unit',done);
    gulp.run('test:e2e',done);
  }
});

gulp.task('test:unit', function(done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});

//================================================

// Default
gulp.task('default', ['serve']);