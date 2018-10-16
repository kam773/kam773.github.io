var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var htmlReplace = require('gulp-html-replace');
var htmlMin = require('gulp-htmlmin');
var del = require('del');
var sequence = require('run-sequence');
var realFavicon = require ('gulp-real-favicon');
var fs = require('fs');


// Server
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: 'src'
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch('src/sass/**/*.scss', ['sass']);
});

// Compile SASS to CSS
gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
               .pipe(sass().on('error', sass.logError))
               .pipe(autoprefixer({
                browsers: ['last 3 versions']
               }))
               .pipe(gulp.dest('src/css'))
               .pipe(browserSync.stream());
});


var FAVICON_DATA_FILE = 'faviconData.json';

gulp.task('generate-favicon', function(done) {
	realFavicon.generateFavicon({
		masterPicture: './src/favicon/',
		dest: './dist/favicon',
		iconsPath: '/',
		design: {
			ios: {
				pictureAspect: 'noChange',
				assets: {
					ios6AndPriorIcons: false,
					ios7AndLaterIcons: false,
					precomposedIcons: false,
					declareOnlyDefaultIcon: true
				}
			},
			desktopBrowser: {},
			windows: {
				pictureAspect: 'noChange',
				backgroundColor: '#da532c',
				onConflict: 'override',
				assets: {
					windows80Ie10Tile: false,
					windows10Ie11EdgeTiles: {
						small: false,
						medium: true,
						big: false,
						rectangle: false
					}
				}
			},
			androidChrome: {
				pictureAspect: 'noChange',
				themeColor: '#ffffff',
				manifest: {
					display: 'standalone',
					orientation: 'notSet',
					onConflict: 'override',
					declared: true
				},
				assets: {
					legacyIcon: false,
					lowResolutionIcons: false
				}
			},
			safariPinnedTab: {
				pictureAspect: 'blackAndWhite',
				threshold: 50,
				themeColor: '#5bbad5'
			}
		},
		settings: {
			scalingAlgorithm: 'Mitchell',
			errorOnImageTooSmall: false,
			readmeFile: false,
			htmlCodeFile: false,
			usePathAsIs: false
		},
		markupFile: FAVICON_DATA_FILE
	}, function() {
		done();
	});
});

gulp.task('inject-favicon-markups', function() {
	return gulp.src(['./src/*.html'])
		.pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
		.pipe(gulp.dest('./dist/*.html'));
});


gulp.task('check-for-favicon-update', function(done) {
	var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
	realFavicon.checkForUpdates(currentVersion, function(err) {
		if (err) {
			throw err;
		}
	});
});


gulp.task('css', function() {
    return gulp.src('src/css/**/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));

});

gulp.task('js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));

});

gulp.task('img', function() {
    return gulp.src('src/img/**/*.{jpg,jpeg,png,gif}')
        .pipe(changed('dist/img'))
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));

});

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlReplace({
            'css': 'css/main.css',
            'js': 'js/script.js'
        }))
        .pipe(htmlMin({
            sortAttributes: true,
            sortClassName: true
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('fonts', function() {
    return gulp.src('src/fonts/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('clean', function() {
    return del(['dist'])
});

gulp.task('build', function() {
    sequence('clean', ['html', 'js', 'css', 'img', 'fonts']);
});

gulp.task('default', ['serve']);