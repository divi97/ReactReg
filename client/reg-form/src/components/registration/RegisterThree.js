import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from '../../utils/validate'
import {  renderField, renderDatePicker } from '../../utils/renderThings'
import Button from '@material-ui/core/Button'
import styles from '../../utils/registerStyles.module.css'

const renderProfessionalDetails = ({ fields, meta: { touched, error } }) => (
  <ul>

    {fields.map((member, index) => (
      <li className="reghli" key={index}>
        <h3 className="reghli">Job {index + 1}:</h3>
        <Field name={`${member}.companyname`} type="text" component={renderField} label="Company Name" />
        <div>
          <label>From</label>
          <Field name={`${member}.from`} type="text" component={renderDatePicker} />
        </div>
        <div>
          <label>To</label>
          <Field name={`${member}.to`} type="text" component={renderDatePicker} />
        </div>
        <Field name={`${member}.designation`} type="text" component={renderField} label="Designation" />
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

const RegisterThree = props => {
  const { handleSubmit, previousPage } = props

  return (
    <>
      <div>
        <h2>Professional Details</h2>
      </div>
      <form onSubmit={handleSubmit} className={styles.box}>

        <FieldArray name="prof_details" component={renderProfessionalDetails} />

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
})(RegisterThree)