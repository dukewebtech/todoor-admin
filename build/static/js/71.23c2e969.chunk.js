"use strict";(self.webpackChunksoftwrk_web=self.webpackChunksoftwrk_web||[]).push([[71],{6683:function(e,n,s){var i=s(4165),a=s(5861),t=s(885),r=s(2791),l=s(8152),o=s(5705),d=s(1724),c=s(5588),u=(s(6113),s(676)),m=(s(8871),s(5311),s(7328),s(1306),s(4861),s(2699),s(4565)),v=s(6871),x=s(184);n.Z=function(e){var n=r.useState(""),s=(0,t.Z)(n,2),p=(s[0],s[1],(0,v.s0)()),h=((0,u.Z)(),(0,c.Ds)().enqueueSnackbar),f=l.Z.useLoginMutation(),b=(0,t.Z)(f,2),j=b[0];return b[1],(0,o.TA)({initialValues:{username:"",password:""},validationSchema:d.Ry({username:d.Z_().trim().required(),password:d.Z_().trim().required()}),onSubmit:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),p("/complete-signUp"),e.prev=2,e.next=5,j({data:n}).unwrap();case 5:e.sent,h("Logged in successful",{variant:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),h(null===e.t0||void 0===e.t0||null===(s=e.t0.data)||void 0===s?void 0:s.message,"Failed to login",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(n){return e.apply(this,arguments)}}()}),(0,x.jsx)("div",{className:"p-20",style:{border:"none",borderLeft:e.cutborder?"1px solid #C4C4C4":"none"},children:(0,x.jsx)("div",{className:e.rider?"riders-bg text-white text-center mr-3":e.plain?"plain-bg":e.green?"bg-primary-main text-white":e.big?"text-left":" text-white text-center",sx:{minWidth:e.big?220:155,minHeight:e.big?160:120},children:(0,x.jsxs)("div",{className:e.bigspace?" pr-10":"px-5",children:[(0,x.jsx)("div",{children:(0,x.jsx)(m.Z,{className:e.plain||e.green?" text-center text-white":e.dashboard?"text-center text-primary-main ":"text-center text-primary-main font-bold",sx:{fontSize:12},children:e.name||"Total Companies"})}),(0,x.jsx)("div",{children:(0,x.jsx)(m.Z,{variant:e.small?"h4":"h2",className:e.green?"text-white text-center font-bold":"text-center font-bold text-primary-main",children:("Earnings"==e.name?"\u20a6 ".concat(e.count):e.count)||"0"})})]})})})}},6847:function(e,n,s){s.r(n),s.d(n,{default:function(){return X}});var i=s(4165),a=s(5861),t=s(885),r=s(2791),l=s(8152),o=s(5705),d=s(1724),c=s(5588),u=(s(6113),s(676)),m=(s(8871),s(5311),s.p+"static/media/pdf.46de44589ccd9c856deb.png"),v=(s(7328),s(9795)),x=(s(656),s(2699),s(3978)),p=s(4565),h=s(4032),f=s(8778),b=s(6015),j=s(7205),g=s(8916),Z=s(6871),N=(s(3979),s(3849)),y=s(7425),w=s(4789),k=s(6683),S=s(4781),C=(s(5048),s(2426)),U=s.n(C),_=s(184);var X=function(e){var n,s,C,X=l.Z.useGetCompanyStatisticsQuery({}),R=null===X||void 0===X?void 0:X.data,L=(0,r.useState)(!1),A=(0,t.Z)(L,2),E=A[0],D=A[1],P=(0,r.useState)([]),T=(0,t.Z)(P,2),q=T[0],I=T[1],z=(0,r.useState)([]),W=(0,t.Z)(z,2),G=W[0],V=W[1],B=(0,r.useState)([]),F=(0,t.Z)(B,2),H=F[0],M=F[1],Q=(0,r.useState)(""),O=(0,t.Z)(Q,2),J=O[0],K=O[1],Y=(0,r.useState)(""),$=(0,t.Z)(Y,2),ee=$[0],ne=$[1],se=(0,r.useState)(),ie=(0,t.Z)(se,2),ae=ie[0],te=ie[1],re=(0,r.useState)(0),le=(0,t.Z)(re,2),oe=le[0],de=le[1],ce=r.useState(!1),ue=(0,t.Z)(ce,2),me=ue[0],ve=ue[1],xe=function(e){e?D(!E):ve(!0)},pe=(0,Z.s0)(),he=null===G||void 0===G?void 0:G.map((function(e){return{image:null===e||void 0===e?void 0:e.profileUrl,name:null===e||void 0===e?void 0:e.fname,company:null===e||void 0===e?void 0:e.companyName,id:null===e||void 0===e?void 0:e.email,ratings:U()(e.created_at).format("ll"),tripsCompleted:"-",phoneNo:null===e||void 0===e?void 0:e.phoneNo,status:null===e||void 0===e?void 0:e.currTripState}})),fe=((0,u.Z)(),(0,c.Ds)().enqueueSnackbar),be=l.Z.useLoginMutation(),je=(0,t.Z)(be,2),ge=je[0],Ze=(je[1],(0,o.TA)({initialValues:{username:"",password:""},validationSchema:d.Ry({username:d.Z_().trim().required(),password:d.Z_().trim().required()}),onSubmit:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),pe("/complete-signUp"),e.prev=2,e.next=5,ge({data:n}).unwrap();case 5:e.sent,fe("Logged in successful",{variant:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),fe(null===e.t0||void 0===e.t0||null===(s=e.t0.data)||void 0===s?void 0:s.message,"Failed to login",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(n){return e.apply(this,arguments)}}()}),l.Z.useGetAllQuery({userType:"company",count:oe})),Ne=null===Ze||void 0===Ze||null===(n=Ze.data)||void 0===n?void 0:n.data;console.log(Ne);var ye=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.U2)({endpoint:"api/super-admin/getAllRidersCompany?userId=".concat(n),auth:!0});case 2:s=e.sent,console.log(s.data.data),I(s.data.data),V(s.data.data);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function we(e){var n;return null===e||void 0===e||null===(n=e.toString())||void 0===n?void 0:n.replace(/\B(?=(\d{3})+(?!\d))/g,",")}var ke=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var s,a,t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.U2)({endpoint:"api/super-admin/companyTotalEarningStats?userId=".concat(n),auth:!0});case 2:t=e.sent,M((null===t||void 0===t||null===(s=t.data)||void 0===s||null===(a=s.data[0])||void 0===a?void 0:a.total_revenue)||0);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Se=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n,s){var a,t,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=6;break}return e.next=3,(0,v.gz)({endpoint:"api/super-admin/approveUser?id=".concat(s),auth:!0});case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,(0,v.gz)({endpoint:"api/super-admin/rejectUser?id=".concat(s),auth:!0});case 8:e.t0=e.sent;case 9:(a=e.t0).data.success?(de(oe+1),fe(null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.message,{variant:"succes"})):(console.log(a),fe(null===a||void 0===a||null===(r=a.data)||void 0===r?void 0:r.message,{variant:"error"}));case 11:case"end":return e.stop()}}),e)})));return function(n,s){return e.apply(this,arguments)}}();return(0,_.jsxs)("div",{children:[(0,_.jsx)(S.Z,{}),!E&&(0,_.jsxs)("div",{className:"",children:[(0,_.jsx)("div",{class:"w-2/5 mb-8",children:(0,_.jsxs)("div",{className:"flex items-center  mt-8 border2 p-2",children:[(0,_.jsx)(k.Z,{dashboard:!0,small:!0,bigspace:!0,name:"Verified Companies",count:null===R||void 0===R?void 0:R.total_company}),(0,_.jsx)(k.Z,{dashboard:!0,small:!0,cutborder:!0,name:"Unverified Companies",count:we(null===R||void 0===R?void 0:R.unverified_company)})]})}),(0,_.jsx)("div",{class:"flex flex-wrap gap-4",children:null===Ne||void 0===Ne?void 0:Ne.map((function(e){return(0,_.jsx)("div",{onClick:function(){ye(null===e||void 0===e?void 0:e._id),ke(null===e||void 0===e?void 0:e._id),K(null===e||void 0===e?void 0:e.fname),ne(null===e||void 0===e?void 0:e.profileUrl),te(e)},className:"w-[32%] mt-3",children:(0,_.jsx)(N.Z,{companyDetails:e,handleShow:xe})})}))})]}),E&&(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{onClick:xe,className:"flex items-center mb-8 cursor-pointer w-16 p-2",children:[(0,_.jsx)("div",{style:{border:"1px solid #494949"},className:"border-solid w-5 mr-2 rounded h-5 flex justify-center items-center",children:(0,_.jsx)(y.jW7,{className:"",style:{fontSize:"22px",color:"#494949"}})}),(0,_.jsx)("p",{style:{color:"#494949"},className:"text-base",children:"Back"})]}),(0,_.jsxs)("div",{className:"flex items-center",style:{backGroundColor:"#1E1E1E"},children:[(0,_.jsx)(x.Z,{src:ee,className:"rounded-full"}),(0,_.jsx)(p.Z,{variant:"h5",className:"font-bold ml-4 ",children:J})]}),(0,_.jsx)("div",{className:"flex ",children:(0,_.jsxs)("div",{className:"flex items-center  mt-8 border2 p-2",children:[(0,_.jsx)(k.Z,{dashboard:!0,small:!0,bigspace:!0,name:"Riders",count:null===q||void 0===q?void 0:q.length}),(0,_.jsx)(k.Z,{dashboard:!0,small:!0,cutborder:!0,name:"Earnings",count:we(H)})]})}),(0,_.jsxs)("div",{className:"flex  justify-between  items-end",children:[(0,_.jsx)(p.Z,{variant:"h5",className:"font-bold mt-8 text-primary-main",children:"Riders"}),(0,_.jsx)("div",{className:"flex justify-between items-end",children:(0,_.jsx)(h.Z,{onChange:function(e,n){return function(e){console.log(e);var n=null===q||void 0===q?void 0:q.filter((function(n){var s;return null===n||void 0===n||null===(s=n.fname.toLowerCase())||void 0===s?void 0:s.includes(null===e||void 0===e?void 0:e.toLowerCase())}));V(n)}(e.target.value)}})})]}),null===he||void 0===he?void 0:he.map((function(e){return(0,_.jsx)(w.Z,{tableArray:e})}))]}),(0,_.jsx)(f.Z,{open:me,onClose:function(){return ve(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,_.jsx)("div",{children:(0,_.jsx)(b.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"50%",minHeight:"520px",bgcolor:"background.paper",borderRadius:"3%",boxShadow:24,p:4},children:(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:"flex gap-8",children:[(0,_.jsx)("div",{className:"flex",children:(0,_.jsx)(x.Z,{sx:{width:100,height:100},src:null===ae||void 0===ae?void 0:ae.profileUrl})}),(0,_.jsxs)("div",{className:"mt-4",children:[(0,_.jsx)(p.Z,{className:"font-bold mb-5",variant:"h5",children:null===ae||void 0===ae?void 0:ae.fname}),(0,_.jsxs)("div",{class:"flex gap-5",children:[(0,_.jsx)(j.Z,{onClick:function(){return Se(!0,null===ae||void 0===ae?void 0:ae._id)},className:"bg-green-500",children:"Approve"}),(0,_.jsx)(j.Z,{onClick:function(){return Se(!1,null===ae||void 0===ae?void 0:ae._id)},className:"bg-red-500",children:"Decline"})]})]})]}),(0,_.jsx)(g.Z,{className:"my-8"}),(0,_.jsxs)("div",{class:"flex gap-20",children:[(0,_.jsxs)("div",{className:" gap-16 font-semibold",children:[(0,_.jsx)(p.Z,{className:"my-3 font-semibold",children:"Total Earnings"}),(0,_.jsxs)(p.Z,{className:"font-semibold text-primary-main",children:[" ","XXXXXXX"]})]}),(0,_.jsxs)("div",{className:" font-semibold",children:[(0,_.jsx)(p.Z,{className:"my-3 font-semibold",children:"No Of Rides"}),(0,_.jsx)(p.Z,{className:"font-semibold text-primary-main",children:"XXXXX"})]})]}),(0,_.jsx)(g.Z,{className:"my-8"}),(0,_.jsxs)("div",{class:"flex gap-16 ",children:[(0,_.jsxs)("div",{className:"flex flex-col gap-3 font-semibold",children:[(0,_.jsx)(p.Z,{className:"font-semibold",children:"Address:"}),(0,_.jsx)(p.Z,{className:"font-semibold",children:"Phone Number:"}),(0,_.jsx)(p.Z,{className:"font-semibold",children:"Email address:"}),(0,_.jsx)(p.Z,{className:"font-semibold",children:"ID Card:"}),(0,_.jsx)(p.Z,{className:"font-semibold",children:"Last Login Image"})]}),(0,_.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,_.jsx)(p.Z,{children:null===ae||void 0===ae?void 0:ae.city}),(0,_.jsx)(p.Z,{children:null===ae||void 0===ae?void 0:ae.phoneNo}),(0,_.jsx)(p.Z,{children:null===ae||void 0===ae?void 0:ae.email}),(0,_.jsx)(p.Z,{children:"****"}),(0,_.jsx)(p.Z,{children:"***"})]})]}),(0,_.jsxs)("div",{class:"flex gap-6 mt-4",children:[(0,_.jsxs)("div",{children:[(0,_.jsx)(p.Z,{className:"font-semibold",children:"ID:"}),null!==ae&&void 0!==ae&&null!==(s=ae.idPhotoUrl)&&void 0!==s&&s.endsWith(".pdf")?(0,_.jsx)("a",{href:null===ae||void 0===ae?void 0:ae.idPhotoUrl,target:"_blank",children:(0,_.jsx)("img",{className:"w-full h-32  border-blue-300",src:m})}):(0,_.jsx)("img",{className:"w-[300px] h-32  border-blue-300",src:null===ae||void 0===ae?void 0:ae.idPhotoUrl})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)(p.Z,{className:"font-semibold",children:"CAC Document:"}),null!==ae&&void 0!==ae&&null!==(C=ae.companyRegistrationPhotoUrl)&&void 0!==C&&C.endsWith(".pdf")?(0,_.jsx)("a",{href:null===ae||void 0===ae?void 0:ae.companyRegistrationPhotoUrl,target:"_blank",children:(0,_.jsx)("img",{className:"w-full h-32 border-blue-300",src:m})}):(0,_.jsx)("img",{className:"w-[300px] h-32  border-blue-300",src:null===ae||void 0===ae?void 0:ae.companyRegistrationPhotoUrl})]})]})]})})})})]})}}}]);
//# sourceMappingURL=71.23c2e969.chunk.js.map