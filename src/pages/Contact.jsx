import React from 'react'
import TextField from '@mui/material/TextField';

import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';



const Contact = () => {
    return (
        <Container >
            <Box
                sx={{ mt: { lg: '70px', xs: '70px' } }}

            >
                <Typography variant='h3' sx={{ fontWeight: 'bold', textAlign: 'center' }}>

                    CONTACT SUPARNA ADHIKARI

                </Typography>

                <Box


                    display='flex' flexWrap='wrap'
                    justifyContent=' center'

                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '100ch', background: '#fff', borderRadius: 1 },

                    }}

                    autoComplete="off" >
                    <TextField fullWidth
                        required
                        id="outlined-required"
                        label="Full Name"



                    />


                    <TextField fullWidth
                        id="outlined-basic"
                        label="Email"


                    />
                    <TextField
                        fullWidth
                        multiline
                        rows={5}
                        id="outlined-multiline-flexible"
                        label="Message"


                    />




                </Box>


            </Box>

        </Container>



    )
}

export default Contact
