const list = document.getElementById('target')

const item1 = document.createElement('li')
const text1 = document.createTextNode('First item')
item1.appendChild(text1)
list.appendChild(item1)

const item2 = document.createElement('li')
const text2 = document.createTextNode('Second item')
item2.id='my-item'
item2.appendChild(text2)
list.appendChild(item2)

const item3 = document.createElement('li')
const text3 = document.createTextNode('Third item')
item3.appendChild(text3)
list.appendChild(item3)




