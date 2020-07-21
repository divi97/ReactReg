import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import Button from '@material-ui/core/Button'
// import ColorButton from '../../utils/Button'

const RegisterOne = props => {
  const { handleSubmit } = props
  return (
    <>
    <div>
      <h3>Personal Details</h3>
    </div>
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="firstname" type="text" component={renderField} label="First Name" />
      </div>
      <div>
        <Field name="lastname" type="text" component={renderField} label="Last Name" />
      </div>
      <div>
        <Field name="email" type="email" component={renderField} label="Email" />
      </div>
      <div>
        <Field name="phonenumber" type="text" component={renderField} label="Phone Number" />
      </div>
      <div>
        <Field name="currentaddress" type="text" component={renderField} label="Current Address" />
      </div>
      <div>
        <Field name="permanentaddress" type="text" component={renderField} label="Permanent Address" />
      </div>
      <div>
        <Field name="photo" type="text" component={renderField} label="photo" />
      </div>
      <div>
        <Button variant="contained" color="primary" type="submit" className="next">Next</Button>
      </div>
    </form>
    </>
  )
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(RegisterOne)