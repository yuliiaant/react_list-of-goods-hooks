(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),i=n(6),r=n(8),a=n(1),u=(n(13),n(14),n(4)),l=n.n(u),b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.ALPHABET="alphabet",t.LENGTH="length",t.NONE=""}(c||(c={}));var j=function(){var t=c.ALPHABET,e=c.LENGTH,n=c.NONE,s=Object(a.useState)(n),o=Object(i.a)(s,2),u=o[0],j=o[1],d=Object(a.useState)(!1),g=Object(i.a)(d,2),f=g[0],p=g[1],O=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=Object(r.a)(t);return e&&s.sort((function(t,n){switch(e){case c.ALPHABET:return t.localeCompare(n);case c.LENGTH:return t.length-n.length;default:return 0}})),n?s.reverse():s}(h,u,f),m=u||f;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{onClick:function(){return j(t)},type:"button",className:l()("button","is-info",{"is-light":u!==t}),children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:function(){return j(e)},className:l()("button","is-success",{"is-light":u!==e}),children:"Sort by length"}),Object(b.jsx)("button",{type:"button",onClick:function(){return p((function(t){return!t}))},className:l()("button","is-warning",{"is-light":!f}),children:"Reverse"}),m&&Object(b.jsx)("button",{type:"button",onClick:function(){j(n),p(!1)},className:"button is-danger is-light",children:"Reset"})]}),Object(b.jsx)("ul",{children:O.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5edfc571.chunk.js.map