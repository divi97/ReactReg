const validate = values => {
    const errors = {}
    if (!values.firstname) {
      errors.firstname = 'Required'
    }
    if (!values.lastname) {
      errors.lastname = 'Required'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.phonenumber) {
      errors.phonenumber = 'Required'
    }
    if (!values.currentaddress) {
      errors.currentaddress = 'Required'
    }
    if (!values.permanentaddress) {
      errors.permanentaddress = 'Required'
    }
    
    return errors
  }
  
  export default validate