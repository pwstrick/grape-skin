define([
    'jquery',
	'shortcutView',
	'viewUtil',
	'listView',
	'listModel'
], function($, shortcut, viewUtil, listView, listModel) {
  var initialize = function() {
		shortcut.allNeed();
		var model = new listModel();
		var view = new listView({model:model});
		view.tableDeleteBtn();//通用删除
		viewUtil.selectAll();//选中全部
		view.dragsort();
		view.listBtn();//与多选框配合按钮
  };
  return { 
    initialize: initialize
  };
});
