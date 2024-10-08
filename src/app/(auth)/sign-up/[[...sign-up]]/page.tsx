
"use client";

import React from 'react';
import { TextField, Button, Typography, Container, Box, Link, FormControlLabel, Checkbox } from '@mui/material';

const SignUpPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle sign-up logic here
  };

  return (
    
    <Container component="main" maxWidth="xs">

     <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid grey',
          borderRadius: '8px',
          padding: '24px',
          backgroundColor: 'white',
        }}
      >
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: 2 }}>
        <Typography component="h1" variant="h5" sx={{ color: 'rgba(0, 0, 0, 0.54)' }}>
          Sign up
        </Typography>
        <Button
          onClick={() => window.location.href = '/'}
          sx={{
            minWidth: 'auto',
            p: 1,
            color: 'black',
            '&:hover': {
              backgroundColor: 'grey',
            },
          }}
        >
          <Typography variant="body2">×</Typography>
        </Button>
      </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            autoComplete="name"
            autoFocus
            InputProps={{
              sx: {
                color: 'grey',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'grey',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'grey',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'grey',
                },
              },
            }}
            InputLabelProps={{
              sx: { color: 'grey' },
            }}
            sx={{
              '& .MuiInputBase-input': {
                color: 'grey',
              },
            }}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            InputProps={{
              sx: {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'grey',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'grey',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'grey',
                },
              },
            }}
            InputLabelProps={{
              sx: { color: 'grey' },
            }}
            sx={{
              '& .MuiInputBase-input': {
                color: 'grey',
              },
            }}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            name="password"
            autoComplete="new-password"
            autoFocus
            InputProps={{
              sx: {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'grey',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'grey',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'grey',
                },
              },
            }}
            InputLabelProps={{
              sx: { color: 'grey' },
            }}
            sx={{
              '& .MuiInputBase-input': {
                color: 'grey',
              },
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                value="agreeTerms"
                color="primary"
                sx={{
                  color: 'grey',
                  '&.Mui-checked': {
                    color: 'grey',
                  },
                }}
              />
            }
            label={
              <Typography variant="body2" sx={{ color: 'grey' }}>
                I agree to the <Link href="#">Terms and Privacy</Link>
              </Typography>
            }
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Link href="/sign-in" variant="body2">
            Already have an account? Sign in
          </Link>
        </Box>

        <Typography variant="body2" align="center" sx={{ mb: 2, color: 'black' }}>
          or
        </Typography>

      <Button
      fullWidth
      variant="outlined"
      startIcon={
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google logo"
          style={{ width: 18, height: 18 }}
        />
      }
      sx={{
        mb: 2,
        color: 'rgba(0, 0, 0, 0.54)',
        borderColor: 'rgba(0, 0, 0, 0.54)',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          borderColor: 'rgba(0, 0, 0, 0.54)',
        },
      }}
    >
      Sign up with Google
    </Button>
      </Box>

      
    
      </Container>
        );
};

        export default SignUpPage;
