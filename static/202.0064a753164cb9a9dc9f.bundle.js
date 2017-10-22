webpackJsonp([202],{1745:function(module,exports){module.exports="import React from 'react';\nimport {Html} from 'slate';\n\nconst BLOCK_TAGS = {\n  p: 'paragraph',\n  ul: 'unordered-list',\n  li: 'list-item',\n  ol: 'ordered-list',\n  img: 'image'\n};\n\nconst MARK_TAGS = {\n  em: 'italic',\n  strong: 'bold',\n  u: 'underline'\n};\n\nconst INLINE_TAGS = {\n  a: 'link'\n};\n\nconst rules = [\n  {\n    deserialize(el, next) {\n      const type = BLOCK_TAGS[el.tagName];\n      if (!type) {\n        return;\n      }\n\n      const data = {};\n      switch (type) {\n        case 'image': {\n          data.src = el.attribs.src;\n          break;\n        }\n        default: break;\n      }\n\n      return {\n        kind: 'block',\n        type,\n        data,\n        nodes: next(el.children)\n      };\n    },\n    serialize(object, children) {\n      if (object.kind !== 'block') {\n        return;\n      }\n\n      switch (object.type) {\n        case 'paragraph': return <p>{children}</p>;\n        case 'list-item': return <li>{children}</li>;\n        case 'ordered-list': return <ol>{children}</ol>;\n        case 'unordered-list': return <ul>{children}</ul>;//data-hook=\"editor-image\"\n        case 'image': return <img data-hook=\"editor-image\" src={object.data.get('src')}/>;\n        default: return {children};\n      }\n    }\n  },\n  {\n    deserialize(el, next) {\n      const type = MARK_TAGS[el.tagName];\n      if (!type) {\n        return;\n      }\n\n      return {\n        kind: 'mark',\n        type,\n        nodes: next(el.children)\n      };\n    },\n    serialize(object, children) {\n      if (object.kind !== 'mark') {\n        return;\n      }\n\n      switch (object.type) {\n        case 'bold': return <strong>{children}</strong>;\n        case 'italic': return <em>{children}</em>;\n        case 'underline': return <u>{children}</u>;\n        default: return {children};\n      }\n    }\n  },\n  {\n    deserialize(el, next) {\n      const type = INLINE_TAGS[el.tagName];\n      if (!type) {\n        return;\n      }\n\n      return {\n        kind: 'inline',\n        type,\n        data: {\n          href: el.attribs.href\n        },\n        nodes: next(el.children)\n      };\n    },\n    serialize(object, children) {\n      if (object.kind !== 'inline') {\n        return;\n      }\n\n      switch (object.type) {\n        case 'link': return <a rel=\"noopener noreferrer\" target=\"_blank\" href={object.data.get('href')}>{children}</a>;\n        default: return {children};\n      }\n    }\n  }\n];\n\nexport default new Html({rules});\n"}});