const validate = values => {
  const errors = {}
  if (!values.firstname) {
    errors.firstname = '*Required'
  } else if (values.firstname.length < 3 || values.firstname.length > 10) {
    errors.firstname = "*Firstname must be between 3 to 10 letters"
  }
  if (!values.lastname) {
    errors.lastname = '*Required'
  } else if (values.lastname.length < 3 || values.lastname.length > 10) {
    errors.lastname = "*Lastname must be between 3 to 10 letters"
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.phonenumber) {
    errors.phonenumber = '*Required'
  } else if (values.phonenumber.length !== 10) {
    errors.phonenumber = '*Must be 10 digits'
  }
  if (!values.currentaddress) {
    errors.currentaddress = '*Required'
  }
  if (!values.permanentaddress) {
    errors.permanentaddress = '*Required'
  }

  //  if(!values.course) {
  //  errors.course = '*Required'
  //}
  //  if(!values.institution) {
  //  errors.institution = '*Required'
  //}
  //  if(!values.year) {
  //  errors.year = '*Required'
  //} else if (values.year.length < 1950 || values.year.length > 2020) {
  // errors.year = '*Not a valid year'
  // }
  //  if(!values.percentage) {
  //  errors.percentage = '*Required'
  //} else if (values.percentage.length > 100)
  // errors.percentage = 'Not a valid percentage'
  // }

  //  if(!values.to) {
  //  errors.to = '*Required'
  //}
  //  if(!values.from) {
  //  errors.from = '*Required'
  //}

  if (!values.linkedin) {
    errors.linkedin = '*Required'
  }
  if (!values.github) {
    errors.github = '*Required'
  }
  if (!values.facebook) {
    errors.facebook = '*Required'
  }



  return errors
}

export default validate