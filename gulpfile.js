var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var jade        = require('gulp-jade');
var concat      = require('gulp-concat');
var reload      = browserSync.reload;

/**
 * Compile jade files into HTML
 */
gulp.task('templates', function() {
    var YOUR_LOCALS = {};

    return gulp.src('./app/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty:true
    }))
    .pipe(gulp.dest('./dist/'))
});


gulp.task('jade-watch', ['templates'], reload);


gulp.task('sass', function () {
  return gulp.src('./app/scss/*.scss')
  .pipe(sass({
    style: 'expanded',
    sourceComments: 'normal'
  }))
  .pipe(gulp.dest('./dist/css'))
  .pipe(reload({stream: true}));
});


gulp.task('scripts', function () {
  return gulp.src(['./app/js/dev-config.js', './app/js/app.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js'));
});


gulp.task('sass-prod', function () {
  return gulp.src('./app/scss/*.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('./dist/css'))
  .pipe(reload({stream: true}));
});


/**
 * Serve and watch the scss/jade files for changes
 */
gulp.task('default', ['sass', 'scripts', 'templates'], function () {
    browserSync({server: './dist'});
    gulp.watch('./app/scss/*.scss', ['sass']);
    gulp.watch(['./app/*.jade','./app/includes/*.jade'],   ['jade-watch']);
    gulp.watch('./app/js/*.js',      ['scripts']);
});


gulp.task('prod', ['sass-prod', 'templates'], function () {
    browserSync({server: './dist'});
});
