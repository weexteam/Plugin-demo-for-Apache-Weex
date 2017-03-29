

const <%= ExportProjectName %> = {
  create(options, callbackID) {

  }
};


var meta = {
 <%= ExportProjectName %>: [{
    name: 'create',
    args: ['object', 'string']
  }]
};


if(window.Vue) {
  weex.registerModule('<%= ExportProjectName %>', <%= ExportProjectName %>);
}

function init(weex) {
  weex.registerApiModule('<%= ExportProjectName %>', <%= ExportProjectName %>, meta);
}

module.exports = {
  init:init
};
