    document.addEventListener("DOMContentLoaded", function () {
        const calcularButton = document.querySelector(".button-calcular");
        const loremIpsum = document.getElementById("lorem-ipsum");
        let loremIpsumVisible = false; // Variable para controlar la visibilidad

        calcularButton.addEventListener("click", function () {
            // Mostrar u ocultar el párrafo del Lorem Ipsum según el estado actual
            if (!loremIpsumVisible) {
                loremIpsum.style.display = "block"; // Mostrar el párrafo
                loremIpsumVisible = true;
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const calcularButton = document.querySelector(".button-calcular");
        const loremIpsum = document.getElementById("lorem-ipsum");
        let loremIpsumVisible = false; // Variable para controlar la visibilidad
        const radioSatelital = document.querySelector('input[value="opcion1"]');
        const radioNDCI = document.querySelector('input[value="opcion2"]');
        const mapaImagen = document.getElementById("mapa-imagen");
        const mapa2023Imagen = document.getElementById("mapa-2023-imagen"); // Nueva imagen para el año 2023
    
        calcularButton.addEventListener("click", function () {
            // Mostrar u ocultar el párrafo del Lorem Ipsum según el estado actual
            if (!loremIpsumVisible) {
                loremIpsum.style.display = "block"; // Mostrar el párrafo
                loremIpsumVisible = true;
            }
        });
    
        // Cambiar la imagen principal cuando se seleccione "Satelital" o "NDCI"
        radioSatelital.addEventListener("click", function () {
            mapaImagen.src = "img/2018s.png"; // Cambia la imagen a la imagen de satélite
        });
    
        radioNDCI.addEventListener("click", function () {
            mapaImagen.src = "img/2018.png"; // Cambia la imagen a la imagen de NDCI
        });
    
        // Cambiar la imagen del año 2023 cuando se seleccione "Satelital" o "NDCI"
        radioSatelital.addEventListener("click", function () {
            mapa2023Imagen.src = "img/2022s.png"; // Cambia la imagen del año 2023 a la de satélite
        });
    
        radioNDCI.addEventListener("click", function () {
            mapa2023Imagen.src = "img/2022.png"; // Cambia la imagen del año 2023 a la de NDCI
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        const radioSatelital = document.querySelector('input[value="opcion1"]');
        const radioNDCI = document.querySelector('input[value="opcion2"]');
        const mapaDesc = document.querySelector(".mapa-desc");
    
        // Función para actualizar el texto en la clase "mapa-desc"
        function actualizarTextoMapaDesc() {
            if (radioSatelital.checked) {
                mapaDesc.textContent = "Imagen Satelital tomada por Sentinel";
            } else if (radioNDCI.checked) {
                mapaDesc.textContent = "Medición de NDCI tomada por Sentinel";
            }
        }
    
        // Llamamos a la función para establecer el texto inicial
        actualizarTextoMapaDesc();
    
        // Agregamos event listeners para los radios
        radioSatelital.addEventListener("click", actualizarTextoMapaDesc);
        radioNDCI.addEventListener("click", actualizarTextoMapaDesc);
    });
    