const validations = {
    required : {
      rule    : () => /\S/,
      formatter (fieldName) {
        return `${fieldName} is required.`
      }
    },
    numeric : {
      rule : () => /^\d+$/,
      formatter (fieldName) {
        return `${fieldName} should contain only numbers.`
      }
    },
    alphanum : {
      rule : () => /^[a-z0-9]+$/i,
      formatter (fieldName) {
        return `${fieldName} should contain only numbers and alphabet.`
      }
    }
  }
  
  export default validations