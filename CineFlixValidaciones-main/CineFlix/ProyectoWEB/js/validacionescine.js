$(document).ready(function() {
    $("#Formulario").validate({
        rules: {
            nombrepelicula: {
                required: true,
                minlength: 4,
                maxlength: 10,
                mayus:true
            },
            director:{
                required: true,
                minlength:6,
                mayus:true

            },
            reparto:{
                required: true,
                mayus: true
            },
            des:{
                required: true,
                minlength:6,
                mayus:true
            },
            idpelicula:{
                required:true,
                minlength:1,
                maxlength:3
            }
        },
        messages:{
            nombrepelicula:{
                required:"el nombre de pelicula es requerido",
                minlength: "es necesario 4 caracteres"
            },
            director:{
                required:"el director es requerido",
                minlengtht:"es necesario 6 caracteres como minimo"
            },
            des:{
                required:"se requiere descripcion",
                minlength:"es necesario 10 caracteres"
            },
            idpelicula:{
                required:"ingrese id pelicula",
                minlength:"minimo 1 caracter"
            },
        }

    });
});