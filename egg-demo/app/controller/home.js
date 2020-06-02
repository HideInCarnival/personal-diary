'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, client';
  }
  async list() {
    const { ctx } = this;
    const list = await ctx.service.diary.list();
    if (list) {
      ctx.body = {
        status: 200,
        data: list
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败'
      };
    }
  }
  async add() {
    const { ctx } = this;
    const data = { ...ctx.request.body };
    const result = await ctx.service.diary.add(data);
    if (result) {
      ctx.body = {
        status: 200,
        data: result
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '添加失败'
      };
    }
  }
  async update() {
    const { ctx } = this;
    const data = { ...ctx.request.body };
    const result = await ctx.service.diary.update(data);
    if (result) {
      ctx.body = {
        status: 200,
        data: result
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '修改失败'
      };
    }
  }
  async searchById() {
    const { ctx } = this;
    const id = ctx.params.id;
    const result = await ctx.service.diary.searchById(id);
    if (result) {
      ctx.body = {
        status: 200,
        data: result
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '查询失败'
      };
    }
  }
  async deleteById() {
    console.log(111);
    const { ctx } = this;
    const { id } = ctx.request.body;
    const result = await ctx.service.diary.deleteById(id);
    if (result) {
      ctx.body = {
        status: 200,
        data: result
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '删除失败'
      };
    }
  }
}

module.exports = HomeController;
