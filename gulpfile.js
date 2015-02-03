'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var server = require('gulp-express');

// DEVELOPMENT TASKS
//================================================

// BrowserSync Server
gulp.task('browser-sync', function() {
  browserSync.init([
    './client/app/**/*.js',
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
gulp.task('serve', [
    'browser-sync',
    'express'
  ] , function(cb) {});

// Default
gulp.task('default', ['serve']);

// express(mock)
gulp.task('express', function(){
  server.run({
    file: './server/app.js'
  });
});
