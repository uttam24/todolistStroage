(this.webpackJsonptodolist_stroage=this.webpackJsonptodolist_stroage||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(7),i=c.n(a),r=(c(13),c(0)),l=function(e){return Object(r.jsx)("header",{className:"bg-dark mb-3",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-sm-12",children:Object(r.jsx)("nav",{className:"navbar justify-content-between",children:Object(r.jsx)("a",{className:"navbar-brand",children:"Todo List"})})})})})})},o=c(8),j=c(6),d=c(3),b=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"row",children:e.row}),Object(r.jsx)("td",{children:e.element}),Object(r.jsx)("td",{children:Object(r.jsxs)("button",{type:"button",className:"text-primary",onClick:e.editData,children:[Object(r.jsx)("i",{className:"fa fa-edit"}),"Edit"]})}),Object(r.jsx)("td",{children:Object(r.jsxs)("button",{type:"button",className:"text-danger",onClick:e.deleteData,children:[Object(r.jsx)("i",{className:"fa fa-trash"}),"Delete"]})})]})})},u=function(e){var t=Object(n.useState)(""),c=Object(d.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[]),l=Object(d.a)(i,2),u=l[0],m=l[1],O=Object(n.useState)(!0),x=Object(d.a)(O,2),h=x[0],f=x[1],p=Object(n.useState)(null),N=Object(d.a)(p,2),v=N[0],g=N[1],y=function(){if(s)if(s&&!h)m(u.map((function(e){return e.id===v?Object(j.a)(Object(j.a)({},e),{},{name:s}):e}))),f(!0),a(""),g(null);else{var e={id:(new Date).getTime().toString(),name:s};m([].concat(Object(o.a)(u),[e])),a("")}else alert("Enter Your Todotask!!")};return Object(n.useEffect)((function(){localStorage.setItem("list",JSON.stringify(u))}),[u]),Object(r.jsx)("section",{className:"todo-outer",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row justify-content-md-center",children:Object(r.jsxs)("div",{className:"col-sm-12 col-md-8",children:[Object(r.jsx)("h1",{children:"Welcome in Todo List Application"}),Object(r.jsxs)("div",{className:"todo-inner",children:[Object(r.jsxs)("div",{className:"form-row",children:[Object(r.jsxs)("div",{className:"col-8 mr-sm-2",children:[Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter your task",value:s,onChange:function(e){a(e.target.value)}}),Object(r.jsx)("input",{type:"hidden"})]}),h?Object(r.jsx)("button",{type:"button",className:"btn btn-success mr-sm-2",onClick:y,children:"Add Task"}):Object(r.jsx)("button",{type:"button",className:"btn btn-success mr-sm-2",onClick:y,children:"Save Task"}),Object(r.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){m([])},children:"Delete All"})]}),Object(r.jsx)("div",{className:"to-do-output",children:Object(r.jsx)("table",{className:"table table-striped mt-3 mb-0",children:Object(r.jsx)("tbody",{children:u.map((function(e,t){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(b,{element:e.name,row:t+1,deleteData:function(){return function(e){var t=u.filter((function(t){return e!==t.id}));m(t)}(e.id)},editData:function(){return function(e){var t=u.find((function(t){return t.id===e}));f(!1),a(t.name),g(e)}(e.id)}},e.id)})}))})})})]})]})})})})};var m=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{}),Object(r.jsx)(u,{})]})};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6729fb1e.chunk.js.map