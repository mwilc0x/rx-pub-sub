# rx-pub-sub

# Usage

```js
import Emitter from 'rx-pub-sub';

const emitter = new Emitter();

emitter.subscribe('custom-event', (e) => console.log(e));

emitter.publish('custom-event', 'hello world!');
```