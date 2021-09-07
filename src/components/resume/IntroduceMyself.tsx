import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Intoroduce } from '@/store/modules/resume/types'

const useStyles = makeStyles((theme: Theme) => ({
  mainIntroduce: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(2),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
  mainIntroduceContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  }
}))

interface IMyself {
  myself: Intoroduce
}

const IntroduceMyself = React.memo((props: IMyself) => {
  const classes = useStyles()
  const { myself } = props

  return (
    <Paper className={classes.mainIntroduce} style={{ backgroundImage: `url(${myself.image})` }}>
      {<img style={{ display: 'none' }} src={myself.image} alt={myself.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={11}>
          <div className={classes.mainIntroduceContent}>
            <Typography variant='h6' color='inherit' paragraph>
              {myself.description.split('\n').map((line, idx) => {
                return (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                )
              })}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
})

export default IntroduceMyself
