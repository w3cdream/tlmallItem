function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
    if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
}
window.onerror = function(msg, url, line) {
    window.LOGINNAME = window.LOGINNAME == '' ? '为获取用户名信息' : window.LOGINNAME;     
    var DATA = {
        'log': {
            'source': '打卡',
            'type': '错误日志',
            'loginName': window.LOGINNAME,
            'email': '',
            'model': '',
            'loginTime': window.LOGINTIME,
            'occurTime': new Date().getTime(),
            'timeUsed': '',
            'failedReason': 'Error:' + msg + ' | Url:' + url + ' | Line:' + line,
            'uploadFailedReason': ''
        }
    }
    if (window.yspCheckIn) {
        window.yspCheckIn.punchSendLog(JSON.stringify(DATA));
    } else { // 是iOS平台
        setupWebViewJavascriptBridge(function(enterplorer) {
            enterplorer.callHandler('punchSendLog', JSON.stringify(DATA), function responseCallback(data) {
                console.log('错误日志录入成功 !')
            });
        });
    }
}
var Client = {
    Log: function(msg, type) {
        var loaginTime = new Date().getTime();
        var DATA = {
            'log': {
                'source': '打卡',
                'type': type,
                'loginName': window.LOGINNAME,
                'email': '',
                'model': '',
                'loginTime': loaginTime,
                'occurTime': new Date().getTime(),
                'timeUsed': '',
                'failedReason': msg,
                'uploadFailedReason': ''
            }
        }
        if (window.yspCheckIn) {
            window.yspCheckIn.sendLog(JSON.stringify(DATA));
        } else { // 是iOS平台
            setupWebViewJavascriptBridge(function(enterplorer) {
                enterplorer.callHandler('punchSendLog', JSON.stringify(DATA), function responseCallback(data) {
                    console.log('错误日志录入成功 !')
                });
            });
        }
    },
    //通知客户端开始调用位置
    locationBegin: function() {
        // 判断是否是window平台，直接给客户端传入信息即可。
        if (window.enterplorer && (window.enterplorer.uwp === 'mobile' || window.enterplorer.uwp === 'desktop')) {}
        // 判断是否是Android平台
        if (window.yspCheckIn) {
            window.yspCheckIn.locationBegin();
        } else { // 是iOS平台
            setupWebViewJavascriptBridge(function(enterplorer) {
                enterplorer.callHandler('locationBegin', function responseCallback() {});
            });
        }
    },
    //返回
    goBack: function() {
        if (window.enterplorer && (window.enterplorer.uwp === 'mobile' || window.enterplorer.uwp === 'desktop')) {}
        //if (window.yspCheckIn) {
        if (window.yspUser && window.yspUser.back) {
            //window.yspCheckIn.signBack();
            window.yspUser.back();
        } else { // 是iOS平台
            setupWebViewJavascriptBridge(function(enterplorer) {
                enterplorer.callHandler('signBack', function responseCallback() {});
            });
        }
    },
    //点击返回关闭当前页面
    closeWindow: function() {
        if (window.enterplorer && (window.enterplorer.uwp === 'mobile' || window.enterplorer.uwp === 'desktop')) {}
        if (window.yspUser && window.yspUser.closeWindow) {
            window.yspUser.closeWindow();
        } else {
            setupWebViewJavascriptBridge(function(enterplorer) {
                enterplorer.callHandler('closeWindow', function responseCallback() {});
            });
        }
    },
    //用h5的方法返回
    back: function() {
        window.history.back();
    },
    //打开新页面
    //调用摄像头
    openCamera: function() {
        if (window.enterplorer && (window.enterplorer.uwp === 'mobile' || window.enterplorer.uwp === 'desktop')) {}
        if (window.yspCheckIn) {
            window.yspCheckIn.openCamera();
        } else { // 是iOS平台
            setupWebViewJavascriptBridge(function(enterplorer) {
                enterplorer.callHandler('openCamera', function responseCallback() {});
            });
        }
    },
    getServerAddress: function(callback) {
        if (window.enterplorer && (window.enterplorer.uwp === 'mobile' || window.enterplorer.uwp === 'desktop')) {}
        if (window.yspCheckIn) {
            return window.yspCheckIn.checkInServerAddress();
        } else { // 是iOS平台
            setupWebViewJavascriptBridge(function(enterplorer) {
                enterplorer.callHandler('checkInServerAddress', function responseCallback() {});
            });
        }
    }
};