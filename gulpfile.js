'use strict';

var gulp = require('gulp');

require('gulp-load-plugins')();
require('require-dir')('./gulp/tasks');

// DEVELOPMENT TASKS
//================================================
var gulp = require('gulp');
var karma = require('karma').server;

// express(mock)
// Tests
gulp.task('test', function(done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});

// serve task
gulp.task('serve', [
    'browser-sync',
    'express'
  ]);

// Default
gulp.task('default', ['serve']);

