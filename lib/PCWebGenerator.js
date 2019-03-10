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


		this.fs.copy(this.templatePath('pc-web', 'config'), this.destinationPath('config'));
		this.fs.copy(this.templatePath('pc-web', 'public'), this.destinationPath('public'));
		this.fs.copy(this.templatePath('pc-web', 'scripts'), this.destinationPath('scripts'));
		this.fs.copy(this.templatePath('pc-web', 'src'), this.destinationPath('src'));
		this.fs.copy(this.templatePath('pc-web', '.gitignore'), this.destinationPath('.gitignore'));
		this.fs.copy(this.templatePath('pc-web', '.eslintrc.js'), this.destinationPath('.eslintrc.js'));
		this.fs.copy(this.templatePath('pc-web', 'package.json'), this.destinationPath('package.json'));
		this.fs.copy(this.templatePath('pc-web', 'README.md'), this.destinationPath('README.md'));



		//接受到选择的第三方库处理

	}
};
