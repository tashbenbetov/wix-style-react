webpackJsonp([114],{1833:function(module,exports){module.exports="import styles from './ToggleSwitch.scss';\n\nconst toggleSwitchDriverFactory = component => ({\n  click: () => component.click(),\n  element: () => component,\n  checked: () => component.$('input').isSelected(),\n  isXSmall: () => component.getAttribute('class').then(classes => classes.includes(styles.toggleSwitchXSmall)),\n  isSmall: () => component.getAttribute('class').then(classes => classes.includes(styles.toggleSwitchSmall)),\n  isLarge: () => component.getAttribute('class').then(classes => !classes.includes(styles.toggleSwitchSmall) && !classes.includes(styles.toggleSwitchXSmall))\n});\n\nexport default toggleSwitchDriverFactory;\n"}});