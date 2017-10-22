webpackJsonp([111],{1836:function(module,exports){module.exports="import React from 'react';\nimport ReactTestUtils from 'react-dom/test-utils';\nimport tooltipDriverFactory from './Tooltip.driver';\nimport Tooltip from './Tooltip';\nimport TooltipContent from './TooltipContent';\nimport {createDriverFactory} from '../test-common';\nimport {buttonTestkitFactory, tooltipTestkitFactory} from '../../testkit';\nimport {tooltipTestkitFactory as enzymeTooltipTestkitFactory} from '../../testkit/enzyme';\nimport {mount} from 'enzyme';\nimport {Button} from '../../src/Backoffice';\n\ndescribe('Tooltip', () => {\n\n  const createDriver = createDriverFactory(tooltipDriverFactory);\n  const _props = {showDelay: 5, hideDelay: 5, content: <TooltipContent children={'I\\'m the content'}/>};\n  const children = <div>Here there is a children</div>;\n\n  beforeEach(() => {\n    document.body.innerHTML = '';\n  });\n\n  it('should be hidden by default', () => {\n    const driver = createDriver(<Tooltip {..._props}>{children}</Tooltip>);\n    expect(driver.isShown()).toBeFalsy();\n  });\n\n  it('should show a tooltip once hovering', () => {\n    const driver = createDriver(<Tooltip {..._props}>{children}</Tooltip>);\n    driver.mouseEnter();\n    expect(driver.isShown()).toBeFalsy();\n    return resolveIn(30).then(() => {\n      expect(driver.isShown()).toBeTruthy();\n    });\n  });\n\n  it('should hide when mouse leaving', () => {\n    const driver = createDriver(<Tooltip {..._props}>{children}</Tooltip>);\n    driver.mouseEnter();\n    expect(driver.isShown()).toBeFalsy();\n    return resolveIn(30).then(() => {\n      expect(driver.isShown()).toBeTruthy();\n      driver.mouseLeave();\n      return resolveIn(30).then(() => {\n        expect(driver.isShown()).toBeFalsy();\n      });\n    });\n  });\n\n  it('should hide tooltip when using custom triggers', () => {\n    const props = {..._props, hideTrigger: 'custom', showTrigger: 'custom'};\n    const driver = createDriver(<Tooltip {...props}>{children}</Tooltip>);\n    driver.mouseEnter();\n    return resolveIn(30)\n      .then(() => {\n        expect(driver.isShown()).toBeFalsy();\n        driver.setProps({...props, active: true});\n        return resolveIn(30);\n      })\n      .then(() => {\n        expect(driver.isShown()).toBeTruthy();\n        driver.setProps({...props, active: false});\n        return resolveIn(30);\n      })\n      .then(() => {\n        expect(driver.isShown()).toBeFalsy();\n      });\n  });\n\n  it('should test inner component', () => {\n    const dataHook = 'button_data_hook';\n    const buttonContent = (\n      <div>\n        Custom Content...&nbsp;\n        <Button dataHook={dataHook} id=\"inner-button\" height=\"small\">Button content</Button>\n      </div>\n    );\n    const driver = createDriver(<Tooltip showDelay={5} hideDelay={5} content={buttonContent}>{children}</Tooltip>);\n    driver.mouseEnter();\n    expect(driver.isShown()).toBeFalsy();\n    return resolveIn(30).then(() => {\n      expect(driver.isShown()).toBeTruthy();\n      const buttonTestkit = buttonTestkitFactory({wrapper: driver.getTooltipWrapper(), dataHook});\n      expect(buttonTestkit.getButtonTextContent()).toBe('Button content');\n    });\n  });\n\n  it('should not override focus event', () => {\n    const onFocus = jest.fn();\n    const onFocusedChild = <div onFocus={onFocus}>Here there is a children</div>;\n    const driver = createDriver(<Tooltip {..._props}>{onFocusedChild}</Tooltip>);\n    driver.focus();\n    expect(onFocus).toBeCalled();\n  });\n\n  it('should not override blur event', () => {\n    const onBlur = jest.fn();\n    const onBluredChild = <div onBlur={onBlur}>Here there is a children</div>;\n    const driver = createDriver(<Tooltip {..._props}>{onBluredChild}</Tooltip>);\n    driver.blur();\n    expect(onBlur).toBeCalled();\n  });\n\n  it('should not override click event', () => {\n    const onClick = jest.fn();\n    const onClickedChild = <div onClick={onClick}>Here there is a children</div>;\n    const driver = createDriver(<Tooltip {..._props}>{onClickedChild}</Tooltip>);\n    driver.click();\n    expect(onClick).toBeCalled();\n  });\n\n  it('should not override mouse enter event', () => {\n    const onMouseEnter = jest.fn();\n    const onMouseEnteredChild = <div onMouseEnter={onMouseEnter}>Here there is a children</div>;\n    const driver = createDriver(<Tooltip {..._props}>{onMouseEnteredChild}</Tooltip>);\n    driver.mouseEnter();\n    expect(onMouseEnter).toBeCalled();\n  });\n\n  it('should not override mouse leave event', () => {\n    const onMouseLeave = jest.fn();\n    const onMouseLeavedChild = <div onMouseLeave={onMouseLeave}>Here there is a children</div>;\n    const driver = createDriver(<Tooltip {..._props}>{onMouseLeavedChild}</Tooltip>);\n    driver.mouseLeave();\n    expect(onMouseLeave).toBeCalled();\n  });\n\n  it('should support error theme', () => {\n    const driver = createDriver(<Tooltip theme={'error'} {..._props}>{children}</Tooltip>);\n    driver.mouseEnter();\n    expect(driver.hasErrorTheme()).toBeFalsy();\n    return resolveIn(30).then(() => {\n      expect(driver.hasErrorTheme()).toBeTruthy();\n    });\n  });\n\n  it('should support dark theme', () => {\n    const driver = createDriver(<Tooltip theme={'dark'} {..._props}>{children}</Tooltip>);\n    driver.mouseEnter();\n    expect(driver.hasDarkTheme()).toBeFalsy();\n    return resolveIn(30).then(() => {\n      expect(driver.hasDarkTheme()).toBeTruthy();\n    });\n  });\n\n  it('should support light theme', () => {\n    const driver = createDriver(<Tooltip theme={'light'} {..._props}>{children}</Tooltip>);\n    driver.mouseEnter();\n    expect(driver.hasLightTheme()).toBeFalsy();\n    return resolveIn(30).then(() => {\n      expect(driver.hasLightTheme()).toBeTruthy();\n    });\n  });\n\n  it('should have a children', () => {\n    const driver = createDriver(<Tooltip {..._props}>{children}</Tooltip>);\n    expect(driver.getChildren()).toBe('Here there is a children');\n  });\n\n  it('should have a content', () => {\n    const driver = createDriver(<Tooltip {..._props}>{children}</Tooltip>);\n    driver.mouseEnter();\n    return resolveIn(30).then(() => {\n      expect(driver.getContent()).toBe('I\\'m the content');\n    });\n  });\n\n  it('should cancel mouse leave, when followed by mouse enter immediately', () => {\n    const driver = createDriver(<Tooltip {..._props}>{children}</Tooltip>);\n    driver.mouseEnter();\n    driver.mouseLeave();\n    driver.mouseEnter();\n    return resolveIn(30).then(() => {\n      expect(driver.isShown()).toBe(true);\n    });\n  });\n\n  it('should call onShow when tooltip is shown', () => {\n    const onShow = jest.fn();\n    const driver = createDriver(<Tooltip {...{..._props, onShow}}>{children}</Tooltip>);\n\n    driver.mouseEnter();\n\n    expect(onShow).not.toHaveBeenCalled();\n    return resolveIn(30).then(() => {\n      expect(onShow).toHaveBeenCalled();\n      expect(driver.isShown()).toBeTruthy();\n    });\n  });\n\n  it('should call onHide when tooltip is hidden', () => {\n    const onHide = jest.fn();\n    const driver = createDriver(<Tooltip {...{..._props, onHide}}>{children}</Tooltip>);\n\n    driver.mouseEnter();\n    return resolveIn(30).then(() => {\n      expect(driver.isShown()).toBeTruthy();\n\n      driver.mouseLeave();\n\n      return resolveIn(30).then(() => {\n        expect(driver.isShown()).toBeFalsy();\n        expect(onHide).toHaveBeenCalled();\n      });\n    });\n\n  });\n\n  it('should append to element selected', () => {\n    const el = document.createElement('div');\n    const driver = createDriver(<Tooltip {..._props} appendTo={el}>{children}</Tooltip>);\n    driver.mouseEnter();\n    return resolveIn(30).then(() => {\n      expect(el.childElementCount).toEqual(1);\n    });\n  });\n\n  describe('placement attribute', () => {\n    it('should be top by default', () => {\n      const driver = createDriver(<Tooltip {...{..._props}}>{children}</Tooltip>);\n      driver.mouseEnter();\n\n      return resolveIn(30).then(() => {\n        expect(driver.getPlacement()).toBe('top');\n      });\n    });\n\n    ['top', 'bottom', 'left', 'right'].forEach(placement => {\n      it(`should be ${placement}`, () => {\n        const driver = createDriver(<Tooltip {...{..._props}} placement={placement}>{children}</Tooltip>);\n        driver.mouseEnter();\n\n        return resolveIn(30).then(() => {\n          expect(driver.getPlacement()).toBe(placement);\n        });\n      });\n    });\n  });\n\n  describe('max-width attribute', () => {\n    it('should set default max-width 378', () => {\n      const driver = createDriver(<Tooltip {..._props}>{children}</Tooltip>);\n      driver.mouseEnter();\n      return resolveIn(30).then(() => {\n        expect(driver.getMaxWidth()).toBe('378px');\n      });\n    });\n\n    it('should set custom max-width', () => {\n      const props = {..._props, maxWidth: '400px'};\n      const driver = createDriver(<Tooltip {...props}>{children}</Tooltip>);\n      driver.mouseEnter();\n      return resolveIn(30).then(() => {\n        expect(driver.getMaxWidth()).toBe('400px');\n      });\n    });\n  });\n\n  describe('padding attribute', () => {\n    it('should set default to none', () => {\n      const driver = createDriver(<Tooltip {..._props}>{children}</Tooltip>);\n      driver.mouseEnter();\n      return resolveIn(30).then(() => {\n        expect(driver.getPadding()).toBe(undefined);\n      });\n    });\n    it('should set custom padding', () => {\n      const props = {..._props, padding: '5px'};\n      const driver = createDriver(<Tooltip {...props}>{children}</Tooltip>);\n      driver.mouseEnter();\n      return resolveIn(30).then(() => {\n        expect(driver.getPadding()).toBe('5px');\n      });\n    });\n  });\n\n  describe('testkit', () => {\n    it('should exist', () => {\n      const div = document.createElement('div');\n      const dataHook = 'myDataHook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><Tooltip dataHook={dataHook} {..._props}>{children}</Tooltip></div>));\n      const driver = tooltipTestkitFactory({wrapper, dataHook});\n      driver.mouseEnter();\n      expect(driver.isShown()).toBeFalsy();\n      return resolveIn(30).then(() => {\n        expect(driver.isShown()).toBeTruthy();\n      });\n    });\n  });\n\n  describe('enzyme testkit', () => {\n    it('should exist', () => {\n      const dataHook = 'myDataHook';\n      const wrapper = mount(<Tooltip dataHook={dataHook} {..._props}>{children}</Tooltip>);\n      const driver = enzymeTooltipTestkitFactory({wrapper, dataHook});\n      driver.mouseEnter();\n      expect(driver.isShown()).toBeFalsy();\n      return resolveIn(30).then(() => {\n        expect(driver.isShown()).toBeTruthy();\n      });\n    });\n\n    it('should remove a tooltip immediately once the component is destroyed', () => {\n      const dataHook = 'myDataHook';\n      const wrapper = mount(<Tooltip dataHook={dataHook} {..._props} hideDelay={1000}>{children}</Tooltip>);\n      const driver = enzymeTooltipTestkitFactory({wrapper, dataHook});\n      driver.mouseEnter();\n      return resolveIn(30).then(() => {\n        expect(driver.isShown()).toBeTruthy();\n        wrapper.unmount();\n        return resolveIn(1);\n      }).then(() => {\n        expect(driver.isShown()).toBeFalsy();\n      });\n    });\n  });\n});\n\nfunction resolveIn(timeout) {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve({});\n    }, timeout);\n  });\n}\n"}});