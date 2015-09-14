describe('md5', function() {
	beforeEach(function() {
		var that = this, done = false;
		require(['libs/md5/md5'], function() {
			
			done = true;
		});
		//等待初始化完成
		waitsFor(function() {
			  return done;
		}, "md5");
	});

	afterEach(function() {
		
	});
	
	describe('md5', function() {
	    it('php', function() {
	    	var actual = hex_md5('521060');
			expect(actual).toEqual('c7f443db32fa7957fc9a0156365db92a');
			var actual = hex_md5('748470');
			expect(actual).toEqual('aa869307d169cdffc113208002553022');
	    });
		
	});
});