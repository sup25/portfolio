import { Box } from '@mui/material';
import Navbar from './component/Navbar'
import Toggler from "./Toggler";
import './app.css'



function App() {
  return (
    <Box
      width='400'
      sx={{ width: { xl: '1488px' } }}
      m='auto'
    >
      <Navbar />
      <Toggler />


    </Box>


  );
}

export default App;
