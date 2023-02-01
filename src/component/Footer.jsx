import React from 'react'
import { AppBar, Container, Typography, Box, Tooltip } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <AppBar position="static" style={{ background: '#2E3B55' }}  >
            <Container maxWidth="xl" sx={{ mt: '70px' }}>

                <Typography variant='h5' sx={{ display: 'flex', justifyContent: 'Center', color: "#D4AF37" }}>
                    <b>©️ Made with React By Supgg</b>
                </Typography>



                <Box sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'Center', mb: '30px' }}  >
                    <Tooltip title="Instagram" >
                        <a href="https://www.instagram.com/_supgg/" target="#blank" style={{ color: 'white' }}> <InstagramIcon /></a>
                    </Tooltip> &nbsp;
                    <Tooltip title="facebook" >
                        <a href="https://www.facebook.com/suparna.adhikari.925/" target="#blank" style={{ color: 'white' }}>   <FacebookOutlinedIcon /></a>
                    </Tooltip> &nbsp;
                    <Tooltip title="github" >
                        <a href='https://github.com/sup25' target="#blank" style={{ color: 'white' }}>  <GitHubIcon /></a>
                    </Tooltip>

                </Box>
            </Container>
        </AppBar>
    )
}

export default Footer