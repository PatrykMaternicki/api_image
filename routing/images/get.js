const requestValidator = require("../../helpers/requestValidator");

module.exports = (app, config, restService) => {
  app.get(config.route, async (req, res) => {

    if (!restService.isRequiredParam(req.query, config.requiredParam)) {
      restService.createErrorHandler('REQUIRED_PARAMS', res)
      return
    }

    if (!restService.isAllowedParam(req.query, config.allowedParam)) {
      restService.createErrorHandler('NOT_ALLOWED_PARAMS', res)
      return
    }

    if(!app.get('requestValidator').valid(req.query, config.validMethod)) {
      restService.createErrorHandler('INVALID_DATA', res)
      return
    }
    
    const pixabayRequest = await app.get('pixabayService').get(req.query.search)
    const giphyRequest = await app.get('giphyService').get(req.query.search)
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