const gulp     = require('gulp');
const gulpSass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function sass (){

    return gulp.src('sea/scss/sea.scss')
               .pipe(gulpSass())
               .pipe(gulp.dest('sea/css'))
}


function watch(){ 

  return  gulp.watch('sea/scss/sea.scss',  gulp.series(sass)).on('change', browserSync.reload);
};

function browSync() {
  browserSync.init({
      server: {
          baseDir: "./sea"
      }
  });
};



exports.sass  = sass;
exports.watch = watch;
exports.server = gulp.series( sass, gulp.parallel(watch, browSync));