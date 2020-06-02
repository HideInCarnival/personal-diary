/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: [ '*' ]
  };

  config.cors = {
    // 允许所有跨域访问，注释掉则允许上面 白名单 访问
    origin: '*',
    credentials: true, // 允许 Cookie 跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_bobben';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
    mysql: {
      client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'cjw1017',
        database: 'diary'
      },
      app: true,
      agent: false
    }
  };
};
