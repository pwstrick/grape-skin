$(document).ready(function() {
	$('select:not([data-ajax-change=true])').each(function() {
		var $this = $(this);
		var ajax = $this.data('aurl');//ajax请求地址
		var reload = $this.data('reload');
		var prompt = $this.data('prompt');//需要输入不通过理由
		if(ajax) {
			var params = {};
			$.each($this.data(), function(key ,value) {
				if(key == 'select2') {
					return;
				}
				params[key] = value;
			});
			
			$this.change(function() {
				var $this = $(this);
				var currentVal = $this.val();
				
				$.extend(true, params, {value:currentVal});			
				//params['value'] = $(this).val();
				$.post(ajax, params, function(data) {
					var json = eval('('+data+')');
					if(json.result == 1 && reload) {
						setTimeout(function() {
							window.location.reload();
						}, 2000)
					}
					if(currentVal == prompt) {
						var id = json.data.id,
							pajaxUrl = $this.data('purl');
						//弹出一个输入层
						var attrs = {
							title: '请输入理由',
							content: '<textarea id="reason" rows="5" cols="10"/>',
							okValue: '提交',
							ok: function() {
								var reason = $.trim($('#reason').val());
								if(reason.length == 0) {
									alert('请输入理由');
									return;
								}
								$.post(pajaxUrl, {id:id, reason:reason}, function() {
									alert(json.msg);
								});
							}
						};
						dialog(attrs).showModal();
					}else {
						alert(json.msg);
					}
				
				});
			});
		}
		$this.select2();
	});
	
	$('input[type=checkbox],input[type=radio],input[type=file]:not(.uploadify-file)').uniform();
	
	if($('select[name=province]').length > 0) {
		//市与区的联动
		//$('select[name=province]').change(function() {
			//alert(23)
//			$.post('/widget/city', {'city':$(this).val()}, function(data) {
//				var json = (0,eval)('('+data+')');
//				var $district = $('select[name=district]');
//				var $first = $district.find('option:not(:first)');
//				$first.remove();
//				$district.prev().find('.select2-chosen').text($district.find('option:first').text());
//				if(json.data == null || json.data.length == 0) {
//					return;
//				}
//				$.each(json.data, function(key, value) {
//					$district.append('<option value="'+key+'">'+value+'</option>');
//				});
//			});
		//});
	}
});
