webpackJsonp([278],{1669:function(module,exports){module.exports="import React from 'react';\nimport ReactTestUtils from 'react-dom/test-utils';\nimport ReactDOM from 'react-dom';\nimport styles from './InputArea.scss';\nimport $ from 'jquery';\n\nconst inputAreaDriverFactory = ({element, wrapper, component}) => {\n  const $component = $(element);\n  const textAreaElement = element && element.childNodes[0];\n  const textArea = $component.find('textarea')[0];\n  return {\n    trigger: (trigger, event) => ReactTestUtils.Simulate[trigger](textArea, event),\n    focus: () => textArea.focus(),\n    enterText: text => ReactTestUtils.Simulate.change(textArea, {target: {value: text}}),\n    getValue: () => textArea.value,\n    getPlaceholder: () => textArea.placeholder,\n    getDefaultValue: () => textArea.defaultValue,\n    getRowsCount: () => textArea.rows,\n    getMaxLength: () => textArea.maxLength,\n    getTabIndex: () => textArea.tabIndex,\n    getReadOnly: () => textArea.readOnly,\n    getResizable: () => textAreaElement.classList.contains(styles.resizable),\n    getHasCounter: () => textAreaElement.classList.contains(styles.hasCounter),\n    hasExclamation: () => $component.find(`.${styles.exclamation}`).length === 1,\n    hasError: () => textAreaElement.classList.contains(styles.hasError),\n    isFocusedStyle: () => textAreaElement.classList.contains(styles.hasFocus),\n    isHoveredStyle: () => textAreaElement.classList.contains(styles.hasHover),\n    isOfStyle: style => textAreaElement.classList.contains(styles[`theme-${style}`]),\n    isFocus: () => document.activeElement === textArea,\n    exists: () => !!textArea,\n    hasIconLeft: () => !$component.find(`.${styles.prefix}`).is(':empty'),\n    getStyle: () => textArea.style,\n    getAriaLabel: () => textArea.getAttribute('aria-label'),\n    getAriaControls: () => textArea.getAttribute('aria-controls'),\n    getAriaDescribedby: () => textArea.getAttribute('aria-describedby'),\n    getTooltipDataHook: () => 'inputArea-tooltip',\n    getTooltipElement: () => element,\n    setProps: props => {\n      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));\n      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);\n    }\n  };\n};\n\nexport default inputAreaDriverFactory;\n"}});