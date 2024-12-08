var myChart = echarts.init(document.getElementById('part_head'),'theme');

var option;

const imgUrls = {
 '萌兰':
    'assets/img/panda/menglan.jpg',
  '和花':
  'assets/img/panda/huahua.jpg',
  '福宝':
  'assets/img/panda/fubao.jpg',
  '绩笑':
  'assets/img/panda/jixiao.jpg',
  '润玥':
  'assets/img/panda/runyue.jpg',
  '萌萌':
  'assets/img/panda/mengmeng.jpg',
  '福星':
  'assets/img/panda/fuxin.jpg',
  '成实':
  'assets/img/panda/chengshi.jpg',
  '圆润':
  'assets/img/panda/yuanrun.jpg',
  '和叶':
  'assets/img/panda/heye.jpg',

};
option = {
  title: {
    text: "明星熊猫热度排行",
    textStyle: { // 标题样式  
        fontSize: 16, // 字体大小设置为20
        // 其他样式属性，如颜色、字体类型等也可以在这里设置  
    },
    left:100
    
},
  grid:{
    bottom:0,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none'
    },
    formatter: function (params) {
      var symbolHtml = '<img style="width:100px;height:100px;border-radius:50%;" src="' + imgUrls[params[0].name] + '"/>';
      return params[0].name + ': ' + '（网红指数）' +params[0].value+'<br><br>' + symbolHtml;
    }
  },
  xAxis: {
    data: ['萌兰', '和花', '福宝', '绩笑', '润玥', '萌萌', '福星', '成实','圆润','和叶'],
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: {
      color: '#356b31'
    }
  },
  yAxis: {
    splitLine: { show: false },
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: { show: false }
  },
  color: ['#356b31'],
  series: [
    {
      name: 'hill',
      type: 'pictorialBar',
      barCategoryGap: '-130%',
      // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
      symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
      itemStyle: {
        opacity: 0.3
      },
      emphasis: {
        itemStyle: {
          opacity: 0.5,
          color: " #83962f"
        }
      },
      data: [7.69, 7.32, 5.32, 3.73, 2.50, 2.18, 2.02, 1.85,1.80,1.76],
      z: 10
    },
    {
      name: 'glyph',
      type: 'pictorialBar',
      barGap: '-100%',
      symbolPosition: 'end',
      symbolSize: 0,
      symbolOffset: [0, '-120%'],
      data: [
        {
          value: 7.69,
       
        
         
        },
        {
          value: 7.32,
      
         
        },
        {
          value: 5.32,
          
          
        },
        {
          value: 3.73,
         
         
        },
        {
          value: 2.50,
          
          
        },
        {
          value: 2.18,
        
         
        },
        {
          value: 2.02,
          
         
        },
        {
          value: 1.85,
        
         
        },
        {
          value: 1.80,
        
        },
        {
          value: 1.76,
        
         
        }
      ]
    }
  ]
};

option && myChart.setOption(option);
