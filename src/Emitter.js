import Rx from 'rxjs/Rx';

export class Emitter {
  constructor() {
    this.sinks = {};
  }

  publish(event, data) {
    if (!this.sinks[event]) {
      console.warn(`${event} does not have registered listeners`);
      return;
    }

    this.sinks[event].next(data);
  }

  subscribe(event, cb) {
    if (!cb) {
      console.warn(`No callback provided for subscription.`);
      return;
    }

    if (!this.sinks[event]) {
      this.sinks[event] = new Rx.Subject();
    }

    return this.sinks[event].subscribe(cb);
  }

  destroy() {
    for (const s in this.sinks) {
      if (this.sinks.hasOwnProperty(s)) {
        this.sinks[s].dispose();
      }
    }

    this.sinks = {};
  }

}