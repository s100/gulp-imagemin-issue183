var gulp = require('gulp');
var del = require('del');
var gulpImagemin = require('gulp-imagemin');

gulp.task('clean', function() {
  return del('./output');
});

gulp.task('default', ['clean'], function() {
  return gulp.src('./input/*')
    .pipe(gulpImagemin())
    .pipe(gulp.dest('./output'));
});
