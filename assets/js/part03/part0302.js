var myChart = echarts.init(document.getElementById('part0302'),'theme');

var option;

var dataBJ = [
  ['比亚迪', 157.48, '是', '中'],
  ['一汽大众', 4.87, '否', '德'],
  ['上汽大众', 13.2, '否', '德'],
  ['吉利', 33.46, '是', '中'],
  ['长安', 35.5, '是', '中'],
  ['奇瑞', 10.4, '是', '中'],
  ['东风日产', 0.93, '否', '日'],
  ['上汽通用五菱', 46.0, '是', '中'],
  ['一汽丰田', 3.3, '否', '日'],
  ['广汽丰田', 2.4, '否', '日'],
];

var dataGZ = [
  ['比亚迪',0 , '是', '中'],
  ['一汽大众', 70, '否', '德'],
  ['上汽大众', 105.5, '否', '德'],
  ['吉利', 119.85, '是', '中'],
  ['长安', 151.6, '是', '中'],
  ['奇瑞', 148.6, '是', '中'],
  ['东风日产', 62.7, '否', '日'],
  ['上汽通用五菱', 93.8, '是', '中'],
  ['一汽丰田', 80.0, '否', '日'],
  ['广汽丰田', 81.1, '否', '日'],

];

var dataSH = [
  ['比亚迪', 120.9, '是', '中'],
  ['一汽大众', 116.13, '否', '德'],
  ['上汽大众', 3.1, '否', '德'],
  ['吉利', 15.29, '是', '中'],
  ['长安', 12.6, '是', '中'],
  ['奇瑞', 27.9, '是', '中'],
  ['东风日产', 9.4, '否', '日'],
  ['上汽通用五菱', 0.67, '是', '中'],
  ['一汽丰田', 25.2, '否', '日'],
  ['广汽丰田',6.5, '否', '日'],

];
var schema = [
  { name: 'date', index: 0, text: '名字' },
  { name: 'AQIindex', index: 1, text: '销量' },
  { name: 'PM25', index: 2, text: '是否自主' },
  { name: 'PM10', index: 3, text: '国家' }

];
const itemStyle = {
  opacity: 0.8,
  shadowBlur: 10,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: 'rgba(0,0,0,0.3)'
};
option = {
  color: ['#3dd264', '#E70E0F', '#dfdd65'],
  legend: {
    top: 10,
    data: ['纯电', '油车', '混动'],
    textStyle: {
      fontSize: 16
    }
  },
  title: {
    text: "中国汽车销量",
    textStyle: { // 标题样式  
        fontSize: 16, // 字体大小设置为20  
        // 其他样式属性，如颜色、字体类型等也可以在这里设置  
    }  
    
},
  grid: {
    left: '10%',
    right: 150,
    top: '18%',
    bottom: '15%'
  },
  tooltip: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    formatter: function (param) {
      var value = param.value;
      // 将销量转换为“万”并添加单位
      var formattedValue = (value[1]).toFixed(2) + ' 万';  // 除以10000，并保留两位小数
      return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
          + value[0]
          + '</div>'
          + schema[1].text + '：' + formattedValue + '<br>'
          + schema[2].text + '：' + value[2] + '<br>'
          + schema[3].text + '：' + value[3] + '<br>';
    }
  },


  yAxis: {
    type: 'value',
    name: '销量',
    nameLocation: 'end',
    nameGap: 20,
    nameTextStyle: {
      fontSize: 16
    },
    splitLine: {
      show: false
    },
    axisLabel: {
      formatter: function (value) {
        return (value).toFixed(2) + ' 万';  // 将坐标轴的值转为“万”
      }
    }
  }
  ,
  xAxis: {
    type: 'category',
    name: '名字',
    nameGap: 10,
    nameTextStyle: {
      fontSize: 1
    },
    splitLine: {
      show: false
    },
    axisLabel: {
      interval: 0,
      rotate:70
    }
  },
  visualMap: [
    {
      left: 'right',
      top: '40%',
      dimension: 1,
      min: 0,
      max: 150,
      itemWidth: 30,
      itemHeight: 200,
      calculable: true,
      precision: 0.1,
      text: ['圆形大小：销量'],
      textGap: 20,
      inRange: {
        symbolSize: [10, 50]
      },
      outOfRange: {
        symbolSize: [10, 70],
        color: ['rgba(255,255,255,0.4)']
      },
      controller: {
        inRange: {
           color: [ "#96c02f"]
        
        },
        outOfRange: {
         color: [ "#83962f" ]
        }
      }
    },

  ],

  series: [
    {
      name: '纯电',
      type: 'scatter',
      itemStyle: itemStyle,
      data: dataBJ
    },
    {
      name: '油车',
      type: 'scatter',
      itemStyle: itemStyle,
      data: dataGZ
    },
    {
      name: '混动',
      type: 'scatter',
      itemStyle: itemStyle,
      data: dataSH
    },

  ]
};

option && myChart.setOption(option);
