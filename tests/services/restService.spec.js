const restService = require('../../services/restService')

test.only('when query, is empty but params is required should be return false', () => {
  expect(restService.isRequiredParam({}, ['search'])).toBe(false)
})

test.only('when query have field search and search field is required should be return true', () => {
  expect(restService.isRequiredParam({search: 'test'}, ['search'])).toBe(true)
})

test.only('when query have two fields and search field is required should be return true', () => {
  expect(restService.isRequiredParam({search: 'test', test: 'abc'}, ['search'])).toBe(true)
})

test.only('when query have two fields with search field is not exist and search field is required should be return false', () => {
  expect(restService.isRequiredParam({test: 'abc'}, ['search'])).toBe(false)
})

test.only('when query is not empty, and required params is empty should be return true', () => {
  expect(restService.isRequiredParam({test: 'abc'}, [])).toBe(true)
})

test.only('when query is empty, and required params is empty should be return true', () => {
  expect(restService.isRequiredParam({}, [])).toBe(true)
})

test.only('when query, is empty but params is `search` should be return true', () => {
  expect(restService.isAllowedParam({}, ['search'])).toBe(true)
})

test.only('when query have param test and allowed params is `search` should be return false', () => {
  expect(restService.isAllowedParam({test: 'test'}, ['search'])).toBe(false)
})

test.only('when query and param is empty should be return true', () => {
  expect(restService.isAllowedParam({}, [])).toBe(true)
})

test.only('when query is not empty and param is empty should be return true', () => {
  expect(restService.isAllowedParam({test: 'allowed'}, [])).toBe(true)
})