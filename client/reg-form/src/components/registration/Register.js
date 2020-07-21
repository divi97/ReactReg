import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RegisterOne from './RegisterOne'
import RegisterTwo from './RegisterTwo'
import RegisterThree from './RegisterThree'
import RegisterFour from './RegisterFour'

class Register extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div>
        {page === 1 && <RegisterOne onSubmit={this.nextPage} />}
        {page === 2 && (<RegisterTwo previousPage={this.previousPage} onSubmit={this.nextPage} />)}
        {page === 3 && (<RegisterThree previousPage={this.previousPage} onSubmit={this.nextPage} />)}
        {page === 4 && (<RegisterFour previousPage={this.previousPage} onSubmit={onSubmit} />)}
      </div>
    )
  }
}

Register.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Register