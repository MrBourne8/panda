Highcharts.chart('container', {

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    yAxis: {
        title: {
            text: 'Количество пропущенных уроков'
        }
    },

    xAxis: {
        categories: ['Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [{
        name: '2019-2020 учебный год',
        data: [43934, 52503, 57177, 69658],
        marker: {symbol: 'circle'}
    }, {
        name: '2020-2021 учебный год',
        data: [24916, 24064, 29742, 29851],
        marker: {symbol: 'circle'},
        color: '#07da35'
    }, {
        name: '2021-2022 учебный год',
        data: [11744, 17722, 16005, 19771],
        marker: {symbol: 'circle'}
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
});