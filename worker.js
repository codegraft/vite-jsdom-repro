import {JSDOM} from 'jsdom'

const dom = new JSDOM()
const parser = new dom.window.DOMParser()
console.log(parser)

console.log(parser.parseFromString('<xml><root></root>', 'application/xml'))