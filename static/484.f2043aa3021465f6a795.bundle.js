webpackJsonp([484],{1463:function(module,exports){module.exports="import React from 'react';\nimport ReactDOM from 'react-dom';\n\nconst headerDriverFactory = ({element, wrapper, component}) => {\n\n  const title = element.querySelector('[data-hook=\"title\"]');\n  const subtitle = element.querySelector('[data-hook=\"subtitle\"]');\n\n  return {\n    exists: () => !!element,\n    title: () => title && title.innerHTML,\n    subtitle: () => subtitle && subtitle.innerHTML,\n    setProps: props => {\n      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));\n      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);\n    }\n  };\n};\n\nexport default headerDriverFactory;\n"}});