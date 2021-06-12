import React from 'react'
import {Card, CardContent, CardHeader, Typography} from '@material-ui/core'
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
        <Typography color='primary'>
          Primary
        </Typography>
        <Typography color='secondary'>
          Secondary
        </Typography>
      </CardContent>
    </Card>
  )
}