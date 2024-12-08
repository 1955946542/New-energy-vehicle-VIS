
  var chart_4eaa364a159c406194abd4e507a4402c = echarts.init(
          document.getElementById('part01'), 'white', {renderer: 'canvas'});
  var option_4eaa364a159c406194abd4e507a4402c =
      {
        "animation": true,
        "animationThreshold": 2000,
        "animationDuration": 1500,
        "animationEasing": "cubicInOut",
        "animationDelay": 0,
        "animationDurationUpdate": 1500,
        "animationEasingUpdate": "cubicInOut",
        "animationDelayUpdate": 0,
        "aria": {
          "enabled": false
        },
        "color": [
          "#CD222A",//比亚迪
          "#000000",//tesla
          "#000000",//理想
          "#C3CCD7",//五菱汽车
          "#110A0A",//鸿蒙智行
          "#FF6900",//小米汽车
          "#040404",//极氪
          "#000000",//吉利熊猫
          "#E70316",//红旗
          "#001E50",//大众
          "#000000",//蔚来
          "#63737C",//深蓝汽车
          "#000000",//零跑
          "#0C0C0C",//领克
          "#9FB3C0",//吉利银河
          "#21231E",//奇瑞捷途
          "#515C61",//哈弗
          "#E60001"//丰田
        ],
        "series": [
          {
            "type": "graph",
            "layout": "force",
            "force": {
              "repulsion": 800, // 斥力
              "gravity": 0.1, // 减小向心力使运动更自由
              "edgeLength": 300, // 连线长度
              "friction": 0.2, // 减小摩擦力使运动更持久
              "layoutAnimation": true
            },
            "symbolSize": 30, // 固定节点大小
            "label": {
              "show": true,
              "position": "right",
              "distance": 10,
              "fontSize": 14,
              "color": "#333"
            },
            "lineStyle": {
              "width": 1,
              "opacity": 0.6,
              "curveness": 0.3,
              "color": "source"
            },
            "roam": true,
            "draggable": false,
            "focusNodeAdjacency": true,
            "data": [
              {
                "id": "brand_1",
                "name": "比亚迪",
                "symbolSize": 30,
                "x": 72.93553986229063,
                "y": 100.51466579005574,
                "value": 1,
                "itemStyle": {
                  "color":"#CD222A"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 1
              },
              {
                "id": "brand_2",
                "name": "特斯拉",
                "symbolSize": 30,
                "x": 232.307420410993,
                "y": 155.2957923721595,
                "value": 2,
                "itemStyle": {
                  "color":"#000000"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 2
              },
              {
                "id": "brand_3",
                "name": "理想",
                "symbolSize": 30,
                "x": 379.6694750556762,
                "y": 256.10675649451,
                "value": 4,
                "itemStyle": {
                  "color":"#000000"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 3
              },
              {
                "id": "brand_4",
                "name": "五菱汽车",
                "symbolSize": 30,
                "x": 313.59243964456016,
                "y": 313.878912626119,
                "value": 3,
                "itemStyle": {
                  "color":"#C3CCD7"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 4
              },
              {
                "id": "brand_5",
                "name": "鸿蒙智行",
                "symbolSize": 30,
                "x": 251.20595359726244,
                "y": 222.70986922316516,
                "value": 5,
                "itemStyle": {
                  "color":"#110A0A"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 5
              },
              {
                "id": "brand_6",
                "name": "小米",
                "symbolSize": 30,
                "x": 202.33395389468134,
                "y": 191.64582439626642,
                "value": 0,
                "itemStyle": {
                  "color":"#FF6900"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 6
              },
              {
                "id": "brand_7",
                "name": "极氪",
                "symbolSize": 30,
                "x": 347.74103709474434,
                "y": 320.1857265432381,
                "value": 0,
                "itemStyle": {
                  "color":"#040404"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 7
              },
              {
                "id": "brand_8",
                "name": "吉利熊猫",
                "symbolSize": 30,
                "x": 376.687195141245,
                "y": 305.2679375160751,
                "value": 0,
                "itemStyle": {
                  "color":"#000000"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 8
              },
              {
                "id": "brand_9",
                "name": "红旗",
                "symbolSize": 30,
                "x": 283.36684819439006,
                "y": 163.2663422844534,
                "value": 0,
                "itemStyle": {
                  "color":"#E70316"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 9
              },
              {
                "id": "brand_10",
                "name": "大众",
                "symbolSize": 30,
                "x": 442.99427298367544,
                "y": 182.5142920796488,
                "value": 0,
                "itemStyle": {
                  "color":"#001E50"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 10
              },
              {
                "id": "brand_11",
                "name": "蔚来",
                "symbolSize": 30,
                "x": 75.3146265999427,
                "y": 255.1706946248913,
                "value": 6,
                "itemStyle": {
                  "color":"#000000"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 11
              },
              {
                "id": "brand_12",
                "name": "深蓝汽车",
                "symbolSize": 30,
                "x": 439.8186702412329,
                "y": 76.28664542563808,
                "value": 0,
                "itemStyle": {
                  "color":"#63737C"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 12
              },
              {
                "id": "brand_13",
                "name": "零跑",
                "symbolSize": 30,
                "x": 425.2306044688868,
                "y": 177.8738048740227,
                "value": 0,
                "itemStyle": {
                  "color":"#000000"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 13
              },
              {
                "id": "brand_14",
                "name": "领克",
                "symbolSize": 30,
                "x": 335.18174125343484,
                "y": 336.27499494956453,
                "value": 0,
                "itemStyle": {
                  "color":"#0C0C0C"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 14
              },
              {
                "id": "brand_15",
                "name": "吉利银河",
                "symbolSize": 30,
                "x": 385.79638509283643,
                "y": 79.14070806196308,
                "value": 0,
                "itemStyle": {
                  "color":"#9FB3C0"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 15
              },
              {
                "id": "brand_16",
                "name": "奇瑞",
                "symbolSize": 30,
                "x": 217.3370437872531,
                "y": 111.89204386877176,
                "value": 0,
                "itemStyle": {
                  "color":"#21231E"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 16
              },
              {
                "id": "brand_17",
                "name": "哈弗",
                "symbolSize": 30,
                "x": 379.93193815124016,
                "y": 268.062253873446,
                "value": 0,
                "itemStyle": {
                  "color":"#515C61"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 17
              },
              {
                "id": "brand_18",
                "name": "丰田",
                "symbolSize": 30,
                "x": 343.0871988673716,
                "y": 249.21469762597638,
                "value": 0,
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 18
              },
              {
                "id": "1",
                "name": "秦PLUS",
                "symbolSize": 25,
                "x": 145.87107972458125,
                "y": 201.0293315801115,
                "value": 255232,
                "itemStyle": {
                  "color":"#CD222A"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 1
              },
              {
                "id": "2",
                "name": "Model Y",
                "symbolSize": 23,
                "x": 464.614840821986,
                "y": 310.591584744319,
                "value": 237282,
                "itemStyle": {
                  "color":"#000000"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 2
              },
              {
                "id": "3",
                "name": "海鸥",
                "symbolSize": 22,
                "x": 617.1978094074033,
                "y": 298.0185239560587,
                "value": 227076,
                "itemStyle": {
                  "color":"#CD222A"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 1
              },
              {
                "id": "4",
                "name": "宋PLUS新能源",
                "symbolSize": 21,
                "x": 867.4420603381918,
                "y": 297.9105744880708,
                "value": 214629,
                "itemStyle": {
                  "color":"#CD222A"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 1
              },
              {
                "id": "5",
                "name": "元PLUS",
                "symbolSize": 20,
                "x": 262.9849759218909,
                "y": 624.2001766224406,
                "value": 150107,
                "itemStyle": {
                  "color":"#CD222A"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 1
              },
              {
                "id": "6",
                "name": "秦L",
                "symbolSize": 20,
                "x": 793.2527813271232,
                "y": 449.25034107270767,
                "value": 126265,
                "itemStyle": {
                  "color":"#CD222A"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 1
              },
              {
                "id": "7",
                "name": "驱逐舰05",
                "symbolSize": 20,
                "x": 194.38950144693123,
                "y": 190.25679433706128,
                "value": 125473,
                "itemStyle": {
                  "color":"#CD222A"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 1
              },
              {
                "id": "8",
                "name": "宋Pro新能源",
                "symbolSize": 20,
                "x": 691.7004519248525,
                "y": 504.58084419619576,
                "value": 116201,
                "itemStyle": {
                  "color":"#CD222A"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 1
              },
              {
                "id": "9",
                "name": "L6",
                "symbolSize": 20,
                "x": 759.3389501113523,
                "y": 512.21351298902,
                "value": 111975,
                "itemStyle": {
                  "color":"#000000"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 3
              },
              {
                "id": "10",
                "name": "宏光MINIEV",
                "symbolSize": 20,
                "x": 627.1848792891203,
                "y": 627.757825252238,
                "value": 110217,
                "itemStyle": {
                  "color":"#C3CCD7"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 4
              },
              {
                "id": "11",
                "name": "汉",
                "symbolSize": 20,
                "x": 486.82182030762783,
                "y": 377.0698984142044,
                "value": 107877,
                "itemStyle": {
                  "color":"#CD222A"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 1
              },
              {
                "id": "12",
                "name": "海豹06 DM-i",
                "symbolSize": 20,
                "x": 559.2418177878866,
                "y": 660.9807260521691,
                "value": 99386,
                "itemStyle": {
                  "color":"#CD222A"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 1
              },
              {
                "id": "13",
                "name": "五菱缤果",
                "symbolSize": 20,
                "x": 440.3509316026911,
                "y": 238.24955434391725,
                "value": 97551,
                "itemStyle": {
                  "color":"#C3CCD7"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 4
              },
              {
                "id": "14",
                "name": "问界M9",
                "symbolSize": 20,
                "x": 502.4119071945249,
                "y": 445.4197384463303,
                "value": 97439,
                "itemStyle": {
                  "color":"#110A0A"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 5
              },
              {
                "id": "15",
                "name": "AION Y",
                "symbolSize": 20,
                "x": 188.86547093582652,
                "y": 360.389777595177,
                "value": 91927,
                "itemStyle": {
                  "color":"#C3CCD7"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 4
              },
              {
                "id": "16",
                "name": "Model 3",
                "symbolSize": 20,
                "x": 558.0177127714559,
                "y": 392.6537500484263,
                "value": 90498,
                "itemStyle": {
                  "color":"#000000"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 2
              },
              {
                "id": "17",
                "name": "问界M7",
                "symbolSize": 20,
                "x": 244.93519973356345,
                "y": 382.91318131028606,
                "value": 81786,
                "itemStyle": {
                  "color":"#110A0A"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 5
              },
              {
                "id": "18",
                "name": "AION S",
                "symbolSize": 20,
                "x": 638.2089015592544,
                "y": 637.5787315042776,
                "value": 79003,
                "itemStyle": {
                  "color":"#C3CCD7"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 4
              },
              {
                "id": "19",
                "name": "元UP",
                "symbolSize": 20,
                "x": 650.2805013501973,
                "y": 361.61143555962497,
                "value": 73163,
                "itemStyle": {
                  "color":"#CD222A"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 1
              },
              {
                "id": "20",
                "name": "海豚",
                "symbolSize": 20,
                "x": 787.1208731961937,
                "y": 126.46847971238594,
                "value": 72973,
                "itemStyle": {
                  "color":"#CD222A"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 1
              },
              {
                "id": "21",
                "name": "唐新能源",
                "symbolSize": 20,
                "x": 543.1707082171297,
                "y": 377.7625312073872,
                "value": 72077,
                "itemStyle": {
                  "color":"#CD222A"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 1
              },
              {
                "id": "22",
                "name": "小米SU7",
                "symbolSize": 20,
                "x": 404.6679077893627,
                "y": 383.29164879253284,
                "value": 69790,
                "itemStyle": {
                  "color":"#FF6900"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 6
              },
              {
                "id": "23",
                "name": "长安Lumin",
                "symbolSize": 20,
                "x": 458.04194280981693,
                "y": 271.3243714404632,
                "value": 66358,
                "itemStyle": {
                  "color":"#C3CCD7"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 4
              },
              {
                "id": "24",
                "name": "理想L7",
                "symbolSize": 20,
                "x": 846.0067233096776,
                "y": 459.29393918903736,
                "value": 65184,
                "itemStyle": {
                  "color":"#000000"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 3
              },
              {
                "id": "25",
                "name": "极氪001",
                "symbolSize": 20,
                "x": 695.4820741894887,
                "y": 640.3714530864762,
                "value": 64378,
                "itemStyle": {
                  "color":"#040404"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 7
              },
              {
                "id": "28",
                "name": "红旗E-QM5",
                "symbolSize": 20,
                "x": 566.7336963887801,
                "y": 326.5326845689068,
                "value": 50212,
                "itemStyle": {
                  "color":"#E70316"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 9
              },
              {
                "id": "29",
                "name": "ID.3",
                "symbolSize": 20,
                "x": 885.9885459673509,
                "y": 365.0285841592976,
                "value": 47189,
                "itemStyle": {
                  "color":"#001E50"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 10
              },
              {
                "id": "30",
                "name": "ES6",
                "symbolSize": 20,
                "x": 150.6292531998854,
                "y": 510.3413892497826,
                "value": 44982,
                "itemStyle": {
                  "color":"#000000"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 11
              },
              {
                "id": "31",
                "name": "S07",
                "symbolSize": 20,
                "x": 879.6373404824658,
                "y": 152.57329085127617,
                "value": 43154,
                "itemStyle": {
                  "color":"#63737C"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 12
              },
              {
                "id": "32",
                "name": "L9",
                "symbolSize": 20,
                "x": 731.5132944853209,
                "y": 314.2244811979956,
                "value": 41661,
                "itemStyle": {
                  "color":"#000000"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 3
              },
              {
                "id": "33",
                "name": "宋L DM-i",
                "symbolSize": 20,
                "x": 479.54564008085924,
                "y": 670.875369930517,
                "value": 39889,
                "itemStyle": {
                  "color":"#CD222A"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 1
              },
              {
                "id": "34",
                "name": "C11",
                "symbolSize": 20,
                "x": 850.4612089377736,
                "y": 355.7476097480454,
                "value": 39324,
                "itemStyle": {
                  "color":"#000000"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 13
              },
              {
                "id": "35",
                "name": "五菱星光",
                "symbolSize": 20,
                "x": 786.7414842634333,
                "y": 429.0369331583476,
                "value": 37609,
                "itemStyle": {
                  "color":"#C3CCD7"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 4
              },
              {
                "id": "36",
                "name": "08新能源",
                "symbolSize": 20,
                "x": 670.3634825068697,
                "y": 672.5499898991291,
                "value": 37388,
                "itemStyle": {
                  "color":"#0C0C0C"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 14
              },
              {
                "id": "37",
                "name": "C10",
                "symbolSize": 20,
                "x": 375.1329326418567,
                "y": 540.227205312839,
                "value": 37370,
                "itemStyle": {
                  "color":"#000000"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 13
              },
              {
                "id": "38",
                "name": "银河L7",
                "symbolSize": 20,
                "x": 771.5927701856729,
                "y": 158.28141612392616,
                "value": 37245,
                "itemStyle": {
                  "color":"#9FB3C0"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 15
              },
              {
                "id": "39",
                "name": "L8",
                "symbolSize": 20,
                "x": 462.4179401038851,
                "y": 185.4344991173939,
                "value": 35212,
                "itemStyle": {
                  "color":"#000000"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 3
              },
              {
                "id": "40",
                "name": "银河L6",
                "symbolSize": 20,
                "x": 333.2267449721389,
                "y": 104.23177757633152,
                "value": 34541,
                "itemStyle": {
                  "color":"#9FB3C0"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 15
              },
              {
                "id": "41",
                "name": "UNI-Z新能源",
                "symbolSize": 20,
                "x": 541.2669477459306,
                "y": 444.92729740728487,
                "value": 31893,
                "itemStyle": {
                  "color":"#C3CCD7"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 4
              },
              {
                "id": "42",
                "name": "启源A07",
                "symbolSize": 20,
                "x": 394.33292631083486,
                "y": 157.03954153517768,
                "value": 31724,
                "itemStyle": {
                  "color":"#C3CCD7"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 4
              },
              {
                "id": "43",
                "name": "SL03",
                "symbolSize": 20,
                "x": 427.92456085787035,
                "y": 597.2773569507146,
                "value": 31208,
                "itemStyle": {
                  "color":"#63737C"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 12
              },
              {
                "id": "44",
                "name": "海豹",
                "symbolSize": 20,
                "x": 199.13807886458966,
                "y": 374.40917107667656,
                "value": 31085,
                "itemStyle": {
                  "color":"#CD222A"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 1
              },
              {
                "id": "45",
                "name": "ET5T",
                "symbolSize": 20,
                "x": 776.2275586392361,
                "y": 479.998104126855,
                "value": 30248,
                "itemStyle": {
                  "color":"#000000"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 11
              },
              {
                "id": "46",
                "name": "T03",
                "symbolSize": 20,
                "x": 173.42609680798125,
                "y": 645.8270514056558,
                "value": 29289,
                "itemStyle": {
                  "color":"#000000"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 13
              },
              {
                "id": "47",
                "name": "山海T2",
                "symbolSize": 20,
                "x": 434.6740875745062,
                "y": 223.78408773754353,
                "value": 28980,
                "itemStyle": {
                  "color":"#21231E"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 16
              },
              {
                "id": "48",
                "name": "猛龙新能源",
                "symbolSize": 20,
                "x": 759.8638763024803,
                "y": 536.124507746892,
                "value": 28883,
                "itemStyle": {
                  "color":"#515C61"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 17
              },
              {
                "id": "49",
                "name": "bZ3",
                "symbolSize": 20,
                "x": 686.1743977347433,
                "y": 498.42939525195277,
                "value": 28446,
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 18
              },
              {
                "id": "50",
                "name": "问界M5",
                "symbolSize": 20,
                "x": 874.8820550863926,
                "y": 179.3133660868236,
                "value": 27807,
                "itemStyle": {
                  "color":"#110A0A"
                },
                "label": {
                  "normal": {
                    "show": true
                  }
                },
                "category": 5
              }
            ],
            "links": [
              {
                "source": "brand_1",
                "target": "1",
                "lineStyle": {
                  "color":"#CD222A",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_2",
                "target": "2",
                "lineStyle": {
                  "color":"#000000",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_1",
                "target": "3",
                "lineStyle": {
                  "color":"#CD222A",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_1",
                "target": "4",
                "lineStyle": {
                  "color":"#CD222A",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_1",
                "target": "5",
                "lineStyle": {
                  "color":"#CD222A",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_1",
                "target": "6",
                "lineStyle": {
                  "color":"#CD222A",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_1",
                "target": "7",
                "lineStyle": {
                  "color":"#CD222A",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_1",
                "target": "8",
                "lineStyle": {
                  "color":"#CD222A",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_3",
                "target": "9",
                "lineStyle": {
                  "color":"#000000",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_4",
                "target": "10",
                "lineStyle": {
                  "color":"#C3CCD7",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_1",
                "target": "11",
                "lineStyle": {
                  "color":"#CD222A",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_1",
                "target": "12",
                "lineStyle": {
                  "color":"#CD222A",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_4",
                "target": "13",
                "lineStyle": {
                  "color":"#C3CCD7",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_5",
                "target": "14",
                "lineStyle": {
                  "color":"#110A0A",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_4",
                "target": "15",
                "lineStyle": {
                  "color":"#C3CCD7",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_2",
                "target": "16",
                "lineStyle": {
                  "color":"#000000",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_5",
                "target": "17",
                "lineStyle": {
                  "color":"#110A0A",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_4",
                "target": "18",
                "lineStyle": {
                  "color":"#C3CCD7",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_1",
                "target": "19",
                "lineStyle": {
                  "color":"#CD222A",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_1",
                "target": "20",
                "lineStyle": {
                  "color":"#CD222A",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_1",
                "target": "21",
                "lineStyle": {
                  "color":"#CD222A",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_6",
                "target": "22",
                "lineStyle": {
                  "color":"#FF6900",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_4",
                "target": "23",
                "lineStyle": {
                  "color":"#C3CCD7",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_3",
                "target": "24",
                "lineStyle": {
                  "color":"#000000",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_7",
                "target": "25",
                "lineStyle": {
                  "color":"#040404",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_8",
                "target": "26",
                "lineStyle": {
                  "color":"#000000",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_9",
                "target": "28",
                "lineStyle": {
                  "color":"#E70316",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_10",
                "target": "29",
                "lineStyle": {
                  "color":"#001E50",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_11",
                "target": "30",
                "lineStyle": {
                  "color":"#000000",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_12",
                "target": "31",
                "lineStyle": {
                  "color":"#63737C",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_3",
                "target": "32",
                "lineStyle": {
                  "color":"#000000",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_1",
                "target": "33",
                "lineStyle": {
                  "color":"#CD222A",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_13",
                "target": "34",
                "lineStyle": {
                  "color":"#000000",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_4",
                "target": "35",
                "lineStyle": {
                  "color":"#C3CCD7",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_14",
                "target": "36",
                "lineStyle": {
                  "color":"#0C0C0C",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_13",
                "target": "37",
                "lineStyle": {
                  "color":"#000000",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_15",
                "target": "38",
                "lineStyle": {
                  "color":"#9FB3C0",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_3",
                "target": "39",
                "lineStyle": {
                  "color":"#000000",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_15",
                "target": "40",
                "lineStyle": {
                  "color":"#9FB3C0",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_4",
                "target": "41",
                "lineStyle": {
                  "color":"#C3CCD7",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_4",
                "target": "42",
                "lineStyle": {
                  "color":"#C3CCD7",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_12",
                "target": "43",
                "lineStyle": {
                  "color":"#63737C",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_1",
                "target": "44",
                "lineStyle": {
                  "color":"#CD222A",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_11",
                "target": "45",
                "lineStyle": {
                  "color":"#000000",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_13",
                "target": "46",
                "lineStyle": {
                  "color":"#000000",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_16",
                "target": "47",
                "lineStyle": {
                  "color":"#21231E",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_17",
                "target": "48",
                "lineStyle": {
                  "color":"#515C61",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_18",
                "target": "49",
                "lineStyle": {
                  "color":"#E60001",
                  "width": 1,
                  "curveness": 0.3
                }
              },
              {
                "source": "brand_5",
                "target": "50",
                "lineStyle": {
                  "color":"#110A0A",
                  "width": 1,
                  "curveness": 0.3
                }
              }
            ],
            "categories": [
              {
                "name": "比亚迪"
              },
              {
                "name": "特斯拉"
              },
              {
                "name": "理想"
              },
              {
                "name": "长安"
              },
              {
                "name": "赛里斯"
              },
              {
                "name": "小米"
              },
              {
                "name": "极氪"
              },
              {
                "name": "吉利熊猫"
              },
              {
                "name": "红旗"
              },
              {
                "name": "大众"
              },
              {
                "name": "蔚来"
              },
              {
                "name": "深蓝"
              },
              {
                "name": "零跑"
              },
              {
                "name": "领克"
              },
              {
                "name": "吉利银河"
              },
              {
                "name": "捷途"
              },
              {
                "name": "哈弗"
              },
              {
                "name": "丰田"
              }
            ]
          }
        ],
        "legend": [
          {
            "data": [
              "比亚迪",
              "特斯拉",
              "理想",
              "长安",
              "赛里斯",
              "小米",
              "极氪",
              "吉利熊猫",
              "红旗",
              "大众",
              "蔚来",
              "深蓝",
              "零跑",
              "领克",
              "吉利银河",
              "捷途",
              "哈弗",
              "丰田"
            ],
            "selected": {},
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "backgroundColor": "transparent",
            "borderColor": "#ccc",
            "borderWidth": 1,
            "borderRadius": 0,
            "pageButtonItemGap": 5,
            "pageButtonPosition": "end",
            "pageFormatter": "{current}/{total}",
            "pageIconColor": "#2f4554",
            "pageIconInactiveColor": "#aaa",
            "pageIconSize": 15,
            "animationDurationUpdate": 800,
            "selector": false,
            "selectorPosition": "auto",
            "selectorItemGap": 7,
            "selectorButtonGap": 10,
            "orient": "horizontal",
            "top": 10,
            "left": "center",
            "itemGap": 20,
            "textStyle": {
              "fontSize": 14
            }
          }
        ],
        "tooltip": {
          "show": true,
          "trigger": "item",
          "triggerOn": "mousemove|click",
          "axisPointer": {
            "type": "line"
          },
          "showContent": true,
          "alwaysShowContent": false,
          "showDelay": 0,
          "hideDelay": 100,
          "enterable": false,
          "confine": false,
          "appendToBody": false,
          "transitionDuration": 0.4,
          "textStyle": {
            "fontSize": 14
          },
          "borderWidth": 0,
          "padding": 5,
          "order": "seriesAsc"
        },
        "title": [
          {
            "show": true,
            "text": "",
            "target": "blank",
            "subtarget": "blank",
            "padding": 5,
            "itemGap": 10,
            "textAlign": "auto",
            "textVerticalAlign": "auto",
            "triggerEvent": false
          }
        ]
      };
  chart_4eaa364a159c406194abd4e507a4402c.setOption(option_4eaa364a159c406194abd4e507a4402c);

  // 定时轻微扰动系统
  setInterval(function() {
    var newOption = {
      series: [{
        force: {
          gravity: 0.1 + Math.random() * 0.05, // 随机轻微改变向心力
          repulsion: 800 + Math.random() * 50 // 随机轻微改变斥力
        }
      }]
    };
    chart_4eaa364a159c406194abd4e507a4402c.setOption(newOption);
  }, 2000); // 每2秒更新一次