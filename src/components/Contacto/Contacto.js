import { useState } from "react";
import { Grid, Container, Button, Modal } from "@mui/material";
import "./style/Contacto.scss";

const Contacto = () => {
  const [openModal, setOpenModal] = useState(false);

  const [values, setValues]= useState({})
  const handleChange = (e) => {
    setValues({...values, 
        [e.target.name]:e.target.values})
  }
  const addContacto = (e) => {
    console.log(values)
    e.preventDefault();
    // setOpenModal(true);
  };
  const volverHome = () => {
    window.location.replace("");
  };
  return (
    <>
      <Container id="contacto">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <h1> Contacto</h1>
            <form name="contact"  className="form">
              <input type="hidden" name="form-name" value="contact" />
              <label>Nombre completo</label>
              <input
                type="text"
                required
                placeholder="Ingresa tu nombre"
                name="name"
                onChange={handleChange}
              />
              <label>Correo Electronico</label>
              <input
                type="email"
                required
                placeholder="Ingresa tu correo electronico"
                onChange={handleChange}
                name="email"
              />

              <label>Ingresa su mensaje</label>
              <textarea required placeholder="..." name="message" />
              <Button onClick={addContacto} className="btnContacto" variant="contained">
                Enviar
              </Button>
            </form>
          </Grid>
          {/* <Grid item xs={12} md={6} className="datos">
            <h1> Mis Datos</h1>
            <p>Email: tuemail@ejemplo.com</p>
            <p>Teléfono: 123456789</p>

          </Grid> */}
        </Grid>
      </Container>
      <Modal onClose={() => setOpenModal(false)} open={openModal}>
        <div className="envioForm">
          <h4>
            Muchas gracias por contactarme, me comunicare con usted a la
            brevedad.
          </h4>
          <Button className="btnVolver" onClick={volverHome}>
            Volver
          </Button>
        </div>
      </Modal>
    </>
  );
};
export default Contacto;