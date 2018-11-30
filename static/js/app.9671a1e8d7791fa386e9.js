webpackJsonp([1],{MsB7:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),s=a("kxiW"),n=a.n(s),o={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){n.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=n.a.auth().currentUser.email)},methods:{logout:function(){var e=this;n.a.auth().signOut().then(function(){return e.$router.push("/login")})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",[a("div",{staticClass:"nav-wrapper blue darken-2"},[a("router-link",{staticClass:"brand-logo left",attrs:{to:"/"}},[e._v("Employee Manager")]),e._v(" "),a("ul",{staticClass:"right"},[a("li",[e.isLoggedIn?e._e():a("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),e._v(" "),a("li",[e.isLoggedIn?e._e():a("router-link",{attrs:{to:"/signup"}},[e._v("Signup")])],1),e._v(" "),a("li",[e.isLoggedIn?a("router-link",{staticClass:"hide-on-small-and-down",attrs:{to:"/"}},[e._v("Employees")]):e._e()],1),e._v(" "),a("li",[e.isLoggedIn?a("router-link",{staticClass:"hide-on-small-and-down",attrs:{to:"/analytics"}},[e._v("Key Metrics")]):e._e()],1),e._v(" "),e.isLoggedIn?a("li",[a("span",{staticClass:"email grey-text hide-on-med-and-down"},[e._v(e._s(e.currentUser))])]):e._e(),e._v(" "),a("li",[e.isLoggedIn?a("button",{staticClass:"btn-flat",on:{click:e.logout}},[e._v("logout")]):e._e()])])],1)])])},staticRenderFns:[]};var r={name:"App",components:{Navbar:a("VU/8")(o,l,!1,function(e){a("kTNM")},"data-v-79ef0cc6",null).exports}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar",{key:this.$route.fullPath}),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]};var c=a("VU/8")(r,p,!1,function(e){a("P6/D")},null,null).exports,d=a("/ocq"),u=(a("881v"),n.a.initializeApp({apiKey:"AIzaSyAJz6NGLAOkpKH16WclQrefpS4WFAfI5oM",authDomain:"vue-employees-2230a.firebaseapp.com",databaseURL:"https://vue-employees-2230a.firebaseio.com",projectId:"vue-employees-2230a",storageBucket:"vue-employees-2230a.appspot.com",messagingSenderId:"799555826768"}));n.a.firestore().settings({timestampsInSnapshots:!0});var m=u.firestore(),v={name:"dashboard",data:function(){return{employees:[],employeeTotal:"",employeeTypes:{"full-time":null,contract:null}}},created:function(){var e=this;m.collection("employees").orderBy("dept").get().then(function(t){t.forEach(function(t){var a={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position,type:t.data().type};e.employees.push(a)}),e.employeeTotal=e.employees.length,e.employeeTypes["full-time"]=e.employees.filter(function(e){return"full-time"===e.type}).length,e.employeeTypes.contract=e.employees.filter(function(e){return"contract"===e.type}).length})}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("span",[a("h4",[e._v("Employees ")]),a("p",[a("em",[e._v("("+e._s(e.employeeTotal)+" total)")])])]),e._v(" "),a("ul",{staticClass:"collection width-header"},e._l(e.employees,function(t){return a("li",{key:t.id,staticClass:"collection-item"},[a("div",{staticClass:"chip yellow lighten-2"},[e._v(e._s(t.dept))]),e._v("\n            "+e._s(t.name)+"\n            "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[a("i",{staticClass:"fas fa-info-circle inline-icon"})])],1)})),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[]};var _=a("VU/8")(v,y,!1,function(e){a("RZ6c")},"data-v-4ff1a118",null).exports,f={name:"new-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null,type:null}},methods:{saveEmployee:function(){var e=this;m.collection("employees").add({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position,type:this.type}).then(function(t){return e.$router.push("/")}).catch(function(e){return console.log(e)})}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-employee"}},[a("h4",[e._v("New Employee")]),e._v(" "),a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),a("label",[e._v("Employee ID")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",[e._v("Name")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),a("label",[e._v("Department")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),a("label",[e._v("Position")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"text",required:""},domProps:{value:e.type},on:{input:function(t){t.target.composing||(e.type=t.target.value)}}}),e._v(" "),a("label",[e._v("Type")])])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])},staticRenderFns:[]},g=a("VU/8")(f,h,!1,null,null,null).exports,w={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null,type:null}},beforeRouteEnter:function(e,t,a){m.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position,t.type=e.data().type})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;m.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position,e.type=t.data().type})})},deleteEmployee:function(){var e=this;confirm("Are you sure you want to delete this employee?")&&m.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},C={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"view-employee"}},[a("h4",[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"material-icons inline-icon"},[e._v("arrow_back")])]),e._v(" Employee details")],1),e._v(" "),a("hr"),e._v(" "),a("ul",{staticClass:"colllection"},[a("li",[a("h5",[e._v(e._s(e.name))])]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Employee ID: "+e._s(e.employee_id))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Department: "+e._s(e.dept))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Position: "+e._s(e.position))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Type: "+e._s(e.type))])]),e._v(" "),a("hr"),e._v(" "),a("br"),e._v(" "),a("router-link",{staticClass:"btn green",attrs:{to:{name:"edit-employee",params:{employee_id:e.employee_id}}}},[e._v("Edit")]),e._v(" "),a("button",{staticClass:"btn red",attrs:{to:"/"},on:{click:e.deleteEmployee}},[e._v("Delete")])],1)},staticRenderFns:[]};var b=a("VU/8")(w,C,!1,function(e){a("vMwR")},"data-v-b9867cb8",null).exports,E={name:"edit-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null,type:null}},beforeRouteEnter:function(e,t,a){m.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position,t.type=e.data().type})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;m.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position,e.type=t.data().type})})},updateEmployee:function(){var e=this;m.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employee_id:e.employee_id,dept:e.dept,name:e.name,position:e.position,type:e.type}).then(function(){e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}})})})})}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"edit-employee"}},[a("h4",[e._v("Edit Employee")]),e._v(" "),a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),a("label",{staticClass:"active"},[e._v("Employee ID")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",{staticClass:"active"},[e._v("Name")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),a("label",{staticClass:"active"},[e._v("Department")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),a("label",{staticClass:"active"},[e._v("Position")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"text",required:""},domProps:{value:e.type},on:{input:function(t){t.target.composing||(e.type=t.target.value)}}}),e._v(" "),a("label",{staticClass:"active"},[e._v("Type")])])]),e._v(" "),a("button",{staticClass:"btn blue lighten-1",attrs:{type:"submit"}},[e._v("Save")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])},staticRenderFns:[]},k=a("VU/8")(E,x,!1,null,null,null).exports,P={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(e){var t=this;n.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){alert("You are logged in as "+e.user.email+"."),t.$router.push("/")},function(e){return alert(e.message)}),e.preventDefault()}}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"col card hoverable blue-grey lighten-5"},[a("form",[a("div",{staticClass:"card-content"},[a("h4",{staticClass:"center-align"},[e._v("Log in")]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("label",{attrs:{for:"email"}},[e._v("Email address")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"validate",attrs:{type:"email",name:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("label",{attrs:{for:"password"}},[e._v("Password ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"validate",attrs:{type:"password",name:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])])]),e._v(" "),a("div",{staticClass:"card-action right-align"},[a("input",{staticClass:"btn-flat grey-text waves-effect",attrs:{type:"reset",id:"reset"}}),e._v(" "),a("input",{staticClass:"btn yellow black-text waves-effect waves-light",attrs:{type:"submit",value:"Login"},on:{click:e.login}})])])])])},staticRenderFns:[]};var $=a("VU/8")(P,N,!1,function(e){a("MsB7")},"data-v-74ce326e",null).exports,q={name:"sign-up",data:function(){return{email:"",password:""}},methods:{signup:function(e){var t=this;n.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){alert("Account created for "+e.user.email+"."),t.$router.push("/")},function(e){return alert(e.message)}),e.preventDefault()}}},A={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"col card hoverable blue-grey lighten-5"},[a("form",[a("div",{staticClass:"card-content"},[a("h4",{staticClass:"center-align"},[e._v("Sign Up")]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("label",{attrs:{for:"email"}},[e._v("Email address")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"validate",attrs:{type:"email",name:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("label",{attrs:{for:"password"}},[e._v("Password ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"validate",attrs:{type:"password",name:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])])]),e._v(" "),a("div",{staticClass:"card-action right-align"},[a("input",{staticClass:"btn-flat grey-text waves-effect",attrs:{type:"reset",id:"reset"}}),e._v(" "),a("input",{staticClass:"btn yellow black-text waves-effect waves-light",attrs:{type:"submit",value:"Sign Up"},on:{click:e.signup}})])])])])},staticRenderFns:[]};var U=a("VU/8")(q,A,!1,function(e){a("Rv0j")},"data-v-0eb21ab7",null).exports,D={name:"employee-type-chart",data:function(){return{employeeTypeData:I}},methods:{createChart:function(e,t){var a=document.getElementById(e);new Chart(a,{type:t.type,data:t.data,options:t.options})}}},I={type:"doughnut",data:{labels:["Contract","Full-time"],datasets:[{label:"Number of Moons",data:[6,2]}]},options:{responsive:!0,lineTension:1,scales:{yAxes:[{ticks:{beginAtZero:!0,padding:25}}]}}},R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h4",[this._v("Key Metrics")]),this._v(" "),t("h6",[this._v("coming soon")]),this._v(" "),t("canvas",{attrs:{id:"typeChart"}})])}]},T=a("VU/8")(D,R,!1,null,null,null).exports;i.a.use(d.a);var L=new d.a({routes:[{path:"/",name:"dashboard",component:_,meta:{requiresAuth:!0}},{path:"/analytics",name:"analytics",component:T,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:$,meta:{requiresGuest:!0}},{path:"/signup",name:"sign-up",component:U,meta:{requiresGuest:!0}},{path:"/new",name:"new-employee",component:g,meta:{requiresAuth:!0}},{path:"/edit/:employee_id",name:"edit-employee",component:k,meta:{requiresAuth:!0}},{path:"/:employee_id",name:"view-employee",component:b,meta:{requiresAuth:!0}}]});L.beforeEach(function(e,t,a){e.matched.some(function(e){return e.meta.requiresAuth})?n.a.auth().currentUser?a():a({path:"/login",query:{redirect:e.fullPath}}):e.matched.some(function(e){return e.meta.requiresGuest})&&n.a.auth().currentUser?a({path:"/",query:{redirect:e.fullPath}}):a()});var M=L;i.a.config.productionTip=!1;var F=void 0;n.a.auth().onAuthStateChanged(function(e){F||(F=new i.a({el:"#app",router:M,components:{App:c},template:"<App/>"}))})},"P6/D":function(e,t){},RZ6c:function(e,t){},Rv0j:function(e,t){},kTNM:function(e,t){},vMwR:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.9671a1e8d7791fa386e9.js.map