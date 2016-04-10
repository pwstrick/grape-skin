define([
    'jquery',
    'dialogView',
    'modelUtil',
    'viewUtil',
    'domReady',
	'gritter',
	'bootstrap_typeahead',
	'bootstrap_dropdown',
	'scrollLoading'
], function ($, dialogView, modelUtil, viewUtil, domReady) {
	var shortcut = {
		allNeed: function() {//都需要的方法
			//this.equalHeight();
			this.setGritter();
			this.sidebarNavigation();
			//this.searchTypeahead();
			viewUtil.placeholder();
			this.asyn();
			//this.editGoBack();
			this.formchange();
			this.menu();
			domReady(function () {
				$('.mask_layer').remove();
			});
		},
		menu: function(){
			$('.menu-tabs').on('click', 'li', function() {
				var $this = $(this);
				var target = $this.data('target');
				$this.siblings().removeClass('active').end().addClass('active');
				$(target).siblings().hide().end().show();
			});
			//标签模式 关闭按钮
			$('.menu-tabs').on('click', 'li>i', function() {
				var $parent = $(this).parent();
				var siblings_num = $parent.siblings().length;
				var target = $parent.data('target');
				
				var prev = $parent.prev();
				var next = $parent.next();
				if(prev.length > 0) {
					prev.click();
				}else if(next.length > 0) {
					next.click();
				}
				if(siblings_num == 0) {
					
				}
				$parent.remove();
				$(target).remove();
				return false;
			});
			//包括按钮与列表页面中的链接
			$('[data-type=iframe],[data-type=aiframe]').click(function() {
				var $this = $(this);
				var parent = window.parent.document;
				var $fluid = $(parent).find('#row_fluid');
				var order = $fluid.children(':last').data('order');
				var $ul = $(parent).find('#breadcrumb').find('ul');
				order++;
				var height = $this.data('height') || 1000;
				
				var filters = ['title', 'href', 'type'];//过滤属性
				var href = $this.data('href') || $this.attr('href');//超链接
				var params = [];
				var datas = $this.data();//自身属性
				$.each(datas, function(key, value) {
					if($.inArray(key, filters) >= 0)
						return;
					params.push(key +'='+ encodeURIComponent(value));
				});
				if($this.data('type') == 'iframe') {
					datas = $('table :checkbox:checked').data() || null;
					//判断是否需要指定某个下拉框
					if($this.data('check') === true) {
						if(!datas) {
							alert($this.data('message') || '请选中一行');
							return;
						}
					}
					if(!!datas) {
						$.each(datas, function(key, value) {
							if($.inArray(key, filters) >= 0)
								return;
							params.push(key +'='+ encodeURIComponent(value));
						});
					}
				}
				
				params = params.join('&');
				if(params.length > 0) {
					if(href.indexOf('?') > -1) {
						href += '&'+params;
					}else {
						href += '?'+params;
					}
				}
				
				var iframe = $('<iframe>').attr({
					"id":"iframe"+order, "data-order":order, "frameborder":0,
					"src":href, "width":"100%", "height":height});
				$fluid.append(iframe);
				var title = $this.data('title');
				var $li = $('<li data-target="#iframe'+order+'">'+title+'<i class="icon-remove"></i></li>');
				$ul.append($li);
				$(parent).find('.menu-tabs>li:last').click();
				//$li.click();
				return false;
			});
//			function setIframeHeight(iframe) {
//              var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
//              
//              if (iframeWin.document.body) {
//              	var height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
//                  iframe.height = height;
//              }
//          };
//          window.onload = function () {
//              setIframeHeight(document.getElementById('iframe1'));
//              setIframeHeight(document.getElementById('iframe2'));
//          };
		},
		formchange: function() {
			var _this = this;
			//HTML5事件 oninput
			$('form[data-type=form]').on('input propertychange', function() {
				_this.editGoBack();
			}).delegate('input:hidden', 'change', function() {
				
			});
		},
		editGoBack: function() {//编辑页面返回上一页
			$edit_go_back = $('a[data-type=edit_go_back]');
			if($edit_go_back.length == 0) {
				return;
			}
			var success = $._data($edit_go_back[0], 'events');//判断是否已经绑定了事件
			if(success === undefined) {
				$edit_go_back.click(function() {
					var $this = $(this);
					var okFun = function() {
						var href = $this.attr('href');
						location.href = href;
					}
					dialogView.confirm('确认离开当前页面吗？未保存的数据将会丢失！', okFun);
					return false;
				});
			}
		},
		asyn: function() {
			$('.asyn').scrollLoading();//异步加载图片
		},
		setGritter: function() {//浮动层
//				$.gritter.add({
//						title:	'Important Unread messages',
//						text:	'You have 12 unread messages.',
//						image: 	'/sites/images/demo/envelope.png',
//						sticky: false
//				});
//				$('#gritter-notify .normal').click(function(){
//						$.gritter.add({
//							title:	'Normal notification',
//							text:	'This is a normal notification',
//							sticky: false
//						});
//				});
//
//				$('#gritter-notify .sticky').click(function(){
//						$.gritter.add({
//							title:	'Sticky notification',
//							text:	'This is a sticky notification',
//							sticky: true
//						});
//				});
//
//				$('#gritter-notify .image').click(function(){
//						var imgsrc = $(this).attr('data-image');
//						$.gritter.add({
//							title:	'Important Unread messages',
//							text:	'You have 12 unread messages.',
//							image: imgsrc,
//							sticky: false
//						});
//				});
		},
		equalHeight: function(target) {
			// find the tallest height in the collection
			// that was passed in (.column)
			target = target || $('.column');
			tallest = 0;
		    target.each(function(){
			    thisHeight = $(this).height();
							//get padding
							//bottom = $(this).css('paddingBottom');
							//bottom = parseInt($(this).css('paddingBottom'), 10)
			    if( thisHeight > tallest)
			       tallest = thisHeight + 40;
		    });

		    // set each items height to use the tallest value found
		    target.each(function(){
		    	$(this).height(tallest);
		    });
		},
		sidebarNavigation: function() {//侧边栏导航特效
			$('.submenu > a').click(function(e) {
				e.preventDefault();
				var submenu = $(this).siblings('ul');
				var li = $(this).parents('li');
				var submenus = $('#sidebar li.submenu ul');
				var submenus_parents = $('#sidebar li.submenu');
				if(li.hasClass('open')) {
					if(($(window).width() > 768) || ($(window).width() < 479)) {
						submenu.slideUp();
					} else {
						submenu.fadeOut(250);
					}
					li.removeClass('open');
				}else {
					if(($(window).width() > 768) || ($(window).width() < 479)) {
						submenus.slideUp();
						submenu.slideDown();
					} else {
						submenus.fadeOut(250);
						submenu.fadeIn(250);
					}
					submenus_parents.removeClass('open');
					li.addClass('open');
				}
			});
			$('.submenu > a').each(function() {
				//计算未读数
				var $label = $(this).find('.label');
				var total;
				if($label.length == 0) {
					total = 0;
				}else {
					total = ~~$.trim($label.html());//类型转换
				}
				$(this).next('ul').find('li>a').each(function() {
					$a_label = $(this).find('.label');
					if($a_label.length > 0) {
						num = ~~$.trim($a_label.html());
						total += num;
					}
				});
				if(total > 0) {
					$(this).append('<span class="label label-important">'+total+'</span>')
				}
			});
			/*var ul = $('#sidebar > ul');
			$('#sidebar > a').click(function(e) {
				e.preventDefault();
				var sidebar = $('#sidebar');
				if(sidebar.hasClass('open')) {
					sidebar.removeClass('open');
					ul.slideUp(250);
				}else {
					sidebar.addClass('open');
					ul.slideDown(250);
				}
			});*/
		},
		searchTypeahead: function() {//搜索框自动补全
			$('#search input[type=text]').typeahead({
					source: [
						{name:'Dashboard'},
						{name:'Form elements'},
						{name:'Common Elements'},
						{name:'Validation'},
						{name:'Wizard'},
						{name:'Buttons'},
						{name:'Icons'},
						{name:'Interface elements'},
						{name:'Support'},
						{name:'Calendar'},
						{name:'Gallery'}
					],
					items: 4,
					display: 'name'
			});
		}
	};
	return shortcut;
});
