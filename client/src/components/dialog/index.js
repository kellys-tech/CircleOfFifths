import React from "react";
import {List, ListItem, ListItemText, DialogTitle, Dialog, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
  dialog: {
    position: "absolute", 
    top: "50px",
    left: "49%"
  }
})

function NoteDialog(props) {
  const { onClose, choices, open } = props;

  const classes = useStyles()

  // const handleClose = () => {
  //   onClose(selectedValue);
  // };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
    classes = {{paper: classes.dialog}}
      // onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Choose one</DialogTitle>
      <List>
        {choices.map((note, i) => (
          <ListItem
            button
            onClick={() => handleListItemClick(note)}
            key={i}
          >
            <ListItemText primary={note} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default NoteDialog;