import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
  <div>
        <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value} />
        {touched && error && <span>{error}</span>}
  </div>
);


const RegisterThree = props => {
  const { handleSubmit, previousPage } = props
  return (
    <>
    <div>
      <h3>Professional Details</h3>
    </div>
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="prof_details[0][companyname]" type="text" component={renderField} label="Company Name" />
      </div>
      <div>
        <label>From</label>
        <Field name="prof_details[0][from]" type="date" component={renderDatePicker} />
      </div>
      <div>
      <label>To</label>
        <Field name="prof_details[0][to]" type="date" component={renderDatePicker} />
      </div>

      <div>
        <Field name="prof_details[1][companyname]" type="text" component={renderField} label="Company Name" />
      </div>
      <div>
      <label>From</label>
        <Field name="prof_details[1][from]" type="date" component={renderField} />
      </div>
      <div>
      <label>To</label>
        <Field name="prof_details[1][to]" type="date" component={renderField} />
      </div>

      <button type="button" className="previous" onClick={previousPage}>
        Previous
      </button>
      <button type="submit" className="next">
          Next
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
})(RegisterThree)