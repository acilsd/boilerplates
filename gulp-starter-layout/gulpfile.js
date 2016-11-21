'use strict';
/*eslint no-console: "off"*/
const gulp            = require('gulp');
const  gutil          = require('gulp-util' );
const  sass           = require('gulp-sass');
const  browserSync    = require('browser-sync');
const  cleanCSS       = require('gulp-clean-css');
const  del            = require('del');
const  imagemin       = require('gulp-imagemin');
const  pngquant       = require('imagemin-pngquant');
const  cache          = require('gulp-cache');
const  autoprefixer   = require('gulp-autoprefixer');
const  fileinclude    = require('gulp-file-include');
const  gulpRemoveHtml = require('gulp-remove-html');
const  notify         = require("gulp-notify");

const path = {
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

//choose the right directory to sevre static files
//i prefer the build one (or [public], does not matter)
gulp.task('browser-sync', function() {
  browserSync({
    // server: true,
    server: {
      baseDir: 'build'
    },
    notify: false
  });
});

// NOTE: compile our prepors stuff
gulp.task('sass', function() {
  return gulp.src(path.src.style)
		.pipe(sass({includePaths: require('node-normalize-scss').includePaths})
    .on("error", notify.onError()))
		.pipe(autoprefixer(['last 2 versions', 'IE 10']))
		.pipe(cleanCSS())
		.pipe(gulp.dest(path.build.css))
		.pipe(browserSync.reload({stream: true}));
});

// NOTE: main task, build scss => build images => watch'n'reload
gulp.task('watch', ['sass', 'imagemin', 'browser-sync'], function() {
  gulp.watch(path.src.style, ['sass']);
  gulp.watch('build/*.html', browserSync.reload);
});

// NOTE: build images
gulp.task('imagemin', function() {
  return gulp.src(path.src.img)
		.pipe(cache(imagemin({
  interlaced: true,
  progressive: true,
  svgoPlugins: [{removeViewBox: false}],
  use: [pngquant()],
})))
		.pipe(gulp.dest(path.build.img));
});

// NOTE: remove existing build __dirname
gulp.task('removedist', function() { return del.sync('build'); });

// NOTE: default build task
gulp.task('build', [
  'removedist',
  'imagemin',
  'sass',
]);

// NOTE: sometimes u need to clear cache, hue hue
gulp.task('clearcache', function () { return cache.clearAll(); });

// NOTE: '$ gulp' => profit
gulp.task('default', ['watch']);
