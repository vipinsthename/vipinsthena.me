module.exports = function(grunt) {

  grunt.initConfig({
    aws: grunt.file.readJSON('aws.json'),

    clean: ['public'],

    s3: {
      options: {
        key: '<%= aws.key %>',
        secret: '<%= aws.secret %>',
        bucket: '<%= aws.bucket %>',
        access: 'public-read'
      },

      all: {
        upload: [{
          dest: '',
          src: 'public/**/*',
          rel: 'public/'
        }]
      },

      css: {
        upload: [{
          dest: '',
          src: 'public/**/*.css',
          rel: 'public/',
          options: {
            headers: {
              'Content-Type': 'text/css'
            }
          }
        }]
      },

      html: {
        upload: [{
          dest: '',
          src: 'public/**/*.html',
          rel: 'public/',
          options: {
            headers: {
              'Content-Type': 'text/html; charset=utf-8'
            }
          }
        }],
      },

      js: {
        upload: [{
          dest: '',
          src: 'public/**/*.js',
          rel: 'public/',
          options: {
            headers: {
              'Content-Type': 'text/javascript'
            }
          }
        }]
      }
    },

    shell: {
      generate: {
        command: 'hexo generate'
      },

      server: {
        command: 'hexo server'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-s3');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('generate', ['clean', 'shell:generate']);
  grunt.registerTask('server', ['shell:server']);
  grunt.registerTask('deploy', ['generate', 's3']);
  grunt.registerTask('default', ['server']);
};