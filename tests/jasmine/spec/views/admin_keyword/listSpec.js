describe('adminKeywordListView', function() {
	beforeEach(function() {
		var done = false,
        that = this;
		loadFixtures('keyword/list.html');
		//初始化
		require(['models/admin_keyword/listModel', 'views/admin_keyword/listView', 'mustache'], function(keywordModel, keywordView, Mustache) {
			  that.model = new keywordModel();
			  that.view = new keywordView({model: that.model});
			  that.mustache = Mustache;
			  //$('#sandbox').html(that.view.render().el);
			  done = true;
		});
		//等待初始化完成
		waitsFor(function() {
		  return done;
		});
	});

	afterEach(function() {
		//销毁
		this.view.remove();
	});
	
	describe('init', function() {
		it('should be able to create its application test objects',
		   function() {
			  expect(this.model).toBeDefined();
			  expect(this.view).toBeDefined();
			  expect(this.view.topDialog).toBeDefined();
			  expect(this.view.requestData).toBeDefined();
			  expect(this.view.ddlClass).toBeDefined();
			  expect(this.view.ddlModel).toBeDefined();
			  expect(this.view.ddlType).toBeDefined();
		});
	});
	describe('rendering', function() {
		it("returns the view object", function() {
			expect(this.view.render()).toEqual(this.view);
		});
		it("produces the correct HTML", function() {
			expect(this.view.el).toContainHtml('{{#DataList}}');
		});
		it("when return data", function() {
			_.extend(this.model.defaults, {data:{txt:'婺源'}});
			this.view.initialize();//重新初始化
			this.model.set({data:{ txt:'婺源'}});
			var keywords = {DataList: {"Name":"\u5468\u8fb92","KeywordTypeId":14,"Keywords":[{"Name":"\u5a7a\u6e90"},{"Name":"\u54c8\u5c14\u6ee8"}]}};//返回的信息
			var html = this.mustache.to_html(this.view.template, keywords);//模板应用
			this.view.$('dl').remove();//移除原先关键字列表
			this.view.$el.append(html);
			expect(this.view.render().$el.find('input[type=checkbox]')).toHaveValue("婺源");
			this.view.setKeyWordReference();//选中已选关键字
			expect($('#keywords input[type=checkbox]')).toBeChecked();
		});
	});
	describe('event', function() {
		it("returns selected keywords", function() {
			spyOnEvent('.button_submit', 'click');
			var close = jasmine.createSpy('close');
			var remove = jasmine.createSpy('remove');
			_.extend(this.model.defaults, {
				close: close,
				remove: remove
			});
			$(".button_submit").click();
			expect('click').toHaveBeenTriggeredOn('.button_submit');
			expect(close).toHaveBeenCalled();
			expect(remove).toHaveBeenCalled();
		});
		it("search", function() {
			spyOnEvent('.button_search', 'click');
			var render = jasmine.createSpy('render');
			_.extend(this.view, {
				render: render
			});
			$(".button_search").click();
			expect('click').toHaveBeenTriggeredOn('.button_search');
			expect(render).toHaveBeenCalled();
		});
		it("set selected dropdownlist", function() {
			_.extend(this.model.defaults, {
				data:{pclass:'1', pmodel:'5', ptype:'3', txt:''}
			});
			this.view.initialize();
			this.view.setSelected();
			expect(this.view.ddlClass.val()).toEqual('1');
			expect(this.view.ddlModel.val()).toEqual('5');
			expect(this.view.ddlType.val()).toEqual('3');
		});
		it("get selected values", function() {
			_.extend(this.model.defaults, {
				data:{pclass:'2', pmodel:'6', ptype:'2', txt:''}
			});
			this.view.initialize();
			var select = this.view.getSelectValues();
			expect(select.pclass).toEqual('2');
			expect(select.pmodel).toEqual('6');
			expect(select.ptype).toEqual('2');
			expect(select.operate).toEqual('');
			//this.view.render();
			//this.view.setKeyWordReference();
			//$('#keywords dd input[type=checkbox]')
			//console.log(this.view.render().$el.find('input[type=checkbox]'))
			//$(this.view.el).find('input[type=checkbox]').each(function() {
				//alert($(this).val())
				//console.log($(this).val());
			//});
			//console.log(this.view.$el.html())
			//expect(this.view.render().$el.find('input[type=checkbox]')).toHaveAttr('checked', true);
		});
	});
	describe('util', function() {
		it("undefined and empty", function() {
			var expected = undefined;
			expect(_.isUndefined(expected)).toBe(true);
			expect(_.isEmpty(expected)).toBe(true);
			expect(_.isNull(expected)).toBe(false);
			expect(expected == null).toBe(true);
			
			expected = '';
			expect(_.isUndefined(expected)).toBe(false);
			expect(_.isEmpty(expected)).toBe(true);
			expect(_.isNull(expected)).toBe(false);
			
			expected = {};
			expect(_.isUndefined(expected)).toBe(false);
			expect(_.isEmpty(expected)).toBe(true);
			expect(_.isNull(expected)).toBe(false);
		});
		it("date format", function() {
			var date = new Date('04/18/2011 14:32:08');
			expect(date.toLocaleString()).toEqual('2011年4月18日 14:32:08');
		});
	});
});