import React, { useState } from 'react'
import { Card, CardActions, CardContent, CardHeader, Typography, IconButton } from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import EditCard from './EditCard'

const useStyles = makeStyles(() => 
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    p100width: {
      width: '100%',
    },
    cardcontent: {
      padding: '0 10%'
    },
  })
)

export default function DetailCard({card, editCard, deleteCard}: any) {
  const style = useStyles()

  const [edit, setEdit] = useState(false)

  return (
    <Card className={style.root}>
      <CardHeader
        title={"Card"}
      />
      <CardContent className={style.p100width}>
        {
        !edit ? 
          <Typography className={style.cardcontent} color={card.select}>
            {card.content}
          </Typography>
        :
          <EditCard
            card={card}
            editCard={editCard}
            setEdit={setEdit}
          />
        }
      </CardContent>
      <CardActions>
        <IconButton aria-label='edit' onClick={(e: React.MouseEvent) => {
          setEdit(!edit)
        }}>
          <Edit/>
        </IconButton>
        <IconButton aria-label='delete' onClick={(e: React.MouseEvent) => {
          deleteCard({_id: card.NO_ID_FIELD})
          setEdit(false)
        }}>
          <Delete/>
        </IconButton>
      </CardActions>
    </Card>
  )
}