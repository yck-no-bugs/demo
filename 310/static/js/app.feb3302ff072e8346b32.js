webpackJsonp([1],{KmAS:function(a,e){},NHnr:function(a,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=i("7+uW"),o={render:function(){var a=this.$createElement,e=this._self._c||a;return e("div",{attrs:{id:"app1"}},[e("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},o,!1,function(a){i("KmAS")},null,null).exports,r=i("/ocq"),n=(i("mw3O"),i("7t+N")),l=i.n(n),d={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",radio1:"",radio2:"",radio3:"",radio4:"",radio5:"",radio1_1:"",radio4_1:"",radio5_1:"",systemOperation:"",afterSale:"",productCare:"",mobileFunction:"",productSuggestion:"",userName:""}},created:function(){console.log(this.$route.query.username),this.userName=this.$route.query.username,console.log(!this.userName)},mounted:function(){console.log(l()("hello"))},methods:{callback:function(a){alert(a.msg)},b:function(){},btnradio1:function(){this.radio1="1"},btnradio4:function(){this.radio4="1"},btnradio5:function(){this.radio5="1"},submit:function(){var a=this;if(this.userName)if(""!=this.radio1){if(this.systemOperation=this.radio1,"1"==this.radio1){if(""==this.radio1_1)return void this.$message({message:"请输入第1题反馈",type:"warning"});this.systemOperation=this.radio1_1}if(""!=this.radio2)if(""!=this.radio3)if(""!=this.radio4){if(this.mobileFunction=this.radio4,"1"==this.radio4){if(""==this.radio4_1)return void this.$message({message:"请输入第4题反馈",type:"warning"});this.mobileFunction=this.radio4_1}if(""!=this.radio5){if(this.productSuggestion=this.radio5,"1"==this.radio5){if(""==this.radio5_1)return void this.$message({message:"请输入第5题反馈",type:"warning"});this.productSuggestion=this.radio5_1}console.log(this.systemOperation,this.radio2,this.radio3,this.mobileFunction,this.productSuggestion);var e=new Date,i=e.getFullYear(),t=e.getMonth(),o=e.getDate();o<10&&(o="0"+o);var s=e.getHours();s<10&&(s="0"+s);var r=e.getMinutes();r<10&&(r="0"+r);var n=e.getSeconds();n<10&&(n="0"+n);var d=i+"-"+t+"1-"+o+" "+s+":"+r+":"+n;l.a.ajax({url:"https://www.123gps.com.cn/webgis/rest/userquestionnaireinfo/save",data:{userName:a.userName,systemOperation:a.systemOperation,afterSale:a.radio2,productCare:a.radio3,mobileFunction:a.mobileFunction,productSuggestion:a.productSuggestion,createTime:d},async:!1,dataType:"jsonp",jsonp:"callback",jsonpCallback:"callback",type:"get",success:function(e){console.log(e),a.$message({message:e.msg,type:"success"})},error:function(e){console.log(e),a.$message({message:e.msg,type:"warning"})}})}else this.$message({message:"第5题没有选择",type:"warning"})}else this.$message({message:"第4题没有选择",type:"warning"});else this.$message({message:"第3题没有选择",type:"warning"});else this.$message({message:"第2题没有选择",type:"warning"})}else this.$message({message:"第1题没有选择",type:"warning"});else this.$message({message:"请登录",type:"warning"})}}},c={render:function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"hello"},[i("div",{staticClass:"content"},[i("div",{staticClass:"title"},[a._v("捷依问卷调查")]),a._v(" "),i("div",{staticClass:"list"},[i("div",{staticClass:"question"},[a._v("1:监控系统是否方便操作？（单选）")]),a._v(" "),i("div",{staticClass:"answer"},[i("div",[i("el-radio",{attrs:{label:"简单易操作"},model:{value:a.radio1,callback:function(e){a.radio1=e},expression:"radio1"}},[a._v("简单易操作")])],1),a._v(" "),i("div",[i("el-radio",{attrs:{label:"基本可以操作"},model:{value:a.radio1,callback:function(e){a.radio1=e},expression:"radio1"}},[a._v("基本可以操作")])],1),a._v(" "),i("div",[i("el-radio",{attrs:{label:"稍有难度"},model:{value:a.radio1,callback:function(e){a.radio1=e},expression:"radio1"}},[a._v("稍有难度")])],1),a._v(" "),i("div",[i("el-radio",{attrs:{label:"复杂繁琐"},model:{value:a.radio1,callback:function(e){a.radio1=e},expression:"radio1"}},[a._v("复杂繁琐")])],1),a._v(" "),i("div",[i("el-radio",{attrs:{label:"1"},model:{value:a.radio1,callback:function(e){a.radio1=e},expression:"radio1"}},[a._v("\n            其他建议 \n            "),i("input",{directives:[{name:"model",rawName:"v-model",value:a.radio1_1,expression:"radio1_1"}],attrs:{type:"text"},domProps:{value:a.radio1_1},on:{click:a.btnradio1,input:function(e){e.target.composing||(a.radio1_1=e.target.value)}}})])],1)]),a._v(" "),i("div",{staticClass:"question"},[a._v("2:售后服务是否及时跟进回复？（单选）")]),a._v(" "),i("div",{staticClass:"answer"},[i("div",[i("el-radio",{attrs:{label:"响应速度快"},model:{value:a.radio2,callback:function(e){a.radio2=e},expression:"radio2"}},[a._v("响应速度快")])],1),a._v(" "),i("div",[i("el-radio",{attrs:{label:"响应速度一般"},model:{value:a.radio2,callback:function(e){a.radio2=e},expression:"radio2"}},[a._v("响应速度一般")])],1),a._v(" "),i("div",[i("el-radio",{attrs:{label:"响应速度慢，且不处理不回复\n        "},model:{value:a.radio2,callback:function(e){a.radio2=e},expression:"radio2"}},[a._v("响应速度慢，且不处理不回复")])],1)]),a._v(" "),i("div",{staticClass:"question"},[a._v("3:您对产品最在意的是（单选）")]),a._v(" "),i("div",{staticClass:"answer"},[i("div",[i("el-radio",{attrs:{label:"离线问题"},model:{value:a.radio3,callback:function(e){a.radio3=e},expression:"radio3"}},[a._v("离线问题")])],1),a._v(" "),i("div",[i("el-radio",{attrs:{label:"历史轨迹问题（不定位）"},model:{value:a.radio3,callback:function(e){a.radio3=e},expression:"radio3"}},[a._v("历史轨迹问题（不定位）")])],1),a._v(" "),i("div",[i("el-radio",{attrs:{label:"温度精准度问题"},model:{value:a.radio3,callback:function(e){a.radio3=e},expression:"radio3"}},[a._v("温度精准度问题")])],1),a._v(" "),i("div",[i("el-radio",{attrs:{label:"便携电量续航问题"},model:{value:a.radio3,callback:function(e){a.radio3=e},expression:"radio3"}},[a._v("便携电量续航问题")])],1)]),a._v(" "),i("div",{staticClass:"question"},[a._v("4:最希望加到手机端的功能是？（单选）")]),a._v(" "),i("div",{staticClass:"answer"},[i("div",[i("el-radio",{attrs:{label:"报警设置（温度、超速报警等）"},model:{value:a.radio4,callback:function(e){a.radio4=e},expression:"radio4"}},[a._v("报警设置（温度、超速报警等）")])],1),a._v(" "),i("div",[i("el-radio",{attrs:{label:"子用户管理"},model:{value:a.radio4,callback:function(e){a.radio4=e},expression:"radio4"}},[a._v("子用户管理")])],1),a._v(" "),i("div",[i("el-radio",{attrs:{label:"便携设备间隔设置"},model:{value:a.radio4,callback:function(e){a.radio4=e},expression:"radio4"}},[a._v("便携设备间隔设置")])],1),a._v(" "),i("div",[i("el-radio",{attrs:{label:"修改车牌"},model:{value:a.radio4,callback:function(e){a.radio4=e},expression:"radio4"}},[a._v("修改车牌")])],1),a._v(" "),i("div",[i("el-radio",{attrs:{label:"目前已经满足需求"},model:{value:a.radio4,callback:function(e){a.radio4=e},expression:"radio4"}},[a._v("目前已经满足需求")])],1),a._v(" "),i("div",[i("el-radio",{attrs:{label:"1"},model:{value:a.radio4,callback:function(e){a.radio4=e},expression:"radio4"}},[a._v("\n            其他 \n            "),i("input",{directives:[{name:"model",rawName:"v-model",value:a.radio4_1,expression:"radio4_1"}],attrs:{type:"text"},domProps:{value:a.radio4_1},on:{click:a.btnradio4,input:function(e){e.target.composing||(a.radio4_1=e.target.value)}}})])],1)]),a._v(" "),i("div",{staticClass:"question"},[a._v("5:您对我公司系统或者产品是否有更好的建议？（单选）")]),a._v(" "),i("div",{staticClass:"answer"},[i("div",[i("el-radio",{attrs:{label:"1"},model:{value:a.radio5,callback:function(e){a.radio5=e},expression:"radio5"}},[a._v("\n            欢迎您的反馈 \n            "),i("input",{directives:[{name:"model",rawName:"v-model",value:a.radio5_1,expression:"radio5_1"}],attrs:{type:"text"},domProps:{value:a.radio5_1},on:{click:a.btnradio5,input:function(e){e.target.composing||(a.radio5_1=e.target.value)}}})])],1),a._v(" "),i("div",[i("el-radio",{attrs:{label:"否"},model:{value:a.radio5,callback:function(e){a.radio5=e},expression:"radio5"}},[a._v("否")])],1)]),a._v(" "),i("div",{staticClass:"btn"},[i("div",{staticClass:"submit",on:{click:a.submit}},[a._v("提  交")])])])])])},staticRenderFns:[]};var u=i("VU/8")(d,c,!1,function(a){i("h0tZ"),i("wQXv")},"data-v-4625d0fc",null).exports;t.default.use(r.a);var v=new r.a({routes:[{path:"/",name:"HelloWorld",component:u}]}),m=i("zL8q"),p=i.n(m),_=(i("tvR6"),i("mtWM")),g=i.n(_);i("sVYa");t.default.config.productionTip=!1,t.default.use(p.a),t.default.prototype.$http=g.a,new t.default({el:"#app",router:v,components:{App:s},template:"<App/>"})},h0tZ:function(a,e){},tvR6:function(a,e){},wQXv:function(a,e){}},["NHnr"]);
//# sourceMappingURL=app.feb3302ff072e8346b32.js.map