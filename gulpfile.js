var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('connect', ()=>{
  connect.server({
    root: 'build',
    livereload: true
  });
});



gulp.task('html', function(){
  return gulp.src('src/templates/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload());
  });



gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'))
    .pipe(connect.reload());

  });


gulp.task('js',()=>{
  gulp.src('./src/js/*.js')
      .pipe(gulp.dest('./build/js'))
      .pipe(connect.reload());
});
  
  
gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.sass', ['sass']);
  gulp.watch('./src/templates/*.pug',['html']);
  gulp.watch('./src/js/**/*.js',['js']);
});


gulp.task('default', [ 'watch' ,'connect' ]);