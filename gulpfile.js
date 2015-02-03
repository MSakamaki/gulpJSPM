'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

// DEVELOPMENT TASKS
//================================================

// BrowserSync Server
gulp.task('browser-sync', function() {
  browserSync.init([
    './client/app/**/*.jss',
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

// serve task
gulp.task('serve', ['browser-sync'] , function(cb) {});

// Default
gulp.task('default', ['serve']);
