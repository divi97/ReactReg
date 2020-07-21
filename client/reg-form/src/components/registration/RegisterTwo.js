import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'


const RegisterTwo = props => {
  const { handleSubmit, previousPage } = props
  return (
    <>
    <div>
      <h3>Educational Details</h3>
    </div>
    <form onSubmit={handleSubmit}>

      <div>
        <Field name="edu_details[0][course]" type="text" component={renderField} label="Course" />
      </div>
      <div>
        <Field name="edu_details[0][institution]" type="text" component={renderField} label="University/College" />
      </div>
      <div>
        <Field name="edu_details[0][year]" type="text" component={renderField} label="Year" />
      </div>
      <div>
        <Field name="edu_details[0][percentage]" type="text" component={renderField} label="Percentage" />
      </div>
      <div>
        <Field name="edu_details[1][course]" type="text" component={renderField} label="Course" />
      </div>
      <div>
        <Field name="edu_details[1][institution]" type="text" component={renderField} label="University/College" />
      </div>
      <div>
        <Field name="edu_details[1][year]" type="text" component={renderField} label="Year" />
      </div>
      <div>
        <Field name="edu_details[1][percentage]" type="text" component={renderField} label="Percentage" />
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">
          Next
        </button>
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
})(RegisterTwo)