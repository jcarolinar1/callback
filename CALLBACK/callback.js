//1. Mostrar mensaje en consola mediante un callback 

function mostrarMensaje(callback) {
    // Llamamos al callback con el mensaje
    callback('Este es un mensaje en la consola');
  }
  
  //2. Determinar el tipo de dato y mostrar su contenido
  
  function analizarDato(variable, callback) {
    // Determinamos el tipo de dato
    const tipoDato = typeof variable;
    // Llamamos al callback con el tipo de dato y el contenido
    callback(tipoDato, variable);
  }
  

  
  //3. Realizar operaciones matemáticas mediante un callback 
  
  function operarNumeros(num1, num2, callback) {
    // Llamamos al callback con el resultado de la operación
    callback(num1, num2);
  }
  
  function resta(a, b) {
    console.log(`Resta: ${a - b}`);
  }
  
  function multiplicacion(a, b) {
    console.log(`Multiplicación: ${a * b}`);
  }
  
  function division(a, b) {
    console.log(`División: ${a / b}`);
  }
  
  operarNumeros(10, 5, suma); // Resultado: Suma: 15
  operarNumeros(10, 5, resta); // Resultado: Resta: 5
  operarNumeros(10, 5, multiplicacion); // Resultado: Multiplicación: 50
  operarNumeros(10, 5, division); // Resultado: División: 2
  
  //4. Convertir una cadena a mayúsculas o minúsculas mediante un callback 
  
  function transformarCadena(cadena, callback) {
    // Llamamos al callback con la cadena transformada
    callback(cadena);
  }
  
  //5. Filtrar valores mayores a dos horas en minutos mediante un callback 
  function filtrarTiempo(arr, callback) {
    // Filtramos valores mayores a 120 minutos (2 horas)
    const resultado = arr.filter(valor => valor > 120);
    // Llamamos al callback con el resultado
    callback(resultado);
  }
