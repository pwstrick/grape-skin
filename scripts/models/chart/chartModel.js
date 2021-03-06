define(['backbone', 'underscore', 'constUtil', 'comUtil', 'modelUtil'],
	function(Backbone, _, constUtil, comUtil, modelUtil) {
		var list = Backbone.Model.extend({
			ajaxHomeChart: comUtil.absUrl(constUtil.ajaxHomeChart),
			defaults: {},
			initialize: function() {
	    },
		post: function(url, btn, input, fn) {//post通用函数
			return modelUtil.comPost(url, btn, input, fn);
		}
	});
	return list;
});
