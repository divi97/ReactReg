import React from 'react'
import { FieldArray, reduxForm } from 'redux-form'
import validate from '../../utils/validate'
import { renderMembers } from '../../utils/renderThings'
import Button from '@material-ui/core/Button'
import styles from '../../utils/registerStyles.module.css'

const RegisterThree = props => {
  const { handleSubmit, previousPage } = props

  return (
    <>
      <div>
        <h2>Professional Details</h2>
      </div>
      <form onSubmit={handleSubmit} className={styles.box}>

        <FieldArray name="prof_details" component={renderMembers} />

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