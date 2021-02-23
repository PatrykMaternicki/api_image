const restDictonary = require('../dictonaries/rest.json')

module.exports = {
  routeNameResolve: (nameRoute) => {
    return restDictonary.api[nameRoute].route
  }
}