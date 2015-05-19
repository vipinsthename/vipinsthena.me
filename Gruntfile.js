module.exports = function(grunt) {

  grunt.initConfig({

    clean: ['public'],

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
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('generate', ['clean', 'shell:generate']);
  grunt.registerTask('server', ['shell:server']);
  grunt.registerTask('default', ['server']);
};