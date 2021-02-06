import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Me from '../assets/img/IMG_6429.png'
import You from '../assets/img/IMG_6431.png'

const Chat = (props) => {
  const isQuestion = (props.type === 'question')
  const classes = isQuestion ? 'p-chat_row' : 'p-chat__reverse'

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={Me} />
        ) : (
            <Avatar alt="icon" src={You} />
          )}
      </ListItemAvatar>
      <div className="p-chat__bubble">
        {props.text}
      </div>
    </ListItem>
  )
}

export default Chat
