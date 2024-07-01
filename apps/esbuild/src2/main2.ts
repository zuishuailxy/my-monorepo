// src/main.js
import { version } from '../package.json';

export default function () {
    console.log('version ' + version);
    import('./foo.ts').then(({ default: foo }) => {
        console.log(foo);
    });
}