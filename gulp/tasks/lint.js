'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint', function() {
  return gulp.src([
    'client/app/**/*.js',
    'e2e/**/*.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
