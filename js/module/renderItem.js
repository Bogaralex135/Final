async function renderItem(data) {
  const items = await data

  const container = document.getElementById('container')
  container.className = 'flex flex-wrap'
  items.articles?.forEach(article => {
    if (
      article.urlToImage === null ||
      article.urlToImage === undefined ||
      article.urlToImage === ''
    ) {
      return
    }
    const main = document.getElementById('main')
    const div = document.createElement('div')
    const formatDate = article.publishedAt.slice(0, 10)

    div.className = 'p-4 w-64 mb-20 '
    div.innerHTML = `<a href=${article.url} target="_blank">
    <img class="aspect-auto w-full h-auto mb-4" src=${article?.urlToImage} alt=${article.title} loading="lazy"/>
    <h3 class="my-3">${article.title}</h3>
    <p class="mb-3 text-sky-300">${article.source.name}</p>
    <p class="text-slate-300">${formatDate}</p>
    </a>`

    container.appendChild(div)
  })
}

export { renderItem }
