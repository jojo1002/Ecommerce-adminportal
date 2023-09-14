
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const OtpVerification = ({ setOtpVerified }) => {
  const [otp, setOtp] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleVerifyOtp = () => {
    if (otp === '1234') { 
      setOtpVerified(true);
    } else {
      setOpenDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="sm">
      <form>
        <Typography variant="h5" component="div" mb={2} mt={7}>
          OTP Verification Page
        </Typography>
        <TextField
          label="OTP"
          variant="outlined"
          fullWidth
          margin="normal"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleVerifyOtp} 
        >
          Verify OTP
        </Button>
      </form>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Error !!</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Invalid OTP. Please try again.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default OtpVerification;
