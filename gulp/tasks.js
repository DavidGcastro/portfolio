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
var path = require('path');
var sourceDir = path.resolve(__dirname + '/../app');
var root = path.resolve(__dirname + '/../');
function htmlBuild () {
    return gulp.src(sourceDir + '/index.html').pipe(gulp.dest(root + '/dist/'));
}

function cssBuild () {
    return gulp
        .src( sourceDir + '/styles/temp/source.css')
        .pipe(gulp.dest(root + '/dist/styles/temp/'));
}

function jsBuild () {
    return gulp.src(sourceDir + '/js/main.js').pipe(gulp.dest(root + '/dist/js/'));
}

function faviconBuild () {
    return gulp
        .src(sourceDir + '/favicons.ico/*')
        .pipe(gulp.dest(root + '/dist/favicons.ico/'));
}

function imagemin() {
    return gulp
        .src(sourceDir + '/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest(root + '/temp/images'))
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
        .src(sourceDir + '/styles/source.css')
        .pipe(postcss(postcss_stuff))
        .pipe(gulp.dest(root + '/styles/temp/'));
}

function scripts() {
    return gulp
        .src(sourceDir + '/js/scripts/*js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(root + '/js/'));
}

function injectStyles() {
    return gulp.src(sourceDir + '/styles/temp/source.css').pipe(browserSync.stream());
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