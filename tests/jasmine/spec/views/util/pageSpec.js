describe('pageView', function() {
	beforeEach(function() {
		var that = this, done = false;
		require(['pageUtil'], function(page) {
			that.page = page;
			done = true;
		});
		//等待初始化完成
		waitsFor(function() {
			  return done;
		}, "Create util");
	});

	afterEach(function() {
		
	});
	
	describe('分页设置', function() {
	    it('首页', function() {
			var expected = '<span>查询到<b>10</b>条信息，共<b>2</b>页，每页<b>9</b>条</span><span>首页</span><span>上一页</span><span class="cur">1</span><a href="javascript:void(0)" name="2">2</a><a href="javascript:void(0)" name="2">下一页</a><a href="javascript:void(0)" name="2">尾页</a>';
	    	var actual = this.page.setAjaxPage(1, 9, 10, 'javascript:void(0)');
			expect(actual).toEqual(expected);
	    });
		it('上一页', function() {
			var expected = '<span>查询到<b>10</b>条信息，共<b>2</b>页，每页<b>9</b>条</span><a href="javascript:void(0)" name="1">首页</a><a href="javascript:void(0)" name="1">上一页</a><a href="javascript:void(0)" name="1">1</a><span class="cur">2</span><span>下一页</span><span>尾页</span>';
	    	var actual = this.page.setAjaxPage(2, 9, 10, 'javascript:void(0)');
			expect(actual).toEqual(expected);
	    });
		it('第二页', function() {
			var expected = '<span>查询到<b>10</b>条信息，共<b>3</b>页，每页<b>4</b>条</span><a href="javascript:void(0)" name="1">首页</a><a href="javascript:void(0)" name="1">上一页</a><a href="javascript:void(0)" name="1">1</a><span class="cur">2</span><a href="javascript:void(0)" name="3">3</a><a href="javascript:void(0)" name="3">下一页</a><a href="javascript:void(0)" name="3">尾页</a>';
	    	var actual = this.page.setAjaxPage(2, 4, 10, 'javascript:void(0)');
			expect(actual).toEqual(expected);
	    });
	});
	describe('取余计算', function() {
		var remainder = function(pageCount, pageSize) {
			var digit = (pageCount % pageSize > 0) ? (pageCount / pageSize + 1) : (pageCount / pageSize);
			return Math.floor(digit);
		};
	    it('remainder', function() {
			var expected = 5;
	    	var actual = remainder(10, 2);
			expect(actual).toEqual(expected);
			var expected = 4;
	    	var actual = remainder(10, 3);
			expect(actual).toEqual(expected);
			var expected = 0;
	    	var actual = remainder(0, 3);
			expect(actual).toEqual(expected);
	    });
	});
});