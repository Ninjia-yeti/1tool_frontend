"use client";

import React, { useState, useEffect } from 'react';
import { Input, Button, Select, Table, Slider, Typography, Box, Container, TextField } from '@mui/material';

const WorkingPage = () => {
  const [promptTerm, setPromptTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [numberRange, setNumberRange] = useState([0, 100]);

  const handlePromptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromptTerm(event.target.value);
  };

  const handleOptionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedOption(event.target.value as string);
  };

  const handleNumberRangeChange = (event: Event, newValue: number | number[]) => {
    setNumberRange(newValue as number[]);
  };

  // Sample data for the table
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getOptions');
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container sx={{ padding: '3%', maxWidth: '90% !important'}}>
      <Box sx={{ padding: '3%', backgroundColor: 'rgb(146, 63, 255)', height: '88vh' }}>
        <Box my={4}>
          <Box mb={2} display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
            <Box width={{ xs: '100%', sm: '70%' }} minWidth="70%">
              <Typography variant="subtitle1" component="h2" gutterBottom>
                Enter your natural language prompt and then select a state to search, click search button.
              </Typography>
              <Box position="relative">
                <TextField
                  fullWidth
                  multiline
                  rows={1}
                  placeholder="Example: I am looking for a software engineer..."
                  value={promptTerm}
                  onChange={handlePromptChange}
                  sx={{
                    backgroundColor: 'white',
                    '& .MuiInputBase-input': {
                      color: 'black', // Adjust text color for better contrast
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'darkgrey', // Adjust border color for better visibility
                    },
                    '& .MuiFormHelperText-root': {
                      textAlign: 'right',
                    },
                    borderRadius: '10px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '10px',
                    },
                  }}
                  maxRows={4}
                  InputProps={{
                    endAdornment: (
                      <Typography variant="caption" color="textSecondary">
                        {promptTerm.length}/100
                      </Typography>
                    ),
                    inputProps: { maxLength: 100 },
                  }}
                />
                {promptTerm && (
                  <Box
                    sx={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      opacity: promptTerm ? 1 : 0,
                      transition: 'opacity 0.3s ease-in-out',
                      animation: promptTerm ? 'fadeOut 1s ease-in-out 1s forwards' : 'none',
                      '&:hover': {
                        opacity: 1,
                        animation: 'none',
                      },
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                    >
                      Search
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
            
            <Box width={{ xs: '100%', sm: '30%' }}>
              <Typography variant="subtitle1" component="h2" gutterBottom>
                Choose at least one state to search
              </Typography>
              <Select
                native
                value={selectedOption}
                onChange={(event) => setSelectedOption(event.target.value)}
                sx={{
                  backgroundColor: 'white',
                  width: '100%',
                  '& .MuiSelect-select': {
                    color: 'black', // Adjust text color for better contrast
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'darkgrey', // Adjust border color for better visibility
                  },
                  borderRadius: '10px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                  },
                }}
              >
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
              </Select>
            </Box>
          </Box>

          <Box mb={2}>
            <Slider
              value={numberRange[1]}
              onChange={(event, newValue) => setNumberRange([0, newValue as number])}
              valueLabelDisplay="on"
              aria-labelledby="max-value-slider"
              min={0}
              max={100}
            />
            <Box display="flex" justifyContent="space-between" mt={1}>
              <Typography variant="caption">Min: 0</Typography>
              <Typography variant="caption">Max: 100</Typography>
            </Box>
          </Box>
          
          <Table >
            <thead style={{ borderBottom: '3px solid rgba(128, 128, 128, 0.3)' }}>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr></tr>
              ))}
            </tbody>
          </Table>
        </Box>
      </Box>
    </Container>
  );
};

export default WorkingPage;
