const EventEmitter = {
    events: {},
    emit: function(event, data) {
        if(!this.events[event]) return
        this.events[event].forEach(callback => callback(data));
    },
    on: function(event, callback) {
        if(!this.events[event]) this.events[event] = [];
        this.events[event].push(callback);
    }
}

module.exports = { EventEmitter };