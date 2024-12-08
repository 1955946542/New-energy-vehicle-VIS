function initializeMap3(containerId, topoJsonUrl) {
    // 使用async/await来处理fetch请求和异步操作  
    (async function () {
        try {
            const response = await fetch(topoJsonUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch topo JSON');
            }
            const topology = await response.json();

            // Create the chart
            Highcharts.mapChart('part020301', {
                chart: {
                    map: topology,
                    margin: 1,
                  
                },

                title: {
                    text: '国内圈养大熊猫数量统计',
                    floating: true,
                    style: {
                        fontSize: '16px' // 字体大小  
                    }
                },

                //subtitle: {
                //  text: 'Map markers in Highcharts',
                //  floating: true,
                //y: 36,
                //style: {
                //     textOutline: '5px contrast'
                // }
                // },

                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        alignTo: 'spacingBox',
                        verticalAlign: 'bottom'
                    }
                },

                mapView: {
                    padding: [0, 0, 85, 0]
                },

                legend: {
                    floating: true,
                    backgroundColor: '#ffffffcc'
                },

                plotOptions: {
                    mappoint: {
                        keys: ['lat', 'lon', 'name', 'num'],
                        marker: {
                            lineWidth: 1,
                            lineColor: '#000',
                            symbol: 'mapmarker',
                            radius: 8
                        },
                        dataLabels: {
                            enabled: false
                        }
                    }
                },

                tooltip: {
                    headerFormat: null,
                    pointFormat: '{point.name}<br>{point.num}',
                    style: {
                        fontSize: '13px' // 字体大小  
                    }

                },

                series: [{
                    allAreas: true,
                    name: 'Countries',
                    states: {
                        inactive: {
                            opacity: 1
                        }
                    },
                    dataLabels: {
                        enabled: false,

                    },
                    enableMouseTracking: true,
                    showInLegend: false,
                    borderColor: 'rgba(0, 0, 0, 0.25)'
                }, {
                    showInLegend: false,
                    name: '动物园',
                    color: "#96c02f",
                    data: [
                        [
                            30.00,
                            103.00,
                            '中国保护大熊猫研究中心 ',
                            193
                        ], [
                            30.74,
                            104.14,
                            '成都大熊猫繁育研究基地 ',
                            128
                        ], [
                            34.04,
                            108.31,
                            '陕西省珍稀野生动物抢救饲养研究中心 ',
                            21
                        ], [
                            39.95,
                            116.34,
                            '北京动物园 ',
                            12
                        ], [
                            29.51,
                            106.50,
                            '重庆动物园 ',
                            8
                        ], [
                            36.05,
                            103.83,
                            '兰州动物园 ',
                            2
                        ], [
                            26.09,
                            119.30,
                            '海峡大熊猫交流研究中心(福州) ',
                            1
                        ], [
                            31.19,
                            121.36,
                            '上海动物园 ',
                            1
                        ], [
                            22.23,
                            113.17,
                            '香港海洋公园  ',
                            4
                        ], [
                            22.12,
                            113.56,
                            '澳门环石排湾郊野公园  ',
                            2
                        ], [
                            24.99,
                            121.58,
                            '台北市立动物园  ',
                            3
                        ],



                    ],
                    type: 'mappoint'
                },]
            });
        } catch (error) {
            console.error('Error initializing map:', error);
        }
    })();
}