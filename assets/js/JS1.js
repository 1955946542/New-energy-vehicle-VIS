import Highcharts from 'highcharts';
/**
 * 不同高度的3D圆环图
 * */
export function pieChart3D2(id) {
	let colorArr = ['#49E2D6', '#F7B96A', '#B567F8', '#0489EE', '#F4414A', '#CB15A2', '#08B976', '#0ACED8', '#3415CE', '#CE9B15', '#8EEA0A'];
	// 创建渐变色
	Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function(color, i) {
		return {
			radialGradient: {
				cx: 0.5,
				cy: 0.3,
				r: 0.7
			},
			stops: [
				[0, colorArr[i]],
				[1, Highcharts.Color(colorArr[i]).brighten(-0.2).get('rgb')]
			]
		};
	});
	var each = Highcharts.each,
		round = Math.round,
		cos = Math.cos,
		sin = Math.sin,
		deg2rad = Math.deg2rad;
	Highcharts.wrap(Highcharts.seriesTypes.pie.prototype, 'translate', function(proceed) {
		proceed.apply(this, [].slice.call(arguments, 1));
		// Do not do this if the chart is not 3D
		if(!this.chart.is3d()) {
			return;
		}
		var series = this,
			chart = series.chart,
			options = chart.options,
			seriesOptions = series.options,
			depth = seriesOptions.depth || 0,
			options3d = options.chart.options3d,
			alpha = options3d.alpha,
			beta = options3d.beta,
			z = seriesOptions.stacking ? (seriesOptions.stack || 0) * depth : series._i * depth;
		z += depth / 2;
		if(seriesOptions.grouping !== false) {
			z = 0;
		}
		each(series.data, function(point) {
			var shapeArgs = point.shapeArgs,
				angle;
			point.shapeType = 'arc3d';
			var ran = point.options.h;
			shapeArgs.z = z;
			shapeArgs.depth = depth * 0.75 + ran;
			shapeArgs.alpha = alpha;
			shapeArgs.beta = beta;
			shapeArgs.center = series.center;
			shapeArgs.ran = ran;
			angle = (shapeArgs.end + shapeArgs.start) / 2;
			point.slicedTranslation = {
				translateX: round(cos(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)),
				translateY: round(sin(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad))
			};
		});
	});
	(function(H) {
		H.wrap(Highcharts.SVGRenderer.prototype, 'arc3dPath', function(proceed) {
			// Run original proceed method
			var ret = proceed.apply(this, [].slice.call(arguments, 1));
			ret.zTop = (ret.zOut + 0.5) / 100;
			return ret;
		});
	}(Highcharts));

	Highcharts.chart(id, {
		chart: {
			type: 'pie',
			backgroundColor: '',
			events: {
				load: function() {
					var each = Highcharts.each,
						points = this.series[0].points;
					each(points, function(p, i) {
						p.graphic.attr({
							translateY: -p.shapeArgs.ran
						});
						p.graphic.side1.attr({
							translateY: -p.shapeArgs.ran
						});
						p.graphic.side2.attr({
							translateY: -p.shapeArgs.ran
						});
					});
				}
			},
			options3d: {
				enabled: true,
				alpha: 55,
			}
		},
		title: {
			text: ''
		},
		legend: {
			floating: true,
			align: 'center',
			verticalAlign: 'bottom',
			symbolHeight: 0,
			symbolWidth: 0,
			itemStyle: {
				fontWeight: 'normal',
			},
			useHTML: true,
			labelFormatter: function() {
				return '<span style="color: #fff;margin-left: 10px;margin-right: 25px;">' + this.name + '</span>' +
					'<span style="color: ' + colorArr[this.index] + ';">' + this.percentage.toFixed(0) + '%</span>';
			}
		},
		credits: {
			enabled: false
		},
		plotOptions: {
			pie: {
				center: ['50%', '40%'],
				size: '95%',
				innerSize: '65%',
				depth: 45,
				showInLegend: true,
				dataLabels: {
					enabled: false
				}
			}
		},
		series: [{
			name: '排行',
			data: [{
				name: '行业1',
				y: 15,
				h: 18
			}, {
				name: '行业2',
				y: 10,
				h: 10
			}, {
				name: '行业3',
				y: 30,
				h: 3
			}, {
				name: '行业4',
				y: 30,
				h: 0
			}, {
				name: '其他',
				y: 15,
				h: 10
			}]
		}]
	});
	// 强制图例项文字与标识对齐
//	let items = $("#" + id).find(".highcharts-legend-item"); //获取当前图表包含的图例项
//	for(let i = 0; i < items.length; i++) {
//		if(items[i].attributes.transform) {
//			let translateArr = items[i].attributes.transform.value.split('(')[1].split(')')[0].split(','); //获取单个图例项的transform值，并分组
//			let y = Number(translateArr[1]) + 40;// 加的数字大小根据实际情况调整
//			items[i].setAttribute("transform", "translate(" + translateArr[0] + "," + y + ")"); //设置新的transform值到图例项
//		}
//	}
}
