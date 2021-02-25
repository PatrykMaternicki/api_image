const requestValidator = require('../../helpers/requestValidator')

test.only('when query is empty, but validMethod have is required should be return false', () => {
  expect(requestValidator.valid({}, {search: ['required']})).toBe(false)
})

test.only('when query is empty and validMethod is empty should be return true', () => {
  expect(requestValidator.valid({}, {})).toBe(true)
})

test.only('when query have null field but and validMethod is not empty should be return false', () => {
  expect(requestValidator.valid({search: null}, {search: ['required'] })).toBe(false)
})

test.only('when query have undefined field but and validMethod is not empty should be return false', () => {
  expect(requestValidator.valid({search: undefined}, {search: ['required'] })).toBe(false)
})

test.only('when query have empty string field but and validMethod is not empty should be return false', () => {
  expect(requestValidator.valid({search: ''}, {search: ['required'] })).toBe(false)
})

test.only('when query have not empty string field but and validMethod is required should be return true', () => {
  expect(requestValidator.valid({search: 'test'}, {search: ['required'] })).toBe(true)
})

test.only('when query have  empty string field but and validMethod is `isEmpty` should be return false', () => {
  expect(requestValidator.valid({search: ''}, {search: ['isEmpty'] })).toBe(false)
})

test.only('when query have not empty field but and validMethod is `isEmpty` should be return false', () => {
  expect(requestValidator.valid({search: 'test'}, {search: ['isEmpty'] })).toBe(true)
})

test.only('when query have not empty field but and validMethod is empty should be return true', () => {
  expect(requestValidator.valid({search: 'test'}, {})).toBe(true)
})

test.only('when query have two fields and one is required and is empty should be return false', () => {
  expect(requestValidator.valid({search: 'test', query: ''}, {query: ['required']})).toBe(false)
})

test.only('when query have two fields one of this is not empty, and validMethod is required and isEmpty should be return true', () => {
  expect(requestValidator.valid({search: 'test', query: 'test'}, {query: ['required', 'isEmpty']})).toBe(true)
})

test.only('when query have two fields and those is required and not empty, and validMethod is required and isEmpty should be return true', () => {
  expect(requestValidator.valid({search: 'test', query: 'test'}, {query: ['required', 'isEmpty'], query: ['required', 'isEmpty']})).toBe(true)
})