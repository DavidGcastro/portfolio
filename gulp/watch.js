var gulp = require('gulp');
var watch = require('gulp-watch');
const { scripts, styles } = require('./tasks');
var browserSync = require('browser-sync').create();


function injectStyles () {
    return gulp.src('../app/styles/temp/source.css').pipe(browserSync.stream());
}

function cssInject () {
    return gulp.series(styles, injectStyles)();
}


function watchTask () {
    browserSync.init({
        server: {
            baseDir: '../app'
        }
    });
    watch('../app/index.html', function () {
        browserSync.reload();
    });

    watch('../app/styles/modules/*.css', cssInject);

    watch('../app/js/scripts/*js', function () {
        scripts();
        browserSync.reload();
    });
}

module.exports = watchTask();