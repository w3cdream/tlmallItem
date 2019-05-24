(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control352_uTbuwy: function (elem) {
      if (!elem) {
        return;
      }var div = document.createElement('div');elem.appendChild(div);var data = { position: ysp.customHelper.position, branch: ysp.customHelper.branchName };return data;
    },
    doAction_uiControl339_plKpbc: function (data, elem) {},
    getTemplate_uiControl339_plKpbc: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n \xA0constructor(){\n    super();\n    this.state={\n      data:[],\n      active:true,\n      month:''\n    }\n  }\n \xA0GetBigData(interfaceid,onename,twoname){\n    var _this = this;\n    var bigData = [];\n    _this.interfaceid = interfaceid;\n    _this.arguments = arguments;\n    _this.onename = onename;\n    _this.twoname = twoname;\n    for(var i=0;i<interfaceid.length;i++){\n       GetData(interfaceid[i],i)\n \xA0  }\n \xA0 \xA0function GetData(id,i){\n \xA0 \xA0 \xA0var\tdate = new Date();\n      var year = date.getFullYear();\n      var month = date.getMonth()+1;\n      _this.setState({\n        month:month\n      })\n      var day = date.getDate();\n      var branchName = encodeURI(_this.props.customData.branch);\n      var position = encodeURI(_this.props.customData.position);\n      var postTime = year+'-'+month+'-'+day;\n \xA0 \xA0 \xA0var xhr = new XMLHttpRequest();\n      xhr.onreadystatechange = function(){if(xhr.readyState == 4){\n        bigData[i] = xhr.response;\n        var json = JSON.parse(xhr.response).Rows;\n        if(_this.arguments.length<2){\n          _this.setState(\n            {\n              data:bigData\n            }\n          )\n        }else{\n          _this.setState({\n \xA0 \xA0 \xA0 \xA0 \xA0 \xA0['big'+_this.interfaceid[i]]:json\n          })\n        }\n      }}\n      xhr.open('POST','http://192.168.220.82:8080/ptDataShow/echarts/postDataFromEs',true);\n \xA0 \xA0 \xA0xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');\n      xhr.send('year='+year+'&month='+year+'-'+month+'&day14=2019-05-22&day='+postTime+'&branchname='+branchName+'&branchName='+branchName+'&position='+position+'&interfaceId='+id);\n    }\n  }\n \xA0bigTotal(totaldata){\n \xA0 \xA0if(!(totaldata instanceof Array)){\n      return ;\n    }\n \xA0 \xA0var totalNum = 0;\n \xA0  [].forEach.call(totaldata,function(item,index){\n \xA0 \xA0 \xA0if(!item){\n        return ; \n      }\n \xA0 \xA0 \xA0var {req,requirements} = item;\n \xA0  \ttotalNum += item.req?item.req:item.requirements;\n    })\n    return totalNum;\n  }\n \xA0componentDidMount(){\n    var _this = this;\n \xA0 \xA0_this.GetBigData([1001,1002,1025,1027,1039,1003,1009,1010,1011,1012,1031,1026,1028,1029,1030,1018,1017,1033,1034],'signNum','cusNum','storeNum','walkMiles','salerNum','visitrequirements','planNum','userNum','officename','requirementsBuStore','signNumByStore');\n    //_this.GetBigData([1001,1002,1025,1027,1039,1003,1009,1010,1011,1012,1031]);\n  }\n  handlerClick(){\n    this.setState({active: !this.state.active})\n  }\n  division(max,min){\n    if(!max || !min){\n      return ;\n    }\n \xA0 \xA0//\u5C0F\u4E8E1\u65F6 \u5411\u4E0A\u53D6\u6574\n \xA0 \xA0return (max / min * 100) >=1 ?(max / min * 100).toFixed() +'%' : Math.round(max / min * 100)+'%';\n  }\n \xA0renderCol(bigdata){\n    var _this = this;\n    var total = [];\n  \tvar title = ['\u4ECA\u65E5','\u672C\u6708','\u672C\u5E74'];\n \xA0 \xA0// \u5BA2\u6237\u62DC\u8BBF\u8BA1\u5212 \u4ECA\u65E5\n \xA0 \xA0var cusPlanNum_min = _this.state.big1029 && _this.state.big1029[0].planNum;\n    var cusUserNum_max = _this.state.big1029 && _this.state.big1029[0].userNum;\n \xA0 \xA0var customUser = cusPlanNum_min && cusUserNum_max && _this.division(cusUserNum_max,cusPlanNum_min);\n \xA0 \xA0// \u95E8\u5E97\u62DC\u8BBF\u8BA1\u5212 \u4ECA\u65E5\n \xA0 \xA0var storePlanNum_min = _this.state.big1030 && _this.state.big1030[0].planNum;\n    var storeNum_max = _this.state.big1030 && _this.state.big1030[0].storeNum;\n \xA0 \xA0var StoreUser = storePlanNum_min && storeNum_max && _this.division(storeNum_max,storePlanNum_min);\n \xA0 \xA0var todayCustom = [{'value':'','name':'\u5BA2\u6237\u62DC\u8BBF\u8BA1\u5212'},{'value':_this.state.big1029 && _this.state.big1029[0].planNum,'name':'\u8BA1\u5212\u62DC\u8BBF'},{'value':_this.state.big1029 && _this.state.big1029[0].userNum,'name':'\u5B9E\u9645\u62DC\u8BBF'},{'value':customUser?customUser:'0%','name':'\u8FBE\u6210\u7387'},{'value':'','name':'\u95E8\u5E97\u62DC\u8BBF\u8BA1\u5212'},{'value':_this.state.big1030 && _this.state.big1030[0].planNum,'name':'\u8BA1\u5212\u62DC\u8BBF'},{'value':_this.state.big1030 && _this.state.big1030[0].storeNum,'name':'\u5B9E\u9645\u62DC\u8BBF'},{'value':StoreUser?StoreUser:'0%','name':'\u8FBE\u6210\u7387'}];\n \xA0 \xA0//\u5BA2\u6237\u6570\u91CF&\u5BA2\u6237\u6B21\u6570 \xA0\u672C\u6708\n \xA0 \xA0var customNum = _this.state.big1025 && _this.state.big1025[0].cusNum;\n    var cusNum = _this.state.big1009 && _this.state.big1009[0].cusNum;\n \xA0 \xA0var numRate = _this.state.big1009 && _this.state.big1025 && _this.division(cusNum,customNum);\n \xA0 \xA0var customTotal = _this.state.big1026 && _this.bigTotal(_this.state.big1026);\n    var signNum = _this.state.big1009 && _this.state.big1009[0].signNum;\n    var signRate = signNum && customTotal && _this.division(signNum,customTotal);\n \xA0 \xA0//\u95E8\u5E97\u6570\u91CF&\u95E8\u5E97\u6B21\u6570 \xA0\u672C\u6708\n \xA0 \xA0var storeNum = _this.state.big1027 && _this.state.big1027[0].storeNum;\n    var storeNumTotal = _this.state.big1010 && _this.state.big1010[0].stroeNum;\n    var storeNumReta = storeNumTotal && storeNum && _this.division(storeNumTotal,storeNum);\n    var storeTotal = _this.state.big1028 && _this.bigTotal(_this.state.big1028);\n    var stroeSignNumTotal = _this.state.big1010 && _this.state.big1010[0].signNum;\n    var storeReta = stroeSignNumTotal && storeTotal && _this.division(stroeSignNumTotal,storeTotal);\n \xA0 \xA0var toMonth = [{'value':'','name':'\u5BA2\u6237\u6570\u91CF'},{'value':customNum ? customNum : 0,'name':'\u62DC\u8BBF\u8981\u6C42'},{'value':cusNum?cusNum:0,'name':'\u5B9E\u9645\u62DC\u8BBF'},{'value':numRate?numRate:'0%','name':'\u8FBE\u6210\u7387'},{'value':'','name':'\u5BA2\u6237\u6B21\u6570'},{'value':customTotal?customTotal:0,'name':'\u9891\u6B21\u5408\u8BA1'},{'value':signNum?signNum:0,'name':'\u5B9E\u9645\u62DC\u8BBF'},{'value':signRate?signRate:'0%','name':'\u8FBE\u6210\u7387'},{'value':'','name':'\u95E8\u5E97\u6570\u91CF'},{'value':storeNum?storeNum:0,'name':'\u62DC\u8BBF\u8981\u6C42'},{'value':storeNumTotal?storeNumTotal:0,'name':'\u5B9E\u9645\u62DC\u8BBF'},{'value':storeNumReta?storeNumReta:'0%','name':'\u8FBE\u6210\u7387'},{'value':'','name':'\u95E8\u5E97\u6B21\u6570'},{'value':storeTotal?storeTotal:0,'name':'\u9891\u6B21\u5408\u8BA1'},{'value':stroeSignNumTotal?stroeSignNumTotal:0,'name':'\u5B9E\u9645\u62DC\u8BBF'},{'value':storeReta?storeReta:'0%','name':'\u8FBE\u6210\u7387'}];\n \xA0 \xA0//\u5BA2\u6237\u6B21\u6570 \u672C\u5E74\n    var yearCusNum = _this.state.big1011 && _this.state.big1011[0].signNum;\n    var toYearCus = customTotal && customTotal*_this.state.month;\n    var toYearReta = customTotal && yearCusNum && _this.division(yearCusNum,toYearCus);\n \xA0 \xA0//\u95E8\u5E97\u6B21\u6570 \u672C\u5E74\n    var yearStoreNum = _this.state.big1012 && _this.state.big1012[0].signNum;\n    var toYearStore = storeTotal && storeTotal * _this.state.month;\n    var yearReta = toYearStore && yearStoreNum && _this.division(yearStoreNum,toYearStore)\n \xA0 \xA0var toYear = [{'value':'','name':'\u5BA2\u6237\u6B21\u6570'},{'value':toYearCus?toYearCus:0,'name':'\u7D2F\u8BA1\u8981\u6C42'},{'value':yearCusNum?yearCusNum:0,'name':'\u7D2F\u8BA1\u62DC\u8BBF'},{'value':toYearReta?toYearReta:'0%','name':'\u8FBE\u6210\u7387'},{'value':'','name':'\u95E8\u5E97\u6B21\u6570'},{'value':toYearStore?toYearStore:0,'name':'\u7D2F\u8BA1\u8981\u6C42'},{'value':yearStoreNum?yearStoreNum:0,'name':'\u7D2F\u8BA1\u62DC\u8BBF'},{'value':yearReta?yearReta:'0%','name':'\u8FBE\u6210\u7387'}]\n \xA0 \xA0total.push(todayCustom,toMonth,toYear);\n \xA0 \xA0return title.map((item,index) => {\n    \treturn (\n        <div className=\"visit-col-list\">\n        \t<div className={item.indexOf('\u65E5') != -1 ? 'col-list fontBlue' : item.indexOf('\u6708') != -1 ? 'col-list fontRed' : item.indexOf('\u5E74') != -1 ? 'col-list fontYellow' : 'col-list fontBlue'}>\n          <span>\n            <h2>{item}</h2>\n          </span>\n          <span>\u76EE\u6807</span>\n          <span>\u8FBE\u6210</span> \n          <span>\u8FBE\u6210\u7387</span>   \n        \t</div>\n          <div className = 'visitcolss'>{_this.renderItem(total[index])}</div>\n        </div>\n      )\n    })\n  }\n  renderItem(data){\n    var _this = this;\n \xA0 \xA0 \xA0return data.length > 1 && data.map((item,index) => {\n      return (\n      <div className='list-item'>\n      <span>{item.value}</span>\n      <span>{(item.name).indexOf(\"\u5BA2\u6237\u62DC\u8BBF\u8BA1\u5212\") != -1 ? '\u5BA2\u6237\u62DC\u8BBF\u8BA1\u5212\uFF1A' : (item.name).indexOf(\"\u95E8\u5E97\u62DC\u8BBF\u8BA1\u5212\") !=-1 ? '\u95E8\u5E97\u62DC\u8BBF\u8BA1\u5212\uFF1A' : (item.name).indexOf(\"\u5BA2\u6237\u6570\u91CF\") !=-1 ? '\u5BA2\u6237\u6570\u91CF\uFF1A' : (item.name).indexOf(\"\u5BA2\u6237\u6B21\u6570\") !=-1 ? '\u5BA2\u6237\u6B21\u6570\uFF1A' : (item.name).indexOf(\"\u95E8\u5E97\u6570\u91CF\") !=-1 ? '\u95E8\u5E97\u6570\u91CF\uFF1A' : (item.name).indexOf(\"\u95E8\u5E97\u6B21\u6570\") !=-1 ? '\u95E8\u5E97\u6B21\u6570\uFF1A' : ''}</span>\n      </div>\n      )\n      })\n  }\n  render(){\n    var _this = this;\n    return(\n    \t<div>\n \xA0 \xA0  \u9875\u9762\u6570\u636E\u90E8\u5206\n        <div className='ysp-visitIndex-container' ref = 'toTop'>\n          <div className='headersum' onClick={this.handlerClick.bind(this)}>\n            <i></i>\n            <span>\u5BA2\u6237\u62DC\u8BBF\u603B\u91CF</span>\n            <i className={this.state.active ? 'active' : ''}></i>\n          </div>\n          <div style = {{display : this.state.active ? 'block' : 'none' }}>\n            <div className='ysp-achievement-sales'>\n              <div className='listItem'>\n                <div>\n                  <h2>{_this.state.big1001 && _this.state.big1001[0].signNum}</h2>\n                  <span>\u672C\u6708\u62DC\u8BBF\u5BA2\u6237\u6570</span>\n                </div>\n                <hr/>\n                <div>\n                  <h2>{_this.state.big1001 && _this.state.big1001[0].cusNum}</h2>\n                  <span>\u5BA2\u6237\u62DC\u8BBF\u6B21\u6570</span>\n                </div>\n              </div>\n              <div className='listItem'>\n                <div>\n                  <h2>{_this.state.big1002 && _this.state.big1002[0].signNum}</h2>\n                  <span>\u672C\u6708\u62DC\u8BBF\u95E8\u5E97\u6570</span>\n                </div>\n                <hr/>\n                <div>\n                  <h2>{_this.state.big1002 && _this.state.big1002[0].stroeNum}</h2>\n                  <span>\u95E8\u5E97\u62DC\u8BBF\u6B21\u6570</span>\n                </div>\n              </div>\n              <div className='listItem'>\n                <div>\n                  <h2 style={{color:'#4796ed'}}>{_this.state.big1003 && _this.state.big1003[0].salerNum}</h2>\n                  <span>\u53C2\u4E0E\u62DC\u8BBF\u4EBA\u5458</span>\n                </div>\n                <hr/>\n                <div>\n                  <h2 style={{color:'#e7350d'}}>{_this.state.big1039 && _this.state.big1039[0].walkMiles.toFixed(2)}</h2>\n                  <span>\u884C\u8D70\u516C\u91CC\u6570</span>\n                </div>\n              </div>\n            </div>\n          </div>  \n        </div>\n        <div className='ysp-visitIndex-container'>\n          <div className='header' onClick={this.handlerClick.bind(this)}>\n            <i></i>\n            <span>\u62DC\u8BBF\u8FBE\u6210</span>\n            <i className={this.state.active ? 'active' : ''}></i>\n          </div>\n          <div style={{display: this.state.active ? 'block' : 'none'}}><div className='visitEChartsContent'>{this.renderCol()}</div></div>\n\t\t\t\t<ul>{\n            _this.state.big1017 && _this.state.big1017.map((item,index)=>{\n              return(\n              \t<li>{item.officename}</li>\n              )\n            })\n          }</ul>\n        </div>\n \xA0 \xA0 \xA0</div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      data: [],\n      active: true,\n      month: ''\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'GetBigData',\n    value: function GetBigData(interfaceid, onename, twoname) {\n      var _this = this;\n      var bigData = [];\n      _this.interfaceid = interfaceid;\n      _this.arguments = arguments;\n      _this.onename = onename;\n      _this.twoname = twoname;\n      for (var i = 0; i < interfaceid.length; i++) {\n        GetData(interfaceid[i], i);\n      }\n      function GetData(id, i) {\n        var date = new Date();\n        var year = date.getFullYear();\n        var month = date.getMonth() + 1;\n        _this.setState({\n          month: month\n        });\n        var day = date.getDate();\n        var branchName = encodeURI(_this.props.customData.branch);\n        var position = encodeURI(_this.props.customData.position);\n        var postTime = year + '-' + month + '-' + day;\n        var xhr = new XMLHttpRequest();\n        xhr.onreadystatechange = function () {\n          if (xhr.readyState == 4) {\n            bigData[i] = xhr.response;\n            var json = JSON.parse(xhr.response).Rows;\n            if (_this.arguments.length < 2) {\n              _this.setState({\n                data: bigData\n              });\n            } else {\n              _this.setState(_defineProperty({}, 'big' + _this.interfaceid[i], json));\n            }\n          }\n        };\n        xhr.open('POST', 'http://192.168.220.82:8080/ptDataShow/echarts/postDataFromEs', true);\n        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');\n        xhr.send('year=' + year + '&month=' + year + '-' + month + '&day14=2019-05-22&day=' + postTime + '&branchname=' + branchName + '&branchName=' + branchName + '&position=' + position + '&interfaceId=' + id);\n      }\n    }\n  }, {\n    key: 'bigTotal',\n    value: function bigTotal(totaldata) {\n      if (!(totaldata instanceof Array)) {\n        return;\n      }\n      var totalNum = 0;\n      [].forEach.call(totaldata, function (item, index) {\n        if (!item) {\n          return;\n        }\n        var req = item.req,\n            requirements = item.requirements;\n\n        totalNum += item.req ? item.req : item.requirements;\n      });\n      return totalNum;\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this = this;\n      _this.GetBigData([1001, 1002, 1025, 1027, 1039, 1003, 1009, 1010, 1011, 1012, 1031, 1026, 1028, 1029, 1030, 1018, 1017, 1033, 1034], 'signNum', 'cusNum', 'storeNum', 'walkMiles', 'salerNum', 'visitrequirements', 'planNum', 'userNum', 'officename', 'requirementsBuStore', 'signNumByStore');\n      //_this.GetBigData([1001,1002,1025,1027,1039,1003,1009,1010,1011,1012,1031]);\n    }\n  }, {\n    key: 'handlerClick',\n    value: function handlerClick() {\n      this.setState({ active: !this.state.active });\n    }\n  }, {\n    key: 'division',\n    value: function division(max, min) {\n      if (!max || !min) {\n        return;\n      }\n      //\u5C0F\u4E8E1\u65F6 \u5411\u4E0A\u53D6\u6574\n      return max / min * 100 >= 1 ? (max / min * 100).toFixed() + '%' : Math.round(max / min * 100) + '%';\n    }\n  }, {\n    key: 'renderCol',\n    value: function renderCol(bigdata) {\n      var _this = this;\n      var total = [];\n      var title = ['\u4ECA\u65E5', '\u672C\u6708', '\u672C\u5E74'];\n      // \u5BA2\u6237\u62DC\u8BBF\u8BA1\u5212 \u4ECA\u65E5\n      var cusPlanNum_min = _this.state.big1029 && _this.state.big1029[0].planNum;\n      var cusUserNum_max = _this.state.big1029 && _this.state.big1029[0].userNum;\n      var customUser = cusPlanNum_min && cusUserNum_max && _this.division(cusUserNum_max, cusPlanNum_min);\n      // \u95E8\u5E97\u62DC\u8BBF\u8BA1\u5212 \u4ECA\u65E5\n      var storePlanNum_min = _this.state.big1030 && _this.state.big1030[0].planNum;\n      var storeNum_max = _this.state.big1030 && _this.state.big1030[0].storeNum;\n      var StoreUser = storePlanNum_min && storeNum_max && _this.division(storeNum_max, storePlanNum_min);\n      var todayCustom = [{ 'value': '', 'name': '\u5BA2\u6237\u62DC\u8BBF\u8BA1\u5212' }, { 'value': _this.state.big1029 && _this.state.big1029[0].planNum, 'name': '\u8BA1\u5212\u62DC\u8BBF' }, { 'value': _this.state.big1029 && _this.state.big1029[0].userNum, 'name': '\u5B9E\u9645\u62DC\u8BBF' }, { 'value': customUser ? customUser : '0%', 'name': '\u8FBE\u6210\u7387' }, { 'value': '', 'name': '\u95E8\u5E97\u62DC\u8BBF\u8BA1\u5212' }, { 'value': _this.state.big1030 && _this.state.big1030[0].planNum, 'name': '\u8BA1\u5212\u62DC\u8BBF' }, { 'value': _this.state.big1030 && _this.state.big1030[0].storeNum, 'name': '\u5B9E\u9645\u62DC\u8BBF' }, { 'value': StoreUser ? StoreUser : '0%', 'name': '\u8FBE\u6210\u7387' }];\n      //\u5BA2\u6237\u6570\u91CF&\u5BA2\u6237\u6B21\u6570 \xA0\u672C\u6708\n      var customNum = _this.state.big1025 && _this.state.big1025[0].cusNum;\n      var cusNum = _this.state.big1009 && _this.state.big1009[0].cusNum;\n      var numRate = _this.state.big1009 && _this.state.big1025 && _this.division(cusNum, customNum);\n      var customTotal = _this.state.big1026 && _this.bigTotal(_this.state.big1026);\n      var signNum = _this.state.big1009 && _this.state.big1009[0].signNum;\n      var signRate = signNum && customTotal && _this.division(signNum, customTotal);\n      //\u95E8\u5E97\u6570\u91CF&\u95E8\u5E97\u6B21\u6570 \xA0\u672C\u6708\n      var storeNum = _this.state.big1027 && _this.state.big1027[0].storeNum;\n      var storeNumTotal = _this.state.big1010 && _this.state.big1010[0].stroeNum;\n      var storeNumReta = storeNumTotal && storeNum && _this.division(storeNumTotal, storeNum);\n      var storeTotal = _this.state.big1028 && _this.bigTotal(_this.state.big1028);\n      var stroeSignNumTotal = _this.state.big1010 && _this.state.big1010[0].signNum;\n      var storeReta = stroeSignNumTotal && storeTotal && _this.division(stroeSignNumTotal, storeTotal);\n      var toMonth = [{ 'value': '', 'name': '\u5BA2\u6237\u6570\u91CF' }, { 'value': customNum ? customNum : 0, 'name': '\u62DC\u8BBF\u8981\u6C42' }, { 'value': cusNum ? cusNum : 0, 'name': '\u5B9E\u9645\u62DC\u8BBF' }, { 'value': numRate ? numRate : '0%', 'name': '\u8FBE\u6210\u7387' }, { 'value': '', 'name': '\u5BA2\u6237\u6B21\u6570' }, { 'value': customTotal ? customTotal : 0, 'name': '\u9891\u6B21\u5408\u8BA1' }, { 'value': signNum ? signNum : 0, 'name': '\u5B9E\u9645\u62DC\u8BBF' }, { 'value': signRate ? signRate : '0%', 'name': '\u8FBE\u6210\u7387' }, { 'value': '', 'name': '\u95E8\u5E97\u6570\u91CF' }, { 'value': storeNum ? storeNum : 0, 'name': '\u62DC\u8BBF\u8981\u6C42' }, { 'value': storeNumTotal ? storeNumTotal : 0, 'name': '\u5B9E\u9645\u62DC\u8BBF' }, { 'value': storeNumReta ? storeNumReta : '0%', 'name': '\u8FBE\u6210\u7387' }, { 'value': '', 'name': '\u95E8\u5E97\u6B21\u6570' }, { 'value': storeTotal ? storeTotal : 0, 'name': '\u9891\u6B21\u5408\u8BA1' }, { 'value': stroeSignNumTotal ? stroeSignNumTotal : 0, 'name': '\u5B9E\u9645\u62DC\u8BBF' }, { 'value': storeReta ? storeReta : '0%', 'name': '\u8FBE\u6210\u7387' }];\n      //\u5BA2\u6237\u6B21\u6570 \u672C\u5E74\n      var yearCusNum = _this.state.big1011 && _this.state.big1011[0].signNum;\n      var toYearCus = customTotal && customTotal * _this.state.month;\n      var toYearReta = customTotal && yearCusNum && _this.division(yearCusNum, toYearCus);\n      //\u95E8\u5E97\u6B21\u6570 \u672C\u5E74\n      var yearStoreNum = _this.state.big1012 && _this.state.big1012[0].signNum;\n      var toYearStore = storeTotal && storeTotal * _this.state.month;\n      var yearReta = toYearStore && yearStoreNum && _this.division(yearStoreNum, toYearStore);\n      var toYear = [{ 'value': '', 'name': '\u5BA2\u6237\u6B21\u6570' }, { 'value': toYearCus ? toYearCus : 0, 'name': '\u7D2F\u8BA1\u8981\u6C42' }, { 'value': yearCusNum ? yearCusNum : 0, 'name': '\u7D2F\u8BA1\u62DC\u8BBF' }, { 'value': toYearReta ? toYearReta : '0%', 'name': '\u8FBE\u6210\u7387' }, { 'value': '', 'name': '\u95E8\u5E97\u6B21\u6570' }, { 'value': toYearStore ? toYearStore : 0, 'name': '\u7D2F\u8BA1\u8981\u6C42' }, { 'value': yearStoreNum ? yearStoreNum : 0, 'name': '\u7D2F\u8BA1\u62DC\u8BBF' }, { 'value': yearReta ? yearReta : '0%', 'name': '\u8FBE\u6210\u7387' }];\n      total.push(todayCustom, toMonth, toYear);\n      return title.map(function (item, index) {\n        return React.createElement(\n          'div',\n          { className: 'visit-col-list' },\n          React.createElement(\n            'div',\n            { className: item.indexOf('\u65E5') != -1 ? 'col-list fontBlue' : item.indexOf('\u6708') != -1 ? 'col-list fontRed' : item.indexOf('\u5E74') != -1 ? 'col-list fontYellow' : 'col-list fontBlue' },\n            React.createElement(\n              'span',\n              null,\n              React.createElement(\n                'h2',\n                null,\n                item\n              )\n            ),\n            React.createElement(\n              'span',\n              null,\n              '\\u76EE\\u6807'\n            ),\n            React.createElement(\n              'span',\n              null,\n              '\\u8FBE\\u6210'\n            ),\n            React.createElement(\n              'span',\n              null,\n              '\\u8FBE\\u6210\\u7387'\n            )\n          ),\n          React.createElement(\n            'div',\n            { className: 'visitcolss' },\n            _this.renderItem(total[index])\n          )\n        );\n      });\n    }\n  }, {\n    key: 'renderItem',\n    value: function renderItem(data) {\n      var _this = this;\n      return data.length > 1 && data.map(function (item, index) {\n        return React.createElement(\n          'div',\n          { className: 'list-item' },\n          React.createElement(\n            'span',\n            null,\n            item.value\n          ),\n          React.createElement(\n            'span',\n            null,\n            item.name.indexOf(\"\u5BA2\u6237\u62DC\u8BBF\u8BA1\u5212\") != -1 ? '\u5BA2\u6237\u62DC\u8BBF\u8BA1\u5212\uFF1A' : item.name.indexOf(\"\u95E8\u5E97\u62DC\u8BBF\u8BA1\u5212\") != -1 ? '\u95E8\u5E97\u62DC\u8BBF\u8BA1\u5212\uFF1A' : item.name.indexOf(\"\u5BA2\u6237\u6570\u91CF\") != -1 ? '\u5BA2\u6237\u6570\u91CF\uFF1A' : item.name.indexOf(\"\u5BA2\u6237\u6B21\u6570\") != -1 ? '\u5BA2\u6237\u6B21\u6570\uFF1A' : item.name.indexOf(\"\u95E8\u5E97\u6570\u91CF\") != -1 ? '\u95E8\u5E97\u6570\u91CF\uFF1A' : item.name.indexOf(\"\u95E8\u5E97\u6B21\u6570\") != -1 ? '\u95E8\u5E97\u6B21\u6570\uFF1A' : ''\n          )\n        );\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        '\\xA0 \\xA0  \\u9875\\u9762\\u6570\\u636E\\u90E8\\u5206',\n        React.createElement(\n          'div',\n          { className: 'ysp-visitIndex-container', ref: 'toTop' },\n          React.createElement(\n            'div',\n            { className: 'headersum', onClick: this.handlerClick.bind(this) },\n            React.createElement('i', null),\n            React.createElement(\n              'span',\n              null,\n              '\\u5BA2\\u6237\\u62DC\\u8BBF\\u603B\\u91CF'\n            ),\n            React.createElement('i', { className: this.state.active ? 'active' : '' })\n          ),\n          React.createElement(\n            'div',\n            { style: { display: this.state.active ? 'block' : 'none' } },\n            React.createElement(\n              'div',\n              { className: 'ysp-achievement-sales' },\n              React.createElement(\n                'div',\n                { className: 'listItem' },\n                React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'h2',\n                    null,\n                    _this.state.big1001 && _this.state.big1001[0].signNum\n                  ),\n                  React.createElement(\n                    'span',\n                    null,\n                    '\\u672C\\u6708\\u62DC\\u8BBF\\u5BA2\\u6237\\u6570'\n                  )\n                ),\n                React.createElement('hr', null),\n                React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'h2',\n                    null,\n                    _this.state.big1001 && _this.state.big1001[0].cusNum\n                  ),\n                  React.createElement(\n                    'span',\n                    null,\n                    '\\u5BA2\\u6237\\u62DC\\u8BBF\\u6B21\\u6570'\n                  )\n                )\n              ),\n              React.createElement(\n                'div',\n                { className: 'listItem' },\n                React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'h2',\n                    null,\n                    _this.state.big1002 && _this.state.big1002[0].signNum\n                  ),\n                  React.createElement(\n                    'span',\n                    null,\n                    '\\u672C\\u6708\\u62DC\\u8BBF\\u95E8\\u5E97\\u6570'\n                  )\n                ),\n                React.createElement('hr', null),\n                React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'h2',\n                    null,\n                    _this.state.big1002 && _this.state.big1002[0].stroeNum\n                  ),\n                  React.createElement(\n                    'span',\n                    null,\n                    '\\u95E8\\u5E97\\u62DC\\u8BBF\\u6B21\\u6570'\n                  )\n                )\n              ),\n              React.createElement(\n                'div',\n                { className: 'listItem' },\n                React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'h2',\n                    { style: { color: '#4796ed' } },\n                    _this.state.big1003 && _this.state.big1003[0].salerNum\n                  ),\n                  React.createElement(\n                    'span',\n                    null,\n                    '\\u53C2\\u4E0E\\u62DC\\u8BBF\\u4EBA\\u5458'\n                  )\n                ),\n                React.createElement('hr', null),\n                React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'h2',\n                    { style: { color: '#e7350d' } },\n                    _this.state.big1039 && _this.state.big1039[0].walkMiles.toFixed(2)\n                  ),\n                  React.createElement(\n                    'span',\n                    null,\n                    '\\u884C\\u8D70\\u516C\\u91CC\\u6570'\n                  )\n                )\n              )\n            )\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-visitIndex-container' },\n          React.createElement(\n            'div',\n            { className: 'header', onClick: this.handlerClick.bind(this) },\n            React.createElement('i', null),\n            React.createElement(\n              'span',\n              null,\n              '\\u62DC\\u8BBF\\u8FBE\\u6210'\n            ),\n            React.createElement('i', { className: this.state.active ? 'active' : '' })\n          ),\n          React.createElement(\n            'div',\n            { style: { display: this.state.active ? 'block' : 'none' } },\n            React.createElement(\n              'div',\n              { className: 'visitEChartsContent' },\n              this.renderCol()\n            )\n          ),\n          React.createElement(\n            'ul',\n            null,\n            _this.state.big1017 && _this.state.big1017.map(function (item, index) {\n              return React.createElement(\n                'li',\n                null,\n                item.officename\n              );\n            })\n          )\n        ),\n        '\\xA0 \\xA0 \\xA0'\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control354_9MmhwH: function (elem) {},
    doAction_uiControl340_dUGX9R: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.appMain.back();
      }
    },
    getTemplate_uiControl340_dUGX9R: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div onClick={()=>{\n          const {customHandler} =this.props;\n          customHandler({\n            eventType:'click'\n          })\n        }}>\n \xA0 \xA0 \xA0 \xA0\u8FD4\u56DE\n \xA0 \xA0 \xA0</div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var _this = this;\n\n    return React.createElement(\n      'div',\n      { onClick: function onClick() {\n          var customHandler = _this.props.customHandler;\n\n          customHandler({\n            eventType: 'click'\n          });\n        } },\n      '\\xA0 \\xA0 \\xA0 \\xA0\\u8FD4\\u56DE \\xA0 \\xA0 \\xA0'\n    );\n  }\n});";
    }
  }, "TestModel");
})(window, ysp);