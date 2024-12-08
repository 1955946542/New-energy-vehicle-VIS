var option = {
  // 标题设置
  title: {
    text: '全国各省新能源汽车数量/人口比例示意图',
    left: 'center',
    top: 20,
    textStyle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333'
    }
  },
  
  // 提示框设置
  tooltip: {
    trigger: 'item',
    formatter: function(params) {
      return params.name + '<br/>新能源汽车保有量/万人: ' + 
             (params.value || 0).toFixed(2);
    },
    backgroundColor: 'rgba(50,50,50,0.9)',
    borderColor: '#777',
    borderWidth: 1,
    padding: [5, 10],
    textStyle: {
      color: '#fff'
    }
  },
  
  // 视觉映射组件
  visualMap: {
    type: 'continuous',
    min: 0,
    max: 300,
    left: 'right',
    top: 'bottom',
    text: ['高', '低'],
    realtime: true,
    calculable: true,
    inRange: {
      color: ['#f0f9e8', '#bae4bc', '#7bccc4', '#43a2ca', '#0868ac']
    },
    textStyle: {
      color: '#333'
    }
  },
  
  // 地图主体设置
  geo: {
    map: 'china',
    roam: true, // 允许缩放和平移
    scaleLimit: {
      min: 1,
      max: 3
    },
    zoom: 1.2,
    label: {
      show: true,
      fontSize: 10,
      color: '#333'
    },
    itemStyle: {
      areaColor: '#f0f9e8',
      borderColor: '#777',
      borderWidth: 1,
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowBlur: 10,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    },
    emphasis: {
      itemStyle: {
        areaColor: '#a6d96a',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowBlur: 20
      },
      label: {
        color: '#000',
        fontSize: 12
      }
    }
  },
  
  // 系列设置
  series: [{
    name: '新能源汽车/人口比例',
    type: 'map',
    geoIndex: 0,
    data: [], // 数据将在后续填充
    
    // 普通状态下的样式
    itemStyle: {
      borderColor: '#777',
      borderWidth: 1,
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowBlur: 5
    },
    
    // 高亮状态下的样式
    emphasis: {
      itemStyle: {
        areaColor: '#a6d96a',
        borderWidth: 2,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowBlur: 10
      },
      label: {
        show: true,
        fontSize: 12,
        fontWeight: 'bold'
      }
    },
    
    // 选中状态下的样式
    select: {
      itemStyle: {
        areaColor: '#7bccc4',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowBlur: 15
      }
    }
  }]
};
