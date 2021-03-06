define([
	'backbone',
	'viewUtil',
	'dialogView',
	'modelUtil',
	'dragsort'
], function (Backbone, viewUtil, dialogView, modelUtil) {
	var menu = Backbone.View.extend({
		el: $('body'),
		initialize: function() {
			viewUtil.model.push(this.model);
		},
		events: {},
		render: function() {},
		tableDeleteBtn: function() {//通用删除特效
			if($('table.table').length != 0) {
				//列表页面删除操作
				modelUtil.listDelPost($('table.table>tbody>tr>td'), dialogView);
			}
		},
		listBtn: function() {//与全选框配合
			$('button[data-type=listbtn]').click(function() {
				var ids = [], $this = $(this);
				var id = $this.attr('id');
				var column = $this.data('column') || 'ids[]', prompt = $this.data('confirm');
				if(!confirm(prompt)) {
					return;
				}
				$(':checkbox[data-btn='+id+']').each(function() {
					if(this.checked) {
						ids.push($(this).val());
					}
				});
				var ajax = $this.data('ajax');
				var fn = function(json) {
					if($this.data('reload')) {
						location.reload();
					}
				};
				if(ids.length == 0) {
					return;
				}
				var params = $this.data(); //默认值
				params[column] = ids;
				modelUtil.comPost(ajax, $this, params, fn);
			});
		},
		downloadBtn: function() {//下载按钮
			$('button[data-type=download]').click(function() {
				var $this = $(this);
				var btn = $this.data('btn'),
					url = $this.data('url');
				var btns = [];
				if(btn) {
					btns = btn.split(',');
				}
				var params = [];
				$.each(btns, function(index, value) {
					params.push(value+'='+ encodeURIComponent($('#'+value).val()));
				});
				url += '?' + params.join('&');
				var iframe = document.createElement('iframe');
				iframe.src = url;
				iframe.style.display = "none";
				document.body.appendChild(iframe);
			});
		},
		dragsort: function() {//拖动排序
			var $drag = $('[data-type=dragsort]');
			var trs = $drag.children('tr');
			var td_num = $drag.data('td');//更新td中的某列
			//console.log($trs);
			$drag.dragsort({
				dragSelector: "tr", 
				//dragBetween: true, 
				dragEnd: sort,
				dragSelectorExclude: 'a'
			});

			function sort() {
				var $this = $(this);
				var origin = $this.index();
				var $origin = $(trs[origin]);//原先这个位置的信息
				var params = $drag.data(); //drag的默认值
				var origins = $origin.data();
				$.each(origins, function(key, value) {
					params['origin_'+key] = value;
				});
				
				var currents = $this.data();
				$.each(currents, function(key, value) {
					params[key] = [];
					params['current_'+key] = value;
				});
				
				//data数据传送
				$.each(trs, function(key, value) {
					var currents = $(value).data();
					$.each(currents, function(key, value) {
						params[key].push(value);
					});
				});
				
				var ajax = $drag.data('ajax');
				var fn = function(json) {
					var sort = json.data.sort;
					var ids = json.data.ids;
					//返回sort与ids
					$.each(ids, function(key, value) {
						//根据ID来 
						var $find_tr = $drag.find('tr[data-id='+value+']');
						$find_tr.attr('data-sort', sort[key]);
						if(td_num !== undefined) {
							$find_tr.children('td:eq('+td_num+')').html(sort[key]);
						}
						//$drag.children('tr').eq(key).attr('data-sort', value);
					});
					trs = $drag.children('tr');
				};
				modelUtil.comPost(ajax, $this, params, fn);
			}
		}
	});
	return menu;
});
