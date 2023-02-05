import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

import { Box, Button, Typography } from '@mui/material';
import { Container } from '@mui/system';

import Snackbar from '@mui/material/Snackbar';


const Contact = () => {

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [open, setOpen] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = () => {
        if (!input1 || !input2 || !input3) {
            setError("All input fields cannot be empty.");
        } else {
            setError("");
            setInput1("");
            setInput2("");
            setInput3("");
            setOpen(true);
        }
    };



    return (
        <Container id="contact" >
            <Box
                sx={{ mt: { lg: '70px', xs: '70px' }, pb: '50px' }}

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
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}

                        required
                        id="outlined-required"
                        label="Full Name"


                    />



                    <TextField fullWidth

                        value={input2} onChange={(e) => setInput2(e.target.value)}
                        id="outlined-basic"
                        label="Email"


                    />



                    <TextField

                        value={input3} onChange={(e) => setInput3(e.target.value)}
                        fullWidth
                        multiline
                        rows={5}
                        id="outlined-multiline-flexible"
                        label="Message"


                    />




                </Box>
                <Box display="flex"
                    justifyContent="center"
                > <Button type="submit"
                    onClick={handleSubmit}
                    size="large"
                    sx={{



                        color: 'white',
                        borderRadius: '50px',
                        background: '#2E3B55',
                        "&.MuiButtonBase-root": {

                        },
                        "&.MuiButtonBase-root:hover": {
                            bgcolor: "#D4AF37"
                        }
                    }}>Submit</Button>
                    <Snackbar
                        open={open}
                        onClose={() => setOpen(false)}
                        message="Success"

                        autoHideDuration={3000}
                    />




                </Box>




            </Box>

        </Container>



    )
}

export default Contact
