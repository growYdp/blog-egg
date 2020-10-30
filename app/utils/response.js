class Response {
  constructor({ errno, data, message }) {
    this.errno = errno

    if (data) {
      this.data = data
    }

    if (message) {
      this.message = message
    }
  }
}

class SuccessResponse extends Response {
  constructor(data = {}) {
    super({
      errno: 0,
      data
    })
  }
}

class ErrorResponse extends Response {
  constructor({ errno = 1, message }) {
    super({
      errno,
      message
    })
  }
}

module.exports = {
  SuccessResponse,
  ErrorResponse
}