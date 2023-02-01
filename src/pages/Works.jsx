import React from 'react'
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import one from "../crdimg/one.jpg";
import two from "../crdimg/two.png";
import three from "../crdimg/three.png";
import four from "../crdimg/four.png";
import five from "../crdimg/five.png";
import six from "../crdimg/six.png";
import { Container } from '@mui/system';



const Works = () => {
    return (
        <Container>
            <Box sx={{
                mt: { lg: '70px', xs: '70px', justifyContent: 'space-between' }



            }}>
                <Typography variant="h3" fontWeight="bold" textAlign='center'> Some of my work</Typography>
                <br />

                <Grid container spacing={0}>

                    <Grid item xs={3} md={4}>
                        <img src={one} alt="illu" style={{ height: '100%', width: '100%' }} />
                    </Grid>
                    <Grid item xs={3} md={4}>
                        <img src={two} alt="illu" style={{ height: '100%', width: '100%' }} />
                    </Grid>
                    <Grid item xs={3} md={4}>
                        <img src={three} alt="illu" style={{ height: '100%', width: '100%' }} />
                    </Grid>
                    <Grid item xs={3} md={4}>
                        <img src={four} alt="illu" style={{ height: '100%', width: '100%' }} />
                    </Grid>
                    <Grid item xs={3} md={4}>
                        <img src={five} alt="illu" style={{ height: '100%', width: '100%' }} />
                    </Grid>
                    <Grid item xs={3} md={4}>
                        <img src={six} alt="illu" style={{ height: '100%', width: '100%' }} />
                    </Grid>

                </Grid>

            </Box>
        </Container>
    )
}

export default Works