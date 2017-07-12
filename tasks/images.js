import gulp from 'gulp';
import config from '../config';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import size from 'gulp-size';
import changed from 'gulp-changed';
import browser from './browser';

// IMAGES
// ------------------
// compressing images (unless they already got compressed)
gulp.task('images', () => {
  return gulp
    .src(`${config.assets.source}/images/**/*.+(png|jpg|jpeg|gif|svg)`)
    .pipe(changed(`${config.assets.build}/images`))
    .pipe(
      imagemin({
        progressive: true,
        use: [pngquant()]
      })
    )
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest(`${config.assets.build}/images`))
    .pipe(browser.stream());
});
