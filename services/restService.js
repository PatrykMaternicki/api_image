const { response } = require("express")

module.exports = {
  createResponse: (status, request, res) => {
    status ? res.status(200).json(request) : res.status(400).json({})
  },

  createErrorHandler: (status, res) => {
    res.status(400).json({info: status})
  },

  isAllowedParam: (query, allowedParams) => {
    let isAllowed = true
    for (let prop in query) {
      console.log(prop)
      console.log(allowedParams)
      if(!prop.includes(allowedParams)) {
        isAllowed = false
        break
      }
    }
    return isAllowed
  }
}