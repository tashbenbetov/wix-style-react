webpackJsonp([548],{1399:function(module,exports){module.exports="import inputAreaWithLabelCompositeDriverFactory from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite.driver';\n\nconst autoCompleteDriverFactory = ({element, wrapper}) => {\n  const input = element.querySelector('input');\n\n  return {\n    ...inputAreaWithLabelCompositeDriverFactory({element, wrapper}),\n    hasAutoComplete: () => !!input\n  };\n};\n\nexport default autoCompleteDriverFactory;\n"}});