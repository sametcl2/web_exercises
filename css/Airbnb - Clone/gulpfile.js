const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('sass', () => {
    return gulp.src('./style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./'))
})

gulp.task('serve', () => {
    browserSync.init({
        server: "./"
    });
    
    gulp.watch('./style.scss', gulp.series('sass')).on('change', browserSync.reload);
    gulp.watch('./index.html').on('change', browserSync.reload);
})

gulp.task('default', gulp.series('serve'))