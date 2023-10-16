import React, { useState} from 'react';
import NombreCorreo from './NombreCorreo';
import Materias from './materias-cursadas';
import Roadmap from './Roadmap';
import CalculoCreditos from './CalculoCreditos'; 
import '../hojas-de-estilo/registro.css';
import Button from '@mui/material/Button';

function Registro() {
  //Se definen las variables
    const [datos, setDatos] = useState({ nombre: '', correo: '', contrasena: ''});
    const [roadmap, setroadmap] = useState('');
    const [creditos, setCreditos] = useState(0);
    const [roadmapF, setRoadmapF] = useState('');
  //se definen las funciones para guardar los datos en las variables
 
    const guardarDatos = (nombre, correo, contrasena) => {
      setDatos({ nombre, correo, contrasena});
    };
   
    
    const guardarCreditos = (creditos) => {
      setCreditos(creditos);
    };

    const guardarRoadmapF = (roadmapF) => {
      setRoadmapF(roadmapF);
    };
  
    const anadirAlRoadmap = (materiasCursadas) => {
      setroadmap((prevRoadmap) => {
        const nuevaEntrada = materiasCursadas.join(',');
        return prevRoadmap ? `${prevRoadmap}, ${nuevaEntrada}` : nuevaEntrada;
      });
    };

    const handleGuardarClick = async () => {
      try {
        const response = await fetch('/guardar-datos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: datos.nombre,
            correo: datos.correo,
            contrasena: datos.contrasena,
            roadmap: roadmapF,
            creditos: creditos,
          }),
        });
  
        if (response.ok) {
          // Los datos se guardaron con éxito
          // Puedes mostrar un mensaje al usuario o redirigirlo a otra página si es necesario
        } else {
          // Maneja errores en caso de que la inserción falle
        }
      } catch (error) {
        console.error(error);
      }
    };
   //lo que ha de mostrar
  return (
    <div className='formulario'>
      <div className='datos-alumno'>
      <h2 className='titulo'>Registro de Alumnos</h2>
      
      <NombreCorreo guardarDatos={guardarDatos} />
      </div>
      
      <div className='cuestionario-materia-cursada'>
      <h2 className='titulo'>Selección de Materias</h2>
      <Materias
          semestre='1'
          materias={["Programación", "Seminario de solución de problemas de programación", "Matemática discreta", "Métodos matemáticos I", "Especializante selectiva introducción a la física", "Seminario de solución de problemas de métodos matemáticos I"]} // Lista de materias 
          anadirAlRoadmap={anadirAlRoadmap}
        />
        </div>
        <div className='cuestionario-materia-cursada'>
        <Materias
          semestre='2'
          materias={["Estructuras de datos I", "Seminario de solucion de problemas de estructuras de datos I", "Teoría de la computación", "Métodos matemáticos II", "Seminario de solución de problemas de métodos matemáticos II"]}  
          anadirAlRoadmap={anadirAlRoadmap}
        />
</div>
<div className='cuestionario-materia-cursada'>
        <Materias
          semestre='3'
          materias={["Estructuras de datos II", "Seminario de solución de problemas de estructuras de datos II", "Administración de redes", "Algoritmia", "Seminario de solución de problemas de algoritmia", "Estadística y procesos estocásticos"]} 
          anadirAlRoadmap={anadirAlRoadmap}
        />
</div>
<div className='cuestionario-materia-cursada'>
        <Materias
          semestre='4'
          materias={["Bases de datos", "Seminario de solución de problemas de bases de datos", "Administración de servidores", "Hipermedia", "Ingeniería de software I"]} 
          anadirAlRoadmap={anadirAlRoadmap}
        />
</div>
<div className='cuestionario-materia-cursada'>
        <Materias
          semestre='5'
          materias={["Control de proyectos", "Seguridad de la información", "Programación para internet", "Ingenieria de software II", "Seminario de solución de problemas de Ingenieria De Software I"]} 
          anadirAlRoadmap={anadirAlRoadmap}
        />
        </div>
<div className='cuestionario-materia-cursada'>
        <Materias
          semestre='6'
          materias={["Especializante selectiva", "Seminario de solución de problemas de uso, adaptación y explotación de sistemas operativas", "Uso, adaptación y explotación de sistemas operativas"]} 
          anadirAlRoadmap={anadirAlRoadmap}
        />
        </div>
        <div className='cuestionario-materia-cursada'>
        <Materias
          semestre='7'
          materias={["Almacenes de datos", "Administración de base de datos", "Minería de datos", "Optativa abierta I"]} 
          anadirAlRoadmap={anadirAlRoadmap}
        />
</div>
<div className='cuestionario-materia-cursada'>
        <Materias
          semestre='8'
          materias={["Sistemas basados en conocimiento", "Seminario de solución de problemas de sistemas basados en conocimiento", "Clasificación inteligente de datos", "Optativa abierta II"]} 
          anadirAlRoadmap={anadirAlRoadmap}
        />
        </div>
      
      <div className='BtnF'>
      
        <CalculoCreditos roadmap={roadmap} guardarCreditos={guardarCreditos} />
       
        <p><Roadmap roadmap={roadmap} guardarRoadmapF = {guardarRoadmapF}/> </p>
       
        <Button variant="contained" onClick={handleGuardarClick} >
      Guardar Datos
      </Button>
      </div>


    </div>
  );
}

export default Registro;