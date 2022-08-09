import ImagenPerfil from "./img/fondo.jpg"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ArticleIcon from '@mui/icons-material/Article';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./style/presentacion.scss"



const Presentacion = () => {


    return (
        <Container id="presentacion" className="boxPresentacion">
            
            <div className="boxImg">
                <img src={ImagenPerfil}/>
            </div>
            <div className="boxPresentacionInfo">
            <p> <span className="nombre">Hola, soy Agustin Lopez, un gusto!</span> <br/>
            Soy desarrollador Frontend, y en curso de ser desarrollador Fullstack.<br/>
            Tengo conocimientos en HTML - CSS - BOOTSTRAPP - SASS - JAVASCRIPT - REACT JS - MATERIAL UI - FIREBASE. 
            
            </p>
            </div>
            <div className="redes">
                <a href="CV.pdf" target="_blank"><ArticleIcon className="iconoWA"/></a>
                <a href="mailto:agustin.vd@hotmail.com" target="_blank"><AlternateEmailIcon className="iconoMail"/></a>
                <a href="https://www.linkedin.com/in/lopeza93/" target="_blank"><LinkedInIcon className="iconoLI"/></a>
                <a href="https://github.com/LopezA93/" target="_blank"><GitHubIcon className="iconoGH"/></a>


            </div>

            
        </Container>

    )

}

export default Presentacion
