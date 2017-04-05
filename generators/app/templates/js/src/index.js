

const <%= ExportProjectName %> = {
  show() {
      alert("module <%= ExportProjectName %> is created sucessfully ")
  }
};


var meta = {
   <%= ExportProjectName %>: [{
    name: 'show',
    args: []
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
