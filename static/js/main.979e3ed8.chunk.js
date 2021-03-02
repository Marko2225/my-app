(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{42:function(e,n,t){},66:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(34),s=t.n(c),a=(t(42),t(3)),o=t(9),i=t(2),l=t(23);var u,j,b=t(1),d=function(e){var n=e.value,t=e.onClick,r=n?"squares ".concat(n):"squares";return Object(b.jsx)("button",{className:r,onClick:t,children:n})},p=function(e){var n=e.squares,t=e.onClick;return Object(b.jsx)("div",{className:"board",children:n.map((function(e,n){return Object(b.jsx)(d,{value:e,onClick:function(){return t(n)}},n)}))})},O=function(e){var n=e.loggedIn,t=Object(r.useState)([Array(9).fill(null)]),c=Object(a.a)(t,2),s=c[0],o=c[1],u=Object(r.useState)(0),j=Object(a.a)(u,2),d=j[0],O=j[1],h=Object(r.useState)(!0),x=Object(a.a)(h,2),f=x[0],g=x[1],m=function(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<n.length;t++){var r=Object(a.a)(n[t],3),c=r[0],s=r[1],o=r[2];if(e[c]&&e[c]===e[s]&&e[c]===e[o])return e[c]}return null}(s[d]),v=f?"X":"O";return Object(b.jsxs)(b.Fragment,{children:[n?Object(b.jsx)(i.a,{to:"/Game"}):Object(b.jsx)(i.a,{to:"/Login"}),Object(b.jsx)("h1",{children:"React Tic Tac Toe - With Hooks"}),Object(b.jsx)(p,{squares:s[d],onClick:function(e){var n=s.slice(0,d+1),t=n[d],r=Object(l.a)(t);m||r[e]||(r[e]=v,o([].concat(Object(l.a)(n),[r])),O(n.length),g(!f))}}),Object(b.jsxs)("div",{className:"info-wrapper",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"History"}),s.map((function(e,n){var t=n?"Go to move #".concat(n):"Go to Start";return Object(b.jsx)("li",{children:Object(b.jsx)("button",{onClick:function(){return O(e=n),void g(e%2===0);var e},children:t})},n)}))]}),Object(b.jsx)("h3",{children:m?"Winner: "+m:"Next Player: "+v})]})]})},h=t(22),x=t.n(h),f=function(){return x.a.get("https://my-json-server.typicode.com/Marko2225/users-api/users")},g=t(16),m=t(17),v=m.a.div(u||(u=Object(g.a)(["\nbox-shadow: 0px 3px 7px #353535;\n//border:none;\nborder:1px solid white;\np:hover {\n  color:white;\n}\n.btn-login {\n   // border:1px solid white;\n    background-color: rgb(131, 174, 175);\n     display:flex;\n     margin-top: 15px;\n     padding: 8px 20px;\n     margin-left: 5px;\n     border-radius: 5px;\n     outline: none;\n     color: black;\n     letter-spacing: 2px;\n     font-weight:600;\n     &:hover {\n      background-color: #f8f8ff;\n      color:#212121;\n     }\n    \n }\n .not-registered {\n    position: absolute;\n    left: 52%;\n    text-decoration: none;\n    color:black;\n    letter-spacing: 1.5px;\n    font-size: 20px;\n    font-weight: 600;\n    &:hover {\n      color:#f8f8ff;\n     }\n  }\n  \n"]))),y=function(e){var n=e.setUser,t=Object(r.useState)(""),c=Object(a.a)(t,2),s=c[0],l=c[1],u=Object(r.useState)(""),j=Object(a.a)(u,2),d=j[0],p=j[1],O=Object(r.useState)(""),h=Object(a.a)(O,2),x=h[0],g=h[1],m=Object(i.g)();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f().then((function(e){var t=e.data.find((function(e){return(e.username===s||e.email===s)&&e.password===d}));t?(n(t),m.push("/Game")):(console.log("Wrong input data"),g("Wrong input data"))}))},children:[Object(b.jsxs)(v,{className:"div-input",children:[Object(b.jsx)("input",{className:"input",value:s,type:"text",placeholder:"Username...",onChange:function(e){return l(e.target.value)}}),Object(b.jsx)("input",{className:"input",value:d,type:"password",placeholder:"Password...",onChange:function(e){return p(e.target.value)}}),Object(b.jsx)("input",{className:"btn-login",type:"submit",value:"Login"}),Object(b.jsx)(o.b,{className:"not-registered",to:"/register",children:"REGISTER HERE"})]}),Object(b.jsx)("h4",{style:{fontSize:"25px",color:"#ff0505"},children:x})]})})},N=function(e){var n=e.error,t=e.setError;return setTimeout((function(){return t("")}),5e3),Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:n})})},k=function(){var e=function(){var e=Object(r.useState)(""),n=Object(a.a)(e,2),t=n[0],c=n[1],s=Object(r.useState)(""),o=Object(a.a)(s,2),i=o[0],l=o[1],u=Object(r.useState)(""),j=Object(a.a)(u,2);return[t,c,i,l,j[0],j[1]]}(),n=Object(a.a)(e,6),t=n[0],c=n[1],s=n[2],o=n[3],l=n[4],u=n[5],j=Object(r.useState)(""),d=Object(a.a)(j,2),p=d[0],O=d[1],h=Object(i.g)();return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.length<4?O("Username is too short"):!function(e){return e.length>=8&&e.split("").some((function(e){return!isNaN(Number(e))}))&&e.split("").some((function(e){return e>="A"&&e<="Z"||e>="a"&&e<="z"}))}(l)?O(" password 8 characters,\n  one letter, one number"):""===s?O("Email is invalid"):f().then((function(e){e.data.some((function(e){return e.username===t&&e.email===s}))?(O("User already exists"),u(""),c(""),o("")):function(e,n,t){return x.a.post("http://localhost:3005/users",{username:e,email:n,password:t})}(t,s,l).then((function(e){h.push("/Login")}))}))},children:[Object(b.jsxs)("div",{className:"div-input",children:[Object(b.jsx)("input",{className:"input",value:t,type:"text",placeholder:"username...",onChange:function(e){return c(e.target.value)}}),Object(b.jsx)("input",{className:"input",value:s,type:"email",placeholder:"email...",onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("input",{className:"input",value:l,type:"password",placeholder:"password...",onChange:function(e){return u(e.target.value)}}),Object(b.jsx)("input",{className:"input",type:"submit",value:"Register"})]}),Object(b.jsx)("div",{style:{fontSize:"17px",color:"#ff0505"},children:Object(b.jsx)(N,{error:p,setError:O})})]})},w=function(e){var n=e.loggedIn;return Object(b.jsx)(b.Fragment,{children:n?Object(b.jsx)(i.a,{to:"/Game"}):Object(b.jsx)(i.a,{to:"/Login"})})},S=m.a.div(j||(j=Object(g.a)(["\n    .container{\n        padding:30px;\n        font-size:2rem;\n        display: flex;\n        justify-content: space-around;\n        font-weight:800\n    }\n    a{\n        color:#74b9ff;\n        border-radius:5px;\n        text-decoration: none;\n    }\n    a:hover{\n        color: #00B894;\n        transition: 0.3s ease; \n    }\n   \n button {\n   // border:1px solid white;\n    background-color: red;\n    cursor: pointer;\n    &:hover {\n      background-color: #f8f8ff;\n      color:#212121;\n     }\n }\n"]))),C=function(e){var n=e.user,t=e.setUser;return Object(b.jsx)(b.Fragment,{children:n?Object(b.jsx)(S,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(o.b,{to:"/Game",children:"Game"}),Object(b.jsxs)("span",{children:["Username: ",n.username]}),Object(b.jsx)("button",{onClick:function(){return t(null)},children:"LOGOUT"})]})}):Object(b.jsx)(S,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(o.b,{to:"/Login",children:"Login"}),Object(b.jsx)(o.b,{to:"/Register",children:"Register"})]})})})},G=function(){var e=Object(r.useState)(null),n=Object(a.a)(e,2),t=n[0],c=n[1];return console.log("pocetak"),Object(b.jsxs)(o.a,{children:[Object(b.jsx)("nav",{children:Object(b.jsx)(C,{user:t,setUser:c})}),Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{path:"/Login",children:Object(b.jsx)(y,{setUser:c})}),Object(b.jsx)(i.b,{path:"/Game",children:Object(b.jsx)(O,{loggedIn:t})}),Object(b.jsx)(i.b,{path:"/Register",children:Object(b.jsx)(k,{})}),Object(b.jsx)(i.b,{path:"/",children:Object(b.jsx)(w,{loggedIn:t})})]})]})};s.a.render(Object(b.jsx)(G,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.979e3ed8.chunk.js.map