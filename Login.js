import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import './Login.css';
import OtpVerification from './OtpVerification'; // Assuming the OTP Verification component is in a file named OtpVerification.js

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [showOtpVerification, setShowOtpVerification] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setShowOtpVerification(true);
    } else {
      setOpenDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="sm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {showOtpVerification ? (
        <OtpVerification setOtpVerified={setLoggedIn} />
      ) : (
        <form style={{ width: '100%' }}>
          <Typography variant="h5" component="div" mb={2} mt={7} style={{ marginBottom: '1em' }}>
            Login Page
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ background: '#fff' }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ background: '#fff', marginBottom: '3em' }}
          />
          <Button
            className="login-button"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
      )}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Error !!</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Invalid credentials. Please try again.</Typography>
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

export default Login;
