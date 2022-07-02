import { useState, } from "react";
import { Grid, Container, Button, Modal } from "@mui/material";
import "./style/Contacto.scss";


const Contacto = () => {
    const [openModal, setOpenModal] = useState(false)


    const addContacto = (e) => {
        e.preventDefault()
        setOpenModal(true)
    }
    const volverHome = () => {

        window.location.replace('')


    }
    return (
        <>
            <Container id="contacto">
                <Grid>
                    <h1> Contacto</h1>
                </Grid>
                <Grid>
                    <form  netfily className="form" >
                        <label>Nombre completo</label>
                        <input type="text" required placeholder="Ingresa tu nombre" name="nombre" />
                        <label>Correo Electronico</label>
                        <input type="email" required placeholder="Ingresa tu correo electronico" inamed="correo" />
                        <label>Ingresa su mensaje</label>
                        <textarea required placeholder="..." name="mensaje" />
                        <Button type="submit" className="btnContacto" variant="contained" >Enviar</Button>
                    </form>
                </Grid>




            </Container>
            <Modal onClose={() => setOpenModal(false)} open={openModal}>
                <div className="envioForm">
                    <h4>Muchas gracias por contactarme, me comunicare con usted a la brevedad.</h4>
                    <Button className="btnVolver" onClick={volverHome}  >Volver</Button>
                </div>



            </Modal>

        </>

    )
}
export default Contacto