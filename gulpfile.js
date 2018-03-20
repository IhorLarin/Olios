var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglifyJS = require('gulp-uglifyjs');
var cssNano = require('gulp-cssnano');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');

gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer(['last 10 versions'], {cascade: true}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('min-js', function () {
  return gulp.src([
    'app/libs/jquery/dist/jquery.js'
    // добавити необхідні js-бібліотеки...
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglifyJS())
    .pipe(gulp.dest('app/js'))
});

gulp.task('min-css', ['sass'], function () {
  return gulp.src('app/css/libs.css')
    .pipe(cssNano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'))
});

gulp.task('icomoonFontsCopy', function () {
  return gulp.src('app/libs/icomoon/fonts/*.*')
    .pipe(gulp.dest('app/fonts'));
});

gulp.task('clean', function () {
  return del.sync('dist');
});

gulp.task('build', ['min-css', 'min-js'], function () {

  var buildCSS = gulp.src([
    'app/css/libs.css',
    'app/css/style.css'
  ])
    .pipe(gulp.dest('dist/css'));


  var buildJS = gulp.src([
    'app/js/libs.min.js',
    'app/js/main.js'
  ])
    .pipe(gulp.dest('dist/js'));


  var buildHTML = gulp.src('app/index.html')
    .pipe(gulp.dest('dist'));


  var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));


  var buildImg = gulp.src('app/img/**/*')
    .pipe(gulp.dest('dist/img'));

});





gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  })
});

gulp.task('watch', ['browserSync', 'min-css', 'icomoonFontsCopy'], function () {
  gulp.watch('app/sass/**/*.sass', ['sass']);
  gulp.watch('app/index.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);




