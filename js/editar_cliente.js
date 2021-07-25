$(document).ready(function () {
    $('#formulario').validate({
        rules: {
            rut: {
                required: true,
                maxlength: 10
            },
            razon_social: {
                required: true,
                minlength: 5
            },
            direccion: {
                required: true,
                maxlength: 20
            },
            comuna: {
                required: true,
                minlength: 5
            },
            cantidad_empleados: {
                required: true,
                range: [1, 1000]
            },
            telefono: {
                required: true,
                minlength: 11
            }
        }
    });
});