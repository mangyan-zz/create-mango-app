const Generator = require('yeoman-generator');
const {basename} = require('path');
const debug = require('debug')('create-mango-app');

module.exports = class PCWebGenerator extends Generator {
	constructor(args, opts) {
		super(args, opts);

		this.name = basename(process.cwd());
		this.props = {};
	}

	prompting() {
		const prompts = [
			//你想要安装
			// {
			//   name: 'react',
			//   message: '选择你想要的前端中间件?',
			//   type: 'checkbox',
			//   choices: [
			//     { name: 'antd', value: 'antd' },
			//     { name: 'mango-motion', value: 'mango-motion' },
			//   ],
			// },
		];
		return this.prompt(prompts).then(props => {
			this.props = Object.assign(this.props, props);
		});
	}

	writing() {
		debug(`this.name: ${this.name}`);
		debug(`this.props: ${JSON.stringify(this.props)}`);

		const context = {
			name: this.name,
			props: this.props,
		};


		this.fs.copy(this.templatePath('app', 'mock', '.*'), this.destinationPath('mock'));
		this.fs.copy(this.templatePath('app', 'src', 'assets'), this.destinationPath('src/assets'));
		this.fs.copy(this.templatePath('app', 'src', 'layouts'), this.destinationPath('src/layouts'));
		this.fs.copy(this.templatePath('app', 'src', 'pages'), this.destinationPath('src/pages'));
		this.fs.copy(this.templatePath('app', 'src', 'global.css'), this.destinationPath('src/global.css'));
		this.fs.copyTpl(this.templatePath('app', 'package.json'), this.destinationPath('package.json'), context);
		this.fs.copy(this.templatePath('app', '_gitignore'), this.destinationPath('.gitignore'));
		this.fs.copy(this.templatePath('app', '.editorconfig'), this.destinationPath('.editorconfig'));
		this.fs.copy(this.templatePath('app', '.env'), this.destinationPath('.env'));
		this.fs.copyTpl(this.templatePath('app', '.umirc.js'), this.destinationPath('.umirc.js'), context);
		this.fs.copy(this.templatePath('app', '.eslintrc'), this.destinationPath('.eslintrc'));
		this.fs.copy(this.templatePath('app', '.prettierrc'), this.destinationPath('.prettierrc'));
		this.fs.copy(this.templatePath('app', '.prettierignore'), this.destinationPath('.prettierignore'));


		//接受到选择的第三方库处理

	}
};
