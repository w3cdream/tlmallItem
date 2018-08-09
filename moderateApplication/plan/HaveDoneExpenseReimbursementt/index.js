(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control241_9uH42N: function (elem) {
      if (!elem) {
        return;
      }var data = {};var span = elem.querySelector('span');data.title = span.nextSibling.nextSibling.textContent.trim();return data;
    },
    doAction_uiControl241_TchMcP: function (data, elem) {
      if (data.eventType == 'click') {
        if (ysp.appMain.isIOS()) {
          // elem.ownerDocument.defaultView.close();
          ysp.runtime.Browser.activeBrowser.contentWindow.close();
        } else {
          ysp.appMain.back();
        }
      }
    },
    getTemplate_uiControl241_TchMcP: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  click:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className='titleH1'>\n          <Header title={data.title}>\n    \t\t\t\t<HeaderLeft>\n      \t\t\t\t<span></span><button onClick={this.click.bind(this)}>\u8FD4\u56DE</button>\n    \t\t\t\t</HeaderLeft>\n  \t\t\t\t</Header>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'titleH1' },\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { title: data.title },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement('span', null),\n          React.createElement(\n            'button',\n            { onClick: this.click.bind(this) },\n            '\\u8FD4\\u56DE'\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control242_Cyx5D9: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = elem.querySelector("div.title").textContent.trim();data.content = [];var trs = elem.querySelector('table').querySelector('tbody').querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          data.content.push({ leftval: tds[k].querySelector('label').textContent.trim(), rightval: tds[k].querySelector('input').value });
        }
      }return data;
    },
    doAction_uiControl242_B3goJu: function (data, elem) {},
    getTemplate_uiControl242_B3goJu: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var target = e.target;\n    if(target.parentElement.parentElement.nextElementSibling.className == 'content disnone'){\n      target.className = 'zhankai';\n      target.parentElement.parentElement.nextElementSibling.className = 'content';\n    }else{\n      target.className = 'shouqi';\n      target.parentElement.parentElement.nextElementSibling.className = 'content disnone'\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      return(\n      \t<div className='contenttit'>\n        \t<div className='contentitem'>{ele.leftval}</div>\n          <div className='contentitem'>{ele.rightval}</div>\n        </div>\n      )\n    })\n    return (\n      <div className='initiator'>\n        <div className='contenttitle'><span></span><p>{data.title}<i className='shouqi' onClick={_this.click}></i></p></div>\n        <div className='content disnone'>{lis}</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var target = e.target;\n    if (target.parentElement.parentElement.nextElementSibling.className == 'content disnone') {\n      target.className = 'zhankai';\n      target.parentElement.parentElement.nextElementSibling.className = 'content';\n    } else {\n      target.className = 'shouqi';\n      target.parentElement.parentElement.nextElementSibling.className = 'content disnone';\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      return React.createElement(\n        'div',\n        { className: 'contenttit' },\n        React.createElement(\n          'div',\n          { className: 'contentitem' },\n          ele.leftval\n        ),\n        React.createElement(\n          'div',\n          { className: 'contentitem' },\n          ele.rightval\n        )\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'initiator' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title,\n          React.createElement('i', { className: 'shouqi', onClick: _this.click })\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content disnone' },\n        lis\n      )\n    );\n  }\n});";
    },
    getData_control243_fPzTrx: function (elem) {
      if (!elem) {
        return;
      }var data = {}; // var table = elem.querySelectorAll('table')[0];
      var trs = elem.querySelectorAll('tr');data.title = '基本信息';data.content = [];for (var i = 0; i < trs.length; i++) {
        var arr = [];var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          if (tds[k].querySelector('span') == null) {
            if (tds[k].querySelector("input[type='text']")) {
              arr.push({ left: tds[k].querySelector('label').textContent.trim(), right: tds[k].querySelector('input').value, readyState: tds[k].querySelector('input').readOnly });
            }if (tds[k].querySelector('textarea')) {
              arr.push({ left: tds[k].querySelector('label').textContent.replace(/\s+/g, ''), right: tds[k].querySelector('textarea').value, type: 'textarea' });
            }if (tds[k].querySelector("input[type='radio']")) {
              arr.push({ left: tds[k].querySelector('label').textContent.replace(/\s+/g, ''), right: [tds[k].querySelectorAll("input[type='radio']")[0].checked, tds[k].querySelectorAll("input[type='radio']")[1].checked], type: 'radio' });
            }if (tds[k].querySelector("input[type='submit']")) {
              arr.push({ left: tds[k].querySelector("input[type='submit']").getAttribute('id'), right: tds[k].querySelector("input[type='submit']").value, type: 'submit' });
            }if (tds[k].querySelector("a")) {
              arr.push({ left: tds[k].querySelector('a').getAttribute('id'), right: tds[k].querySelector("a").textContent, type: 'a' });
            }
          }
        }data.content.push(arr);
      }return data;
    },
    doAction_uiControl243_iMWwv6: function (data, elem) {
      if (data.eventType == 'clickRadio') {
        var check = data.dataCustom[0];var index = data.dataCustom[1];var target = elem.querySelectorAll("input[type='radio']")[index];target.checked = check;
      } else if (data.eventType == 'blur') {
        var index = parseInt(data.dataCustom[0]);var val = data.dataCustom[1];var target = elem.querySelectorAll('tr')[index].querySelectorAll("input");for (var i = 0; i < target.length; i++) {
          if (target[i].readOnly == false) {
            target[i].value = val;
          }
        }
      } else if (data.eventType == 'clickBtn') {
        var id = data.dataCustom;var target = elem.querySelector("#" + id);target.click();
      } else if (data.eventType == 'clickhrefA') {
        var id = data.dataCustom;var target = elem.querySelector("#" + id);target.click();
      }
    },
    getTemplate_uiControl243_iMWwv6: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var target = e.target;\n    // debugger;\n    if(target.tagName.toLowerCase() == 'i'){\n      target = target.parentElement.parentElement;\n    }\n    if(target.tagName.toLowerCase() == 'a'){\n      target = target.parentElement;\n    }\n    if(target.previousSibling.className == 'content disnone'){\n      target.previousSibling.className = 'content';\n      target.querySelector('a').className = 'xia';\n      target.querySelector('a').nextSibling.textContent = '\u6536\u8D77\u66F4\u591A\u5185\u5BB9';\n    }else{\n      target.previousSibling.className = 'content disnone';\n      target.querySelector('a').className = 'shang';\n      target.querySelector('a').nextSibling.textContent = '\u663E\u793A\u66F4\u591A\u5185\u5BB9';\n    }\n  },\n  onblur:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'blur',\n        data:[target.dataset.index,target.value]\n      })\n    }\n  },\n  onclickRadio:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'clickRadio',\n        data:[target.dataset.checked,target.dataset.index]\n      })\n    }\n  },\n  onclickBtn:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'clickBtn',\n        data:target.getAttribute('id')\n      })\n    }\n  },\n  onclickhrefA:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'clickhrefA',    \n        data:target.getAttribute('id')\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      if(index<2){\n        var lisele = ele.map(function(d,i){\n          return(\n          \t<div className='contenttit'>\n            \t<div className='contentitem'>{d.left}</div>\n              <div className='contentitem'> <AInput value={d.right} readOnly={d.readyState}/></div>\n            </div>\n          )\n        })\n        return(\n        \t<div>{lisele}</div>\n        )\n      }\n    })\n    var list = data.content.map(function(ele,index){\n      if(index>1){\n        var lisele = ele.map(function(d,i){\n          if(!d.type){\n            return(\n          \t<div className='contenttit'>\n            \t<div className='contentitem'>{d.left}</div>\n              <div className='contentitem'>\n                \n                {d.readyState==true?<AInput value={d.right} readOnly={d.readyState}/>:<AInput value={d.right} readOnly={d.readyState} onBlur={_this.onblur.bind(_this)} data-index={index}/>}\n                \n              </div>\n            </div>\n          )\n          }else{\n            if(d.type == 'textarea'){\n              return(\n              \t<div className='contenttit'>\n                \t<div className='contentitem'>{d.left}</div>\n                  <div className='contentitem'><textarea value={d.right}></textarea></div>\n                </div>\n              )\n            }else if(d.type == 'radio'){\n              return(\n              \t<div className='contenttit'>\n                \t<div className='contentitem'>{d.left}</div>\n                  <div className='contentitem ysp-radioBtn-tt'>\n                  \t\t<span className={d.right[0]==true?\"ysp-RadiusSelected-tt\":\"ysp-RadiusUnselected-tt\"} data-checked={d.right[0]} data-index={0} onClick={_this.onclickRadio.bind(_this)}>\u662F</span>\n                    \t<span className={d.right[1]==true?\"ysp-RadiusSelected-tt\":\"ysp-RadiusUnselected-tt\"} data-checked={d.right[1]} data-index={1} onClick={_this.onclickRadio.bind(_this)}>\u5426</span>\n                  </div>\n                </div>\n              )\n            }\n            // else if(d.type == 'submit'){\n            //   return(\n            //   \t<div className='contenttit'>                \t\n            //       <div className='contentitem ysp-submitBtn-tt'>\n            //       \t\t<button id={d.left} onClick={_this.onclickBtn.bind(_this)}>{d.right}</button>\n            //       </div>\n            //     </div>\n            //   )\n            // }\n            // else if(d.type == 'a'){\n            //   return(\n            //   \t<div className='contenttit'>                \t\n            //       <div className='contentitem ysp-hrefA-tt'>\n            //       \t\t<span id={d.left} onClick={_this.onclickhrefA.bind(_this)}>{d.right}</span>\n            //       </div>\n            //     </div>\n            //   )\n            // }\n            \n          }\n        })\n        return(\n        \t<div>{lisele}</div>\n        )\n      }\n    })\n    return (\n      <div className='information'>\n       \t<div className='contenttitle'><span></span><p>{data.title}</p></div>\n        <div className='content'>\n          {lis}</div>\n        <div className='content disnone'>\n          {list}\n        </div>\n        <span onClick={_this.click}><a className='shang' href='javascript:;'></a>\u663E\u793A\u66F4\u591A\u5185\u5BB9</span>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var target = e.target;\n    // debugger;\n    if (target.tagName.toLowerCase() == 'i') {\n      target = target.parentElement.parentElement;\n    }\n    if (target.tagName.toLowerCase() == 'a') {\n      target = target.parentElement;\n    }\n    if (target.previousSibling.className == 'content disnone') {\n      target.previousSibling.className = 'content';\n      target.querySelector('a').className = 'xia';\n      target.querySelector('a').nextSibling.textContent = '\u6536\u8D77\u66F4\u591A\u5185\u5BB9';\n    } else {\n      target.previousSibling.className = 'content disnone';\n      target.querySelector('a').className = 'shang';\n      target.querySelector('a').nextSibling.textContent = '\u663E\u793A\u66F4\u591A\u5185\u5BB9';\n    }\n  },\n  onblur: function onblur(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'blur',\n        data: [target.dataset.index, target.value]\n      });\n    }\n  },\n  onclickRadio: function onclickRadio(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'clickRadio',\n        data: [target.dataset.checked, target.dataset.index]\n      });\n    }\n  },\n  onclickBtn: function onclickBtn(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'clickBtn',\n        data: target.getAttribute('id')\n      });\n    }\n  },\n  onclickhrefA: function onclickhrefA(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'clickhrefA',\n        data: target.getAttribute('id')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      if (index < 2) {\n        var lisele = ele.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'contenttit' },\n            React.createElement(\n              'div',\n              { className: 'contentitem' },\n              d.left\n            ),\n            React.createElement(\n              'div',\n              { className: 'contentitem' },\n              ' ',\n              React.createElement(AInput, { value: d.right, readOnly: d.readyState })\n            )\n          );\n        });\n        return React.createElement(\n          'div',\n          null,\n          lisele\n        );\n      }\n    });\n    var list = data.content.map(function (ele, index) {\n      if (index > 1) {\n        var lisele = ele.map(function (d, i) {\n          if (!d.type) {\n            return React.createElement(\n              'div',\n              { className: 'contenttit' },\n              React.createElement(\n                'div',\n                { className: 'contentitem' },\n                d.left\n              ),\n              React.createElement(\n                'div',\n                { className: 'contentitem' },\n                d.readyState == true ? React.createElement(AInput, { value: d.right, readOnly: d.readyState }) : React.createElement(AInput, { value: d.right, readOnly: d.readyState, onBlur: _this.onblur.bind(_this), 'data-index': index })\n              )\n            );\n          } else {\n            if (d.type == 'textarea') {\n              return React.createElement(\n                'div',\n                { className: 'contenttit' },\n                React.createElement(\n                  'div',\n                  { className: 'contentitem' },\n                  d.left\n                ),\n                React.createElement(\n                  'div',\n                  { className: 'contentitem' },\n                  React.createElement('textarea', { value: d.right })\n                )\n              );\n            } else if (d.type == 'radio') {\n              return React.createElement(\n                'div',\n                { className: 'contenttit' },\n                React.createElement(\n                  'div',\n                  { className: 'contentitem' },\n                  d.left\n                ),\n                React.createElement(\n                  'div',\n                  { className: 'contentitem ysp-radioBtn-tt' },\n                  React.createElement(\n                    'span',\n                    { className: d.right[0] == true ? \"ysp-RadiusSelected-tt\" : \"ysp-RadiusUnselected-tt\", 'data-checked': d.right[0], 'data-index': 0, onClick: _this.onclickRadio.bind(_this) },\n                    '\\u662F'\n                  ),\n                  React.createElement(\n                    'span',\n                    { className: d.right[1] == true ? \"ysp-RadiusSelected-tt\" : \"ysp-RadiusUnselected-tt\", 'data-checked': d.right[1], 'data-index': 1, onClick: _this.onclickRadio.bind(_this) },\n                    '\\u5426'\n                  )\n                )\n              );\n            }\n            // else if(d.type == 'submit'){\n            //   return(\n            //   \t<div className='contenttit'>                \t\n            //       <div className='contentitem ysp-submitBtn-tt'>\n            //       \t\t<button id={d.left} onClick={_this.onclickBtn.bind(_this)}>{d.right}</button>\n            //       </div>\n            //     </div>\n            //   )\n            // }\n            // else if(d.type == 'a'){\n            //   return(\n            //   \t<div className='contenttit'>                \t\n            //       <div className='contentitem ysp-hrefA-tt'>\n            //       \t\t<span id={d.left} onClick={_this.onclickhrefA.bind(_this)}>{d.right}</span>\n            //       </div>\n            //     </div>\n            //   )\n            // }\n          }\n        });\n        return React.createElement(\n          'div',\n          null,\n          lisele\n        );\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'information' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content' },\n        lis\n      ),\n      React.createElement(\n        'div',\n        { className: 'content disnone' },\n        list\n      ),\n      React.createElement(\n        'span',\n        { onClick: _this.click },\n        React.createElement('a', { className: 'shang', href: 'javascript:;' }),\n        '\\u663E\\u793A\\u66F4\\u591A\\u5185\\u5BB9'\n      )\n    );\n  }\n});";
    },
    getData_control245_Joks96: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = elem.textContent;return data;
    },
    doAction_uiControl245_KaGZVg: function (data, elem) {
      if (data.eventType == 'back') {
        //debugger;
        var target = elem.ownerDocument.defaultView.frameElement.parentElement.ownerDocument.defaultView.frameElement.contentDocument.querySelector('.aui_close');target.click();
      }
    },
    getTemplate_uiControl245_KaGZVg: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\n//import { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  click:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n      \teventType:'back'  \n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    if(!data){\n      return '';\n    }\n    return (\n      <div className='titleH1'>\n          <Header title={data.title}>\n    \t\t\t\t<HeaderLeft>\n      \t\t\t\t<span></span><button onClick={this.click.bind(this)}>\u8FD4\u56DE</button>\n    \t\t\t\t</HeaderLeft>\n  \t\t\t\t</Header>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\n//import { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'back'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (!data) {\n      return '';\n    }\n    return React.createElement(\n      'div',\n      { className: 'titleH1' },\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { title: data.title },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement('span', null),\n          React.createElement(\n            'button',\n            { onClick: this.click.bind(this) },\n            '\\u8FD4\\u56DE'\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control246_dt6Exk: function (elem) {
      if (!elem) {
        return;
      }var data = { content: [] };var trs = elem.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var arr = [];var tds = trs[i].querySelectorAll('td');for (var j = 0; j < tds.length; j++) {
          if (tds[j].querySelector('button')) {
            arr.push({ left: tds[j].querySelector('button').textContent.trim(), type: 'button' });
          } else {
            arr.push({ left: tds[j].querySelector('label').textContent.trim(), right: [tds[j].querySelectorAll('input')[0].value, tds[j].querySelectorAll('input')[1].value], id: [tds[j].querySelectorAll('input')[0].getAttribute('id'), tds[j].querySelectorAll('input')[1].getAttribute('id')] });
          }
        }data.content.push(arr);
      }return data;
    },
    doAction_uiControl246_cOUlSk: function (data, elem) {
      if (data.eventType == 'clickBtn') {
        var target = elem.querySelector('button');target.click();
      } else if (data.eventType == 'blurDate') {
        var id = data.dataCustom[0];var val = data.dataCustom[1];var target = elem.querySelector("#" + id);target.value = val;
      }
    },
    getTemplate_uiControl246_cOUlSk: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onclickBtn:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'clickBtn'\n      })\n    }\n  },\n  onblurDate:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'blurDate',\n        data:[target.getAttribute('id'),target.value]\n      })\n    }\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n    if(!data){\n      return '';\n    }\n    var lists=data.content.map(function(d,i){\n      var list=d.map(function(dd,ii){\n        if(dd.type=='button'){\n          return(\n          \t<button onClick={_this.onclickBtn.bind(_this)}>{dd.left}</button>\n          )\n        }else{\n          return(\n        \t\t<div>\n            \t<span>{dd.left}</span>\n              <AInput type='date' id={dd.id[0]} value={dd.right[0]} onBlur={_this.onblurDate.bind(_this)}/>\n              <AInput type='date' id={dd.id[1]} value={dd.right[1]} onBlur={_this.onblurDate.bind(_this)}/>\n              <span>\u2014></span>\n            </div>\n        \t)\n        }\n        \n      })\n      return(\n      \t\t<div className='ysp-checkDateContent-tt'>{list}</div>\n      )\n    })\n    return (\n      <div className='ysp-checkDate-tt'>\n       {lists}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onclickBtn: function onclickBtn(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'clickBtn'\n      });\n    }\n  },\n  onblurDate: function onblurDate(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'blurDate',\n        data: [target.getAttribute('id'), target.value]\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    if (!data) {\n      return '';\n    }\n    var lists = data.content.map(function (d, i) {\n      var list = d.map(function (dd, ii) {\n        if (dd.type == 'button') {\n          return React.createElement(\n            'button',\n            { onClick: _this.onclickBtn.bind(_this) },\n            dd.left\n          );\n        } else {\n          return React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'span',\n              null,\n              dd.left\n            ),\n            React.createElement(AInput, { type: 'date', id: dd.id[0], value: dd.right[0], onBlur: _this.onblurDate.bind(_this) }),\n            React.createElement(AInput, { type: 'date', id: dd.id[1], value: dd.right[1], onBlur: _this.onblurDate.bind(_this) }),\n            React.createElement(\n              'span',\n              null,\n              '\\u2014>'\n            )\n          );\n        }\n      });\n      return React.createElement(\n        'div',\n        { className: 'ysp-checkDateContent-tt' },\n        list\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'ysp-checkDate-tt' },\n      lists\n    );\n  }\n});";
    },
    getData_control247_A869oH: function (elem) {
      if (!elem) {
        return;
      }var data = ysp.customHelper.getTableData(elem, ['流程单号', '申请人\供应商名称', '报销事由', '实际付款金额合计', '日期']);return data;
    },
    doAction_uiControl247_5nIEXu: function (data, elem) {},
    getTemplate_uiControl247_5nIEXu: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if(!data){\n      return '';\n    }\n    var ths = data.titles.map(function(d,i){\n      return(\n      \t<th>{d}</th>\n      )\n    })\n    var trs = data.content.map(function(d,i){\n      var lis = d.map(function(ele,index){\n        return(\n        \t<td>{ele}</td>\n        )\n      })\n      return(\n      \t<tr>{lis}</tr>\n      )\n    })\n    return (\n      <div className='examination'>\n        \n        <div className='contentitem'>\n        \t<table>\n            <thead><tr>{ths}</tr></thead>\n            <tbody>{trs}</tbody>\n          </table>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (!data) {\n      return '';\n    }\n    var ths = data.titles.map(function (d, i) {\n      return React.createElement(\n        'th',\n        null,\n        d\n      );\n    });\n    var trs = data.content.map(function (d, i) {\n      var lis = d.map(function (ele, index) {\n        return React.createElement(\n          'td',\n          null,\n          ele\n        );\n      });\n      return React.createElement(\n        'tr',\n        null,\n        lis\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'examination' },\n      React.createElement(\n        'div',\n        { className: 'contentitem' },\n        React.createElement(\n          'table',\n          null,\n          React.createElement(\n            'thead',\n            null,\n            React.createElement(\n              'tr',\n              null,\n              ths\n            )\n          ),\n          React.createElement(\n            'tbody',\n            null,\n            trs\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control248_IJvv7Q: function (elem) {
      //console.log(elem);
      if (!elem) {
        return "";
      }if (elem) {
        var data = {};data.content = [];var nodes = elem.children;for (var i = 0; i < nodes.length; i++) {
          data.content.push({ text: nodes[i].textContent.trim(), class: nodes[i].className });
        }return data;
      }
    },
    doAction_uiControl248_OuBvnO: function (data, elem) {
      if (data.eventType == 'click') {
        //debugger;
        var index = parseInt(data.dataCustom);if (index == 1) {
          var target = elem.querySelectorAll('a')[index];target.click();
        } else {
          var target = elem.querySelectorAll('a')[index - 1];target.click();
        }
      } else if (data.eventType == 'onclickpage') {
        //debugger;
        var index = parseInt(data.dataCustom[0]);var id = data.dataCustom[1];if (id == 'prevPage') {
          var target = elem.querySelectorAll('a')[index];target.click();
        } else if (id == 'nextPage') {
          var target = elem.querySelectorAll('a')[index - 1];target.click();
        }
      } else if (data.eventType == 'onclickpreOnce') {
        // debugger;
        var child = elem.querySelectorAll('a');var end = parseInt(elem.querySelector('.cpb').textContent);for (var i = end; i > 0; i--) {
          if (i == 1) {
            alert('已经到首页了');
          } else {
            child[i - 1].click();break;
          }
        }
      } else if (data.eventType == 'onClicknextOnce') {
        var child = elem.querySelectorAll('a');var start = parseInt(elem.querySelector('.cpb').textContent);for (var i = start; i < child.length; i++) {
          if (i == child.length - 1) {
            alert('已经到末页了');
          } else {
            child[i].click();break;
          }
        }
      }
    },
    getTemplate_uiControl248_OuBvnO: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:target.getAttribute('data-id')\n      })\n    }\n  },\n  onclickpage:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'onclickpage',\n        data:[target.dataset.index,target.dataset.id]\n      })\n    }\n  },\n  onclickpreOnce:function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:'onclickpreOnce'\n        \n      })\n    }\n  },\n  onClicknextOnce:function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:'onClicknextOnce',\n        \n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    if(!data){\n      return (\n        <div>\n        \t\u6682\u65E0\u6570\u636E\n        </div>\n      )\n    }\n    var str = '<',kr = '|<',\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      if(index!=0&&index!=data.content.length-1){\n        return(\n        \t<li data-id={index} onClick={_this.onClick} className={ele.class}>{ele.text}</li>\n        )\n      }\n    })\n    return (\n      <div className='footerbtn'>\n        <ul>\n          <li data-id='prevPage' data-index={0} onClick={_this.onclickpage.bind(_this)} className='ysp-prePage'>{kr}</li>\n          <li data-id='prev' onClick={_this.onclickpreOnce.bind(_this)} className='ysp-preOnce'>{str}</li>\n          {lis}\n          <li data-id='next' onClick={_this.onClicknextOnce.bind(_this)} className='ysp-nextOne'>></li>\n          <li data-id='nextPage' data-index={data.content.length-1} onClick={_this.onclickpage.bind(_this)} className='ysp-nextPage'>>|</li>\n        </ul>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: target.getAttribute('data-id')\n      });\n    }\n  },\n  onclickpage: function onclickpage(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'onclickpage',\n        data: [target.dataset.index, target.dataset.id]\n      });\n    }\n  },\n  onclickpreOnce: function onclickpreOnce(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'onclickpreOnce'\n\n      });\n    }\n  },\n  onClicknextOnce: function onClicknextOnce(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'onClicknextOnce'\n\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (!data) {\n      return React.createElement(\n        'div',\n        null,\n        '\\u6682\\u65E0\\u6570\\u636E'\n      );\n    }\n    var str = '<',\n        kr = '|<',\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      if (index != 0 && index != data.content.length - 1) {\n        return React.createElement(\n          'li',\n          { 'data-id': index, onClick: _this.onClick, className: ele.class },\n          ele.text\n        );\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'footerbtn' },\n      React.createElement(\n        'ul',\n        null,\n        React.createElement(\n          'li',\n          { 'data-id': 'prevPage', 'data-index': 0, onClick: _this.onclickpage.bind(_this), className: 'ysp-prePage' },\n          kr\n        ),\n        React.createElement(\n          'li',\n          { 'data-id': 'prev', onClick: _this.onclickpreOnce.bind(_this), className: 'ysp-preOnce' },\n          str\n        ),\n        lis,\n        React.createElement(\n          'li',\n          { 'data-id': 'next', onClick: _this.onClicknextOnce.bind(_this), className: 'ysp-nextOne' },\n          '>'\n        ),\n        React.createElement(\n          'li',\n          { 'data-id': 'nextPage', 'data-index': data.content.length - 1, onClick: _this.onclickpage.bind(_this), className: 'ysp-nextPage' },\n          '>|'\n        )\n      )\n    );\n  }\n});";
    },
    getData_control249_XNnxwr: function (elem) {
      if (!elem) {
        return;
      }var data = {}; // var table = elem.querySelectorAll('table')[0];
      var trs = elem.querySelectorAll('tr');data.title = '费用报销明细';data.content = [];for (var i = 1; i < trs.length; i++) {
        var arr = [];if (trs[i].style.display != 'none') {
          var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
            var flat;if (tds[k].querySelector('.trCWShow')) {
              if (tds[k].querySelector('.trCWShow').style.display != 'none') {
                flat = true;
              } else {
                flat = false;
              }
            } else {
              flat = true;
            }if (flat) {
              if (tds[k].querySelector("input[type='text']")) {
                arr.push({ left: tds[k].querySelector('label').textContent.trim(), right: tds[k].querySelector('input').value, readyState: tds[k].querySelector('input').readOnly });
              }if (tds[k].querySelector('textarea')) {
                arr.push({ left: tds[k].querySelector('label').textContent.replace(/\s+/g, ''), right: tds[k].querySelector('textarea').value, readyState: tds[k].querySelector('textarea').readOnly, type: 'textarea' });
              }if (tds[k].querySelector("input[type='radio']")) {
                arr.push({ left: tds[k].querySelector('label').textContent.replace(/\s+/g, ''), right: [tds[k].querySelectorAll("input[type='radio']")[0].checked, tds[k].querySelectorAll("input[type='radio']")[1].checked], type: 'radio' });
              }
            }
          }data.content.push(arr);
        }
      }return data;
    },
    doAction_uiControl249_UiSWTg: function (data, elem) {
      if (data.eventType == 'blur') {
        var index = parseInt(data.dataCustom[0]);var val = data.dataCustom[1];var target = elem.querySelectorAll('tr')[index].querySelectorAll("input");for (var i = 0; i < target.length; i++) {
          if (target[i].readOnly == false) {
            target[i].value = val;
          }
        }
      }
    },
    getTemplate_uiControl249_UiSWTg: function () {
      var selfTemplate = '\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n \tif(!data){\n    return \'\';\n  }\n    var list = data.content.map(function(ele,index){\n     \n        var lisele = ele.map(function(d,i){\n         if(d.type == \'textarea\'){\n              return(\n              \t<div className=\'contenttit\'>\n                \t<div className=\'contentitem\'>{d.left}</div>\n                  <div className=\'contentitem\'><textarea value={d.right} readOnly={d.readyState}></textarea></div>\n                </div>\n              )\n            }else {\n            return(\n                  <div className=\'contenttit\'>\n                    <div className=\'contentitem\'>{d.left}</div>\n                    <div className=\'contentitem\'>\n\n                      {d.readyState==true?<AInput value={d.right} readOnly={d.readyState}/>:<AInput value={d.right} readOnly={d.readyState} onBlur={_this.onblur.bind(_this)} data-index={index}/>}\n\n                    </div>\n                  </div>\n              )\n            }\n        })\n        return(\n        \t<div>{lisele}</div>\n        )\n      \n    })\n    return (\n      <div className=\'information\'>\n       \t<div className=\'contenttitle\'><span></span><p>{data.title}</p></div>\n        <div className=\'content\'>\n          {list}</div>\n        \n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    if (!data) {\n      return \'\';\n    }\n    var list = data.content.map(function (ele, index) {\n\n      var lisele = ele.map(function (d, i) {\n        if (d.type == \'textarea\') {\n          return React.createElement(\n            \'div\',\n            { className: \'contenttit\' },\n            React.createElement(\n              \'div\',\n              { className: \'contentitem\' },\n              d.left\n            ),\n            React.createElement(\n              \'div\',\n              { className: \'contentitem\' },\n              React.createElement(\'textarea\', { value: d.right, readOnly: d.readyState })\n            )\n          );\n        } else {\n          return React.createElement(\n            \'div\',\n            { className: \'contenttit\' },\n            React.createElement(\n              \'div\',\n              { className: \'contentitem\' },\n              d.left\n            ),\n            React.createElement(\n              \'div\',\n              { className: \'contentitem\' },\n              d.readyState == true ? React.createElement(AInput, { value: d.right, readOnly: d.readyState }) : React.createElement(AInput, { value: d.right, readOnly: d.readyState, onBlur: _this.onblur.bind(_this), \'data-index\': index })\n            )\n          );\n        }\n      });\n      return React.createElement(\n        \'div\',\n        null,\n        lisele\n      );\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'information\' },\n      React.createElement(\n        \'div\',\n        { className: \'contenttitle\' },\n        React.createElement(\'span\', null),\n        React.createElement(\n          \'p\',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'content\' },\n        list\n      )\n    );\n  }\n});';
    },
    getData_control250_CxPe63: function (elem) {
      if (!elem) {
        return;
      }var data = ysp.customHelper.getTableData(elem, ['成本中心', '费用项', '费用明细', '记账金额', '内部订单', '申请付款金额', '实际付款金额', '税率', '税额']);return data;
    },
    doAction_uiControl250_faQt4X: function (data, elem) {},
    getTemplate_uiControl250_faQt4X: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function(d,i){\n      return(\n      \t<th>{d}</th>\n      )\n    })\n    var trs = data.content.map(function(d,i){\n      var lis = d.map(function(ele,index){\n        return(\n        \t<td>{ele}</td>\n        )\n      })\n      return(\n      \t<tr>{lis}</tr>\n      )\n    })\n    return (\n      <div className='examination'>\n       \n        <div className='contentitem'>\n        \t<table>\n            <thead><tr>{ths}</tr></thead>\n            <tbody>{trs}</tbody>\n          </table>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function (d, i) {\n      return React.createElement(\n        'th',\n        null,\n        d\n      );\n    });\n    var trs = data.content.map(function (d, i) {\n      var lis = d.map(function (ele, index) {\n        return React.createElement(\n          'td',\n          null,\n          ele\n        );\n      });\n      return React.createElement(\n        'tr',\n        null,\n        lis\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'examination' },\n      React.createElement(\n        'div',\n        { className: 'contentitem' },\n        React.createElement(\n          'table',\n          null,\n          React.createElement(\n            'thead',\n            null,\n            React.createElement(\n              'tr',\n              null,\n              ths\n            )\n          ),\n          React.createElement(\n            'tbody',\n            null,\n            trs\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control251_WcXoaA: function (elem) {
      if (!elem) {
        return;
      }var data = {}; // var table = elem.querySelectorAll('table')[0];
      var trs = elem.querySelectorAll('tr');data.title = '费用报销明细';data.content = [];for (var i = 0; i < trs.length; i++) {
        var arr = [];var ipts = trs[i].querySelectorAll('input[type="text"]');for (var i = 0; i < ipts.length; i++) {
          if (ipts[i].parentElement.style.display != 'none') {
            arr.push({ left: ipts[i].previousSibling.textContent.trim(), right: ipts[i].value });
          }
        }data.content.push(arr);
      } //   var arr = [];
      //   if (trs[i].style.display != 'none') {
      //     var tds = trs[i].querySelectorAll('td');
      //     for (var k = 0; k < tds.length; k++) {
      //       var flat;
      //       if (tds[k].querySelector('.trCWShow')) {
      //         if (tds[k].querySelector('.trCWShow').style.display != 'none') {
      //           flat = true;
      //         } else {
      //           flat = false;
      //         }
      //       } else {
      //         flat = true;
      //       }
      //       if (flat) {
      //         if (tds[k].querySelector("input[type='text']")) {
      //           arr.push({
      //             left: tds[k].querySelector('label').textContent.trim(),
      //             right: tds[k].querySelector('input').value,
      //             readyState: tds[k].querySelector('input').readOnly
      //           });
      //         }
      //         if (tds[k].querySelector('textarea')) {
      //           arr.push({
      //             left: tds[k].querySelector('label').textContent.replace(/\s+/g, ''),
      //             right: tds[k].querySelector('textarea').value,
      //             readyState: tds[k].querySelector('textarea').readOnly,
      //             type: 'textarea'
      //           });
      //         }
      //         if (tds[k].querySelector("input[type='radio']")) {
      //           arr.push({
      //             left: tds[k].querySelector('label').textContent.replace(/\s+/g, ''),
      //             right: [tds[k].querySelectorAll("input[type='radio']")[0].checked, tds[k].querySelectorAll("input[type='radio']")[1].checked],
      //             type: 'radio'
      //           });
      //         }
      //       }
      //     }
      //     data.content.push(arr);
      //   }
      // }
      return data;
    },
    doAction_uiControl251_65Bnk4: function (data, elem) {
      if (data.eventType == 'blur') {
        var index = parseInt(data.dataCustom[0]);var val = data.dataCustom[1];var target = elem.querySelectorAll('tr')[index].querySelectorAll("input");for (var i = 0; i < target.length; i++) {
          if (target[i].readOnly == false) {
            target[i].value = val;
          }
        }
      }
    },
    getTemplate_uiControl251_65Bnk4: function () {
      var selfTemplate = '\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n \tif(!data){\n    return \'\';\n  }\n    var list = data.content.map(function(ele,index){\n     \n        var lisele = ele.map(function(d,i){\n         if(d.type == \'textarea\'){\n              return(\n              \t<div className=\'contenttit\'>\n                \t<div className=\'contentitem\'>{d.left}</div>\n                  <div className=\'contentitem\'><textarea value={d.right} readOnly={d.readyState}></textarea></div>\n                </div>\n              )\n            }else {\n            return(\n                  <div className=\'contenttit\'>\n                    <div className=\'contentitem\'>{d.left}</div>\n                    <div className=\'contentitem\'>\n\n                      {d.readyState==true?<AInput value={d.right} readOnly={d.readyState}/>:<AInput value={d.right} readOnly={d.readyState} data-index={index}/>}\n\n                    </div>\n                  </div>\n              )\n            }\n        })\n        return(\n        \t<div>{lisele}</div>\n        )\n      \n    })\n    return (\n      <div className=\'information\'>\n        <div className=\'content\'>\n          {list}</div>\n        \n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    if (!data) {\n      return \'\';\n    }\n    var list = data.content.map(function (ele, index) {\n\n      var lisele = ele.map(function (d, i) {\n        if (d.type == \'textarea\') {\n          return React.createElement(\n            \'div\',\n            { className: \'contenttit\' },\n            React.createElement(\n              \'div\',\n              { className: \'contentitem\' },\n              d.left\n            ),\n            React.createElement(\n              \'div\',\n              { className: \'contentitem\' },\n              React.createElement(\'textarea\', { value: d.right, readOnly: d.readyState })\n            )\n          );\n        } else {\n          return React.createElement(\n            \'div\',\n            { className: \'contenttit\' },\n            React.createElement(\n              \'div\',\n              { className: \'contentitem\' },\n              d.left\n            ),\n            React.createElement(\n              \'div\',\n              { className: \'contentitem\' },\n              d.readyState == true ? React.createElement(AInput, { value: d.right, readOnly: d.readyState }) : React.createElement(AInput, { value: d.right, readOnly: d.readyState, \'data-index\': index })\n            )\n          );\n        }\n      });\n      return React.createElement(\n        \'div\',\n        null,\n        lisele\n      );\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'information\' },\n      React.createElement(\n        \'div\',\n        { className: \'content\' },\n        list\n      )\n    );\n  }\n});';
    },
    getData_control252_ydhZ4J: function (elem) {
      if (!elem) {
        return;
      }var data = ysp.customHelper.getTableData(elem, ['费用名称*', '税率*', '税额*']);data.title = '税额明细';return data;
    },
    doAction_uiControl252_u8flMe: function (data, elem) {},
    getTemplate_uiControl252_u8flMe: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function(d,i){\n      return(\n      \t<th>{d}</th>\n      )\n    })\n    var trs = data.content.map(function(d,i){\n      var lis = d.map(function(ele,index){\n        return(\n        \t<td>{ele}</td>\n        )\n      })\n      return(\n      \t<tr>{lis}</tr>\n      )\n    })\n    return (\n      <div className='examination'>\n        <div className='contenttitle'><span></span><p>{data.title}</p></div>\n        <div className='contentitem'>\n        \t<table>\n            <thead><tr>{ths}</tr></thead>\n            <tbody>{trs}</tbody>\n          </table>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function (d, i) {\n      return React.createElement(\n        'th',\n        null,\n        d\n      );\n    });\n    var trs = data.content.map(function (d, i) {\n      var lis = d.map(function (ele, index) {\n        return React.createElement(\n          'td',\n          null,\n          ele\n        );\n      });\n      return React.createElement(\n        'tr',\n        null,\n        lis\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'examination' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'contentitem' },\n        React.createElement(\n          'table',\n          null,\n          React.createElement(\n            'thead',\n            null,\n            React.createElement(\n              'tr',\n              null,\n              ths\n            )\n          ),\n          React.createElement(\n            'tbody',\n            null,\n            trs\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control253_PPk7Wo: function (elem) {
      if (!elem) {
        return;
      }var data = {}; // var table = elem.querySelectorAll('table')[0];
      var trs = elem.querySelectorAll('tr');data.content = [];for (var i = 0; i < trs.length; i++) {
        var arr = [];var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          if (tds[k].querySelector("input[type='text']")) {
            arr.push({ left: tds[k].textContent.replace(/\s+/g, ''), right: tds[k].querySelectorAll('input')[0].value, readyState: tds[k].querySelectorAll('input')[0].readOnly });
          }if (tds[k].querySelector('textarea')) {
            arr.push({ left: tds[k].querySelector('label').textContent.replace(/\s+/g, ''), right: tds[k].querySelector('textarea').value, readyState: tds[k].querySelector('textarea').readOnly, type: 'textarea' });
          }if (tds[k].querySelector("input[type='radio']")) {
            arr.push({ left: tds[k].querySelector('label').textContent.replace(/\s+/g, ''), right: [tds[k].querySelectorAll("input[type='radio']")[0].checked, tds[k].querySelectorAll("input[type='radio']")[1].checked], type: 'radio' });
          }
        }data.content.push(arr);
      }return data;
    },
    doAction_uiControl253_X6vl3N: function (data, elem) {
      if (data.eventType == 'blur') {
        var index = parseInt(data.dataCustom[0]);var val = data.dataCustom[1];var target = elem.querySelectorAll('tr')[index].querySelectorAll("input");for (var i = 0; i < target.length; i++) {
          if (target[i].readOnly == false) {
            target[i].value = val;
          }
        }
      }
    },
    getTemplate_uiControl253_X6vl3N: function () {
      var selfTemplate = "module.exports = React.createClass({\n  \n  onblur:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'blur',\n        data:[target.dataset.index,target.value]\n      })\n    }\n  },\n \n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n \n    var list = data.content.map(function(ele,index){\n     \n        var lisele = ele.map(function(d,i){\n        \n              return(\n                <div className='ysp-baoxiaoTotal-tt'>\n                \t\t\t <div className='ysp-baoxiaoList-tt'>\n                          <div className='ysp-baoxiaoListTitle-tt' style={{'lineHeight':'50px'}}>{d.left.replace(/\\s+/g,'').split(':')[0]}</div>\n                          <div className='yspbaoxiaoListContent-tt'>\n\n                            {d.readyState==true?<AInput value={d.right} readOnly={d.readyState}/>:<AInput value={d.right} readOnly={d.readyState} onBlur={_this.onblur.bind(_this)} data-index={index}/>}\n\n                          </div>\n                   </div>\n                  \n                  \n                </div>\n                   \n                   \n                )\n            \n        })\n        return(\n        \t<div>{lisele}</div>\n        )\n      \n    })\n    return (\n      <div className='information'>\n       \n        <div className='content'>\n          {list}</div>\n        \n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n\n  onblur: function onblur(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'blur',\n        data: [target.dataset.index, target.value]\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n\n    var list = data.content.map(function (ele, index) {\n\n      var lisele = ele.map(function (d, i) {\n\n        return React.createElement(\n          'div',\n          { className: 'ysp-baoxiaoTotal-tt' },\n          React.createElement(\n            'div',\n            { className: 'ysp-baoxiaoList-tt' },\n            React.createElement(\n              'div',\n              { className: 'ysp-baoxiaoListTitle-tt', style: { 'lineHeight': '50px' } },\n              d.left.replace(/\\s+/g, '').split(':')[0]\n            ),\n            React.createElement(\n              'div',\n              { className: 'yspbaoxiaoListContent-tt' },\n              d.readyState == true ? React.createElement(AInput, { value: d.right, readOnly: d.readyState }) : React.createElement(AInput, { value: d.right, readOnly: d.readyState, onBlur: _this.onblur.bind(_this), 'data-index': index })\n            )\n          )\n        );\n      });\n      return React.createElement(\n        'div',\n        null,\n        lisele\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'information' },\n      React.createElement(\n        'div',\n        { className: 'content' },\n        list\n      )\n    );\n  }\n});";
    },

    getData_control268_DwTnMs: function (elem) {
      if (!elem) {
        return;
      }var data = { titles: [], content: [] };data.title = '收款人明细';var trs = elem.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        if (i == 1) {
          var tds = trs[i].querySelectorAll('th');for (var j = 0; j < tds.length; j++) {
            data.titles.push(tds[j].textContent.trim());
          }
        } else if (i > 1) {
          var arr1 = [];var tds = trs[i].querySelectorAll('td');for (var j = 0; j < tds.length; j++) {
            arr1.push(tds[j].querySelector("input[type='text']").value);
          }data.content.push(arr1);
        }
      }return data;
    },
    doAction_uiControl268_pqoAbw: function (data, elem) {},
    getTemplate_uiControl268_pqoAbw: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if(!data){\n      return \'\';\n    }\n    var ths = data.titles.map(function(d,i){\n      return(\n      \t<th>{d}</th>\n      )\n    })\n    var trs = data.content.map(function(d,i){\n      var lis = d.map(function(ele,index){\n        return(\n        \t<td>{ele}</td>\n        )\n      })\n      return(\n      \t<tr>{lis}</tr>\n      )\n    })\n    return (\n      <div className=\'examination\'>\n        <div className=\'contenttitle\'><span></span><p>{data.title}</p></div>\n        <div className=\'contentitem\'>\n        \t<table>\n            <thead><tr>{ths}</tr></thead>\n            <tbody>{trs}</tbody>\n          </table>\n        </div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (!data) {\n      return \'\';\n    }\n    var ths = data.titles.map(function (d, i) {\n      return React.createElement(\n        \'th\',\n        null,\n        d\n      );\n    });\n    var trs = data.content.map(function (d, i) {\n      var lis = d.map(function (ele, index) {\n        return React.createElement(\n          \'td\',\n          null,\n          ele\n        );\n      });\n      return React.createElement(\n        \'tr\',\n        null,\n        lis\n      );\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'examination\' },\n      React.createElement(\n        \'div\',\n        { className: \'contenttitle\' },\n        React.createElement(\'span\', null),\n        React.createElement(\n          \'p\',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'contentitem\' },\n        React.createElement(\n          \'table\',\n          null,\n          React.createElement(\n            \'thead\',\n            null,\n            React.createElement(\n              \'tr\',\n              null,\n              ths\n            )\n          ),\n          React.createElement(\n            \'tbody\',\n            null,\n            trs\n          )\n        )\n      )\n    );\n  }\n});';
    },
    getData_control269_s8VqHN: function (elem) {
      if (!elem) {
        return;
      }var data = {}; // var table = elem.querySelectorAll('table')[0];
      var trs = elem.querySelectorAll('tr');data.content = [];for (var i = 0; i < trs.length; i++) {
        var arr = [];var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          if (tds[k].querySelector("input[type='text']")) {
            arr.push({ left: tds[k].textContent.replace(/\s+/g, ''), right: tds[k].querySelectorAll('input')[0].value, readyState: tds[k].querySelectorAll('input')[0].readOnly });
          }if (tds[k].querySelector('textarea')) {
            arr.push({ left: tds[k].querySelector('label').textContent.replace(/\s+/g, ''), right: tds[k].querySelector('textarea').value, readyState: tds[k].querySelector('textarea').readOnly, type: 'textarea' });
          }if (tds[k].querySelector("input[type='radio']")) {
            arr.push({ left: tds[k].querySelector('label').textContent.replace(/\s+/g, ''), right: [tds[k].querySelectorAll("input[type='radio']")[0].checked, tds[k].querySelectorAll("input[type='radio']")[1].checked], type: 'radio' });
          }
        }data.content.push(arr);
      }return data;
    },
    doAction_uiControl269_NoLXuR: function (data, elem) {
      if (data.eventType == 'blur') {
        var index = parseInt(data.dataCustom[0]);var val = data.dataCustom[1];var target = elem.querySelectorAll('tr')[index].querySelectorAll("input");for (var i = 0; i < target.length; i++) {
          if (target[i].readOnly == false) {
            target[i].value = val;
          }
        }
      }
    },
    getTemplate_uiControl269_NoLXuR: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  \n  onblur:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'blur\',\n        data:[target.dataset.index,target.value]\n      })\n    }\n  },\n \n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n if(!data){\n   return \'\';\n }\n    var list = data.content.map(function(ele,index){\n     \n        var lisele = ele.map(function(d,i){\n        \n              return(\n                <div className=\'ysp-baoxiaoTotal-tt\'>\n                \t\t\t <div className=\'ysp-baoxiaoList-tt\'>\n                          <div className=\'ysp-baoxiaoListTitle-tt\' >{d.left.replace(/\\s+/g,\'\').split(\':\')[0]}</div>\n                          <div className=\'yspbaoxiaoListContent-tt\'>\n\n                            {d.readyState==true?<AInput value={d.right} readOnly={d.readyState}/>:<AInput value={d.right} readOnly={d.readyState} onBlur={_this.onblur.bind(_this)} data-index={index}/>}\n\n                          </div>\n                   </div>\n                  \n                </div>\n                   \n                   \n                )\n            \n        })\n        return(\n        \t<div>{lisele}</div>\n        )\n      \n    })\n    return (\n      <div className=\'information\'>\n       \n        <div className=\'content\'>\n          {list}</div>\n        \n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n\n  onblur: function onblur(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'blur\',\n        data: [target.dataset.index, target.value]\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    if (!data) {\n      return \'\';\n    }\n    var list = data.content.map(function (ele, index) {\n\n      var lisele = ele.map(function (d, i) {\n\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-baoxiaoTotal-tt\' },\n          React.createElement(\n            \'div\',\n            { className: \'ysp-baoxiaoList-tt\' },\n            React.createElement(\n              \'div\',\n              { className: \'ysp-baoxiaoListTitle-tt\' },\n              d.left.replace(/\\s+/g, \'\').split(\':\')[0]\n            ),\n            React.createElement(\n              \'div\',\n              { className: \'yspbaoxiaoListContent-tt\' },\n              d.readyState == true ? React.createElement(AInput, { value: d.right, readOnly: d.readyState }) : React.createElement(AInput, { value: d.right, readOnly: d.readyState, onBlur: _this.onblur.bind(_this), \'data-index\': index })\n            )\n          )\n        );\n      });\n      return React.createElement(\n        \'div\',\n        null,\n        lisele\n      );\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'information\' },\n      React.createElement(\n        \'div\',\n        { className: \'content\' },\n        list\n      )\n    );\n  }\n});';
    },
    getData_control270_wb1Ndy: function (elem) {
      if (!elem) {
        return;
      }var data = { content: [] };var trs = elem.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');for (var j = 0; j < tds.length; j++) {
          if (tds[j].querySelector('textarea')) {
            data.content.push({ val: tds[j].querySelector('textarea').value, readyState: tds[j].querySelector('textarea').readOnly });
          } else {
            data.title = tds[j].textContent.trim();
          }
        }
      }return data;
    },
    doAction_uiControl270_BZbIi6: function (data, elem) {
      if (data.eventType == 'blur') {
        var val = data.dataCustom;var target = elem.querySelector('textarea');target.value = val;
      }
    },
    getTemplate_uiControl270_BZbIi6: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onblur:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'blur',\n        data:target.value\n      })\n    }\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n  \tvar list=data.content.map(function(d,i){\n      return(\n       \t<div>\n        \t\t {d.readyState==false?<ATextarea value={d.val} readOnly={d.readyState} onBlur={_this.onblur.bind(_this)}></ATextarea>:<ATextarea value={d.val} readOnly={d.readyState}></ATextarea>}\n        </div>\n      )\n    })\n    return (\n      <div className='ysp-sxsm-tt'>\n        <div className='ysp-sxsmTitle-tt'>{data.title}</div>\n       \t{list}\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onblur: function onblur(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'blur',\n        data: target.value\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var list = data.content.map(function (d, i) {\n      return React.createElement(\n        'div',\n        null,\n        d.readyState == false ? React.createElement(ATextarea, { value: d.val, readOnly: d.readyState, onBlur: _this.onblur.bind(_this) }) : React.createElement(ATextarea, { value: d.val, readOnly: d.readyState })\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'ysp-sxsm-tt' },\n      React.createElement(\n        'div',\n        { className: 'ysp-sxsmTitle-tt' },\n        data.title\n      ),\n      list\n    );\n  }\n});";
    },

    getData_control272_HE5fGC: function (elem) {
      if (!elem) {
        return;
      }var data = {};var trs = elem.querySelectorAll('tr');data.title = '知会信息';data.content = [];for (var i = 0; i < trs.length; i++) {
        var arr = [];var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          if (tds[k].querySelector('input')) {
            arr.push({ left: tds[k].querySelector('label').textContent.trim(), right: tds[k].querySelector('input').value });
          }
        }data.content.push(arr);
      }return data;
    },
    doAction_uiControl272_UC6mhW: function (data, elem) {},
    getTemplate_uiControl272_UC6mhW: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    if(!data){\n      return \'\';\n    }\n    var lis = data.content.map(function(ele,index){\n      var list = ele.map(function(d,i){\n        return(\n        \t<div>\n          \t<div className=\'contentitem\'>{d.left}</div>\n            <div className=\'contentitem\'>{d.right}</div>\n          </div>\n        )\n      })\n      return(\n      \t<div className=\'contentit\'>{list}</div>\n      )\n    })\n    return (\n      <div className=\'understanding\'>\n        <div className=\'contenttitle\'><span></span><p>{data.title}</p></div>\n        <div className=\'content\'>\n    \t\t\t{lis}    \t\n        </div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (!data) {\n      return \'\';\n    }\n    var lis = data.content.map(function (ele, index) {\n      var list = ele.map(function (d, i) {\n        return React.createElement(\n          \'div\',\n          null,\n          React.createElement(\n            \'div\',\n            { className: \'contentitem\' },\n            d.left\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'contentitem\' },\n            d.right\n          )\n        );\n      });\n      return React.createElement(\n        \'div\',\n        { className: \'contentit\' },\n        list\n      );\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'understanding\' },\n      React.createElement(\n        \'div\',\n        { className: \'contenttitle\' },\n        React.createElement(\'span\', null),\n        React.createElement(\n          \'p\',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'content\' },\n        lis\n      )\n    );\n  }\n});';
    },
    getData_control273_JrRaIN: function (elem) {
      if (!elem) {
        return;
      } // var data = ysp.customHelper.getTabledata(elem, ['文件名', '操作']);
      var data = ysp.customHelper.getTabledata(elem, ['文件名']);data.href = [];var hrefs = elem.querySelectorAll('a');for (var i = 0; i < hrefs.length; i++) {
        for (var k = 0; k < data.content.length; k++) {
          if (hrefs[i].textContent.trim() == data.content[k]) {
            data.href.push(hrefs[i].href);
          }
        }
      }data.id = elem.nextElementSibling.nextElementSibling.id;data.title = '附件';return data;
    },
    doAction_uiControl273_lJ5mbn: function (data, elem) {
      var type = data.eventType;var data = data.customData; // if (type == 'commit') {
      //   // debugger;
      //   elem.ownerDocument.querySelector("#" + data).click();
      //   setTimeout(function () {
      //     elem.ownerDocument.defaultView.InitAttachmentList();
      //   }, 1000); // setTimeout(function () {
      //   //   var url = ysp.appMain.getActiveUrl();
      //   //   ysp.appMain.reloadPage(url);
      //   // }, 2000);
      // }
      // if (type == 'add') {
      //   elem.ownerDocument.querySelector("#" + data).previousElementSibling.querySelector('input').click();
      // }
      // if (type == 'updel') {
      //   var tds = elem.querySelectorAll('tbody')[1].querySelectorAll('tr')[data.index].querySelectorAll('td');
      //   tds[tds.length - 1].querySelectorAll('a')[data.i].click();
      // } //附件下载
      // if (type == 'loadbtn') {
      // var tds = elem.querySelectorAll('tbody')[1].querySelectorAll('tr')[data.index].querySelectorAll('td');
      // tds[tds.length - 1].querySelectorAll('a')[0].click();
      // }
      if ("loadbtn" == type) {
        // var url = data.customData;
        var url = data.href;if (ysp.appMain.isIOS()) {
          top.EAPI.openWindow(url + "&_ysp_filepreview=1");
        } else if (ysp.appMain.isAndroid()) {
          top.location.href = url;
        } else {
          var tds = elem.querySelectorAll('tbody')[1].querySelectorAll('tr')[data.index].querySelectorAll('td');tds[tds.length - 1].querySelectorAll('a')[0].click();
        }
      }
    },
    getTemplate_uiControl273_lJ5mbn: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        type = \'\',\n        data = \'\';\n    if(target.tagName.toLowerCase() == \'button\'){\n      // console.log(target.id);\n      if(target.id == \'uploadDiv\' ){\n        type = \'commit\';\n        data = \'btnFileUpload\';\n      }else{\n        type = \'add\';\n        data = \'btnFileUpload\';\n      }\n    }\n    if(target.tagName.toLowerCase() == \'p\'){\n      type = \'updel\';\n      data = {\n        index:target.getAttribute(\'data-index\'),\n        i:target.className==\'xiazai\'?0:1\n      }\n    }\n    if(handler){\n      handler({\n        eventType:type,\n        data:data\n      })\n    }\n  },\n  click:function(e){\n    var target = e.target;\n    if(target.className == \'shang\'){\n      target.className = \'xia\';\n      var divs = target.parentElement.parentElement.querySelectorAll(\'div.displnone\');\n      for(var i=0;i<divs.length;i++){\n        divs[i].className = \'displblock\';\n      }\n    }else{\n      target.className = \'shang\';\n      var divs = target.parentElement.parentElement.querySelectorAll(\'div.displblock\');\n      for(var i=0;i<divs.length;i++){\n        divs[i].className = \'displnone\';\n      }\n    }\n  },\n  loadclick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target;\n    if(handler){\n      handler({\n        eventType:\'loadbtn\',\n        data:{\n          index:target.getAttribute(\'data-id\'),\n          href:target.parentElement.previousElementSibling.getAttribute(\'data-href\')\n        }\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    if(!data){\n      return \'\';\n    }\n    // var lis = data.content.map(function(ele,index){\n    //   var list = ele.map(function(d,i){\n    //     if(i==0){\n    //       return(\n    //       \t<div className=\'titlediv\'>\n    //         \t<div>{\'0\'+(index+1)}</div>\n    //           <div>{d}</div>\n    //           <div onClick={_this.click} className=\'shang\'></div>\n    //         </div>\n    //       )\n    //     }\n    //     if(i == ele.length-1){\n    //       if(d.length>2){\n    //           return(\n    //           <div className=\'displnone\'>\n    //             <div className=\'contentitem contentspan\' style={{\'width\':\'100%\',\'text-align-last\':\'auto\',\'text-align\':\'center\'}}><p className=\'shanchu\' data-index={index} onClick={_this.onClick.bind(_this)}><span></span>{d[2]+d[3]}</p><p data-index={index} className=\'xiazai\' onClick={_this.onClick.bind(_this)}><span></span>{d.length>2?d[0]+d[1]:\'\'}</p></div>\n    //           </div>\n    //         )\n    //       }else{\n    //          return(\n    //           <div className=\'displnone\'>\n    //             <div className=\'contentitem\'><p className=\'xiazai\' data-index={index} onClick={_this.onClick.bind(_this)}><span></span>{d[0]+d[1]}</p></div>\n    //           </div>\n    //         )\n    //       }\n    //     }\n    //     return(\n    //     \t<div className=\'displnone\'>\n    //       \t<div className=\'contentitem\'>{data.titles[i]}</div>\n    //         <div className=\'contentitem\'>{d}</div>\n    //       </div>\n    //     )\n    //   })\n    //   return(\n    //   \t<div className=\'contentit\'>{list}</div>\n    //   )\n    // })\n    \n            // <div>\n            //   <button onClick={_this.onClick.bind(_this)}>\u9009\u62E9\u6587\u4EF6</button>\n            //   <button id={data.id} onClick={_this.onClick.bind(_this)}>\u4E0A\u4F20\u6587\u4EF6</button>\n            // </div>\n    var lis = data.content.map(function(ele,index){\n      return(\n      \t<div className=\'Encltitle\'>\n        \t<div data-href={data.href[index]}>{ele[0]}</div>\n          <div><button data-id={index} onClick={_this.loadclick.bind(_this)}>\u67E5\u770B</button></div>\n        </div>\n      )\n    })\n    return (\n      <div className=\'Enclosure\'>\n        <div className=\'contenttitle\'>\n          <span className=\'xia\'></span>\n          <p>{data.title}\n          </p>\n        </div>\n        <div className=\'content\'>\n    \t\t\t{lis}\n        </div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        type = \'\',\n        data = \'\';\n    if (target.tagName.toLowerCase() == \'button\') {\n      // console.log(target.id);\n      if (target.id == \'uploadDiv\') {\n        type = \'commit\';\n        data = \'btnFileUpload\';\n      } else {\n        type = \'add\';\n        data = \'btnFileUpload\';\n      }\n    }\n    if (target.tagName.toLowerCase() == \'p\') {\n      type = \'updel\';\n      data = {\n        index: target.getAttribute(\'data-index\'),\n        i: target.className == \'xiazai\' ? 0 : 1\n      };\n    }\n    if (handler) {\n      handler({\n        eventType: type,\n        data: data\n      });\n    }\n  },\n  click: function click(e) {\n    var target = e.target;\n    if (target.className == \'shang\') {\n      target.className = \'xia\';\n      var divs = target.parentElement.parentElement.querySelectorAll(\'div.displnone\');\n      for (var i = 0; i < divs.length; i++) {\n        divs[i].className = \'displblock\';\n      }\n    } else {\n      target.className = \'shang\';\n      var divs = target.parentElement.parentElement.querySelectorAll(\'div.displblock\');\n      for (var i = 0; i < divs.length; i++) {\n        divs[i].className = \'displnone\';\n      }\n    }\n  },\n  loadclick: function loadclick(e) {\n    var handler = this.props.customHandler,\n        target = e.target;\n    if (handler) {\n      handler({\n        eventType: \'loadbtn\',\n        data: {\n          index: target.getAttribute(\'data-id\'),\n          href: target.parentElement.previousElementSibling.getAttribute(\'data-href\')\n        }\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    if (!data) {\n      return \'\';\n    }\n    // var lis = data.content.map(function(ele,index){\n    //   var list = ele.map(function(d,i){\n    //     if(i==0){\n    //       return(\n    //       \t<div className=\'titlediv\'>\n    //         \t<div>{\'0\'+(index+1)}</div>\n    //           <div>{d}</div>\n    //           <div onClick={_this.click} className=\'shang\'></div>\n    //         </div>\n    //       )\n    //     }\n    //     if(i == ele.length-1){\n    //       if(d.length>2){\n    //           return(\n    //           <div className=\'displnone\'>\n    //             <div className=\'contentitem contentspan\' style={{\'width\':\'100%\',\'text-align-last\':\'auto\',\'text-align\':\'center\'}}><p className=\'shanchu\' data-index={index} onClick={_this.onClick.bind(_this)}><span></span>{d[2]+d[3]}</p><p data-index={index} className=\'xiazai\' onClick={_this.onClick.bind(_this)}><span></span>{d.length>2?d[0]+d[1]:\'\'}</p></div>\n    //           </div>\n    //         )\n    //       }else{\n    //          return(\n    //           <div className=\'displnone\'>\n    //             <div className=\'contentitem\'><p className=\'xiazai\' data-index={index} onClick={_this.onClick.bind(_this)}><span></span>{d[0]+d[1]}</p></div>\n    //           </div>\n    //         )\n    //       }\n    //     }\n    //     return(\n    //     \t<div className=\'displnone\'>\n    //       \t<div className=\'contentitem\'>{data.titles[i]}</div>\n    //         <div className=\'contentitem\'>{d}</div>\n    //       </div>\n    //     )\n    //   })\n    //   return(\n    //   \t<div className=\'contentit\'>{list}</div>\n    //   )\n    // })\n\n    // <div>\n    //   <button onClick={_this.onClick.bind(_this)}>\u9009\u62E9\u6587\u4EF6</button>\n    //   <button id={data.id} onClick={_this.onClick.bind(_this)}>\u4E0A\u4F20\u6587\u4EF6</button>\n    // </div>\n    var lis = data.content.map(function (ele, index) {\n      return React.createElement(\n        \'div\',\n        { className: \'Encltitle\' },\n        React.createElement(\n          \'div\',\n          { \'data-href\': data.href[index] },\n          ele[0]\n        ),\n        React.createElement(\n          \'div\',\n          null,\n          React.createElement(\n            \'button\',\n            { \'data-id\': index, onClick: _this.loadclick.bind(_this) },\n            \'\\u67E5\\u770B\'\n          )\n        )\n      );\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'Enclosure\' },\n      React.createElement(\n        \'div\',\n        { className: \'contenttitle\' },\n        React.createElement(\'span\', { className: \'xia\' }),\n        React.createElement(\n          \'p\',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'content\' },\n        lis\n      )\n    );\n  }\n});';
    },
    getData_control274_r9SsaM: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent;
    },
    doAction_uiControl274_46PWCT: function (data, elem) {
      if (data.eventType == 'close') {
        elem.click();
      }
    },
    getTemplate_uiControl274_46PWCT: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onclickClose:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'close'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className='ysp-closeBtn-tt'>\n        <button onClick={this.onclickClose.bind(this)}>{this.props.customData}</button>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onclickClose: function onclickClose(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'close'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'ysp-closeBtn-tt' },\n      React.createElement(\n        'button',\n        { onClick: this.onclickClose.bind(this) },\n        this.props.customData\n      )\n    );\n  }\n});";
    },

    getData_control466_Cyg8Tl: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = '环节信息';data.content = [];data.content.push({ left: elem.querySelector('tr').querySelector('td').textContent.trim() });var trs = elem.querySelector('tr').querySelectorAll('td')[1].querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        data.content.push(trs[i].textContent.trim());
      }return data;
    },
    doAction_uiControl466_QEEP8b: function (data, elem) {},
    getTemplate_uiControl466_QEEP8b: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n      if(!data){\n        return '';\n      }\n    var lis = data.content.map(function(ele,index){\n      if(index > 0){\n        return(\n      \t<div>{ele}\n        </div>\n      )\n      }\n    })\n    return (\n      <div className='Auditor'>\n        <div className='contenttitle'><span></span><p>{data.title}</p></div>\n        <div className='content'><div className='contentitem'>{data.content[0].left}</div><div className='contentitem'>{lis}</div></div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    if (!data) {\n      return '';\n    }\n    var lis = data.content.map(function (ele, index) {\n      if (index > 0) {\n        return React.createElement(\n          'div',\n          null,\n          ele\n        );\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'Auditor' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content' },\n        React.createElement(\n          'div',\n          { className: 'contentitem' },\n          data.content[0].left\n        ),\n        React.createElement(\n          'div',\n          { className: 'contentitem' },\n          lis\n        )\n      )\n    );\n  }\n});";
    },
    getData_control467_avrJTE: function (elem) {
      if (!elem) {
        return;
      }var data = ysp.customHelper.getTableData(elem, ['环节名称', '人员姓名', '人员公司', '人员部门', '人员职位', '审批操作', '审批时间', '意见']);data.title = '审批日志';return data;
    },
    doAction_uiControl467_IOxvgp: function (data, elem) {},
    getTemplate_uiControl467_IOxvgp: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function(d,i){\n      return(\n      \t<th>{d}</th>\n      )\n    })\n    var trs = data.content.map(function(d,i){\n      var lis = d.map(function(ele,index){\n        return(\n        \t<td>{ele}</td>\n        )\n      })\n      return(\n      \t<tr>{lis}</tr>\n      )\n    })\n    return (\n      <div className='examination'>\n        <div className='contenttitle'><span></span><p>{data.title}</p></div>\n        <div className='contentitem'>\n        \t<table>\n            <thead><tr>{ths}</tr></thead>\n            <tbody>{trs}</tbody>\n          </table>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function (d, i) {\n      return React.createElement(\n        'th',\n        null,\n        d\n      );\n    });\n    var trs = data.content.map(function (d, i) {\n      var lis = d.map(function (ele, index) {\n        return React.createElement(\n          'td',\n          null,\n          ele\n        );\n      });\n      return React.createElement(\n        'tr',\n        null,\n        lis\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'examination' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'contentitem' },\n        React.createElement(\n          'table',\n          null,\n          React.createElement(\n            'thead',\n            null,\n            React.createElement(\n              'tr',\n              null,\n              ths\n            )\n          ),\n          React.createElement(\n            'tbody',\n            null,\n            trs\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control807_01iGk9: function (elem) {},
    doAction_uiControl807_Z4rzWl: function (data, elem) {},
    getTemplate_uiControl807_Z4rzWl: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n \n  componentDidMount(){\n    \n    var elem=this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n    \n    setTimeout(function(){\n      elem.scrollTop=0;\n    },500)\n  }\n  render(){\n    return(\n    \t<div ref=\"toTop\"></div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n\n      var elem = this.refs.toTop.ownerDocument.querySelector(\".view-wrapper\");\n\n      setTimeout(function () {\n        elem.scrollTop = 0;\n      }, 500);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", { ref: \"toTop\" });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control834_nLEBn4: function (elem) {
      if (!elem) {
        return;
      }var data = {}; // var table = elem.querySelectorAll('table')[0];
      var trs = elem.querySelectorAll('tr');data.title = '交际应酬明细';data.content = [];for (var i = 1; i < trs.length; i++) {
        var arr = [];var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          if (tds[k].querySelector('input')) {
            arr.push({ left: tds[k].querySelector('label').textContent.trim(), right: tds[k].querySelector('input').value });
          }if (tds[k].querySelector('select')) {
            var opts = tds[k].querySelector('select').querySelectorAll('option');for (var j = 0; j < opts.length; j++) {
              if (opts[j].value == tds[k].querySelector('select').value) {
                arr.push({ left: tds[k].querySelector('label').textContent.trim(), right: opts[j].textContent.trim() });
              }
            }
          }if (tds[k].querySelector('a')) {
            arr.push({ href: tds[k].querySelector('a').href, text: tds[k].textContent.trim(), type: 'a' });
          }
        }data.content.push(arr);
      }return data;
    },
    doAction_uiControl834_QRdkoB: function (data, elem) {},
    getTemplate_uiControl834_QRdkoB: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  click:function(e){\n    var target = e.target;\n    // debugger;\n    if(target.tagName.toLowerCase() == \'i\'){\n      target = target.parentElement.parentElement;\n    }\n    if(target.tagName.toLowerCase() == \'a\'){\n      target = target.parentElement;\n    }\n    if(target.previousSibling.className == \'content disnone\'){\n      target.previousSibling.className = \'content\';\n      target.querySelector(\'a\').className = \'xia\';\n      target.querySelector(\'a\').nextSibling.textContent = \'\u6536\u8D77\u66F4\u591A\u5185\u5BB9\';\n    }else{\n      target.previousSibling.className = \'content disnone\';\n      target.querySelector(\'a\').className = \'shang\';\n       target.querySelector(\'a\').nextSibling.textContent = \'\u663E\u793A\u66F4\u591A\u5185\u5BB9\';\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    if(!data){\n      return \'\';\n    }\n    var lis = data.content.map(function(ele,index){\n      if(index<2){\n        var lisele = ele.map(function(d,i){\n          return(\n          \t<div className=\'contenttit\'>\n            \t<div className=\'contentitem\'>{d.left}</div>\n              <div className=\'contentitem\'>{d.right}</div>\n            </div>\n          )\n        })\n        return(\n        \t<div>{lisele}</div>\n        )\n      }\n    })\n    var list = data.content.map(function(ele,index){\n      if(index>1){\n        var lisele = ele.map(function(d,i){\n          if(!d.type){\n            return(\n          \t<div className=\'contenttit\'>\n            \t<div className=\'contentitem\'>{d.left}</div>\n              <div className=\'contentitem\'>{d.right}</div>\n            </div>\n          )\n          }else{\n            if(d.type == \'textarea\'){\n              return(\n              \t<div className=\'contenttit\'>\n                \t<div className=\'contentitem\'>{d.left}</div>\n                  <div className=\'contentitem\'><textarea value={d.right}></textarea></div>\n                </div>\n              )\n            }\n          }\n        })\n        return(\n        \t<div>{lisele}</div>\n        )\n      }\n    })\n    return (\n      <div className=\'information\'>\n       \t<div className=\'contenttitle\'><span></span><p>{data.title}</p></div>\n        <div className=\'content\'>\n          {lis}</div>\n        <div className=\'content disnone\'>\n          {list}\n          <div className=\'contentitem\' style={{\'border-bottom\':\'1px solid #e0e0e0\',\'width\':\'100%\',\'text-align\':\'right\'}}>\n            <a href=\'javascript:;\'>{data.content[2][data.content[2].length-1].text}</a>\n          </div>\n        </div>\n        <span onClick={_this.click}><a className=\'shang\' href=\'javascript:;\'></a>\u663E\u793A\u66F4\u591A\u5185\u5BB9</span>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  click: function click(e) {\n    var target = e.target;\n    // debugger;\n    if (target.tagName.toLowerCase() == \'i\') {\n      target = target.parentElement.parentElement;\n    }\n    if (target.tagName.toLowerCase() == \'a\') {\n      target = target.parentElement;\n    }\n    if (target.previousSibling.className == \'content disnone\') {\n      target.previousSibling.className = \'content\';\n      target.querySelector(\'a\').className = \'xia\';\n      target.querySelector(\'a\').nextSibling.textContent = \'\u6536\u8D77\u66F4\u591A\u5185\u5BB9\';\n    } else {\n      target.previousSibling.className = \'content disnone\';\n      target.querySelector(\'a\').className = \'shang\';\n      target.querySelector(\'a\').nextSibling.textContent = \'\u663E\u793A\u66F4\u591A\u5185\u5BB9\';\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    if (!data) {\n      return \'\';\n    }\n    var lis = data.content.map(function (ele, index) {\n      if (index < 2) {\n        var lisele = ele.map(function (d, i) {\n          return React.createElement(\n            \'div\',\n            { className: \'contenttit\' },\n            React.createElement(\n              \'div\',\n              { className: \'contentitem\' },\n              d.left\n            ),\n            React.createElement(\n              \'div\',\n              { className: \'contentitem\' },\n              d.right\n            )\n          );\n        });\n        return React.createElement(\n          \'div\',\n          null,\n          lisele\n        );\n      }\n    });\n    var list = data.content.map(function (ele, index) {\n      if (index > 1) {\n        var lisele = ele.map(function (d, i) {\n          if (!d.type) {\n            return React.createElement(\n              \'div\',\n              { className: \'contenttit\' },\n              React.createElement(\n                \'div\',\n                { className: \'contentitem\' },\n                d.left\n              ),\n              React.createElement(\n                \'div\',\n                { className: \'contentitem\' },\n                d.right\n              )\n            );\n          } else {\n            if (d.type == \'textarea\') {\n              return React.createElement(\n                \'div\',\n                { className: \'contenttit\' },\n                React.createElement(\n                  \'div\',\n                  { className: \'contentitem\' },\n                  d.left\n                ),\n                React.createElement(\n                  \'div\',\n                  { className: \'contentitem\' },\n                  React.createElement(\'textarea\', { value: d.right })\n                )\n              );\n            }\n          }\n        });\n        return React.createElement(\n          \'div\',\n          null,\n          lisele\n        );\n      }\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'information\' },\n      React.createElement(\n        \'div\',\n        { className: \'contenttitle\' },\n        React.createElement(\'span\', null),\n        React.createElement(\n          \'p\',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'content\' },\n        lis\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'content disnone\' },\n        list,\n        React.createElement(\n          \'div\',\n          { className: \'contentitem\', style: { \'border-bottom\': \'1px solid #e0e0e0\', \'width\': \'100%\', \'text-align\': \'right\' } },\n          React.createElement(\n            \'a\',\n            { href: \'javascript:;\' },\n            data.content[2][data.content[2].length - 1].text\n          )\n        )\n      ),\n      React.createElement(\n        \'span\',\n        { onClick: _this.click },\n        React.createElement(\'a\', { className: \'shang\', href: \'javascript:;\' }),\n        \'\\u663E\\u793A\\u66F4\\u591A\\u5185\\u5BB9\'\n      )\n    );\n  }\n});';
    }
  }, "HaveDoneExpenseReimbursementt");
})(window, ysp);