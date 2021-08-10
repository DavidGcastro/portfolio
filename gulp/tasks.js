var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssImport = require('postcss-import');
var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested');
var cssnano = require('cssnano');
var simpleVars = require('postcss-simple-vars');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var mixins = require('postcss-mixins');

function htmlBuild () {
    return gulp.src('../app/index.html').pipe(gulp.dest('../dist/'));
}

function cssBuild () {
    return gulp
        .src('../app/styles/temp/source.css')
        .pipe(gulp.dest('../dist/styles/temp/'));
}

function jsBuild () {
    return gulp.src('../app/js/main.js').pipe(gulp.dest('../dist/js/'));
}

function faviconBuild () {
    return gulp
        .src('../app/favicons.ico/*')
        .pipe(gulp.dest('./dist/favicons.ico/'));
}

function imagemin() {
    return gulp
        .src('../app/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('../temp/images'))
}

function styles () {
    var postcss_stuff = [
        cssImport,
        mixins,
        nested,
        autoprefixer,
        cssnano,
        simpleVars,
        imagemin
    ];

    return gulp
        .src('../app/styles/source.css')
        .pipe(postcss(postcss_stuff))
        .pipe(gulp.dest('../app/styles/temp/'));
}

function scripts() {
    return gulp
        .src('../app/js/scripts/*js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('../app/js/'));
}

function injectStyles() {
    return gulp.src('../app/styles/temp/source.css').pipe(browserSync.stream());
}


module.exports = {
    htmlBuild,
    cssBuild,
    jsBuild,
    faviconBuild,
    styles,
    scripts,
    imagemin,
    injectStyles,
}