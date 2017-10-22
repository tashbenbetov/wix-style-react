webpackJsonp([134],{1813:function(module,exports){module.exports="import React from 'react';\nimport ReactTestUtils from 'react-dom/test-utils';\nimport ReactDOM from 'react-dom';\nimport $ from 'jquery';\nimport {isClassExists} from '../../test/utils';\n\nconst tagDriverFactory = ({element, wrapper, component}) => {\n\n  const removeButton = $(element).find('a')[0];\n  const thumb = $(element).find('span')[0];\n  const contentWithoutThumb = $(element).find('span')[0];\n\n  return {\n    exists: () => !!element,\n    isLarge: () => isClassExists(element, 'large'),\n    isStandardTheme: () => isClassExists(element, 'standardTheme'),\n    isWarningTheme: () => isClassExists(element, 'warningTheme'),\n    isErrorTheme: () => isClassExists(element, 'errorTheme'),\n    isRemovable: () => isClassExists(removeButton, 'tagRemoveButton'),\n    removeTag: () => ReactTestUtils.Simulate.click(removeButton),\n    isThumbExists: () => isClassExists(thumb, 'thumb'),\n    isWrapped: () => isClassExists(element, 'tagWrap') && isClassExists(contentWithoutThumb, 'innerTagWrap'),\n    isDisabled: () => isClassExists(element, 'disabled'),\n    getLabel: () => element.textContent,\n    getTitle: () => element.title,\n    setProps: props => {\n      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));\n      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);\n    }\n  };\n};\n\nexport default tagDriverFactory;\n"}});