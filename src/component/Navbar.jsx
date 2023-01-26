import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import logo from '../logo.png'
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    //this is for to know if you have clicked your button or not!
    useEffect(() => {
        console.log(`Icon state is ${isOpen ? 'active' : 'inactive'}`);
    }, [isOpen])





    return (

        <Stack
            direction='row' p={2} backgroundColor='#B2BEB5' justifyContent='space-around'
            sx={{
                gap: { sm: '122px', xs: '40px' },

                alignItems: "flex-end",
                px: '5px',

            }}>

            <Stack alignItems="flex-end" sx={{ ml: { sm: '25px', xs: '40px' } }}>
                <Link to='/' style={{
                    textDecoration: 'none',
                }}>

                    <img src={logo} alt="logo" height={50} />
                </Link>
            </Stack>

            <Stack
                direction="row"


                spacing={4}
                alignItems="flex-end"



            >
                <Link to='/' style={{
                    textDecoration: 'none',
                    color: '#3A1212',
                    borderBottom: '3px solid #71797E ',

                }}>

                    <Typography variant="h5" sx={{ mt: 0, color: "#36454F" }} >
                        Home
                    </Typography>


                </Link>

                <a href="#about" style={{ textDecoration: 'none', color: '#3A1212' }}>
                    <Typography variant="h5" sx={{ mt: 0, color: "#36454F" }} >
                        About
                    </Typography>
                </a>
            </Stack>


            {/* icons */}
            <Stack id="icon" sx={{ color: '#fff', flexDirection: 'row' }} onClick={handleClick}>
                {isOpen ? <FaTimes /> : <FaBars />}

            </Stack>

        </Stack>

    )
}
export default Navbar;

