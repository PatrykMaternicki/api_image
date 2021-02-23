const { response } = require("express")

module.exports = {
  createResponse: (status, request, res) => {
    status ? res.status(200).json(request) : res.status(400).json({})
  }
}