module.exports = {
	'extends': 'react-app',
	'parser': 'babel-eslint',
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true,
			'modules': true,
			'experimentalObjectRestSpread': true
		}
	},
	'env': {
		browser: true,
		node: true,
		commonjs: true,
		es6: true
	},
	rules: {
		/**
		 * JS代码规范检测
		 */
		/**
		 * 代码结构类
		 */
		//符合团队规范化检测配置
		//@fixable 结尾必须有分号 11510->11119  出现391个错误
		'semi': 'off',
		//@fixable 必须使用单引号，禁止使用双引号  11119->11081  38
		'quotes': 'off',
		//@fixable 一个缩进必须用四个空格替代  11081->6927 4154
		'indent': 'off',
		//@fixable 文件最后一行必须有一个空行 3228->3166 62
		'eol-last': 'off',
		//@fixable 代码块首尾必须要空行 2898->2864  34
		'padded-blocks': 'off',
		//限制一行的长度
		// @off 现在编辑器已经很智能了，不需要限制一行的长度  2679->2199  480
		'max-len': 'off',
		//限制一个文件最多的行数
		// @off 没必要限制
		'max-lines': 'off',
		'spaced-comment': 'off',
		'no-tabs': 'off',
		'object-curly-spacing': 'off',

		//因旧项目修改成本较大，暂时关闭的检测
		// //禁止使用 tabs 6927->4067  2860
		// //关键字前后必须有空格  3729->3636 93
		// 'keyword-spacing': 'off',
		// //@fixable 大括号内的首尾必须有换行 3284->3228  56
		// 'object-curly-newline': 'off',
		// //@fixable 对象字面量只有一行时，大括号内的首尾必须有空格  3166->2898 268
		// 'object-curly-spacing': 'off',
		// //@fixable 禁止行尾有空格  7643->7627  16
		// 'no-trailing-spaces': 'off',
		// //禁止混用空格和缩进 7627->7055  372
		// 'no-mixed-spaces-and-tabs': 'off',
		// //@fixable 对象字面量中冒号前面禁止有空格，后面必须有空格 7054->7002 52
		// 'key-spacing': 'off',
		// //@fixable 操作符左右必须有空格，比如 let sum = 1 + 2; 4569->4437  132
		// 'space-infix-ops': 'off',
		// //@fixable 箭头函数的箭头前后必须有空格 2872->2856  16
		// 'arrow-spacing': 'off',
		// //@fixable 逗号前禁止有空格，逗号后必须要有空格 2199->1734  365
		// 'comma-spacing': 'off',
		// //@fixable 禁止出现超过三行的连续空行
		// 'no-multiple-empty-lines': 'off',
		// //@fixable 代码块如果在一行内，那么大括号内的首尾必须有空格，比如 function () { alert('Hello') } 338->306  32
		// 'block-spacing': 'off',
		// //禁止出现空代码块，允许 catch 为空代码块 193->188  5
		// 'no-empty': 'off',
		// //@fixable 变量申明必须每行一个
		// 'one-var-declaration-per-line': 'off',
		// //@fixable function 的小括号之前必须要有空格
		// 'space-before-function-paren': 'off',
		// //@fixable 数组的括号内的前后禁止有空格
		// 'array-bracket-spacing': 'off',

		/**
		 * 代码规范类
		 */
		//符合团队规范化检测配置
		//@fixable 对象的最后一个属性末尾必须有逗号
		//@off 没必要限制  2617->2245  372
		'comma-dangle': 'off',
		//@fixable 必须使用模版字符串而不是字符串连接
		//@off 字符串连接很常用 2245->2222  23
		'prefer-template': 'off',
		//@fixable if 与 else 的大括号风格必须一致
		//@off else 代码块可能前面需要有一行注释  1779->1772  7
		'brace-style': 'off',
		//禁止使用嵌套的三元表达式，比如 a ? b : c ? d : e
		// @off 没必要限制 1772->1766  6
		'no-nested-ternary': 'off',
		//禁止混用不同的操作符，比如 let foo = a && b < 0 || c > 0 || d + 1 === 0
		// @off 太严格了，可以由使用者自己去判断如何混用操作符 1766->1730  36
		'no-mixed-operators': 'off',
		//var 必须在作用域的最前面
		// @off var 不在最前面也是很常见的用法 1730->1719  11
		'vars-on-top': 'off',
		//@fixable 必须使用 !a 替代 a ? false : true
		// @off 后者表达的更清晰  1719->1715  4
		'no-unneeded-ternary': 'off',
		//变量名必须是 camelcase 风格的
		// @off 很多 api 或文件名都不是 camelcase  22752->22711  41
		'camelcase': 'off',
		//@fixable 对象字面量的键名禁止用引号括起来
		// @off 没必要限制 1734->1499  235
		'quote-props': 'off',
		//必须使用 ...args 而不是 arguments
		// @off 没必要强制要求 279->273  6
		'prefer-rest-params': 'off',
		//@fixable 禁止出现 foo['bar']，必须写成 foo.bar
		// @off 当需要写一系列属性的时候，可以更统一  196->195  1
		'dot-notation': 'off',
		//no-restricted-syntax
		// 禁止使用特定的语法
		// @off 它用于限制某个具体的语法不能使用
		'no-restricted-syntax': 'off',
		//@fixable 对象字面量内的属性每行必须只有一个
		// @off 没必要限制
		'object-property-newline': 'off',
		//@fixable 必须使用 ... 而不是 apply，比如 foo(...args)
		// @off  apply 很常用
		'prefer-spread': 'off',
		//@fixable 必须使用模版字符串而不是字符串连接
		// @off 字符串连接很常用
		'prefer-template': 'off',
		//switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块  273->252  21
		'no-case-declarations': 'off',
		//禁止变量名出现下划线  3885->3729  156
		'no-underscore-dangle': 'off',
		//windows 编码差异
		'linebreak-style': 'off',

		//因旧项目修改成本较大，暂时关闭的检测

		// //@fixable 禁止使用 var 2852->2786  66
		// 'no-var': 'off',npm
		// //@fixable 小括号内的首尾禁止有空格 2767->2749  18
		// 'space-in-parens': 'off',
		// //@fixable 禁止出现连续的多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等  2749->2639  110
		// 'no-multi-spaces': 'off',
		// //@fixable 注释的斜线或 * 后必须有空格  2222->1927  295
		// 'spaced-comment': 'off',
		// //禁止变量申明时用逗号一次申明多个  1927->1917  10
		// 'one-var': 'off',
		// //@fixable if, function 等的大括号之前必须要有空格，比如 if (a) {       1903->1891  12
		// 'space-before-blocks': 'off',
		// //定义过的变量必须使用  1885->1796  89
		// 'no-unused-vars': 'off',
		// //禁止使用 console  日志的输出统一由日志工具类来控制  1796->1781  15
		// 'no-console': 'off',
		// //@fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外 4437->3698  739
		// 'eqeqeq': 'off',

		// //此规则强制在JSX属性中一致使用双引号 252->199  53
		// 'jsx-quotes': 'off',
		// //@fixable 禁止出现多余的分号  146->126  20
		// 'no-extra-semi': 'off',
		// //禁止出现没必要的字符串连接 126->109  17
		'no-useless-concat': 'off',
		// //@fixable 分号必须写在行尾，禁止在行首出现 109->107  2
		// 'semi-style': 'off',
		// //禁止使用没必要的 {} 作为代码块 90->82  8
		// 'no-lone-blocks': 'off',
		// //@fixable 禁止使用 'strict'; 80->1
		// // 'strict': 'off',
		// //alert必须使用Logger工具类中的alert  防止alert未关闭
		// 'no-alert': 'off',
		// //@fixable 禁止属性前有空格，比如 foo. bar() 21->
		// 'no-whitespace-before-property': 'off',
		// //@fixable 禁止使用 'strict';
		// 'strict': 'off',
		// 'lines-around-directive': 'off',
		// //yoda
		// // @fixable 必须使用 if (foo === 5) 而不是 if (5 === foo)
		// 'yoda': 'off',
		// //@fixable if 后面必须要有 {，除非是单行 if
		// 'curly': 'off',
		// //@fixable new 后面的类必须有小括号
		// 'new-parens': 'off',

		/**
		 * 代码功能类
		 */
		//符合团队规范化检测配置
		//@fixable 禁止在 else 内使用 return，必须改为提前结束
		//@off else 中使用 return 可以使代码结构更清晰 2864->2852  8
		'no-else-return': 'off',
		//@fixable 箭头函数能够省略 return 的时候，必须省略，比如必须写成 () => 0，禁止写成 () => { return 0 }
		//@off 箭头函数的返回值，应该允许灵活设置  2786->2767  9
		'arrow-body-style': 'off',
		//@fixable 箭头函数只有一个参数的时候，必须加括号
		//@off 应该允许灵活设置 2639->2624  15
		'arrow-parens': 'off',
		//禁止函数在不同分支返回不同类型的值
		//@off 太严格了 1917->1913  4
		'consistent-return': 'off',
		//禁止变量名与上层作用域内的定义过的变量重复
		//@off 很多时候函数的形参和传参是同名的 1913->1903  10
		'no-shadow': 'off',
		//禁止使用 ++ 或 --
		//@off 没必要限制  1891->1885  6
		'no-plusplus': 'off',
		//在类的非静态方法中，必须存在对 this 的引用
		// @off 太严格了  1715->1710  5
		'class-methods-use-this': 'off',
		//必须使用解构
		// @off 没必要强制要求 6645->5980  665
		'prefer-destructuring': 'off',
		//@fixable 必须使用箭头函数作为回调
		'prefer-arrow-callback': 'off',
		//@fixable 申明后不再被修改的变量必须使用 const 来申明 4067->3885 182
		'prefer-const': 'off',
		//函数必须有名字
		'func-names': 'off',
		//禁止使用指定的全局变量
		// @off 它用于限制某个具体的变量名不能使用
		'no-restricted-globals': 'off',
		//@fixable 必须使用 a = {b} 而不是 a = {b: b}
		// @off 没必要强制要求
		'object-shorthand': 'off',
		//@fixable 必须使用 x = x + y 而不是 x += y
		// @off 没必要限制
		'operator-assignment': 'off',
		//禁止在对象字面量中出现重复名称的键名
		'no-dupe-keys': 'off',
		//@fixable 禁止 else 中只有一个单独的 if  400->375  25
		// @off 单独的 if 可以把逻辑表达的更清楚
		'no-lonely-if': 'off',
		//@fixable 禁止没必要的 return
		// @off 没必要限制 return  199->196  3
		'no-useless-return': 'off',
		//禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
		// @off hasOwnProperty 比较常用
		'no-prototype-builtins': 'off',
		//switch 语句必须有 default
		// @off 太严格了  170->146  24
		'default-case': 'off',
		//禁止使用位运算
		// @off 位运算很常见
		'no-bitwise': 'off',
		//禁止使用指定的对象属性
		// @off 它用于限制某个具体的 api 不能使用
		'no-restricted-properties': 'off',
		//禁止在 return 语句里赋值  188->170  18
		'no-return-assign': 'off',
		//变量必须先定义后使用  9592->7750  1842
		'no-use-before-define': 'off',
		//禁止无用的表达式  3698->3646  52
		'no-unused-expressions': 'off',
		//require 必须在全局作用域下 3636->3284  352
		'global-require': 'off',

		//因旧项目修改成本较大，暂时关闭的检测
		// //require 必须在全局作用域下 3636->3284  352
		// 'global-require': 'off',
		//禁止对函数的参数重新赋值  2624->2617  7
		'no-param-reassign': 'off',
		// //禁止在测试表达式中使用赋值语句，除非这个赋值语句被括号包起来了 1781->1779  2
		// 'no-cond-assign': 'off',


		// //禁止出现没必要的 constructor，比如 constructor(value) { super(value) }
		// 'no-useless-constructor': 'off',
		// //禁止使用逗号操作符 375->372  3
		// 'no-sequences': 'off',
		//数组的方法除了 forEach 之外，回调函数必须有返回值 372->363  9
		'array-callback-return': 'off',
		//禁止使用未定义的变量  363->338  25
		'no-undef': 'off',
		// //禁止在 return, throw, break 或 continue 之后还有代码  306->279  27
		// 'no-unreachable': 'off',

		//parseInt 必须传入第二个参数  107->90 17
		'radix': 'off',
		// //@fixable new, typeof 等后面必须有空格，++, -- 等禁止有空格，比如：
		// // let foo = new Person();
		// // bar = bar++;
		// 'space-unary-ops': 'off',
		// //typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function'   22->
		// 'valid-typeof': 'off',
		// //禁止将自己赋值给自己  3
		// 'no-self-assign': 'off',
		// //禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
		// 'no-irregular-whitespace': 'off',
		// //for in 内部必须有 hasOwnProperty
		// 'guard-for-in': 'off',
		// //禁止在循环内的函数中出现循环体条件语句中定义的变量，比如：
		// // for (var i = 0; i < 10; i++) {
		// //     (function () { return i })();
		// // }
		// 'no-loop-func': 'off',

		/**
		 * React代码规范检测
		 */
		//符合团队规范化检测配置

		//定义过的 state 必须使用   10714->10601  113
		// @off 没有官方文档，并且存在很多 bug,不推荐使用airbnb的： https://github.com/yannickcr/eslint-plugin-react/search?q=no-unused-state&type=Issues&utf8=%E2%9C%93
		'react/no-unused-state': 'off',
		//限制文件后缀
		// @off 没必要限制 9764->9592  172
		'react/jsx-filename-extension': 'off',
		//@fixable 第一个 prop 必须得换行 5063->4719  344
		// @off 没必要限制
		'react/jsx-first-prop-new-line': 'off',
		//@fixable 限制每行的 props 数量
		// @off 没必要限制 3646 ->3477 169
		'react/jsx-max-props-per-line': 'off',
		//组件必须写 propTypes
		// @off 不强制要求写 propTypes    3282->2872  410
		'react/prop-types': 'off',
		//	@fixable 结束标签必须与开始标签的那一行对齐
		// 	@off 已经在 jsx-indent 中限制了
		'react/jsx-closing-tag-location': 'off',
		//@fixable 布尔值的属性必须显式的写 someprop={true}
		// @off 没必要限制 950->855  85
		'react/jsx-boolean-value': 'off',
		//禁止出现未使用的 propTypes
		// @off 不强制要求写 propTypes
		'react/no-unused-prop-types': 'off',
		//一个 defaultProps 必须有对应的 propTypes
		// @off 不强制要求写 propTypes
		'react/default-props-match-prop-types': 'off',
		//jsx 中禁止使用 bind
		'react/jsx-no-bind': 'off',
		//禁止使用数组的 index 作为 key
		'react/no-array-index-key': 'off',
		//@fixable 组件内没有 children 时，必须使用自闭和写法
		// @off 没必要限制
		'react/self-closing-comp': 'off',
		//@fixable 多行的 jsx 必须有括号包起来
		'react/jsx-wrap-multilines': 'off',
		//禁止使用一些指定的 propTypes
		// @off 不强制要求写 propTypes
		'react/forbid-prop-types': 'off',
		//非 required 的 prop 必须有 defaultProps
		// @off 不强制要求写 propTypes
		'react/require-default-props': 'off',
		//必须使用 pure function
		// @off 没必要限制
		'react/prefer-stateless-function': 'off',
		//@fixable jsx 的 children 缩进必须为四个空格 22711->16155  6556
		'react/jsx-indent': 'off',
		//@fixable jsx 的 props 缩进必须为四个空格  16155->12724  3431
		'react/jsx-indent-props': 'off',
		//@fixable 组件内方法必须按照一定规则排序  7750->7643  7
		'react/sort-comp': 'off',
		//@fixable jsx 的开始和闭合处禁止有空格 10601->9764 838
		'react/jsx-tag-spacing': 'off',

		//因旧项目修改成本较大，暂时关闭的检测

		// //@fixable 自闭和标签的反尖括号必须与尖括号的那一行对齐 5980->5063  117
		// 'react/jsx-closing-bracket-location': 'off',
		//禁止使用字符串 ref 3477->3282  195
		'react/no-string-refs': 'off',
		// //禁止在组件的内部存在未转义的 >, ", ' 或 }
		// 'react/no-unescaped-entities': 'off',
		// //禁止拼写错误
		// 'react/no-typos': 'off',
		// //禁止使用未定义的 jsx elemet
		// 'react/jsx-no-undef': 'off',
		// //@fixable props 与 value 之间的等号前后禁止有空格
		// 'react/jsx-equals-spacing': 'off',
		// //render 方法中必须有返回值
		// 'react/require-render-return': 'off',

		/**
		 * import规范检测
		 */
		//因旧项目修改成本较大，暂时关闭的检测
		//确保导入指向可以解析的文件/模块  7002->6645   357
		'import/no-unresolved': 'off',
		//4719->4569  150
		'import/extensions': 'off',
		'import/first': 'off',
		'import/newline-after-import': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',
		'import/no-duplicates': 'off',

		/**
		 * 其他
		 */
		//2856->2679  177
		'function-paren-newline': 'off',
		//1380->950 430
		'react/jsx-curly-brace-presence': ['ignore', {'props': 'ignore', 'children': 'ignore'}]
	}
}
