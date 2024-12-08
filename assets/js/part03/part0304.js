
var myChart = echarts.init(document.getElementById('part0304'));
var option;

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['一线城市', '新一线城市', '二线城市', '三线城市', '四线城市', '五线城市']
    },
    series: [
        {
            name: '10万及以下',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                formatter: (params) => `${params.value}%` // 添加百分号
            },
            emphasis: {
                focus: 'series'
            },
            data: [3.4,4.7, 6.4, 6.9, 6.2, 5.3]
        },
        {
            name: '10-20万（含）',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                formatter: (params) => `${params.value}%` // 添加百分号
            },
            emphasis: {
                focus: 'series'
            },
            data: [20.1, 25.9, 29.0, 32.5, 35.5, 42.3]
        },
        {
            name: '20-30万（含）',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                formatter: (params) => `${params.value}%` // 添加百分号
            },
            emphasis: {
                focus: 'series'
            },
            data: [31.1, 33.4, 34.8, 32.1, 32.3, 31.3]
        },
        {
            name: '30-50万（含）',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                formatter: (params) => `${params.value}%` // 添加百分号
            },
            emphasis: {
                focus: 'series'
            },
            data: [26.7, 25.1, 19.3, 18.4, 18.2, 15.4]
        },
        {
            name: '20-100万（含）',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                formatter: (params) => `${params.value}%` // 添加百分号
            },
            emphasis: {
                focus: 'series'
            },
            data: [16.1, 8.3, 8.8, 8.9, 6.2, 4.8]
        },
        {
            name: '100万以上',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                formatter: (params) => `${params.value}%` // 添加百分号
            },
            emphasis: {
                focus: 'series'
            },
            data: [2.6, 2.6, 1.7, 1.2, 1.6, 0.9]
        }
    ]
};
option && myChart.setOption(option);
