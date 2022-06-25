'use strict';
/**
 * update 2022.04.10 cighsen02
*/

$(function () {
	/**
  * 新增 js 处理屏幕变化
  */
	/**
  * 判断是手机端还是pc端
  */
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	/**
  * 判断 ie 浏览器
  */
	function IEVersion() {
		var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
		var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
		var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
		var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
		if (isIE) {
			var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
			reIE.test(userAgent);
			var fIEVersion = parseFloat(RegExp["$1"]);
			if (fIEVersion == 7) {
				return 7;
			} else if (fIEVersion == 8) {
				return 8;
			} else if (fIEVersion == 9) {
				return 9;
			} else if (fIEVersion == 10) {
				return 10;
			} else {
				return 6; //IE版本<=7
			}
		} else if (isEdge) {
			return 'edge'; //edge
		} else if (isIE11) {
			return 11; //IE11
		} else {
			return -1; //不是ie浏览器
		}
	}
	var docWidth = 0;
	var oTop = 150; //默认上边距离

	function changeMargin() {
		//获取网页可见区域宽度
		docWidth = $("html").width();
		oTop = docWidth >= 1200 ? 150 : 300; //默认上边距离
		if (docWidth >= 1221) {
			$(".left-content-box").removeClass("left-content-ie").addClass("left-content-ia");
			$(".right-content-box").removeClass("right-content-ia right-content-ib right-content-ic right-content-id").addClass("right-content-ie");
		} else if (docWidth < 1221 && docWidth >= 1013) {
			$(".left-content-box").removeClass("left-content-ie").addClass("left-content-ia");
			$(".right-content-box").removeClass("right-content-ie right-content-ib right-content-ic right-content-id").addClass("right-content-ia");
		} else if (docWidth < 1013 && docWidth >= 992) {
			$(".left-content-box").removeClass("left-content-ie").addClass("left-content-ia");
			$(".right-content-box").removeClass("right-content-ie right-content-ia right-content-ic right-content-ib").addClass("right-content-id");
		} else if (docWidth < 992 && docWidth >= 790) {
			$(".left-content-box").removeClass("left-content-ie").addClass("left-content-ia");
			$(".right-content-box").removeClass("right-content-ie right-content-ia right-content-ic right-content-id").addClass("right-content-ib");
		} else if (docWidth < 790) {
			$(".left-content-box").addClass("left-content-ie");
			$(".right-content-box").removeClass("right-content-ie right-content-ia right-content-ib right-content-id").addClass("right-content-ic");
		}
	}
	if (!!window.ActiveXObject || "ActiveXObject" in window) {
		if (IEVersion() >= 10) {
			$(".content-box").css("display", "block");
		} else {
			$(".content-box").css("display", "flex");
		}
		//加载页面时执行一次
		changeMargin();
		//监听浏览器宽度的改变
		window.onresize = function () {
			changeMargin();
		};
		if (!isAndroid && !isiOS) {
		//go to pc
		
		/**
        * 当页面滚动到一定距离固定住右侧列表栏
        */
			$(window).scroll(function () {
				var scrollTop = $(this).scrollTop();
				var scrollHeight = $(document).height();
				var windowHeight = $(this).height();
				if (scrollTop > oTop && scrollTop + windowHeight < scrollHeight - 150) {
					$(".right-content-box").removeClass("fixed2 right-content-ie right-content-ia right-content-ib right-content-ic right-content-id").addClass("fixed1");
				} else if (scrollTop + windowHeight >= scrollHeight - 150) {
					//滚动到底部
					$(".right-content-box").removeClass("fixed1 right-content-ie right-content-ia right-content-ib right-content-ic right-content-id").addClass("fixed2");
				} else {
					if (docWidth >= 1221) {
						$(".right-content-box").removeClass("fixed1 fixed2 right-content-ia right-content-ib right-content-ic right-content-id").addClass("right-content-ie");
					} else if (docWidth < 1221 && docWidth >= 1013) {
						$(".right-content-box").removeClass("fixed1 fixed2 right-content-ie right-content-ib right-content-ic right-content-id").addClass("right-content-ia");
					} else if (docWidth < 1013 && docWidth >= 992) {
						$(".right-content-box").removeClass("fixed1 fixed2 right-content-ia right-content-ie right-content-ic right-content-id").addClass("right-content-ib");
					} else if (docWidth < 992 && docWidth >= 790) {
						$(".right-content-box").removeClass("fixed1 fixed2 right-content-ia right-content-ib right-content-ie right-content-id").addClass("right-content-ic");
					} else if (docWidth < 790) {
						$(".right-content-box").removeClass("fixed1 fixed2 right-content-ia right-content-ib right-content-ic right-content-ie").addClass("right-content-id");
					}
				}
			});
		}
	} else {
		if (!isAndroid && !isiOS) {
			//go to pc
			/**
            * 当页面滚动到一定距离固定住右侧列表栏
            */
			var oTop1 = $("#content").offset().top; //默认上边距离
			$(window).scroll(function () {
				var scrollTop = $(this).scrollTop();
				var scrollHeight = $(document).height();
				var windowHeight = $(this).height();
				if (scrollTop > oTop1 && scrollTop + windowHeight < scrollHeight - 150) {
					$(".right-content-box").removeClass("fixed2").addClass("fixed1");
				} else if (scrollTop + windowHeight >= scrollHeight - 150) {
					//滚动到底部
					$(".right-content-box").removeClass("fixed1").addClass("fixed2");
				} else {
					$(".right-content").removeClass("fixed1 fixed2");
				}
			});
		}
	}
	// 2019/10/16显示/隐藏
	$('.jhcbtn').click(function (e) {
		$(this).prev("div").toggleClass('jhcbk');
		if ($(this).html() != '收起↑') {
			$(this).html("收起↑");
		} else {
			$(this).html("展开阅读全文<span></span>");
		}
	});
});

$(function () {

	// url参数解析
	function getUrlkey(url) {
		var params = {};
		var urls = url.split("?");
		var arr = urls[1].split("&");
		for (var i = 0, l = arr.length; i < l; i++) {
			var a = arr[i].split("=");
			params[a[0]] = a[1];
		}
		return params;
	}

	var info = getUrlkey($(".fava_doc>a").attr("href"));
	var unauthorized = "您未获得权限，请先支付",
	    copyDisable = true,
	    title = info.title || document.title.split("-")[0],
	    classid = info.classid || window.classid,
	    id = info.id || window.id,
	    buyid = 8,
	    //购买组
	    ddid = null,
	    t = null;

	var orders = {
		//手机
		0: {
			classid: classid,
			id: id,
			total_fee: 4.99,
			gfen: 10,
			description: '复制服务'
		},
		//pc
		1: {
			classid: classid,
			id: id,
			total_fee: 7.99,
			gfen: 10,
			description: '复制&下载服务'
		},
		//会员
		2: {
			classid: classid,
			id: id,
			total_fee: 69,
			description: '会员购买',
			buyid: buyid
		}
	};
	
	/**
	 * 判断是否禁用cookies检测
	*/
	function cookieEnable()
    {
    	var result=false;
    	
    	if(navigator.cookiesEnabled) return true;
    
    	document.cookie = "testcookie=yes;";
    
    	var cookieSet = document.cookie;
    
    	if (cookieSet.indexOf("testcookie=yes") > -1) result = true;
    
    	 document.cookie = "";
    
    	return result;
    }

	/**
  * @desc  函数防抖---“立即执行版本” 和 “非立即执行版本” 的组合版本
  * @param  func 需要执行的函数
  * @param  wait 延迟执行时间（毫秒）
  * @param  immediate---true 表立即执行，false 表非立即执行
  **/
	function debounce(func, wait, immediate) {
		var timer = null;

		return function () {
			var args = arguments,
			    that = this;

			if (timer) clearTimeout(timer);
			if (immediate) {
				var callNow = !timer;
				timer = setTimeout(function () {
					timer = null;
				}, wait);
				if (callNow) func.apply(that, args);
			} else {
				timer = setTimeout(function () {
					func.apply(that, args);
				}, wait);
			}
		};
	}

	function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		return r === null ? '' : unescape(r[2]);
	}

	function setCookie(name, value) {
		var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;

		var exp = new Date();
		exp.setTime(exp.getTime() + time * 60 * 1000);
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ';path=/';
	}

	function getCookie(name) {

		var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"),
		    arr = null;
		if (arr = document.cookie.match(reg)) {

			return unescape(arr[2]);
		}

		return null;
	}

	function getPayType() {

		var ua = navigator.userAgent.toLowerCase(),
		    isWeixin = ua.indexOf('micromessenger') != -1,
		    isAndroid = ua.indexOf('android') != -1,
		    isIos = ua.indexOf('iphone') != -1 || ua.indexOf('ipad') != -1,
		    paytype = 'native'; //支付类型

		//自动选择支付方式
		if (isWeixin && (isAndroid || isIos)) {
			//公众号支付
			paytype = 'jsapi';
		} else if (!isWeixin && (isAndroid || isIos)) {
			//H5支付
			paytype = 'mweb';
		}

		return paytype;
	}

	//弹窗
	function showAlert(el, html) {

		//显示, 不进行二次渲染
		if ('' === el.html()) {

			el.html(html).css('display', 'block');
		} else {

			el.show();
		}
	}

	function copy(func, wait) {
		var timer = null;
		return function (event) {

			if (!timer) {

				//禁止true, 可以复制false			
				if (!func.apply(this)) return true;
			} else {
				clearTimeout(timer);
			}
			timer = setTimeout(function () {
				timer = null;
			}, wait);

			//是否有Event, 阻止冒泡
			event = event || window.event;
			event.preventDefault ? event.preventDefault() : event.returnValue = false;
			if (window.clipboardData) {

				window.clipboardData.clearData();
				window.clipboardData.setData("Text", unauthorized);
			} else {

				event.clipboardData.setData("text", unauthorized);
			}
		};
	}

	function alertstatus() {

		$(".marks").hide();
		if (0 === $(".my_wxpay").length) {

			$("body").append('<div class="my_wxpay"></div>');

			var success = '<div class="wx_pic_img">';
			success += '	<div class="wx_top"><span>欢迎使用微信支付</span></div>';
			success += '	<div class="claos" data-alert="my_wxpay"></div>';
			success += '	<div class="payqr_success_box">';
			success += '		<div class="hc" style="display: block;"><img src="/skin/default/images/wxzhifu_load.gif"></div>';
			success += '		<p style="color: #38AD3A;">支付中，请稍后！</p>';
			success += '	</div>';
			success += '</div>';

			showAlert($(".my_wxpay"), success);
		} else {

			$(".my_wxpay").show();
		}
	}

	//查单
	function paystatus() {
		clearTimeout(t);
		t = setTimeout(function () {

			if (ddid) {
				$.get("/api/v1/?act=query&transaction_id=" + ddid + "&t=" + new Date().getTime(), function (res) {
					var code = res.code,
					    data = res.data;

					if (0 === code) {

						//显示支付中到支付成功
						if ('native' === getPayType()) {

							alertstatus();
							//清除订单号cookies paytype + "-t-" + classid + '-' + id
						  //  setCookie("native-t-" + classid + '-' + id, '', -100);
						}

						//解除禁止
						copyDisable = false;
						clearInterval(t);
						$(".marks").hide();

						var h = '<div class="payqr_success_text"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1629"><path d="M511.993344 0.002048C229.260838 0.002048 0 229.261862 0 511.998464c0 282.732506 229.259814 511.990272 511.993344 511.990272C794.73097 1023.987712 1023.988736 794.73097 1023.988736 511.998464c0-282.736602-229.257766-511.996416-511.995392-511.996416zM788.582942 397.083376L475.699087 709.96723C464.321548 721.341697 449.189043 727.145665 434.1702 727.145665c-15.018843 0-30.036662-5.687233-41.527863-17.177411l-157.23859-157.241662c-22.982403-22.865668-22.982403-60.072299 0-83.054702 22.982403-22.982403 60.074347-22.86874 83.05675 0l115.823366 115.710727 271.352919-271.357015c22.871812-22.86874 60.074347-22.86874 83.05675 0 22.871812 22.983427 22.871812 60.189034-0.11059 83.057774z" fill="" p-id="1630"></path></svg><span class="text">支付成功</span>';
						h += '	<span class="text small">' + (data && data.username ? '已获得365天复制所有文章, 进入<a href="/member/cp/" target="_blank">会员中心</a>查看' : '已获得该文章七天复制权限') + '</span>';
						h += data && data.username ? '<span class="text small">用户名：' + data.username + '; 密码：' + data.password + '</span>' : '';
						h += '	<button class="btn">确定</button>';
						h += '</div>';
						$(".my_wxpay").find(".payqr_success_box").html(h);
						$(".my_wxpay").show();
						
						//清除订单号cookies paytype + "-t-" + classid + '-' + id
			         //   setCookie(getPayType() + "-t-" + classid + '-' + id, '', -100);
					}
				});
			}
			paystatus();
		}, 3000);
	}

	function filter(str) {
		// 特殊字符转义
		str += ''; // 隐式转换
		str = str.replace(/%/g, '%25');
		str = str.replace(/\+/g, '%2B');
		str = str.replace(/ /g, '%20');
		str = str.replace(/\//g, '%2F');
		str = str.replace(/\?/g, '%3F');
		str = str.replace(/&/g, '%26');
		str = str.replace(/\=/g, '%3D');
		str = str.replace(/#/g, '%23');
		return str;
	}

	function formateObjToParamStr(obj) {
		var data = [];
		for (var attr in obj) {
			data.push(attr + '=' + filter(obj[attr]));
		}
		return data.join('&');
	};

	function getOrderParams(paytype) {
		var groupid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		var params = orders[groupid] || {};
		if (2 === groupid) {
			//buyid
			if (getCookie(paytype + "-t-" + buyid)) params.transaction_id = getCookie(paytype + "-t-" + buyid); //旧订单
		} else {
			if (getCookie(paytype + "-t-" + classid + '-' + id)) params.transaction_id = getCookie(paytype + "-t-" + classid + '-' + id); //旧订单
		}
		//如果url有订单号优先处理
		if (getQueryString("transaction_id")) params.transaction_id = getQueryString("transaction_id");

		return params;
	}

	//下单
	function order(el) {
		//支付组
		var groupid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		//发起下单
		var paytype = getPayType();

		//PC端判断
		if (2 !== groupid) {

			groupid = 'native' === paytype ? 1 : 0;
		}

		var params = getOrderParams(paytype, groupid),
		img = el.find("img");

		//公众号支付
		if ('jsapi' === paytype) {

			var url = 'https://pcjsapizf.docdocx.com/openid?appid=510049525455&callback_url=' + encodeURIComponent('https://www.xiexiebang.com/api/v1/?act=pay&paytype=jsapi&' + formateObjToParamStr(params)) + '&t=' + new Date().getTime();

			img.attr("src", "/skin/default/images/zhifu_hand.png");
			el.find(".iconfont span").html("点此微信支付");
			el.find(".paybox-money span").html(params.total_fee);
			img.parent().wrap('<a href="' + url + '"></a>');
		}
		//h5支付
		else if ('mweb' === paytype) {

			img.attr("src", "/skin/default/images/zhifu_hand.png");
		    el.find(".iconfont span").html("点此微信支付");
		    el.find(".paybox-money span").html(params.total_fee);
		    img.parent().wrap('<a href="/api/v1/?act=pay&paytype=mweb&' + formateObjToParamStr(params) + '&t=' + new Date().getTime() + '"></a>');
			
		}
		//二维码支付
		else {

			//下单
			$.post('/api/v1/?act=pay&paytype=' + paytype + '&t=' + new Date().getTime(), params, function (res) {
				var code = res.code,
				    data = res.data;

				if (0 === code) {

					ddid = data.transaction_id;
					//订单号不同时，设置
					if (!params.transaction_id || data.transaction_id !== params.transaction_id) {

						if (groupid && params.buyid) {

							setCookie(paytype + "-t-" + params.buyid, data.transaction_id, 24);
						} else {

							setCookie(paytype + "-t-" + params.classid + '-' + params.id, data.transaction_id, 24);
						}
					};

					img.attr("src", data.qrcode_url);
					el.find(".sm span").html(data.total);

					//查询付款状态
					paystatus();
				} else if (9 === code) {

					// $(".marks").hide();
					alert("您已经下支付过了，如果不能复制下载，联系客服");
				}
			});
		}
	}

	//是否支付
	function zhifu() {
        
        var paytype = getPayType(),
        params = { classid: classid, id: id };
        if (getCookie(paytype + "-t-" + classid + '-' + id)) params.transaction_id = getCookie(paytype + "-t-" + classid + '-' + id); //旧订单
        //如果url有订单号优先处理
		if (getQueryString("transaction_id")) params.transaction_id = getQueryString("transaction_id");
        
		$.ajax({
			url: '/api/v1/?act=copy',
			method: "POST",
			data: params,
			dataType: "json",
			cache: false,
			async: false

			//返回状态200
		}).done(function (res) {
			var code = res.code,
			    data = res.data,
			    message = res.message;


			if (0 === code) {
                
                //有积分，扣积分确定窗体(未取得权限，足够点数，进入扣点操作)
				if (data && data.userid) {

					//没有时创div
					if (0 === $(".my_continue").length) {

						var mycontinue = '<div class="my_continue" style="display: block;">';
						mycontinue += '	<div class="wx_pic_img">';
						mycontinue += '	    <div class="wx_top"><span>确定购买信息</span></div>';
						mycontinue += '		<div class="claos" data-alert="my_wxpay"></div>';
						mycontinue += '		<div class="payqr_continue_box">';
						mycontinue += '		    <div class="payqr_continue_text">';
						mycontinue += '		        <p class="text">您有<span>' + data.userfen + '</span>积分</p>';
						mycontinue += '			    <p class="text small">复制和下载该文章需要扣除10积分</p>';
						mycontinue += '			    <button class="btn">确定</button>';
						mycontinue += '			</div>';
						mycontinue += '		</div>';
						mycontinue += '		<div class="paybox-customer-service">联系客服</div>';
						mycontinue += '	</div>';
						mycontinue += '</div>';

						$("body").append('<div class="my_continue"></div>');
						showAlert($(".my_continue"), mycontinue);
					} else {

						$('.payqr_continue_text span').html(data.userfen);
						$(".my_continue").show();
					}
				}
				//有记录，重获权限
				else {

				    copyDisable = false;	
				}
			}
			//未登陆未支付
			else if (1 === code || 4 === code || 5 === code) {

					//没有时创div
					if (0 === $(".marks").length) {

						var marks = '<div class="copy-alert alert-bounceIn">';
						marks += '	<div class="claos" data-alert="marks"></div>';
						marks += '	<div class="paybox paybox1">';
						marks += '		<h2 class="paybox-title">付费即可复制' + ('native' === paytype ? '或下载' : '') + '</h2>';
						marks += '		<p class="paybox-art">' + title + '</p>';
						marks += '		<div class="paybox-img">';
						marks += '			<img src="/skin/default/images/wxzhifu_load.gif">';
						marks += '			<div class="iconfont"><span style="font-size:16px;">扫一扫微信支付</span></div><div class="paybox-money"><h3>限时特价:<span>7.99</span>元</h3><p>原价:10元</p></div>';
						marks += '		</div>';
						marks += '		<div class="paybox-bottom">点此切换到包年VIP会员</div>';
						marks += '		<div class="paybox-customer-service">联系客服</div>';
						marks += '	</div>';
						marks += '	<div class="paybox paybox2" style="display: none;">';
						marks += '		<h2 class="paybox-title">包年付费购买VIP</h2>';
						marks += '		<p class="paybox-art">付费后赠送一个VIP会员，365天复制所有文章</p>';
						marks += '		<div class="paybox-img">';
						marks += ' 			<img src="/skin/default/images/wxzhifu_load.gif">';
						marks += '			<div class="iconfont"><span style="font-size:16px;">扫一扫微信支付</span></div><div class="paybox-money"><h3>限时特价:<span>69</span>元</h3><p>原价:198元</p></div>';
						marks += '		</div>';
						marks += '		<div class="paybox-bottom">点此切换到单次付费</div>';
						marks += '		<div class="paybox-service"><span class="paybox-customer-service1">会员登录</span><span class="paybox-customer-service2">会员注册</span></div>';
						marks += '	</div>';
						marks += '</div>';

						$("body").append('<div class="marks"></div>');
						showAlert($(".marks"), marks);
						//点击单篇
						$(".paybox2 .paybox-bottom").trigger('click');
					} else {

						$(".marks").show();
						if ('native' === paytype) {
							paystatus();
						}
					}
				} else {

					alert(message);
				}

			//请求失败
		}).fail(function (jqXHR, textStatus) {

			alert('未知错误，联系管理员');
		});

		return copyDisable;
	}

	//单个购买
	$(document).on("click", ".paybox2 .paybox-bottom", function () {

		var paybox1 = $(".paybox1"),
		    paybox2 = $(".paybox2");
		paybox1.show();
		paybox2.hide();
		debounce(order(paybox1), 1500, true);
	});

	//包年
	$(document).on("click", ".paybox1 .paybox-bottom", function () {

		var paybox1 = $(".paybox2"),
		    paybox2 = $(".paybox1");
		paybox1.show();
		paybox2.hide();
		debounce(order(paybox1, 2), 1500, true);
	});

	//积分支付确认
	$(document).on('click', '.my_continue .payqr_continue_box button', function () {

		//支付积分/扣点
		$.post('/api/v1/?act=deduct&t=' + new Date().getTime(), { classid: classid, id: id }, function (res) {
			var code = res.code,
			    data = res.data,
			    message = res.message;

			//直接复制或下载
			if (0 === code) {

				copyDisable = false;
				$(".my_continue").hide();
			} else {

				alert(message);
			}
		});
	});

	//my_wxpay
	$(document).on('click', '.my_continue .claos', function () {

		$(".my_continue").hide();
		copyDisable = true;
	});

	//关闭客服框
	$(document).on('click', '.customer_service_marks .claos', function () {

		$(".customer_service_marks").hide();

		if (copyDisable) {

			$(".marks").show();
			if (getQueryString("transaction_id") && 'native' !== getPayType()) {
				alertstatus();
			}
			paystatus();
		}
	});

	//关闭选择支付类型
	$(document).on('click', '.marks .claos', function () {

		$(".marks").hide();
		copyDisable = true;
		clearTimeout(t);
	});

	//my_wxpay
	$(document).on('click', '.my_wxpay .claos', function () {

		$(".my_wxpay").hide();
		clearTimeout(t);
	});

	//关闭成功框
	$(document).on('click', '.my_wxpay .payqr_success_box button', function () {

		$(".my_wxpay").hide();
	});

	//联系客服
	$(document).on('click', '.marks .paybox-customer-service', function () {

		if (0 === $(".customer_service_marks").length) {

			$("body").append('<div class="customer_service_marks"></div>');

			var html = '<div class="customer_service">';
			html += '	<div class="claos" data-alert="customer_service_marks"></div>';
			html += '	<div class="phone-pic"><img src="/skin/default/images/kfwx.jpg"><span>扫码添加客服微信咨询</span></div>';
			html += '	<div class="phone-art"><span style="color:#ff6600;font-size:14px;">付费成功后，若无法复制通过以下方法重获权限</span></div>';
			html += '	<div class="input">';
			html += '		<label>商户单号：</label>';
			html += '		<input type="text" name="transaction_id" value="" />';
			html += '		<button type="button">提交</button>';
			html += '	</div>';
			html += '	<div class="phone-art"><span style="color:#ff6600;font-size:14px;">方法：微信>钱包>账单>商户单号(即订单号)</span></div>';
			html += '	<div class="phone-art"><span>在线时间：周一至周五 9:00-12:00 13:00-17:00</span></div>';
			html += '</div>';

			showAlert($(".customer_service_marks"), html);
		} else {

			$(".customer_service_marks").show();
		}
		$(".marks").hide();
		copyDisable = true;
		clearTimeout(t);
	});

	function query(transaction_id) {

		if (!cookieEnable()) {
		    
		    alert("您当前已经禁用cookies了，禁用将影响复制与下载功能");
		    return;
		}
		
		if (!transaction_id) {

			alert("订单号不能为空");
			return;
		};

		$.get("/api/v1/?act=rt&classid=" + classid + "&id=" + id + "&transaction_id=" + transaction_id, function (res) {
			var code = res.code,
			    data = res.data;

			if (0 === code) {

				copyDisable = false;
				if (data && data.username) {

					alert("用户名：" + data.username + "; 用户密码：" + data.password);
				}
				else {
				    
				    alert("已重新获得权限，可以复制和下载了");
				}
			}
			else {

				alert("订单：" + transaction_id + "不存在");
			}
		});
	}

	//自主查单，重获权限
	$(document).on('click', '.customer_service_marks button', function () {
		
		debounce(query($(".customer_service_marks input").val()), 1500, true);
	});

	//会员登录
	$(document).on('click', '.marks .paybox-customer-service1', function () {

		window.location.href = '/e/member/login/';
	});

	//会员注册
	$(document).on('click', '.marks .paybox-customer-service2', function () {

		window.location.href = '/e/member/register/';
	});
	
	function download() {

		if (zhifu()) return;

		var tpid = $(".download_card").attr("tpid");
		$(this).attr('href', "/e/extend/jhcword/index.php?id=" + id + "&classid=" + classid + "&tpid=" + tpid);
	}

	$(".jhcdown").on('click', debounce(download, 1500, true));

	if (window.addEventListener) {

		window.addEventListener("copy", copy(zhifu, 800), false);
	} else {

		window.attachEvent("oncopy", copy(zhifu, 800));
	}
	
	//jsapi 监听支付状态
	if (window.addEventListener) {

		window.addEventListener("load", function () {

			if ('native' !== getPayType() && getQueryString("transaction_id")) {

				ddid = getQueryString("transaction_id");
				alertstatus();
				paystatus();
			}
		}, false);
	} else {
		window.attachEvent("onload", function () {

			if ('native' !== getPayType() && getQueryString("transaction_id")) {

				ddid = getQueryString("transaction_id");
				alertstatus();
				paystatus();
			}
		});
	}

	var _switch = false,
	time = null;
	//复制文本时触发的兼容性似乎相对长按事件要低
	window.ontouchstart = function (e) {
		time = setTimeout(function () {

			longPress();
		}, 400);
	};
	window.ontouchmove = function (e) {

		clearTimeout(time);
		_switch = true;
	};
	window.ontouchend = function (e) {

		clearTimeout(time);
		if (_switch) {

			return _switch = false;
		} 
		else {
			//触摸点击事件执行
		}
	};

	//手机端
	function longPress() {

		_switch = false;
		zhifu();
	}
});