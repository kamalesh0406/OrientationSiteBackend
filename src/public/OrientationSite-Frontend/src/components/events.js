const EventEmitter = {
  events: {},
  dispatch: function(event) {
    // console.log("event dispatched");
    if (!this.events[event]) return;
    else this.events[event].forEach(ref => ref.forceUpdate());
  },
  subscribe: function(event, ref) {
    // console.log("event subscriptes");
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(ref);
  }
};

module.exports = { EventEmitter };
