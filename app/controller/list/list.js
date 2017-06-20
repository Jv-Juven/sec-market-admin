exports.index = function* () {

    // this.session.user = null;
    let user = this.session.user || {};
    yield this.render('list/list.js', {
        userName: user.userName || '游客'
    })
}
