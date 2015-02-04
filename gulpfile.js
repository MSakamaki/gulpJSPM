'use strict';

var gulp = require('gulp');

require('gulp-load-plugins')();
require('require-dir')('./gulp/tasks');

// DEVELOPMENT TASKS
//================================================
var gulp = require('gulp');
var karma = require('karma').server;

// express(mock)
// Tests
gulp.task('test', function(done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});

// serve task
gulp.task('serve', [
    'browser-sync',
    'express'
  ]);

// Default
gulp.task('default', ['serve']);


/***************************************/

var gprot = require("gulp-protractor");
var protractor = gprot.protractor;
var webdriver_standalone = gprot.webdriver_standalone;
var webdriver_update = gprot.webdriver_update;

gulp.task('webdriver_update', webdriver_update);
gulp.task('webdriver_standalone', webdriver_standalone);

gulp.task('p', ['webdriver_update'], function(cb) {
    gulp.src(['./e2e/sample.spec.js']).pipe(protractor({
        configFile: './protractor/protractor.conf.js',
    })).on('error', function(e) {
        console.log(e)
    }).on('end', cb);        
});