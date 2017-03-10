/**
 * Created by ehigginsiii on 3/9/17.
 */
var gulp = require('gulp');
var scp = require('gulp-scp');

gulp.task('scp', function(){
    gulp.src('dist/*')
        .pipe(scp({
            host: '67.205.191.196',
            user: 'root',
            port: 22,
            path: '/var/www/boodysuperpower.com/public_html'
        }))
})
