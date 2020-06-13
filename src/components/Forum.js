import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

/*function Forum() {
  return (
    <Wrapper>
      <span>Forum Page</span>
      <section />
      <Button component={RouterLink} to="/forumdetails" value = "[Pinned] Software Engineering Resources"  fullWidth = "True">[Pinned] Software Engineering Resources</Button>
      <Button fullWidth = "True">Project Question #1 </Button>
      <Button fullWidth = "True">Project Question #2 </Button>
      <Button fullWidth = "True">Project Discussion Board</Button>
      <Button fullWidth = "True">Lecture Questions</Button>
    </Wrapper>
    
  );
}*/
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);
function CustomizedDialogs() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClickOpen3 = () => {
    setOpen3(true);
  };
  const handleClose = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
  };

  return (
    <Wrapper>
      <div>
        <Button
          variant="outlined"
          size="small"
          fullWidth
          onClick={handleClickOpen1}
        >
          Add new forum +
        </Button>

        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open1}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Create new forum
          </DialogTitle>
          <DialogContent dividers>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Description"
              fullWidth
              multiline
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Add Assignment
            </Button>
            <Button autoFocus onClick={handleClose} color="primary">
              Add Attachment
            </Button>
            <Button autoFocus onClick={handleClose} color="primary">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
        <Button
          variant="outlined"
          size="small"
          fullWidth
          onClick={handleClickOpen2}
        >
          [Pinned] Software Engineering Resources
        </Button>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open2}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Software Engineering Resources
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Youtube tutorial for material ui:
            </Typography>
            <Link
              component={RouterLink}
              target="_blank"
              to="https://www.youtube.com/watch?v=pHclLuRolzE&t=182s"
            >
              React + Material UI #1
            </Link>
            <Typography gutterBottom>Gmail link:</Typography>
            <Link
              component={RouterLink}
              target="_blank"
              to="https://www.gmail.com"
            >
              Gmail
            </Link>
            <Typography gutterBottom>School Website:</Typography>
            <Link
              component={RouterLink}
              target="_blank"
              to="https://my.kettering.edu"
            >
              My Kettering
            </Link>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <Button
          variant="outlined"
          size="small"
          fullWidth
          onClick={handleClickOpen3}
        >
          Discussion on Deliverable 2
        </Button>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open3}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Discussion on Deliverable 2
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              This will have a question about the assignment and a link to that
              assignment
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #4f555b;
  padding: 10px;

  span {
    color: #fff;
    font-size: 20px;
  }

  section {
    color: #fff;
  }
`;

export default CustomizedDialogs;
