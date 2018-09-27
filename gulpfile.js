const gulp = require('gulp');

const minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const envs = {
    production: 'production',
    development: 'development'
};

const getCssPipes = (env) => {
    let src = gulp.src('assets/styles/**/*');
    let destPath = 'public/assets/styles';
    if (env === envs.production) {
        return src
            .pipe(minifyCSS())
            .pipe(gulp.dest(destPath));
    } else {
        return src
            .pipe(gulp.dest(destPath));
    }
}

const getJsPipes = (env) => {
    let src = gulp.src('assets/scripts/**/*.js');
    let destPath = 'public/assets/scripts';
    if (env === envs.production) {
        return src.pipe(sourcemaps.init())
            .pipe(concat('app.min.js'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(destPath));
    } else {
        return src.pipe(gulp.dest(destPath));
    }
}

gulp.task('clean', () => {
    return gulp.src(
        'public/assets',
        { read: false }
    ).pipe(clean());
});

gulp.task('css', () => {
    return getCssPipes();
});

gulp.task('js', () => {
    return getJsPipes();
});

gulp.task('image', () => {
    let src = gulp.src('images/**/*');
    let destPath = 'public/images';
        return src
            .pipe(gulp.dest(destPath));
});

gulp.task('default', ['clean'], () => {
    gulp.start(['css', 'js', 'image']);
});
