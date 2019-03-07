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

		this.fs.copy(this.templatePath('rn-app', '__tests__'), this.destinationPath('__tests__'));
		this.fs.copy(this.templatePath('rn-app', 'android'), this.destinationPath('android'));
		this.fs.copy(this.templatePath('rn-app', 'gen'), this.destinationPath('gen'));
		this.fs.copy(this.templatePath('rn-app', 'ios'), this.destinationPath('ios'));
		this.fs.copy(this.templatePath('rn-app', 'scripts'), this.destinationPath('scripts'));
		this.fs.copy(this.templatePath('rn-app', 'src'), this.destinationPath('src'));
		this.fs.copy(this.templatePath('rn-app', '.gitignore'), this.destinationPath('.gitignore'));
		this.fs.copy(this.templatePath('rn-app', '.babel.config.js'), this.destinationPath('.babel.config.js'));
		this.fs.copy(this.templatePath('rn-app', 'index.js'), this.destinationPath('index.js'));
		this.fs.copy(this.templatePath('rn-app', 'package.json'), this.destinationPath('package.json'));

		//接受到选择的第三方库处理

	}
};
