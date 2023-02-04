(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(11),r=c(5),a=c(2),s=(c(21),c(22),c(23),c(1)),j=c(6),i=c.n(j),o=c(0),l=function(e){var t=e.to,c=e.title;return Object(o.jsx)(r.c,{to:t,className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter is-active":t})},children:c})},b=Object(s.memo)((function(){return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(l,{title:"Home",to:"/"}),Object(o.jsx)(l,{title:"People",to:"people"})]})})})})),h=function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)(b,{}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(a.b,{})})})]})},d=c(8),O=c(9),u=c(12),x=c(4),m=(c(25),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function p(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var f=Object(s.memo)((function(e){var t=e.person;return Object(o.jsx)(r.b,{to:"../".concat(t.slug),className:i()({"has-text-danger":"f"===t.sex}),children:t.name})})),v=Object(s.memo)((function(e){var t=e.people,c=e.selectedPersonSlug;return Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Sex"}),Object(o.jsx)("th",{children:"Born"}),Object(o.jsx)("th",{children:"Died"}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":c===e.slug}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(f,{person:e})}),Object(o.jsx)("td",{children:e.sex}),Object(o.jsx)("td",{children:e.born}),Object(o.jsx)("td",{children:e.died}),Object(o.jsx)("td",{children:e.mother?Object(o.jsx)(f,{person:e.mother}):e.motherName||"-"}),Object(o.jsx)("td",{children:e.father?Object(o.jsx)(f,{person:e.father}):e.fatherName||"-"})]},e.slug)}))})]})})),g=Object(s.memo)((function(){var e=Object(s.useState)([]),t=Object(x.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(""),j=Object(x.a)(r,2),i=j[0],l=j[1],b=Object(s.useState)(!1),h=Object(x.a)(b,2),f=h[0],g=h[1],N=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var t,c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,p();case 4:return t=e.sent,c=t.map((function(e){var c=t.find((function(t){return e.motherName===t.name})),n=t.find((function(t){return e.fatherName===t.name}));return Object(O.a)(Object(O.a)({},e),{},{mother:c,father:n})})),n(c),e.abrupt("return",c);case 10:return e.prev=10,e.t0=e.catch(0),l("Something went wrong"),e.abrupt("return",e.t0);case 14:return e.prev=14,g(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,10,14,17]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){N()}),[]);var w=Object(a.i)().slug,y=void 0===w?"":w;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[f&&Object(o.jsx)(m,{}),i&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===c.length&&!f&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),c.length>0&&Object(o.jsx)(v,{people:c,selectedPersonSlug:y})]})})]})})),N=Object(s.memo)((function(){return Object(o.jsx)("h1",{className:"title",children:"Page not found"})})),w=Object(s.memo)((function(){return Object(o.jsx)("h1",{className:"title",children:"Home Page"})}));Object(n.createRoot)(document.getElementById("root")).render(Object(o.jsx)(r.a,{children:Object(o.jsx)(a.e,{children:Object(o.jsxs)(a.c,{path:"/",element:Object(o.jsx)(h,{}),children:[Object(o.jsx)(a.c,{path:"*",element:Object(o.jsx)(N,{})}),Object(o.jsx)(a.c,{index:!0,element:Object(o.jsx)(w,{})}),Object(o.jsx)(a.c,{path:"home",element:Object(o.jsx)(a.a,{to:"/",replace:!0})}),Object(o.jsxs)(a.c,{path:"people",children:[Object(o.jsx)(a.c,{index:!0,element:Object(o.jsx)(g,{})}),Object(o.jsx)(a.c,{path:":slug",element:Object(o.jsx)(g,{})})]})]})})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.56f18391.chunk.js.map