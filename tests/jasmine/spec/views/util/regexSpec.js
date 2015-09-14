describe('regexView', function() {
	beforeEach(function() {
		var that = this, done = false;
		require(['regexUtil'], function(regexUtil) {
			that.regexUtil = regexUtil;
			done = true;
		});
		//等待初始化完成
		waitsFor(function() {
			  return done;
		}, "");
	});

	afterEach(function() {

	});

	describe('邮箱验证', function() {
	    it('ds@sa.com', function() {
			var str = "ds@qq.com";
	    	var actual = this.regexUtil.checkEmail(str);
			expect(actual).toBe(true);
	    });
		it('ds@sa.tcp', function() {
			var str = "ds@qq.tcp";
	    	var actual = this.regexUtil.checkEmail(str);
			expect(actual).toBe(true);
	    });
		it('dssa.tcp', function() {
			var str = "dssa.tcp";
	    	var actual = this.regexUtil.checkEmail(str);
			expect(actual).toBe(false);
	    });
	});

	describe('时间格式验证', function() {
			it('10:10', function() {
				var str = "10:10";
				var actual = this.regexUtil.isTimeFormat(str);
				expect(actual).toBe(true);;
			});
			it('10:xx', function() {
				var str = "10:xx";
				var actual = this.regexUtil.isTimeFormat(str);
				expect(actual).toBe(false);;
			});
			it('1:1', function() {
				var str = "1:1";
				var actual = this.regexUtil.isTimeFormat(str);
				expect(actual).toBe(true);;
			});
			it('1x:1x', function() {
				var str = "1x:1x";
				var actual = this.regexUtil.isTimeFormat(str);
				expect(actual).toBe(false);;
			});
	});
});
