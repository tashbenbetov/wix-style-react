webpackJsonp([428],{1519:function(module,exports){module.exports="import React from 'react';\nimport ReactDOM from 'react-dom';\nimport selectorDriverFactory from '../Selector/Selector.driver';\nimport editableRowDriverFactory from './EditableRow/EditableRow.driver';\nimport ReactTestUtils from 'react-dom/test-utils';\nimport $ from 'jquery';\n\nconst editableSelectorDriverFactory = ({element, wrapper, component}) => {\n  const el = $(element);\n  const newRowButton = () => el.find('[data-hook=\"new-row-button-text\"]');\n  const selectorRowDriver = index => selectorDriverFactory({element: el.find('[data-hook=\"editable-selector-item\"]').eq(index), wrapper: element});\n  const editButtonAt = index => el.find('[data-hook=\"edit-item\"]').eq(index);\n  const deleteButtonAt = index => el.find('[data-hook=\"delete-item\"]').eq(index);\n  const editableRowDriver = () => editableRowDriverFactory({element: el.find('[data-hook=\"edit-row-wrapper\"]')[0], wrapper: element});\n\n  return {\n    items: () => el.find('[data-hook=\"editable-selector-item\"]').get().map(selector => selectorDriverFactory({element: selector})),\n    exists: () => !!element,\n    isEditing: () => !!el.find('[data-hook=\"edit-row-wrapper\"]').length,\n    newRowButton,\n    deleteButtonAt,\n    editButtonAt,\n    addNewRow: label => {\n      ReactTestUtils.Simulate.click(newRowButton()[0]);\n      editableRowDriver().setText(label);\n    },\n    editRow: (index, label) => {\n      ReactTestUtils.Simulate.click(editButtonAt(index)[0]);\n      editableRowDriver().setText(label);\n    },\n    deleteRow: index => {\n      ReactTestUtils.Simulate.click(deleteButtonAt(index)[0]);\n    },\n    clickApprove: () => editableRowDriver().clickApprove(),\n    clickCancel: () => editableRowDriver().clickCancel(),\n    title: () => el.find('[data-hook=\"editable-selector-title\"] > span').text(),\n    toggleItem: index => selectorRowDriver(index).toggle(),\n    setProps: props => {\n      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));\n      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);\n    }\n  };\n};\n\nexport default editableSelectorDriverFactory;\n\n"}});