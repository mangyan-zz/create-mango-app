const proxy = require('http-proxy-middleware');

module.exports = function (app) {

	app.use(proxy('/api', {
		target: 'https://api.sit.ihomefnt.org/mobile-api/',
		'changeOrigin': true,
		'pathRewrite': {'^/api': ''}
	}));


	app.use(proxy('/uploadApi', {
		target: 'https://unify-file.sit.ihomefnt.org/unifyfile/',
		'changeOrigin': true,
		'pathRewrite': {'^/uploadApi': ''}
	}));


};

//api
//dev
//http://192.168.1.15:11155/n

//sit
//http://192.168.1.31:11155/

//文件上传地址
//dev
//http://192.168.1.13:11133/unifyfile

//sit
//https://unify-file.sit.ihomefnt.org
