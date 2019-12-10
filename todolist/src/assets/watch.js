function Watch() {
    this.events = {}
}

Watch.prototype.on = function (type, linstener) {
    if (!(this.events[type] instanceof Array)) {
        this.events[type] = []
    }
    this.events[type].push(linstener)
}

Watch.prototype.emit = function (type, set) {
    this.events[type].forEach((item) => {
        item(set);
    })
}

module.exports = Watch;