'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var glob = require('glob')

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the excellent ' + chalk.red('generator-weex-plugin-template') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'Project',
      default: 'weex-plugin-dev'
    },];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
      var tp = this.templatePath();

    var ExportProjectName = this.props.projectName.replace(/\-(\w)/g, function(all, letter){
      return letter.toUpperCase();
    });

    this.props.ExportProjectName = ExportProjectName.charAt(0).toUpperCase() + ExportProjectName.slice(1);

    var files = glob.sync(tp + '/**', {nodir: true});
      files.forEach(function (file) {
        if(!/\.(png|jpg|gif|jar|framework)/.test(file)){
          var source = file.slice(tp.length + 1);
          var destination = this.props.projectName + '/' + source.replace(/ExportProjectName/g, this.props.ExportProjectName);

          this.fs.copyTpl(
              tp + '/' + source,
              this.destinationPath(destination),
              this.props
          );
        }
        else{
          var source = file.slice(tp.length + 1);
          var destination = this.props.projectName + '/' + source.replace(/ExportProjectName/g, this.props.ExportProjectName);
          this.fs.copy(
              tp + '/' + source,
              this.destinationPath(destination)
          );
        }


      }, this);

  },

  install: function () {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  },
  end: function(){
    this.log("weex 插件工程已经创建完成")
  }
});
