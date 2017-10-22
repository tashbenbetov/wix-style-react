webpackJsonp([280],{1667:function(module,exports){module.exports="import React from 'react';\nimport ReactDOM from 'react-dom';\nimport $ from 'jquery';\n\nimport Unit from '../Unit';\n\nconst unitDriverFactory = ({element}) => {\n  return {\n    isEmpty: () => element.children.length === 0,\n    hasChild: style => !!element.querySelector(style)\n  };\n};\n\n\nconst componentFactory = (props = {}) => {\n  let element;\n  const wrapperDiv = document.createElement('div');\n  ReactDOM.render(<div ref={r => element = r}><Unit {...props}/></div>, wrapperDiv);\n  return {element: element.childNodes[0], wrapper: wrapperDiv};\n};\n\nconst unitTestkitFactory = ({wrapper, dataHook}) => {\n  const element = $(wrapper).find(`[data-hook='${dataHook}']`);\n  return unitDriverFactory({element, wrapper});\n};\n\nexport {unitTestkitFactory, componentFactory, unitDriverFactory};\n"}});