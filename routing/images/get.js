module.exports = (app, nameRoute) => {
  console.log('undefined', nameRoute)
  app.get(nameRoute, (req, res) => {
    return res.send('Received a GET HTTP method');
  }); 
}