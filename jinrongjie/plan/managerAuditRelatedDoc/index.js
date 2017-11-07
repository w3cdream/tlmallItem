(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control32_RBmFTr: function (elem) {},
    doAction_uiControl18_79vAeM: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }
    },
    getTemplate_uiControl18_79vAeM: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CommonHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:\"\u76F8\u5173\u6587\u6863\"}} \n       backIsShow = {true}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: \"\u76F8\u5173\u6587\u6863\" },\n        backIsShow: true,\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'click'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control33_gaRRTO: function (elem) {
      if (!elem) {
        return;
      }var data = {};var titles = ['标题', '主目录', '文档所有者'];var content = [];if (!elem.querySelector("#BrowseTable")) {
        data.titles = titles;data.content = content;return data;
      }var doc = elem.querySelector("#BrowseTable");var trs = doc.querySelectorAll('tr');[].forEach.call(trs, function (trItem, trIndex) {
        var tds = trItem.querySelectorAll('td');var tdContent = [];[].forEach.call(tds, function (tdItem, tdIndex) {
          if (tdIndex != 0) {
            tdContent.push(tdItem.textContent.trim());
          }
        });content.push(tdContent);
      });data.titles = titles;data.content = content;return data;
    },
    doAction_uiControl21_S9tvqE: function (data, elem) {
      var trIndex = data.dataCustom;var eventType = data.eventType;if (eventType == 'appendData') {
        elem.querySelector('#BrowseTable').querySelectorAll('tr')[trIndex].querySelector('a').click();
      }function addObjectToSelect(obj, str) {
        if (obj.tagName != "SELECT") return;var oOption = document.createElement("OPTION");obj.options.add(oOption);$(oOption).val(str.split("~")[0]);$(oOption).text(str.split("~")[1]);
      }
    },
    getTemplate_uiControl21_S9tvqE: function () {
      var selfTemplate = "import {Component} from 'react';\nimport {CommonHeader, ADialog} from 'ysp-custom-components';\nexport default class extends Component {\n\tconstructor(props) {// \u6784\u9020\u51FD\u6570-->\u521D\u59CB\u5316\n\t\tsuper(props);\n    this.state = {\n      isAppend: false\n    }\n\t}\n  \n  selectedData(e){\n    var handler = this.props.customHandler;\n    if(e.target.tagName == 'TD'){\n      var _target = e.target.parentElement;\n    }\n    if(e.target.tagName == 'TR'){\n      var _target = e.target;\n    }\n    if(handler){\n      handler({\n        data: _target.getAttribute('data-index'),\n        eventType: 'appendData'\n      });\n    }\n  }\n\n\trender() {\n\t\tvar data = this.props.customData || {};\n    \n    var titles = data.titles||[];\n    var content = data.content||[];\n    var _this = this;\n\t\treturn (\n\t\t\t<div className=\"ysp-related-doc-search-table\">\n\t\t\t\t<div id=\"tableData\">\n\t\t\t\t\t<table>\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t{titles.map((thItem, thIndex) => {\n\t\t\t\t\t\t\t\treturn (<th>{thItem}</th>);\n\t\t\t\t\t\t\t})}\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t{content.map((trItem, trIndex) => {\n\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t<tr data-index={trIndex} onClick={_this.selectedData.bind(_this)}>\n\t\t\t\t\t\t\t\t\t{trItem.map((tdItem, tdIndex) => {\n\t\t\t\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t\t\t\t<td>{tdItem}</td>\n\t\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t\t})}\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t})}\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t);\n\t}\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class(props) {\n\t\t_classCallCheck(this, _class);\n\n\t\tvar _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props)); // \u6784\u9020\u51FD\u6570-->\u521D\u59CB\u5316\n\n\n\t\t_this2.state = {\n\t\t\tisAppend: false\n\t\t};\n\t\treturn _this2;\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: 'selectedData',\n\t\tvalue: function selectedData(e) {\n\t\t\tvar handler = this.props.customHandler;\n\t\t\tif (e.target.tagName == 'TD') {\n\t\t\t\tvar _target = e.target.parentElement;\n\t\t\t}\n\t\t\tif (e.target.tagName == 'TR') {\n\t\t\t\tvar _target = e.target;\n\t\t\t}\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\tdata: _target.getAttribute('data-index'),\n\t\t\t\t\teventType: 'appendData'\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar data = this.props.customData || {};\n\n\t\t\tvar titles = data.titles || [];\n\t\t\tvar content = data.content || [];\n\t\t\tvar _this = this;\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'ysp-related-doc-search-table' },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ id: 'tableData' },\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'table',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'thead',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\ttitles.map(function (thItem, thIndex) {\n\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t'th',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\tthItem\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t),\n\t\t\t\t\t\tcontent.map(function (trItem, trIndex) {\n\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t'tr',\n\t\t\t\t\t\t\t\t{ 'data-index': trIndex, onClick: _this.selectedData.bind(_this) },\n\t\t\t\t\t\t\t\ttrItem.map(function (tdItem, tdIndex) {\n\t\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t\t'td',\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\ttdItem\n\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control12_0yipNy: function (elem) {
      if (!elem) {
        return;
      }var data = [];var content = [];var values = [];if (elem.querySelector('#date2during')) {
        var options = elem.querySelector('#date2during').querySelectorAll('option');for (var i = 0; i < options.length; i++) {
          if (options[i].textContent.trim() !== "") {
            content.push(options[i].textContent);values.push(options[i].value);
          }
        }
      } else if (elem.querySelector('select')) {
        var options = elem.querySelector('#date2during').querySelectorAll('option');for (var i = 0; i < options.length; i++) {
          if (options[i].textContent.trim() !== "") {
            content.push(options[i].textContent);values.push(options[i].value);
          }
        }
      }data[0] = values;data[1] = content;return data;
    },
    doAction_uiControl15_IFTFa2: function (data, elem) {
      // var clickType = data.eventType;
      // if (clickType == 'childNodes') {
      //   elem.querySelector('#secCategoryBtn').click();
      // }
      switch (data.eventType) {case 'childNodes':
          elem.querySelector('#secCategoryBtn').click();break;case 'dataInput':
          upValue(data.dataCustom);break;case 'search':
          doSearch(elem);break;}function upValue(data) {
        switch (data.content) {case 'searchid':
            elem.querySelector('input[name="searchid"]').value = data.value;break;case 'searchsubject':
            elem.querySelector('input[name="searchsubject"]').value = data.value;break;case 'date2during':
            elem.querySelector('#date2during').value = data.value;break;case 'searchdatefrom':
            elem.querySelector('#searchdatefromspan').textContent = data.value;elem.querySelector('input[name="searchdatefrom"]').value = data.value;break;case 'searchdateto':
            elem.querySelector('#searchdatetospan').textContent = data.value;elem.querySelector('input[name="searchdatefrom"]').value = data.value;break;}
      }function doSearch(elem) {
        var iframe = elem.ownerDocument.querySelector('#rightMenuIframe');if (iframe) {
          iframe.contentDocument.querySelector('#menuTable').querySelectorAll('button')[0].click();
        }
      }
    },
    getTemplate_uiControl15_IFTFa2: function () {
      var selfTemplate = "import { Component } from 'react';\nimport { Dialog, CommonHeader } from 'ysp-custom-components';\nexport default class extends Component {\n\tconstructor() {\n\t\tsuper();\n\t}\n\n\tchildNodes(e) {//\u67E5\u8BE2\u5B50\u76EE\u5F55\n\t\tlet handler = this.props.customHandler;\n\t\tif (handler) {\n\t\t\thandler({\n\t\t\t\teventType: \"childNodes\"\n\t\t\t})\n\t\t}\n\t}\n  \n  dataInput(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{content:e.target.dataset.content,value:e.target.value},\n        eventType:'dataInput'\n      })\n    }\n  }\n  \n  searchClick(e){\n    var handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n        eventType:\"search\"\n      })\n    }\n  }\n\n\trender() {\n\t\tvar _this = this;\n    var data = this.props.customData;\n\t\treturn (\n\t\t\t<div className=\"ysp-related-liucheng-wrapper\">\n\t\t\t\t<div className=\"left-content\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span className=\"small-span\">\u6807\u8BC6</span>\n\t\t\t\t\t\t<AInput className=\"small-input\" data-content='searchid' type=\"text\" onBlur={_this.dataInput.bind(_this)} />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span className=\"small-span\">\u6807\u9898</span>\n\t\t\t\t\t\t<AInput className=\"small-input\" data-content='searchsubject' type=\"text\" onBlur={_this.dataInput.bind(_this)} />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span className=\"small-span\">\u5458\u5DE5</span>\n\t\t\t\t\t\t<AInput className=\"search-icon small-input\" type=\"text\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span className=\"large-span\">\u4FEE\u6539\u671F\u95F4</span>\n\t\t\t\t\t\t<select data-content='date2during' className=\"ysp-related-liucheng-selectStyle small-select\" onBlur={_this.dataInput.bind(_this)} >\n              {data&&data[1].map((item,index)=>{\n                return(\n                  <option value={data[0][index]}>{item}</option>\n                );\n              })}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div className=\"right-content\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span className=\"small-span\">\u5B50\u76EE\u5F55</span>\n\t\t\t\t\t\t<AInput type=\"text\"  className=\"search-icon small-input\" onClick={_this.childNodes.bind(_this)} />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div className=\"date\">\n\t\t\t\t\t\t<span>\u65E5\u671F</span>\n\t\t\t\t\t\t<AInput data-content='searchdatefrom' type=\"date\" onBlur={_this.dataInput.bind(_this)} /><i> \u2014 </i><AInput data-content='searchdateto' type=\"date\" onBlur={_this.dataInput.bind(_this)} />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span className=\"small-span\">\u5BA2\u6237</span>\n\t\t\t\t\t\t<AInput className=\"search-icon small-input\" type=\"text\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div className=\"search-button\" onClick={_this.searchClick.bind(_this)}>\u641C\u7D22</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t);\n\t}\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class() {\n\t\t_classCallCheck(this, _class);\n\n\t\treturn _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: 'childNodes',\n\t\tvalue: function childNodes(e) {\n\t\t\t//\u67E5\u8BE2\u5B50\u76EE\u5F55\n\t\t\tvar handler = this.props.customHandler;\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\teventType: \"childNodes\"\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'dataInput',\n\t\tvalue: function dataInput(e) {\n\t\t\tvar handler = this.props.customHandler;\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\tdata: { content: e.target.dataset.content, value: e.target.value },\n\t\t\t\t\teventType: 'dataInput'\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'searchClick',\n\t\tvalue: function searchClick(e) {\n\t\t\tvar handler = this.props.customHandler;\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\teventType: \"search\"\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this = this;\n\t\t\tvar data = this.props.customData;\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'ysp-related-liucheng-wrapper' },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'left-content' },\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t{ className: 'small-span' },\n\t\t\t\t\t\t\t'\\u6807\\u8BC6'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(AInput, { className: 'small-input', 'data-content': 'searchid', type: 'text', onBlur: _this.dataInput.bind(_this) })\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t{ className: 'small-span' },\n\t\t\t\t\t\t\t'\\u6807\\u9898'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(AInput, { className: 'small-input', 'data-content': 'searchsubject', type: 'text', onBlur: _this.dataInput.bind(_this) })\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t{ className: 'small-span' },\n\t\t\t\t\t\t\t'\\u5458\\u5DE5'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(AInput, { className: 'search-icon small-input', type: 'text' })\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t{ className: 'large-span' },\n\t\t\t\t\t\t\t'\\u4FEE\\u6539\\u671F\\u95F4'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'select',\n\t\t\t\t\t\t\t{ 'data-content': 'date2during', className: 'ysp-related-liucheng-selectStyle small-select', onBlur: _this.dataInput.bind(_this) },\n\t\t\t\t\t\t\tdata && data[1].map(function (item, index) {\n\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t'option',\n\t\t\t\t\t\t\t\t\t{ value: data[0][index] },\n\t\t\t\t\t\t\t\t\titem\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'right-content' },\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t{ className: 'small-span' },\n\t\t\t\t\t\t\t'\\u5B50\\u76EE\\u5F55'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(AInput, { type: 'text', className: 'search-icon small-input', onClick: _this.childNodes.bind(_this) })\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'date' },\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'\\u65E5\\u671F'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(AInput, { 'data-content': 'searchdatefrom', type: 'date', onBlur: _this.dataInput.bind(_this) }),\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'i',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t' \\u2014 '\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(AInput, { 'data-content': 'searchdateto', type: 'date', onBlur: _this.dataInput.bind(_this) })\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t{ className: 'small-span' },\n\t\t\t\t\t\t\t'\\u5BA2\\u6237'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(AInput, { className: 'search-icon small-input', type: 'text' })\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'search-button', onClick: _this.searchClick.bind(_this) },\n\t\t\t\t\t\t'\\u641C\\u7D22'\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control35_DlAtJI: function (elem) {
      if (!elem) {
        return;
      }
      var data = {};
      var content = []; // var values = [];
      var selectedData = elem.querySelectorAll('option');
      if (selectedData.length > 0) {
        [].forEach.call(selectedData, (item, index) => {
          content.push(item.innerHTML.trim()); // values.push(item.value);
        });
      } else {
        content.push('暂无选中数据');
      }
      data.content = content; // data.values = values;
      return data;
    },
    doAction_uiControl31_fyTbiy: function (data, elem) {
      if (data.eventType == 'removeData') {
        if (elem.options.length > 0) {
          elem.querySelectorAll('option')[data.dataCustom].selected = true;
          elem.ownerDocument.defaultView.deleteFromList();
        }
      }
    },
    getTemplate_uiControl31_fyTbiy: function () {
      var selfTemplate = "import { Component } from 'react';\nimport { CustomHeader } from 'ysp-custom-components';\n\nexport default class extends Component {\n  constructor(props){\n    super(props);\n  }\n  \n  removeData=(e)=>{\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:e.target.dataset.num,\n        eventType:'removeData'\n      })\n    }\n  }\n  \n  render(){\n    var data = this.props.data.customData||{};\n    var content = data.content||[];\n    var _this = this;\n      return (\n      \t<div className=\"ysp-relate-project-selectedData\">\n          {content.map((item, index)=>{\n            return (<span data-num={index} onClick={_this.removeData.bind(_this)}>{item}<i className=\"right-top-icon\"></i></span>)\n          })}\n        </div>\n      );\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.removeData = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.dataset.num,\n          eventType: 'removeData'\n        });\n      }\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var data = this.props.data.customData || {};\n      var content = data.content || [];\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-relate-project-selectedData' },\n        content.map(function (item, index) {\n          return React.createElement(\n            'span',\n            { 'data-num': index, onClick: _this.removeData.bind(_this) },\n            item,\n            React.createElement('i', { className: 'right-top-icon' })\n          );\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control38_VzrzTB: function (elem) {},
    doAction_uiControl36_LwqiC4: function (data, elem) {},
    getTemplate_uiControl36_LwqiC4: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className=\"background-gray\"></div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\"div\", { className: \"background-gray\" });\n  }\n});";
    },
    getData_control83_SwDpyP: function (elem) {},
    doAction_uiControl66_5fUXvb: function (data, elem) {
      if (data.eventType == 'clcik') {
        elem.ownerDocument.defaultView.btnok_onclick();
      }
    },
    getTemplate_uiControl66_5fUXvb: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n     var handler = this.props.customHandler;\n      if(handler){\n        handler({\n          eventType:'click'\n        })\n      }\n\t},\n  render: function() {\n    return (\n      <div onClick = {(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'clcik'\n            })\n          }\n        }}>\n        \u786E\u5B9A\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n\n    return React.createElement(\n      'div',\n      { onClick: function onClick(e) {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'clcik'\n            });\n          }\n        } },\n      '\\u786E\\u5B9A'\n    );\n  }\n});";
    }
  });
})(window, ysp);