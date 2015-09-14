describe('stringView', function() {
	beforeEach(function() {
		var that = this, done = false;
		require(['util/string', 'jqueryCookie'], function(String) {
			that.String = String;
			done = true;
		});
		//等待初始化完成
		waitsFor(function() {
			  return done;
		}, "Create Models");
	});

	afterEach(function() {

	});

	describe('字符串格式化', function() {
	    it('string', function() {
				var str = "my name is {0}";
	    	var actual = this.String.format(str, 'ada');
				expect(actual).toEqual("my name is ada");
	    });
			it('true', function() {
				var str = "true";
				var actual = 'true' == str;
				expect(actual).toEqual(true);

				var str = +"1";
				var actual = 1 === str;
				expect(actual).toEqual(true);

				var str = undefined;
				var actual = str == null;
				expect(actual).toEqual(true);

				//var str = undefined;
				//var actual = str == '';
				//expect(actual).toEqual(true);
			});
	});
	describe('jquery extend', function() {
			it('undefined', function() {
				var defaults = {a:1, b:2};
				var options = $.extend(defaults, undefined);
				expect(options).toEqual(defaults);
				options = $.extend(defaults, {c:3});
				expect(options).toEqual({a:1, b:2, c:3});
			});
	});
});
