function printAlumnos(listaAlumnos) {
  listaAlumnos.forEach(({ nombre, carrera, nota }) => {
    console.log(`Alumno: ${nombre} - Carrera: ${carrera} - Nota: ${nota}`);
  });
}

/*
1) Crear una función que recorrar el arreglo alumnos e indique cuantos 
están aprobados, cuantos están desaprobandos teniendo en cuenta
que la nota mínima aprobatoria es 13. Saca el promedio de las notas aprobadas, 
promedio de notas desaprobadas y el promedio total de notas.
Indicar el nombre y la carrera en un console.log de los que su indice sea 
multiplo de 2 ejemplo: "Mi nombre es Juan y mi carrera es Biología".
*/

const alumnos = [
  {
    nombre: "Juan",
    carrera: "Biología",
    nota: 16,
  },
  {
    nombre: "Jose",
    carrera: "Enfermero",
    nota: 10,
  },
  {
    nombre: "Luis",
    carrera: "Policía",
    nota: 07,
  },
  {
    nombre: "Maria",
    carrera: "Secretariado",
    nota: 10,
  },
  {
    nombre: "Hugo",
    carrera: "Enfermero",
    nota: 15,
  },
  {
    nombre: "Rosa",
    carrera: "Enfermero",
    nota: 12,
  },
  {
    nombre: "Luisa",
    carrera: "Biología",
    nota: 18,
  },
];
const notaAprobatoria = 13;

console.log("\n\n-----------------------------------------------");
console.log("Reporte Alumnos");
console.log("-----------------------------------------------");

function reporteAlumnos(listaAlumnos) {
  let aprobados = 0;
  let desaprobados = 0;
  let promedioNotasTotal = 0;
  let promedioNotasDesaprobadas = 0;
  let promedioNotasAprobadas = 0;
  let sumaTotal = 0;
  let sumaTotalNotasDesaprobadas = 0;

  listaAlumnos.forEach(({ nombre, carrera, nota }, index) => {
    nota >= notaAprobatoria
      ? (aprobados += 1)
      : (sumaTotalNotasDesaprobadas += nota);
    sumaTotal += nota;
    if (index % 2 == 0)
      console.log(`Mi nombre es ${nombre} y mi carrera es ${carrera}`);
  });
  console.log("-----------------------------------------------");

  desaprobados = listaAlumnos.length - aprobados;
  promedioNotasTotal = sumaTotal / listaAlumnos.length;
  promedioNotasDesaprobadas = sumaTotalNotasDesaprobadas / desaprobados;
  promedioNotasAprobadas =
    (sumaTotal - sumaTotalNotasDesaprobadas) /
    (listaAlumnos.length - desaprobados);
  console.log(`Número de aprobados es ${aprobados}`);
  console.log(`Número de desaprobados es ${desaprobados}`);
  console.log(
    `Promedio de todas las notas es ${promedioNotasTotal.toFixed(2)}`
  );
  console.log(
    `Promedio de notas aprobadas es ${promedioNotasAprobadas.toFixed(2)}`
  );
  console.log(
    `Promedio de notas desaprobadas es ${promedioNotasDesaprobadas.toFixed(2)}`
  );
}

reporteAlumnos(alumnos);

/*
2) Crear una función que filtre en un nuevo arreglo a los alumnos que 
tengan de nota menor a 13.
*/
console.log("\n\n-----------------------------------------------");
console.log(" Lista de Alumnos desaprobados");
console.log("-----------------------------------------------");
function filtrarDesaprobados(listaAlumnos) {
  const alumnosDesaprobados = listaAlumnos.filter(
    ({ nota }) => nota < notaAprobatoria
  );
  return alumnosDesaprobados;
}

printAlumnos(filtrarDesaprobados(alumnos));

/*
3) Crear una función que retorne un nuevo arreglo en donde 
se multiplique por 3 la nota de los alumnos y luego la divida
 entre 2 para devolver la nueva nota de los alumnos.
*/
console.log("\n\n-----------------------------------------------");
console.log(" Lista de Alumnos mutada");
console.log("-----------------------------------------------");

function cambiarInformacion(listaAlumnos) {
  const nuevaLista = listaAlumnos.map(function (alumno) {
    alumno.nota = (alumno.nota * 3) / 2;
    return alumno;
  });
  return nuevaLista;
}
printAlumnos(cambiarInformacion(alumnos));
