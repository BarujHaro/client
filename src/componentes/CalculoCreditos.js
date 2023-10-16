
function CalculoCreditos({  roadmap, guardarCreditos }) {

  // Define una variable para llevar un registro de los créditos
  let creditos = 0;

  // Define un array de palabras clave y sus valores de crédito asociados
  const palabrasClave = {
    'CPRO': 8, 
    'SPRO':5,
    'CMAT':8,
    'CMM1':8,
    'EIFI':7,
    'SMM1':5,
    'SMM2':5,
    'CMM2':8,
    'TECO':8,
    'SED1':5,
    'CED1':8,
    'CED2':8,
    'SED2':5,
    'ADMR':8,
    'CALG':8,
    'SALG':5,
    'PYES':8,
    'CBDD':8,
    'SBDD':5,
    'ADSE':8,
    'HIPE':8,
    'IDS1':8,
    'SDS1':5,
    'CODP':8,
    'SEDI':8,
    'PPIN':8,
    'IDS2':8,
    'CESO':8,
    'SESO':5,
    'ALDD':8,
    'ADBD':8,
    'MIDD':8,
    'CSBC':8,
    'SSBC':5,
    'CIDD':8,
    'OPT1':8,
    'OPT2':8,
    'ESP1':9,
    // Agrega más palabras clave y valores de crédito según tus necesidades
  };

  
  // Divide el roadmap en palabras
  const palabrasEnRoadmap = roadmap.split(',');
  const palabrasSinEspacios = palabrasEnRoadmap.map((palabra) => palabra.trim());
  // Itera a través de las palabras en el roadmap
  palabrasSinEspacios.forEach((palabra) => {
    // Verifica si la palabra está en el objeto palabrasClave
    
    if (palabrasClave.hasOwnProperty(palabra)) {
      // Si la palabra está en palabrasClave, suma los créditos asociados a la variable creditos
      creditos += palabrasClave[palabra];
    }
  });

  guardarCreditos(creditos);
  
    // No mostramos los créditos en el componente
    return null;
  
}

export default CalculoCreditos;