'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify');

var path = {
  build: {
    css: 'build/css/',
    img: 'build/img/',
    js: 'build/js/'
  },
  src: {
    style: 'src/scss/main.scss',
    img: 'src/img/**/*.*',
    js: 'src/js/*.js'
  },
  watch: {
    style: 'src/scss/**/*.scss'
  }
};

gulp.task('style:build', function(){
  gulp.src(path.src.style)
    .pipe(plumber())
    .pipe(sass({includePaths: require('node-normalize-scss').includePaths})
      .on('error', function(err){
      console.log("error: " + err.message);
      this.emit('end');
    }))
    .pipe(prefixer({
      browsers: ['last 2 versions', 'IE 10']
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(path.build.css));
});

gulp.task('image:build', function(){
  gulp.src(path.src.img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest(path.build.img))
});

gulp.task('js:build', function() {
  gulp.src(path.src.js)
    .pipe(uglify())
    .pipe(gulp.dest(path.build.js));
});

gulp.task('build', [
  'style:build'
]);

gulp.task('watch', function() {
  watch([path.watch.style], function(event, cb) {
    gulp.start('style:build');
  });
});

gulp.task('default', ['build', 'watch']);
