import React from 'react'
import { FormControl, Input, Button, TextField, MenuItem, Card } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => 
  createStyles({
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

export default function EditCard({card, editCard, setEdit}: any) {
  const style = useStyles()

  return (
    <form className={style.p100width} onSubmit={(e: React.SyntheticEvent) => {
      e.preventDefault()
      const target = e.target as typeof e.target & {
        content: {value: string}
        select: {value: string}
      }
      editCard({_id: card.NO_ID_FIELD, content: target.content.value, select: target.select.value})
      setEdit(false)
    }}>
      <FormControl className={style.form}>
        <Input className={style.p40width} name='content' type='text' placeholder='Card Content' defaultValue={card.content}/>
        <TextField className={style.p20width} name='select' label='Colour' defaultValue={card.select} select>
          <MenuItem value='primary'>Primary</MenuItem>
          <MenuItem value='secondary'>Secondary</MenuItem>
        </TextField>
        <Button className={style.p20width} type='submit'>Submit</Button>
      </FormControl>
    </form>
  )
}