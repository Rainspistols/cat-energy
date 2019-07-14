var gulp = require("gulp"),
  sass = require("gulp-sass"),
  watch = require("gulp-watch"),
  imagemin = require('gulp-imagemin'),
  autoprefixer = require('autoprefixer'),
  postcss = require('gulp-postcss'),
  csso = require('gulp-csso'),
  rename = require("gulp-rename"),
  del = require("del");


gulp.task('styles', function () {
  return gulp.src('app/sass/**/*.scss')
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(['last 15 versions'])
    ]))
    .pipe(gulp.dest("app/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("app/css"));
});


gulp.task('img', function () {
  return gulp.src("app/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.svgo({
        plugins: [{
            removeViewBox: true
          },
          {
            cleanupIDs: false
          }
        ]
      })
    ]))
    .pipe(gulp.dest("docs/img"));
});

gulp.task('copy', function () {
  return gulp.src([
      "app/fonts/**/*.{woff,woff2}",
      "app/js/**",
      "app/pages/*.html",
      "app/*.html",
      "app/css/*.css",
      "app/css/*.min.css"
    ], {
      base: "app"
    })
    .pipe(gulp.dest("docs"));
});

gulp.task('clean', function () {
  return del('docs');
});

gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("docs/css"));
})

gulp.task('watch', function () {
  gulp.watch('app/sass/**/*.scss', gulp.series('styles'));
});

gulp.task("docs", gulp.series('clean','styles', 'copy', 'img'));
