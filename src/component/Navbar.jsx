// import { Stack, Typography } from '@mui/material';
// import { Link } from 'react-router-dom'
// import { useEffect, useState } from "react";
// import logo from '../logo.png'
// import { FaBars, FaTimes } from "react-icons/fa";
// import useMediaQuery from '@mui/material/useMediaQuery';



// function Navbar() {

//     const [isOpen, setIsOpen] = useState(false);
//     const handleClick = () => setIsOpen(!isOpen);

//     const Matches = useMediaQuery('(min-width:768px)');


//     //this is for to know if you have clicked your button or not!
//     useEffect(() => {
//         console.log(`Icon state is ${isOpen ? 'active' : 'inactive'}`);
//     }, [isOpen])

//     const rootStyle = {
//         display: 'flex',
//         alignItems: 'center',

//     };
//     const iconStyle = {
//         display: Matches ? 'none' : 'block',

//     };
//     const menuStyle = {
//         display: 'flex',
//         alignItems: 'center',
//         padding: Matches ? ' 0px' : '0px ',
//         flexDirection: 'row'

//     };
//     const menuItemStyle = {
//         margin: Matches ? ' 0px' : '2px ',

//     };
//     const aboutStyle = {
//         display: isOpen ? 'flex' : 'none',

//     };
//     const homeStyle = {
//         display: isOpen ? 'flex' : 'none',

//     };



//     return (

//         <Stack
//             style={rootStyle}
//             direction='row' p={2} backgroundColor='#B2BEB5' justifyContent='space-around'
//             sx={{
//                 gap: { sm: '122px', xs: '40px' },

//                 alignItems: "flex-end",
//                 px: '5px',

//             }}>

//             <Stack alignItems="flex-end" sx={{ ml: { sm: '25px', xs: '40px' } }}>
//                 <Link to='/' style={{
//                     textDecoration: 'none',
//                 }}>

//                     <img src={logo} alt="logo" height={50} />
//                 </Link>
//             </Stack>

//             <Stack direction="row" spacing={4} id="contract"
//                 style={menuStyle}
//             >
//                 <Link to='/' style={{
//                     textDecoration: 'none', color: '#3A1212',
//                     borderBottom: '3px solid #71797E ',

//                 }}>
//                     <Stack
//                         style={homeStyle} sx={{ menuItemStyle }}
//                     >
//                         <Typography variant="h5" sx={{ mt: 0, color: "#36454F" }} >
//                             Home
//                         </Typography>
//                     </Stack>



//                 </Link>
//                 <Stack style={aboutStyle} sx={{ menuItemStyle }}>
//                     <a href="#about" style={{ textDecoration: 'none', color: '#3A1212' }}>
//                         <Typography variant="h5" sx={{ mt: 0, color: "#36454F" }} >
//                             About
//                         </Typography>
//                     </a>
//                 </Stack>

//             </Stack>


//             {/* icons */}
//             <Stack id="icon" style={iconStyle} sx={{ color: '#fff', flexDirection: 'row' }} onClick={handleClick}>
//                 {isOpen ? <FaTimes /> : <FaBars />}

//             </Stack>

//         </Stack>

//     )
// }
// export default Navbar;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../logo.png'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';


const pages = ['Products', 'Pricing', 'Blog'];


function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
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
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
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
                        }}
                    >
                        <img src={logo} alt="logo" height={50} />
                    </Box>
                    <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, }}  >
                        <Tooltip title="Instagram" >
                            <InstagramIcon alt="instagram" />
                        </Tooltip>
                        <Tooltip title="facebook" >
                            <FacebookOutlinedIcon alt="facebook" />
                        </Tooltip>
                        <Tooltip title="github" >
                            <GitHubIcon alt="github" />
                        </Tooltip>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;


