# rx-pub-sub

A tiny publish/subscribe library that utilizes RxJS Subject's.

# Usage

```bash
$ npm i -S rx-pub-sub
```

```js
import Emitter from 'rx-pub-sub';

const emitter = new Emitter();

emitter.subscribe('custom-event', (e) => console.log(e));

emitter.publish('custom-event', 'hello world!');
```

# Hack

```bash
$ git clone https://github.com/mjw56/rx-pub-sub
$ npm install
$ npm run build
```

# LICENSE

MIT

