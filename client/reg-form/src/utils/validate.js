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

  if (!values.edu_details || !values.edu_details.length) {
    errors.edu_details = { _error: '*At least one detail must be entered' }
  } else {
    const membersArrayErrors = []
    values.edu_details.forEach((member, memberIndex) => {
      const memberErrors = {}
      if (!member || !member.course) {
        memberErrors.course = '*Required'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.institution) {
        memberErrors.institution = '*Required'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.year) {
        memberErrors.year = '*Required'
        membersArrayErrors[memberIndex] = memberErrors
      } else if (member.year < 1950 || member.year > 2020) {
        memberErrors.year = '*Not a valid year'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.percentage) {
        memberErrors.percentage = '*Required'
        membersArrayErrors[memberIndex] = memberErrors
      } else if (member.percentage > 100) {
        memberErrors.percentage = '*Not a valid percentage'
        membersArrayErrors[memberIndex] = memberErrors
      }

    });
    if (membersArrayErrors.length) {
      errors.edu_details = membersArrayErrors;
    }

  }

  if (!values.prof_details || !values.prof_details.length) {
    errors.prof_details = { _error: '*At least one detail must be entered' }
  } else {
    const membersArrayErrors = []
    values.prof_details.forEach((member, memberIndex) => {
      const memberErrors = {}
      if (!member || !member.companyname) {
        memberErrors.companyname = '*Required'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.from) {
        memberErrors.from = '*Required'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.to) {
        memberErrors.to = '*Required'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.designation) {
        memberErrors.designation = '*Required'
        membersArrayErrors[memberIndex] = memberErrors
      }

    });
    if (membersArrayErrors.length) {
      errors.prof_details = membersArrayErrors;
    }

  }

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