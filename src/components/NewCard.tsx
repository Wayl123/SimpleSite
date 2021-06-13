import React from 'react'
import { Card, CardHeader, FormControl, Input, Button, TextField, MenuItem } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

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
    p40width: {
      width: '40%',
    },
    p20width: {
      width: '20%',
    },
  })
)

export default function NewCard({addCard}: any) {
  const style = useStyles()

  return (
    <Card className={style.root}>
      <CardHeader
        title={"New Card"}
      />
      <form className={style.p100width} onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
          content: {value: string}
          select: {value: string}
        }
        addCard({content: target.content.value, select: target.select.value, date: Date.now()})
      }}>
        <FormControl className={style.form}>
          <Input className={style.p40width} name='content' type='text' placeholder='Card Content'/>
          <TextField className={style.p20width} name='select' label='Colour' defaultValue='primary' select>
            <MenuItem value='primary'>Primary</MenuItem>
            <MenuItem value='secondary'>Secondary</MenuItem>
          </TextField>
          <Button className={style.p20width} type='submit'>Submit</Button>
        </FormControl>
      </form>
    </Card>
  )
}