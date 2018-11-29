webpackJsonp([1],{NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("nav",[t("div",{staticClass:"nav-wrapper blue darken-2"},[t("router-link",{staticClass:"brand-logo center",attrs:{to:"/"}},[this._v("Employee Manager")])],1)])},staticRenderFns:[]},o={name:"App",components:{Navbar:a("VU/8")(null,n,!1,null,null,null).exports}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]};var l=a("VU/8")(o,s,!1,function(e){a("oFLY")},null,null).exports,p=a("/ocq"),r=a("kxiW"),d=a.n(r),c=(a("881v"),d.a.initializeApp({apiKey:"AIzaSyAJz6NGLAOkpKH16WclQrefpS4WFAfI5oM",authDomain:"vue-employees-2230a.firebaseapp.com",databaseURL:"https://vue-employees-2230a.firebaseio.com",projectId:"vue-employees-2230a",storageBucket:"vue-employees-2230a.appspot.com",messagingSenderId:"799555826768"}));d.a.firestore().settings({timestampsInSnapshots:!0});var m=c.firestore(),u={name:"employee-type-chart",data:function(){return{employeeTypeData:v}},methods:{createChart:function(e,t){var a=document.getElementById(e);new Chart(a,{type:t.type,data:t.data,options:t.options})}},mounted:function(){this.createChart("typeChart",this.employeeTypeData)}},v={type:"doughnut",data:{labels:["Contract","Full-time"],datasets:[{label:"Number of Moons",data:[6,2]}]},options:{responsive:!0,lineTension:1,scales:{yAxes:[{ticks:{beginAtZero:!0,padding:25}}]}}},y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("canvas",{attrs:{id:"typeChart"}})])}]},_={name:"dashboard",components:{etc:a("VU/8")(u,y,!1,null,null,null).exports},data:function(){return{employees:[],employeeTotal:"",employeeTypes:{"full-time":null,contract:null}}},created:function(){var e=this;m.collection("employees").orderBy("dept").get().then(function(t){t.forEach(function(t){var a={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position,type:t.data().type};e.employees.push(a)}),e.employeeTotal=e.employees.length,e.employeeTypes["full-time"]=e.employees.filter(function(e){return"full-time"===e.type}).length,e.employeeTypes.contract=e.employees.filter(function(e){return"contract"===e.type}).length})}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("span",[a("h4",[e._v("Employees ")]),a("p",[a("em",[e._v("("+e._s(e.employeeTotal)+" total)")])])]),e._v(" "),a("ul",{staticClass:"collection width-header"},e._l(e.employees,function(t){return a("li",{key:t.id,staticClass:"collection-item"},[a("div",{staticClass:"chip yellow lighten-2"},[e._v(e._s(t.dept))]),e._v("\n            "+e._s(t.name)+"\n            "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[a("i",{staticClass:"fas fa-info-circle inline-icon"})])],1)})),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[]};var h=a("VU/8")(_,f,!1,function(e){a("S+Wk")},"data-v-67227a80",null).exports,g={name:"new-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null,type:null}},methods:{saveEmployee:function(){var e=this;m.collection("employees").add({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position,type:this.type}).then(function(t){return e.$router.push("/")}).catch(function(e){return console.log(e)})}}},C={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-employee"}},[a("h4",[e._v("New Employee")]),e._v(" "),a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),a("label",[e._v("Employee ID")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",[e._v("Name")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),a("label",[e._v("Department")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),a("label",[e._v("Position")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"text",required:""},domProps:{value:e.type},on:{input:function(t){t.target.composing||(e.type=t.target.value)}}}),e._v(" "),a("label",[e._v("Type")])])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])},staticRenderFns:[]},b=a("VU/8")(g,C,!1,null,null,null).exports,w={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null,type:null}},beforeRouteEnter:function(e,t,a){m.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position,t.type=e.data().type})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;m.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position,e.type=t.data().type})})},deleteEmployee:function(){var e=this;confirm("Are you sure you want to delete this employee?")&&m.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},E={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"view-employee"}},[a("h4",[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"material-icons inline-icon"},[e._v("arrow_back")])]),e._v(" Employee details")],1),e._v(" "),a("hr"),e._v(" "),a("ul",{staticClass:"colllection"},[a("li",[a("h5",[e._v(e._s(e.name))])]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Employee ID: "+e._s(e.employee_id))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Department: "+e._s(e.dept))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Position: "+e._s(e.position))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Type: "+e._s(e.type))])]),e._v(" "),a("hr"),e._v(" "),a("br"),e._v(" "),a("router-link",{staticClass:"btn green",attrs:{to:{name:"edit-employee",params:{employee_id:e.employee_id}}}},[e._v("Edit")]),e._v(" "),a("button",{staticClass:"btn red",attrs:{to:"/"},on:{click:e.deleteEmployee}},[e._v("Delete")])],1)},staticRenderFns:[]};var x=a("VU/8")(w,E,!1,function(e){a("vMwR")},"data-v-b9867cb8",null).exports,N={name:"edit-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null,type:null}},beforeRouteEnter:function(e,t,a){m.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position,t.type=e.data().type})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;m.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position,e.type=t.data().type})})},updateEmployee:function(){var e=this;m.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employee_id:e.employee_id,dept:e.dept,name:e.name,position:e.position,type:e.type}).then(function(){e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}})})})})}}},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"edit-employee"}},[a("h4",[e._v("Edit Employee")]),e._v(" "),a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),a("label",{staticClass:"active"},[e._v("Employee ID")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",{staticClass:"active"},[e._v("Name")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),a("label",{staticClass:"active"},[e._v("Department")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),a("label",{staticClass:"active"},[e._v("Position")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"text",required:""},domProps:{value:e.type},on:{input:function(t){t.target.composing||(e.type=t.target.value)}}}),e._v(" "),a("label",{staticClass:"active"},[e._v("Type")])])]),e._v(" "),a("button",{staticClass:"btn blue lighten-1",attrs:{type:"submit"}},[e._v("Save")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])},staticRenderFns:[]},$=a("VU/8")(N,k,!1,null,null,null).exports;i.a.use(p.a);var D=new p.a({routes:[{path:"/",name:"dashboard",component:h},{path:"/new",name:"new-employee",component:b},{path:"/edit/:employee_id",name:"edit-employee",component:$},{path:"/:employee_id",name:"view-employee",component:x}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:D,components:{App:l},template:"<App/>"})},"S+Wk":function(e,t){},oFLY:function(e,t){},vMwR:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.de0f1ff81430b3af6266.js.map