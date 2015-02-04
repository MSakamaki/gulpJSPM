'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync.init([
    './client/app/**/*.js',
    './client/app/**/*.css',
    './client/**/*.html'
  ],
  {
    notify: true,
    server: {
      baseDir: ['./client']
    },
    port: 9000,
    // firefox, google chrome, 
    browser: ['google chrome'],
    tunnel: true
  });
});