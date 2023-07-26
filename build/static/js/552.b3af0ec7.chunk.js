"use strict";(self.webpackChunksoftwrk_web=self.webpackChunksoftwrk_web||[]).push([[552],{6113:function(e,t,n){var r=n(1413),a=n(885),i=n(5987),o=n(2791),s=n(4032),c=n(8254),u=n(3811),l=n(409),p=n(8182),d=n(184),A=["error"];t.Z=function(e){var t=e.error,n=(0,i.Z)(e,A),f=o.useState(!1),m=(0,a.Z)(f,2),v=m[0],h=m[1],x=o.useCallback((function(){return h((function(e){return!e}))}),[]);return(0,d.jsx)(s.Z,(0,r.Z)({type:v?"text":"password",InputProps:{endAdornment:(0,d.jsx)(c.Z,{position:"end",children:(0,d.jsx)(u.Z,{"aria-label":"toggle password visibility",onClick:x,disabled:e.disabled,children:(0,d.jsx)(l.Z,{className:(0,p.Z)(t?"text-danger":"text-primary"),children:v?"visibility_off":"visibility"})})})},error:t},n))}},4781:function(e,t,n){var r=n(4165),a=n(5861),i=n(885),o=n(2791),s=n(8152),c=n(5705),u=n(6856),l=n(1724),p=n(5588),d=(n(6113),n(676)),A=(n(8871),n(5311),n(7328),n(1306),n(4861),n(2699),n(4032)),f=n(8254),m=n(8916),v=n(6871),h=(n(3979),n(184));t.Z=function(e){var t=o.useState(""),n=(0,i.Z)(t,2),x=(n[0],n[1],(0,o.useState)("")),Z=(0,i.Z)(x,2),g=Z[0],b=Z[1],y=(0,o.useState)(""),w=(0,i.Z)(y,2),U=w[0],k=w[1],E=e.records,S=(0,v.s0)(),P=((0,d.Z)(),(0,p.Ds)().enqueueSnackbar),C=s.Z.useLoginMutation(),H=(0,i.Z)(C,2),N=H[0];return H[1],(0,c.TA)({initialValues:{username:"",password:""},validationSchema:l.Ry({username:l.Z_().trim().required(),password:l.Z_().trim().required()}),onSubmit:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),S("/complete-signUp"),e.prev=2,e.next=5,N({data:t}).unwrap();case 5:e.sent,P("Logged in successful",{variant:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),P(null===e.t0||void 0===e.t0||null===(n=e.t0.data)||void 0===n?void 0:n.message,"Failed to login",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}),(0,h.jsxs)("div",{className:"relative",children:[(0,h.jsx)(A.Z,{InputProps:{endAdornment:(0,h.jsx)(f.Z,{position:"start",children:(0,h.jsx)(u.Zh8,{})})},variant:"outlined",style:{backgroundColor:"#EBEBEB",border:"none"},className:"w-[30%] mb-5 text-ssm",placeholder:"Search Company ",value:g,onChange:function(e){return function(e){b(e.target.value);var t=e.target.value.toLowerCase();k(E.filter((function(e){return e.fname.toLowerCase().includes(t)})))}(e)}}),g&&(0,h.jsx)("div",{className:"absolute w-[400px] max-h-[200px] !bg-white z-10 overflow-auto",children:U.map((function(t){return(0,h.jsx)("button",{onClick:function(n){return r=t,b(""),void e.selectOption(r);var r},className:"py-2 px-3 text-left hover:bg-black/30 w-full",children:t.fname},t.fname)}))}),(0,h.jsx)(m.Z,{className:"mb-8"})]})}},3979:function(e,t,n){var r=n(4165),a=n(5861),i=n(885),o=n(2791),s=n(8152),c=n(5705),u=n(1724),l=n(5588),p=(n(6113),n(676)),d=(n(8871),n(5311),n(7328),n(1306),n(1917),n(2699),n(8928)),A=n(5194),f=n(4565),m=n(6871),v=n(184);t.Z=function(e){var t=o.useState(""),n=(0,i.Z)(t,2),h=(n[0],n[1],(0,m.s0)()),x=((0,p.Z)(),(0,l.Ds)().enqueueSnackbar),Z=s.Z.useLoginMutation(),g=(0,i.Z)(Z,2),b=g[0];return g[1],(0,c.TA)({initialValues:{username:"",password:""},validationSchema:u.Ry({username:u.Z_().trim().required(),password:u.Z_().trim().required()}),onSubmit:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),h("/complete-signUp"),e.prev=2,e.next=5,b({data:t}).unwrap();case 5:e.sent,x("Logged in successful",{variant:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),x(null===e.t0||void 0===e.t0||null===(n=e.t0.data)||void 0===n?void 0:n.message,"Failed to login",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}),(0,v.jsx)("div",{className:"relative",children:(0,v.jsx)(d.Z,{className:e.rider?"riders-bg text-white text-center mr-3":e.plain?"plain-bg":e.green?"bg-primary-main text-white":e.big?"text-left border ":" text-white text-center",sx:{minWidth:155,minHeight:!e.short&&120,maxHeight:e.short&&105},children:(0,v.jsxs)(A.Z,{className:e.big?"pr-24":"",children:[(0,v.jsx)("div",{children:(0,v.jsx)(f.Z,{className:e.plain||e.green?" text-center text-white z-10":e.dashboard?"text-center text-secondary-light z-10":"text-center text-primary-main font-bold z-10",style:{fontSize:12,zIndex:100},children:e.name||"Total Companies"})}),(0,v.jsx)("div",{children:(0,v.jsx)(f.Z,{variant:e.small?"h4":"h2",className:e.green?"text-white text-center font-bold z-10":e.short?"text-center font-bold text-primary-main mb-3 z-10":e.small?"text-center font-bold text-primary-main mt-4":"text-center font-bold text-primary-main z-10 ",children:"Earnings"==e.name?e.count&&"\u20a6 ".concat(e.count," "):e.count})})]})})})}},9795:function(e,t,n){n.d(t,{IV:function(){return d},U2:function(){return u},v_:function(){return l},gz:function(){return p}});var r=n(4165),a=n(5861),i=n(4569),o=n.n(i),s={login:"login",dashboardStats:"payrollapi/dashboardstats",postPassword2:"services/api/resetpassword/resetpassword",notification:"services/api/notifications",employeeProfile:"global/api/employee/profile"},c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,i,c,u,l,p){var d,A,f,m,v,h;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d={"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST GET OPTIONS"},A=s[t]||t,f="".concat("https://app.todoorapp.com","/").concat(A),l&&(f+="/".concat(l)),u&&(m=Object.keys(u).map((function(e){return u[e]&&"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(u[e]))})),f+="?".concat(m.join("&"))),i&&(v=localStorage.getItem("token"))&&(d.Authorization="".concat(v)),h={url:f,method:n,headers:d},c&&(h.data=c),e.abrupt("return",o()(h).then((function(e){return e}),function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&t.response&&t.response.status,e.abrupt("return",t.response);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 9:case"end":return e.stop()}}),e)})));return function(t,n,r,a,i,o,s){return e.apply(this,arguments)}}(),u=function(e){var t=e.endpoint,n=e.pQuery,r=e.param,a=void 0===r?null:r,i=e.auth;return c(t,"GET",void 0===i||i,null,n,a)},l=function(e){var t=e.endpoint,n=e.body,r=e.auth,a=void 0===r||r,i=e.multipart;return c(t,"POST",a,n,null,null,i)},p=function(e){var t=e.endpoint,n=e.body,r=e.auth,a=void 0===r||r,i=e.multipart;return c(t,"PUT",a,n,null,null,i)},d=function(e){var t=e.endpoint,n=e.param,r=e.auth;return c(t,"DELETE",void 0===r||r,null,null,n)}},7328:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOxSURBVHgB3ZrdUtpAFMfPnigkWGfwCcxVx4/pwBtIrzsdQW1vhSfQPoHpE9Q+gXrVm4o4nV4X3wCn9WOmN/EJZEaE+pE93Q3C8BUJECTJ7wLysWTy55w9u3v2MBgD9/nXCYtPJxnxJCGLAzG9qxEjU3yayKHEkUra+sUVeAwDD7je0+Pq7MwqAaWBsZR4aBwGhBGUgHiRFCpoa5cn4AEjibv+tqBrU2yLI2aHEeSMsCpxQ9u4PIARGEqcFKVO446wUhbGymgiBxZXPVrcAo6Gt5bqh+yflBq0X7oWV7eWsid+kYKJQYa2fv7ZbWtX4ir55YRCVBDNdZgwJN7j7qaam8uZ5X5t+4qr5Rc2iZTdl3XDfrhz02fFSWFAyj74kv4CHcXVXVGMPT5Gjo21m9u3Ti6KvS7K4FHvY/6GGCTV2dgXp/s9xakR/OWH4OEKMdZWv4vhqQdd4mqHSzuBEdaAoVE7XJzvvNwmTrqjaGlAwLAjOeF+5/U2cfaUKqiIyYWI7iutl5riHvJvVsY/VxwzXDFaT5viHrmVhaDTYT1bnN3Xgm61Bi3Ws8VFVbYKYUFYTy6e5aEtDi3MQoiIzmqb8hulS8qRHsKESHXIL4xFMQGh40kcUf0gTMhBnX4uzmPoXPKJ6h1LIuN+WoR6B+OkI2egQwhhjMXRX+kDT9ERQky4xRFA3xRZQDFlnwulOJHfLCMj8nWGa1jE1pmJImaaEELo8eEKHy06hZAh48irj39L+DAd8X1+cnCoKD9xLlMqi5lmEUKEmJ3YBquPc1RXGhbUKC/Kb1vcP4x8hbBAUGTv6psjtrgwuSZH2m0cN6dfU4AGBB9zZu38uHHSFDe99vsk8NZjYLSetk+cmZWDgEIg61fO2qoe2sRpmUtTbqpDANFU2u681rXkkdUCzOc7qt2Q0YiQrfRcz5FiZQK0FNp3Kt/oKU6651RkkvUm7pAepuLtJ6f7jivxyPuzUxF9suBfzKjG0yzjXI/ybJrBjj4+FGhbTOWpXv2srR244P7HcsK6BzkZ1WHCELCChpXccxZr4Lr2q3Yk9vBI2RNPT8GEIOLbsY0L1/Pggav2ZLWD+Pe2XzLfKd0Qo5C148Agv4MhsK3IFVkckIUxIv7EMpBlDGKtVkaqlG2IFC+RZkDeWVLMcUksODWoHLjpW86P8YhafnlTpNPSIgCnhhRqipcpEGfH2oc/RfAAz8S1UjlaSjJL0RXGVziQLjclWu/LnKLMlxJiiSx2FVNuiqNYyIn/719aphORCaEAAAAASUVORK5CYII="},656:function(e){e.exports="data:image/png;base64,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"},1917:function(e,t,n){e.exports=n.p+"static/media/Mask group.3a81471dd3e24685df14.png"},2699:function(e,t,n){e.exports=n.p+"static/media/Rectangle 106.c9fc47c89560e724cf39.png"},4861:function(e,t,n){e.exports=n.p+"static/media/Rectangle 7.3a39a2242bd68e3f457e.png"},1306:function(e,t,n){e.exports=n.p+"static/media/background.d6226b2e65b747407a3a.png"}}]);
//# sourceMappingURL=552.b3af0ec7.chunk.js.map