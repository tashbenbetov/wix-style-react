webpackJsonp([167],{1780:function(module,exports){module.exports="import React from 'react';\nimport ReactDOM from 'react-dom';\nimport ReactTestUtils from 'react-dom/test-utils';\nimport $ from 'jquery';\nimport Slider from '../Slider';\n\nconst sliderDriverFactory = component => {\n  const $component = $(component);\n  const $sliderHandles = $(component).find('.slider-handle');\n  const $sliderDots = $(component).find('.rc-slider-dot');\n\n  return {\n    exists: () => !!component,\n    isDotSelected: index => $sliderDots.filter(`:nth-child(${index})`).hasClass('rc-slider-dot-active'),\n    numOfSliderDots: () => $sliderDots.length,\n    numOfSLiderHandles: () => $sliderHandles.length,\n    getToolTipValue: () => {\n      const tooltip = $component.find('.slider-tooltip')[0];\n      return tooltip && tooltip.innerHTML;\n    },\n    hoverHandle: ({handleIndex}) => {\n      const handle = $sliderHandles[handleIndex];\n      ReactTestUtils.Simulate.mouseEnter(handle);\n    },\n    unHoverHandle: ({handleIndex}) => {\n      const handle = $sliderHandles[handleIndex];\n      ReactTestUtils.Simulate.mouseLeave(handle);\n    }\n  };\n};\n\nconst componentFactory = (props = {}) => {\n  let component;\n  const wrapper = document.createElement('div');\n  ReactDOM.render(<div ref={r => component = r}><Slider onChange={() => {}} {...props}/></div>, wrapper);\n\n  return component.childNodes[0];\n};\n\nconst sliderTestkitFactory = ({component}) => {\n  return sliderDriverFactory(component);\n};\n\n\nexport {componentFactory, sliderDriverFactory, sliderTestkitFactory};\n"}});