import React from 'react'
import {Card, CardActions, CardContent, CardHeader, Typography, IconButton} from '@material-ui/core'
import {Edit, Delete} from '@material-ui/icons'
import {makeStyles, createStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => 
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  })
)

export default function DetailCard() {
  const style = useStyles()

  return (
    <Card className={style.root}>
      <CardHeader
        title={"Detail"}
      />
      <CardContent>
        <Typography>
          Some content
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label='edit'>
          <Edit/>
        </IconButton>
        <IconButton aria-label='delete'>
          <Delete/>
        </IconButton>
      </CardActions>
    </Card>
  )
}