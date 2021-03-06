module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      frontEnd: {
				options: {
					style: 'expanded'
				},
        src: ['sass/*.scss', '!sass/_*.scss' ],
        dest: 'style.css'
      },
    },
    watch: {
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass']);


};