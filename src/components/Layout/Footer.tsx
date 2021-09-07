import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://resume-8f7e9.web.app' target='_blank'>
        deepco
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0)
  }
}))

interface IFooterProps {
  description: string
  title: string
}

const Footer = React.memo((props: IFooterProps) => {
  const classes = useStyles()
  const { description, title } = props

  return (
    <footer className={classes.footer}>
      <Container maxWidth='sm'>
        <Typography variant='h6' align='center' gutterBottom>
          {title}
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  )
})
export default Footer
