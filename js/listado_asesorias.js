$(document).ready(function () {
    $('#btn-1').click(function () {
        $('.title_table').css('background','red');
        $('#tabla-asesorias').css('border','4px solid red');
    })
    $('#btn-2').click(function () {
        $('.title_table').css('background','purple');
        $('#tabla-asesorias').css('border','4px solid purple');
    })
    $('#btn-3').click(function () {
        $('.title_table').css('background','goldenrod');
        $('#tabla-asesorias').css('border','4px solid goldenrod');
    })
});