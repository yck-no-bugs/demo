(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0513":function(t,e,n){"use strict";n.r(e);var i=n("e4d9"),s=n("f554");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);n("1316");var o=n("2877"),u=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,"1d3837a0",null);u.options.__file="index.vue",e["default"]=u.exports},1316:function(t,e,n){"use strict";var i=n("3085"),s=n.n(i);s.a},3085:function(t,e,n){var i=n("d22c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("4f06").default;s("c73420a4",i,!0,{sourceMap:!1,shadowMode:!1})},"4f60":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"Hello",message:[]}},onLoad:function(){var t=this;uni.request({url:"https://llr.dangdanggps.com/jycoldchain/ColdTransportCapacityLineController/list",data:{},method:"POST",success:function(e){console.log(e.data),t.message=e.data.msg,t.text="request success"}})},methods:{phones:function(t){console.log(t),uni.makePhoneCall({phoneNumber:t})},a:function(){console.log(12121),uni.navigateTo({url:"../test3/test3"})}}};e.default=i},d22c:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".content[data-v-1d3837a0]{-webkit-box-sizing:border-box;box-sizing:border-box}",""])},e4d9:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"list"},t._l(t.message,function(e,i){return n("v-uni-view",{key:i,staticClass:"list_list"},[n("v-uni-view",{staticClass:"list_left"},[n("v-uni-image",{attrs:{src:"../../static/aaa.png",mode:""}})],1),n("v-uni-view",{staticClass:"list_center"},[n("v-uni-view",{},[t._v(t._s(e.companyName))]),n("v-uni-view",{},[n("span",[t._v("始发地:"+t._s(e.beginCity))]),n("span",[t._v("目的地:"+t._s(e.endCity))])]),n("v-uni-view",{},[t._v("车型:"+t._s(e.vehicleModel))]),n("v-uni-view",{on:{click:function(n){n=t.$handleEvent(n),t.phones(e.phone)}}},[t._v(t._s(e.contacts)+":"+t._s(e.phone))])],1),n("v-uni-view",{staticClass:"list_right"},[n("v-uni-view",{},[t._v(t._s(e.createTime.slice(5,10)))])],1)],1)}))],1)},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},f554:function(t,e,n){"use strict";n.r(e);var i=n("4f60"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=s.a}}]);