import * as React from 'react';
import {
    AppBar, Stack, Menu, Typography, Box, MenuItem,
    Tooltip, Toolbar, IconButton, Container, Button, MenuList
} from '@mui/material';
import logo from '../logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';



function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" style={{ background: '#2E3B55' }} >
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'none', md: 'flex', }, mr: 1 }}>
                        <img src={logo} alt="logo" height={50} />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',

                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}
                            >

                                <Stack>
                                    <MenuItem>< HomeIcon />&nbsp;<Typography textAlign="center" variant="h5">Home </Typography></MenuItem>
                                    <MenuItem><InfoIcon />&nbsp;<Typography textAlign="center" variant="h5">About </Typography></MenuItem>
                                    <MenuItem><ContactMailIcon />&nbsp;<Typography textAlign="center" variant="h5">Contact </Typography></MenuItem>
                                </Stack>
                            </MenuItem>


                        </Menu>

                    </Box>

                    <Box
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            justifyContent: 'flex-end'
                        }}
                    >
                        <img src={logo} alt="logo" height={50} />
                    </Box>


                    <Box sx={{ flexGrow: 2, cursor: 'pointer', display: 'flex', justifyContent: 'flex-end' }}  >
                        <Tooltip title="Instagram" >
                            <a href="https://www.instagram.com/_supgg/" target="_blank" style={{ color: 'white' }}> <InstagramIcon /></a>
                        </Tooltip> &nbsp;
                        <Tooltip title="facebook" >
                            <a href="https://www.facebook.com/suparna.adhikari.925/" target="_blank" style={{ color: 'white' }}>   <FacebookOutlinedIcon /></a>
                        </Tooltip> &nbsp;
                        <Tooltip title="github" >
                            <a href='https://github.com/sup25' target="_blank" style={{ color: 'white' }}>  <GitHubIcon /></a>
                        </Tooltip>

                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex', }, color: 'white' }} >
                        <MenuItem ><Typography textAlign="center" variant="h5">Home </Typography></MenuItem>
                        <MenuItem><Typography textAlign="center" variant="h5">About </Typography></MenuItem>
                        <MenuItem><Typography textAlign="center" variant="h5">Contact </Typography></MenuItem>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default Navbar;


