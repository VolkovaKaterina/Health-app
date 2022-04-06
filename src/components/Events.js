import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography,
  Button, Card, CardActions, CardContent, Container,
} from '@mui/material';

const Events = () => {
  const navigate = useNavigate();
  return (
    <Container component="main">
      <Typography variant="h4" color="primary">
        EULAR 2022 | CONGRESS REGISTRATION
      </Typography>
      <Box sx={{ flexGrow: 1, mt: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7} sx={{ p: 7 }}>
            <Typography>
              The EULAR Congress is comprised of an extensive network of innovative minds
              working towards illustrating the latest scientific breakthroughs in clinical.
            </Typography>
            <div>
              <Accordion sx={{ mt: 5 }}>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Registration Categories</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Delegates with prescription authorisation are members of the medical,
                    dental or pharmacy professions who, in the course of his or her professional
                    EULAR will request a confirmation.
                    Proof of status is required
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>For Students</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Delegates with prescription authorisation are members of the medical,
                    dental or pharmacy professions who, in the course of his or her professional
                    Proof of status is required
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>For all participants</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Delegates with prescription authorisation are members of the medical,
                    EULAR will request a confirmation.
                    Proof of status is required
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <Button
              onClick={() => navigate('/doctors')}
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2.5 }}
            >
              Take part
            </Button>
          </Grid>
          <Grid item xs={12} md={5} sx={{ borderLeft: 1 }}>
            <Card>
              <CardContent>
                <Typography sx={{ fontSize: 18 }} color="primary" gutterBottom>
                  Registration for virtual tickets
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary">
                  Opens 15 November 2021
                  <br />
                  Deadline 30 June 2022*
                </Typography>
                <Typography sx={{ fontSize: 18 }} color="primary" gutterBottom>
                  Registration for onsite tickets
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary">
                  Opens 15 January 2022
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ mt: 10 }}>
              <CardContent>
                <Typography sx={{ fontSize: 18 }} color="primary" gutterBottom>
                  FAQs
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary">
                  Find the answers to frequently asked questions around the EULAR Congress event.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Access the FAQs</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Events;
