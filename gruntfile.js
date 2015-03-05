var autoprefixer = require('autoprefixer-core');


module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {
          'build/style.css': 'sass/style.scss'
        }
      }
    },

    postcss: {
      options: {
        processors: [
        autoprefixer({ browsers: ['last 2 version'] }).postcss
        ]
      },
      dist: { src: 'build/style.css', dest: 'style.css' }
    },


    watch: {

      sass: {
        files: ['sass/style.scss'],
        tasks: ['sass'], // ['autoprefixer']
        options: {
          livereload: false,
        },
      }, //end scss

      css: {
        files: ['build/style.css'],
        tasks: ['postcss'],
        options: {
          livereload: false,
        },
      }, //end scss

      reload: {
        files: ['style.css'],
        options: {
          livereload: true,
        },
      }, //end scss

      html: {
        files: ['*.html'],
        tasks: [],
        options: {
          livereload: true,
        }
      } //end all
    } // end watch
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');

  //grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};