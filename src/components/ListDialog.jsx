import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Link } from 'react-router-dom';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ListDialog({ open, handleClose }) {
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
      <DialogContent sx={{ display: "flex", flexDirection: "column"}}>
        <p>1) We are NOT a <strong>rescue centre</strong> so we can't take pets directly into our care. We help you find a suitable adopter.</p>
        <p>2)  You won’t get paid for your pet but it is <strong>free</strong> to list them with our Charity.</p>
        <p>3)  We ONLY support the rehoming of pets that are living in <strong>Pakistan</strong>.</p>
        <p>4) All listings are subject to approval by the Purr-fect Homes team. Before we post your listing on the site, we’ll check your pet’s profile thoroughly. If we have any questions, we will give you a call.</p>
      </DialogContent>

      <DialogActions>
      <Link to="./ListPetForm.jsx" style={{ textDecoration: 'none' }}>
      <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#64A651',
              "&:hover": {
                backgroundColor: "#538A44",
              },
            }}
            onClick={handleClose}
            // Close dialog on click
          >
            Continue
          </Button>
      </Link>
      </DialogActions>
    </Dialog>
  );
}
