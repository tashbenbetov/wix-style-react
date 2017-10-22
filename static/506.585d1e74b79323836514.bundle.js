webpackJsonp([506],{1441:function(module,exports){module.exports="export default (path, baseUrlLink = '', baseUrlValue = null, pathSeparator = '/') => {\n\n  const trimPath = (path, pathSeparator) => {\n    const escapedString = pathSeparator.replace(/[[\\](){}?*+^$\\\\.|-]/g, '\\\\$&');\n\n    return path.replace(\n      new RegExp(`^[ ${escapedString}]+|[ ${escapedString}]+$`, 'g'),\n      ''\n    );\n  };\n\n  const explodePath = (path, pathSeparator) => {\n    const trimedPath = trimPath(path, pathSeparator);\n\n    if (trimedPath === '') {\n      return [];\n    }\n\n    return trimedPath.split(pathSeparator);\n  };\n\n  const pathArr = explodePath(path, pathSeparator);\n  const options = [];\n  let link = baseUrlLink;\n  const idOffset = baseUrlValue ? 1 : 0;\n\n  if (baseUrlValue) {\n    options.push({id: 0, value: baseUrlValue, link});\n  }\n\n  pathArr.map((segment, id) => {\n    link += `/${segment}`;\n    options.push({id: idOffset + id, value: segment, link});\n    return options;\n  });\n  return options;\n};\n"}});