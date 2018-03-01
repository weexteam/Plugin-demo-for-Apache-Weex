import Vue from 'vue';

import weex from 'weex-vue-render';

import <%= upperCamelCaseName %> from '../src/index';

weex.init(Vue);

weex.install(<%= upperCamelCaseName %>)

const App = require('./index.vue');
App.el = '#root';
new Vue(App);
