const fetch = require('node-fetch')

module.exports = {
  get: async (value) => {
    const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=FX48gA0OT979rYIt8S84aJNWQ1Eu4Crn&q=' + value)
    const json = await response.json()
    return {status: response.status , data: json}
  }
}