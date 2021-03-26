import md from './index.md'

var content = document.createElement('div')
content.innerHTML = md
document.body.appendChild(content)
