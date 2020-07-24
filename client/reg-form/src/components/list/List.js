import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../../utils/listStyles.module.css'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
// import { Link } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledGrid = withStyles((theme) => ({
  item: {
    marginLeft: '16%'
  }
}))(Grid)

const StyledButtonV = withStyles(() => ({
  root: {
    color: '#3f51b5',
    borderColor: '#3f51b5',
    border: '1px solid',
    '&:hover': {
      backgroundColor: '#D1C4E9',
      borderColor: '#3f51b5'
    }
  }
}))(Button)

const StyledButtonD = withStyles(() => ({
  root: {
    color: '#E53935',
    borderColor: '#E53935',
    border: '1px solid',
    '&:hover': {
      backgroundColor: '#FFCDD2',
      borderColor: '#d63031'
    }
  }
}))(Button)

const StyledButtonC = withStyles(() => ({
  root: {
    color: '#fff',
    borderColor: '#00897B',
    border: '1px solid',
    backgroundColor: '#00897B',
    left: '69%',
    position: 'relative',
    transform: 'translateX(-50%)',
    '&:hover': {
      backgroundColor: '#00897B',
      borderColor: '#00695C'
    }
  }
}))(Button)

const StyledButtonR = withStyles(() => ({
  root: {
    color: '#fff',
    backgroundColor: '#43A047',
    borderColor: '#43A047',
    border: '1px solid',
    left: '21%',
    position: 'relative',
    transform: 'translateX(-50%)',
    '&:hover': {
      backgroundColor: '#43A047',
      borderColor: '#2E7D32'
    }
  }
}))(Button)

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

const viewEmp = (id) => {
  window.location = "/view/" + id
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

const clearEmp = () => {
  window.alert("Are you sure you want to clear all employees' data?")
  axios.delete('http://localhost:1234/emp/clearall')
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })

  window.location = "/"
}

function List(props) {
  const classes = useStyles();
  const [list, setList] = useState([]);

  useEffect(() => {
    document.title = "Employee List"
    const fetchData = async () => {
      const res = await axios.get("http://localhost:1234/emp/list")
      setList(res.data.emp)
    }

    fetchData()
  }, []);

  return (
    <div>
      <h1 className={styles.lihli}>List of Employees</h1>
      <hr />
      <br />
      <StyledButtonR variant="contained" type="button" href="/register">Register New</StyledButtonR>
      <StyledButtonC variant="contained" type="button" onClick={() => { clearEmp() }}>Clearall</StyledButtonC>
      <br />
      <br />
      <React.Fragment>
        <StyledGrid item md={8}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Id</StyledTableCell>
                  <StyledTableCell>First Name</StyledTableCell>
                  <StyledTableCell>Last Name</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.map((row, index) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">{index + 1}</StyledTableCell>
                    <StyledTableCell>{row.firstname}</StyledTableCell>
                    <StyledTableCell>{row.lastname}</StyledTableCell>
                    <StyledTableCell>{row.email}</StyledTableCell>
                    <StyledTableCell><StyledButtonV variant="outlined" type="button" onClick={() => { viewEmp(row.id) }}>View</StyledButtonV></StyledTableCell>
                    <StyledTableCell><StyledButtonD variant="outlined" type="button" onClick={() => { delEmp(row.id) }}>Delete</StyledButtonD></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledGrid>
      </React.Fragment>
    </div>)
}

export default List