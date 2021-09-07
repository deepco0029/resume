import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1,
    fontWeight: 600,
    fontSize: '1.8rem'
  }
}))

const Header = React.memo(() => {
  const classes = useStyles()

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          className={classes.toolbarTitle}
        >
          이 력 서
        </Typography>
        <Link color='inherit' href='https://github.com/deepco0029/resume' target='_blank'>
          <GitHubIcon />
        </Link>
      </Toolbar>
    </>
  )
})

export default Header
