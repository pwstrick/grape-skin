describe('iscrollView', function() {
	beforeEach(function() {
		require(['libs/iscroll/iscroll']);
	});

	afterEach(function() {
		
	});
	
	describe('arguments测试', function() {
	    it('输入空值', function() {
	    	var id = _setIscroll();
	    	expect(id).toEqual('wrapper');
	    });
	    it('输入内容', function() {
	    	var id = _setIscroll('mine');
	    	expect(id).toEqual('mine');
	    });
	    function _setIscroll() {
	    	id = arguments[0] || 'wrapper';
	    	return id;
	    }
	});
});