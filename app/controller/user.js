'use strict'

const Controller = require('egg').Controller
const { SuccessResponse } = require('@util/response')

class UserController extends Controller {
  async login() {
    const { ctx } = this
    ctx.body = new SuccessResponse({ token: 'XXX' })
  }

  async info() {
    
  }
}

module.exports = UserController