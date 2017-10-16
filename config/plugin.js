const path = require('path');
exports.static = true;

exports.vue = {
    enable: true,
    package: '@hubcarl/egg-view-vue'
};

exports.vuessr = {
    enable: true,
    package: 'egg-view-vue-ssr'
};

exports.webpack = {
    enable: true,
    package: 'egg-webpack'
};

exports.webpackvue = {
    enable: true,
    package: 'egg-webpack-vue'
};

exports.logview = {
    package: 'egg-logview',
    env: ['local']
};

exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
};

exports.validator = {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-validator')
};

exports.cors = {
    enable: true,
    package: 'egg-cors'
};

// exports.proxyworker = {
//     enable: true,
//     package: 'egg-development-proxyworker',
// };
// // 如果10086被占用，你可以通过这个配置指定其他的端口号
// exports.proxyworker = {
//     port: 10086,
// };