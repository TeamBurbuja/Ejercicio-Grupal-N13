$(document).ready(function () {
    $('#tabla-de-datos').tableExport();

    $('.tableexport-caption').prepend('<h4 clas="descargar">Exportar Tabla</h4>');
    $('.xlsx').text('EXCEL ').append('<i class="fas fa-file-excel"></i>');
    $('.csv').text('CSV ').append('<i class="fas fa-file-csv"></i>');
    $('.txt').text('TXT ').append('<i class="fas fa-file-alt"></i>');
});
