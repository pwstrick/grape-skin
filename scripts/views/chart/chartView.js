define([
	'backbone',
	'viewUtil',
	'comUtil',
	'mustache',
	'modelUtil',
	'dialogView'
], function (Backbone, viewUtil, comUtil, Mustache, modelUtil, dialogView) {
	var menu = Backbone.View.extend({
		el: $('body'),
		initialize: function() {
			viewUtil.model.push(this.model);
		},
		events: {
		},
		render: function() {

		},
		lineChart: function() {//折线图表分析
			var _model = this.model;
			require(['echartsView'],
				function (chart) {
					if($('#line_chart').length == 0) {
						return;
					}
					//var url = comUtil.absUrl()
					var fn = function(json) {
						var data = json.data;
						var options = {
							tooltip : {
								trigger: 'axis'
							},
							legend: {
								data:['用户数','订单数'],
								x: 'left'
							},
							toolbox: {
								show : true,
								feature : {
									mark : {show: true},
									restore : {show: true},
									saveAsImage : {show: true}
								}
							},
							calculable : true,
							xAxis : [
								{
									type : 'category',
									boundaryGap : false,
									data : data['date']
								}
							],
							yAxis : [
								{
									name : '用户数',
									type : 'value',
									axisLabel : {
										formatter: '{value} '
									}
								},
								{
									name : '订单数',
									type : 'value',
									axisLabel : {
										formatter: '{value} '
									}
								}
							],
							series : [
								{
									name:'用户数',
									type:'line',
									data: data['user_num']
								},
								{
									name:'订单数',
									type:'line',
									yAxisIndex:1,
									data: data['order_num']
								}
							]
						};
						chart.line('line_chart', options);
					};
					_model.post(_model.ajaxHomeChart, $('#line_chart'), {}, fn);
				}
			);
		},
		lineChart2: function() {//折线图表分析
			var _model = this.model;
			require(['echartsView'],
				function (chart) {
					if($('#line_chart').length == 0) {
						return;
					}
					//var url = comUtil.absUrl()
					var fn = function(json) {
						var data = json.data;
						var options = {
							tooltip : {
								trigger: 'axis'
							},
							legend: {
								data:['用户数'],
								x: 'left'
							},
							toolbox: {
								show : true,
								feature : {
									mark : {show: true},
									restore : {show: true},
									saveAsImage : {show: true}
								}
							},
							calculable : true,
							xAxis : [
								{
									type : 'category',
									boundaryGap : false,
									data : data['date']
								}
							],
							yAxis : [
								{
									name : '用户数',
									type : 'value',
									axisLabel : {
										formatter: '{value} '
									}
								}
							],
							series : [
								{
									name:'用户数',
									type:'line',
									data: data['user_num']
								}
							]
						};
						chart.line('line_chart2', options);
					};
					_model.post(_model.ajaxHomeChart, $('#line_chart2'), {}, fn);
				}
			);
		}

	});
	return menu;
});
