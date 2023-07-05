import { renderItem } from './module/renderItem.js'
import { apiKey, topHeadlineURL, searchEndPoint } from './module/const.js'
import { getItems } from './module/fetch.js'

const searchBar = document.getElementById('searchBar')
const container = document.querySelector('#container')

let req = new Request(topHeadlineURL)
renderItem(getItems(req))

searchBar.addEventListener('keyup', event => {
  if (event.key === 'Enter') {
    if (searchBar.value !== '') {
      container.innerHTML = ''
      const search = `${searchEndPoint}${searchBar.value}&language=en&apiKey=${apiKey}`
      let req = new Request(search)
      renderItem(getItems(req))
    } else {
      container.innerHTML = ''
      let req = new Request(topHeadlineURL)
      renderItem(getItems(req))
    }
  }
})
