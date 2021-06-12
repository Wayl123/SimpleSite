import React from 'react'
import {Card, CardHeader, FormControl, Input, Button, InputLabel, Select} from '@material-ui/core'
import {makeStyles, createStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => 
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
    },
    form: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    p100width: {
      width: '100%',
    },
  })
)

export default function NewCard() {
  const style = useStyles()

  return (
    <Card className={style.root}>
      <CardHeader
        title={"New Card"}
      />
      <form className={style.p100width}>
        <FormControl className={style.form}>
          <Input name='content' type='text' placeholder='Card Content'/>
          <Button type='submit'>Submit</Button>
        </FormControl>
      </form>
    </Card>
  )
}