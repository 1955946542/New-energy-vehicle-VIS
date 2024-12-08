// 获取图表容器和标题容器
var myChart = echarts.init(document.getElementById('part0303'));
var chartTitle = document.getElementById('chartTitle');
var toggleButton = document.getElementById('toggleChartButton');

// 初始数据配置 (data1)
var data1 = {
    dataset: [
        {
            dimensions: ['name', 'score'],
            source: [
                ['奥迪', '680'],
                ['奔驰', '661'],
                ['路虎', '630'],
                ['凯迪拉克', '629'],
                ['沃尔沃', '627'],
                ['雷克萨斯', '616'],
                ['林肯', '616'],
                ['蔚来', '607'],
                ['保时捷', '605'],
                ['高合', '549'],
                ['智己', '542'],
                ['宝马', '683']

            ]
        },
        {
            transform: {
                type: 'sort',
                config: { dimension: 'score', order: 'desc' }
            }
        }
    ],
    grid: {
        left: '10%',
        right: '10%',
        top: '15%',
        bottom: '15%'
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            interval: 0,
            rotate: 30,
            textStyle: {
                fontSize: 10 // 调整字体大小（例如10px）
            }}
    },
    yAxis: {},
    series: {
        type: 'bar',
        encode: { x: 'name', y: 'score' },
        datasetIndex: 1,
        label: {
            show: true,
            position: 'top',
            fontSize: 8
        },
        itemStyle: {
            color: function (params) {
                const colors = ['#3E7A16', '#527d8f', '#3defa9', '#4CAF50', '#8AAD17'];
                return colors[params.dataIndex % colors.length]; // 根据索引循环颜色
            }
        }
    }
};

// 第二种数据配置 (data2)
var data2 = {
    dataset: [
        {
            dimensions: ['name', 'score'],
            source: [

                ['别克', '659'],
                ['北京现代', '654'],
                ['吉利', '652'],
                ['哈佛', '643'],
                ['奇瑞', '640'],
                ['雪佛兰', '636'],
                ['一汽大众', '636'],
                ['上汽大众', '635'],
                ['东风本田', '634'],
                ['特斯拉', '634'],
                ['东风日产', '631'],
                ['广汽本田', '631'],
                ['广汽丰田', '631'],
                ['小鹏', '631'],
                ['荣威', '629'],
                ['长安福特', '628'],
                ['一汽红旗', '624'],
                ['一汽丰田', '624'],
                ['长安汽车', '621'],
                ['广汽传祺', '619'],
                ['起亚', '618'],
                ['斯柯达', '618'],
                ['宝骏', '617'],
                ['长安马自达', '614'],
                ['领克', '613'],
                ['五菱', '612'],
                ['启辰', '611'],
                ['东风标志', '609'],
                ['MG', '604'],
                ['一汽奔腾', '600'],
                ['东风风神', '598'],
                ['理想', '598'],
                ['捷达', '597'],
                ['东风风行', '593'],
                ['东风风光', '591'],
                ['欧尚汽车', '587'],
                ['比亚迪', '678'],
                ['捷途', '585'],
                ['奇瑞新能源', '582'],
                ['北汽新能源', '576'],
                ['几何', '576'],
                ['广汽埃安', '575'],
                ['零跑', '565'],
                ['哪吒', '564'],
                ['欧拉', '559'],
                ['坦克', '557'],
                ['极氪', '551'],
                ['岚图', '548']

            ]
        },
        {
            transform: {
                type: 'sort',
                config: { dimension: 'score', order: 'desc' }
            }
        }
    ],
    grid: {
        left: '10%',
        right: '10%',
        top: '15%',
        bottom: '15%'
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            interval: 0,
            rotate: 30,
            textStyle: {
                fontSize: 8 // 调整字体大小（例如10px）
            }
        }
    },
    yAxis: {},
    series: {
        type: 'bar',
        encode: { x: 'name', y: 'score' },
        datasetIndex: 1,
        label: {
            show: true,
            position: 'top',
            fontSize: 8
        },
        itemStyle: {
            color: function (params) {
                const colors = ['#3E7A16', '#527d8f', '#3defa9', '#4CAF50', '#8AAD17'];
                return colors[params.dataIndex % colors.length]; // 根据索引循环颜色
            }
        }
    }
};

// 当前图表状态
var isLuxury = true;

// 更新图表的函数
function updateChartOption(newOption, newTitle) {
    console.log("更新图表数据...");  // 用于调试
    myChart.clear();  // 清除当前图表
    myChart.setOption(newOption, true);  // 使用新的配置更新图表
    chartTitle.textContent = newTitle;  // 更新标题
}

// 初始显示图表
updateChartOption(data1, "品牌影响力得分排名：豪华品牌");

// 切换按钮的点击事件
toggleButton.addEventListener('click', function () {
    if (isLuxury) {
        console.log("切换到第二种图表...");
        updateChartOption(data2, "品牌影响力得分排名：主流品牌");
    } else {
        console.log("切换回第一种图表...");
        updateChartOption(data1, "品牌影响力得分排名：豪华品牌");
    }
    isLuxury = !isLuxury;  // 切换状态
});
