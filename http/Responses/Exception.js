class Exception {
  constructor(data, status=500, message) {
    this.data = data
    this.status = status
    this.message = message
  }
}

export default Exception