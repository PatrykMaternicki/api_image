module.exports = (app, nameRoute, restService) => {
  app.get(nameRoute, async (req, res) => {
    const pixabayRequest = await app.get('pixabayService').get()
    const giphyRequest = await app.get('giphyService').get()
    const giphyStatus = giphyRequest.status
    const pixabayStatus = pixabayRequest.status
    const status = giphyStatus || pixabayStatus === true ? true : false
    const request = {
      pixabay: pixabayRequest,
      giphy: giphyRequest,
    }
    restService.createResponse(status, request, res)
  }); 
}