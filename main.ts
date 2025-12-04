const x: number = 10
console.log(x)

import {Buffer} from "node:buffer";
const buf = Buffer.from('hello world', 'utf8');
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
