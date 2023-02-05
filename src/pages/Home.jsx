import { Box, Button, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import sup from '../sup.png'
const Home = () => {
    return (
        <Box sx={{
            display: 'flex',
            mt: { lg: '70px', xs: '5px' },
            ml: { lg: '100px', xs: '0px' },
            p: { lg: '25px' },
            pl: { xs: '30px' }



        }}

            position='relative'

        >

            <Box sx={{}}>
                <Typography sx={{ fontWeight: 'bold', fontSize: "14px" }}>
                    ILLUSTRATOR, GRAPHIC DESIGNER
                </Typography>
                <Typography sx={{ fontWeight: 'bold', fontSize: { lg: "72px", xs: '60px' } }}>
                    I design digital <br /> crafts for clients.

                </Typography>
                <Button href="#works" variant="contained" sx={{
                    borderRadius: '50px', height: '60px', background: '#2E3B55', "&.MuiButtonBase-root:hover": {
                        bgcolor: "#D4AF37"
                    },
                }}>Explore Work <KeyboardArrowRightIcon /> </Button>
            </Box>


            <Box sx={{ display: { xs: 'none', md: 'flex', }, ml: 1 }}>
                <img src={sup} alt="heroimage" style={{ width: "450px" }} />
            </Box>








        </Box>
    )
}

export default Home