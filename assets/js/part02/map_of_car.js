myChart.showLoading();
$.get("assets/js/part02/china.json", function (chinaJson) {
    myChart.hideLoading();
    echarts.registerMap('China', chinaJson);
    
    var data = [
        { name: '北京市', value: 21893095, num: 712049 },
        { name: '天津市', value: 13866009, num: 374669 },
        { name: '河北省', value: 74610235, num: 437083 },
        { name: '山西省', value: 34915616, num: 265323 },
        { name: '内蒙古自治区', value: 24049155, num: 64120 },
        { name: '辽宁省', value: 42591407, num: 128119 },
        { name: '吉林省', value: 24073453, num: 72990 },
        { name: '黑龙江省', value: 31850088, num: 1816 },
        { name: '上海市', value: 24870895, num: 998341 },
        { name: '江苏省', value: 84748016, num: 979869 },
        { name: '浙江省', value: 64567588, num: 1339482 },
        { name: '安徽省', value: 61027171, num: 410299 },
        { name: '福建省', value: 41540086, num: 362061 },
        { name: '江西省', value: 45188635, num: 235562 },
        { name: '山东省', value: 101527453, num: 906464 },
        { name: '河南省', value: 99365519, num: 836891 },
        { name: '湖北省', value: 57752557, num: 395896 },
        { name: '湖南省', value: 66444864, num: 362991 },
        { name: '广东省', value: 126012510, num: 1998110 },
        { name: '广西壮族自治区', value: 50126804, num: 436217 },
        { name: '海南省', value: 10081232, num: 186127 },
        { name: '重庆市', value: 32054159, num: 276327 },
        { name: '四川省', value: 83674866, num: 544957 },
        { name: '贵州省', value: 38562148, num: 172483 },
        { name: '云南省', value: 47209277, num: 213452 },
        { name: '西藏自治区', value: 3648100, num: 338 },
        { name: '陕西省', value: 39528999, num: 304389 },
        { name: '甘肃省', value: 25019831, num: 57558 },
        { name: '青海省', value: 5923957, num: 10836 },
        { name: '宁夏回族自治区', value: 7202654, num: 24328 },
        { name: '新疆维吾尔自治区', value: 25852345, num: 46217 }
    ];

    data.sort(function (a, b) {
        return a.value - b.value;
    });

    const mapOption = {
        visualMap: {
            left: 'right',
            min: 3000000,
            max: 130000000,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            text: ['高', '低'],
            calculable: true
        },
        series: [
            {
                id: 'population',
                type: 'map',
                roam: true,
                map: 'China',
                animationDurationUpdate: 1000,
                universalTransition: true,
                data: data
            }
        ]
    };

    const barOption = {
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            axisLabel: {
                rotate: 30
            },
            data: data.map(function (item) {
                return item.name;
            })
        },
        animationDurationUpdate: 1000,
        series: {
            type: 'bar',
            id: 'population',
            data: data.map(function (item) {
                return item.value;
            }),
            universalTransition: true
        }
    };

    let currentOption = mapOption;
    myChart.setOption(mapOption);
    setInterval(function () {
        currentOption = currentOption === mapOption ? barOption : mapOption;
        myChart.setOption(currentOption, true);
    }, 2000);
});
