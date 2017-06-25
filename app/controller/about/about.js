exports.index = function*(ctx) {
    yield this.render('about/about.js', { message: 'vue server side render!' });
};