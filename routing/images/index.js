module.exports = (app) => {
  const route = app.get('dictionaryProvider').routeNameResolve('image')
  require('./get')(app, route)
}
