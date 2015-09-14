describe('purlView', function() {
	beforeEach(function() {
		var that = this, done = false;
		require(['purl', 'views/libs/purlView'], function(purl, purlView) {
			that.purl = purl;
			that.purlView = purlView;
			done = true;
		});
		//等待初始化完成
		waitsFor(function() {
			  return done;
		}, "Create util");
	});

	afterEach(function() {
		
	});
	
	describe('链接参数测试', function() {
	    it('获取单个参数', function() {
	    	var href = 'http://www.quyou.com/play/play.aspx?id=2818';
			var attrs = this.purl(href).param();
	    	expect(attrs['id']).toEqual('2818');
	    });
		it('拼接链接', function() {
	    	var href = 'http://www.quyou.com/play/play?id=2818&time=2';
			var url = this.purl(href);
			var attrs = url.param();
			var host = url.attr('host');
			var path = url.attr('path');
			var query = [];
			for(var key in attrs) {
				query.push(key + '=' + attrs[key]);
			}
	    	expect('http://' + host + path + "?" + query.join('&')).toEqual(href);
	    });
		it('没有P标签', function() {
	    	var href = 'http://www.quyou.com/play/play.aspx';
			var url = _getPageUrl(this, href);
	    	expect(url).toEqual(href + '?p=1');
	    });
		it('有P标签', function() {
	    	var href = 'http://www.quyou.com/play/play.aspx?p=3';
			var url = _getPageUrl(this, href);
	    	expect(url).toEqual('http://www.quyou.com/play/play.aspx?p=2');
	    });
		it('有P标签和其他标签', function() {
	    	var href = escape('http://www.quyou.com/play/play.aspx?p=3&z=23&xx=pwewe&n=平稳');
			var url = _getPageUrl(this, href);
	    	expect(url).toEqual('http://www.quyou.com/play/play.aspx?p=2&z=23&xx=pwewe&n=%u5E73%u7A33');
	    });
		function _getPageUrl(that, href) {
			var url = that.purl(unescape(href));
			var attrs = url.param();
			var host = url.attr('host');
			var path = url.attr('path');
			var query = [];
			var keys = _.keys(attrs);
			if(!_.contains(keys, 'p')) {
				query.push('p=1');
			}else {
				attrs['p'] = '2';
				for(var key in attrs) {
					query.push(key + '=' + escape(attrs[key]));
				}
			}
			return 'http://' + host + path + "?" + query.join('&');
		}
	});
	
	describe('getParamsValue', function() {
		it('数字', function() {
			var href = encodeURIComponent('http://www.quyou.com/play/play.aspx?p=3&z=23&xx=pwewe&n=平稳');
			var p = this.purlView.getParamsValue('p', href);
			expect(p).toEqual('3');
			expect(p).toNotEqual(3);
		});
		it('中文', function() {
			var href = encodeURIComponent('http://www.quyou.com/play/play.aspx?p=3&z=23&xx=pwewe&n=平稳');
			var n = this.purlView.getParamsValue('n', href);
			expect(n).toEqual('平稳');
		});
		it('不存在', function() {
			var href = encodeURIComponent('http://www.quyou.com/play/play.aspx?p=3&z=23&xx=pwewe&n=平稳');
			var y = this.purlView.getParamsValue('y', href);
			expect(y).toEqual(undefined);
		});
	});
});