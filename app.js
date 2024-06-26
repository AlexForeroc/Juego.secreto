//variable que llama la informacion de la funcion creada con el nombre generarNumeroSecreto();
let numeroSecreto = 0;
let intentos = 0;
//se crea la variable donde se guardaraon todos los numeros que ya fueron encontrados
let listaNumerosSorteados = [];
let numeroMaximo = 12; 
let numeroMaximoDeJuegos = 5;

/*funcion para asignar el contenido dentro de los textos como hi p entre otras
adicional con que solo se cree una vez se puede hacer las asignaciones correspondientes
a la varible al final del codigo asignarTextoElemento('h1','Juego del numero secr
eto')*/
function asignarTextoElemento(elemento, texto)
   {
   // se crea la variable y se enlaza al documento y se indica q (h) afectar
   let elementoHTML = document.querySelector(elemento);
   //se crea el texto que estara contenido en (h)
   elementoHTML.innerHTML = texto;
   return;
   }
            //se crea una funcion para que el boton onclick="intentoDeUsuario(); boton crear
            function verificarIntento()
            {
            
                if(numeroMaximoDeJuegos === intentos)
                    {
                        asignarTextoElemento('p', 'Superaste la cantidad de intentos');
                        document.getElementById('reiniciar').removeAttribute('disabled');
                    }
                    else
                    {
                        //se crea la variable donde se guardara el numero y se define como numero entero asigando al documento
                        // y al nombre del boton asignado en HTML parseInt(document.getElementById('valorUsuario').value);
                        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
                        //pedimos q nos muestre por consola que tipo de dato es la variable numeroDeUsuario
                        //console.log(typeof(numeroDeUsuario));
                        //Pedimos que nos muestre por consola dato que arroja la varible nunmero secreto
                        console.log(numeroSecreto);
                        //pedimos q nos muestre por consola que tipo de dato es la variable numeroSecreto
                        //console.log(typeof(numeroSecreto));
                        //Pedimos que nos muestre por consola dato que arroja la varible numeroDeUsuario
                        //console.log(numeroDeUsuario);
                        // que muestre la consola la cantida de intentos
                        console.log(intentos);
                        // pedimos que con === muestre que sea el mismo numero y el mismo numero de dato
                        //console.log(numeroDeUsuario === numeroSecreto);
                        if(numeroDeUsuario === numeroSecreto)
                            {
                            asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos == 1) ? 'intento': 'intentos' }`);
                            // con esta linea solo habilita el boton nuevo juego si se acierta
                            document.getElementById('reiniciar').removeAttribute('disabled');
                            }
                            else
                            // el usuario no acepto
                            {
                                document.getElementById('reiniciar').removeAttribute('disabled');
                                if (numeroDeUsuario>numeroSecreto)
                                {
                                    asignarTextoElemento('p', 'El numero secreto es menor');
                                    
                                } 
                                else
                                {
                                    asignarTextoElemento('p', 'El numero secreto es mayor');
                                   
                                }
                                intentos++;
                                limpiarCaja();
                                
                            }
                    }
            return;
   }


   function condicionesIniciales()
   {
   //se escribe la variable asignada desde la funcion para reducir texto de nombre asignarTextoElemento
   asignarTextoElemento('h1','Juego del numero secreto');
   asignarTextoElemento('p',`indica un numero de 1 al ${numeroMaximo}`);   
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
   }




   function limpiarCaja()
   {
      //Se mejora lalinea de let valorCaja
      document.querySelector('#valorUsuario').value ='';
      //let valorCaja = document.querySelector('#valorUsuario');
      //valorCaja.value = '';
   }


//se crea la funcion para generar un numero aleatorio, se debe crar la variable numero secreo en la linea 1
function generarNumeroSecreto()
   {
    // el let numeroGenerado es para ajustar el codigo que si sale un numero secreto ya jugado no se repita
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //console que muestra el numero generado
    console.log(numeroGenerado);
    //console qu emuestra la lista de numeros secreto generados
    console.log(listaNumerosSorteados);
    //si ya salieron todos los numeros? 
        if(listaNumerosSorteados.length == numeroMaximo)
            {
            asignarTextoElemento('p','Ya se sorteoaron todos los numeros posibles');
            }
            else
            {
            //condiional para los numeros secreto si ya salieron 
            if(listaNumerosSorteados.includes(numeroGenerado))
                {
                    //si el numero sereto no ha salido q juege pero si ya salio pase al else
                    return generarNumeroSecreto();
                }
                else
                {
                    //genere otro numero y si no eta en la lista que lo saque al juego
                    listaNumerosSorteados.push(numeroGenerado);
                    return numeroGenerado; 

                }
            }
    }


    function reiniciarJuego()
    {
        //limpiar caja
        limpiarCaja();
        //Indicar mensaje de intervalo de numeros
        condicionesIniciales();
        // desabilita el boton nuevo juego
        document.querySelector('#reiniciar').setAttribute('disabled','true');
   }


   condicionesIniciales();