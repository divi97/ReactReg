import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const RegisterFour = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <>
    <div>
      <h3>Social and Hobbies</h3>
    </div>
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="linkedin" type="text" component={renderField} label="Linkedin" />
      </div>
      <div>
        <Field name="github" type="text" component={renderField} label="Github" />
      </div>
      <div>
        <Field name="facebook" type="text" component={renderField} label="Facebook" />
      </div>
      <div>
        <label>Hobbies</label>
        <Field name="hobbies" type="text" component="textarea" />
      </div>

      <button type="button" className="previous" onClick={previousPage}>
        Previous
        </button>
      <button type="submit" disabled={pristine || submitting}>
        Submit
        </button>
    </form>
    </>
  )
}
export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(RegisterFour)