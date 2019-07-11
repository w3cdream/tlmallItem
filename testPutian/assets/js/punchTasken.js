//初始化功能
(function(){
    getPunchData().then(function(num){
        postData(num,getTime(),getTime());
    })
    lay('#DATE').on('click', function(e){ 
        laydate.render({
          elem: '#dateSelect'
          ,show: true //直接显示
          ,closeStop: '#DATE' //这里代表的意思是：点击 DATE 所在元素阻止关闭事件冒泡。如果不设定，则无法弹出控件
          ,done:function(value,date,endDate){
            postData(window.num,value,value);
          }
        });
      });
      
    weekTime();
})();
function getPunchData(fn){
    if(!new Promise(function(){})){
        getUserInfo();
        return ;
    }
    return new Promise(function(resolve,reject){
        if (window.yspCheckIn || top.yspCheckIn) {
            var data = yspCheckIn.getLocationUserInfo();
            window.localStorage.userInfo = data;
            data = JSON.parse(data);
            window.num = data.num;
            resolve(data.num);
        } else {
            setupWebViewJavascriptBridge(function(bridge) {
                bridge.callHandler('getUserInfo', function responseCallback(responseData) {
                    window.num = responseData.num;
                    resolve(responseData.num);
                })
            })
        }
    })
}
function getUserInfo() {
    if (window.yspCheckIn || top.yspCheckIn) {
        var data = yspCheckIn.getLocationUserInfo();
        window.localStorage.userInfo = data;
        data = JSON.parse(data);
        postData(data.num,getTime(),getTime());
    } else {
        setupWebViewJavascriptBridge(function(bridge) {
            bridge.callHandler('getUserInfo', function responseCallback(responseData) {
                postData(responseData.num,getTime(),getTime());
            })
        })
    }
};
//获取当前时间
function getTime(){
    var date = new Date();
    var year = date.getFullYear();
    var month = addZreo(date.getMonth()+1);
    var day = addZreo(date.getDate());
    return year+'-'+month+'-'+day;
}
//时间补位
function addZreo(num){
    return num = num<10?'0'+num:num;
}
//当前时间+1 . 查询条件当天+明天为当天数据
function tomrrow(time){
    var date = new Date(time);
    date.setDate(date.getDate()+1);
    var year = date.getFullYear();
    var month = addZreo(date.getMonth()+1);
    var day = addZreo(date.getDate());
    return year+'-'+month+'-'+day;
}
//倒序渲染七天日期
function weekTime(){
    var html = '' , month = '', day = '';
    var date = new Date();
    for(var i=0;i<7;i++){
        month = addZreo(date.getMonth()+1);
        day = addZreo(date.getDate());
        html+= i == 0?'<li class="active">'+month+'-'+day+'</li>':'<li>'+month+'-'+day+'</li>';
        date.setDate(date.getDate()-1);
    }
    document.querySelector('#time').querySelector('ul').innerHTML = html;
}
//选择查询日期
function getdata(){
    if(event.target.tagName == 'UL' || event.target.tagName == 'DIV'){
        return ; 
    }
    var date = new Date();
    var year = date.getFullYear();
    var parentLabel = event.target.parentNode.children;
    for(var i=0;i<parentLabel.length;i++){
        if(parentLabel[i].classList.contains('active')){
            parentLabel[i].classList.remove('active');
        }
    }
    event.target.classList.add('active')
    var currentTime = year+'-'+event.target.textContent;
    postData(window.num,currentTime,currentTime);
}
//返回打卡界面
function toBack(link){
    history.back();
}
//当天打卡记录展示
function postData(id,starTime,endTime){
    var html = '';
    if(id.indexOf('TL') == -1){
        id = 'TL'+id;
    }
    var timeout = 3000;
    endTime = tomrrow(endTime);
    var xhr = new XMLHttpRequest();
    var from = new FormData();
    from.append('keyWord',id);
    from.append('isPush','3');
    from.append('admin','hanxiao');
    from.append('password','Hanxiao@Pttl123');
    from.append('startTime',starTime);
    from.append('endTime',endTime);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status >=200 && xhr.status < 300 || xhr.status == 304){
            var punchData = xhr.response != '' ? JSON.parse(xhr.response):'';
            punchData = punchData.data;
            if(punchData && punchData.length>0){
                for(var i=0;i<punchData.length;i++){
                    var punchTime = punchData[i].times.split(' ')[1];
                    //var punchTime = punchData[i].times;
                    var type = punchData[i].type;
                    var punchError = punchData[i].error == '正常打卡'?'正常':'异常';
                    var punchStatu = punchData[i].error == '正常打卡'?'success':'error';
                    var clientName = punchData[i].prename;
                    var clientAddress = punchData[i].preaddress;
                    var clientLocation = JSON.stringify({'lat':punchData[i].prelatitude,'lng':punchData[i].prelongitude});
                    var currentAddress = punchData[i].address;
                    var currentLocation = JSON.stringify({'lat':punchData[i].latitude,'lng':punchData[i].longitude});
                    var maker = punchData[i].description;
                    html+= '<div id="container">'
                        +'<div id="punchState">'
                            +'<span>'+punchTime+'</span>'
                            +'<span>'+type+'</span>'
                            +'<div>'
                                +'<span class='+punchStatu+'>'+punchError+'</span>'
                            +'</div>'
                        +'</div>'
                        +'<div id="punchAddress">'
                            +'<div class="clientAddress">'
                                +'<div class="basicInfo">'
                                    +'<span class="clientName"  location="'+clientLocation+'">'+clientName+'</span>'
                                    +'<span class="datailedInfo">'+clientAddress+'</span>'
                                +'</div>'
                            +'</div>'
                            +'<div class="currentAddress">'
                                +'<div>'
                                    +'<span class="currentInfo"  location="'+currentLocation+'">'+currentAddress+'</span>'
                                +'</div>'
                            +'</div>'
                        +'</div>'
                        +'<div id="maker">'
                            +'<span>备注</span>'
                            +'<span>'+maker+'</span>'
                        +'</div>'
                    +'</div>';
                }
                document.querySelector('#content').innerHTML = html;
            }else{
                document.querySelector('#content').innerHTML = '<div id="container" class="nullPunch">* 当前日期暂无打卡记录 *</div>';
            } 
        }
    }
    xhr.onerror = function(){
        alert('服务异常!请检查网络连接');
    }
    xhr.ontimeout = function(e){
        alert('请求超时!');
    }
    xhr.open('POST','http://60.247.65.101:8001/admin/getClockInfo');  //测试数据
    xhr.send(from)
}
