webpackJsonp([651],{3845:function(module,exports){module.exports="@import '../../../common.scss';\n\n.footer {\n  display: flex;\n  align-items: center;\n  height: 54px;\n  background-color: #476b84;\n}\n\n.link {\n  padding: 0 17px;\n  display: flex;\n  flex: 1 0 auto;\n  align-items: center;\n  height: 100%;\n  font-family: $FontRoman;\n  font-size: 16px;\n  color: $D80;\n  text-decoration: none;\n\n  &:hover {\n    background: $D30;\n    text-decoration: none;\n  }\n\n  &:focus,\n  &:active { text-decoration: none; }\n\n  &.tinyLink {\n    flex: 0 0 54px;\n    justify-content: center;\n    padding: 0;\n  }\n}\n\n.tinyLink {\n  border: 1px solid #375b74;\n  border-top: 0;\n  border-bottom: 0;\n\n  &:first-child { border-left-color: transparent; }\n  &:last-child { border-right-color: transparent; }\n\n  &:hover { background: #577083; }\n}\n\n.linkIcon {\n  line-height: 1;\n  svg { vertical-align: -1px; }\n}\n\n.link:not(.tinyLink) .linkIcon { margin-right: 15px; }\n\n"}});