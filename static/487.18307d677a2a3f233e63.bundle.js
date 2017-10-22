webpackJsonp([487],{1460:function(module,exports){module.exports="import React from 'react';\nimport {bool, node, oneOf, func, string} from 'prop-types';\nimport classNames from 'classnames';\nimport styles from './CollapsedHeader.scss';\nimport Switch from '../../../src/ToggleSwitch';\nimport WixComponent from '../../../src/BaseComponents/WixComponent';\nimport Collapse from 'react-collapse';\nimport Button from '../../../src/Button';\nimport ArrowDownThin from '../../../src/Icons/dist/components/ArrowDownThin';\nimport ArrowUpThin from '../../../src/Icons/dist/components/ArrowUpThin';\n\nclass CollapsedHeader extends WixComponent {\n\n  static propTypes = {\n    title: node.isRequired,\n    subtitle: node,\n    withoutDivider: bool,\n    children: node,\n    toggleStyle: oneOf(['switch', 'button']),\n    collapsed: bool,\n    onCollapsedChange: func,\n    buttonCollapseText: string,\n    buttonExpandText: string\n  };\n\n  static defaultProps = {\n    subtitle: null,\n    collapsed: false,\n    toggleStyle: 'switch',\n    withoutDivider: false,\n    buttonCollapseText: 'Less',\n    buttonExpandText: 'More'\n  };\n\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      isCollapsed: props.collapsed\n    };\n  }\n\n  componentWillReceiveProps(nextProps) {\n    if (this.props.collapsed !== nextProps.collapsed && nextProps.collapsed !== this.state.isCollapsed) {\n      this.setState({isCollapsed: nextProps.collapsed});\n    }\n  }\n\n  stopPropagation(event) {\n    event.stopPropagation();\n  }\n\n  toggleCollapsed = () => {\n    const {onCollapsedChange} = this.props;\n    const isCollapsed = !this.state.isCollapsed;\n    this.setState({isCollapsed});\n    onCollapsedChange && onCollapsedChange(isCollapsed);\n  };\n\n  render() {\n    const {title, subtitle, withoutDivider, buttonCollapseText, buttonExpandText} = this.props;\n\n    const headerClasses = classNames({\n      [styles.headerOnlyTitle]: !subtitle,\n      [styles.headerTitleSubtitle]: subtitle,\n      [styles.withDivider]: !withoutDivider\n    });\n\n    const switchElement = (\n      <div className={styles.collapsedSwitch} onClick={this.stopPropagation}>\n        <Switch dataHook=\"switch\" onChange={this.toggleCollapsed} checked={!this.state.isCollapsed}/>\n      </div>\n    );\n\n    const buttonElement = (\n      <div className={styles.button} onClick={this.stopPropagation}>\n        <Button\n          dataHook=\"button\"\n          height=\"medium\"\n          prefixIcon={this.state.isCollapsed ? <ArrowDownThin/> : <ArrowUpThin/>}\n          onClick={this.toggleCollapsed}\n          theme=\"whiteblueprimary\"\n          type=\"button\"\n          >\n          {this.state.isCollapsed ? buttonExpandText : buttonCollapseText}\n        </Button>\n      </div>\n    );\n\n    const titleElement = (\n      <div data-hook=\"title\" className={styles.title}>\n        {title}\n      </div>\n    );\n\n    const subtitleElement = subtitle ? (\n      <div data-hook=\"subtitle\" className={styles.subtitle}>\n        {this.props.subtitle}\n      </div>\n    ) : null;\n\n    const toggleElement = this.props.toggleStyle === 'switch' ? switchElement : buttonElement;\n\n    return (\n      <div>\n        <div className={headerClasses} onClick={this.toggleCollapsed}>\n          <div>\n            {titleElement}\n            {subtitleElement}\n          </div>\n          {toggleElement}\n        </div>\n        <Collapse isOpened={!this.state.isCollapsed}>\n          {this.props.children}\n        </Collapse>\n      </div>\n    );\n  }\n}\n\nexport default CollapsedHeader;\n"}});