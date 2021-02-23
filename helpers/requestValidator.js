const methods = {
  'required': value => !!value, 
  'isEmpty': value => (value || '').length > 0
}
module.exports = {
  valid: (query, validMethod)  => {
    let isValid = true
    for(let prop of Object.keys(query)) {
      var fields = validMethod[prop]
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
