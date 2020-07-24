import React, { Component } from 'react'
//import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import Container from '@material-ui/core/Container'
import styles from '../../utils/viewStyles.module.css'
import Button from '@material-ui/core/Button'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import { withStyles } from '@material-ui/core/styles'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'

class ViewEmployee extends Component {

  constructor(props) {
    super(props)

    this.state = {
      obj: {}
    }
  }

  componentDidMount() {
    document.title = "Employee View"
    const id = this.props.id

    axios.post(`http://localhost:1234/emp/view/${id}`)
      .then(res => {
        this.setState({
          obj: res.data
        })
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    let obj = this.state.obj

    const id = this.props.id

    const StyledLinkedIn = withStyles(() => ({
      root: {
        fontSize: '2rem',
        color: '#0e76a8'
      },
    }
    ))(LinkedInIcon);

    const StyledFacebook = withStyles(() => ({
      root: {
        fontSize: '2rem',
        color: '#3b5998'
      },
    }
    ))(FacebookIcon);

    const StyledGitHub = withStyles(() => ({
      root: {
        fontSize: '2rem',
        color: '#000'
      },
    }
    ))(GitHubIcon);

    const StyledButtonD = withStyles(() => ({
      root: {
        color: '#fff',
        border: '1px solid',
        backgroundColor: '#E53935',
        borderColor: '#E53935',
        justifyContent: 'center',
        alignItems: 'center',
        left: '50%',
        transform: 'translateX(-50%)',
        marginTop: '4%',
        '&:hover': {
          backgroundColor: '#F44336',
          borderColor: '#F44336'
        },
        '&:active': {
          backgroundColor: '#E53935',
          borderColor: '#E53935'
        }
      }
    }))(Button)

    const StyledButtonBack = withStyles(() => ({
      root: {
        color: '#fff',
        border: '1px solid',
        backgroundColor: '#00ACC1',
        borderColor: '#00ACC1',
        justifyContent: 'center',
        alignItems: 'center',
        left: '50%',
        transform: 'translateX(-50%)',
        marginTop: '2%',
        marginBottom: '4%',
        '&:hover': {
          backgroundColor: '#00BCD4',
          borderColor: '#00BCD4'
        },
        '&:active': {
          backgroundColor: '#26C6DA',
          borderColor: '#26C6DA'
        }
      }
    }))(Button)

    const goBack = () => {
      window.location = "/"
    }

    const delEmp = (id) => {
      window.alert("Are you sure you want to delete this employee's data?")
      axios.delete(`http://localhost:1234/emp/delete/${id}`)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })

      window.location = "/"
    }

    return (
      <>
        <h1>Employee Details</h1>
        <hr />
        <br />
        <Container style={{ width: '75%' }}>
          <Container>
            <h2 className={styles.personal}>Personal Details</h2>
            <hr className={styles.phr} />
            <table style={{ marginLeft: '25%' }}>
              <tbody>
                <tr>
                  <td style={{ width: '60%' }}><h3 className={styles.pdetails}>Name : </h3></td>
                  <td style={{ width: '60%' }}><h3 className={styles.pdetails}> {obj.firstname} {obj.lastname}</h3></td>
                </tr>
                <tr>
                  <td style={{ width: '50%' }}><h3 className={styles.pdetails}>Email : </h3></td>
                  <td style={{ width: '100%' }}><h3 className={styles.pdetails}> {obj.email}</h3></td>
                </tr>
                <tr>
                  <td style={{ width: '50%' }}><h3 className={styles.pdetails}>Phone Number : </h3></td>
                  <td style={{ width: '100%' }}><h3 className={styles.pdetails}> {obj.phonenumber}</h3></td>
                </tr>
                <tr>
                  <td style={{ width: '50%' }}><h3 className={styles.pdetails}>Current Address : </h3></td>
                  <td style={{ width: '100%' }}><h3 className={styles.pdetails}> {obj.currentaddress}</h3></td>
                </tr>
                <tr>
                  <td style={{ width: '50%' }}><h3 className={styles.pdetails}>Permanent Address : </h3></td>
                  <td style={{ width: '100%' }}><h3 className={styles.pdetails}> {obj.permanentaddress}</h3></td>
                </tr>
              </tbody>
            </table>
          </Container><br />

          <Container>
            <h2 className={styles.personal}>Educational Details</h2>
            <hr className={styles.phr} />
            <div style={{ marginLeft: '40%' }}>
              {obj?.edu_details?.map((row, index) => {
                return (<div key={index}>
                  <h2 className={styles.personal}>Education : {index + 1}</h2>
                  <h3 className={styles.pdetails}>Course : {row.course}</h3>
                  <h3 className={styles.pdetails}>Institution : {row.institution}</h3>
                  <h3 className={styles.pdetails}>Year : {row.year}</h3>
                  <h3 className={styles.pdetails}>Percentage(%) : {row.percentage}</h3>
                  <br />
                </div>
                )
              })}
            </div>
          </Container><br />

          <Container>
            <h2 className={styles.personal}>Professional Details</h2>
            <hr className={styles.phr} />
            <div style={{ marginLeft: '40%' }}>
              {obj?.prof_details?.map((row, index) => {
                return (<div key={index}>
                  <h2 className={styles.personal}>Job : {index + 1}</h2>
                  <h3 className={styles.pdetails}>Company : {row.companyname}</h3>
                  <h3 className={styles.pdetails}>Designation : {row.designation}</h3>
                  <h3 className={styles.pdetails}>From : {row.from.substr(0, 10)}</h3>
                  <h3 className={styles.pdetails}>To : {row.to.substr(0, 10)}</h3>
                  <br />
                </div>
                )
              })}
            </div>
          </Container><br />

          <Container>
            <h2 className={styles.personal}>Socials</h2>
            <hr className={styles.phr} />
            <table style={{ marginLeft: '40%' }}>
              <tbody>
                <tr>
                  <td ><StyledLinkedIn /></td>
                  <td style={{ width: '100%' }}><h3 className={styles.pdetails}>Linkedin : {obj.linkedin}</h3></td>
                </tr>
                <tr>
                  <td ><StyledGitHub /></td>
                  <td style={{ width: '100%' }}><h3 className={styles.pdetails}> Github : {obj.github}</h3></td>
                </tr>
                <tr>
                  <td ><StyledFacebook /></td>
                  <td style={{ width: '100%' }}><h3 className={styles.pdetails}> Facebook : {obj.facebook}</h3></td>
                </tr>
                <tr>
                  <td ><SportsCricketIcon /></td>
                  <td style={{ width: '100%' }}><h3 className={styles.pdetails}> Hobbies : {obj.hobbies}</h3></td>
                </tr>
              </tbody>
            </table>
          </Container>

          <Container>
            <StyledButtonD type="button" variant="contained" onClick={() => { delEmp(id) }}>Delete Employee</StyledButtonD><br />
            <StyledButtonBack type="button" variant="contained" onClick={() => { goBack() }}><KeyboardBackspaceIcon />Back to list</StyledButtonBack>
          </Container>
        </Container>
      </>
    )
  }
}

export default ViewEmployee
