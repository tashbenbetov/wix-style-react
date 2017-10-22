webpackJsonp([465],{1482:function(module,exports){module.exports="import {Children} from 'react';\n\nconst validators = {\n  ONCE: (types, i, type) =>\n    types[i] && types[i].type === type ? i + 1 : false,\n\n  OPTIONAL: (types, i, type) =>\n    types[i] && types[i].type === type ? i + 1 : i,\n\n  ANY: types =>\n    types.length,\n\n  MULTIPLE: (types, i, type) => {\n    if (!types[i] || types[i].type !== type) {\n      return false;\n    }\n    while (types[i] && types[i].type === type) {\n      ++i;\n    }\n    return i;\n  }\n};\n\nconst error = (componentName, rules) => {\n  const orderedTypes = rules.map(rule => {\n    return rule.validation === 'ANY' ?\n      `* (${rule.validation})` :\n      `${rule.type.name} (${rule.validation})`;\n  }).join(', ');\n  return new Error(`${componentName} should have children of the following types in this order: ${orderedTypes}`);\n};\n\nexport const once = type => ({validation: 'ONCE', type});\nexport const optional = type => ({validation: 'OPTIONAL', type});\nexport const multiple = type => ({validation: 'MULTIPLE', type});\nexport const any = () => ({validation: 'ANY'});\n\nexport const children = (...rules) => {\n  return (props, propName, componentName) => {\n    if (!rules || rules.length === 0) {\n      return new Error(`${componentName} should have at least a single child declaration rule`);\n    }\n    const childrenAsArray = Children.toArray(props[propName]);\n    const result = rules.reduce((acc, curr) => {\n      if (acc === false) {\n        return acc;\n      }\n      return validators[curr.validation](childrenAsArray, acc, curr.type);\n    }, 0);\n    if (result === false || childrenAsArray[result]) {\n      return error(componentName, rules);\n    }\n  };\n};\n"}});