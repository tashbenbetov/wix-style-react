webpackJsonp([536],{1411:function(module,exports){module.exports="import React from 'react';\nimport {any, bool, oneOf} from 'prop-types';\nimport classNames from 'classnames';\nimport styles from './ButtonLayout.scss';\n\nconst ButtonLayout = props => {\n  const {theme, hover, active, disabled, height, children} = props;\n\n  const className = classNames({\n    [styles.button]: true,\n    [styles[theme]]: true,\n    [styles.hover]: hover,\n    [styles.active]: active,\n    [styles.disabled]: disabled,\n    [styles[`height${height}`]]: height !== 'medium'\n  }, children.props.className);\n\n  const _style = Object.assign({},\n    children.props.style,\n    {\n      height,\n      display: 'inline-block'\n    }\n  );\n\n  if (React.Children.count(children) === 1) {\n    return React.cloneElement(\n      children,\n      {className, style: _style},\n      <div className={styles.inner}>\n        {children.props.children}\n      </div>\n    );\n  }\n};\n\nButtonLayout.defaultProps = {\n  height: 'medium',\n  theme: 'fullblue'\n};\n\nButtonLayout.propTypes = {\n  active: bool,\n  children: any,\n  disabled: bool,\n  height: oneOf(['small', 'medium', 'large']),\n  hover: bool,\n  theme: oneOf([\n    'transparent',\n    'fullred',\n    'fullgreen',\n    'fullpurple',\n    'emptyred',\n    'emptygreen',\n    'emptybluesecondary',\n    'emptyblue',\n    'emptypurple',\n    'fullblue',\n    'login',\n    'emptylogin',\n    'transparentblue',\n    'whiteblue',\n    'whiteblueprimary',\n    'whitebluesecondary',\n    'close-standard',\n    'close-dark',\n    'close-transparent',\n    'icon-greybackground',\n    'icon-standard',\n    'icon-standardsecondary',\n    'icon-white',\n    'icon-whitesecondary'\n  ])\n};\n\nButtonLayout.displayName = 'ButtonLayout';\n\nexport default ButtonLayout;\n"}});