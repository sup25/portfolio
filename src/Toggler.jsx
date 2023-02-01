import { Box } from '@mui/material';
import React, { useState } from 'react';
import './toggler.css'
import { GrSun, GrMoon } from "react-icons/gr";
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
function Toggler() {
  const [theme, setTheme] = useState('light');
  const [icon, setIcon] = useState(GrSun)
  const [color, setColor] = useState('gold');
  const themeStyle = theme === 'light' ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: 'black', color: 'white' };
  const handleChange = () => {

    setTheme(theme === 'dark' ? 'light' : 'dark');
    setIcon(theme === 'dark' ? GrSun : GrMoon);
    setColor(color === 'gold' ? 'rgb(80, 78, 78)' : 'gold');

  };

  return (

    <div style={themeStyle}>
      <Box mt='0px' display="flex" justifyContent="flex-end" sx={{ mr: 2 }}>
        <i onClick={handleChange} style={{ backgroundColor: color }}>
          {icon}
        </i>

      </Box>
      <Box mt='20px' ml='40px' display="flex" justifyContent="flex-end" sx={{ mr: { sm: 5 } }}>
        Current theme: {theme}
      </Box>
      <Box
        mt='20px' ml='40px'
      >
        <Home />
        <About />
        <Works />
        <Contact />
      </Box>




    </div>

  );
}



export default Toggler


