'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const glob = require('glob')

function isValidPackageName(name) {
  return name.match(/^[$A-Z]([0-9A-Z]|-)*$/i);
}

module.exports = Generator.extend({

  initializing: function(){
    this.argument('projectName', { type: String, required: true });
    this.option('weexpack');
  },

  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the excellent ' + chalk.red('generator-weex-plugin') + ' generator!'
    ));



    let projectName = this.options["projectName"];

    if(!projectName || !isValidPackageName(projectName)){
      throw Error(projectName+ ' is not a valid name for a project. Please use a valid identifier ' +
          'name (alphanumeric).')

    }
    let iOSProjectName = projectName
    let AndroidProjectName = projectName
    let ExportProjectName = projectName
    let lowerCamelCaseName = projectName;
    let upperCamelCaseName = projectName

    if(/-/ig.test(projectName)){

      lowerCamelCaseName  =  ExportProjectName = projectName.replace(/\-(\w)/g, function(all, letter){
        return letter.toUpperCase();
      });

      iOSProjectName =  ExportProjectName.charAt(0).toUpperCase() + ExportProjectName.slice(1);
      AndroidProjectName = ExportProjectName.toLowerCase();
    }


    upperCamelCaseName = lowerCamelCaseName.charAt(0).toUpperCase() + ExportProjectName.slice(1);

    iOSProjectName = upperCamelCaseName;

    const prompts = [{
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
      this.props.upperCamelCaseName = upperCamelCaseName;
      this.props.lowerCamelCaseName = lowerCamelCaseName;
    }.bind(this));
  },

  writing: function () {

    if(!this.options.weexpack){
      this.destinationRoot(this.props.projectName)
    }

    const tp = this.templatePath();

    const files = glob.sync(tp + '/**', {nodir: true});
    
    files.forEach(function (file) {
      const source = file.slice(tp.length + 1);

      let rep = source.replace(/iOSProjectName/g, this.props.iOSProjectName)
          .replace(/AndroidProjectName/g, this.props.AndroidProjectName)
          .replace(/ExportProjectName/g, this.props.ExportProjectName)
          .replace(/upperCamelCaseName/g, this.props.upperCamelCaseName)

      if(/^_/ig.test(rep)){
        rep = rep.replace(/^_/ig, "")
      }

      const destPath = this.destinationPath(this.props.projectName+"/"+rep)

      if(!this.options.weexpack){
        destPath = this.destinationPath(rep)
      }

      if(!/\.(png|jpg|gif|jar|framework)/.test(file)){
        this.fs.copyTpl(
            tp + '/' + source,
            destPath,
            this.props
        );
      }
      else{

        this.fs.copy(
            tp + '/' + source,
            destPath
        );
      }


    }, this);

  },

  install: function () {
    // this.spawnCommand('npm', ['install']);
    this.installDependencies({
      npm: true,
      yarn: true
    });
  },
  end: function(){
    // this.log("weex 插件工程已经创建完成")
  }
});
