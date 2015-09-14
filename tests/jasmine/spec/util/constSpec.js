describe('constUtil', function() {
	beforeEach(function() {
		var that = this, done = false;
		require(['constUtil'], function(constUtil) {
			that.constUtil = constUtil;
			done = true;
		});
		//等待初始化完成
		waitsFor(function() {
			  return done;
		}, "constUtil");
	});

	afterEach(function() {
		
	});
	
	describe('evalStrJson', function() {
	    it('{}', function() {
			var json = '{}';
	    	var actual = this.constUtil.evalStrJson(json);
			var type = typeof actual;
			expect(type).toEqual('object');
	    });
		it('{123:\n123}', function() {
			var json = '{123:"\\n123"}';
	    	var actual = this.constUtil.evalStrJson(json);
			var type = typeof actual;
			expect(type).toEqual('object');
	    });
		it('', function() {
			var json = '';
	    	var actual = this.constUtil.evalStrJson(json);
			var type = typeof actual;
			expect(type).toEqual('object');
	    });
	});
});