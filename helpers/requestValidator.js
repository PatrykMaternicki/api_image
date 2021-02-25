const methods = {
  'required': value => !!value, 
  'isEmpty': value => (value || '').length > 0
}
module.exports = {
  valid: (query, validMethod)  => {
    let isValid = true

    if(Object.keys(query).length === 0 && Object.keys(validMethod).length > 0) {
      return false
    }

    for(let prop of Object.keys(query)) {
      var fields = validMethod[prop] || []
      var value = query[prop]
      for(let i = 0; i < fields.length; i++) {
        if(!methods[fields[i]](value)) {
          isValid = false
          break;
        }
      }
    }

    return isValid
  }
}
