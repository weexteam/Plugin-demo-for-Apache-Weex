

const <%= upperCamelCaseName %> = {
  show() {
      alert("module <%= CamelCaseName %> is created sucessfully ")
  }
};


var meta = {
   <%= upperCamelCaseName %>: [{
    name: 'show',
    args: []
  }]
};



if(window.Vue) {
  weex.registerModule('<%= ExportProjectName %>', <%= upperCamelCaseName %>);
}

function init(weex) {
  weex.registerApiModule('<%= ExportProjectName %>', <%= upperCamelCaseName %>, meta);
}
module.exports = {
  init:init
};
