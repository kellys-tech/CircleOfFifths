import React from "react";
import {Button, List, ListItem, ListItemText, DialogTitle, Dialog} from '@material-ui/core'

function dialogNotes(props) {
    const notes = props.notes;
    if (notes) {}
};

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Choose one</DialogTitle>
      <List>
        {notes.map((notes) => (
          <ListItem
            button
            onClick={() => handleListItemClick(notes)}
            key={notes}
          >
            <ListItemText primary={notes} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(notes[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        This dialog will open on a keyboard button click
      </Button>
      <SimpleDialog 
      open={open} onClose={handleClose} />
    </div>
  );
}
