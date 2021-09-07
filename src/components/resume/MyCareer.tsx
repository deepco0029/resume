import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Careers } from '@/store/modules/resume/types'

const useStyles = makeStyles((theme: Theme) => ({
  articleBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: '100%'
  }
}))

const MyCareer = React.memo((props: Careers) => {
  const classes = useStyles()
  const { title, careers } = props
  return (
    <Paper elevation={0} className={classes.articleBox}>
      <Typography variant='h5' component='h2' gutterBottom>
        {title}
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} size='small' aria-label='a dense table'>
          <TableBody>
            {careers.map((row) => (
              <TableRow key={row.date}>
                <TableCell scope='row'>{row.date}</TableCell>
                <TableCell align='left'>{row.company}</TableCell>
                <TableCell align='left'>{row.department}</TableCell>
                <TableCell align='left'>{row.team}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
})
export default MyCareer
