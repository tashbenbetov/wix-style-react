webpackJsonp([270],{1677:function(module,exports){module.exports="const labelDriverFactory = component => ({\n  click: () => component.click(),\n  getLabelText: () => component.getText(),\n  getAssociatedInput: () => component.getAttribute('for').then(id => $(`#${id}`)),\n  getClassList: () => component.getAttribute('class'),\n  element: () => component\n});\n\nexport default labelDriverFactory;\n"}});