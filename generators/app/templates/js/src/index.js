

const <%= ExportProjectName %> = {
  create(options, callbackID) {

  }
};

if(window.Vue) {
  weex.registerModule('<%= ExportProjectName %>', <%= ExportProjectName %>);
}

function init(weex) {
  weex.registerApiModule('<%= ExportProjectName %>', <%= ExportProjectName %>, meta);
}

module.exports = {
  init
};
