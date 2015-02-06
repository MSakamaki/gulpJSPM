var gulp = require('gulp');
var del = require('del');

gulp.task('clean:e2e', function (cb) {
  del([
    '.tmp/e2e/*'
  ], cb);
});
