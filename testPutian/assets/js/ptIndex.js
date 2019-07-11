var DISTANCE = 800,
    userId, localTime, inZone = false,
    email,
    storeSelectLat, storeSelectLng, currentLat, currentLng, attendType, time, encryptData, postEmail;
var num = 1; //时间请求计数器
//初始化数据
$(function() {
    var _sHeight = $("body").height() - $("header").outerHeight() - $("footer").outerHeight();
    $("section").height(_sHeight);
    document.querySelector(".index-map").style.height = _sHeight -
        $(".index-punch").outerHeight() -
        $(".locationGroup").outerHeight() + "px";
    var flag = navigator.userAgent;
    if (flag && flag.indexOf('pt_ysp') > -1) {
        setTime();
        //注册事件
        getUserInfo();
        updateClient();
        //eventRegister();
        //getShopInfo();
        //getMap();
        //调用经纬度地址解析方法
        // mapGetPoint();
        //setIntervalTime();
    } else {
        location.href = "./error.html"
    }
});

function setIntervalTime() {
    setInterval(function() {
        getMap();
        setIntervalTime();
    }, 300000)
}
//返回
$(".callBack").click(function() {
    Client.closeWindow();
});

//获取当前时间
function getNowTime(localTime) {
    //localTime为调用接口中返回的时间    
    var nowDate = localTime;
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth();
    month = month < 10 ? "0" + (month + 1) : (month + 1);
    var dat = nowDate.getDate();
    dat = (dat < 10 ? ("0" + dat) : dat);
    var day = nowDate.getDay();
    var _week = [
        [0, 1, 2, 3, 4, 5, 6],
        ["日", "一", "二", "三", "四", "五", "六"]
    ];
    day = "星期" + _week[1][_week[0].indexOf(day)];
    var hours = nowDate.getHours();
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = nowDate.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var seconds = nowDate.getSeconds();
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var time = hours + ':' + minutes + ':' + seconds;
    var localDate = year + "/" + month + "/" + dat;
    var date = {
        nowDate: nowDate,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        time: time,
        localDate: localDate,
        day: day,

    };
    return date;
};

function servertimeEnd() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
            var param = JSON.parse(xhr.response);
            $('.index-punch').children('.date').text(param.day);
            //显示当前星期
            $('.index-punch').children('.day').text(param.week);
            //显示当前时间并动态化
            $('.index-punch').children('.time').text(param.time);
        }
    }
    xhr.open('GET', 'http://60.247.65.101:8001/clock/getServerTime');
    xhr.send();
}

function setTime() {
    var d = new Date();
    var date = getNowTime(d);
    // alert(JSON.stringify(date));
    var nowTime = 0; //date.nowDate.getTime();
    //显示当前日期
    // $('.index-punch').children('.date').text(date.localDate);
    // //显示当前星期
    // $('.index-punch').children('.day').text(date.day);
    // //显示当前时间并动态化
    // $('.index-punch').children('.time').text(date.time);
    (function servertime() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                var param = JSON.parse(xhr.response);
                $('.index-punch').children('.date').text(param.data.day);
                //显示当前星期
                $('.index-punch').children('.day').text(param.data.week);
                //显示当前时间并动态化
                $('.index-punch').children('.time').text(param.data.time);
                nowTime = param.data.timestamp;
                if (nowTime == NaN) {
                    nowTime = 0;
                }
                if (num == 1) {
                    num++;
                    var timer = setInterval(function() {
                        num = 1; //重置计数器
                        servertime();
                    }, 60000);
                }
                if (!navigator.onLine && timer) {
                    num = 1;
                    clearInterval(timer);
                }
            }
        }
        xhr.open('GET', 'http://60.247.65.101:8001/clock/getServerTime');
        xhr.send();
    })();
    (function activeTime() {
        var updateTime = nowTime + 1000;
        if (nowTime == 0) {
            updateTime = 0;
            nowTime = 0;
        }
        nowTime = updateTime;
        updateTime = new Date(updateTime);
        var newTime = getNowTime(updateTime).time;
        newTime = nowTime == 0 ? '00:00:00' : newTime;
        $('.index-punch').children('time').text(newTime);
        setTimeout(activeTime, 1000)
    })();
    //显示当前农历日期
    var lunaryDay = "农历" + showCal();
    $('.index-punch').children('.lunar-date').text(lunaryDay);
};


//从客户端获取用户信息
function getUserInfo() {
    if (window.yspCheckIn || top.yspCheckIn) {
        var data = yspCheckIn.getLocationUserInfo();
        window.localStorage.userInfo = data;
        data = JSON.parse(data);
        userId = data.UserID;
        email = data.Email;
        window.LOGINNAME = data.patchUser;
        encryptData = data.encryptData; //接口需要的参数
        time = data.time; //接口需要的参数
        if (email != "") {
            getShopInfo(email);
        } else {
            alert('当前用户暂无邮箱！！');
            Client.closeWindow();
            return false;
        }
    } else {
        setupWebViewJavascriptBridge(function(bridge) {
            bridge.callHandler('getUserInfo', function responseCallback(responseData) {
                userId = responseData.UserId;
                email = responseData.Email;
                window.LOGINNAME = responseData.patchUser;
                encryptData = responseData.encryptData; //接口需要的参数
                time = responseData.time; //接口需要的参数
                // if('' != email){
                //     email = email.split('@')[0]+'@putiantaili.com'
                // }
                getShopInfo(email);
            })
        })
    }
};
//ios刷新从客户端获取定位地址及用户信息
window.setLocation = function(location) {
    var currentObj = {};
    currentObj.type = "currentAddr";
    currentObj.selectedLn = parseFloat(location.point.lng);
    currentObj.selectedLa = parseFloat(location.point.lat);
    getMap(currentObj);
    setCurrent(location.address);
};
//将经纬度解析成地址


//获取经纬度
function mapGetPoint() {
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            alert('您的位置：' + r.point.lng + ',' + r.point.lat);
            var mapPoint = new BMap.Point(r.point.lng, r.point.lat);
            mapAddress(mapPoint);
        } else {
            console.log('failed' + this.getStatus());
        }
    }, { enableHighAccuracy: true });
}


function mapAddress(e) {
    var mapGeoc = new BMap.Geocoder();
    var pt = e;
    mapGeoc.getLocation(pt, function(rs) {
        var addComp = rs.addressComponents;
        setCurrent(addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber);
    });
};

function updateClient() {
    if (window.yspCheckIn) {
        window.yspCheckIn.locationBegin();
        //mapGetPoint();
        //mapAddress(mapPoint);
    } else {
        setupWebViewJavascriptBridge(function(bridge) {
            bridge.callHandler('locationBegin', function responseCallback(responseData) {
                if (!responseData) { console.error('获取当前定位信息失败 ！') }
            })
        });
    }
};

//获取到当前定位地址
function setCurrent(currLocation) {
    var curraddr = "";
    curraddr = `<span>${currLocation}</span>`;
    $('.currentAdrHead').html(curraddr);
}

//普天获取门店信息
function getShopInfo(emails) {
    var data = new FormData();
    postEmail = emails;
    data.append("loginname", emails);
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //updateClient();
            var results = JSON.parse(xhr.responseText);
            var dataList = results.data
            if (dataList == undefined) {
                alert(results.error_msg);
                Client.closeWindow();
                return false;
            } else {
                eventRegister(); //加载出勤、出差、公出选项
                setStoreList(dataList);
            }
        }
    });

    xhr.open("POST", "http://60.247.65.101:8001/clock/preaddress");
    xhr.setRequestHeader("time", time);
    xhr.setRequestHeader("encryptData", encryptData);
    xhr.send(data);
    xhr.error = function() {
        alert("接口异常");
        Client.closeWindow();
        return false;
    }

};

function setStoreList(store) {
    var attenStorePrimary = '';
    var attenStoreHtml = '';
    var busiStorePrimary = '';
    var busiStoreHtml = '';
    var attendanceArr = [];
    var businessArr = [];
    if (store instanceof Array) {
        //将出差、出勤分组
        store.map(function(item, index) {
            if (item.businessType == "出勤") {
                attendanceArr.push(item);
            } else if (item.businessType == "出差") {
                businessArr.unshift(item);
            }
        });
        //出勤
        if (attendanceArr.length > 0) {
            attenStorePrimary += `<h6 data-lngitude=${attendanceArr[0].lngitude} data-latitude=${attendanceArr[0].latitude} data-attendType=${attendanceArr[0].attendType}>${attendanceArr[0].name}</h6><span>${attendanceArr[0].address}</span>`;
            $('.attendance .showAddress').html(attenStorePrimary);
            attendanceArr.map(function(d1, i1) {
                attenStoreHtml += `<div class="listItem">
                        <h6 data-lngitude=${d1.lngitude} data-latitude=${d1.latitude} data-attendType=${d1.attendType}>${d1.name}</h6>
                        <span>${d1.address}</span>
                    </div>`;
                $('.attendance .addressList').html(attenStoreHtml);
            });
        }
        //出差
        if (businessArr.length > 0) {
            var lgn = businessArr.length - 1;
            busiStorePrimary += `<h6 data-lngitude=${businessArr[lgn].lngitude} data-latitude=${businessArr[lgn].latitude} data-attendType=${businessArr[lgn].attendType}>${businessArr[lgn].name}</h6><span>${businessArr[lgn].address}</span>`;
            $('.onBusiness .showAddress').html(busiStorePrimary);
            businessArr.map(function(d2, i2) {
                busiStoreHtml = `<div class="listItem">
                        <h6 data-lngitude=${d2.lngitude} data-latitude=${d2.latitude} data-attendType=${d2.attendType}>${d2.name}</h6>
                        <span>${d2.address}</span>
                    </div>`;
                $('.onBusiness .addressList').prepend(busiStoreHtml);
            });
        }
        var storeOrigin = {};
        storeOrigin.type = "storeSelect";
        storeOrigin.selectedLn = parseFloat($(".attendance .showAddress h6").attr("data-lngitude"));
        storeOrigin.selectedLa = parseFloat($(".attendance .showAddress h6").attr("data-latitude"));
        storeOrigin.selectedName = $(".attendance .showAddress h6").text();
        attendType = $(".attendance .showAddress h6").attr("data-attendType")
        getMap(storeOrigin);
    }
};

function eventRegister() {
    //打卡类型选择
    // $(".selected").click(function() {
    //     $(".typeBoard").toggle()
    // }) 后注释掉的
    $(".typeBoard").find("div").each(function() {
        var firstDom = $(this).eq(0);
        if ("出勤" == firstDom.text()) {
            firstDom.addClass("clickStyle"); //添加class样式
            firstDom.nextAll().removeClass("clickStyle"); //取消其它的class样式
            $(".attendance").show();
            $(".onBusiness").hide();
            $(".onBusinessAdrHead").hide();
            $(".otherBoard").hide();
            $(".officialBusiness").hide();
            $(".addressList").hide();
            $(".storeLocation").removeClass("storeLocation");
            $(".attendance .showAddress").addClass("storeLocation");
            $(".typeSelected").text("出勤");
            $(".attendance").find(".showAddress").html($(".attendance").find(".listItem").eq(0).html());
            var storeOrigin = {};
            storeOrigin.type = "storeSelect";
            storeOrigin.selectedLn = parseFloat($(".attendance .showAddress h6").attr("data-lngitude"));
            storeOrigin.selectedLa = parseFloat($(".attendance .showAddress h6").attr("data-latitude"));
            storeOrigin.selectedName = $(this).find("h6").text();
            getMap(storeOrigin);
        }
        $(this).click(function() {
            if ($(this).text() == "出勤") {
                $(this).addClass("clickStyle"); //添加class样式
                $(this).nextAll().removeClass("clickStyle");
                $(".attendance").show();
                $(".onBusiness").hide();
                $(".onBusinessAdrHead").hide();
                $(".otherBoard").hide();
                $(".officialBusiness").hide();
                $(".addressList").hide();
                $(".storeLocation").removeClass("storeLocation");
                $(".attendance .showAddress").addClass("storeLocation");
                //$(".typeBoard").hide();
                $(".typeSelected").text("出勤");
                $(".attendance").find(".showAddress").html($(".attendance").find(".listItem").eq(0).html());
                var storeOrigin = {};
                storeOrigin.type = "storeSelect";
                storeOrigin.selectedLn = parseFloat($(".attendance .showAddress h6").attr("data-lngitude"));
                storeOrigin.selectedLa = parseFloat($(".attendance .showAddress h6").attr("data-latitude"));
                storeOrigin.selectedName = $(this).find("h6").text();
                getMap(storeOrigin);
            } else if ($(this).text() == "出差") {
                $(this).addClass("clickStyle"); //添加class样式
                $(this).prev().removeClass("clickStyle");
                $(this).next().removeClass("clickStyle");
                $(".attendance").hide();
                $(".onBusiness").show();
                $(".onBusinessAdrHead").show();
                $(".officialBusiness").hide();
                $(".addressList").hide();
                $(".storeLocation").removeClass("storeLocation");
                $(".onBusiness .showAddress").show();
                $(".onBusiness .otherBoard").hide();
                $(".onBusiness .showAddress").addClass("storeLocation");
                //$(".typeBoard").hide();
                $(".typeSelected").text("出差");
                $(".otherTip").hide();
                $(".onBusiness").find(".showAddress").html($(".onBusiness").find(".listItem").eq(0).html());
                var storeOrigin = {};
                storeOrigin.type = "storeSelect";
                storeOrigin.selectedLn = parseFloat($(".attendance .showAddress h6").attr("data-lngitude"));
                storeOrigin.selectedLa = parseFloat($(".attendance .showAddress h6").attr("data-latitude"));
                storeOrigin.selectedName = $(this).find("h6").text();
                getMap(storeOrigin);
            } else {
                $(this).addClass("clickStyle"); //添加class样式
                $(this).prevAll().removeClass("clickStyle"); //清除所有兄弟节点的class样式
                $(".attendance").hide();
                $(".onBusiness").hide();
                $(".onBusinessAdrHead").hide();
                $(".otherBoard").hide();
                $(".officialBusiness").show();
                $(".addressList").hide();
                $(".storeLocation").removeClass("storeLocation");
                $(".officialBusiness textarea").addClass("storeLocation");
                //$(".typeBoard").hide();
                $(".selectLocation .businessTip").hide();
                $(".typeSelected").text("公出");
                var storeOrigin = {};
                storeOrigin.type = "storeSelect";
                storeOrigin.selectedLn = "";
                storeOrigin.selectedLa = "";
                getMap(storeOrigin);
            }
        })
    });
    //地址选框
    $(".showAddress").click(function() {
        $(this).parent().next().toggle(); //对应addressList显示隐藏
    });
    //选择地址后显示在上面
    $(".attendance .addressList").on("click", ".listItem", function(e) {
        $(".attendance .showAddress").html($(this).html());
        $(".storeLocation").removeClass("storeLocation");
        $(".attendance .showAddress").addClass("storeLocation");
        $(".attendance .addressList").hide();
        var storeObj = {};
        storeObj.type = "storeSelect";
        storeObj.selectedLn = parseFloat($(this).find("h6").attr("data-lngitude"));
        storeObj.selectedLa = parseFloat($(this).find("h6").attr("data-latitude"));
        storeObj.selectedName = $(this).find("h6").text();
        getMap(storeObj);
    });
    $(".onBusiness .addressList").on("click", ".listItem", function(e) {
        $(".onBusiness .showAddress").html($(this).html());
        $(".storeLocation").removeClass("storeLocation");
        $(".onBusiness .showAddress").addClass("storeLocation");
        $(".onBusiness .addressList").hide();
        var storeObj = {};
        storeObj.type = "storeSelect";
        storeObj.selectedLn = parseFloat($(this).find("h6").attr("data-lngitude"));
        storeObj.selectedLa = parseFloat($(this).find("h6").attr("data-latitude"));
        storeObj.selectedName = $(this).find("h6").text();
        getMap(storeObj);
    });
    $(".other").click(function() {
        $(".onBusinessAdrHead").hide();
        $(".otherBoard")[0].style.display = "block";
        //$(".otherBoard").show();
        $(".storeLocation").removeClass("storeLocation");
        $(".onBusiness .otherBoard").addClass("storeLocation");
        $(".addressList").hide();
        var storeObj = {};
        storeObj.type = "other";
        getMap(storeObj);
    });
};

//当前地址刷新按钮
$(".refreshBtn").click(function() {
    updateClient();
});

// function Rad(d) {
//     return d * Math.PI / 180.0; //经纬度转换成三角函数中度分表形式。
// }
//计算距离，参数分别为第一点的纬度，经度；第二点的纬度，经度
function getDistance(lat1, lng1, lat2, lng2) {
    // var radLat1 = Rad(lat1);
    // var radLat2 = Rad(lat2);
    // var a = radLat1 - radLat2;
    // var b = Rad(lng1) - Rad(lng2);
    // var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    // s = s * 6378.137; // 地球半径，千米;
    // s = Math.round(s * 10000) / 10000; //输出为公里
    // s = Math.round(s * 1000) / 1; //单位修改为米,取整
    // inZone = (s <= DISTANCE) ? true : false;
    var map = new BMap.Map("allmap");
    var pointA = new BMap.Point(lng1, lat1);
    var pointB = new BMap.Point(lng2, lat2);
    var distance = (map.getDistance(pointA, pointB)).toFixed(2);
    inZone = (distance <= DISTANCE) ? true : false;
}
//提交数据
function submitData() {
    $('footer').addClass('footer');
    var d = new Date();
    var date = getNowTime(d);
    var type = $(".typeSelected").text();
    var error = "";
    if (type == "公出") {
        error = "正常打卡";
    } else if (type == "出差" && $(".otherBoard")[0].style.display == "block") {
        error = "正常打卡";
    } else if (type == "出差" && $(".otherBoard")[0].style.display == "none") {
        error = inZone ? "正常打卡" : "异常打卡";
    } else if (type == "出差" && $(".storeLocation").find(".otherTitle")) {
        error = "正常打卡";
    } else {
        error = inZone ? "正常打卡" : "异常打卡";
    }

    var prelongitude = storeSelectLng;
    var prelatitude = storeSelectLat;
    var preaddress, prename, desc, address, name, longitude, latitude, time, week;
    if (error == "正常打卡") {
        if ($(".storeLocation").find("span").length > 0) {
            preaddress = $(".storeLocation").find("span").text();
            prename = $(".storeLocation").find("h6").text();
            desc = "";
        } else if ($(".storeLocation").find(".otherTitle").length > 0) {
            preaddress = "";
            prename = "";
            desc = $(".storeLocation").find("textarea").val();
        } else {
            preaddress = $(".storeLocation").find("span").text();
            prename = $(".storeLocation").find("h6").text();
            desc = $(".storeLocation").val();
        }
        //else if (document.querySelector(".storeLocation").tagName == "TEXTAREA") {
        //     preaddress = "";
        //     prename = "";
        //     desc = $(".storeLocation").val();
        // }
    } else {
        preaddress = $(".storeLocation").find("span").text();
        prename = $(".storeLocation").find("h6").text();
        desc = $(".reasonModal").find('textarea').val();
    }
    address = $(".currentAdrHead").find("span").text();
    name = "";
    longitude = currentLng;
    latitude = currentLat;
    time = date.localDate.replace(/\//g, "-") + " " + date.hours + ":" + date.minutes + ":" + date.seconds;
    week = date.day;
    // if("出差" == type){
    //     attendType = $(".onBusiness .showAddress h6").attr("data-attendType");
    //     if(undefined == attendType){
    //         attendType = "";
    //     }
    // } else {
    //     //attendType = $(".attendance .showAddress h6").attr("data-attendType");
    //     attendType = "";
    // }
    attendType = "";

    //给后台传数据
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    var arr = [userId, type, error, prelongitude, prelatitude, preaddress, prename, address, name, longitude, latitude, time, week, desc, attendType];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = isundefined(arr[i]);
    };
    fd.append("userId", userId);
    fd.append("type", type);
    fd.append("error", error);
    fd.append("prelongitude", prelongitude);
    fd.append("prelatitude", prelatitude);
    fd.append("preaddress", preaddress);
    fd.append("prename", prename);
    fd.append("address", address);
    fd.append("name", name);
    fd.append("longitude", longitude);
    fd.append("latitude", latitude);
    fd.append("time", time);
    fd.append("week", week);
    fd.append("desc", desc);
    fd.append("attendType", attendType);
    fd.append('email', postEmail);
    xhr.onreadystatechange = function() {
        if ((xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            Client.Log('考勤录入成功', '录入成功');
            console.log('数据提交，服务端返回：' + xhr.response);
            var param = JSON.parse(xhr.response);
            var flag = param.error_code ? true : false;
            if (flag) {
                // $(".modal").text('打卡失败');
                // $(".modal").show();
                // setTimeout(function() {
                //     $(".modal").hide();
                // }, 3000);
                alert('打卡失败:' + error_msg);
            } else {
                $(".modal").show();
                setTimeout(function() {
                    $(".modal").hide();
                    $('footer').removeClass('footer');
                }, 3000);
            }
        } else if (xhr.readyState == 4 && xhr.status >= 400) {
            // $(".modal").text('请求异常');
            // $(".modal").show();
            // setTimeout(function() {
            //     $(".modal").hide();
            // }, 3000);
            alert('请求异常');
            $('footer').removeClass('footer');
        }
    }
    if (userId != '' && time != '' && type != '' && longitude != '' && latitude != '' && address != '' && error != '' && userId != 'v9nxwk+PNo4=') {
        xhr.open('POST', 'http://60.247.65.101:8001/clock/infors', true);
    } else {
        // $(".modal").text('参数异常');
        // $(".modal").show();
        // setTimeout(function() {
        //     $(".modal").hide();
        // }, 3000);
        var obj = { 'userId': userId, 'time': time, 'type': type, 'longitude': longitude, 'latitude': latitude, 'address': address, 'error': error };
        for (name in obj) {
            if (obj[name] == '') {
                Client.Log(name + '值为空!', '录入失败');
                alert(name + '值为空!');
                $('footer').addClass('footer');
            }
        }
    }
    xhr.send(fd);
    $(".officialBusiness").find("textarea").val(""); //公出事由，清除数据
    $(".otherBoard").find("textarea").val(""); //出差其它清除数据
}
//打卡
function isundefined(str) {
    if (str == undefined || str == NaN || str == null) {
        str = '';
        return str;
    }
}
$("footer").click(function() {
    Client.Log('已点击打卡', '正在打卡');
    var type = $(".typeSelected").text();
    var flag = $(".storeLocation").find("span").length;
    if (type == "" || type == "出勤" || (type == "出差" && $(".otherBoard")[0].style.display == "none")) {
        if (flag == 0) {
            alert("您没有预打卡地址，不能打卡！");
            return;
        }
    }
    if (type == "公出" && $(".officialBusiness").find("textarea").val().trim() == "") {
        $(".businessTip").show();
    } else if (type == "公出" && $(".officialBusiness").find("textarea").val().trim() !== "") {
        $(".businessTip").hide();
        // $(".modal").show();
        // setTimeout(function() {
        //     $(".modal").hide();
        // }, 1000);
        submitData();
    } else if (type == "出差" && $(".otherBoard")[0].style.display == "block") {
        if ($(".otherBoard").find("textarea").val().trim() == "") {
            $(".otherTip").show();
        } else {
            $(".otherTip").hide();
            // $(".modal").show();
            // setTimeout(function() {
            //     $(".modal").hide();
            // }, 1000);
            submitData();
        }
    } else if (type == "出差" && $(".otherBoard")[0].style.display == "none") {
        getDistance(storeSelectLat, storeSelectLng, currentLat, currentLng); //判断是否超过500米
        if (inZone) {
            $(".otherTip").hide();
            // $(".modal").show();
            // setTimeout(function() {
            //     $(".modal").hide();
            // }, 1000);
            submitData();
        } else {
            $(".reasonModal").show();
        }
    } else {
        getDistance(storeSelectLat, storeSelectLng, currentLat, currentLng); //116.3182967446, 39.9896154683
        if (inZone) {
            // $(".modal").show();
            // setTimeout(function() {
            //     $(".modal").hide();
            // }, 1000);
            submitData();
        } else {
            $(".reasonModal").show();
            //异常打卡说明提交按钮逻辑，文本不能为空，填写完说明后给后台传数据
        }
    }
    getMap();
});
//提交返回
$(".backBtn").click(function() {
    $(".reasonModal").hide();
    $(".reason_top").find("textarea").val(""); //出勤超过500填写解释，清除数据
    $(".reasonModal .tip").hide(); //隐藏“说明解释不能为空”
});
$(".submitBtn").click(function() {

    if ($(".reason_area").find("textarea").val().trim() == "") {
        $(".tip").show();
    } else {
        $(".reasonModal").hide();
        $(".tip").hide();
        // $(".modal").show();
        // setTimeout(function() {
        //     $(".modal").hide();
        // }, 1000);
        submitData();
        $(".reason_top").find("textarea").val(""); //出勤超过500填写解释，清除数据
    }
});
//根据地址画出地图并表示一选择门店位置及员工当前位置（传入已选择门店信息）
function getMap(data) {
    // storeSelectLat, storeSelectLng, currentLat, currentLng
    if (data !== undefined && data.type == "storeSelect") {
        storeSelectLat = data.selectedLa;
        storeSelectLng = data.selectedLn;
        selectedName = data.selectedName;
    } else if (data !== undefined && data.type == "currentAddr") {
        currentLat = data.selectedLa;
        currentLng = data.selectedLn;
    }
    var map = new BMap.Map("allmap"); // 创建地图实例  
    var storePoint = new BMap.Point(storeSelectLng, storeSelectLat); //116.318, 39.989
    // var storePoint = new BMap.Point(116.318, 39.989); //116.318, 39.989
    var myPoint = new BMap.Point(currentLng, currentLat);
    //var myPoint = new BMap.Point(116.318, 39.989);
    map.centerAndZoom(myPoint, 16); // 初始化地图，设置中心点坐标和地图级别 
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放 
    // if(currentLat != '' && storeSelectLat != ''){
    //     var myIcon = new BMap.Icon("assets/img/myPIN.png", new BMap.Size(50,50));
    //     var myMarker = new BMap.Marker(myPoint,{icon:myIcon});  // 创建标注
    //     map.addOverlay(myMarker);
    //     var storeIcon = new BMap.Icon("assets/img/yourPIN.png", new BMap.Size(50,50));
    //     var storeMarker = new BMap.Marker(storePoint,{icon:storeIcon});  // 创建标注
    //     map.addOverlay(storeMarker);
    // }
    function addMarker(myPoint, index) { // 创建图标对象   
        var myIcon = new BMap.Icon("assets/img/myPIN.png", new BMap.Size(50, 50), {
            // 指定定位位置。   
            // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
            // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
            // 图标中央下端的尖角位置。    
            anchor: new BMap.Size(10, 25),
            // 设置图片偏移。   
            // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
            // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
            imageOffset: new BMap.Size(0, 0 - index * 25) // 设置图片偏移    
        });
        var storeIcon = new BMap.Icon("assets/img/yourPIN.png", new BMap.Size(50, 50), {
            // 指定定位位置。   
            // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
            // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
            // 图标中央下端的尖角位置。    
            anchor: new BMap.Size(10, 25),
            // 设置图片偏移。   
            // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
            // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
            imageOffset: new BMap.Size(0, 0 - index * 25) // 设置图片偏移    
        });
        // 创建标注对象并添加到地图   
        var marker = new BMap.Marker(myPoint, { icon: myIcon });
        map.addOverlay(marker);
        var storeMarker = new BMap.Marker(storePoint, { icon: storeIcon });
        map.addOverlay(storeMarker);

    }
    addMarker(myPoint);
    addMarker(storePoint);
    var circle = new BMap.Circle(myPoint, 500, { fillColor: "blue", strokeWeight: 1, fillOpacity: 0.3, strokeOpacity: 0.3 });
    map.addOverlay(circle);
    var local = new BMap.LocalSearch(map, { renderOptions: { map: map, autoViewport: false } });
    //selectedName && local.searchNearby(selectedName,myPoint,500);   //根据客户名称检索周围位置
}
//打卡记录
function pubchTaken() {
    location.href = 'http://60.247.65.101:8001/punchTaken.html'
}
//帮助中心
function help() {
    location.href = 'http://60.247.65.101:8001/help.html'
}