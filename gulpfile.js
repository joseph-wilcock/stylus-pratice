var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var stylus = require('gulp-stylus');
var lost = require('lost');
var cssnano = require('cssnano');

//////////////////////////////
// Stylus Tasks
//////////////////////////////
gulp.task('stylus', function () {
    var processors = [
        lost,
        autoprefixer({browsers:['last 2 versions']}),
        cssnano
    ];
    gulp.src('./src/assets/stylus/style.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/assets/css'));
});


gulp.task('watch', function(){
    gulp.watch('src/assets/stylus/**/*.styl', ['stylus']);
});
//
//gulp.task('default', ['watch']);
gulp.task('default', ['watch']);