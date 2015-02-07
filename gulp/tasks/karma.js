/*jslint node: true */
'use strict';

var gulp = require('gulp');
var karma = require('karma').server;

gulp.task('karma', function(done) {
  karma.start({
    configFile: global.appRoot + '/karma/karma.conf.js'
  }, done);
});

gulp.task('karma:cov', function(done) {
  karma.start({
    configFile: global.appRoot + '/karma/karma.coverage.conf.js'
  }, done);
});
