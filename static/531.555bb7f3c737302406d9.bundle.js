webpackJsonp([531],{1416:function(module,exports){module.exports="import React from 'react';\nimport textLinkDriverFactory from './TextLink.driver';\nimport TextLink from './TextLink';\nimport {createDriverFactory} from '../../BaseComponents/test-common';\nimport {textLinkTestkitFactory} from '../../../testkit';\nimport {textLinkTestkitFactory as enzymeTextLinkTestkitFactory} from '../../../testkit/enzyme';\nimport {isTestkitExists, isEnzymeTestkitExists} from '../../../testkit/test-common';\n\ndescribe('TextLink', () => {\n\n  const createDriver = createDriverFactory(textLinkDriverFactory);\n\n  it('should have a textLink', () => {\n    const driver = createDriver(<TextLink link=\"\"/>);\n\n    expect(driver.exists()).toBeTruthy();\n  });\n\n  it('should render children', () => {\n    const children = '<div>123</div>';\n    const driver = createDriver(<TextLink link=\"\">{children}</TextLink>);\n\n    expect(driver.getContent()).toBe(children);\n  });\n\n});\n\ndescribe('testkit', () => {\n  it('should exist', () => {\n    expect(isTestkitExists(<TextLink link=\"\"/>, textLinkTestkitFactory)).toBe(true);\n  });\n});\n\ndescribe('enzyme testkit', () => {\n  it('should exist', () => {\n    expect(isEnzymeTestkitExists(<TextLink link=\"\"/>, enzymeTextLinkTestkitFactory)).toBe(true);\n  });\n});\n"}});