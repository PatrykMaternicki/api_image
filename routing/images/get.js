module.exports = (app, config, restService) => {
  app.get(config.route, async (req, res) => {
    if (!restService.isAllowedParam(req.query, config.allowedParam)) {
      restService.createErrorHandler('NOT_ALLOWED_PARAMS', res)
      return
    }
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