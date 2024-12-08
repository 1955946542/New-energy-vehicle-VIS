function initBackgroundAnimation(container) {
  // 初始化 echarts 实例
  var myChart = echarts.init(container);
  
  // 生成动画元素
  function generateAnimationElements() {
    const elements = [];
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    // 创建左侧动画圆点
    for (let i = 0; i < 10; i++) { // 增加圆点数量
      const x = Math.random() * (width * 0.15); // 限制在左侧 20% 区域
      const y = Math.random() * height;
      
      elements.push(createAnimationElement(x, y));
    }
    
    // 创建右侧动画圆点
    for (let i = 0; i < 10; i++) { // 增加圆点数量
      const x = width * 0.85 + Math.random() * (width * 0.15); // 限制在右侧 20% 区域
      const y = Math.random() * height;
      
      elements.push(createAnimationElement(x, y));
    }
    
    return elements;
  }

  // 创建单个动画元素
  function createAnimationElement(x, y) {
    return {
      type: 'circle',
      x: x,
      y: y,
      shape: {
        r: Math.random() * 100 + 3 // 缩小圆点大小范围
      },
      style: {
        fill: 'rgba(85,209,82, 0.3)' // 降低初始透明度
      },
      keyframeAnimation: {
        duration: 1000 + Math.random() * 50000, // 加快动画速度
        loop: true,
        delay: Math.random() * 1000, // 随机延迟启动动画
        keyframes: [
          {
            percent: 0.5,
            easing: 'sinusoidalInOut',
            style: {
              fill: 'rgba(64,163,88, 0.5)' // 调整动画过程中的透明度
            },
            scaleX: 0.3,
            scaleY: 0.3
          },
          {
            percent: 1,
            easing: 'sinusoidalInOut',
            style: {
              fill: 'rgba(255,255,255, 0.3)'
            },
            scaleX: 1,
            scaleY: 1
          }
        ]
      }
    };
  }

  // 配置项
  var option = {
    backgroundColor: 'transparent',
    graphic: {
      type: 'group',
      children: generateAnimationElements()
    }
  };

  // 设置配置项
  myChart.setOption(option);

  // 监听窗口大小变化
  window.addEventListener('resize', function() {
    myChart.resize();
    // 重新生成动画元素
    myChart.setOption({
      graphic: {
        type: 'group',
        children: generateAnimationElements()
      }
    });
  });
}

// 导出初始化函数
window.initBackgroundAnimation = initBackgroundAnimation;
