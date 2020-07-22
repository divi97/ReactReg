import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../../utils/validate'
import { renderField } from '../../utils/renderThings'
import Button from '@material-ui/core/Button'
import styles from '../../utils/registerStyles.module.css'


const RegisterTwo = props => {
  const { handleSubmit, previousPage } = props
  return (
    <>
      <div>
        <h2>Educational Details</h2>
      </div>
      <form onSubmit={handleSubmit} className={styles.box}>

        <Field name="edu_details[0][course]" type="text" component={renderField} label="Course" />

        <Field name="edu_details[0][institution]" type="text" component={renderField} label="University/College" />

        <Field name="edu_details[0][year]" type="number" component={renderField} label="Year" />

        <Field name="edu_details[0][percentage]" type="number" component={renderField} label="Percentage" />

        <Field name="edu_details[1][course]" type="text" component={renderField} label="Course" />

        <Field name="edu_details[1][institution]" type="text" component={renderField} label="University/College" />

        <Field name="edu_details[1][year]" type="number" component={renderField} label="Year" />

        <Field name="edu_details[1][percentage]" type="number" component={renderField} label="Percentage" />

        <br />

        <Button type="button" variant="contained" color="secondary" className={styles.previous} onClick={previousPage}>
          Previous
        </Button>
        <Button type="submit" variant="contained" color="primary" className={styles.next}>
          Next
        </Button>

      </form>
    </>
  )
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(RegisterTwo)