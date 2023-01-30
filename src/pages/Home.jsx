import { Box, Typography } from '@mui/material'

import sup from '../sup.png'
const Home = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'


        }}>
            <Box sx={{}}>
                <Typography sx={{ fontWeight: 'bold', fontSize: "14px" }}>
                    ILLUSTRATOR, GRAPHIC DESIGNER
                </Typography>
                <Typography sx={{ fontWeight: 'bold', fontSize: "72px" }}>
                    I design digital <br /> crafts for clients.

                </Typography>
            </Box>


            <Box sx={{ display: { xs: 'none', md: 'flex', }, mr: 1 }}>
                <img src={sup} alt="heroimage" style={{ width: "650px" }} />
            </Box>








        </Box>
    )
}

export default Home