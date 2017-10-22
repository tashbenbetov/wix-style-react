webpackJsonp([287],{1660:function(module,exports){module.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\n\nimport InputErrorSuffix from './InputErrorSuffix';\nimport Tooltip from '../Tooltip';\n\nimport Error from '../Icons/dist/components/Error';\n\n\nimport styles from './Input.scss';\n\nconst placementToMoveBy = {\n  right: {x: 2, y: -10},\n  left: {x: -2, y: -10},\n  top: {x: 0, y: -10},\n  bottom: {x: 0, y: -8}\n};\n\nconst AmaterialErrorSuffix = ({focused, error, errorMessage, placement, onShow}) => focused ?\n  null : <Tooltip\n    dataHook=\"input-tooltip\"\n    disabled={!error && !errorMessage}\n    placement={placement}\n    maxWidth=\"230px\"\n    hideDelay={5}\n    showDelay={5}\n    active={focused}\n    moveBy={placementToMoveBy[placement]}\n    alignment=\"center\"\n    content={errorMessage}\n    overlay=\"\"\n    textAlign=\"left\"\n    onShow={onShow}\n    >\n    <div className={classNames(styles.errorIcon, styles.suffix)}><Error size=\"1.5em\"/></div>\n  </Tooltip>;\n\nAmaterialErrorSuffix.propTypes = {\n  errorMessage: PropTypes.node.isRequired,\n  error: PropTypes.bool,\n  focused: PropTypes.bool,\n  placement: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),\n  onShow: PropTypes.func\n};\n\nAmaterialErrorSuffix.defaultProps = {\n  placement: 'right'\n};\n\n\n\nclass ThemedInputErrorSuffix extends InputErrorSuffix {\n  render() {\n    const {theme, focused, error, errorMessage, tooltipPlacement, onTooltipShow} = this.props;\n    return theme === 'amaterial' ?\n      <AmaterialErrorSuffix focused={focused} error={error} errorMessage={errorMessage} placement={tooltipPlacement} onShow={onTooltipShow}/> :\n      super.render();\n  }\n}\n\nThemedInputErrorSuffix.propTypes = {\n  tooltipPlacement: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),\n  onTooltipShow: PropTypes.func\n};\n\nexport default ThemedInputErrorSuffix;\n"}});