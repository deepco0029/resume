import React, { useCallback } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Tooltip from '@material-ui/core/Tooltip'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { green, pink } from '@material-ui/core/colors'
import CloseIcon from '@material-ui/icons/Close'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Grid from '@material-ui/core/Grid'
import { Box, Link, Paper } from '@material-ui/core'
import { useMediaQuery } from '@material-ui/core'
import SkillArray from './SkillArray'
import { Project } from '@/store/modules/resume/types'
import { useEffect } from 'react'

const domainUrl = `${window.location.protocol}//${window.location.host}`
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
      '& .MuiCardHeader-action': {
        alignSelf: 'center'
      }
    },
    boxAvatar: {
      display: 'flex'
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    expand: {
      padding: '6px',
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      color: 'white',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    header: {
      fontSize: '1.5rem'
    },
    avatar: {
      width: theme.spacing(13),
      fontSize: '1rem'
    },
    skills: {
      display: 'flex',
      justifyContent: 'left',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      marginBottom: theme.spacing(2),
      margin: 0
    },
    cardTitle: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(0)
      },
      fontWeight: 700
    },
    skillStackIcon: {
      marginLeft: theme.spacing(1),
      width: theme.spacing(5),
      height: theme.spacing(5)
    },
    cardHeader: {
      display: 'flex',
      padding: theme.spacing(2),
      alignItems: 'center'
    },
    cardHeader_mobile: {
      display: 'flex',
      padding: theme.spacing(2),
      alignItems: 'center',
      textAlign: 'center',
      flexDirection: 'column'
    }
  })
)

type TSkillIcon = {
  [index: string]: string
  angularjs: string
  vue2: string
  react: string
  node: string
  spring: string
}

const SkillStackIcon: TSkillIcon = {
  angularjs: `${domainUrl}/src/assets/img/icon/angular.png`,
  vue2: `${domainUrl}/src/assets/img/icon/vue.png`,
  react: `${domainUrl}/src/assets/img/icon/react.png`,
  node: `${domainUrl}/src/assets/img/icon/node.png`,
  struts2: `${domainUrl}/src/assets/img/icon/struts2.png`,
  spring: `${domainUrl}/src/assets/img/icon/spring.png`
}

interface ResumeProject {
  data: Project
  expandedAll: boolean
  handleRemove: (id: number) => void
}

const ProjectCard = React.memo((props: ResumeProject) => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width: 600px)')
  const { data, handleRemove, expandedAll } = props
  const [expanded, setExpanded] = React.useState(false)

  useEffect(() => {
    setExpanded(!expandedAll)
  }, [expandedAll])

  const handleExpandClick = useCallback(() => {
    setExpanded(!expanded)
  }, [expanded])

  const removeProject = useCallback(() => {
    handleRemove(data.id)
  }, [data])

  const getSkillIcon = (name: string) => SkillStackIcon[name.toLowerCase()]

  return (
    <Grid item xs={12} md={12}>
      <Card className={classes.root}>
        <CardHeader
          className={isMobile ? classes.cardHeader_mobile : classes.cardHeader}
          avatar={
            <Box className={classes.boxAvatar}>
              <Avatar
                aria-label='recipe'
                variant='square'
                className={classes.avatar}
                style={
                  data.corp === '인크로스' ? { backgroundColor: pink[400] } : { backgroundColor: green[400] }
                }
              >
                {data.corp}
              </Avatar>
              <Avatar
                variant='square'
                src={getSkillIcon(data.skills[0])}
                className={classes.skillStackIcon}
              />
            </Box>
          }
          title={<Typography className={classes.cardTitle}>{data.title}</Typography>}
          subheader={data.date}
          action={
            <Box>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='show more'
                style={
                  data.corp === '인크로스' ? { backgroundColor: pink[400] } : { backgroundColor: green[400] }
                }
              >
                <ExpandMoreIcon />
              </IconButton>
              <Tooltip title='실제 데이터는 삭제되지 않습니다.' arrow>
                <IconButton aria-label='delete' onClick={removeProject}>
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </Box>
          }
        />
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography variant='h5' component='h2'>
              담당업무
            </Typography>
            <Typography component='ul' paragraph>
              {data.works.map((work, index) => {
                return <li key={index}>{work}</li>
              })}
            </Typography>
            <Typography variant='h5' component='h2'>
              적용기술
            </Typography>
            <Paper component='ul' className={classes.skills} elevation={0}>
              <SkillArray skillData={data.skills} />
            </Paper>
            <Typography variant='h5' component='h2'>
              {data.link && data.link.length > 0 && '관련링크'}
            </Typography>
            <Typography component='ul' paragraph>
              {data.link &&
                data.link.map((data, index) => {
                  return (
                    <li key={index}>
                      <Link target='_blank' href={data.url}>
                        {data.title}
                      </Link>
                    </li>
                  )
                })}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  )
})

export default ProjectCard
