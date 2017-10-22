webpackJsonp([468],{1479:function(module,exports){module.exports="import React from 'react';\nimport {object, func} from 'prop-types';\nimport color from 'color';\nimport clamp from 'lodash/clamp';\n\nimport WixComponent from '../BaseComponents/WixComponent';\nimport {getBoundingRect} from './utils';\n\nimport css from './color-picker-hsb.scss';\n\nexport default class ColorPickerHsb extends WixComponent {\n\n  static propTypes = {\n    current: object.isRequired,\n    onChange: func.isRequired\n  }\n\n  onMarkerDragStart = e => {\n    e.preventDefault();\n    window.addEventListener('mousemove', this.onMarkerDrag);\n    window.addEventListener('mouseup', this.onMarkerDragEnd);\n    this.gradientRect = getBoundingRect(this.gradient);\n    this.setNewColorByMouseEvent(e);\n  }\n\n  onMarkerDrag = e => {\n    this.setNewColorByMouseEvent(e);\n  }\n\n  onMarkerDragEnd = () => {\n    window.removeEventListener('mousemove', this.onMarkerDrag);\n    window.removeEventListener('mouseup', this.onMarkerDragEnd);\n  }\n\n  getSVByMouseEvent = e => {\n    const x = e.clientX - this.gradientRect.left;\n    const y = e.clientY - this.gradientRect.top;\n\n    const s = clamp(100 * x / this.gradientRect.width, 0, 100);\n    const v = clamp(100 - (100 * y / this.gradientRect.height), 0, 100);\n\n    return {s, v};\n  };\n\n  setNewColorByMouseEvent = e => {\n    const {onChange, current} = this.props;\n    const {s, v} = this.getSVByMouseEvent(e);\n    onChange(color({h: current.hue(), s, v}));\n  }\n\n  componentWillUnmount() {\n    this.onMarkerDragEnd();\n  }\n\n  render() {\n    const {current} = this.props;\n    const hue = current.saturationv(100).lightness(50);\n    const style = {\n      left: `${current.saturationv()}%`,\n      top: `${100 - current.value()}%`\n    };\n    return (\n      <div className={css.root} ref={e => this.gradient = e} onMouseDown={this.onMarkerDragStart}>\n        <div className={css.hue} style={{background: hue.hex()}}/>\n        <div className={css.saturation}/>\n        <div className={css.brightness}/>\n        <div className={css.handle} style={style}/>\n      </div>\n    );\n  }\n\n}\n"}});