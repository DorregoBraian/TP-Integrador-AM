$(document).ready(function () {
    $(cargar_datos).click(function(){
        $.ajax ({
            url: "../JS/JSONPeliculas.json",
            type: "GET",
            dataType: "json",
            success: function(datos){
                console.log(datos);
                $.each(datos, function(index, objPeli){
                    $(".titulo").text(objPeli.Titulo);
                    $(".duracion").text(objPeli.Duracion);
                    $(".fecha").text(objPeli.Fecha);
                    $(".genero").text(objPeli.Genero);
                    $(".actores").text(objPeli.Actores);
                    $(".idiom").text(objPeli.Idioma);
                    
                });
            },
            error:function (xhr,status,error ) {
                console.log(xhr);
                console.log( status );
                console.log(error);
            }
        })
    })
});