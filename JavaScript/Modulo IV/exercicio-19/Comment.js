class Comment {
  constructor(username, content) {
    this.username = username
    this.content = content
    this.creattedAt = new Date()
  }
}

module.exports = Comment