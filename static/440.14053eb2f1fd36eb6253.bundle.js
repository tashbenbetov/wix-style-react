webpackJsonp([440],{1507:function(module,exports){module.exports="export default function applyPolyfills(window, global) {\n  let lastTime = 0;\n  const vendors = ['ms', 'moz', 'webkit', 'o'];\n\n  for (let x = 0; x < vendors.length && !global.requestAnimationFrame; ++x) {\n    global.requestAnimationFrame = global[vendors[x] + 'RequestAnimationFrame'];\n    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];\n  }\n\n  if (!global.requestAnimationFrame) {\n    global.requestAnimationFrame = function (callback) {\n      const currTime = new Date().getTime();\n      const timeToCall = Math.max(0, 16 - (currTime - lastTime));\n      const id = window.setTimeout(() => {\n        callback(currTime + timeToCall);\n      }, timeToCall);\n      lastTime = currTime + timeToCall;\n      return id;\n    };\n  }\n\n  if (!window.cancelAnimationFrame) {\n    window.cancelAnimationFrame = function (id) {\n      clearTimeout(id);\n    };\n  }\n}\n"}});