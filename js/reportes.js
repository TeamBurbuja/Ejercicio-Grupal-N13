document.addEventListener('DOMContentLoaded', function () {
    let ctx1 = document.getElementById('barras').getContext('2d');
    let myChart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: [
                'Santiago',
                'La Florida',
                'Ñuñoa',
                'Estación Central',
                'Providencia',
                'Macul',
                'San Bernardo',
                'Las Condes',
                'Quilicura',
                'El Bosque'
            ],
            datasets: [{
                label: 'Clientes',
                data: [5, 22, 15, 9, 18, 14, 6, 15, 4, 7],
                backgroundColor: 'rgb(241, 92, 141)',
            }]
        }

    });
    let ctx2 = document.getElementById('lineas').getContext('2d');
    let myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo', 
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre'
            ],
            datasets: [
                {
                    label: 'Accidentes',
                    data: [5, 6, 15, 9, 18, 4, 3, 10, 7, 2, 11, 5],
                    backgroundColor: 'rgb(37, 226, 73)',
                    borderColor: 'rgb(117, 92, 241)'
                },
                {
                    label: 'Visitas',
                    data: [2, 3, 7, 4, 6, 10, 3, 5, 9, 17, 4, 9],
                    backgroundColor: 'rgb(41, 107, 240)',
                    borderColor: 'rgb(238, 214, 26)'
                }
            ]
        }

    });
    let ctx3 = document.getElementById('torta').getContext('2d');
    let myChart3 = new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: [
                'Cumple',
                'Con Observaciones',
                'No Cumple'
            ],
            datasets: [
                {
                    label: 'Chequeos',
                    data: [20, 5, 2],
                    backgroundColor: [
                        'rgb(26, 238, 108)',
                        'rgb(255, 169, 10)',
                        'rgb(238, 57, 26)'
                    ]
                }
            ]
        }

    });
});
