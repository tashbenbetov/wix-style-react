webpackJsonp([501],{1446:function(module,exports){module.exports="import eyes from 'eyes.it';\nimport {buttonSelectionTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';\n\ndescribe('Button Selection', () => {\n  const storyUrl = getStoryUrl('Core', 'ButtonSelection');\n  const dataHook = 'story-button-selection';\n\n  eyes.it('should render correctly and highlight the selected button on click', () => {\n    const driver = buttonSelectionTestkitFactory({dataHook});\n    const buttonNames = ['Button 1', 'Button 2', 'Button 3'];\n    const btnToSelect = buttonNames[0];\n\n    browser.get(storyUrl);\n\n    waitForVisibilityOf(driver.element(), 'Cant find Button Selection Component')\n      .then(() => {\n        expect(driver.getButtonsNames()).toEqual(buttonNames);\n        expect(driver.getSelectedButton()).toBe(buttonNames[2]);\n\n        driver.selectByValue(btnToSelect);\n\n        expect(driver.getSelectedButton()).toBe(btnToSelect);\n      });\n  });\n});\n"}});