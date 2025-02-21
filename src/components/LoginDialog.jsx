import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Link } from 'react-router-dom';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function LoginDialog({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
    >
      <DialogTitle variant="h5" sx={{ flexGrow: 1, textAlign: 'center' }}>
        <span id="spanPf" className='oswald-titlespan'>Purr-fect</span> <span id="spanHome" className='oswald-titlespan'>Homes</span>
      </DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: "20px", p: "50px" }}>
        <DialogContentText fontSize="1.1rem">
          Create your account or Signup
        </DialogContentText>

        {/* Create Account Button */}
        <Link to="./RegisterForm.jsx" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#64A651',
              "&:hover": {
                backgroundColor: "#538A44",
              },
            }}
            onClick={handleClose} // Close dialog on click
          >
            Create your account
          </Button>
        </Link>

        {/* Login Button */}
        <Link  to="./LoginForm.jsx" style={{ textDecoration: 'none'}}>
        <Button
          variant="contained"
          size="large"
          sx={{
            width:"237px",
            backgroundColor: '#64A651',
            "&:hover": {
              backgroundColor: "#538A44",
            },
          }}
          onClick={handleClose} // Close dialog on click
        >
          Login
        </Button>
        </Link>
      </DialogContent>

      {/* Cancel Button */}
      <DialogActions>
        <Button onClick={handleClose} sx={{ color: "grey" }}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
