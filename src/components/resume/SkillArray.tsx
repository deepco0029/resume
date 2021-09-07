import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'left',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0
    },
    chip: {
      margin: theme.spacing(0.5)
    }
  })
)
type ISkillProps = {
  skillData: string[]
}
const SkillArray = React.memo(({ skillData }: ISkillProps) => {
  const classes = useStyles()
  return (
    <>
      {skillData.map((data, index) => {
        return (
          <li key={index}>
            <Chip label={data} className={classes.chip} />
          </li>
        )
      })}
    </>
  )
})

export default SkillArray
