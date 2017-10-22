webpackJsonp([544],{1403:function(module,exports){module.exports="import React from 'react';\nimport ReactDOM from 'react-dom';\nimport ReactTestUtils from 'react-dom/test-utils';\n\nconst buttonDriverFactory = ({element, wrapper, component}) => {\n  return {\n    exists: () => !!element,\n    click: () => ReactTestUtils.Simulate.click(element),\n    getButtonTextContent: () => element.textContent,\n    isButtonDisabled: () => element.getAttribute('disabled') === '',\n    isPrefixIconExists: () => element.innerHTML.indexOf('prefix') !== -1,\n    isSuffixIconExists: () => element.innerHTML.indexOf('suffix') !== -1,\n    setProps: props => {\n      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));\n      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);\n    }\n  };\n};\n\nexport default buttonDriverFactory;\n"}});