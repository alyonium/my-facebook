(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d68ece1"],{3461:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",{staticClass:"d-flex align-center mt-8",attrs:{cols:"8",offset:"1"}},[e._v(" Add new user ")]),a("v-col",{staticClass:"d-flex align-center mt-8 justify-end",attrs:{cols:"3"}},[a("button",{staticClass:"redirect-button",on:{click:function(t){return e.saveUser()}}},[e._v("Save")])])],1),a("v-row",[a("v-col",{staticClass:"d-flex flex-column justify-center align-center add-user-card",attrs:{cols:"4",offset:"4"}},[a("label",{attrs:{for:"name"}},[e._v("Name: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{id:"name",type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),a("label",{attrs:{for:"age"}},[e._v("Age: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],attrs:{id:"age",type:"number"},domProps:{value:e.age},on:{input:function(t){t.target.composing||(e.age=t.target.value)}}})])],1)],1)},o=[],s=(a("b0c0"),a("bc3a")),r=a.n(s),c={name:"ListEdit",data:function(){return{name:"",age:0}},mounted:function(){var e=this;r.a.get("https://facebook-back.herokuapp.com/get/".concat(this.$route.params.id)).then((function(t){e.name=t.data.name,e.age=t.data.age}))},methods:{saveUser:function(){var e=this;r.a.put("https://facebook-back.herokuapp.com/edit/".concat(this.$route.params.id),{name:this.name,age:this.age}).then((function(){e.$router.push("/list")}))}}},i=c,u=(a("63b9"),a("2877")),l=a("6544"),m=a.n(l),d=a("62ad"),f=a("a523"),p=a("0fd9"),v=Object(u["a"])(i,n,o,!1,null,"7f2cf016",null);t["default"]=v.exports;m()(v,{VCol:d["a"],VContainer:f["a"],VRow:p["a"]})},4411:function(e,t,a){},"63b9":function(e,t,a){"use strict";a("4411")}}]);
//# sourceMappingURL=chunk-7d68ece1.6c0b9813.js.map