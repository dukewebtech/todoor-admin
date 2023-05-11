"use strict";(self.webpackChunksoftwrk_web=self.webpackChunksoftwrk_web||[]).push([[630],{2630:function(e,n,i){i.r(n);var r=i(4165),a=i(5861),t=i(885),l=i(2791),s=i(8152),o=i(5705),d=i(1724),u=i(5588),c=(i(6113),i(676)),v=(i(8871),i(5311),i(7328),i(656),i(2699),i(4565)),f=i(6871),p=i(3979),m=(i(3849),i(4789)),x=i(7425),h=i(6856),y=i(4781),g=i(2426),j=i.n(g),Z=i(9795),N=i(184);n.default=function(e){var n,i,g,b,w,k=(0,f.s0)(),_=(0,l.useState)(1),S=(0,t.Z)(_,2),C=S[0],T=S[1],A=(0,l.useState)([]),R=(0,t.Z)(A,2),I=R[0],G=R[1],Q=s.Z.useGetAllQuery({userType:"company"}),U=s.Z.useGetCompanyStatisticsQuery({}),V=null===U||void 0===U?void 0:U.data,q=null===Q||void 0===Q||null===(n=Q.data)||void 0===n?void 0:n.data,B=s.Z.useGetAllQuery({userType:"rider"}),L=(null===B||void 0===B||null===(i=B.data)||void 0===i||i.data,null===s.Z||void 0===s.Z?void 0:s.Z.useGetAllBikesQuery({pageNo:C})),P=+(null===B||void 0===B||null===(g=B.data)||void 0===g||null===(b=g.meta)||void 0===b?void 0:b.totalNoOfPages),z=(null===L||void 0===L||null===(w=L.data)||void 0===w||w.data,function(e){T(e),console.log(e)});(0,l.useEffect)((function(){D()}),[C]);for(var D=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Z.U2)({endpoint:"api/company/getalluser?userType=rider&pageNo=".concat(C),auth:!0});case 2:i=e.sent,G(null===i||void 0===i||null===(n=i.data)||void 0===n?void 0:n.data),console.log(i.data.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Z.IV)({endpoint:"api/super-admin/deleteRider?userId=".concat(n),auth:!0});case 2:e.sent,D();case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),F=[],J=1;J<=P;J++)F.push(J);var M=function(e){if(q&&I&&e){var n=q.find((function(n){return n._id==e}));return console.log(null===n||void 0===n?void 0:n.fname),n}},O=null===I||void 0===I?void 0:I.map((function(e){var n;return{image:null===e||void 0===e?void 0:e.profileUrl,name:"".concat(null===e||void 0===e?void 0:e.fname),company:null!==e&&void 0!==e&&e.companyId?null===(n=M(null===e||void 0===e?void 0:e.companyId))||void 0===n?void 0:n.fname:"Self Registered",id:null===e||void 0===e?void 0:e.email,ratings:j()(null===e||void 0===e?void 0:e.created_at).format("ll"),tripsCompleted:"-",phoneNo:null===e||void 0===e?void 0:e.phoneNo,status:null===e||void 0===e?void 0:e.currTripState,userId:null===e||void 0===e?void 0:e._id,verified:null===e||void 0===e?void 0:e.verified,info:e}}));console.log(O),(0,c.Z)();var X=(0,u.Ds)().enqueueSnackbar,H=s.Z.useLoginMutation(),K=(0,t.Z)(H,2),W=K[0];return K[1],(0,o.TA)({initialValues:{username:"",password:""},validationSchema:d.Ry({username:d.Z_().trim().required(),password:d.Z_().trim().required()}),onSubmit:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),k("/complete-signUp"),e.prev=2,e.next=5,W({data:n}).unwrap();case 5:e.sent,X("Logged in successful",{variant:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),X(null===e.t0||void 0===e.t0||null===(i=e.t0.data)||void 0===i?void 0:i.message,"Failed to login",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(n){return e.apply(this,arguments)}}()}),(0,N.jsxs)("div",{children:[(0,N.jsx)(y.Z,{}),(0,N.jsxs)("div",{className:"flex items-end mr-3 mt-12 w-3/6",children:[(0,N.jsx)("div",{className:"mr-4",children:(0,N.jsx)(p.Z,{className:"mr-3",rider:!1,big:!0,green:!0,name:"Total Riders",count:null===V||void 0===V?void 0:V.total_riders})}),(0,N.jsxs)("div",{children:[(0,N.jsx)("div",{className:"relative w-full ",children:(0,N.jsxs)("div",{className:"flex-between px-2 w-full text-xs absolute ",style:{top:"-20px"},children:[(0,N.jsxs)("div",{className:"flex",children:[(0,N.jsx)("p",{className:"font-bold mr-1 flextext-xs self-end",children:"Today"}),(0,N.jsx)("div",{children:(0,N.jsx)(x.ZXJ,{className:"",style:{fontSize:"16px",color:"#494949"}})})]}),(0,N.jsxs)("div",{className:"flex items-center",children:[(0,N.jsx)("span",{className:"text-xs mr-1 opacity-50",children:(0,N.jsx)(h.la_,{})}),(0,N.jsx)("span",{className:"text-xs opacity-50",children:"Refresh"})]})]})}),(0,N.jsxs)("div",{className:"flex",children:[(0,N.jsx)("div",{className:"",children:(0,N.jsx)(p.Z,{short:!0,name:"Verified",count:null===V||void 0===V?void 0:V.verified_rider})}),(0,N.jsx)(p.Z,{short:!0,name:"Un-Verified",count:null===V||void 0===V?void 0:V.unverified_rider})]})]})]}),(0,N.jsx)(v.Z,{variant:"h5",className:"font-bold mt-8 text-primary-main",children:"All Riders"}),null===O||void 0===O?void 0:O.map((function(e,n){return(0,N.jsx)(m.Z,{deleteBikes:E,tableArray:e,info:e.info,getBikes:D},n)})),(0,N.jsx)("nav",{className:"flex justify-center mt-5",children:(0,N.jsxs)("ul",{className:"flex",children:[C>1&&(0,N.jsx)("li",{children:(0,N.jsx)("a",{href:"#",onClick:function(){return z(C-1)},className:"py-2 px-4 bg-gray-400 text-white font-bold rounded-l hover:bg-gray-600",children:"Prev"})}),F.map((function(e){return(0,N.jsx)("li",{children:(0,N.jsx)("a",{href:"#",onClick:function(){return z(e)},className:C===e?"py-2 px-4 bg-primary-main text-white font-bold":"py-2 px-4 hover:bg-gray-400/10",children:e})},e)})),C<F.length&&(0,N.jsx)("li",{children:(0,N.jsx)("a",{href:"#",onClick:function(){return z(C+1)},className:"py-2 px-4 bg-gray-400 text-white font-bold rounded-r hover:bg-gray-600",children:"Next"})})]})})]})}}}]);
//# sourceMappingURL=630.613806c1.chunk.js.map