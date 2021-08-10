const {styles, imagemin, scripts, htmlBuild} = require('./tasks')
var gulp = require('gulp');


module.exports = gulp.series(htmlBuild, styles, imagemin, scripts)()


