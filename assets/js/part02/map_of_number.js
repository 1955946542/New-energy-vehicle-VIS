function initializeMap02(containerId, topoJsonUrl) {
    (async function () {
        try {
            const response = await fetch(topoJsonUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch topo JSON');
            }
            const topology = await response.json();

            // Prepare demo data. The data is joined to map using population of 'hc-key'
            // property by default. See API docs for 'joinBy' for more info on linking
            // data and map.
            const data020201 =
                [{
                    'hc-key': 'cn-bj',
                    population: 2189.3095,
                    num: 712049
                }, {
                    'hc-key': 'cn-tj',
                    population: 1386.6009,
                    num: 374669
                }, {
                    'hc-key': 'cn-hb',
                    population: 7461.0235,
                    num: 437083
                }, {
                    'hc-key': 'cn-sx',
                    population: 3491.5616,
                    num: 265323
                }, {
                    'hc-key': 'cn-nm',
                    population: 2404.9155,
                    num: 64120
                }, {
                    'hc-key': 'cn-ln',
                    population: 4259.1407,
                    num: 128119
                }, {
                    'hc-key': 'cn-jl',
                    population: 2407.3453,
                    num: 72990
                }, {
                    'hc-key': 'cn-hl',
                    population: 3185.0088,
                    num: 1816
                }, {
                    'hc-key': 'cn-sh',
                    population: 2487.0895,
                    num: 998341
                }, {
                    'hc-key': 'cn-js',
                    population: 8474.8016,
                    num: 979869
                }, {
                    'hc-key': 'cn-zj',
                    population: 6456.7588,
                    num: 1339482
                }, {
                    'hc-key': 'cn-ah',
                    population: 6102.7171,
                    num: 410299
                }, {
                    'hc-key': 'cn-fj',
                    population: 4154.0086,
                    num: 362061
                }, {
                    'hc-key': 'cn-jx',
                    population: 4518.8635,
                    num: 235562
                }, {
                    'hc-key': 'cn-sd',
                    population: 10152.7453,
                    num: 906464
                }, {
                    'hc-key': 'cn-he',
                    population: 9936.5519,
                    num: 836891
                }, {
                    'hc-key': 'cn-hu',
                    population: 5775.2557,
                    num: 395896
                }, {
                    'hc-key': 'cn-hn',
                    population: 6644.4864,
                    num: 362991
                }, {
                    'hc-key': 'cn-gd',
                    population: 12601.2510,
                    num: 1998110
                }, {
                    'hc-key': 'cn-gx',
                    population: 5012.6804,
                    num: 436217
                }, {
                    'hc-key': 'cn-ha',
                    population: 1008.1232,
                    num: 186127
                }, {
                    'hc-key': 'cn-cq',
                    population: 3205.4159,
                    num: 276327
                }, {
                    'hc-key': 'cn-sc',
                    population: 8367.4866,
                    num: 544957
                }, {
                    'hc-key': 'cn-gz',
                    population: 3856.2148,
                    num: 172483
                }, {
                    'hc-key': 'cn-yn',
                    population: 4720.9277,
                    num: 213452
                }, {
                    'hc-key': 'cn-xz',
                    population: 364.8100,
                    num: 338
                }, {
                    'hc-key': 'cn-sa',
                    population: 3952.8999,
                    num: 304389
                }, {
                    'hc-key': 'cn-gs',
                    population: 2501.9831,
                    num: 57558
                }, {
                    'hc-key': 'cn-qh',
                    population: 592.3957,
                    num: 10836
                }, {
                    'hc-key': 'cn-nx',
                    population: 720.2654,
                    num: 24328
                }, {
                    'hc-key': 'cn-xj',
                    population: 2585.2345,
                    num: 46217
                }
                ];

            const provinceNameMap = {
                'cn-bj': '北京市',
                'cn-tj': '天津市',
                'cn-hb': '河北省',
                'cn-sx': '山西省',
                'cn-nm': '内蒙古自治区',
                'cn-ln': '辽宁省',
                'cn-jl': '吉林省',
                'cn-hl': '黑龙江省',
                'cn-sh': '上海市',
                'cn-js': '江苏省',
                'cn-zj': '浙江省',
                'cn-ah': '安徽省',
                'cn-fj': '福建省',
                'cn-jx': '江西省',
                'cn-sd': '山东省',
                'cn-he': '河南省',
                'cn-hu': '湖北省',
                'cn-hn': '湖南省',
                'cn-gd': '广东省',
                'cn-gx': '广西壮族自治区',
                'cn-ha': '海南省',
                'cn-cq': '重庆市',
                'cn-sc': '四川省',
                'cn-gz': '贵州省',
                'cn-yn': '云南省',
                'cn-xz': '西藏自治区',
                'cn-sa': '陕西省',
                'cn-gs': '甘肃省',
                'cn-qh': '青海省',
                'cn-nx': '宁夏回族自治区',
                'cn-xj': '新疆维吾尔自治区'
            };
            
            // 计算每万人口的新能源汽车保有量比值
            data020201.forEach(item => {
                item.ratio = (item.num / item.population);  // 每万人拥有的新能源汽车数量
            });

            // 获取最大和最小比值用于颜色映射
            const ratios = data020201.map(item => item.ratio);
            const minRatio = Math.min(...ratios);
            const maxRatio = Math.max(...ratios);

            // 创建地图配置
            const mapOption = {
                chart: {
                    map: topology,
                    events: {
                        click: function() {
                            this.update(barOption);
                        }
                    }
                },

                title: {
                    text: '全国各省新能源汽车保有量与人口比值分布',
                    style: {
                        fontSize: '16px'
                    }
                },

                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },

                colorAxis: {
                    min: minRatio,
                    max: maxRatio,
                    stops: [
                        [0, '#E8F5E9'],     // 最浅的绿色
                        [0.5, '#66BB6A'],   // 中等绿色
                        [1, '#1B5E20']      // 最深的绿色
                    ],
                    labels: {
                        format: '{population:.1f}',  // 显示一位小数
                        style: {
                            fontSize: '12px'
                        }
                    }
                },
                plotOptions: {
                    mapbubble: {
                        tooltip: {
                            pointFormat: "1"
                        }
                    }

                },

                tooltip: {
                    enabled: true,
                    animation: true,
                    style: {
                        fontSize: '14px',
                        fontWeight: 'bold'
                    },
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderWidth: 1,
                    borderColor: '#AAA',
                    borderRadius: 3,
                    shadow: true,
                    formatter: function() {
                        const ratio = (this.point.num / this.point.population).toFixed(2);
                        return `<div style="font-weight: bold; color: #333;">
                                    <span style="font-size: 16px; color: #000;">${provinceNameMap[this.point['hc-key']]}</span><br/>
                                    <span style="color: #2f7ed8;">比值：${ratio} 辆/万人</span><br/>
                                    <span style="color: #0d233a;">新能源汽车保有量：${this.point.num.toLocaleString()} 辆</span><br/>
                                    <span style="color: #0d233a;">人口数量：${this.point.population.toLocaleString()} 万人</span>
                                </div>`;
                    },
                    useHTML: true,
                    padding: 10,
                    // 设置 tooltip 位置
                    positioner: function (labelWidth, labelHeight, point) {
                        const chart = this.chart;
                        return {
                            x: chart.plotWidth - labelWidth - 10,  // 距离右边界 10px
                            y: chart.plotHeight - labelHeight - 10  // 距离下边界 10px
                        };
                    },
                    // 确保 tooltip 不会超出图表边界
                    bounds: {
                        x1: 0,
                        y1: 0,
                        x2: 'plotWidth',
                        y2: 'plotHeight'
                    }
                },

                series: [{
                    data: data020201.map(function (item) {
                        return {
                            'hc-key': item['hc-key'],
                            value: item.num / item.population,  // 修改：使用比值作为颜色映射的值
                            num: item.num,      // 新能源汽车数量
                            population: item.population   // 重命名为 population 使语义更清晰
                        };
                    }),
                    name: '新能源汽车保有量/万人口',
                    states: {
                        hover: {
                            color: '#11DA55'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            return provinceNameMap[this.point['hc-key']];
                        }
                    }
                }]
            };

            // 创建条形图配置
            const barOption = {
                chart: {
                    type: 'bar',
                    events: {
                        click: function() {
                            this.update(mapOption);
                        }
                    }
                },
                title: {
                    text: '全国各省新能源汽车保有量与人口比值排序',
                    style: {
                        fontSize: '16px'
                    }
                },
                xAxis: {
                    type: 'linear',  // 修改：将 'population' 改为 'linear'
                    title: {
                        text: '新能源汽车保有量/万人口（辆/万人）'
                    }
                },
                yAxis: {
                    type: 'category',
                    title: {
                        text: '省份'
                    },
                    labels: {
                        style: {
                            fontSize: '12px'
                        },
                        // 确保标签完全显示
                        overflow: 'allow',
                        crop: false
                    }
                },
                tooltip: {
                    enabled: true,
                    followPointer: true,  // 跟随鼠标移动
                    followTouchMove: true,  // 触摸设备上跟随手指移动
                    animation: true,
                    style: {
                        fontSize: '14px',
                        fontWeight: 'bold'
                    },
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderWidth: 1,
                    borderColor: '#AAA',
                    borderRadius: 3,
                    shadow: true,
                    formatter: function() {
                        return `<div style="font-weight: bold; color: #333;">
                                    <span style="font-size: 16px; color: #000;">${this.point.name}</span><br/>
                                    <span style="color: #2f7ed8;">比值：${this.point.y.toFixed(2)} 辆/万人</span><br/>
                                    <span style="color: #0d233a;">新能源汽车保有量：${this.point.num.toLocaleString()} 辆</span><br/>
                                    <span style="color: #0d233a;">人口数量：${this.point.population.toLocaleString()} 万人</span>
                                </div>`;
                    },
                    useHTML: true,
                    padding: 10
                },
                plotOptions: {
                    series: {
                        states: {
                            hover: {
                                brightness: 0.1
                            }
                        }
                    }
                },
                series: [{
                    name: '新能源汽车保有量/万人口',
                    data: data020201.map(function (item) {
                        return {
                            name: provinceNameMap[item['hc-key']],
                            y: item.num / item.population,  // 每万人的新能源汽车数量
                            num: item.num,             // 新能源汽车数量
                            population: item.population     // 人口数量(万人)
                        };
                    }).sort((a, b) => b.y - a.y)
                }]
            };

            // 更新 yAxis 数据
            barOption.yAxis.data = barOption.series[0].data.map(item => item.name);

            // 初始化图表
            const chart = Highcharts.mapChart(containerId, mapOption);
            
            // 记录当前显示的是否为地图
            let isMap = true;
            
            // 添加点击事件监听器
            document.getElementById(containerId).addEventListener('click', function() {
                if (isMap) {
                    chart.update(barOption);
                }
            });

        } catch (error) {
            console.error('Error initializing map:', error);
        }
    })();
}






