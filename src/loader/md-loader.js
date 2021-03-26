var marked = require('marked')

module.exports = function (source) {
  var html = marked(source)
  return html
}
