/*jslint node: true */
'use strict';

var gulp = require('gulp');

gulp.task('serve', [
  'lint',
  'browser-sync',
  'express'
]);

gulp.task('serve:test', [
  'serve',
  'browser-sync:exit'
]);