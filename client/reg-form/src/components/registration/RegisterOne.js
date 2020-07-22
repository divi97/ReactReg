import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../../utils/validate'
import { renderField } from '../../utils/renderThings'
import Button from '@material-ui/core/Button'
import styles from '../../utils/registerStyles.module.css'

const RegisterOne = props => {
  const { handleSubmit } = props
  return (
    <>
      <div>
        <h2>Personal Details</h2>
      </div>
      <form onSubmit={handleSubmit} className={styles.box}>

        <Field name="firstname" type="text" component={renderField} label="First Name" />

        <Field name="lastname" type="text" component={renderField} label="Last Name" />

        <Field name="email" type="email" component={renderField} label="Email" />

        <Field name="phonenumber" type="number" component={renderField} label="Phone Number" />

        <Field name="currentaddress" type="text" component={renderField} label="Current Address" />

        <Field name="permanentaddress" type="text" component={renderField} label="Permanent Address" />

        <Field name="photo" type="text" component={renderField} label="Photo" />
        <br />
        <div>
          <Button variant="contained" color="primary" type="submit" className={styles.next}>Next</Button>
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