(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],{24:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(10),i=n.n(a),s=n(9),l=n(3),o=n(35),d=n(11),u=n(12),j=n.n(u),b=n(0),f=Object(o.a)({main:{width:"30%",background:"#F2F1F9",border:"none",padding:"0.5rem"},searchIcon:{height:30,border:"none",cursor:"pointer"}})((function(e){var t=e.setValue,n=e.placeholder,c=e.classes,a=Object(r.useState)(""),i=Object(l.a)(a,2),s=i[0],o=i[1],u=j()(Object(d.a)({"btn btn-secondary":!0},c.searchIcon,!0));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{value:s,placeholder:n,onChange:function(e){return o(e.target.value)},className:c.main}),Object(b.jsx)("button",{className:u,type:"button",onClick:function(){return t(s)},children:Object(b.jsx)("i",{class:"fa fa-search"})})]})})),p=Object(o.a)({main:{border:"1px solid #dddddd",textAlign:"center",padding:8,paddingLeft:0},page:{border:"1px solid #dddddd",padding:8,cursor:"pointer"}})((function(e){var t=e.currentPage,n=e.pages,r=e.setPage,c=e.pageLimit,a=e.classes,i=Math.ceil(n/c),s=function(){t>0&&r(t-1)},l=function(){t<i-1&&r(t+1)};return Object(b.jsxs)("div",{className:a.main,children:[Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("a",{className:a.page,onClick:function(){return r(0)},children:"\xab"},"first-page"),Object(b.jsx)("a",{className:a.page,onClick:s,children:"\u2190"},"prev-page")]}),function(){for(var e=[],t=0;t<i;t++)e.push(t);return e}().map((function(e){return Object(b.jsx)("a",{className:a.page,onClick:function(){return r(e)},style:e===t?{backgroundColor:"green"}:null,children:e},e)})),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("a",{className:a.page,onClick:l,children:"\u2192"},"next-page"),Object(b.jsx)("a",{className:a.page,onClick:function(){return r(i-1)},children:"\xbb"},"last-page")]})]})})),h=Object(o.a)({table:{fontFamily:"arial, sans-serif",borderCollapse:"collapse",width:"100%"}})((function(e){var t=e.renderRow,n=e.entries,c=e.header,a=e.classes,i=e.placeholder,s=void 0===i?"":i,o=e.textfilterOptions,d=void 0===o?[]:o,u=e.pageLimit,j=void 0===u?10:u,h=Object(r.useState)(""),O=Object(l.a)(h,2),m=O[0],x=O[1],g=Object(r.useState)(0),v=Object(l.a)(g,2),N=v[0],w=v[1],S=function(){return n.filter((function(e){return function(e){return!(m.length>0)||d.filter((function(t){return e[t].toLowerCase().includes(m.toLowerCase())})).length>0}(e)}))};return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{setValue:x,placeholder:s}),Object(b.jsxs)("table",{className:a.table,children:[c,function(e){var t=N*j;return e.slice(t,t+j)}(S()).map((function(e){return t(e)}))]}),Object(b.jsx)(p,{pageLimit:j,pages:S().length,currentPage:N,setPage:w})]})})),O=Object(o.a)({contentSection:{border:"1px solid #dddddd",textAlign:"left",padding:8},headerSection:{border:"1px solid #dddddd",textAlign:"left",padding:8}})((function(e){var t=e.classes,n=Object(r.useState)([]),c=Object(l.a)(n,2),a=c[0],i=c[1],o=Object(r.useState)([]),d=Object(l.a)(o,2),u=d[0],j=d[1],f=Object(r.useState)("all"),p=Object(l.a)(f,2),O=p[0],m=p[1];Object(r.useEffect)((function(){new Promise((function(e){fetch("http://www.filltext.com/?rows=100&id={number|100}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}",{}).then((function(e){return e.json()})).then((function(t){return e(t)}))})).then((function(e){var t=e.sort((function(e,t){return e.name>t.name?1:-1}));console.log(t),i(t),j(t)}))}),[]),Object(r.useEffect)((function(){var e=x(a);j(e)}),[O]);var x=function(e){return"all"!==O?e.filter((function(e){return e.email.includes(O)})):e},g=[{id:"id"},{id:"firstName"},{id:"lastName"},{id:"phone"},{id:"email",filterOptions:function(){return N(O,(function(e){return m(e.target.value)}),v())}}],v=function(){return a.reduce((function(e,t){var n=t.email.split(",");return Array.from(new Set([].concat(Object(s.a)(e),Object(s.a)(n))))}),["all"])},N=function(e,t,n){return Object(b.jsx)("select",{value:e,onChange:t,children:n.map((function(e){return Object(b.jsx)("option",{value:e,children:e})}))})},w=Object(b.jsx)("tr",{children:g.map((function(e){return Object(b.jsxs)("th",{className:t.headerSection,children:[e.id,e.filterOptions&&Object(b.jsx)("div",{children:e.filterOptions()})]})}))});return Object(b.jsx)("div",{children:Object(b.jsx)(h,{renderRow:function(e){return function(e){return Object(b.jsx)("tr",{children:g.map((function(n){return Object(b.jsx)("td",{className:t.contentSection,children:e[n.id]})}))},e.id)}(e)},entries:u,header:w,placeholder:"Search...",textfilterOptions:["firstName","lastName","email"],pageLimit:10})})}));var m=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(O,{})})};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.b42f1ac0.chunk.js.map