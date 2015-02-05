'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var defaultSyncFile = [
    './client/app/**/*.js',
    './client/app/**/*.css',
    './client/**/*.html'
  ];
var defaultSyncOption = {
      notify: true,
      server: {
        baseDir: ['./client']
      },
      port: 9000,
      // firefox, google chrome, 
      browser: ['google chrome'],
      tunnel: false
    };

gulp.task('browser-sync', function() {
  browserSync.init(defaultSyncFile,defaultSyncOption);
});

gulp.task('browser-sync:test', function() {
  browserSync.init(defaultSyncFile,{
      notify: false,
      open: false,
      server: {
        baseDir: ['./client']
      },
      port: 9000,
    });
});

gulp.task('browser-sync:exit', function() {
  browserSync.exit();
});