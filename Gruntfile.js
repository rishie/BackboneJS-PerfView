module.exports = function( grunt ) {
  
  // Configuration goes here 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    
    jshint: {
      files: ['*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      global: {
        $: false,
        jQuery: false,
        Backbone: false,
        define: false,
        module: false,
        require: false,
        console: false,
        jasmine: false,
        Debug: false,
        Tracker: false
      }
    },
    
    uglify: {
        compress: {
          files: {
            'prefview.min.js': ['PerfView.js', 'ReuseView.js']
          }
        }
      }
    
  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // Define your tasks here
  grunt.registerTask('default', ['uglify']);
  
};