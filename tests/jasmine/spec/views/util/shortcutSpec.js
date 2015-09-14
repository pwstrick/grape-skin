describe('shortcutView', function() {
	beforeEach(function() {
		//require(['libs/iscroll/iscroll']);
	});

	afterEach(function() {
		
	});
	
	describe('空值测试', function() {
	    it('{}', function() {
	    	var actual = {};
			expect(!actual).toEqual(false);
	    });
		it('undefined', function() {
	    	var actual = undefined;
			expect(!actual).toEqual(true);
	    });
		it('null', function() {
	    	var actual = null;
			expect(!actual).toEqual(true);
	    });
		it('0', function() {
	    	var actual = 0;
			expect(!actual).toEqual(true);
	    });
		it('""', function() {
	    	var actual = "";
			expect(!actual).toEqual(true);
	    });
	});
});