import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import SpaIcon from '@mui/icons-material/Spa';
import {
  Box, Container, CssBaseline, Typography,
} from '@mui/material';

import Layout from './Layot';
import Events from './Events';
import Doctors from './Doctors';
import Clients from './Clients';
import Appointment from './Appointment';

const App = () => (
  <div>
    <CssBaseline />
    <Container component="main">
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        m: 3,
      }}
      >
        <SpaIcon
          color="primary"
          sx={{
            fontSize: 46,
            ml: 3,
            mr: 1,
          }}
        />
        <Typography variant="h3"> Health App</Typography>

      </Box>
    </Container>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Appointment />} />
        <Route path="events" element={<Events />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="clients" element={<Clients />} />
      </Route>
    </Routes>
  </div>
);
export default App;
