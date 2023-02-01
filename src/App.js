import { Box } from '@mui/material';
import Navbar from './component/Navbar'
import Toggler from "./Toggler";
import './app.css'
import Footer from './component/Footer';



function App() {
  return (
    <Box
      width='400'
      sx={{ width: { xl: '1488px' } }}
      m='auto'
    >
      <Navbar />
      <Toggler />
      <Footer />


    </Box>


  );
}

export default App;
