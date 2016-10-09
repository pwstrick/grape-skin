define([
	'shortcutView',
	'chartView',
	'chartModel'
], function(shortcut, chartView, chartModel) {
  var initialize = function() {
		shortcut.allNeed();
		var model = new chartModel();
		var view = new chartView({model:model});
		view.lineChart();
		view.lineChart2();
  };
  return {
    initialize: initialize
  };
});
