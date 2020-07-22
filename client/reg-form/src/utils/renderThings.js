import React from 'react'
import { Field } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import styles from './registerStyles.module.css'


export const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <TextField {...input} placeholder={label} type={type} className={styles.infield} />
      {touched && error && <small>{error}</small>}
    </div>
  </div>
);

export const renderDatePicker = ({ input, defaultValue, meta: { touched, error } }) => (
  <div>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker {...input} format="MM/dd/yyyy" selected={input.value} className={styles.txtfield} value={input.value !== '' ? new Date(input.value) : null} />
    </MuiPickersUtilsProvider>
    {touched && error && <small>{error}</small>}
  </div>
);

export const renderTextArea = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>Hobbies</label>
    <div>
      <TextareaAutosize {...input} placeholder={label} rows="5" column="12" type={type} className={styles.txtfield} />
      {touched && error && <small>{error}</small>}
    </div>
  </div>
);

export const renderMembers = ({ fields, meta: { touched, error } }) => (
  <ul>

    {fields.map((member, index) => (
      <li key={index}>
        <h3>Job {index + 1}:</h3>
        <Field name={`${member}.companyname`} type="text" component={renderField} label="Company Name" />
        <div>
          <label>From</label>
          <Field name={`${member}.from`} type="text" component={renderDatePicker} />
        </div>
        <div>
          <label>To</label>
          <Field name={`${member}.to`} type="text" component={renderDatePicker} />
        </div>
        <button type="button" onClick={() => fields.remove(index)}>Remove Details</button>
      </li>
    ))}
    <div>
      <button type="button" onClick={() => fields.push({})}>Add Details</button>
      {touched && error && <small>{error}</small>}
    </div>
  </ul>
);



