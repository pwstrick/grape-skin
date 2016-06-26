define([
    'jquery',
	'shortcutView',
	'viewUtil',
	'listView',
	'listModel',
	'uploadifyView'
], function($, shortcut, viewUtil, listView, listModel, uploadifyView) {
  var initialize = function() {
		shortcut.allNeed();
		var model = new listModel();
		var view = new listView({model:model});
		view.tableDeleteBtn();//通用删除
		viewUtil.selectAll();//选中全部
		view.dragsort();
		view.listBtn();//与多选框配合按钮
		view.downloadBtn();//下载按钮
		//上传文件的按钮
		$('input[type=file]').each(function() {
			uploadifyView.uploadImages($(this).attr('id'));
		});
  };
  return { 
    initialize: initialize
  };
});
