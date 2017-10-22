webpackJsonp([405],{1542:function(module,exports){module.exports="/**\n * Created by lioru on 05/05/2017.\n */\nimport React from 'react';\nimport {mount} from 'enzyme';\nimport {Col, Row} from './Grid';\nimport classNames from 'classnames';\n\ndescribe('Grid', () => {\n\n  describe('breakpoints col options', () => {\n    it('should add col xs class when using span attribute ', () => {\n      const element = mount(<Col span=\"6\"/>);\n      expect(element.hasClass('colXs6')).toEqual(true);\n    });\n\n    it('should add col sm class when using sm attribute ', () => {\n      const element = mount(<Col sm=\"3\"/>);\n      expect(element.hasClass('colSm3')).toEqual(true);\n    });\n\n    it('should add col md class when using md attribute ', () => {\n      const element = mount(<Col md=\"12\"/>);\n      expect(element.hasClass('colMd12')).toEqual(true);\n    });\n\n    it('should add col lg class when using lg attribute ', () => {\n      const element = mount(<Col lg=\"1\"/>);\n      expect(element.hasClass('colLg1')).toEqual(true);\n    });\n\n    it('should add col xl class when using xl attribute ', () => {\n      const element = mount(<Col xl=\"5\"/>);\n      expect(element.hasClass('colXl5')).toEqual(true);\n    });\n\n    it('should accept numeric values', () => {\n      const element = mount(<Col md={12}/>);\n      expect(element.hasClass('colMd12')).toEqual(true);\n    });\n\n    it('should add col xl class when using xl attribute ', () => {\n      const element = mount(<Col sm=\"3\" md=\"12\" lg=\"1\" xl=\"5\"/>);\n      expect(element.hasClass('colXl5')).toEqual(true);\n      expect(element.hasClass('colLg1')).toEqual(true);\n      expect(element.hasClass('colMd12')).toEqual(true);\n      expect(element.hasClass('colSm3')).toEqual(true);\n    });\n  });\n\n  describe('breakpoints hide options', () => {\n    it('should add hidden xs class when using hiddenxs attribute ', () => {\n      const element = mount(<Col xs=\"hidden\"/>);\n      expect(element.hasClass('hiddenXs')).toEqual(true);\n    });\n\n    it('should add hidden sm class when using hiddensm attribute ', () => {\n      const element = mount(<Col sm=\"hidden\"/>);\n      expect(element.hasClass('hiddenSm')).toEqual(true);\n    });\n\n    it('should add hidden md class when using hiddenmd attribute ', () => {\n      const element = mount(<Col md=\"hidden\"/>);\n      expect(element.hasClass('hiddenMd')).toEqual(true);\n    });\n\n    it('should add hidden lg class when using hiddenlg attribute ', () => {\n      const element = mount(<Col lg=\"hidden\"/>);\n      expect(element.hasClass('hiddenLg')).toEqual(true);\n    });\n\n  });\n\n  describe('breakpoints show options', () => {\n    it('should add visible xs class when using xs attribute ', () => {\n      const element = mount(<Col xs=\"visible\"/>);\n      expect(element.hasClass('visibleXs')).toEqual(true);\n    });\n\n    it('should add visible sm class when using sm attribute ', () => {\n      const element = mount(<Col sm=\"visible\"/>);\n      expect(element.hasClass('visibleSm')).toEqual(true);\n    });\n\n    it('should add visible md class when using md attribute ', () => {\n      const element = mount(<Col md=\"visible\"/>);\n      expect(element.hasClass('visibleMd')).toEqual(true);\n    });\n\n    it('should add visible lg class when using lg attribute ', () => {\n      const element = mount(<Col lg=\"visible\"/>);\n      expect(element.hasClass('visibleLg')).toEqual(true);\n    });\n\n  });\n\n  describe('pass className', () => {\n\n    it('should pass className to col element', () => {\n      const element = mount(<Col className=\"test\"/>);\n      expect(element.hasClass('test')).toEqual(true);\n    });\n\n    it('should pass className to row element', () => {\n      const element = mount(<Row className=\"test\"/>);\n      expect(element.hasClass('test')).toEqual(true);\n    });\n\n    it('should pass multiple className to col element', () => {\n      const element = mount(<Col className={classNames('test1', 'test2')}/>);\n      expect(element.hasClass('test1')).toEqual(true);\n      expect(element.hasClass('test2')).toEqual(true);\n    });\n\n    it('should pass className to row element', () => {\n      const element = mount(<Row className={classNames('test1', 'test2')}/>);\n      expect(element.hasClass('test1')).toEqual(true);\n      expect(element.hasClass('test2')).toEqual(true);\n    });\n  });\n\n  describe('support dataHook', () => {\n    it('for Row', () => {\n      const element = mount(<Col dataHook=\"test\"/>);\n      expect(element.find('[data-hook=\"test\"]').length).toEqual(1);\n    });\n\n    it('for Col', () => {\n      const element = mount(<Row dataHook=\"test\"/>);\n      expect(element.find('[data-hook=\"test\"]').length).toEqual(1);\n    });\n  });\n});\n"}});