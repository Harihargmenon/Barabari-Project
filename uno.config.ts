import { defineConfig } from 'unocss';

const displays = new Map([
  ['b', 'block'],
  ['ib', 'inline-block'],
  ['i', 'inline'],
  ['f', 'flex'],
  ['g', 'grid'],
  ['t', 'table'],
  ['n', 'none'],
  ['u', 'unset'],
  ['c', 'contents'],
]);

export default defineConfig({
  presets: [],
  rules: [
    /*
                          SINGLE RULES
    */
    // mX: margin: Xpx
    [/^m(\d+)$/, ([_, num]) => ({ margin: `${num}px` })],
    // m-X-Y: margin: Xpx Ypx
    [/^m-(\d+)-(\d+)$/, ([_, x, y]) => ({ margin: `${x}px ${y}px` })],
    // pX: padding: Xpx
    [/^p(\d+)$/, ([_, num]) => ({ padding: `${num}px` })],
    // z-index: z-x
    [/^z-(\d+)$/, ([_, num]) => ({ 'z-index': num })],
    // bg-abc/bg-abcd: background-color: #abc/#abcd
    [/^bg-([a-f0-9]{3,8})/, ([_, hex]) => ({ 'background-color': `#${hex}` })],
    // color-abc/color-abcd: color: #abc/#abcd
    [/^col-([a-f0-9]{3,8})/, ([_, hex]) => ({ color: `#${hex}` })],
    // d-(type): display: (type)
    [/^d-(.+)$/, ([_, type]) => ({ display: displays.get(type) })],
    /*
                      COMPOUND RULES
    */
    // blur-x: backdrop-filter: blur(xpx) (...polyfill)
    [/^blur-(\d+)$/, ([_, num]) => ({
      'backdrop-filter': `blur(${num}px)`,
      '-webkit-backdrop-filter': `blur(${num}px)`,
      '-ms-backdrop-filter': `blur(${num}px)`,
      '-moz-backdrop-filter': `blur(${num}px)`,
    })],
  ],
});