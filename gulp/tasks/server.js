'use strict';

var gulp = require('gulp');

gulp.task('serve', [
  'lint',
  'browser-sync',
  'express'
]);