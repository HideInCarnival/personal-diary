'use strict';

const Service = require('egg').Service;

class DiaryService extends Service {
    async list() {
        try {
            const result = await this.app.mysql.select('diaryInfo');
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async add(data) {
        try {
            const result = await this.app.mysql.insert('diaryInfo', data);
            return result;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
    async update(data) {
        try {
            const result = this.app.mysql.update('diaryInfo', data);
            return result;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
    async searchById(id) {
        if (!id) {
            console.log('id不正确');
            return null;
        }
        try {
            const result = this.app.mysql.get('diaryInfo', { id });
            return result;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
    async deleteById(id) {
        if (!id) {
            console.log('id不正确');
            return null;
        }
        try {
            const result = this.app.mysql.delete('diaryInfo', { id });
            return result;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
}

module.exports = DiaryService;