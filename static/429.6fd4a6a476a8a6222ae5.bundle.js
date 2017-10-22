webpackJsonp([429],{1518:function(module,exports){module.exports="import React from 'react';\nimport sinon from 'sinon';\nimport ReactTestUtils from 'react-dom/test-utils';\nimport editableRowDriverFactory from './EditableRow.driver';\nimport {createDriverFactory} from '../../test-common';\nimport {editableRowTestkitFactory} from '../../../testkit';\nimport EditableRow from './EditableRow';\nimport {editableRowTestkitFactory as enzymeEditableRowTestkitFactory} from '../../../testkit/enzyme';\nimport {mount} from 'enzyme';\n\ndescribe('EditableRow', () => {\n  const createDriver = createDriverFactory(editableRowDriverFactory);\n  let props;\n\n  beforeEach(() => {\n    props = {};\n  });\n\n  it('should focus on input when mounted', () => {\n    const driver = createDriver(<EditableRow {...props}/>);\n    expect(driver.isInputFocused()).toEqual(true);\n  });\n\n  it('should toggle accept button disabled state according to input presence', () => {\n    const driver = createDriver(<EditableRow {...props}/>);\n    expect(driver.isApproveDisabled()).toBe(true);\n    driver.setText('new option');\n    expect(driver.isApproveDisabled()).toBe(false);\n  });\n\n  it('should set input text from props', () => {\n    const text = 'new option';\n    props.newOption = text;\n    const driver = createDriver(<EditableRow {...props}/>);\n    expect(driver.getText()).toEqual(text);\n  });\n\n  it('should trigger onApprove callback when approve button is clicked', () => {\n    props.onApprove = sinon.spy();\n    const driver = createDriver(<EditableRow {...props}/>);\n    const text = 'new option';\n    driver.setText(text);\n    driver.clickApprove();\n    expect(props.onApprove.calledOnce).toBe(true);\n    expect(props.onApprove.calledWith(text)).toBe(true);\n  });\n\n\n  it('should trigger onApprove callback when enter key is pressed', () => {\n    props.onApprove = sinon.spy();\n    const driver = createDriver(<EditableRow {...props}/>);\n    const text = 'new option';\n    driver.setText(text);\n    driver.keyDown(13); //enter\n    expect(props.onApprove.calledOnce).toBe(true);\n    expect(props.onApprove.calledWith(text)).toBe(true);\n  });\n\n  it('should trigger onCancel callback when cancel button is clicked', () => {\n    props.onCancel = sinon.spy();\n    const driver = createDriver(<EditableRow {...props}/>);\n    driver.clickCancel();\n    expect(props.onCancel.calledOnce).toBe(true);\n  });\n\n  it('should trigger onCancel callback when escape key is pressed', () => {\n    props.onCancel = sinon.spy();\n    const driver = createDriver(<EditableRow {...props}/>);\n    driver.keyDown(27); //esc\n    expect(props.onCancel.calledOnce).toBe(true);\n  });\n\n  describe('testkit', () => {\n    it('should exist', () => {\n      const div = document.createElement('div');\n      const dataHook = 'myDataHook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><EditableRow {...props} dataHook={dataHook}/></div>));\n      const editableRowTestkit = editableRowTestkitFactory({wrapper, dataHook});\n      expect(editableRowTestkit.exists()).toBeTruthy();\n    });\n  });\n\n  describe('enzyme testkit', () => {\n    it('should exist', () => {\n      const dataHook = 'myDataHook';\n      const wrapper = mount(<EditableRow {...props} dataHook={dataHook}/>);\n      const editableRowTestkit = enzymeEditableRowTestkitFactory({wrapper, dataHook});\n      expect(editableRowTestkit.exists()).toBeTruthy();\n    });\n  });\n});\n"}});