webpackJsonp([519],{1428:function(module,exports){module.exports="import React from 'react';\nimport ReactDOM from 'react-dom';\nimport ReactTestUtils from 'react-dom/test-utils';\n\nconst textLinkDriverFactory = ({element, wrapper, component}) => {\n\n  const textLinkLayout = element ? element.children[0] : {};\n\n  return {\n    exists: () => !!element,\n    click: () => ReactTestUtils.Simulate.click(element),\n    getContent: () => textLinkLayout.textContent,\n    doesComponentHasClass: className => textLinkLayout.className.indexOf(className) > 0,\n    isDarkBackground: () => textLinkLayout.style._values.color === 'rgb(255, 255, 255)',\n    hover: () => ReactTestUtils.Simulate.mouseEnter(textLinkLayout), //simulate hover on text link layout because events are not propagated\n    getLink: () => element.href,\n    getTarget: () => element.target,\n    getRel: () => element.rel,\n    isUnderline: () => textLinkLayout.style._values['text-decoration'] === 'underline',\n    isLightBackground: () => textLinkLayout.style._values.color === 'rgb(56, 153, 236)',\n    getSize: () => textLinkLayout.classList.contains('t1_3') ? 'medium' : textLinkLayout.classList.contains('t3_3') ? 'small' : 'unknown',\n    setProps: props => {\n      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));\n      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);\n    }\n  };\n};\n\nexport default textLinkDriverFactory;\n"}});