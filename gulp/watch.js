var gulp = require('gulp');
var watch = require('gulp-watch');
const { scripts, styles } = require('./tasks');
var browserSync = require('browser-sync').create();
var path = require('path');
var sourceDir = path.resolve(__dirname + '/../app');

function injectStyles () {
    return gulp.src(sourceDir + '/styles/temp/source.css').pipe(browserSync.stream());
}

function cssInject () {
    return gulp.series(styles, injectStyles)();
}


function watchTask () {
    browserSync.init({
        server: {
            baseDir: sourceDir
        }
    });
    watch(sourceDir + '/index.html', function () {
        browserSync.reload();
    });

    watch(sourceDir + '/styles/modules/*.css', cssInject);

    watch(sourceDir + '/js/scripts/*js', function () {
        scripts();
        browserSync.reload();
    });
}

module.exports = watchTask();