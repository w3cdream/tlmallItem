'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control7_thluKe: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl7_fXZ26L: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.returnHome();
      }
    },
    getTemplate_uiControl7_fXZ26L: function getTemplate_uiControl7_fXZ26L() {
      var selfTemplate = "import {Component} from 'react'; \nimport {CommonHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:\"\u6D41\u7A0B\"}} \n       backIsShow = {true}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: "\u6D41\u7A0B" },\n        backIsShow: true,\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'click\'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },

    getData_control202_Gigr6R: function (elem) {
      if (!elem) {
        return;
      }var daiban = ysp.customHelper.Dnum();return daiban;
    },
    doAction_uiControl184_cZLuFC: function (data, elem) {
      if (data.eventType == 'click') {
        //   var operation = data.dataCustom.operation;
        //   var planName = data.dataCustom.planName;
        //   if (operation != '') {
        //     ysp.customHelper.firstMenus(elem, operation);
        //   } else {
        //     console.error('operation参数未找到:流程未适配');
        //   }
        var src = data.dataCustom.href;var title = data.dataCustom.title;var href = "http://192.168.200.63" + src;ysp.customHelper.openWin(href, title);ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl184_cZLuFC: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  onclick=(e)=>{\n    var handler = this.props.customHandler;\n    var operation,href;\n    if(e.target.nodeName == 'LI'){\n       operation = e.target.dataset.title;\n       href = e.target.dataset.href;\n    }else{\n      e.target = e.target.parentElement;\n      operation = e.target.dataset.title;\n      href = e.target.dataset.href;\n    }\n    if(handler){\n      handler({\n        data:{href : href , title:operation},\n        eventType:'click'\n      })\n    }\n  }\n  render(){\n    return (\n    \t<div id='firstMenu'>\n        <ul>\n<li data-title='\u65B0\u5EFA\u6D41\u7A0B' data-href='/workflow/request/RequestType.jsp?needPopupNewPage=true'onClick={this.onclick.bind(this)}><i className='ysp-icon-Newlybuild'></i><span>\u65B0\u5EFA\u6D41\u7A0B</span></li>\n          <li data-title='\u5F85\u529E\u4E8B\u5B9C' data-href='/workflow/request/RequestView.jsp?' onClick={this.onclick.bind(this)}><i className='ysp-icon-Agency'></i><span>\u5F85\u529E\u4E8B\u5B9C</span><span className=\"num\">{this.props.customData && this.props.customData[0]}</span></li>\n         <li data-title='\u5DF2\u529E\u4E8B\u5B9C' data-href='/workflow/request/RequestHandled.jsp' //onClick={this.onclick.bind(this)}\n           ><i className='ysp-icon-Todo'></i><span>\u5DF2\u529E\u4E8B\u5B9C</span></li>\n          <li data-title='\u529E\u7ED3\u4E8B\u5B9C' data-href='/workflow/request/RequestComplete.jsp' //onClick={this.onclick.bind(this)}\n            ><i className='ysp-icon-banjie'></i><span>\u529E\u7ED3\u4E8B\u5B9C</span><span className=\"num\">{this.props.customData && this.props.customData[1]}</span></li>\n          <li data-title='\u6211\u7684\u6D41\u7A0B' data-href='/workflow/request/MyRequestView.jsp' //onClick={this.onclick.bind(this)}\n            ><i className='ysp-icon-My'></i><span>\u6211\u7684\u6D41\u7A0B</span></li>\n        </ul>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.onclick = function (e) {\n      var handler = _this.props.customHandler;\n      var operation, href;\n      if (e.target.nodeName == 'LI') {\n        operation = e.target.dataset.title;\n        href = e.target.dataset.href;\n      } else {\n        e.target = e.target.parentElement;\n        operation = e.target.dataset.title;\n        href = e.target.dataset.href;\n      }\n      if (handler) {\n        handler({\n          data: { href: href, title: operation },\n          eventType: 'click'\n        });\n      }\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { id: 'firstMenu' },\n        React.createElement(\n          'ul',\n          null,\n          React.createElement(\n            'li',\n            { 'data-title': '\\u65B0\\u5EFA\\u6D41\\u7A0B', 'data-href': '/workflow/request/RequestType.jsp?needPopupNewPage=true', onClick: this.onclick.bind(this) },\n            React.createElement('i', { className: 'ysp-icon-Newlybuild' }),\n            React.createElement(\n              'span',\n              null,\n              '\\u65B0\\u5EFA\\u6D41\\u7A0B'\n            )\n          ),\n          React.createElement(\n            'li',\n            { 'data-title': '\\u5F85\\u529E\\u4E8B\\u5B9C', 'data-href': '/workflow/request/RequestView.jsp?', onClick: this.onclick.bind(this) },\n            React.createElement('i', { className: 'ysp-icon-Agency' }),\n            React.createElement(\n              'span',\n              null,\n              '\\u5F85\\u529E\\u4E8B\\u5B9C'\n            ),\n            React.createElement(\n              'span',\n              { className: 'num' },\n              this.props.customData && this.props.customData[0]\n            )\n          ),\n          React.createElement(\n            'li',\n            { 'data-title': '\\u5DF2\\u529E\\u4E8B\\u5B9C', 'data-href': '/workflow/request/RequestHandled.jsp' //onClick={this.onclick.bind(this)}\n            },\n            React.createElement('i', { className: 'ysp-icon-Todo' }),\n            React.createElement(\n              'span',\n              null,\n              '\\u5DF2\\u529E\\u4E8B\\u5B9C'\n            )\n          ),\n          React.createElement(\n            'li',\n            { 'data-title': '\\u529E\\u7ED3\\u4E8B\\u5B9C', 'data-href': '/workflow/request/RequestComplete.jsp' //onClick={this.onclick.bind(this)}\n            },\n            React.createElement('i', { className: 'ysp-icon-banjie' }),\n            React.createElement(\n              'span',\n              null,\n              '\\u529E\\u7ED3\\u4E8B\\u5B9C'\n            ),\n            React.createElement(\n              'span',\n              { className: 'num' },\n              this.props.customData && this.props.customData[1]\n            )\n          ),\n          React.createElement(\n            'li',\n            { 'data-title': '\\u6211\\u7684\\u6D41\\u7A0B', 'data-href': '/workflow/request/MyRequestView.jsp' //onClick={this.onclick.bind(this)}\n            },\n            React.createElement('i', { className: 'ysp-icon-My' }),\n            React.createElement(\n              'span',\n              null,\n              '\\u6211\\u7684\\u6D41\\u7A0B'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);