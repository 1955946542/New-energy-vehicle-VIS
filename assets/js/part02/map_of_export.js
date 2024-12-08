function initializeMap(containerId, topoJsonUrl) {
    // 使用async/await来处理fetch请求和异步操作
    (async function () {
        try {
            const response = await fetch(topoJsonUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch topo JSON');
            }
            const topology = await response.json();

            // 创建 Highcharts 地图
            const chart = Highcharts.mapChart(containerId, {
                chart: {
                    credits: {
                        enabled: false // 不显示LOGO
                    },
                    map: topology
                },
                style: {
                    fontFamily: 'Arial, sans-serif', // 字体家族
                    fontSize: '13px' // 字体大小
                },
                title: {
                    text: '中国汽车出口情况版图',
                    align: 'center',
                    style: {
                        fontSize: '16px' // 字体大小
                    }
                },

                mapNavigation: {
                    enabled: true
                },

                mapView: {
                    fitToGeometry: {
                        type: 'MultiPoint',
                        coordinates: [
                            [-164, 54],
                            [-35, 84],
                            [179, -38],
                            [-68, -55]
                        ]
                    }
                },

                accessibility: {
                    point: {
                        valueDescriptionFormat: '{xDescription}.'
                    }
                },

                plotOptions: {
                    flowmap: {
                        tooltip: {
                            headerFormat: '{point.options.name}<br>{point.options.year}<br>',
                            pointFormat: '{point.options.name}<br>{point.options.year}<br>{point.options.from} \u2192 {point.options.to}',
                            style: {
                                fontSize: '18px'
                            }
                        }
                    },
                    mappoint: {
                        tooltip: {
                            headerFormat: '{point.id}<br>',
                            pointFormat: 'Lat: {point.lat} Lon: {point.lon}',
                            style: {
                                fontSize: '13px'
                            }
                        },
                        showInLegend: false
                    }
                },

                series: [{
                    name: 'Basemap',
                    showInLegend: false,
                    states: {
                        inactive: {
                            enabled: false
                        }
                    }
                }, {
                    type: 'mappoint',
                    name: 'Countries',
                    color: '#add8e6',
                    marker: {
                        radius: 2
                    },
                    dataLabels: {
                        format: '{point.id}',
                        style: {
                            fontSize: '8px',
                            fontWeight: 'normal'
                        }
                    },
                    data: [
                        { id: '中国', lat: 39.95, lon: 116.34, color: '#dc143c' },
                        { id: '英国', lat: 51.53, lon: -0.15, color: '#000000' },
                        { id: '俄罗斯', lat: 55.76, lon: 37.58, color: '#000000' },
                        { id: '日本', lat: 35.71, lon: 139.76, color: '#000000' },
                        { id: '美国', lat: 38.91, lon: -77.07, color: '#000000' },
                        { id: '德国', lat: 52.52, lon: 13.35, color: '#000000' },
                        { id: '泰国', lat: 18.81, lon: 98.95, color: '#000000' },
                        { id: '西班牙', lat: 40.42, lon: -3.69, color: '#000000' },
                        { id: '澳大利亚', lat: -34.92, lon: 138.60, color: '#000000' },
                        { id: '比利时', lat: 50.35, lon: 4.15, color: '#000000' },
                        { id: '马来西亚', lat: 3.13, lon: 101.71, color: '#000000' },
                        { id: '印度', lat: 28.62, lon: 77.22, color: '#000000' },
                        { id: '墨西哥', lat: 19.43, lon: -99.13, color: '#000000' },
                        { id: '沙特阿拉伯', lat: 24.65, lon: 46.70, color: '#000000' },
                        { id: '菲律宾', lat: 14.60, lon: 120.90, color: '#000000' },
                        { id: '阿拉伯联合酋长国', lat: 24.47, lon: 54.37, color: '#000000' },
                        { id: '巴西', lat: -15.78, lon: -47.93, color: '#000000' },
                        { id: '智利', lat: -33.45, lon: -70.67, color: '#000000' },
                        { id: '孟加拉国', lat: 23.72, lon: 90.4, color: '#000000' },
                        { id: '伊朗', lat: 35.69, lon: 51.43, color: '#000000' },
                    ]
                }, {
                    type: 'flowmap',
                    name: '0-10万辆',
                    fillOpacity: 1,
                    width: 0.01,
                    color: '#000000',
                    data: [
                        { from: '中国', to: '日本', name: '2.25万辆', year: '2023', color: '#20a162' },
                        { from: '中国', to: '孟加拉国', name: '5.21万辆', year: '2023', color: '#20a162' },
                        { from: '中国', to: '德国', name: '5.96万辆', year: '2023', color: '#20a162' },
                        { from: '中国', to: '印度', name: '6.30万辆', year: '2023', color: '#20a162' },
                        { from: '中国', to: '美国', name: '7.48万辆', year: '2023', color: '#20a162' },
                        { from: '中国', to: '马来西亚', name: '8.33万辆', year: '2023', color: '#20a162' },
                        { from: '中国', to: '智利', name: '9.54万辆', year: '2023', color: '#20a162' },

                        { from: '中国', to: '日本', name: '1.17万辆', year: '2021', color: '#20a162' },
                        { from: '中国', to: '孟加拉国', name: '8.65万辆', year: '2021', color: '#20a162' },
                        { from: '中国', to: '德国', name: '3.82万辆', year: '2021', color: '#20a162' },
                        { from: '中国', to: '印度', name: '5.54万辆', year: '2021', color: '#20a162' },
                        { from: '中国', to: '美国', name: '5.56万辆', year: '2021', color: '#20a162' },
                        { from: '中国', to: '马来西亚', name: '4.48万辆', year: '2021', color: '#20a162' },
                        { from: '中国', to: '巴西', name: '4.76万辆', year: '2021', color: '#20a162' },
                        { from: '中国', to: '西班牙', name: '0.31万辆', year: '2021', color: '#20a162' },
                        { from: '中国', to: '阿拉伯联合酋长国', name: '2.49万辆', year: '2021', color: '#20a162' },
                        { from: '中国', to: '泰国', name: '4.89万辆', year: '2021', color: '#20a162' },
                        { from: '中国', to: '菲律宾', name: '6.23万辆', year: '2021', color: '#20a162' },
                        { from: '中国', to: '英国', name: '8.12万辆', year: '2021', color: '#20a162' },
                        { from: '中国', to: '澳大利亚', name: '9.76万辆', year: '2021', color: '#20a162' },
                        { from: '中国', to: '墨西哥', name: '9.42万辆', year: '2021', color: '#20a162' },

                        { from: '中国', to: '日本', name: '0.10万辆', year: '2019', color: '#20a162' },
                        { from: '中国', to: '德国', name: '0.60万辆', year: '2019', color: '#20a162' },
                        { from: '中国', to: '印度', name: '8.32万辆', year: '2019', color: '#20a162' },
                        { from: '中国', to: '美国', name: '4.01万辆', year: '2019', color: '#20a162' },
                        { from: '中国', to: '马来西亚', name: '4.21万辆', year: '2019', color: '#20a162' },
                        { from: '中国', to: '智利', name: '7.68万辆', year: '2019', color: '#20a162' },
                        { from: '中国', to: '巴西', name: '2.80万辆', year: '2019', color: '#20a162' },
                        { from: '中国', to: '西班牙', name: '0.18万辆', year: '2019', color: '#20a162' },
                        { from: '中国', to: '阿拉伯联合酋长国', name: '0.89万辆', year: '2019', color: '#20a162' },
                        { from: '中国', to: '泰国', name: '0.59万辆', year: '2019', color: '#20a162' },
                        { from: '中国', to: '菲律宾', name: '4.54万辆', year: '2019', color: '#20a162' },
                        { from: '中国', to: '沙特阿拉伯', name: '5.80万辆', year: '2019', color: '#20a162' },
                        { from: '中国', to: '英国', name: '1.89万辆', year: '2019', color: '#20a162' },
                        { from: '中国', to: '澳大利亚', name: '2.64万辆', year: '2019', color: '#20a162' },
                        { from: '中国', to: '比利时', name: '0.14万辆', year: '2019', color: '#20a162' },
                        { from: '中国', to: '俄罗斯', name: '3.95万辆', year: '2019', color: '#20a162' },


                        { from: '中国', to: '印度', name: '4.78万辆', year: '2017', color: '#20a162' },
                        { from: '中国', to: '马来西亚', name: '0.67万辆', year: '2017', color: '#20a162' },
                        { from: '中国', to: '智利', name: '8.62万辆', year: '2017', color: '#20a162' },
                        { from: '中国', to: '巴西', name: '1.52万辆', year: '2017', color: '#20a162' },
                        { from: '中国', to: '西班牙', name: '0.17万辆', year: '2017', color: '#20a162' },
                        { from: '中国', to: '阿拉伯联合酋长国', name: '0.54万辆', year: '2017', color: '#20a162' },
                        { from: '中国', to: '泰国', name: '0.78万辆', year: '2017', color: '#20a162' },
                        { from: '中国', to: '菲律宾', name: '2.64万辆', year: '2017', color: '#20a162' },
                        { from: '中国', to: '澳大利亚', name: '0.93万辆', year: '2017', color: '#20a162' },
                        { from: '中国', to: '沙特阿拉伯', name: '1.05万辆', year: '2017', color: '#20a162' },
                        { from: '中国', to: '比利时', name: '1.89万辆', year: '2017', color: '#20a162' },
                        { from: '中国', to: '俄罗斯', name: '4.31万辆', year: '2017', color: '#20a162' },
                        { from: '中国', to: '英国', name: '6.81万辆', year: '2017', color: '#20a162' },
                        { from: '中国', to: '墨西哥', name: '8.27万辆', year: '2017', color: '#20a162' }
                    ]
                }, {
                    type: 'flowmap',
                    name: '10-20万辆',
                    fillOpacity: 1,
                    width: 0.01,
                    color: '#000000',
                    data: [
                        { from: '中国', to: '巴西', name: '11.48万辆', year: '2023', color: '#1661ab' },
                        { from: '中国', to: '西班牙', name: '13.87万辆', year: '2023', color: '#1661ab' },
                        { from: '中国', to: '阿拉伯联合酋长国', name: '16.00万辆', year: '2023', color: '#1661ab' },
                        { from: '中国', to: '泰国', name: '17.06万辆', year: '2023', color: '#1661ab' },
                        { from: '中国', to: '菲律宾', name: '17.25万辆', year: '2023', color: '#1661ab' },

                        { from: '中国', to: '智利', name: '19.16万辆', year: '2021', color: '#1661ab' },
                        { from: '中国', to: '沙特阿拉伯', name: '13.33万辆', year: '2021', color: '#1661ab' },
                        { from: '中国', to: '俄罗斯', name: '12.30万辆', year: '2021', color: '#1661ab' },
                        { from: '中国', to: '比利时', name: '11.17万辆', year: '2021', color: '#1661ab' },

                        { from: '中国', to: '孟加拉国', name: '14.63万辆', year: '2019', color: '#1661ab' },
                        { from: '中国', to: '墨西哥', name: '11.34万辆', year: '2019', color: '#1661ab' },

                        { from: '中国', to: '日本', name: '18.81万辆', year: '2017', color: '#1661ab' },
                        { from: '中国', to: '德国', name: '13.73万辆', year: '2017', color: '#1661ab' },
                        { from: '中国', to: '孟加拉国', name: '10.07万辆', year: '2017', color: '#1661ab' }
                    ]
                }, {
                    type: 'flowmap',
                    name: '20-30万辆',
                    fillOpacity: 1,
                    width: 0.01,
                    color: '#000000',
                    data: [
                        { from: '中国', to: '沙特阿拉伯', name: '21.36万辆', year: '2023', color: '#815c94' },
                        { from: '中国', to: '英国', name: '21.38万辆', year: '2023', color: '#815c94' },
                        { from: '中国', to: '澳大利亚', name: '21.46万辆', year: '2023', color: '#815c94' },
                        { from: '中国', to: '比利时', name: '21.74万辆', year: '2023', color: '#815c94' },

                        { from: '中国', to: '美国', name: '21.50万辆', year: '2017', color: '#815c94' },
                        { from: '中国', to: '伊朗', name: '24.9万辆', year: '2017', color: '#815c94' }
                    ]
                }, {
                    type: 'flowmap',
                    name: '30万辆以上',
                    fillOpacity: 1,
                    width: 0.01,
                    color: '#000000',
                    data: [
                        { from: '中国', to: '俄罗斯', name: '32.43万辆', year: '2023', color: '#de621c' },
                        { from: '中国', to: '巴西', name: '34.50万辆', year: '2023', color: '#de621c' },
                        { from: '中国', to: '墨西哥', name: '35.70万辆', year: '2023', color: '#de621c' },
                        { from: '中国', to: '德国', name: '37.11万辆', year: '2023', color: '#de621c' }
                    ]
                }]
            });

            // 获取时间轴并添加事件监听
            const yearRange = document.getElementById('yearRange');
            const yearLabel = document.getElementById('yearLabel');

            // 更新选择的年份
            yearRange.addEventListener('input', function () {
                yearLabel.textContent = yearRange.value;

                // 根据选定年份更新数据
                updateMapData(chart, yearRange.value);
            });

            // 初次加载时更新一次
            updateMapData(chart, yearRange.value);

            // 根据年份更新流动数据
            function updateMapData(chart, year) {
                chart.series[2].setData(filterDataByYear(year, chart.series[2].options.data)); // flowmap 0-10万辆
                chart.series[3].setData(filterDataByYear(year, chart.series[3].options.data)); // flowmap 10-20万辆
                chart.series[4].setData(filterDataByYear(year, chart.series[4].options.data)); // flowmap 20-30万辆
                chart.series[5].setData(filterDataByYear(year, chart.series[5].options.data)); // flowmap 30万辆以上
            }

            // 根据年份过滤数据
            function filterDataByYear(year, data) {
                return data.filter(item => item.year === year);
            }
        } catch (error) {
            console.error('Error initializing map:', error);
        }
    })();
}


