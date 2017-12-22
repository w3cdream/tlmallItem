(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control211_P393dz: function (elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl208_sCqHow: function (data, elem) {
      if ("back" == data.eventType) {
        var doc = elem.ownerDocument;var targetEl = doc.querySelector('#clientMenu');ysp.customHelper.toPlan(targetEl, "客户详情", "clientInfo");
      }
    },
    getTemplate_uiControl208_sCqHow: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   \n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:\"\u62DC\u8BBF\u8BB0\u5F55\",rightText:\"\u7B5B\u9009\"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: \"\u62DC\u8BBF\u8BB0\u5F55\", rightText: \"\u7B5B\u9009\" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'back'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info(\"header filter ...\");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control268_WJKAT9: function (elem) {
      if (!elem) {
        return;
      }var data = { content: [], subContent: [] };var d = ysp.customHelper.getTableData(elem, ["拜访日期", "拜访人员", "角色", "分公司", "办事处", "签到时间", "签到地址", "签出时间", "签出地址", "拜访报告"]);data.content.push(d);var obj = {};var divs = elem.ownerDocument.querySelector("#contentDetils");obj.storeName = divs.querySelector("#report_customerName").textContent;obj.reportTime = divs.querySelector("#report_DT").textContent;obj.huaweiFD = divs.querySelector("#huaweiFD").value;obj.huaweiPJ = divs.querySelector("#huaweiPJ").value;obj.reportSanxing = divs.querySelector("#report_sanxing").textContent;obj.reportFenxiao = divs.querySelector("#report_fenxiao").textContent;obj.goodsInformation = divs.querySelector("#goodsInformation").value;obj.financialInformation = divs.querySelector("#financialInformation").value;obj.businessInformation = divs.querySelector("#businessInformation").value;obj.reportKehufengxian = divs.querySelector("#report_kehufengxian").textContent;obj.reportOthers = divs.querySelector("#report_others").textContent;obj.reportAtName = divs.querySelector("#report_atName").textContent;obj.chats = ysp.customHelper.trim(divs.querySelector(".chats").textContent);data.subContent.push(obj);data.file = [];var fileList = elem.ownerDocument.querySelector("#fileList");if (fileList) {
        if (fileList.querySelectorAll(".file-item").length > 0) {
          var divs = elem.ownerDocument.querySelector('#fileList').querySelectorAll(".file-item");if (window.reportSrc) {
            if (window.reportSrc.length > divs.length) {
              window.reportSrc.splice(0, window.reportSrc.length - divs.length);
            }
          } else {
            window.reportSrc = [];
          }for (var i = 0; i < divs.length; i++) {
            var src = [],
                title = [],
                content = [];var imgCanvas = ysp.customHelper.convertImageToCanvas(divs[i].querySelector('img'));var scrC = ysp.customHelper.convertCanvasToImage(imgCanvas);src.push(scrC);var s;title.push(divs[i].querySelector('img').getAttribute('title') || divs[i].querySelector('.info').getAttribute('title'));content.push(divs[i].querySelector('.info').textContent);var images = { title: title, content: content, src: src };data.file.push(images);
          }
        }
      }data.dataLoading = [];var loading = ysp.customHelper.tipMsg.getLoading();data.dataLoading.push(loading);return data;
    },
    doAction_uiControl262_ryJkxX: function (data, elem) {
      if (data.eventType == "click") {
        var index = data.dataCustom;var trs = elem.ownerDocument.querySelector("#bodyContent").querySelectorAll("tr");trs[index].querySelectorAll("td")[9].querySelector("a").click();
      } // if (data.eventType == "clickHES") {
      //   var index = data.dataCustom;
      //   var aEls = elem.ownerDocument.querySelectorAll("tr > td a");
      //   if (aEls[index]) {
      //     var source = "store360";
      //     var rowId = aEls[index].getAttribute('val');
      //     var storeCode = aEls[index].getAttribute('val1');
      //     var eaiId = aEls[index].getAttribute('val2');
      //     source = ysp.customHelper.trim(source);
      //     rowId = ysp.customHelper.trim(rowId);
      //     storeCode = ysp.customHelper.trim(storeCode);
      //     eaiId = ysp.customHelper.trim(eaiId);
      //     var indexWin = elem.ownerDocument.defaultView;
      //     indexWin && indexWin.open("http://192.168.220.82:8080/pttlCrm/res/page/visitManager/report/answerList.html?source=" + source + "&rowId=" + rowId + "&storeCode=" + storeCode + "&eaiId=" + eaiId, 'answerList');
      //   }
      // }
    },
    getTemplate_uiControl262_ryJkxX: function () {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n  CustomHeader,Dialog,Pagination,CustomerSerch\n} from 'ysp-custom-components';\nexport default class extends Component {\n  constructor(props){\n    super(props);\n    this.state={\n      open:false\n    }\n    var viewer;\n  }\n  // componentDidUpdate(){\n  //   var _this = this;\n  //   this.viewer = new Viewer(this.refs.Img);\n  // }\n  componentDidMount(){\n    this.viewer = new Viewer(this.refs.Img);\n  }\n  componentDidMount(){\n    var _this = this;\n  }\n  Dimg=(e)=>{\n    var _this = this;\n    _this.viewer = new Viewer(this.refs.Img);\n    _this.viewer.show();\n  }\n  \n  handlerClick = (e) =>{\n    let _this = this;\n    var index = e.currentTarget.dataset.index;\n    var handler = _this.props.customHandler;\n    _this.setState({\n        open: true\n      })\n    if(handler){\n      handler({\n        eventType:'click',\n\t\t\t\tdata: index\n      })\n    }\n  }\n  \n  clickHES = (e) =>{\n    var index = e.currentTarget.dataset.index;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'clickHES',\n        data:index\n      })\n    }\n  }\n  \n  renderSubPerson(){\n    var data = (this.props.customData && this.props.customData.subContent[0]) || [];\n    var imgData = (this.props.customData && this.props.customData.file) || [];\n    return(\n      <div className=\"ysp-store-report-dialog\">\n      \t<div>\n          <span>\u76EE\u6807:</span>\n          <span>{data.storeName}</span>\n        </div>\n        \n        <div>\n          <span>\u65F6\u95F4:</span>\n          <span>{data.reportTime}</span>\n        </div>\n        \n        <div className=\"ysp-store-report-title-dialog\">\u534E\u4E3AFD</div>\n        <div className=\"ysp-store-report-content-dialog\">{data.huaweiFD}</div>\n\t\t\t\t<div className=\"ysp-store-report-title-dialog\">\u534E\u4E3A\u914D\u4EF6\u4E0E\u878D\u5408</div>\n        <div className=\"ysp-store-report-content-dialog\">{data.huaweiPJ}</div>\n\t\t\t\t<div className=\"ysp-store-report-title-dialog\">\u4E09\u661F\u4E8B\u4E1A\u90E8</div>\n        <div className=\"ysp-store-report-content-dialog\">{data.reportSanxing}</div>\n\t\t\t\t<div className=\"ysp-store-report-title-dialog\">\u5206\u9500\u4E8B\u4E1A\u90E8</div>\n        <div className=\"ysp-store-report-content-dialog\">{data.reportFenxiao}</div>\n\t\t\t\t<div className=\"ysp-store-report-title-dialog\">\u7269\u6D41\u4FE1\u606F</div>\n        <div className=\"ysp-store-report-content-dialog\">{data.goodsInformation}</div>\n\t\t\t\t<div className=\"ysp-store-report-title-dialog\">\u8D22\u52A1\u4FE1\u606F</div>\n        <div className=\"ysp-store-report-content-dialog\">{data.financialInformation}</div>\n\t\t\t\t<div className=\"ysp-store-report-title-dialog\" >\u7535\u5546\u4FE1\u606F</div>\n        <div className=\"ysp-store-report-content-dialog\">{data.businessInformation}</div>\n\t\t\t\t<div className=\"ysp-store-report-title-dialog\">\u5BA2\u6237\u98CE\u9669</div>\n        <div className=\"ysp-store-report-content-dialog\">{data.reportKehufengxian}</div>\n\t\t\t\t<div className=\"ysp-store-report-title-dialog\">\u5176\u5B83\u4FE1\u606F</div>\n        <div className=\"ysp-store-report-content-dialog\">{data.reportOthers}</div>\n\n        <div className=\"ysp-store-report-atName-dialog\">\n          <span>@</span>\n          <span>&nbsp;{data.reportAtName.replace(/;/g,'\\\u3001')}</span>\n        </div>\n        <div className = \"ysp-store-report-picturesrc\" ref='Img' onClick={this.Dimg.bind(this)}>\n                \t{\n                  imgData==[]? <span style={{textAlign:'center',width:'100%'}}>\u6682\u65E0\u56FE\u7247\u663E\u793A\uFF01</span> : imgData.map((item,index)=>{\n                    return (\n                    \t<div className=\"ysp-store-report-picturesrcshow\">\n                        <span><img src = {item.src}></img></span>\n                          <span>{item.content}</span>\n                        </div>\n                    );\n                  })\n                }\n                </div>\n        <div className=\"ysp-store-report-ly-dialog\">\u7559\u8A00</div>\n        <div className=\"ysp-store-report-message-dialog\">\n          <div>{data.chats}</div>\n        </div>\n      </div>\n    );\n  }\n  \n  render = () => {\n    var  _this = this;\n    var data = (this.props.customData && this.props.customData.content[0] && this.props.customData.content[0].content) || [];\n    var dataLoading = (this.props.customData && this.props.customData.dataLoading[0]);\n    if (data.length == 0 && dataLoading == null) {\n      return (<div className=\"ysp-no-data\">\n        \t\t\t\t<div></div>\n                <div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>  \n        \t\t\t</div>);\n    }\n    return (\n      <div className=\"ysp-visit-record-wrapper\">\n        <div>\n        \t{data.map((item,index)=>{\n             return (\n                <div className=\"ysp-visit-record-content-wrapper\">\n                 <div>\n                   <div>\n                     <span>{item[3]}\u2014{item[4]}\u2014{item[1]}</span>\n                   </div>\n                   <div>\n                     <span>{item[2]}</span>\n                   </div>\n                 </div>\n                 <div>\n                   <span>\u7B7E\u5230\u65F6\u95F4:</span>\n                   <span>{item[5]}</span>\n                 </div>\n                 <div>\n                   <div>\n                     <span>\u7B7E\u51FA\u65F6\u95F4:</span>\n                     <span>{item[7]}</span>\n                   </div>\n                   <div>{item[9] == \"\u62A5\u544A\" ? <div className=\"ysp-client-submit-ok\" onClick = {this.handlerClick.bind(this)} data-index = {index} >\u62A5\u544A</div> : <div className=\"ysp-client-submit-no\">\u672A\u586B\u5199</div>}</div>\n                 </div>\n                 <div>\n                   <span>\u7B7E\u5230\u5730\u5740:</span>\n                   <span>{item[6]}</span>\n                 </div>\n                 <div>\n                   <span>\u7B7E\u51FA\u5730\u5740:</span>\n                   <span>{item[8]}</span>\n                 </div>\n                </div>\n             );\n           }) \n         }\n        </div>\n        \n        {this.state.open && \n          <Dialog>\n              <header className=\"ysp-dialog-header\">\n                <CustomHeader \n                   data={{centerText:\"\u62DC\u8BBF\u8BB0\u5F55\u62A5\u544A\u8BE6\u60C5\",rightText:\"\u7B5B\u9009\"}} \n                   backIsShow={true} \n                   back={()=>{\n                    this.setState({\n                      open: !this.state.open\n                    })\n                    var handler = _this.props.customHandler;\n                    if(handler){\n                      handler({\n                        eventType:'close'\n                      })\n                    }\n                  }}\n                   filterIsShow={false} \n                   filter={()=>{console.info(\"header filter ...\")}}/>\n              </header>\n                {this.renderSubPerson()}\n           </Dialog>\n      \t} \n    </div>\n    );\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.Dimg = function (e) {\n      var _this = _this2;\n      _this.viewer = new Viewer(_this2.refs.Img);\n      _this.viewer.show();\n    };\n\n    _this2.handlerClick = function (e) {\n      var _this = _this2;\n      var index = e.currentTarget.dataset.index;\n      var handler = _this.props.customHandler;\n      _this.setState({\n        open: true\n      });\n      if (handler) {\n        handler({\n          eventType: 'click',\n          data: index\n        });\n      }\n    };\n\n    _this2.clickHES = function (e) {\n      var index = e.currentTarget.dataset.index;\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'clickHES',\n          data: index\n        });\n      }\n    };\n\n    _this2.render = function () {\n      var _this = _this2;\n      var data = _this2.props.customData && _this2.props.customData.content[0] && _this2.props.customData.content[0].content || [];\n      var dataLoading = _this2.props.customData && _this2.props.customData.dataLoading[0];\n      if (data.length == 0 && dataLoading == null) {\n        return React.createElement(\n          'div',\n          { className: 'ysp-no-data' },\n          React.createElement('div', null),\n          React.createElement(\n            'div',\n            null,\n            '\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~'\n          )\n        );\n      }\n      return React.createElement(\n        'div',\n        { className: 'ysp-visit-record-wrapper' },\n        React.createElement(\n          'div',\n          null,\n          data.map(function (item, index) {\n            return React.createElement(\n              'div',\n              { className: 'ysp-visit-record-content-wrapper' },\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'span',\n                    null,\n                    item[3],\n                    '\\u2014',\n                    item[4],\n                    '\\u2014',\n                    item[1]\n                  )\n                ),\n                React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'span',\n                    null,\n                    item[2]\n                  )\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u7B7E\\u5230\\u65F6\\u95F4:'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  item[5]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'span',\n                    null,\n                    '\\u7B7E\\u51FA\\u65F6\\u95F4:'\n                  ),\n                  React.createElement(\n                    'span',\n                    null,\n                    item[7]\n                  )\n                ),\n                React.createElement(\n                  'div',\n                  null,\n                  item[9] == \"\u62A5\u544A\" ? React.createElement(\n                    'div',\n                    { className: 'ysp-client-submit-ok', onClick: _this2.handlerClick.bind(_this2), 'data-index': index },\n                    '\\u62A5\\u544A'\n                  ) : React.createElement(\n                    'div',\n                    { className: 'ysp-client-submit-no' },\n                    '\\u672A\\u586B\\u5199'\n                  )\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u7B7E\\u5230\\u5730\\u5740:'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  item[6]\n                )\n              ),\n              React.createElement(\n                'div',\n                null,\n                React.createElement(\n                  'span',\n                  null,\n                  '\\u7B7E\\u51FA\\u5730\\u5740:'\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  item[8]\n                )\n              )\n            );\n          })\n        ),\n        _this2.state.open && React.createElement(\n          _yspCustomComponents.Dialog,\n          null,\n          React.createElement(\n            'header',\n            { className: 'ysp-dialog-header' },\n            React.createElement(_yspCustomComponents.CustomHeader, {\n              data: { centerText: \"\u62DC\u8BBF\u8BB0\u5F55\u62A5\u544A\u8BE6\u60C5\", rightText: \"\u7B5B\u9009\" },\n              backIsShow: true,\n              back: function back() {\n                _this2.setState({\n                  open: !_this2.state.open\n                });\n                var handler = _this.props.customHandler;\n                if (handler) {\n                  handler({\n                    eventType: 'close'\n                  });\n                }\n              },\n              filterIsShow: false,\n              filter: function filter() {\n                console.info(\"header filter ...\");\n              } })\n          ),\n          _this2.renderSubPerson()\n        )\n      );\n    };\n\n    _this2.state = {\n      open: false\n    };\n    var viewer;\n    return _this2;\n  }\n  // componentDidUpdate(){\n  //   var _this = this;\n  //   this.viewer = new Viewer(this.refs.Img);\n  // }\n\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.viewer = new Viewer(this.refs.Img);\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this = this;\n    }\n  }, {\n    key: 'renderSubPerson',\n    value: function renderSubPerson() {\n      var data = this.props.customData && this.props.customData.subContent[0] || [];\n      var imgData = this.props.customData && this.props.customData.file || [];\n      return React.createElement(\n        'div',\n        { className: 'ysp-store-report-dialog' },\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'span',\n            null,\n            '\\u76EE\\u6807:'\n          ),\n          React.createElement(\n            'span',\n            null,\n            data.storeName\n          )\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'span',\n            null,\n            '\\u65F6\\u95F4:'\n          ),\n          React.createElement(\n            'span',\n            null,\n            data.reportTime\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-title-dialog' },\n          '\\u534E\\u4E3AFD'\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-content-dialog' },\n          data.huaweiFD\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-title-dialog' },\n          '\\u534E\\u4E3A\\u914D\\u4EF6\\u4E0E\\u878D\\u5408'\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-content-dialog' },\n          data.huaweiPJ\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-title-dialog' },\n          '\\u4E09\\u661F\\u4E8B\\u4E1A\\u90E8'\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-content-dialog' },\n          data.reportSanxing\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-title-dialog' },\n          '\\u5206\\u9500\\u4E8B\\u4E1A\\u90E8'\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-content-dialog' },\n          data.reportFenxiao\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-title-dialog' },\n          '\\u7269\\u6D41\\u4FE1\\u606F'\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-content-dialog' },\n          data.goodsInformation\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-title-dialog' },\n          '\\u8D22\\u52A1\\u4FE1\\u606F'\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-content-dialog' },\n          data.financialInformation\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-title-dialog' },\n          '\\u7535\\u5546\\u4FE1\\u606F'\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-content-dialog' },\n          data.businessInformation\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-title-dialog' },\n          '\\u5BA2\\u6237\\u98CE\\u9669'\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-content-dialog' },\n          data.reportKehufengxian\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-title-dialog' },\n          '\\u5176\\u5B83\\u4FE1\\u606F'\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-content-dialog' },\n          data.reportOthers\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-atName-dialog' },\n          React.createElement(\n            'span',\n            null,\n            '@'\n          ),\n          React.createElement(\n            'span',\n            null,\n            '\\xA0',\n            data.reportAtName.replace(/;/g, '\\\u3001')\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-picturesrc', ref: 'Img', onClick: this.Dimg.bind(this) },\n          imgData == [] ? React.createElement(\n            'span',\n            { style: { textAlign: 'center', width: '100%' } },\n            '\\u6682\\u65E0\\u56FE\\u7247\\u663E\\u793A\\uFF01'\n          ) : imgData.map(function (item, index) {\n            return React.createElement(\n              'div',\n              { className: 'ysp-store-report-picturesrcshow' },\n              React.createElement(\n                'span',\n                null,\n                React.createElement('img', { src: item.src })\n              ),\n              React.createElement(\n                'span',\n                null,\n                item.content\n              )\n            );\n          })\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-ly-dialog' },\n          '\\u7559\\u8A00'\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-store-report-message-dialog' },\n          React.createElement(\n            'div',\n            null,\n            data.chats\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);