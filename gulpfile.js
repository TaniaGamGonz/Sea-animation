const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src('sea/scss/**.scss')
    .pipe(sass())
    .pipe(gulp.dest('sea/css'))
});


gulp.task('watch', () =>{ 
  return  gulp.watch('sea/scss/sea.scss',  gulp.series('sass'))
});