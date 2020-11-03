const Service = require('egg').Service

class BlogService extends Service {
  find() {
    const blog = [{id: 1, title: '测试', cover: '/', content: '测试内容', description: '测试描述', status: 0}]
    return blog
  }
}

module.exports = BlogService