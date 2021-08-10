var gulp = require('gulp');
var series = gulp.series;
var { cssBuild, jsBuild, faviconBuild, htmlBuild } = require('./tasks');

//copy html to dist - BUILD
module.exports = series(cssBuild, jsBuild, faviconBuild, htmlBuild)();



