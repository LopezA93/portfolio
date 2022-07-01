import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-scroll'
import "./style/Navbar.scss"


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" >
        <Toolbar  className="navBar">
        
          <Button variant="contained"><Link  to="presentacion" spy={true} smooth={true}>About</Link></Button>
          <Button variant="contained"><Link  to="proyectos" spy={true} smooth={true}>Proyectos</Link></Button>
          <Button variant="contained"><Link  to="contacto" spy={true} smooth={true}>Contacto</Link></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}