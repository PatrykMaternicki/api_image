const restDictonary = require('../dictonaries/rest.json')

module.exports = {
  getDictionaryRouteName: (nameRoute) => {
    return restDictonary.api[nameRoute]
  }
}