module.exports = () => {
    return function* (next) {
        if (this.session.user) {
            console.log(this.session.user._id);
            yield next;
        } else {
            console.log('失败');
            yield next;
            // this.status = 200;
            // this.redirect('/');
        }
    }
}
