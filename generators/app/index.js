'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var glob = require('glob')

function isValidPackageName(name) {
  return name.match(/^[$A-Z]([0-9A-Z]|-)*$/i);
}

module.exports = Generator.extend({

  initializing: function(){
    this.argument('projectName', { type: String, required: true });

  },

  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the excellent ' + chalk.red('generator-weex-plugin') + ' generator!'
    ));



    var projectName = this.options["projectName"];

    if(!isValidPackageName(projectName)){
      throw Error(projectName+ ' is not a valid name for a project. Please use a valid identifier ' +
          'name (alphanumeric).')

    }

    var iOSProjectName = projectName
    var AndroidProjectName = projectName

    if(/-/ig.test(projectName)){

      var ExportProjectName = projectName.replace(/\-(\w)/g, function(all, letter){
        return letter.toUpperCase();
      });

      iOSProjectName =  ExportProjectName.charAt(0).toUpperCase() + ExportProjectName.slice(1);
      AndroidProjectName = ExportProjectName.toLowerCase();
    }


    var prompts = [{
      type: 'input',
      name: 'iOSProjectName',
      message: 'please confirm iOS Project Name',
      default: iOSProjectName
    },
      {
        type: 'input',
        name: 'AndroidProjectName',
        message: 'please confirm Android Project Name',
        default: AndroidProjectName
      }
      ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.projectName = projectName;
      this.props.ExportProjectName = iOSProjectName;
    }.bind(this));
  },

  writing: function () {
      var tp = this.templatePath();



    var files = glob.sync(tp + '/**', {nodir: true});



      files.forEach(function (file) {
        var source = file.slice(tp.length + 1);


        if(/_/ig.test(source)){
          source = source.replace(/_/ig, "")
        }

        var rep = source.replace(/iOSProjectName/g, this.props.iOSProjectName)
            .replace(/AndroidProjectName/g, this.props.AndroidProjectName)
            .replace(/ExportProjectName/g, this.props.ExportProjectName)

        var destination = this.props.projectName + '/' + rep;

        if(!/\.(png|jpg|gif|jar|framework)/.test(file)){
          this.fs.copyTpl(
              tp + '/' + source,
              this.destinationPath(destination),
              this.props
          );
        }
        else{

          this.fs.copy(
              tp + '/' + source,
              this.destinationPath(destination)
          );
        }


      }, this);

  },

  install: function () {
    this.spawnCommand('npm', ['install']);
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
