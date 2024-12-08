var myChart = echarts.init(document.getElementById('part0301'),'LLL');



var option;

myChart.showLoading();

  myChart.hideLoading();
  myChart.setOption(
    (option = {
        title: {
          text: "中国汽车销量占比", // 设置图表标题
          textStyle: { // 标题样式
            fontSize: 16, // 字体大小设置为16
            // 可以继续添加其他样式属性，如颜色（color）、字体类型（fontFamily）等
          },
        },
        tooltip: {
          trigger: 'item', // 触发类型为数据项图形触发
          triggerOn: 'mousemove', // 触发条件为鼠标移动
          formatter: function (params) { // 自定义提示框内容
            return params.name + '<br/>' + '销量： ' + params.value + ' (辆)';
          },
        },
        color: [
          "#E41A1C", // 暗红色
          "#377EB8", // 蓝色
          "#4DAF4A", // 绿色（较深）
          "#FF7F00", // 橙色
          "#FFFF33", // 明黄色
          "#A65628", // 棕色
          "#F781BF", // 粉色
          "#984EA3", // 紫色
          "#17BECF", // 浅蓝色
          "#2CA02C", // 深绿色
          "#9467BD", // 淡紫色
          "#8C564B", // 锈色
          "#E377C2"
        ],

        animation: false, // 关闭初始动画
        series: [
            {
              name: '汽车销量', // 系列名称
              type: 'sankey', // 指定图表类型为桑基图
                data : [
                  {"name": "国产"},
                  {"name": "合资与进口"},


                  {"name": "比亚迪"},
                  {"name": "五菱汽车"},
                  {"name": "吉利汽车"},
                  {"name": "奇瑞"},
                  {"name": "长安"},
                  {"name": "理想"},
                  {"name": "红旗"},
                  {"name": "捷途"},
                  {"name": "鸿蒙智行"},
                  {"name": "广汽埃安"},
                  {"name": "广汽传祺"},
                  {"name": "领克"},
                  {"name": "零跑汽车"},
                  {"name": "蔚来"},
                  {"name": "小米汽车"},
                  {"name": "捷达"},
                  {"name": "大众"},
                  {"name": "丰田"},
                  {"name": "特斯拉"},
                  {"name": "本田"},
                  {"name": "日产"},
                  {"name": "奔驰"},
                  {"name": "奥迪"},
                  {"name": "宝马"},
                  {"name": "极氪"},
                  {"name": "哈弗"},
                  {"name": "福特"},
                  {"name": "沃尔沃"},
                  {"name": "现代"},
                  {"name": "凯迪拉克"},
                  {"name": "马自达"},
                  {"name": "保时捷"},
                  {"name": "别克"},
                  {"name": "燃油汽车"},
                  {"name": "新能源汽车"},
                  {"name": "东北地区"},
                  {"name": "华北地区"},
                  {"name": "华东地区"},
                  {"name": "华南地区"},
                  {"name": "华中地区"},
                  {"name": "西北地区"},
                  {"name": "西南地区"}
                ],
                links: [
                    {"source": "国产", "target": "比亚迪", "value": 2335842},
                    {"source": "国产", "target": "五菱汽车", "value": 582656},
                    {"source": "国产", "target": "吉利汽车", "value": 663046},
                    {"source": "国产", "target": "奇瑞", "value": 443121},
                    {"source": "国产", "target": "长安", "value": 555854},
                    {"source": "国产", "target": "理想", "value": 341814},
                    {"source": "国产", "target": "红旗", "value": 298015},
                    {"source": "国产", "target": "广汽埃安", "value": 249437},
                    {"source": "国产", "target": "广汽传祺", "value": 209333},
                    {"source": "国产", "target": "领克", "value": 180124},
                    {"source": "国产", "target": "零跑汽车", "value": 169176},
                    {"source": "国产", "target": "蔚来", "value": 148449},
                    {"source": "国产", "target": "捷途", "value": 256503},
                    {"source": "国产", "target": "小米汽车", "value": 69790},
                    {"source": "国产", "target": "鸿蒙智行", "value": 309503},
                    {"source": "国产", "target": "极氪", "value": 142873},
                    {"source": "国产", "target": "哈弗", "value": 232669},
                    {"source": "合资与进口", "target": "奔驰", "value": 443909},
                    {"source": "合资与进口", "target": "宝马", "value": 444366},
                    {"source": "合资与进口", "target": "凯迪拉克", "value": 83801},
                    {"source": "合资与进口", "target": "奥迪", "value": 438159},
                    {"source": "合资与进口", "target": "福特", "value": 109275},
                    {"source": "合资与进口", "target": "沃尔沃", "value": 97583},
                    {"source": "合资与进口", "target": "保时捷", "value": 43280},
                    {"source": "合资与进口", "target": "马自达", "value": 51413},
                    {"source": "合资与进口", "target": "捷达", "value": 85818},
                    {"source": "合资与进口", "target": "大众", "value": 1429490},
                    {"source": "合资与进口", "target": "丰田", "value": 1090428},
                    {"source": "合资与进口", "target": "特斯拉", "value": 460200},
                    {"source": "合资与进口", "target": "本田", "value": 617598},
                    {"source": "合资与进口", "target": "日产", "value": 430789},
                    {"source": "合资与进口", "target": "别克", "value": 250560},
                    {"source": "合资与进口", "target": "现代", "value": 134033},

                    {"source": "奔驰", "target": "燃油汽车", "value": 443909},
                    {"source": "宝马", "target": "燃油汽车", "value": 444366},
                    {"source": "凯迪拉克", "target": "燃油汽车", "value": 83801},
                    {"source": "奥迪", "target": "燃油汽车", "value": 438159},
                    {"source": "福特", "target": "燃油汽车", "value": 109275},
                    {"source": "沃尔沃", "target": "燃油汽车", "value": 97583},
                    {"source": "保时捷", "target": "燃油汽车", "value": 43280},
                    {"source": "马自达", "target": "燃油汽车", "value": 51413},
                    {"source": "捷达", "target": "燃油汽车", "value": 85818},
                    {"source": "大众", "target": "燃油汽车", "value": 1429490},
                    {"source": "丰田", "target": "燃油汽车", "value": 1090428},
                    {"source": "本田", "target": "燃油汽车", "value": 617598},
                    {"source": "日产", "target": "燃油汽车", "value": 430789},
                    {"source": "吉利汽车", "target": "燃油汽车", "value": 660732},
                    {"source": "长安", "target": "燃油汽车", "value": 162619},
                    {"source": "奇瑞", "target": "燃油汽车", "value": 399110},
                    {"source": "红旗", "target": "燃油汽车", "value": 298015},
                    {"source": "五菱汽车", "target": "燃油汽车", "value": 531585},
                    {"source": "比亚迪", "target": "新能源汽车", "value": 2335842},
                    {"source": "五菱汽车", "target": "新能源汽车", "value": 42071},
                    {"source": "吉利汽车", "target": "新能源汽车", "value": 2314},
                    {"source": "理想", "target": "新能源汽车", "value": 341814},
                    {"source": "长安", "target": "新能源汽车", "value": 393235},
                    {"source": "奇瑞", "target": "新能源汽车", "value": 44011},
                    {"source": "广汽埃安", "target": "新能源汽车", "value": 249437},
                    {"source": "广汽传祺", "target": "新能源汽车", "value": 209333},
                    {"source": "特斯拉", "target": "新能源汽车", "value": 460200},
                    {"source": "捷途", "target": "燃油汽车", "value": 180203},
                    {"source": "捷途", "target": "新能源汽车", "value": 76300},
                    {"source": "鸿蒙智行", "target": "新能源汽车", "value": 309503},
                    {"source": "领克", "target": "新能源汽车", "value": 180124},
                    {"source": "零跑汽车", "target": "新能源汽车", "value": 169176},
                    {"source": "蔚来", "target": "新能源汽车", "value": 148449},
                    {"source": "小米汽车", "target": "新能源汽车", "value": 69790},
                    {"source": "极氪", "target": "新能源汽车", "value": 142873},
                    {"source": "哈弗", "target": "燃油汽车", "value": 232669},
                    {"source": "现代", "target": "燃油汽车", "value": 134033},
                    {"source": "别克", "target": "燃油汽车", "value": 250560},


                    {"source": "新能源汽车", "target": "东北地区", "value": 138729},
                    {"source": "燃油汽车", "target": "东北地区", "value": 325364},
                    {"source": "新能源汽车", "target": "华北地区", "value": 346656},
                    {"source": "燃油汽车", "target": "华北地区", "value": 1423466},
                    {"source": "新能源汽车", "target": "华中地区", "value": 298989},
                    {"source": "燃油汽车", "target": "华中地区", "value": 894750},
                    {"source": "新能源汽车", "target": "华南地区", "value": 1626330},
                    {"source": "燃油汽车", "target": "华南地区", "value": 1708159},
                    {"source": "新能源汽车", "target": "华东地区", "value": 1824943},
                    {"source": "燃油汽车", "target": "华东地区", "value": 2684249},
                    {"source": "新能源汽车", "target": "西北地区", "value": 576390},
                    {"source": "燃油汽车", "target": "西北地区", "value": 447375},
                    {"source": "新能源汽车", "target": "西南地区", "value": 362435},
                    {"source": "燃油汽车", "target": "西南地区", "value": 732067}
                ],
              

              emphasis: {
                focus: 'adjacency' // 高亮显示相邻的节点和链接
              },
              lineStyle: {
                color: 'gradient', // 链接颜色为渐变
                curveness: 0.5 // 链接曲线度
              },
              height:600,
              width:1000
      
        }
      ]

    })
  );

option && myChart.setOption(option);
