//Importo la libreria que voy a utilizar require("express")
const express = require("express") 

//Con express puedo crear una aplicacion que sera lo que represente a mi servidor(se encargara de recibir peticiones de clientes y responderlas)
//Creo una aplicacion
const app = express()

//1. Creo una lista de jugadores que se van a unir al servidor
const jugadores = [] 

class Jugador {
  //id como parametro
  constructor(id) {
    //Hago que se asigne su id a el id que recibe al momento de crear x jugador
    this.id = id;
  }
}


//la arrow function recibe (require -> peticion, res -> objeto que permite manejar las respuestas hacia el usuario)
//Le doy un nombre al primer endpoint para que sea mas especifico
//Los jugadores van a llamar este recurso para unirse al juego
app.get("/unirse", (require,  res) => { 
  //Uso un numero aleatorio(math.random) que sea el ip(identificador unico)
  const id = `${Math.random()}`

  //Se guarda en la variable jugador el objeto creado con su id 
  const jugador = new Jugador(id)

  //Agregamos a la lista de jugadores
  jugadores.push(jugador)
  
  //Antes de responder el id del jugador que se acaba de crear agrego una cabezera(informacion de metadatos sobre configuraciones)
  //Estblezco una cabezera(Header) donde le respondo al navegador que se permite hacer llamadas de este tipo 
  res.setHeader("Access-Control-Allow-Origin", "*")   //Cualquier origen es valido

  //Devolvemos id de ese jugador
  res.send(id)
})


//para poder hacer que escuche las peticiones de los clientes y se mantenga escuchando le indico el puerto
//.listen(puerto, callback) propiedad que permite iniciar el servidor
app.listen(8080, () => {
  console.log("Servidor funcionando")
})














/*
Nuestro Código está hecho de la siguiente manera:
 1. Importamos ExpressJS para usarlo en nuestro Proyecto
 2. Creamos una Aplicación con ExpressJS
 3. Le decimos a Express que cuando la URL raíz reciba una petición, responda “Hola”
 4. Le decimos que escuche continuamente en el puerto 8080 las peticiones de los clientes para que todo el tiempo pueda responderles

---> app.get es una funcion, indica que cada vez que un cliente solicite un recurso vamos a realizar algo:
    {como vamos a procesar esa solicitud, como vamos a recibir los datos de esa peticion y como responderemos a esa peticion}

---> Cada vez que se agrege un jugador haremos que la pagina en el frontend llame a un servicio en el backend para que se registre ese jugador y le devuelva su id

  1. fetch(url) hace un GET (una petición para obtener algo) a la URL que se le especifique
  2. Esta función nos retornará algo (lo que sea que se haya definido en el código del servidor).
  3. No podemos trabajar con lo que nos retorne directamente, ya que el servidor se tomará un tiempo en responder.
  4. Para eso utilizaremos el .then(func), que ejecutará el código de la función que le demos (en este caso, func), pasándole la respuesta del servidor como parámetro.
  5. El .then suele ir por debajo de la función que hayamos llamado (fetch en este caso) e indentado, por pura estética nada más. Nótese que se puede hacer fetch(url).then(func) sin dejar ningún espacio.
*/