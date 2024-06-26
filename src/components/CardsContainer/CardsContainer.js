import Trabajos from "../CardTrabajos/CardTrabajos";
import proyectos from "../proyectos.json";
import { Container } from "@mui/system";
import { Box } from "@mui/material";

import "./style/CardsContainer.scss";
const TrabajosContainer = () => {
  const trabajos = proyectos;

  return (
    <>
      <Container id="proyectos" className="containerProyectos">
        <div className="secProyectos">
          <h1>Algunos de mis proyectos personales</h1>
          <Box className="boxTrabajos">
            {trabajos.map((app) => {
              return (
                <Trabajos
                  key={app.id}
                  tittle={app.tittle}
                  url={app.url}
                  skills={app.skills}
                  img={app.img}
                />
              );
            })}
          </Box>
        </div>
      </Container>
    </>
  );
};
export default TrabajosContainer;
