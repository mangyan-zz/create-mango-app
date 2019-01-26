const fs = require('fs');
const path = require('path');

//解析需要遍历的文件夹，我这以E盘根目录为例
const filePath = path.resolve('scripts/develop/newmodule/cptModuleTemp');

let cptName = process.argv.splice(2)[0];
let modulePath = cptName.split('/');
let moduleName = modulePath[modulePath.length - 1];

/*
 * 复制目录、子目录，及其中的文件
 * @param src {String} 要复制的目录
 * @param dist {String} 复制到目标目录
 */
copyDir = (src, dist, callback) => {
	fs.access(dist, function (err) {
		if (err) {
			// 目录不存在时创建目录
			fs.mkdirSync(dist);
		} else {
			callback(-1);
			return false;
		}
		copy(null, src, dist);
	});
};

/**
 * 复制文件
 * @param err
 * @param src
 * @param dist
 * @param callback
 */
copy = (err, src, dist, callback) => {
	if (err) {
		callback(err);
	} else {
		fs.readdir(src, function (err, paths) {
			if (err) {
				callback(err);
			} else {
				paths.forEach(function (path) {
					toWriteNewModule(dist, path, src, callback);
				});
			}
		});
	}
};

/**
 * 文件写入到模块
 */
toWriteNewModule = (dist, path, src, callback) => {
	let toCopySrc = src + '/' + path;
	let toWriteSrc = dist + '/' + path;
	const cptName = 'cptModuleTemp';
	// console.log('目录状态：' + toCopySrc + '===' + toWriteSrc);
	fs.stat(toCopySrc, function (err, stat) {
		if (err) {
			callback(err);
		} else {
			// 判断是文件还是目录
			if (stat.isFile()) {
				if (toWriteSrc.indexOf(cptName) !== -1) {
					toWriteSrc = toWriteSrc.replace(cptName, firstUpperCase(moduleName));
					// console.log('我在' + toWriteSrc);
				}
				fs.writeFileSync(toWriteSrc, fs.readFileSync(toCopySrc));
			} else if (stat.isDirectory()) {
				// 当是目录是，递归复制
				copyDir(toCopySrc, toWriteSrc, callback);
			}
		}
	});
};

/**
 * 将首字母大写
 * @param str
 * @returns {string}
 */
firstUpperCase = (str) => {
	return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
};

copyDir(filePath, './src/modules/' + moduleName, function (err) {
	if (err === -1) {
		console.log('目录模块已经存在');
	} else {
		const hint = `
    1.重命名你的Page、Fragment、Model
    2.将Page和Model注册到你的模块路由表
    `;
		console.log(`Successfully created ${moduleName} module` + hint);

	}
});


