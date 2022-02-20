import React from 'react';
import {
  Container, Typography, TextField, Stack, Button,
} from '@mui/material';

const Appointment = () => (
  <Container component="main" sx={{ backgroundColor: 'white', p: 5 }}>
    <Typography
      variant="h4"
      color="primary"
      sx={{
        mb: 6,
        textTransform: 'capitalize ',
      }}
    >
      Make your appointment
    </Typography>
    <Stack component="form" noValidate spacing={3}>
      <TextField
        required
        fullWidth
        label="doctor specialization"
        autoFocus
      />
      <TextField
        label="Details"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2021-03-24T10:30"
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{
          alignSelf: 'start',
        }}
      >
        Submit
      </Button>
    </Stack>
  </Container>
);

export default Appointment;
