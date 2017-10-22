webpackJsonp([438],{1509:function(module,exports){module.exports="import eyes from 'eyes.it';\nimport {dropdownTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';\n\ndescribe('Dropdown', () => {\n  const storyUrl = getStoryUrl('Core', 'Dropdown');\n  const dataHook = 'story-dropdown';\n\n  eyes.it('should choose different dropdown items', () => {\n    const driver = dropdownTestkitFactory({dataHook});\n\n    browser.get(storyUrl);\n\n    waitForVisibilityOf(driver.element(), 'Cannot find Dropdown')\n      .then(() => {\n        expect(driver.getInput().getAttribute('value')).toBe('');\n\n        driver.click();\n        driver.getDropdownItem(1).click();\n        expect(driver.getInput().getAttribute('value')).toBe('Option 2');\n\n        driver.click();\n        driver.getDropdownItem(2).click();\n        expect(driver.getInput().getAttribute('value')).toBe('Option 3');\n\n        //choose a disabled option\n        driver.click();\n        driver.getDropdownItem(3).click();\n        expect(driver.getInput().getAttribute('value')).toBe('Option 3');\n      });\n  });\n});\n"}});