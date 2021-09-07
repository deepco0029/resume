import React, { useCallback, useState } from 'react'
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ProjectCard from '@/components/resume/ProjectCard'
import Switch from '@material-ui/core/Switch'
import Tooltip from '@material-ui/core/Tooltip'
import { Projects } from '@/store/modules/resume/types'

const useStyles = makeStyles((theme: Theme) => ({
  articleBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    marginBottom: theme.spacing(2)
  },
  switch: {
    float: 'right'
  }
}))

const LightTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}))(Tooltip)

const Projects = React.memo((props: Projects) => {
  const classes = useStyles()
  const { title, projects } = props
  const [projectList, setProjectList] = useState(projects)
  const [expanded, setExpanded] = React.useState(true)
  const [stateSwitch, setSwitch] = React.useState(false)

  const handleExpand = useCallback(() => {
    setExpanded(!expanded)
  }, [expanded])

  const handleChange = useCallback(() => {
    setSwitch(!stateSwitch)
    handleExpand()
  }, [stateSwitch])

  const handleRemove = useCallback(
    (id: number) => {
      setProjectList((data) => data.filter((project) => project.id !== id))
    },
    [projectList]
  )
  return (
    <Grid item xs={12} md={12}>
      <Paper elevation={0} className={classes.articleBox}>
        <Typography variant='h5' component='h2' gutterBottom>
          {title}
          <LightTooltip placement='top' title='전체펼침/닫힘'>
            <Switch
              className={classes.switch}
              checked={stateSwitch}
              onChange={handleChange}
              name='checkedA'
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </LightTooltip>
        </Typography>
        <Grid container spacing={2}>
          {projectList.map((project) => (
            <ProjectCard
              key={project.title}
              data={project}
              handleRemove={handleRemove}
              expandedAll={expanded}
            />
          ))}
        </Grid>
      </Paper>
    </Grid>
  )
})
export default Projects
