const fetch = require('node-fetch')
module.exports = {
  get: async () => {
    const response = await fetch('https://pixabay.com/api/?key=20391730-dcdc3ccffcfd35859071f1209&q=test')
    const json = await response.json()
    return {status: response.status , data: json}
  }
}