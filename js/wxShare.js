wx.config({
		    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		    appId: 'wxb4a25f9e39926b54', // 必填，公众号的唯一标识
		    timestamp:'1428560985000', // 必填，生成签名的时间戳
		    nonceStr: '1428560985000', // 必填，生成签名的随机串
		    signature: ST,// 必填，签名，见附录1
		    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		});
wx.ready(function(){
	//朋友圈
	wx.onMenuShareTimeline({
	    title:sTitle, // 分享标题
	    link:sLink, // 分享链接
	    desc:sDesc,
	    imgUrl:imgUrl, // 分享图标
	    success: function () { 
	        // 用户确认分享后执行的回调函数
	    },
	    cancel: function () { 
	        // 用户取消分享后执行的回调函数
	    }
	});
	//朋友
	wx.onMenuShareAppMessage({
	    title:sTitle, // 分享标题
	    desc:sDesc, // 分享描述
	    link:sLink, // 分享链接
	    imgUrl:imgUrl, // 分享图标
	    type: '', // 分享类型,music、video或link，不填默认为link
	    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
	    success: function () { 
	        // 用户确认分享后执行的回调函数
	        //alert('成功');
	    },
	    cancel: function () { 
	        // 用户取消分享后执行的回调函数
	        //alert('取消');
	    }
	});
	//qq
	wx.onMenuShareQQ({
	    title:sTitle, // 分享标题
	    desc:sDesc, // 分享描述
	    link:sLink, // 分享链接
	    imgUrl:imgUrl, // 分享图标
	    success: function () { 
	       // 用户确认分享后执行的回调函数
	    },
	    cancel: function () { 
	       // 用户取消分享后执行的回调函数
	    }
	});
	//weibo
	wx.onMenuShareWeibo({
	    title:sTitle, // 分享标题
	    desc:sDesc, // 分享描述
	    link:sLink, // 分享链接
	    imgUrl:imgUrl, // 分享图标
	    success: function () { 
	       // 用户确认分享后执行的回调函数
	    },
	    cancel: function () { 
	        // 用户取消分享后执行的回调函数
	    }
	});
});