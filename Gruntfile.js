module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify:{
            my_target: {
              files: {
                // desc: src
                'js/build/jQuery.min.js': 'js/jQuery.js',
                'js/build/helper.min.js' : 'js/helper.js',
                'js/build/resumeBuilder.min.js' : 'js/resumeBuilder.js'
              }
            }
        },

        cssmin: {
          target: {
            files: {
              'css/style.min.css': 'css/style.css'
            }
          }
        },

        htmlmin: {                                     // Task
          dist: {                                      // Target
            options: {                                 // Target options
              removeComments: true,
              collapseWhitespace: true
            },
            files: {                                   // Dictionary of files
             'index.html': 'src/index.html',     // 'destination': 'source'
            }
          }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uglify','cssmin','htmlmin']);

};