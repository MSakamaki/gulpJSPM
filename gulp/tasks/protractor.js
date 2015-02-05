var gulp = require('gulp');
var gprot = require("gulp-protractor");
var protractor = gprot.protractor;
var webdriver_standalone = gprot.webdriver_standalone;
var webdriver_update = gprot.webdriver_update;

gulp.task('webdriver_update', webdriver_update);
gulp.task('webdriver_standalone', webdriver_standalone);

gulp.task('test:e2e', [
  'webdriver_update',
  'browser-sync:test',
  'express'],
  function(done) {
  
  gulp.src(['./e2e/**/*.spec.js']).pipe(protractor({
    configFile: './protractor/protractor.conf.js',
  })).on('error', function(e) {
    console.log(e)
    gulp.run('browser-sync:exit');
  }).on('end', function(){
    gulp.run('browser-sync:exit');
    done();
  });        
});