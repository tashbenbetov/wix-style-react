webpackJsonp([281],{1666:function(module,exports){module.exports="import React from 'react';\n\nimport {componentFactory, unitDriverFactory} from './testkit/Unit';\n\ndescribe('<Unit/>', () => {\n\n  const createDriver = props => unitDriverFactory(componentFactory(props));\n\n  it('should create a unit and render the given children', () => {\n    const driver = createDriver({children: <div className=\"smth\"/>});\n    expect(driver.isEmpty()).toEqual(false);\n    expect(driver.hasChild('.smth')).toEqual(true);\n  });\n\n});\n"}});