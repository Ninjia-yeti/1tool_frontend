"use client";

import React from 'react';
import { TextField, Button, Typography, Container, Box, Checkbox, FormControlLabel, Link } from '@mui/material';

const SignInPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle sign-in logic here
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
          backgroundColor: 'white'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: 2 }}>
          <Typography component="h1" variant="h5" sx={{ color: 'rgba(0, 0, 0, 0.54)' }}>
            Sign in
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

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
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
                value="remember"
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
                Remember me
              </Typography>
            }
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            component={Link}
            href="/working"
          >
            Sign In
          </Button>

          <Link href="/sign-up" variant="body2">
            Create new account? Sign up
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
          Sign in with Google
        </Button>
      </Box>


    </Container>
  );
};

export default SignInPage;