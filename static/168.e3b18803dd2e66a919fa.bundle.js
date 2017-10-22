webpackJsonp([168],{1779:function(module,exports){module.exports="import React, {Component} from 'react';\nimport PropTypes from 'prop-types';\nimport './SliderHandle.scss';\n\nexport default class SliderHandle extends Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      showTooltip: false,\n      dragging: false\n    };\n\n    this.handleMouseDown = this.handleMouseDown.bind(this);\n    this.handleMouseEnter = this.handleMouseEnter.bind(this);\n    this.handleMouseLeave = this.handleMouseLeave.bind(this);\n    this.handleMouseUp = this.handleMouseUp.bind(this);\n  }\n\n  componentDidMount() {\n    document.addEventListener('mouseup', this.handleMouseUp);\n  }\n\n  componentWillUnmount() {\n    document.removeEventListener('mouseup', this.handleMouseUp);\n  }\n\n  handleMouseUp() {\n    this.toggleTooltip(false);\n    this.setState({dragging: false});\n  }\n\n  handleMouseDown() {\n    this.toggleTooltip(true);\n    this.setState({dragging: true});\n  }\n\n  handleMouseEnter() {\n    this.toggleTooltip(true);\n  }\n\n  handleMouseLeave() {\n    if (!this.state.dragging) {\n      this.toggleTooltip(false);\n    }\n  }\n\n  toggleTooltip(showTooltip) {\n    const {displayTooltip} = this.props;\n    this.setState({showTooltip: displayTooltip && showTooltip});\n  }\n\n  render() {\n    return (\n      <div\n        onMouseEnter={this.handleMouseEnter}\n        onMouseLeave={this.handleMouseLeave}\n        onMouseDown={this.handleMouseDown}\n        onMouseUp={this.handleMouseUp}\n        className=\"slider-handle\"\n        style={{left: `${this.props.offset}%`}}\n        >\n        {this.state.showTooltip &&\n          <div className=\"slider-tooltip\">\n            {this.props.value}\n          </div>}\n        <div className=\"slider-handle-inner\"/>\n      </div>\n    );\n  }\n}\n\nSliderHandle.propTypes = {\n  displayTooltip: PropTypes.bool,\n  offset: PropTypes.number,\n  value: PropTypes.number\n};\n\nSliderHandle.defaultProps = {\n  displayTooltip: true\n};\n"}});