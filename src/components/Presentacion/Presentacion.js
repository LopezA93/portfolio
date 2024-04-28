import ImagenPerfil from "./img/fondo.jpg";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ArticleIcon from "@mui/icons-material/Article";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./style/presentacion.scss";

const Presentacion = () => {
  return (
    <Container id="presentacion" className="boxPresentacion">
      <div className="boxImg">
        <img src={ImagenPerfil} />
      </div>
      <div className="boxPresentacionInfo">
        <p>
          {" "}
          <span className="nombre">
            Hola, soy Agustin Lopez, un gusto!
          </span>{" "}
          <br />
          Soy desarrollador FullStack Developer Javascript - React Js - Next Js
          - Node Js - React Native.
          <br />
          Soy Abogado recibido en la Facultad Nacional de Cordoba - Argentina, y
          hace un tiempo, decidí adentrarme en el mundo de la programación, y
          desde entonces, cada día me fascina más este apasionante campo. Mi
          viaje en la programación comenzó cuando tomé la decisión de emigrar a
          España. <br/>
          Desde que me sumergí en el mundo de la tecnología y
          descubrí mi verdadera pasión. Sin embargo, mi primer contacto
          profesional con la programación fue en una startup en Argentina, donde
          comencé a desarrollar mis habilidades y conocimientos. A principios de
          este año, tuve la oportunidad de dar un paso más en mi carrera al
          unirme a un grupo de comunicación en España como Fullstack. Esta
          experiencia internacional ha sido invaluable para mi crecimiento
          profesional, permitiéndome adquirir una perspectiva global y trabajar
          en proyectos diversos y desafiantes. <br/>Me considero un profesional
          dedicado y responsable, siempre en busca de nuevas oportunidades para
          crecer y mejorar. Aspiro a desplegar mis habilidades técnicas y
          blandas dentro del sector de la tecnología de la información, con el
          objetivo de seguir creciendo profesionalmente y contribuir al éxito de
          los proyectos en los que participo. ¡Estoy emocionado por lo que el
          futuro me depara en este apasionante viaje en el mundo de la
          tecnología!
        </p>
      </div>
      <div className="redes">
        <a href="CV.pdf" target="_blank">
          <ArticleIcon className="iconoWA" />
        </a>
        <a href="mailto:agustin.vd@hotmail.com" target="_blank">
          <AlternateEmailIcon className="iconoMail" />
        </a>
        <a href="https://www.linkedin.com/in/lopeza93/" target="_blank">
          <LinkedInIcon className="iconoLI" />
        </a>
        <a href="https://github.com/LopezA93/" target="_blank">
          <GitHubIcon className="iconoGH" />
        </a>
      </div>
    </Container>
  );
};

export default Presentacion;
