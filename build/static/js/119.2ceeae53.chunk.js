"use strict";(self.webpackChunksoftwrk_web=self.webpackChunksoftwrk_web||[]).push([[119],{4119:function(e,n,i){i.r(n);var t=i(4165),o=i(5861),r=i(885),a=i(2791),l=i(8152),d=i(5705),u=i(1724),s=i(5588),v=(i(6113),i(676)),c=(i(8871),i(5311),i(7328),i(656),i(2699),i(4565)),p=i(6871),f=i(3979),m=(i(3849),i(4789)),h=(i(4781),i(2426)),y=i.n(h),g=i(9795),x=i(184);n.default=function(e){var n,i,h,Z,b,w,N,k,j,S=(0,p.s0)(),C=(0,a.useState)("customer"),_=(0,r.Z)(C,2),T=_[0],A=(_[1],(0,a.useState)(1)),I=(0,r.Z)(A,2),G=I[0],Q=I[1],R=(0,a.useState)([]),U=(0,r.Z)(R,2),V=U[0],q=U[1],B=l.Z.useGetAllQuery({userType:"company"}),L=l.Z.useGetCompanyStatisticsQuery({}),P=(0,a.useState)([]),D=(0,r.Z)(P,2),E=D[0],F=D[1],H=null===L||void 0===L?void 0:L.data,M=null===B||void 0===B||null===(n=B.data)||void 0===n?void 0:n.data,O=l.Z.useGetAllQuery({userType:"customer"}),z=(null===O||void 0===O||null===(i=O.data)||void 0===i||i.data,null===l.Z||void 0===l.Z?void 0:l.Z.useGetAllBikesQuery({pageNo:G})),J=+(null===O||void 0===O||null===(h=O.data)||void 0===h||null===(Z=h.meta)||void 0===Z?void 0:Z.totalNoOfPages),K=(null===z||void 0===z||null===(b=z.data)||void 0===b||b.data,l.Z.useGetAllVerifiedQuery({userType:T,verified:!1,pageNo:G})),W=l.Z.useGetAllVerifiedQuery({userType:T,verified:!0,pageNo:G}),X=(null===W||void 0===W||null===(w=W.data)||void 0===w||w.data,null===K||void 0===K||null===(N=K.data)||void 0===N||N.data,function(e){Q(e)});(0,a.useEffect)((function(){Y()}),[G]);for(var Y=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(){var n,i,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.U2)({endpoint:"api/company/getalluser?userType=customer&pageNo=".concat(G),auth:!0});case 2:o=e.sent,console.log("red=>>>>>"),console.log(null===o||void 0===o||null===(n=o.data)||void 0===n?void 0:n.data),q(null===o||void 0===o||null===(i=o.data)||void 0===i?void 0:i.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.IV)({endpoint:"api/super-admin/deleteRider?userId=".concat(n),auth:!0});case 2:e.sent,Y();case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ee=[],ne=1;ne<=J;ne++)ee.push(ne);var ie=function(e){if(M&&V&&e)return M.find((function(n){return n._id==e}))},te=null===V||void 0===V?void 0:V.map((function(e){var n;return{image:null===e||void 0===e?void 0:e.profileUrl,name:"".concat(null===e||void 0===e?void 0:e.fname),company:null!==e&&void 0!==e&&e.companyId?null===(n=ie(null===e||void 0===e?void 0:e.companyId))||void 0===n?void 0:n.fname:"Self Registered",id:null===e||void 0===e?void 0:e.email,ratings:y()(null===e||void 0===e?void 0:e.created_at).format("ll"),tripsCompleted:"-",phoneNo:null===e||void 0===e?void 0:e.phoneNo,status:null===e||void 0===e?void 0:e.currTripState,userId:null===e||void 0===e?void 0:e._id,verified:null===e||void 0===e?void 0:e.verified,info:e}})),oe=((0,v.Z)(),(0,s.Ds)().enqueueSnackbar),re=l.Z.useLoginMutation(),ae=(0,r.Z)(re,2),le=ae[0];return ae[1],(0,d.TA)({initialValues:{username:"",password:""},validationSchema:u.Ry({username:u.Z_().trim().required(),password:u.Z_().trim().required()}),onSubmit:function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S("/complete-signUp"),e.prev=1,e.next=4,le({data:n}).unwrap();case 4:e.sent,oe("Logged in successful",{variant:"success"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),oe(null===e.t0||void 0===e.t0||null===(i=e.t0.data)||void 0===i?void 0:i.message,"Failed to login",{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:"flex items-end mr-3 mt-12 w-3/6",children:[(0,x.jsx)("div",{className:"mr-4 hover:cursor-pointer",onClick:function(){var e;e=V,F(!1?null===e||void 0===e?void 0:e.map((function(e){var n;return{image:null===e||void 0===e?void 0:e.profileUrl,name:"".concat(null===e||void 0===e?void 0:e.fname),company:null!==e&&void 0!==e&&e.companyId?null===(n=ie(null===e||void 0===e?void 0:e.companyId))||void 0===n?void 0:n.fname:"Self Registered",id:null===e||void 0===e?void 0:e.email,ratings:y()(null===e||void 0===e?void 0:e.created_at).format("ll"),tripsCompleted:"-",phoneNo:null===e||void 0===e?void 0:e.phoneNo,status:null===e||void 0===e?void 0:e.currTripState,userId:null===e||void 0===e?void 0:e._id,verified:null===e||void 0===e?void 0:e.verified,info:e}})):[])},children:(0,x.jsx)(f.Z,{className:"mr-3",rider:!1,big:!0,green:!0,name:"Total Customers",count:null!==(k=null===H||void 0===H?void 0:H.total_riders)&&void 0!==k?k:0})}),(0,x.jsx)("div",{})]}),(0,x.jsx)(c.Z,{variant:"h5",className:"font-bold mt-8 text-primary-main",children:"All Customers"}),null===(j=E.length&&E||te)||void 0===j?void 0:j.map((function(e,n){return(0,x.jsx)(m.Z,{deleteBikes:$,tableArray:e,info:e.info,getBikes:Y,suspendHide:!0},n)})),(0,x.jsx)("nav",{className:"flex justify-center mt-5",children:(0,x.jsxs)("ul",{className:"flex",children:[G>1&&(0,x.jsx)("li",{children:(0,x.jsx)("a",{href:"#",onClick:function(){return X(G-1)},className:"py-2 px-4 bg-gray-400 text-white font-bold rounded-l hover:bg-gray-600",children:"Prev"})}),ee.map((function(e){return(0,x.jsx)("li",{children:(0,x.jsx)("a",{href:"#",onClick:function(){return X(e)},className:G===e?"py-2 px-4 bg-primary-main text-white font-bold":"py-2 px-4 hover:bg-gray-400/10",children:e})},e)})),G<ee.length&&(0,x.jsx)("li",{children:(0,x.jsx)("a",{href:"#",onClick:function(){return X(G+1)},className:"py-2 px-4 bg-gray-400 text-white font-bold rounded-r hover:bg-gray-600",children:"Next"})})]})})]})}}}]);
//# sourceMappingURL=119.2ceeae53.chunk.js.map