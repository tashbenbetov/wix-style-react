webpackJsonp([665],{3831:function(module,exports){module.exports="@import '../common.scss';\n\n.icon {\n\tsvg {\n\t\tvertical-align: middle;\n\t}\n}\n\n.text {\n\tvertical-align: middle;\n\n\t:global(.ltr) &, & {\n\t\tmargin-left: 6px;\n\t\tmargin-right: 0;\n\t}\n\n\t:global(.rtl) & {\n\t\tmargin-right: 6px;\n\t\tmargin-left: 0;\n\t}\n\n\t:global(.ltr) .icon + &, .icon + & {\n\t\tmargin-left: 12px;\n\t\tmargin-right: 0;\n\t}\n\n\t:global(.rtl) .icon + & {\n\t\tmargin-right: 12px;\n\t\tmargin-left: 0;\n\t}\n}\n\n.menuItem {\n\t& + & {\n\t\tmargin-top: 6px;\n\t}\n}\n\n.button {\n\tmargin: 0;\n\tpadding: 0;\n\tbackground: none;\n\tborder: none;\n\tcursor: pointer;\n\tfont: inherit;\n\toutline: none;\n\n\t&:hover {\n\t\tcolor: $B10;\n\t}\n}\n"}});