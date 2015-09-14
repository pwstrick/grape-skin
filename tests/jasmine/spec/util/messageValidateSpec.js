describe('messageValidate', function() {
	beforeEach(function() {
		var that = this, done = false;
		require(['util/messageValidate'], function(messageValidate) {
			that.messageValidate = messageValidate;
			done = true;
		});
		//等待初始化完成
		waitsFor(function() {
			  return done;
		}, "messageValidate");
	});

	afterEach(function() {
		
	});

	describe('checkPrivateCont', function() {
	    it("空", function() {
			var des = '';
	    	var actual = this.messageValidate.checkPrivateCont(des);
			expect(actual).toEqual('请输入私信内容');
			var des = '123';
	    	var actual = this.messageValidate.checkPrivateCont(des);
			expect(actual).toEqual('');
	    });
		it("字数", function() {
			var des = '中文介绍中文介绍中文中文介绍中文介绍中文中文介绍中文介绍中文中文介绍中文介绍中文中文介绍中文介绍中文介绍中文介绍中文介绍中文介绍中文中文介绍中文介绍中文中文介绍中文介绍中文中文介绍中文介绍中文中文介绍中文介绍中文介绍中文介绍中文介绍中文介绍中文中文介绍中文介绍中文中文介绍中文介绍中文中文介绍中文介绍中文中文介绍中文介绍中文介绍中文介绍中文介绍中文介绍中文中文介绍中文介绍中文中文介绍中文介绍中文中文介绍中文介绍中文中文介绍中文介绍中文介绍中文介绍';
	    	var actual = this.messageValidate.checkPrivateCont(des);
			expect(actual).toEqual('私信内容字数不能超过200');
	    });
	});
});