webpackJsonp([5],{AneW:function(e,t){},Quw4:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("7t+N");var i={name:"singup",data:function(){return{user_singup:{name:"",Email:"",password:""},singUped:!1}},methods:{singup:function(){var e=this,t="https://nameless-forest-65777.herokuapp.com/menber";this.$validator.validate().then(function(s){s&&e.$http.get(t).then(function(s){0==s.data.filter(function(t){return t.Email==e.user_singup.Email}).length?e.$http.post(t,e.user_singup).then(function(t){localStorage.setItem("userId",t.data.id),e.$bus.$emit("singin",{singin:!0}),e.$router.push("/")}):e.singUped=!0})})},myFunctionHere:function(){this.singUped=!1}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.singup(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user_singup.name,expression:"user_singup.name"}],attrs:{id:"name",type:"text",name:"name",placeholder:"用戶名"},domProps:{value:e.user_singup.name},on:{input:function(t){t.target.composing||e.$set(e.user_singup,"name",t.target.value)}}}),e._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user_singup.Email,expression:"user_singup.Email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{id:"email",type:"email",name:"email",placeholder:"電郵"},domProps:{value:e.user_singup.Email},on:{focus:e.myFunctionHere,input:function(t){t.target.composing||e.$set(e.user_singup,"Email",t.target.value)}}}),e._v(" "),s("span",{staticClass:"text-danger",staticStyle:{"font-size":"14px"}},[e._v(e._s(e.errors.first("email")))]),e._v(" "),e.singUped?s("span",{staticClass:"text-danger",staticStyle:{"font-size":"14px"}},[e._v("此帳號已經註冊過")]):e._e()]),e._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user_singup.password,expression:"user_singup.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"password",type:"password",name:"password",placeholder:"密碼"},domProps:{value:e.user_singup.password},on:{input:function(t){t.target.composing||e.$set(e.user_singup,"password",t.target.value)}}}),e._v(" "),s("span",{staticClass:"text-danger",staticStyle:{"font-size":"14px"}},[e._v(e._s(e.errors.first("password")))])]),e._v(" "),s("button",{staticClass:"btn btn-btncolor w-100 rounded-0",attrs:{type:"submit"}},[e._v("立即加入！")])])},staticRenderFns:[]};var n={name:"login",components:{singin:s("VU/8")(i,a,!1,function(e){s("qwHN")},"data-v-fdd3d892",null).exports},data:function(){return{member_title:!0,user_singin:{Email:"",password:""},singined:!1}},methods:{singin:function(){var e=this,t=this,s="https://nameless-forest-65777.herokuapp.com/menber?Email="+t.user_singin.Email+"&password="+t.user_singin.password;this.$validator.validate().then(function(i){i&&e.$http.get(s).then(function(e){0==e.data?t.singined=!0:(t.$bus.$emit("singin",{singin:!0}),localStorage.setItem("userId",e.data[0].id),1==e.data[0].id?t.$router.push("/admin/productsManager"):t.$router.push("/"))})})}}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"member"},[s("div",{staticClass:"member_body"},[s("div",{staticClass:"member_title"},[s("ul",[s("li",{staticClass:"singup_title",class:{active:e.member_title},on:{click:function(t){e.member_title=!1}}},[e._v("註冊會員")]),e._v(" "),s("li",{staticClass:"login_title",class:{active:!e.member_title},on:{click:function(t){e.member_title=!0}}},[e._v("會員登入")])])]),e._v(" "),e.member_title?s("div",{staticClass:"login",on:{submit:function(t){return t.preventDefault(),e.singin(t)}}},[s("form",{attrs:{autocomplete:"off"}},[e.singined?s("div",{staticClass:"alert alert-danger"},[e._v("請輸入正確的帳號或密碼")]):e._e(),e._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user_singin.Email,expression:"user_singin.Email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{id:"email",type:"email",name:"信箱",placeholder:"信箱"},domProps:{value:e.user_singin.Email},on:{input:function(t){t.target.composing||e.$set(e.user_singin,"Email",t.target.value)}}}),e._v(" "),s("span",{staticClass:"text-danger",staticStyle:{"font-size":"14px"}},[e._v(e._s(e.errors.first("信箱")))])]),e._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user_singin.password,expression:"user_singin.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"password",type:"password",name:"密碼",placeholder:"密碼"},domProps:{value:e.user_singin.password},on:{input:function(t){t.target.composing||e.$set(e.user_singin,"password",t.target.value)}}}),e._v(" "),s("span",{staticClass:"text-danger",staticStyle:{"font-size":"14px"}},[e._v(e._s(e.errors.first("密碼")))])]),e._v(" "),s("button",{staticClass:"btn btn-btncolor w-100 rounded-0",attrs:{type:"submit"}},[e._v("購物去！")])])]):s("div",{staticClass:"singup"},[s("singin")],1)])])])},staticRenderFns:[]};var o=s("VU/8")(n,r,!1,function(e){s("AneW")},"data-v-fa33b0ac",null);t.default=o.exports},qwHN:function(e,t){}});
//# sourceMappingURL=5.c0e6ee6b572d67cc7c1d.js.map