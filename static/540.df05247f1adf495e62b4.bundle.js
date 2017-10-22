webpackJsonp([540],{1407:function(module,exports){module.exports="import React from 'react';\nimport ReactTestUtils from 'react-dom/test-utils';\nimport buttonDriverFactory from './Button.driver';\nimport Button from './Button';\nimport {createDriverFactory} from '../../test-common';\nimport {buttonTestkitFactory} from '../../../testkit';\nimport {buttonTestkitFactory as enzymeButtonTestkitFactory} from '../../../testkit/enzyme';\nimport {mount} from 'enzyme';\nimport {Close} from '../../Icons/dist';\n\ndescribe('Button', () => {\n\n  const createDriver = createDriverFactory(buttonDriverFactory);\n\n  it('should click a button', () => {\n    const onClick = jest.fn();\n    const driver = createDriver(<Button onClick={onClick}/>);\n\n    driver.click();\n    expect(onClick).toBeCalled();\n  });\n\n  it('should not call onClick when disabled', () => {\n    const onClick = jest.fn();\n    const driver = createDriver(<Button onClick={onClick} disabled/>);\n\n    driver.click();\n    expect(onClick).toHaveBeenCalledTimes(0);\n  });\n\n  it('should get disabled class', () => {\n    const driver = createDriver(<Button disabled/>);\n\n    expect(driver.isButtonDisabled()).toBe(true);\n  });\n\n  it('should render children', () => {\n    const children = '<div>123</div>';\n    const driver = createDriver(<Button>{children}</Button>);\n\n    expect(driver.getButtonTextContent()).toBe(children);\n  });\n\n  it('should have a prefixIcon', () => {\n    const driver = createDriver(<Button prefixIcon={<Close/>}/>);\n\n    expect(driver.isSuffixIconExists()).toBeFalsy();\n    expect(driver.isPrefixIconExists()).toBeTruthy();\n  });\n\n  it('should have a suffixIcon', () => {\n    const driver = createDriver(<Button suffixIcon={<Close/>}/>);\n\n    expect(driver.isPrefixIconExists()).toBeFalsy();\n    expect(driver.isSuffixIconExists()).toBeTruthy();\n  });\n});\n\ndescribe('testkit', () => {\n  it('should exist', () => {\n    const div = document.createElement('div');\n    const dataHook = 'myDataHook';\n    const onClick = jest.fn();\n    const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><Button onClick={onClick} dataHook={dataHook}/></div>));\n    const buttonTestkit = buttonTestkitFactory({wrapper, dataHook});\n    expect(buttonTestkit.exists()).toBeTruthy();\n  });\n});\n\ndescribe('enzyme testkit', () => {\n  it('should exist', () => {\n    const dataHook = 'myDataHook';\n    const onClick = jest.fn();\n    const wrapper = mount(<Button onClick={onClick} dataHook={dataHook}/>);\n    const buttonTestkit = enzymeButtonTestkitFactory({wrapper, dataHook});\n    expect(buttonTestkit.exists()).toBeTruthy();\n  });\n});\n"}});