$(document).ready(function() {
  $("#retrieve-resources").click(function() {
    let displayResources = $("#display-resources"); 
    // sacamos el elemento HTML que vamos a actualizar a una variable
    
    displayResources.text("Loading data from JSON source...");
    // en el momento que pusamos el botón mostramos un mensaje de LOADING

    $.ajax({ // llamada AJAX
      type: "GET", // el tipo de método es GET (ya veremos más adelante la diferencia con otros tipos)

      dataType: "json", // indicamos el tipo de dato que vamos a recibir, en este caso json
      
      //url: "https://api.myjson.com/bins/fjxua", // la url que nos va a devolver los datos
      
      url: "./resources.json", // si los tenemos en un archivo también podemos utilizarlo, OJO!! LEED EL COMENTARIO DE ABAJO
      // para obtener los resultados desde el archivo resources.json hay que utilizar firefox, 
      //ya que chrome tiene una medida de seguridad
      // ----   Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.  ----
      // Se podría desactivar con alguna extensión de chorme, pero lo que se aconseja es
      // desplegar la app en algún servidor, de hecho, si la desplegáis en github pages debe funcionar sin problema
      //  https://antoniocanteroestech.github.io/EjemploAjaxJquery/ YO LO DESPLEGUÉ CON GITHUB PAGES, PODÉIS PROBARLO

      success: function(result) { // esta función es la que se va a ejecutar si la llamada va bien 
        console.log(result); //para ver en consola que ha devuelto

        // vamos a generar dinámicamente el código html con el que vamos a actualizar el elemento displayResources
        var output =
          "<table><thead><tr><th>Name</th><th>Provider</th><th>URL</th></thead><tbody>"; //cabecera de la tabla 
        

        // result, cómo se puede ver en el console.log devuelve un array de elementos, por tanto lo vamos a recorrer
        // para montar una fila de la tabla por cada elemento
        // tenemos que concatenar las etiquetas y demás código html con el valor que los distintos atributos de los items del 
        // array devuelto, para asignarle los valores de cada elemento del array a cada fila de la tabla  
        for (var i in result) {
          output +=
            "<tr><td>" +
            result[i].name +
            "</td><td>" +
            result[i].provider +
            "</td><td>" +
            result[i].url +
            "</td></tr>";
        }
        output += "</tbody></table>";//cerramos el tbody y el elemento table

        displayResources.html(output); //introducimos el código generado dinámicamente en el elemento displayResources
                                       // por tanto sustituirá al código que había antes en ese elemento 
        $("table").addClass("table"); // le añadimos dinámicamente la clase table, para darle estilos de bootstrap
      }
    });
  });
});