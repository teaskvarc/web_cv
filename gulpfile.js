var gulp        = require('gulp');
var cssmin      = require('gulp-cssmin');
var rename      = require('gulp-rename');
var coffee      = require('gulp-coffee');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var imagemin    = require('gulp-imagemin');
var sourcemaps  = require('gulp-sourcemaps');
var del         = require('del');
var useref      = require('gulp-useref');

gulp.task('test', function () {

    console.log('I am learning');
});

gulp.task('css', function () {
   return gulp.src('css/**/*.css')
       .pipe(cssmin())
       .pipe(rename({ suffix: '.min'}))
       .pipe(gulp.dest('dist'))

});

gulp.task('useref', function () {
    return gulp.src('**/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'))
});



gulp.task('watch', function () {
   gulp.watch('css/**/*.css', ['css']);
    
});