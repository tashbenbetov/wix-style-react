webpackJsonp([288],{1659:function(module,exports){module.exports="import React from 'react';\nimport classNames from 'classnames';\nimport Input from './Input';\nimport Typography from '../Typography';\n\nimport styles from './Input.scss';\n\nclass ThemedInput extends Input {\n  render() {\n    const {\n      id,\n      size,\n      dataHook,\n      title,\n      theme,\n      rtl,\n      disabled,\n      error,\n      forceHover,\n      forceFocus,\n      roundInput,\n      noLeftBorderRadius,\n      noRightBorderRadius,\n      value,\n      withSelection\n    } = this.props;\n\n    const classes = {\n      [styles.rtl]: !!rtl,\n      [styles.disabled]: disabled,\n      [styles.hasError]: !!error,\n      [styles.hasHover]: forceHover,\n      [styles.hasFocus]: forceFocus || this.state.focus,\n      [styles.roundInput]: roundInput,\n      [styles.hasValue]: (value && value.length) || (this.input && !!this.input.value),\n      [noRightBorderRadius]: noRightBorderRadius,\n      [noLeftBorderRadius]: noLeftBorderRadius\n    };\n\n    let placeholder = this.props.placeholder;\n    if (theme === 'amaterial' && !classes[styles.hasFocus] && !classes[styles.hasValue]) {\n      placeholder = '';\n    }\n    return (\n      <div\n        className={classNames(classes, styles.root, styles[`theme-${theme}`], styles[`size-${size}${withSelection ? '-with-selection' : ''}`])}\n        data-hook={dataHook}\n        >\n        {(theme === 'amaterial') &&\n        <label className={classNames(styles.materialTitle, Typography.t1_1)} htmlFor={id}>{title}</label>}\n        {super.render({placeholder})}\n        {(theme === 'material') && <div className={`${styles.bar} ${styles.barBlack}`}/>}\n        {(theme === 'amaterial') && <div className={`${styles.bar} ${styles.barBlue}`}/>}\n      </div>\n    );\n  }\n}\n\nexport default ThemedInput;\n"}});