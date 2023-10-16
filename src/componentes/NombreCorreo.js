import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function NombreCorreo(props) {
    //declarar estados para el nombre, correo y contraseña
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
//declarar estado para el boton
  const [botonGuardadoHabilitado, setBotonGuardadoHabilitado] = useState(false);

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
    validarCamposLlenos();
  };

  const handleCorreoChange = (e) => {
    setCorreo(e.target.value);
    validarCamposLlenos();
  };
  const handleContrasenaChange=(e)=>{
    setContrasena(e.target.value);
    validarCamposLlenos();
  };

  const handleGuardarClick = () => {
    
    props.guardarDatos(nombre, correo, contrasena);
    setBotonGuardadoHabilitado(false);
  };
  const validarCamposLlenos = () => {
    // Verificar si todos los campos contienen datos válidos
    if (nombre.trim() !== '' && correo.trim() !== '' && contrasena.trim() !== '') {
      setBotonGuardadoHabilitado(true); // Habilitar el botón si todos los campos están llenos
    } else {
      setBotonGuardadoHabilitado(false); // Deshabilitar el botón si algún campo está vacío
    }
  };

  return (
    <div>
      <div className='textfield'>
      <TextField
        label="Nombre"
        value={nombre}
        onChange={handleNombreChange}
        fullWidth
      /></div>
      <br />
      <div className='textfield'>
      <TextField
        label="Correo"
        type="email"
        value={correo}
        onChange={handleCorreoChange}
        fullWidth
        InputLabelProps={{
          className: "textfield-label" 
        }}
      />
      </div>
      <br />
      <div className='textfield'>
      <TextField
        label="Contraseña"
        type="password"
        value={contrasena}
        onChange={handleContrasenaChange}
        fullWidth
      />
      </div>
      <br />
      <Button variant="contained" onClick={handleGuardarClick} disabled={!botonGuardadoHabilitado}>
        Guardar
      </Button>
    </div>
  );
}

export default NombreCorreo;