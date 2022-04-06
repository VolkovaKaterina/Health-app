import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography,
} from '@mui/material';

const Clients = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image="https://source.unsplash.com/flRm0z3MEoA"
                alt="appointment"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Appointment
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="large"
                  variant="contained"
                  onClick={() => navigate('/')}
                >
                  Book an appointment
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/e8YFkjN2CzY"
                alt="drugs"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Drugs
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Positive-Health Issues Voluntary Nationwide Recall of RISE UP RED EDITION Capsules
                  Due to the Presence of Undeclared Tadalafil
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="vaccination"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Vaccination
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Positive-Health Issues Voluntary Nationwide Recall of RISE UP RED EDITION Capsules
                  Due to the Presence of Undeclared Tadalafil
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/miQssrNdqEQ"
                alt="drugs"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Health
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {/* eslint-disable-next-line max-len,react/no-unescaped-entities */}
                  About 1.3 million people die on the world's roads and 20 - 50 million are injured every year.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/q98J_eiecHA"
                alt="random phpto"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Medicine
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {/* eslint-disable-next-line react/no-unescaped-entities,max-len */}
                  This fact file presents data from WHO's most recent Global health estimates and the Global
                  status report on road safety.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Clients;
