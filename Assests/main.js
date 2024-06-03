const url = "https://rickandmortyapi.com/api/character"; // Guardamos la API en una constante para poder usarla más fácilmente.

const procesarFetch = async (url) => { // Realizamos un "fetch" para pedir informacion de la API que se le pasa por parámetros. Le decimos que será una solicitud asincrona para esperar a los resultados y evitar errores.

    try {
        const respuesta = await fetch(url); // Aquí evaluamos si la solicitud fue exitosa,
        const info = await respuesta.json(); // y si lo fue entonces le pedimos que nos devuelva la 
        renderizarPersonajes(info.results); // información que está en "results" y que realice la función que realizarmeos más abajo.

    } catch (error) {                       // En caso de que surga algún tipo de error, entonces el programa 
        console.log("Hubo un error");       // nos arrojará un mensaje por consola que diga "Hubo un error".
    }
};

const renderizarPersonajes = (characters) => { // Procedemos a crear la función que nos devolverá los datos que necesitamos que se impriman en pantalla.

    const container = document.getElementById("characters-container"); // Seleccionamos el elemento HTML que nos servirá como contenedor del contenedor que posee los datos.

    characters.forEach(character => { // Recorremos el resultado obtenido al hacer "fetch" para posteriormente tomar los datos que necesitamos.

        const characterElement = document.createElement("div"); // Creamos un "div" que va a contener cada uno de los datos.
        
        characterElement.innerHTML = ` 
            <img src="${character.image}">
            <h3>${character.name}<h3/>
            <p>${character.species}<p/>
            <p>${character.status}<p/>
        ` // Una vez creado el contenedor, procedemos a sobreescribir sobre él con los datos que recolectamos (imagen, nombre, especie y estado).

        container.appendChild(characterElement) // Realizamos "appendChild" para añadir todos los datos recolectados por la función al documento.
    });
};

// Llamamos a la función para procesar el fetch y renderizar las imágenes.
procesarFetch(url);
