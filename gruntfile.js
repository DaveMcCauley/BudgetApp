

// our wrapper function
module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // configure grunt
  grunt.initConfig({

   //pull config info from package.json
    pkg: grunt.file.readJSON('package.json'),
    // all configuration goes here




    // configure jshint
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      // lint everything in src except external libraries
      prod: ['Gruntfile.js','src/**/*.js','!src/assets/lib/**/*.js']
    },




    // configure uglify
    uglify: {

      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
        mangle: true
      },

      prod: { // in-house files
        files: {
          //TODO: assign wildcards?
          //'dist/js/magic.min.js':'src/js/magic.js',
          //'dist/js/test.js':'src/js/test.js'
          //'dist/js/budgetapp.min.js': ['src/js/magic.js','src/js/test.js']
          'public/app/core.js' : ['src/**/*.js','!src/assets/lib/**/*.js']
        }
      },

      libraries: { // libraries
        files: [{
          expand  : true,                // allow dynamic build
          cwd     : 'src/assets/lib',    // curernt working dir
          source  : '**/*.js',           // source files (if tis failes, it's src)
          dest    : 'public/assets/lib', // destination
          flatten : true,                // remove all uncessary nexting
          ext     : '.min.js'            // replace .js to .min.js
        }]
      }
    },




    less: {

      dev: {
        files: [{  // for development, keep individual css files
          //'dist/css/Budgetapp.css' : 'src/less/test.less'
          //'dist/css/Budgetapp.css' : ['src/less/test.less','src/less/test2.less']
          // 'dist/**/*.css' : 'src/**/*.less' << DOES NOT wORK
          // for 1:1 Wildcards only work on RIGHT SIDE
          expand : true,              // allow dynamic build
          cwd    : 'src/assets/css',
          src    : '**/*.less',
          dest   : 'src/assets/css',
          ext    : '.css'
        }],
      },

      prod: {   // for production, compile to singel otput file.
        files: {
          'public/assets/css/budgetapp.css' : 'src/assets/css/**/*.less'
          }
      }
    },




    cssmin: {

      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },

      prod: { //minimze the conatenated file.
        files: {
          'public/assets/css/budgetapp.css' : 'public/assets/css/budgetapp.css' //< works!
        }
      }
    },




    // configure autoprefixing for compiled output css
    autoprefixer: {

      options: {
        browsers: [
          'Android 2.3',
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 24', // Firefox 24 is the latest ESR
          'Explorer >= 8',
          'iOS >= 6',
          'Opera >= 12',
          'Safari >= 6'
        ]
      },

      dev: {
        expand : true,
        cwd    : 'src/assets/',
        src    : ['css/**/*.css'],
        dest   : 'src/assets/'
      },

      prod: {
        expand : true,
        cwd    : 'src/assets/',
        src    : ['css/**/*.css'],
        dest   : 'public/assets/'
      }
    },




    csslint: {

      dev_strict: {
        options: {
          import: false
        },
        src: ['src/assets/css/*.css']
      },

      dev_lax : {
        options: {
          csslintrc: '.csslintrc'
        },
        src: ['src/assets/css/*.css']
      },

      prod_strict: {
        options : {
          import : false
        },
        src : ['public/assets/css/*.css']
      },

      prod_lax: {
        options: {
          csslintrc : '.csslintrc'
        },
        src: ['public/assets/css/*.css']
      }
    },



    open: {
      server: {
        path: 'http://localhost/budgetapp/',
        //app: 'Google Chrome'
      }
    },



    // clean out a path
    clean: {
      src: 'public/**/*.*'
    },



    // copy files into dist directory
    copy: {
      build: {
        // For usage :: https://www.npmjs.com/package/grunt-contrib-copy
        files: {
          // 'desitination': 'source'
        }
      }
    },



    // conc files together
    concat: {
      dist: {
        // if some scripts depend upon eachother,
        // make sure to list them here in order
        // rather than just using the '*' wildcard.
        // src: [BUILD_DIR_JS + '*.js'],
        // dest: BUILD_FILE_JS

        //for multiples...
        //files: {
        //  'dist/basic.js': ['src/main.js'],
        //  'dist/with_extras.js': ['src/main.js', 'src/extras.js'],
        //},
      }
    },



    imagemin: {
      dynamic: {
        options:  {
          optimizationLevel: 7,
          svgoPlugins: [{ removeViewBox: false}],
          style: 'expanded'

        },

        files: [{
            expand: true,
            cwd: 'src/assets/img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'publc/assets/img/'
        }]
      }
    },




    htmlmin: {

      prod: {

        options: {
          removeComments: true,
          collapseWhitespace: true
        },

        files: [{
            expand: true,
            cwd: 'src/',
            src: ['**/*.html'],
            dest: 'public/'
        }]


      },

      dev: {
        files: {
          // 'destination': 'source'

        }
      }

    },




    watch: {
      stylesheets: {
        files: ['src/**/*.css','src/**/*.less'],
        tasks: ['less:dev','csslint:dev_lax','autoprefixer:dev']
      },
      scripts: {
        files: 'src/**/*.js',
        tasks: ['jshint']
      }
    },



    targethtml : {
      prod: {
        files: {
          // desitination : source
          'public/index.html' : 'src/index.html'
          // add as necessary...
        }
      }
    },



    notify : {

      notify_hooks: {
        options: {
          enabled: true,
          max_jshint_notifications: 5, // maximum number of notifications from jshint output
          title: "UngaBunga its BudgetApp!", // defaults to the name in package.json, or will use project directory's name
          success: true, // whether successful grunt executions should be notified automatically
          duration: 3 // the duration of notification in seconds, for `notify-send only
        }
      },

      fini: {
        options: {
          title: 'GRUNT*SNORT*',  // optional
          message: 'Grunt has finished.', //required
        }
      },

    }

  });

  // https://www.npmjs.com/package/grunt-newer
  // https://github.com/htmllint/grunt-htmllint
  // https://24ways.org/2013/grunt-is-not-weird-and-hard/

  // create the tasks
  grunt.registerTask('default',['jshint','uglify','less','cssmin']);
  grunt.registerTask('uglyonly',['uglify']);
  grunt.registerTask('production',['jshint','uglify','less','cssmin:production']);

  //load grunt plugins
  /* depricated: now using load-grunt-tasks plugin
  /*grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');*/


};