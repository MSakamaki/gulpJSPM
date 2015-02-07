/*jslint node: true */
'use strict';

var gulp = require('gulp');

// Test の命名再定義
gulp.task('test', function(done) {
    gulp.run('test:unit',done);
    gulp.run('test:e2e',done);
});

gulp.task('test:unit',['karma']);
gulp.task('test:e2e',['protractor']);