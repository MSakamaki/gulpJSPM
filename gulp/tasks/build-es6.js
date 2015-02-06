var gulp = require('gulp');
var config = require('../gulp.config');

// es6 converter
var to5 = require('gulp-6to5');
var traceur = require('gulp-traceur');

gulp.task('build-es6:e2e', ['clean:e2e'], function(){
  return gulp.src('./e2e/*.js')
    .pipe(((config.System.transpiler === '6to5')?to5:traceur)())
    .pipe(gulp.dest('./.tmp/e2e'));
});
