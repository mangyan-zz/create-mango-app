/**
 * Created by zhongzihuan on 2019/3/7.
 */

const ENV = {DEV: 'dev', CHECK: 'check', RELEASE: 'release'};

const ENV_NOW = ENV.DEV;//当前环境

const PAGESIZE = 10;	//分页数

//开发环境
const API_DEV = '';

//测试环境
const API_CHECK = '';

//上线环境
const API_RELEASE = '';

const BASE_API = () => {
  let hostUrl;
  switch (ENV_NOW) {
    case ENV.DEV:
      hostUrl = API_DEV;
      break;
    case ENV.CHECK:
      hostUrl = API_CHECK;
      break;
    case ENV.RELEASE:
      hostUrl = API_RELEASE;
      break;
  }
  return hostUrl;
};

export { BASE_API, ENV_NOW };
