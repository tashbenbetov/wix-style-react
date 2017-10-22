webpackJsonp([404],{1543:function(module,exports){module.exports="import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';\nimport ReactTestUtils from 'react-dom/test-utils';\nimport {isClassExists} from '../../test/utils';\n\nconst IconWithOptionsDriverFactory = ({element, wrapper}) => {\n  const iconWrapper = element.querySelector('[data-hook=icon-wrapper]');\n  const dropdownLayoutWrapper = element.querySelector('[data-hook=iconWithOptions-dropdownLayout-wrapper]');\n  const dropdownLayout = element.querySelector('[data-hook=iconWithOptions-dropdownLayout]');\n  const dropdownLayoutDriver = dropdownLayoutDriverFactory({element: dropdownLayout, wrapper});\n\n  const driver = {\n    exists: () => !!element,\n    mouseEnter: () => ReactTestUtils.Simulate.mouseEnter(iconWrapper),\n    mouseLeave: () => ReactTestUtils.Simulate.mouseLeave(element),\n    isIconBlue: () => isClassExists(element, 'hover'),\n    iconWrapper: () => iconWrapper,\n    element: () => element\n  };\n\n  return {\n    driver,\n    dropdownLayoutDriver: {\n      ...dropdownLayoutDriver,\n      isDropDirectionUp: () => dropdownLayoutDriver.isUp() && isClassExists(dropdownLayoutWrapper, 'dropDirectionUp')\n    }\n  };\n};\n\nexport default IconWithOptionsDriverFactory;\n"}});