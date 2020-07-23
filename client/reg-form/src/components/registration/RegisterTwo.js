import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from '../../utils/validate'
import { renderField } from '../../utils/renderThings'
import Button from '@material-ui/core/Button'
import styles from '../../utils/registerStyles.module.css'

const renderEducationalDetails = ({ fields, meta: { touched, error } }) => (
  <ul>

    {fields.map((member, index) => (
      <li key={index}>
        <h3>Education {index + 1}:</h3>
        <Field name={`${member}.course`} type="text" component={renderField} label="Course" />
        
        <Field name={`${member}.institution`} type="text" component={renderField} label="University/College" />
        
        <Field name={`${member}.year`} type="number" component={renderField} label="Year" />

        <Field name={`${member}.percentage`} type="number" component={renderField} label="Percentage" />
        <br />

        <Button type="button" variant="contained" color="secondary" className={styles.removedetails} onClick={() => fields.remove(index)}>Remove Details</Button>
      </li>
    ))}
    <div>
      <Button type="button" variant="contained" color="primary" className={styles.adddetails} onClick={() => fields.push({})}>Add Details</Button>
      {touched && error && <small>{error}</small>}
    </div>
  </ul>
);

const RegisterTwo = props => {
  const { handleSubmit, previousPage } = props
  return (
    <>
      <div>
        <h2>Educational Details</h2>
      </div>
      <form onSubmit={handleSubmit} className={styles.box}>

        <FieldArray name="edu_details" component={renderEducationalDetails} />

        <br />

        <Button type="button" variant="contained" color="secondary" className={styles.previous} onClick={previousPage}>Previous</Button>
        <Button type="submit" variant="contained" color="primary" className={styles.next}>Next</Button>

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