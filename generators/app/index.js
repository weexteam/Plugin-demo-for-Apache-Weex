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
      default: 'MyProject'
    },];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
      var tp = this.templatePath();
      var files = glob.sync(tp + '/**', {nodir: true});
      files.forEach(function (file) {
        if(!/\.(png|jpg|gif|jar)/.test(file)){

          var ProjectName = this.props.projectName.replace(/\-(\w)/g, function(all, letter){
            return letter.toUpperCase();
          });

          this.props.ProjectName = ProjectName.charAt(0).toUpperCase() + ProjectName.slice(1);

          var source = file.slice(tp.length + 1);
          var destination = this.props.projectName + '/' + source.replace(/ProjectName/g, this.props.ProjectName);

          this.fs.copyTpl(
              tp + '/' + source,
              this.destinationPath(destination),
              this.props
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
