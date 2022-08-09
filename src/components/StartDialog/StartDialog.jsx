import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from 'react-redux'
import { changeStatus } from '../../features/dialog/dialogSlice';
import { clearScore } from '../../features/square/squareSlice';

const StartDialog = () => {
  const open = useSelector(state => state.dialog.status)
  const score = useSelector(state => state.square.score)
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(clearScore())
    dispatch(changeStatus())
  }
  return (

    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Labirint"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {score ? `you have ${score}points try again and collect more points` : 'Hello guys its a simple game for attentiveness'}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClick()} >
          {score ? 'Try Again' : 'Start Game'}
        </Button>
      </DialogActions>
    </Dialog>

  );
}
export default StartDialog