webpackJsonp([495],{1452:function(module,exports){module.exports='const buttonWithOptionsDriverFactory = component => ({\n  click: () => component.click(),\n  getButton: () => component.$(`button`),\n  getDropdown: () => component.$(`[data-hook="dropdown-layout-options"]`),\n  getDropdownItem: index => component.$$(`[data-hook="dropdown-layout-options"] div`).get(index).getText(),\n  getDropdownItemsCount: () => component.$$(`[data-hook="dropdown-layout-options"] div`).getText().count(),\n  element: () => component\n});\n\nexport default buttonWithOptionsDriverFactory;\n'}});