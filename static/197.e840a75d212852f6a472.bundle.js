webpackJsonp([197],{1750:function(module,exports){module.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport WixComponent from '../../BaseComponents/WixComponent';\nimport * as Icons from '../../Icons';\n\nclass ExtraIcon extends WixComponent {\n  static propTypes = {\n    name: PropTypes.string.isRequired\n  };\n\n  render() {\n    return (\n      <div key={this.props.name}>\n        <span>{React.createElement(Icons[this.props.name])}</span>\n      </div>\n    );\n  }\n}\n\nexport default ExtraIcon;\n"}});