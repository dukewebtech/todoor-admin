"use strict";(self.webpackChunksoftwrk_web=self.webpackChunksoftwrk_web||[]).push([[376],{6683:function(e,n,i){var a=i(4165),t=i(5861),s=i(885),r=i(2791),l=i(8152),o=i(5705),d=i(1724),c=i(5588),u=(i(6113),i(676)),v=(i(8871),i(5311),i(7328),i(1306),i(4861),i(2699),i(4565)),m=i(6871),x=i(184);n.Z=function(e){var n=r.useState(""),i=(0,s.Z)(n,2),p=(i[0],i[1],(0,m.s0)()),h=((0,u.Z)(),(0,c.Ds)().enqueueSnackbar),f=l.Z.useLoginMutation(),g=(0,s.Z)(f,2),j=g[0];return g[1],(0,o.TA)({initialValues:{username:"",password:""},validationSchema:d.Ry({username:d.Z_().trim().required(),password:d.Z_().trim().required()}),onSubmit:function(){var e=(0,t.Z)((0,a.Z)().mark((function e(n){var i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),p("/complete-signUp"),e.prev=2,e.next=5,j({data:n}).unwrap();case 5:e.sent,h("Logged in successful",{variant:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),h(null===e.t0||void 0===e.t0||null===(i=e.t0.data)||void 0===i?void 0:i.message,"Failed to login",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(n){return e.apply(this,arguments)}}()}),(0,x.jsx)("div",{className:"p-20",style:{border:"none",borderLeft:e.cutborder?"1px solid #C4C4C4":"none"},children:(0,x.jsx)("div",{className:e.rider?"riders-bg text-white text-center mr-3":e.plain?"plain-bg":e.green?"bg-primary-main text-white":e.big?"text-left":" text-white text-center",sx:{minWidth:e.big?220:155,minHeight:e.big?160:120},children:(0,x.jsxs)("div",{className:e.bigspace?" pr-10":"px-5",children:[(0,x.jsx)("div",{children:(0,x.jsx)(v.Z,{className:e.plain||e.green?" text-center text-white":e.dashboard?"text-center text-primary-main ":"text-center text-primary-main font-bold",sx:{fontSize:12},children:e.name||"Total Companies"})}),(0,x.jsx)("div",{children:(0,x.jsx)(v.Z,{variant:e.small?"h4":"h2",className:e.green?"text-white text-center font-bold":"text-center font-bold text-primary-main",children:("Earnings"==e.name?"\u20a6 ".concat(e.count):e.count)||"0"})})]})})})}},1376:function(e,n,i){i.r(n);var a=i(4165),t=i(5861),s=i(885),r=i(2791),l=i(8152),o=i(5705),d=i(1724),c=i(5588),u=(i(6113),i(676)),v=(i(8871),i(5311),i(3458),i(7328),i(9795)),m=(i(656),i(2699),i(3978)),x=i(4565),p=i(4032),h=i(8778),f=i(6015),g=i(7205),j=i(8916),b=i(6871),Z=(i(3979),i(3849)),y=i(7425),N=i(4789),w=i(6683),k=i(4781),C=(i(5048),i(2426)),S=i.n(C),_=i(184);n.default=function(e){var n,i,C,U,A,T,R=l.Z.useGetCompanyStatisticsQuery({}),E=null===R||void 0===R?void 0:R.data,L=(0,r.useState)(!1),P=(0,s.Z)(L,2),V=P[0],q=P[1],D=(0,r.useState)("company"),G=(0,s.Z)(D,2),z=G[0],I=(G[1],(0,r.useState)([])),Q=(0,s.Z)(I,2),B=Q[0],F=Q[1],H=(0,r.useState)([]),M=(0,s.Z)(H,2),W=(M[0],M[1],(0,r.useState)([])),Y=(0,s.Z)(W,2),O=Y[0],J=Y[1],K=(0,r.useState)([]),X=(0,s.Z)(K,2),$=X[0],ee=X[1],ne=(0,r.useState)([]),ie=(0,s.Z)(ne,2),ae=ie[0],te=ie[1],se=(0,r.useState)(""),re=(0,s.Z)(se,2),le=re[0],oe=re[1],de=(0,r.useState)(""),ce=(0,s.Z)(de,2),ue=ce[0],ve=ce[1],me=(0,r.useState)(),xe=(0,s.Z)(me,2),pe=xe[0],he=xe[1],fe=(0,r.useState)(0),ge=(0,s.Z)(fe,2),je=ge[0],be=ge[1],Ze=r.useState(!1),ye=(0,s.Z)(Ze,2),Ne=ye[0],we=ye[1],ke=(0,r.useState)(1),Ce=(0,s.Z)(ke,2),Se=Ce[0],_e=Ce[1],Ue=function(e){e?q(!V):we(!0)},Ae=(0,b.s0)(),Te=function(e){_e(e),console.log(e)},Re=null===$||void 0===$?void 0:$.map((function(e){return{image:null===e||void 0===e?void 0:e.profileUrl,name:null===e||void 0===e?void 0:e.fname,company:null===e||void 0===e?void 0:e.companyName,id:null===e||void 0===e?void 0:e.email,ratings:S()(e.created_at).format("ll"),tripsCompleted:"-",phoneNo:null===e||void 0===e?void 0:e.phoneNo,status:null===e||void 0===e?void 0:e.currTripState}})),Ee=((0,u.Z)(),(0,c.Ds)().enqueueSnackbar),Le=l.Z.useLoginMutation(),Pe=(0,s.Z)(Le,2),Ve=Pe[0],qe=(Pe[1],(0,o.TA)({initialValues:{username:"",password:""},validationSchema:d.Ry({username:d.Z_().trim().required(),password:d.Z_().trim().required()}),onSubmit:function(){var e=(0,t.Z)((0,a.Z)().mark((function e(n){var i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),Ae("/complete-signUp"),e.prev=2,e.next=5,Ve({data:n}).unwrap();case 5:e.sent,Ee("Logged in successful",{variant:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),Ee(null===e.t0||void 0===e.t0||null===(i=e.t0.data)||void 0===i?void 0:i.message,"Failed to login",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(n){return e.apply(this,arguments)}}()}),l.Z.useGetAllQuery({userType:"company",count:je,pageNo:Se})),De=null===qe||void 0===qe||null===(n=qe.data)||void 0===n?void 0:n.data;console.log(De);var Ge=l.Z.useGetAllVerifiedQuery({userType:z,verified:!1,pageNo:Se}),ze=l.Z.useGetAllVerifiedQuery({userType:z,verified:!0,pageNo:Se}),Ie=null===ze||void 0===ze||null===(i=ze.data)||void 0===i?void 0:i.data,Qe=null===Ge||void 0===Ge||null===(C=Ge.data)||void 0===C?void 0:C.data;console.log(Ie);var Be=+(null===qe||void 0===qe||null===(U=qe.data)||void 0===U||null===(A=U.meta)||void 0===A?void 0:A.totalNoOfPages);console.log(Be);for(var Fe=[],He=1;He<=Be;He++)Fe.push(He);var Me=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(n){var i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.U2)({endpoint:"api/super-admin/getAllRidersCompany?userId=".concat(n),auth:!0});case 2:i=e.sent,console.log(i.data.data),J(i.data.data),ee(i.data.data);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function We(e){var n;return null===e||void 0===e||null===(n=e.toString())||void 0===n?void 0:n.replace(/\B(?=(\d{3})+(?!\d))/g,",")}var Ye=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(n){var i,t,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.U2)({endpoint:"api/super-admin/companyTotalEarningStats?userId=".concat(n),auth:!0});case 2:s=e.sent,te((null===s||void 0===s||null===(i=s.data)||void 0===i||null===(t=i.data[0])||void 0===t?void 0:t.total_revenue)||0);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Oe=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(n,i){var t,s,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=6;break}return e.next=3,(0,v.gz)({endpoint:"api/super-admin/approveUser?id=".concat(i),auth:!0});case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,(0,v.gz)({endpoint:"api/super-admin/rejectUser?id=".concat(i),auth:!0});case 8:e.t0=e.sent;case 9:(t=e.t0).data.success?(be(je+1),Ee(null===t||void 0===t||null===(s=t.data)||void 0===s?void 0:s.message,{variant:"succes"})):(console.log(t),Ee(null===t||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message,{variant:"error"}));case 11:case"end":return e.stop()}}),e)})));return function(n,i){return e.apply(this,arguments)}}(),Je=function(e,n){console.log(e),F(n?e:[])};return(0,_.jsxs)("div",{children:[(0,_.jsx)(k.Z,{}),!V&&(0,_.jsxs)("div",{className:"",children:[(0,_.jsx)("div",{class:"w-3/5 mb-8",children:(0,_.jsxs)("div",{className:"flex items-center  mt-8 border2 p-2",children:[(0,_.jsx)("div",{className:"hover:cursor-pointer",onClick:function(){Je(Ie,!0)},children:(0,_.jsx)(w.Z,{dashboard:!0,small:!0,bigspace:!0,name:"Verified Companies",count:null===E||void 0===E?void 0:E.verified_company})}),(0,_.jsx)("div",{className:"hover:cursor-pointer",onClick:function(){Je(Qe,!0)},children:(0,_.jsx)(w.Z,{dashboard:!0,small:!0,cutborder:!0,name:"Unverified Companies",count:We(null===E||void 0===E?void 0:E.unverified_company)})}),(0,_.jsx)("div",{className:"hover:cursor-pointer",onClick:function(){Je(De,!1)},children:(0,_.jsx)(w.Z,{dashboard:!0,small:!0,cutborder:!0,name:"Total Companies",count:We(null===E||void 0===E?void 0:E.total_company)})})]})}),(0,_.jsx)("div",{className:"flex mb-5 h-3 justify-center mt-5 ",children:(0,_.jsxs)("ul",{className:"flex",children:[Se>1&&(0,_.jsx)("li",{children:(0,_.jsx)("a",{href:"#",onClick:function(){return Te(Se-1)},className:"py-2 px-4 bg-gray-400 text-white font-bold rounded-l hover:bg-gray-600",children:"Prev"})}),Fe.map((function(e){return(0,_.jsx)("li",{children:(0,_.jsx)("a",{href:"#",onClick:function(){return Te(e)},className:Se===e?"py-2 px-4 bg-primary-main text-white font-bold":"py-2 px-4 hover:bg-gray-400/10",children:e})},e)})),Se<Fe.length&&(0,_.jsx)("li",{children:(0,_.jsx)("a",{href:"#",onClick:function(){return Te(Se+1)},className:"py-2 px-4 bg-gray-400 text-white font-bold rounded-r hover:bg-gray-600",children:"Next"})})]})}),(0,_.jsx)("div",{class:"flex flex-wrap gap-4",children:null===(T=B.length&&B||De)||void 0===T?void 0:T.map((function(e){return(0,_.jsx)("div",{onClick:function(){Me(null===e||void 0===e?void 0:e._id),Ye(null===e||void 0===e?void 0:e._id),oe(null===e||void 0===e?void 0:e.fname),ve(null===e||void 0===e?void 0:e.profileUrl),he(e)},className:"w-[32%] mt-3",children:(0,_.jsx)(Z.Z,{companyDetails:e,handleShow:Ue})})}))})]}),V&&(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{onClick:Ue,className:"flex items-center mb-8 cursor-pointer w-16 p-2",children:[(0,_.jsx)("div",{style:{border:"1px solid #494949"},className:"border-solid w-5 mr-2 rounded h-5 flex justify-center items-center",children:(0,_.jsx)(y.jW7,{className:"",style:{fontSize:"22px",color:"#494949"}})}),(0,_.jsx)("p",{style:{color:"#494949"},className:"text-base",children:"Back"})]}),(0,_.jsxs)("div",{className:"flex items-center",style:{backGroundColor:"#1E1E1E"},children:[(0,_.jsx)(m.Z,{src:ue,className:"rounded-full"}),(0,_.jsx)(x.Z,{variant:"h5",className:"font-bold ml-4 ",children:le})]}),(0,_.jsx)("div",{className:"flex ",children:(0,_.jsxs)("div",{className:"flex items-center  mt-8 border2 p-2",children:[(0,_.jsx)(w.Z,{dashboard:!0,small:!0,bigspace:!0,name:"Riders",count:null===O||void 0===O?void 0:O.length}),(0,_.jsx)(w.Z,{dashboard:!0,small:!0,cutborder:!0,name:"Earnings",count:We(ae)})]})}),(0,_.jsxs)("div",{className:"flex  justify-between  items-end",children:[(0,_.jsx)(x.Z,{variant:"h5",className:"font-bold mt-8 text-primary-main",children:"Riders"}),(0,_.jsx)("div",{className:"flex justify-between items-end",children:(0,_.jsx)(p.Z,{onChange:function(e,n){return function(e){console.log(e);var n=null===O||void 0===O?void 0:O.filter((function(n){var i;return null===n||void 0===n||null===(i=n.fname.toLowerCase())||void 0===i?void 0:i.includes(null===e||void 0===e?void 0:e.toLowerCase())}));ee(n)}(e.target.value)}})})]}),null===Re||void 0===Re?void 0:Re.map((function(e){return(0,_.jsx)(N.Z,{tableArray:e})})),Re.length<1&&(0,_.jsx)(x.Z,{variant:"h4",className:"font-bold my-16 text-primary-main w-full text-center",children:"This company is yet to add a Rider"})]}),(0,_.jsx)(h.Z,{open:Ne,onClose:function(){return we(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,_.jsx)("div",{children:(0,_.jsx)(f.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"50%",minHeight:"520px",bgcolor:"background.paper",borderRadius:"3%",boxShadow:24,p:4},children:(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:"flex gap-8",children:[(0,_.jsx)("div",{className:"flex",children:(0,_.jsx)(m.Z,{sx:{width:100,height:100},src:null===pe||void 0===pe?void 0:pe.profileUrl})}),(0,_.jsxs)("div",{className:"mt-4",children:[(0,_.jsx)(x.Z,{className:"font-bold mb-5",variant:"h5",children:null===pe||void 0===pe?void 0:pe.fname}),!(null!==pe&&void 0!==pe&&pe.verified)&&(0,_.jsxs)("div",{class:"flex gap-5",children:[(0,_.jsx)(g.Z,{onClick:function(){return Oe(!0,null===pe||void 0===pe?void 0:pe._id)},className:"bg-green-500",children:"Approve"}),(0,_.jsx)(g.Z,{onClick:function(){return Oe(!1,null===pe||void 0===pe?void 0:pe._id)},className:"bg-red-500",children:"Decline"})]})]})]}),(0,_.jsx)(j.Z,{className:"my-8"}),(0,_.jsxs)("div",{class:"flex gap-16 ",children:[(0,_.jsxs)("div",{className:"flex flex-col gap-3 font-semibold",children:[(0,_.jsx)(x.Z,{className:"font-semibold",children:"Address:"}),(0,_.jsx)(x.Z,{className:"font-semibold",children:"Phone Number:"}),(0,_.jsx)(x.Z,{className:"font-semibold",children:"Email address:"})]}),(0,_.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,_.jsx)(x.Z,{children:null===pe||void 0===pe?void 0:pe.city}),(0,_.jsx)(x.Z,{children:null===pe||void 0===pe?void 0:pe.phoneNo}),(0,_.jsx)(x.Z,{children:null===pe||void 0===pe?void 0:pe.email})]})]}),(0,_.jsxs)("div",{class:"flex flex-col gap-4 mt-4 w-1/2",children:[(0,_.jsxs)("div",{className:"grid grid-cols-2 gap-5 items-center",children:[(0,_.jsx)(x.Z,{className:"font-semibold",children:"ID:"}),null!==pe&&void 0!==pe&&pe.idPhotoUrl?(0,_.jsx)(g.Z,{className:"text-white italic bg-primary-main",variant:"",children:(0,_.jsxs)("a",{href:null===pe||void 0===pe?void 0:pe.idPhotoUrl,target:"_blank",children:[" ","View Id."]})}):(0,_.jsx)("div",{className:"w-full flex flex-col justify-start items-start gap-5",children:(0,_.jsx)(x.Z,{className:"text-yellow-400",variant:"",children:"Not Yet Uploaded."})})]}),(0,_.jsxs)("div",{className:"grid grid-cols-2 gap-5 items-center",children:[(0,_.jsx)(x.Z,{className:"font-semibold ",children:"CAC Document:"}),null!==pe&&void 0!==pe&&pe.companyRegistrationPhotoUrl?(0,_.jsx)(g.Z,{className:"text-white italic bg-primary-main minw-",variant:"",children:(0,_.jsx)("a",{href:null===pe||void 0===pe?void 0:pe.companyRegistrationPhotoUrl,target:"_blank",children:"View CAC"})}):(0,_.jsx)("div",{className:"w-full flex flex-col justify-start items-start gap-5",children:(0,_.jsx)(x.Z,{className:"text-yellow-400",variant:"",children:"Not Yet Uploaded."})})]})]})]})})})})]})}}}]);
//# sourceMappingURL=376.ebb568d0.chunk.js.map