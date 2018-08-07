"use strict";

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control321_P7fT3E: function (elem) {
      ;if (!elem) {
        return false;
      }var WorkSpace = ysp.customHelper.getTargetMenus(["工作台", "信息录入", "拜访总览", "拜访查看", "@我的报告", "汇报总结", '问卷填写', '问卷反馈']);var Achievement = ysp.customHelper.getTargetMenus(["销售业绩总览", "计划达成总览"]);var InFormation = ysp.customHelper.getTargetMenus(["库存查询", "产品上下架", "分货查询", "我的工作"]);var ClientOrStore = ysp.customHelper.getTargetMenus(['客户360', '门店360']);return { WorkSpace: WorkSpace, Achievement: Achievement, InFormation: InFormation, ClientOrStore: ClientOrStore };
    },
    doAction_uiControl63_ax7qQG: function (data, elem) {
      //下拉刷新 , 因模版原因,现刷新原网页实现
      if (data.eventType == 'reload') {
        elem.ownerDocument.defaultView.location.reload();
      }if (data.eventType == 'click') {
        var src = data.dataCustom.url;var title = data.dataCustom.title;if (title == '拜访总览') {
          openUrl(src);
        } else {
          elem.ownerDocument.defaultView.open(src);
        }
      } //图标尺寸  48 * 48   文字大小 17px
      if (data.eventType == 'click_infomation') {
        var src = data.dataCustom.url;var title = data.dataCustom.title;switch (title) {case '产品上下架':
            src = src + '/querySku?a=1&';break;}openUrl(src);
      } //请求大数据参数接口 . 拼接地址进行跳转
      function openUrl(src) {
        var xhr = new XMLHttpRequest();xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            var obj = JSON.parse(xhr.response);var branch = obj.branch.match(/\d+/) ? obj.branch.match(/\d+/)[0] : obj.branch;src = src.indexOf('?') != -1 && src.indexOf('&') != -1 ? src + '&filter_userId=' + obj.userId + '&encoder=' + obj.encoder + '&username=' + obj.userId : src + '?filter_userId=' + obj.userId + '&encoder=' + obj.encoder + '&username=' + obj.userId;elem.ownerDocument.defaultView.open(src);
          }
        };xhr.open('POST', 'http://192.168.220.82:8080/pttlCrm/homepage/getUserIdAndEncoder', false);xhr.send();
      } //+ '&branch=' + branch;
      //+ 'branch=' + branch
      // var Achievement = ysp.customHelper.getTargetMenus(["销售业绩总览", "计划达成总览", "事业部达成", "项目达成", "产品达成", "分公司达成", "办事处达成", "销售人员达成", "客户门店达成", "年度销售达成"]);
    },
    getTemplate_uiControl63_ax7qQG: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n  super();\n   var _this = this; window.addEventListener('touchstart',_this.TouchStart.bind(_this),false);\n    window.addEventListener('touchmove',_this.TouchMove.bind(_this),false);\n    window.addEventListener('touchend',_this.TouchEnd.bind(_this),false);\n    _this.canefresh = false;\n    _this.startY = 0;\n    _this.endY = 0;\n    _this.padding=0;\n  }\n  TouchStart(e){\n    \n    var _this = this;\n    _this.startY = e.touches[0].pageY;\n if(e.target.ownerDocument.defaultView.document.querySelector('.view-wrapper') && e.target.ownerDocument.defaultView.document.querySelector('.view-wrapper').scrollTop <=0 && _this.startY < 100){\n      _this.canefresh = true;\n    }\n    \n  }\n  TouchMove(e){\n    var _this = this;\n    if(!_this.canefresh){\n      return ;\n    }\n    _this.endY = e.touches[0].pageY;\n    if(_this.endY - _this.startY > 60 && _this.refs.Menus && _this.endY < 400){\n      _this.padding = (_this.endY - _this.startY)/2;\n      _this.refs.Menus.style.paddingTop = _this.padding+'px';\n    }\n    var height = e.target.ownerDocument.defaultView.document.body.clientHeight;\n    var width = e.target.ownerDocument.defaultView.document.body.clientWidth;\n    if(_this.endY > 480 || (width-e.touches[0].pageX < 10) || (_this.endY - _this.startY > 260  && _this.padding > 150)){\n      _this.TouchEnd()\n    }\n  }\n  TouchEnd(e){\n    var _this = this;\n    if(!_this.canefresh){\n      return ;\n    }\n    if(((_this.endY - _this.startY) > 260) && _this.canefresh && _this.endY > 10 && _this.padding > 150){\n \xA0 \xA0 \xA0var handler = _this.props.customHandler;\n      if(handler){\n        handler({\n          eventType:'reload'\n        })\n      }\n    }else if(_this.endY > 480){\n      _this.endY = 0;\n      _this.startY = 0;\n      _this.canefresh = false;\n      _this.padding = 0;\n      if(_this.refs.Menus){\n        _this.refs.Menus.style.paddingTop = '0px';\n      }\n    }\n    _this.endY = 0;\n    _this.startY = 0;\n    _this.canefresh = false;\n    _this.padding = 0;\n \xA0 \xA0if(_this.refs.Menus){\n      _this.refs.Menus.style.paddingTop = '0px';\n    }\n       \n  }\n  onClick(e){\n    var _this = this;\n    if(e.target.nodeName != \"LI\"){\n      if(e.target.nodeName == 'SPAN'){\n        e.target = e.target.parentNode\n      }else if(e.target.nodeName == 'UL'){\n        e.target = e.target.children\n      }\n    }\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        data:{url:e.target.dataset.url,title:e.target.querySelector('.Menus-content').textContent},\n        eventType:'click'\n      })\n    }\n  }\n  onClick_infomation(e){\n    var _this = this;\n    if(e.target.nodeName != \"LI\"){\n      if(e.target.nodeName == 'SPAN'){\n        e.target = e.target.parentNode\n      }else if(e.target.nodeName == 'UL'){\n        e.target = e.target.children\n      }\n    }\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        data:{url:e.target.dataset.url,title:e.target.querySelector('.Menus-content').textContent},\n \xA0 \xA0 \xA0 \xA0eventType:'click_infomation'\n      })\n    }\n  }\n  render(){\n    var _this = this;\n    var WorkSpace = this.props.customData.WorkSpace;\n    var Achievement = this.props.customData.Achievement;\n    var InFormation = this.props.customData.InFormation;\n \xA0 \xA0var ClientOrStore = this.props.customData.ClientOrStore\n \xA0 \xA0return(\n \xA0  \t<div className='ysp-Menus-All' ref='Menus'>\n        <ul onClick={_this.onClick.bind(_this)} className='ysp-Menus-all-WorkSpace'>\n          <div className='ysp-Menus-title'>\n          <span className='Menus-head'>\u6211\u7684\u5DE5\u4F5C</span>\n          </div>\n          {WorkSpace && WorkSpace.map((item,index)=>{\n            return(\n \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0<li data-url={item.url} className='Menus-list'><span className={item.code}>{(item.name.indexOf('@')!==-1)||(item.name.indexOf('\u62DC\u8BBF\u67E5\u770B')!=-1)?item.name.substr(1,1):item.name.substr(0,1)}</span><span className='Menus-content'>{item.name}</span></li>\n            )\n          })}\n        </ul><ul onClick={_this.onClick_infomation.bind(_this)} className='ysp-Menus-all-Achievement'>\n          <div className='ysp-Menus-title'><span className='Menus-head'>\u4E1A\u7EE9\u8FBE\u6210</span>\n          </div>\n          {Achievement && Achievement.map((item,index)=>{\n            return(\n \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0<li data-url={item.url} className='Menus-list'><span className={item.code}>{item.name.substr(0,1)}</span><span className='Menus-content'>{item.name}</span></li>\n            )\n          })}\n        </ul><ul onClick={_this.onClick_infomation.bind(_this)} className='ysp-Menus-all-InFormation'>\n          <div className='ysp-Menus-title'><span className='Menus-head'>\u6570\u636E\u770B\u677F</span>\n          </div>\n          {InFormation && InFormation.map((item,index)=>{\n            return(\n \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0<li data-url={item.url} className='Menus-list'><span className={item.code}>{item.name.substr(0,1)}</span><span className='Menus-content'>{item.name}</span></li>\n            )\n          })}\n        </ul><ul onClick={_this.onClick.bind(_this)} className='ysp-Menus-all-ClientOrStore'>\n \xA0 \xA0 \xA0 \xA0 \xA0<div className='ysp-Menus-title'><span className='Menus-head'>\u5BA2\u6237&\u95E8\u5E97</span>\n          </div>\n          {ClientOrStore && ClientOrStore.map((item,index)=>{\n            return(\n \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0<li data-url={item.url} className='Menus-list'><span className={item.code}>{item.name.substr(0,1)}</span><span className='Menus-content'>{item.name}</span></li>\n            )\n          })}\n        </ul>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    var _this = _this2;window.addEventListener('touchstart', _this.TouchStart.bind(_this), false);\n    window.addEventListener('touchmove', _this.TouchMove.bind(_this), false);\n    window.addEventListener('touchend', _this.TouchEnd.bind(_this), false);\n    _this.canefresh = false;\n    _this.startY = 0;\n    _this.endY = 0;\n    _this.padding = 0;\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'TouchStart',\n    value: function TouchStart(e) {\n\n      var _this = this;\n      _this.startY = e.touches[0].pageY;\n      if (e.target.ownerDocument.defaultView.document.querySelector('.view-wrapper') && e.target.ownerDocument.defaultView.document.querySelector('.view-wrapper').scrollTop <= 0 && _this.startY < 100) {\n        _this.canefresh = true;\n      }\n    }\n  }, {\n    key: 'TouchMove',\n    value: function TouchMove(e) {\n      var _this = this;\n      if (!_this.canefresh) {\n        return;\n      }\n      _this.endY = e.touches[0].pageY;\n      if (_this.endY - _this.startY > 60 && _this.refs.Menus && _this.endY < 400) {\n        _this.padding = (_this.endY - _this.startY) / 2;\n        _this.refs.Menus.style.paddingTop = _this.padding + 'px';\n      }\n      var height = e.target.ownerDocument.defaultView.document.body.clientHeight;\n      var width = e.target.ownerDocument.defaultView.document.body.clientWidth;\n      if (_this.endY > 480 || width - e.touches[0].pageX < 10 || _this.endY - _this.startY > 260 && _this.padding > 150) {\n        _this.TouchEnd();\n      }\n    }\n  }, {\n    key: 'TouchEnd',\n    value: function TouchEnd(e) {\n      var _this = this;\n      if (!_this.canefresh) {\n        return;\n      }\n      if (_this.endY - _this.startY > 260 && _this.canefresh && _this.endY > 10 && _this.padding > 150) {\n        var handler = _this.props.customHandler;\n        if (handler) {\n          handler({\n            eventType: 'reload'\n          });\n        }\n      } else if (_this.endY > 480) {\n        _this.endY = 0;\n        _this.startY = 0;\n        _this.canefresh = false;\n        _this.padding = 0;\n        if (_this.refs.Menus) {\n          _this.refs.Menus.style.paddingTop = '0px';\n        }\n      }\n      _this.endY = 0;\n      _this.startY = 0;\n      _this.canefresh = false;\n      _this.padding = 0;\n      if (_this.refs.Menus) {\n        _this.refs.Menus.style.paddingTop = '0px';\n      }\n    }\n  }, {\n    key: 'onClick',\n    value: function onClick(e) {\n      var _this = this;\n      if (e.target.nodeName != \"LI\") {\n        if (e.target.nodeName == 'SPAN') {\n          e.target = e.target.parentNode;\n        } else if (e.target.nodeName == 'UL') {\n          e.target = e.target.children;\n        }\n      }\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { url: e.target.dataset.url, title: e.target.querySelector('.Menus-content').textContent },\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'onClick_infomation',\n    value: function onClick_infomation(e) {\n      var _this = this;\n      if (e.target.nodeName != \"LI\") {\n        if (e.target.nodeName == 'SPAN') {\n          e.target = e.target.parentNode;\n        } else if (e.target.nodeName == 'UL') {\n          e.target = e.target.children;\n        }\n      }\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { url: e.target.dataset.url, title: e.target.querySelector('.Menus-content').textContent },\n          eventType: 'click_infomation'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var WorkSpace = this.props.customData.WorkSpace;\n      var Achievement = this.props.customData.Achievement;\n      var InFormation = this.props.customData.InFormation;\n      var ClientOrStore = this.props.customData.ClientOrStore;\n      return React.createElement(\n        'div',\n        { className: 'ysp-Menus-All', ref: 'Menus' },\n        React.createElement(\n          'ul',\n          { onClick: _this.onClick.bind(_this), className: 'ysp-Menus-all-WorkSpace' },\n          React.createElement(\n            'div',\n            { className: 'ysp-Menus-title' },\n            React.createElement(\n              'span',\n              { className: 'Menus-head' },\n              '\\u6211\\u7684\\u5DE5\\u4F5C'\n            )\n          ),\n          WorkSpace && WorkSpace.map(function (item, index) {\n            return React.createElement(\n              'li',\n              { 'data-url': item.url, className: 'Menus-list' },\n              React.createElement(\n                'span',\n                { className: item.code },\n                item.name.indexOf('@') !== -1 || item.name.indexOf('\u62DC\u8BBF\u67E5\u770B') != -1 ? item.name.substr(1, 1) : item.name.substr(0, 1)\n              ),\n              React.createElement(\n                'span',\n                { className: 'Menus-content' },\n                item.name\n              )\n            );\n          })\n        ),\n        React.createElement(\n          'ul',\n          { onClick: _this.onClick_infomation.bind(_this), className: 'ysp-Menus-all-Achievement' },\n          React.createElement(\n            'div',\n            { className: 'ysp-Menus-title' },\n            React.createElement(\n              'span',\n              { className: 'Menus-head' },\n              '\\u4E1A\\u7EE9\\u8FBE\\u6210'\n            )\n          ),\n          Achievement && Achievement.map(function (item, index) {\n            return React.createElement(\n              'li',\n              { 'data-url': item.url, className: 'Menus-list' },\n              React.createElement(\n                'span',\n                { className: item.code },\n                item.name.substr(0, 1)\n              ),\n              React.createElement(\n                'span',\n                { className: 'Menus-content' },\n                item.name\n              )\n            );\n          })\n        ),\n        React.createElement(\n          'ul',\n          { onClick: _this.onClick_infomation.bind(_this), className: 'ysp-Menus-all-InFormation' },\n          React.createElement(\n            'div',\n            { className: 'ysp-Menus-title' },\n            React.createElement(\n              'span',\n              { className: 'Menus-head' },\n              '\\u6570\\u636E\\u770B\\u677F'\n            )\n          ),\n          InFormation && InFormation.map(function (item, index) {\n            return React.createElement(\n              'li',\n              { 'data-url': item.url, className: 'Menus-list' },\n              React.createElement(\n                'span',\n                { className: item.code },\n                item.name.substr(0, 1)\n              ),\n              React.createElement(\n                'span',\n                { className: 'Menus-content' },\n                item.name\n              )\n            );\n          })\n        ),\n        React.createElement(\n          'ul',\n          { onClick: _this.onClick.bind(_this), className: 'ysp-Menus-all-ClientOrStore' },\n          '\\xA0 \\xA0 \\xA0 \\xA0 \\xA0',\n          React.createElement(\n            'div',\n            { className: 'ysp-Menus-title' },\n            React.createElement(\n              'span',\n              { className: 'Menus-head' },\n              '\\u5BA2\\u6237&\\u95E8\\u5E97'\n            )\n          ),\n          ClientOrStore && ClientOrStore.map(function (item, index) {\n            return React.createElement(\n              'li',\n              { 'data-url': item.url, className: 'Menus-list' },\n              React.createElement(\n                'span',\n                { className: item.code },\n                item.name.substr(0, 1)\n              ),\n              React.createElement(\n                'span',\n                { className: 'Menus-content' },\n                item.name\n              )\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control323_LpKwKt: function (elem) {
      if (elem) {
        return false;
      }if (!elem) {
        alert('我到底看看为什么找不着.');
      }
    },
    doAction_uiControl312_k8ZZCQ: function (data, elem) {
      if (data.eventType === 'back') {
        ysp.customHelper.backHome();
      }if (data.eventType === 'initState') {
        ysp.customHelper.BackFlag = 0; //初始化拜访管理逐级返回标识
      }
    },
    getTemplate_uiControl312_k8ZZCQ: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  componentDidMount(){\n    var _this = this;\n    const {customHandler} = _this.props;\n    customHandler  && customHandler({eventType:'initState'})\n  }\n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader \n \xA0 \xA0 \xA0 \xA0 \xA0 data={{centerText:\"\u9996\u9875\",rightText:\"\u7B5B\u9009\"}} \n           backIsShow={false} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n                pt_oberseve.subscribe('temp:visit:clientstore:choose', _this.switch,this);\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}\n           hander={(e)=>{\ne.target.ownerDocument.defaultView.document.querySelector('.view-wrapper').scrollTop = 0;\n           }}/>\n       );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: \"\u9996\u9875\", rightText: \"\u7B5B\u9009\" },\n        backIsShow: false,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'back'\n            });\n            pt_oberseve.subscribe('temp:visit:clientstore:choose', _this.switch, _this2);\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info(\"header filter ...\");\n        },\n        hander: function hander(e) {\n          e.target.ownerDocument.defaultView.document.querySelector('.view-wrapper').scrollTop = 0;\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this = this;\n      var customHandler = _this.props.customHandler;\n\n      customHandler && customHandler({ eventType: 'initState' });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "index");
})(window, ysp);