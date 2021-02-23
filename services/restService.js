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
      if(!prop.includes(allowedParams)) {
        isAllowed = false
        break
      }
    }
    return isAllowed
  },

  isRequiredParam: (query, requiredParam) => {
    let valid = true
    if(Object.keys(query).length === 0 && requiredParam.length > 0) {
      return false
    }

    for (let i = 0; i < requiredParam.length; i++) {
      if(!query[requiredParam[i]]) {
        valid = false
        break
      }
    }
    return valid
  }
}