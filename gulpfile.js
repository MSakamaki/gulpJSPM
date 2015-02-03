'use strict';

var gulp = require('gulp');

require('gulp-load-plugins')();
require('require-dir')('./gulp/tasks');

// DEVELOPMENT TASKS
//================================================
// serve task
gulp.task('serve', [
    'browser-sync',
    'express'
  ]);

// Default
gulp.task('default', ['serve']);

