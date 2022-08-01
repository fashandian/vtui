const { src, dest, series } = require('gulp');
// gulp postcss plugin
const gulpPostcss = require('gulp-postcss');
// browser compatibility prefix
const autoprefixer = require('autoprefixer');
// code compression
const cssnano = require('cssnano');
const less = require('gulp-less');
const through2 = require('through2');
const globalVarsLess = require('./globalVarsOfLess');

function css() {
    const globalVarsContent = Object.keys(globalVarsLess).map(item => `@${item}: ${globalVarsLess[item]};`).join('');
    const plugins = [
        autoprefixer(),
        // cssnano()
    ];
    return src('src/styles/*.less')
        .pipe(through2.obj(function (chunk, enc, callback) {
            // add the global variable of less
            let file = chunk.contents.toString();
            file = globalVarsContent + file;
            chunk.contents = Buffer.from(file);
            // add chunk content
            this.push(chunk);
            callback();
        }))
        .pipe(less())
        .pipe(gulpPostcss(plugins))
        .pipe(dest('lib/styles'))
}

exports.default = series(css);