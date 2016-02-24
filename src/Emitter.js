import Rx from 'rxjs/Rx';

export class Emitter {
  constructor() {
    this.sinks = {};
  }

  publish(event, data) {
    if (!this.sinks[event]) {
      console.warn(`${event} does not have any registered listeners. Publish cancelled.`);
      return false;
    }

    return this.sinks[event].next(data);
  }

  subscribe(event, cb) {
    if (!cb) {
      console.warn('No callback provided for subscription. Subscription cancelled.');
      return false;
    }

    if (!this.sinks[event]) {
      this.sinks[event] = new Rx.Subject();
    }

    return this.sinks[event].subscribe(cb);
  }

  destroy() {
    for (const s in this.sinks) {
      if (this.sinks.hasOwnProperty(s)) {
        this.sinks[s].unsubscribe();
      }
    }

    this.sinks = {};
  }

}
