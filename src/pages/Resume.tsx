import React, { useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import IntroduceMyself from '@/components/resume/IntroduceMyself'
import MyCareer from '@/components/resume/MyCareer'
import Projects from '@/components/resume/Projects'
import useResume from '@/hooks/useResume'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '10rem',
      display: 'flex',
      justifyContent: 'center',
      '& > * + *': {
        marginLeft: theme.spacing(2)
      }
    }
  })
)

const Resume = React.memo(() => {
  const classes = useStyles()
  const { resumeState, fetchResume } = useResume()

  useEffect(() => {
    if (resumeState.introduce) return
    fetchResume()
  }, [])

  if (resumeState.introduce) {
    const { project, introduce, career } = resumeState

    return (
      <>
        <IntroduceMyself myself={introduce} />
        <MyCareer title={career.title} careers={career.careers} />
        <Projects title={project.title} projects={project.projects} />
      </>
    )
  }
  return (
    <div className={classes.root}>
      <CircularProgress disableShrink color='secondary' />
    </div>
  )
})

export default Resume
