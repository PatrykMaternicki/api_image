module.exports = (app) => {
  const route = app.get('dictionaryProvider').getDictionaryRouteName('image')
  const restService = app.get('restService')
  require('./get')(app, route, restService)
}
