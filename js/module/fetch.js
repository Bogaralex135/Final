async function getItems(url) {
  try {
    const response = await fetch(url)
    if (response.status === 200) {
      const data = await response.json()
      return data
    } else {
      console.error(`${response.status}\n${response.code}\n${response.message}`)
      return
    }
  } catch (error) {
    console.error(error)
  }
}

export { getItems }
