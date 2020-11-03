const Controller = require('egg').Controller

class BlogController extends Controller {
  index() {
    const { ctx } = this
    ctx.body = ctx.service.blog.find()
  }
}

module.exports = BlogController