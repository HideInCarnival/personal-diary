'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async user() {
        return {
            title: 'hello',
            content: 'hhhhh'
        };
    }
}

module.exports = UserService;