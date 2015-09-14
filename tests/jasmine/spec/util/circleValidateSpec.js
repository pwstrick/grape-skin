describe('circleValidate', function() {
	beforeEach(function() {
		var that = this, done = false;
		require(['util/circleValidate'], function(circleValidate) {
			that.circleValidate = circleValidate;
			done = true;
		});
		//等待初始化完成
		waitsFor(function() {
			  return done;
		}, "circleValidate");
	});

	afterEach(function() {
		
	});
	
	describe('checkTitle', function() {
	    it('123', function() {
			var json = '123';
	    	var actual = this.circleValidate.checkTitle(json);
			expect(actual).toEqual('');
	    });
		it("空", function() {
			var json = '';
	    	var actual = this.circleValidate.checkTitle(json);
			expect(actual).toEqual('请输入圈子名称');
	    });
	});
	describe('checkPlate', function() {
	    it('parent', function() {
			var parent = 'xx';
			var child = '123';
	    	var actual = this.circleValidate.checkPlate(parent, child);
			expect(actual).toEqual('请选择类型');
	    });
		// it('child', function() {
			// var parent = '123';
			// var child = 'null';
	    	// var actual = this.circleValidate.checkPlate(parent, child);
			// expect(actual).toEqual('请选择讨论区');
	    // });
	});
	describe('checkDes', function() {
	    it("空", function() {
			var des = '';
	    	var actual = this.circleValidate.checkDes(des);
			expect(actual).toEqual('');
			var des = '123';
	    	var actual = this.circleValidate.checkDes(des);
			expect(actual).toEqual('');
	    });
		it("字数", function() {
			var des = '中文介绍中文介绍中文介绍中文介绍';
	    	var actual = this.circleValidate.checkDes(des);
			expect(actual).toEqual('');
	    });
	});
	describe('checkApplyRemark', function() {
	    it("空", function() {
			var des = '';
	    	var actual = this.circleValidate.checkApplyRemark(des);
			expect(actual).toEqual('');
			var des = '123';
	    	var actual = this.circleValidate.checkApplyRemark(des);
			expect(actual).toEqual('');
	    });
		it("字数", function() {
			var des = '中文介绍中文介绍中文中文介绍中文介绍中文中文介绍中文介绍中文中文介绍中文介绍中文中文介绍中文介绍中文介绍中文介绍';
	    	var actual = this.circleValidate.checkApplyRemark(des);
			expect(actual).toEqual('圈子申请备注字数不能超过50');
	    });
	});
	describe('checkRefuseRemark', function() {
	    it("空", function() {
			var des = '';
	    	var actual = this.circleValidate.checkRefuseRemark(des);
			expect(actual).toEqual('');
			var des = '123';
	    	var actual = this.circleValidate.checkRefuseRemark(des);
			expect(actual).toEqual('');
	    });
		it("字数", function() {
			var des = '中文介绍中文介绍中文中文介绍中文介绍中文中文介绍中文介绍中文中文介绍中文介绍中文中文介绍中文介绍中文介绍中文介绍';
	    	var actual = this.circleValidate.checkRefuseRemark(des);
			expect(actual).toEqual('拒绝理由字数不能超过50');
	    });
	});
});