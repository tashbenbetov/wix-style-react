webpackJsonp([291],{1656:function(module,exports){module.exports="import React from 'react';\nimport PropTypes from 'prop-types';\n\nimport Tooltip from '../Tooltip';\nimport SvgExclamation from '../svg/Exclamation.js';\nimport styles from './Input.scss';\n\nclass InputErrorSuffix extends React.Component {\n  render() {\n    return (\n      <Tooltip\n        dataHook=\"input-tooltip\"\n        disabled={this.props.errorMessage.length === 0}\n        placement=\"top\"\n        alignment=\"center\"\n        textAlign=\"left\"\n        content={this.props.errorMessage}\n        overlay=\"\"\n        theme=\"dark\"\n        maxWidth=\"230px\"\n        hideDelay={150}\n        >\n        <div className={styles.exclamation}><SvgExclamation width={2} height={11}/></div>\n      </Tooltip>\n    );\n  }\n}\n\nInputErrorSuffix.propTypes = {\n  theme: PropTypes.oneOf(['normal', 'paneltitle', 'material', 'amaterial']),\n  errorMessage: PropTypes.string.isRequired,\n  focused: PropTypes.bool\n};\n\nexport default InputErrorSuffix;\n"}});