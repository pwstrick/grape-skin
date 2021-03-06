define([
	'jquery',
	'modelUtil',
	'select2'
], function ($, modelUtil) {
	var layer ={};
	layer.init = function(province_name) {
		//
		var $province = $('select[name="'+province_name+'"]');
		var province_url = $province.data('changeUrl');
		var params = $province.data();
		
		//初始化省
		$province.find('option:not(:first)').remove();
		var province_value = $province.data('value');//初始化的值
		var fn = function(json) {
			_bind(json, $province);
		};
		modelUtil.comPost(province_url, $province, params, fn).done(function(){
			$province.val(province_value);
			$province.select2();//美化
			_change($city, $province).done(function() {
				$city.val($city.data('value'));
				$city.select2();//美化
				_change($district, $city).done(function() {
					$district.val($district.data('value'));
					$district.select2();//美化
				});
			});			
		});
		$province.on('change', function() {
			_change($city, $(this));
			_change($district, $(this), true);
		});
		
		//初始化市
		var city_name = $province.data('target');
		$city = $('select[name="'+city_name+'"]');
		$city.change(function() {
			_change($district, $(this));
		});
		var city_value = $city.data('value');//初始化的值
		
		//初始化区
		var district_name = $city.data('target');
		$district = $('select[name="'+district_name+'"]');

		var district_value = $district.data('value');//初始化的值
		
//		$('select[data-ajax-change="true"]').select2();
		
		
	};
	function _bind(json, $object) {
		$.each(json.data, function(key, value) {
			$object.append('<option value='+key+'>'+value+'</option>');
		});
	}
	function _change($target, $current, clear) {
		var url = $target.data('changeUrl');
		var params = {};
		$.each($target.data(), function(key, value) {
			if(_.isObject(value))
				return;
			params[key] = value;
		});
		//console.log($target)
		$target.find('option:not(:first)').remove();
		var first_text = $target.find('option:first').text();
		//将span中的内容改成选项一的text
		var $span = $target.next('span').find('.select2-selection__rendered');
		$span.html(first_text).end().attr('title', first_text);
		if(clear == true) {
			//仅仅做清空操作，不做ajax请求 选择省的时候 将市和区清空
			return;
		}
		var fn = function(json) {
			_bind(json, $target);
		};
		params['value'] = $current.val();
//		console.log(params)
		return modelUtil.comPost(url, $current, params, fn);
	}
	return layer;
});