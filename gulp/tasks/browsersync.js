/*jslint node: true */
'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../gulp.config');

var defaultSyncFile = [
    './client/app/**/*.js',
    './client/app/**/*.css',
    './client/**/*.html'
  ];

gulp.task('browser-sync', function() {
  browserSync.init(defaultSyncFile,{
      notify: true,
      server: {
        baseDir: ['./client']
      },
      port: 9000,
      // firefox, google chrome, 
      browser: ['google chrome'],
      tunnel: false
    });
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

gulp.task('browser-sync:doc', function() {
  browserSync.init(['./doc/**/*'],{
      notify: false,
      open: true,
      server: {
        baseDir: ['./doc']
      },
      port: 9002,
    });
  gulp.watch(config.app.js, ['doc:gen']);
});


gulp.task('browser-sync:exit', function() {
  browserSync.exit();
});