const webpack = require('webpack')
const path = require('path')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
  }

module.exports = {
    images: true,
    fonts: true,
    static: true,
    svgSprite: true,
    ghPages: false,
    stylesheets: true,

    html: {
        extensions: ['twig', 'php', 'html'],
        alternateTask: function(gulp, PATH_CONFIG, TASK_CONFIG) {
            const browserSync    = require('browser-sync')
            const path           = require('path')
            const handleErrors   = require('./../node_modules/blendid/gulpfile.js/lib/handleErrors')

            return function(){
                const exclude = '!' + path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.html.src, '**/{' + TASK_CONFIG.html.excludeFolders.join(',') + '}/**')
                const paths = {
                    src: [path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.html.src, '**/*.{' + TASK_CONFIG.html.extensions + '}'), exclude],
                    dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.html.dest),
                }

                return gulp.src(paths.src)
                    .on('error', handleErrors)
                    .pipe(gulp.dest(paths.dest))
                    .on('end', browserSync.reload)
            }
        }
    },

    javascripts: {
        entry: {
            app: ["./app.js"]
        },
        extensions: ['*', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('app'),
        },
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            query: {
                "presets": ["es2015", "stage-1"]
            }
        }],
        provide: {
            $: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery',
            jQuery: 'jquery',
        }
    },

    browserSync: {
        proxy: {
            target: ""
        }
    },

    production: {
        rev: false
    }
}
