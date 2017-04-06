

const <%= CamelCaseName %> = {
  show() {
      alert("module <%= CamelCaseName %> is created sucessfully ")
  }
};


var meta = {
   <%= CamelCaseName %>: [{
    name: 'show',
    args: []
  }]
};



if(window.Vue) {
  weex.registerModule('<%= ExportProjectName %>', <%= CamelCaseName %>);
}

function init(weex) {
  weex.registerApiModule('<%= ExportProjectName %>', <%= CamelCaseName %>, meta);
}
module.exports = {
  init:init
};
