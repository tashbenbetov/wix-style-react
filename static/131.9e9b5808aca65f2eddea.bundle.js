webpackJsonp([131],{1816:function(module,exports){module.exports="import {textTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';\nimport eyes from 'eyes.it';\n\ndescribe('Text', () => {\n  const storyUrl = getStoryUrl('Core', 'Text');\n  const dataHook = 'story-text';\n\n  eyes.it('should render text', () => {\n    const driver = textTestkitFactory({dataHook});\n\n    browser.get(storyUrl);\n\n    waitForVisibilityOf(driver.element(), 'Cant find Text')\n      .then(() => {\n        expect(driver.getText()).toBe('Hello, World!');\n      });\n  });\n});\n\n"}});