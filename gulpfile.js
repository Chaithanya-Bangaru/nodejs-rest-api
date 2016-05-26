/**
 * Created by xprk689 on 5/23/2016.
 */
var gulp = require('gulp'),
nodemon = require('gulp-nodemon');

gulp.task('default', function () {
    nodemon({
        script : 'app.js',
        ext : 'js',
        env: {
            PORT: 9000,

        },
        ignore: './node_modules/**'
    })
    .on('restart', function () {
        console.log('restarting..');
    })
});