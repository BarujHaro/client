import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

function Materias(props) {
  const [completado, setCompletado] = useState(false);//Definicion de variables
  const [materiasnoCursadas, setMateriasnoCursadas] = useState([]);
  const [completadoOption, setCompletadoOption] = useState('1');
  const [botonGuardadoHabilitado, setBotonGuardadoHabilitado] = useState(true); // Estado para habilitar o deshabilitar el botón

  const codigoAMateria = {//mapeo de los nombres de las materias para asignarles un codigo
    "Programación": "CPRO",
    "Seminario de solución de problemas de programación": "SPRO",
    "Matemática discreta": "CMAT",
    "Métodos matemáticos I": "CMM1",
    "Seminario de solución de problemas de métodos matemáticos I": "SMM1",
    "Especializante selectiva introducción a la física": "EIFI",//1 semestre
    "Estructuras de datos I": "CED1",
    "Seminario de solucion de problemas de estructuras de datos I": "SED1",
    "Teoría de la computación": "TECO",
    "Métodos matemáticos II": "CMM2",
    "Seminario de solución de problemas de métodos matemáticos II": "SMM2",//2
    "Estructuras de datos II": "CED2",
    "Seminario de solución de problemas de estructuras de datos II": "SED2",
    "Administración de redes": "ADMR",
    "Algoritmia": "CALG",
    "Seminario de solución de problemas de algoritmia": "SALG",
    "Estadística y procesos estocásticos": "PYES",//3
    "Bases de datos": "CBDD",
    "Seminario de solución de problemas de bases de datos": "SBDD",
    "Administración de servidores": "ADSE",
    "Hipermedia": "HIPE",
    "Ingeniería de software I": "IDS1",//4
    "Seminario de solución de problemas de Ingenieria De Software I": "SDS1",//5
    "Control de proyectos": "CODP",
    "Seguridad de la información": "SEDI",
    "Programación para internet": "PPIN",//5
    "Ingenieria de software II": "IDS2",//5
    "Uso, adaptación y explotación de sistemas operativas": "CESO",
    "Seminario de solución de problemas de uso, adaptación y explotación de sistemas operativas": "SESO",//6
    "Almacenes de datos": "ALDD",
    "Administración de base de datos": "ADBD",
    "Minería de datos": "MIDD",//7
    "Sistemas basados en conocimiento": "CSBC",
    "Seminario de solución de problemas de sistemas basados en conocimiento": "SSBC",
    "Clasificación inteligente de datos": "CIDD",
    "Optativa abierta I": "OPT1",//7
    "Optativa abierta II": "OPT2",
    "Especializante selectiva": "ESP1",

  };

  const handleCompletadoChange = (e) => {//Cambia la opción de si el alumno ha completado las materias del semestre
    const valor = e.target.value;
    setCompletado(valor === '1');
    setCompletadoOption(valor);
    if (valor === '1') {
      setMateriasnoCursadas([]); //Limpia las materias no cursadas
    }
  };

  const handleMateriaSeleccionada = (materia) => {// actualiza los estados de las materias
    const yaCursada = materiasnoCursadas.includes(materia);
    if (yaCursada) {
      setMateriasnoCursadas(materiasnoCursadas.filter((m) => m !== materia));//Elimina la materia de materias no cursadas
    } else {
      setMateriasnoCursadas([...materiasnoCursadas, materia]);//Se crea una nueva lista que incluye todas las materias existentes en materiasnoCursadas junto con la nueva materia materia. 
    }
  };

  const guardarMaterias = () => {
    if (!botonGuardadoHabilitado) {
      return; // Si el botón ya está deshabilitado, no hacer nada
    }

    // Deshabilitar el botón después de presionarlo
    setBotonGuardadoHabilitado(false);
    if (completado) {
      const materiasCursadasNombres = props.materias.map((codigo) => codigoAMateria[codigo]);
    
     
      props.anadirAlRoadmap(materiasCursadasNombres); // Siempre se añaden todas las materias
    } else {
      const materiasCursadasFiltradas = props.materias.filter(
        (codigo) => !materiasnoCursadas.includes(codigo)
      );
      const materiasCursadasFiltradasNombres = materiasCursadasFiltradas.map((codigo) => codigoAMateria[codigo]);
  
     
      props.anadirAlRoadmap(materiasCursadasFiltradasNombres);
    }
  };


  return (
    
    <div>
        <div className='semestre'>
      <label>Semestre: {props.semestre}</label>
      </div>
      <div>
      <div className='pregunta1'>
        <label htmlFor={`semestrecursado-${props.semestre}`}>
          ¿Ya completaste las materias del semestre?
        </label>
        </div>
        <div className="radioGroupCustom">
  <RadioGroup row
    aria-label={`semestrecursado-${props.semestre}`}
    name={`semestrecursado-${props.semestre}`}
    value={completadoOption}
    onChange={handleCompletadoChange}
    
  >
    <FormControlLabel
      value="1"
      control={<Radio />}
      label={<span className="radioLabel">Si</span>}
      disabled={!botonGuardadoHabilitado}
    />
    <FormControlLabel
      value="0"
      control={<Radio />}
      label={<span className="radioLabel">No</span>}
      disabled={!botonGuardadoHabilitado}
    />
  </RadioGroup>
  </div>
       
      </div>
      <div className='pregunta1'>Materias no cursadas (En caso de que no se haya completado el semestre):</div>
{props.materias.map((materia) => (
  <div key={materia}>
    <label>
      <Checkbox //etiqueta de un componente de checkbox, proporcionado por material-UI
        color="primary"
        checked={materiasnoCursadas.includes(materia)}//si el checkbox esta marcado incluye las materias no cursadas
        onChange={() => handleMateriaSeleccionada(materia)}//maneja la logica si se marca o no el checkbox
        disabled={completadoOption === '1' || !botonGuardadoHabilitado}//Si ha completado el semestre todas las opciones e deshabilitan
      />
      <span>{materia}</span>
    </label>
  </div>
))}
      <br />
      
      <Button variant="contained" onClick={guardarMaterias} disabled={!botonGuardadoHabilitado}>
      Guardar Materias
      </Button>
      <br />
    </div>
  );
}

export default Materias;