(function(e){function t(t){for(var o,s,i=t[0],l=t[1],d=t[2],m=0,u=[];m<i.length;m++)s=i[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(t);while(u.length)u.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],o=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(o=!1)}o&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var o={},r={index:0},n=[];function s(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=o,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(a,o,function(t){return e[t]}.bind(null,o));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="ModalsApp/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var c=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("6490")},"171c":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal__wrapper",on:{click:function(t){return e.$emit("close")}}},[a("div",{staticClass:"modal-content",on:{click:function(e){e.stopPropagation()}}},[a("div",{staticClass:"modal-header"},[a("span",{staticClass:"modal-title"},[e._v(" "+e._s(e.title)+" ")]),a("span",{staticClass:"button-close",on:{click:function(t){return e.$emit("close")}}},[e._v("×")])]),a("div",{staticClass:"modal-body"},[e._t("body",[e._v("default body")])],2),a("div",{staticClass:"modal-footer"},[a("span",{on:{click:function(t){return e.$emit("change-modal")}}},[e._v(e._s(e.changeTitle))])])])])])},r=[],n={props:{title:{type:String,required:!0},changeTitle:{type:String,required:!0}},data:function(){return{}},mounted:function(){var e=this;document.body.addEventListener("keyup",(function(t){27===t.keyCode&&e.$emit("close")}))},computed:{},methods:{}},s=n,i=(a("7dd3"),a("2877")),l=Object(i["a"])(s,o,r,!1,null,"7d1009c1",null);t["a"]=l.exports},6490:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"wrapper-content"},[a("section",[a("div",{staticClass:"container"},[a("a",{attrs:{href:"/reg"}},[e._v("Страница регистрации")]),a("br"),a("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.modalFirst=!e.modalFirst}}},[e._v("Show first modal")]),a("modals",{directives:[{name:"show",rawName:"v-show",value:e.modalFirst,expression:"modalFirst"}],attrs:{title:"First modal"},on:{close:function(t){e.modalFirst=!1}}},[a("div",{attrs:{slot:"body"},slot:"body"},[a("p",[e._v(" Text Text Text Text Text Text Text ")]),a("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.modalFirst=!e.modalFirst}}},[e._v("Well Done!")])])]),a("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.modalSecond.show=!e.modalSecond.show}}},[e._v("Show modal with form")]),a("modals",{directives:[{name:"show",rawName:"v-show",value:e.modalSecond.show,expression:"modalSecond.show"}],attrs:{title:"Modal with form"},on:{close:function(t){e.modalSecond.show=!1}}},[a("div",{attrs:{slot:"body"},slot:"body"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submitSecondForm(t)}}},[a("label",[e._v("Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.modalSecond.name,expression:"modalSecond.name"}],attrs:{type:"text",required:""},domProps:{value:e.modalSecond.name},on:{input:function(t){t.target.composing||e.$set(e.modalSecond,"name",t.target.value)}}}),a("label",[e._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.modalSecond.email,expression:"modalSecond.email"}],attrs:{type:"email",required:""},domProps:{value:e.modalSecond.email},on:{input:function(t){t.target.composing||e.$set(e.modalSecond,"email",t.target.value)}}}),a("button",{staticClass:"btn btnPrimary"},[e._v("Submit!")])])])]),a("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.modalValidate=!e.modalValidate}}},[e._v("Show modal with form + validate")]),a("modalValidate",{directives:[{name:"show",rawName:"v-show",value:e.modalValidate,expression:"modalValidate"}],on:{close:function(t){e.modalValidate=!1}}})],1)])])])},n=[],s=(a("b0c0"),a("171c")),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("modal",{attrs:{title:"Modal with form + Validate"},on:{close:function(t){return e.closeForm()}}},[a("div",{attrs:{slot:"body"},slot:"body"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("div",{staticClass:"form-item",class:{errorInput:e.$v.name.$error}},[a("label",[e._v("Name:")]),e.$v.name.required?e._e():a("p",{staticClass:"errorText"},[e._v(" Filed is required! ")]),e.$v.name.minLength?e._e():a("p",{staticClass:"errorText"},[e._v(" Name must have at least "+e._s(e.$v.name.$params.minLength.min)+" !")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],class:{error:e.$v.name.$error},domProps:{value:e.name},on:{change:function(t){return e.$v.name.$touch()},input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",{staticClass:"form-item",class:{errorInput:e.$v.email.$error}},[a("label",[e._v("Email:")]),e.$v.email.required?e._e():a("p",{staticClass:"errorText"},[e._v(" Filed is required! ")]),e.$v.email.email?e._e():a("p",{staticClass:"errorText"},[e._v(" Email is not correct!")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{error:e.$v.email.$error},domProps:{value:e.email},on:{change:function(t){return e.$v.email.$touch()},input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-item",class:{errorInput:e.$v.password.$error}},[a("label",[e._v("Password:")]),e.$v.password.required?e._e():a("p",{staticClass:"errorText"},[e._v(" Filed is required! ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{error:e.$v.password.$error},domProps:{value:e.password},on:{change:function(t){return e.$v.password.$touch()},input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"form-item",class:{errorInput:e.$v.repeatPassword.$error}},[a("label",[e._v("Repeat password:")]),e.$v.repeatPassword.sameAs?e._e():a("p",{staticClass:"errorText"},[e._v(" Passwords do not match! ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.repeatPassword,expression:"repeatPassword"}],class:{error:e.$v.repeatPassword.$error},domProps:{value:e.repeatPassword},on:{change:function(t){return e.$v.repeatPassword.$touch()},input:function(t){t.target.composing||(e.repeatPassword=t.target.value)}}})]),a("button",{staticClass:"btn btnPrimary"},[e._v("Submit!")])])])])},l=[],d=a("b5ae"),c={components:{modal:s["a"]},data:function(){return{name:"",email:"",password:"",repeatPassword:""}},validations:{name:{required:d["required"],minLength:Object(d["minLength"])(4)},email:{required:d["required"],email:d["email"]},password:{required:d["required"]},repeatPassword:{sameAsPassword:Object(d["sameAs"])("password")}},methods:{onSubmit:function(){if(this.$v.$touch(),!this.$v.$invalid){var e={name:this.name,email:this.email,password:this.password,repeatPassword:this.repeatPassword};console.log(e),this.closeForm()}},closeForm:function(){this.name="",this.email="",this.password="",this.repeatPassword="",this.$v.$reset(),this.$emit("close")}}},m=c,u=(a("900c"),a("2877")),p=Object(u["a"])(m,i,l,!1,null,null,null),v=p.exports,f={components:{modals:s["a"],modalValidate:v},data:function(){return{modalFirst:!1,modalSecond:{show:!1,name:"",email:""},modalValidate:!1}},methods:{submitSecondForm:function(){console.log({name:this.modalSecond.name,email:this.modalSecond.email}),this.modalSecond.name="",this.modalSecond.email="",this.modalSecond.show=!1}}},h=f,b=Object(u["a"])(h,r,n,!1,null,null,null),w=b.exports,$=a("1dce"),_=a.n($);a("c1c3");o["a"].use(_.a),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(w)}}).$mount("#app")},"7dd3":function(e,t,a){"use strict";var o=a("beeb"),r=a.n(o);r.a},"900c":function(e,t,a){"use strict";var o=a("fe41"),r=a.n(o);r.a},beeb:function(e,t,a){},c1c3:function(e,t,a){},fe41:function(e,t,a){}});
//# sourceMappingURL=index.9dd68cd1.js.map