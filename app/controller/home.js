'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.request.query)
    ctx.body = [{
      id: 0,
      username: 'growydp7',
      age: 23
    }]
  }
}

module.exports = HomeController;
