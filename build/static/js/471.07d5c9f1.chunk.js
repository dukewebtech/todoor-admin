"use strict";(self.webpackChunksoftwrk_web=self.webpackChunksoftwrk_web||[]).push([[471],{5932:function(e,r,t){t.d(r,{Z:function(){return v}});var i=t(885),a=t(2791),s=t(6015),l=t(7205),n=t(4565),o=t(8778),d=t(7425),c=(t(9795),t(184)),u={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",borderRadius:"3%",boxShadow:24,p:4};function v(e){var r=e.closeModal,t=e.openModal,v=e.suspend,m=e.companyId,x=e.deleteRider,p=a.useState(!1),h=(0,i.Z)(p,2);h[0],h[1];return console.log(m),(0,c.jsx)("div",{children:(0,c.jsx)(o.Z,{open:r,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,c.jsx)(s.Z,{sx:u,children:(0,c.jsx)("div",{className:"flex justify-center text-center ",children:(0,c.jsxs)("div",{className:" text-center",children:[(0,c.jsx)("div",{className:" flex justify-center ",children:(0,c.jsx)(d.j6O,{style:{backgroundColor:v?" #FFB8001A":"#FF004D1A",color:v?" #F7AD2B":"#FF0A36",padding:"2px"},fontSize:25})}),(0,c.jsxs)("div",{className:"mt-4",children:[(0,c.jsxs)(n.Z,{className:"mb-4",variant:"h6",children:[v?"Suspend":"Delete"," Account"]}),(0,c.jsx)("p",{children:"Are you sure you want to delete this rider? This action cannot be undone."})]}),(0,c.jsxs)("div",{className:"flex justify-between items-center mt-8",children:[(0,c.jsx)(l.Z,{onClick:t,className:"w-[80%] mr-3 bg-white text-[#989898]",children:"Cancel"})," ",(0,c.jsx)(l.Z,{onClick:function(){x(m),t(!1)},className:"w-[80%] bg-[#FF2828]",children:"Delete"})]})]})})})})})}},5471:function(e,r,t){t.r(r),t.d(r,{default:function(){return y}});var i=t(885),a=t(2791),s=t(8152),l=t(5705),n=t(1724),o=t(5588),d=(t(6113),t(676)),c=(t(8871),t(5311),t(7328),t(1306),t(656),t(4861),t(2699),t(184));var u=t(4165),v=t(5861),m=(t(2013),t(4565)),x=t(7205),p=t(6871),h=t(3979),f=t(7425),j=t(4781),b=t(2426),g=t.n(b);var Z=function(e){var r,t=e.riders,h=a.useState(""),j=(0,i.Z)(h,2),b=(j[0],j[1],a.useState([])),Z=(0,i.Z)(b,2),y=(Z[0],Z[1]),N=a.useState(!1),w=(0,i.Z)(N,2),S=w[0],k=w[1],D=a.useState({}),A=(0,i.Z)(D,2),C=(A[0],A[1],(0,p.s0)()),R=s.Z.useGetAllTripsQuery({}),F=null===R||void 0===R?void 0:R.data;function G(e,r,t,i,a,s,l,n,o){return{origin:e,destination:r,rider:t,orderId:i,status:a,fee:s,departureDate:l,arrivalDate:n,timeDelay:o}}(0,a.useEffect)((function(){y(F)}),[F]),console.log(t),G("Ikeja, Lagos","Apapa, Lagos","Taiwo Daniel","WXHDGDJKGG","Delivered","N200,000","11 Sept. 9:00am","15 Sept. 1:00am","-"),G("Lekki, Lagos","Apapa, Lagos","Taiwo Daniel","WXHDGDJKGG","Delivered","N200,000","11 Sept. 9:00am","15 Sept. 1:00am","-"),G("Yaba, Lagos","Apapa, Lagos","Taiwo Daniel","WXHDGDJKGG","Delivered","N200,000","11 Sept. 9:00am","15 Sept. 1:00am","-"),G("Sabo, Kaduna","Apapa, Lagos","Taiwo Daniel","WXHDGDJKGG","Delivered","N200,000","11 Sept. 9:00am","15 Sept. 1:00am","-");var B=null===F||void 0===F||null===(r=F.slice(0,7))||void 0===r?void 0:r.map((function(e,r){var t,i;return{pickUpAddress:null===e||void 0===e||null===(t=e.riderId)||void 0===t?void 0:t.fname,destAddress:null===e||void 0===e?void 0:e.pickUpAddress,rider:null===e||void 0===e?void 0:e.destAddress,riderId:null===e||void 0===e?void 0:e.tripAmt,riderInfo:null===e||void 0===e?void 0:e.riderId,tripRequestStatus:null===(i=g()(null===e||void 0===e?void 0:e.requestTime))||void 0===i?void 0:i.format("ll"),tripAmt:null===e||void 0===e?void 0:e.tripRequestStatus}}));function P(e){var r;return null===e||void 0===e||null===(r=e.toString())||void 0===r?void 0:r.replace(/\B(?=(\d{3})+(?!\d))/g,",")}(0,d.Z)();var T=(0,o.Ds)().enqueueSnackbar,I=s.Z.useLoginMutation(),L=(0,i.Z)(I,2),U=L[0];return L[1],(0,l.TA)({initialValues:{username:"",password:""},validationSchema:n.Ry({username:n.Z_().trim().required(),password:n.Z_().trim().required()}),onSubmit:function(){var e=(0,v.Z)((0,u.Z)().mark((function e(r){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(r),C("/complete-signUp"),e.prev=2,e.next=5,U({data:r}).unwrap();case 5:e.sent,T("Logged in successful",{variant:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),T(null===e.t0||void 0===e.t0||null===(t=e.t0.data)||void 0===t?void 0:t.message,"Failed to login",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(r){return e.apply(this,arguments)}}()}),(0,c.jsxs)("div",{children:[!S&&(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"flex justify-between mb-8 items-center",style:{backgroundColor:"white"}}),(0,c.jsxs)("div",{sx:{minWidth:650,backgroundColor:"white"},"aria-label":"simple table",children:[(0,c.jsxs)("div",{style:{border:"1px solid #DADADA"},className:" cursor-pointer mt-2 flex border2  min-h-[50%]",children:[(0,c.jsxs)("div",{className:"w-[19%] text-center  px-3 py-3",children:[(0,c.jsx)("h6",{className:"font-bold text-[#454647]",children:"Rider"}),(0,c.jsx)(m.Z,{variant:"h6"})]}),(0,c.jsxs)("div",{className:"w-[19%] text-center  px-3 py-3",children:[(0,c.jsx)("h6",{className:"font-bold text-[#454647]",children:"Picked UP"}),(0,c.jsx)(m.Z,{variant:"h6",children:null===B||void 0===B?void 0:B.company})]}),(0,c.jsx)("div",{className:"w-[19.11%] text-center  px-3 py-3",children:(0,c.jsx)("h6",{className:"font-bold text-[#454647]",children:"Dropped"})}),(0,c.jsx)("div",{className:"w-[19%] text-center  px-3 py-3",children:(0,c.jsx)("h6",{className:"font-bold text-[#454647]",children:"Price"})}),(0,c.jsx)("div",{className:"w-[19%] text-center  px-3 py-3",children:(0,c.jsx)("h6",{className:"font-bold text-[#454647]",children:"Date"})}),(0,c.jsx)("div",{className:"w-[19%] text-center  px-3 py-3",children:(0,c.jsx)("h6",{className:"font-bold text-[#454647]",children:"Status"})})]}),(0,c.jsx)("div",{className:"mt-3 ",children:null===B||void 0===B?void 0:B.map((function(e,r){return(0,c.jsxs)("div",{className:"flex",sx:{"&:last-child td, &:last-child th":{border:0},marginTop:10,backgroundColor:""},children:[(0,c.jsx)("div",{className:"w-[19%] border3b px-3 py-3  text-center",children:null===e||void 0===e?void 0:e.pickUpAddress}),(0,c.jsx)("div",{className:"w-[19%]  px-3 py-3  border3b text-center",children:null===e||void 0===e?void 0:e.destAddress}),(0,c.jsx)("div",{className:"w-[19%]  px-3 py-3  border3b text-center",children:(null===e||void 0===e?void 0:e.rider)||"-"}),(0,c.jsxs)("div",{className:"w-[19.11%]  px-3 py-3  border3b text-center",children:["\u20a6 ",P(null===e||void 0===e?void 0:e.riderId.toFixed(2))]}),(0,c.jsx)("div",{className:"w-[19%]  px-3 py-3  border3b text-center",children:(0,c.jsx)("p",{className:" px-3 py-1 text-[#0C3BAA] font-semibold",children:null===e||void 0===e?void 0:e.tripRequestStatus})}),(0,c.jsx)("div",{className:"w-[19%]  px-3 py-3  border3b text-center",children:(0,c.jsx)(x.Z,{children:"Successful"})})]},r)}))})]})]}),S&&(0,c.jsx)("div",{children:(0,c.jsx)("div",{children:(0,c.jsxs)("div",{onClick:function(){return k(!S)},className:"flex items-center mb-8 cursor-pointer w-16 p-2",children:[(0,c.jsx)("div",{style:{border:"1px solid #494949"},className:"border-solid w-5 mr-2 rounded h-5 flex justify-center items-center",children:(0,c.jsx)(f.jW7,{className:"",style:{fontSize:"22px",color:"#494949"}})}),(0,c.jsx)("p",{style:{color:"#494949"},className:"text-base",children:"Back"})]})})})]})};t(3849),t(9795);var y=function(e){var r,t,l,n,o=a.useState(""),u=(0,i.Z)(o,2),v=(u[0],u[1],a.useState(!1)),x=(0,i.Z)(v,2),f=(x[0],x[1],a.useState([])),b=(0,i.Z)(f,2),g=(b[0],b[1],s.Z.useGetCompanyStatisticsQuery({})),y=null===g||void 0===g?void 0:g.data;console.log(y);var N=s.Z.useGetAllQuery({userType:"rider"}),w=null===N||void 0===N||null===(r=N.data)||void 0===r?void 0:r.data,S=s.Z.useGetAllQuery({userType:"company"}),k=(null===S||void 0===S||null===(t=S.data)||void 0===t||t.data,s.Z.useGetAllQuery({userType:"customer"})),D=(null===k||void 0===k||null===(l=k.data)||void 0===l||l.data,(0,p.s0)(),(0,d.Z)(),s.Z.useGetAllTripsQuery({}));return null===D||void 0===D||D.data,(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"",children:[(0,c.jsx)(j.Z,{}),(0,c.jsx)(m.Z,{variant:"h5",className:"font-bold",children:"Welcome Back"})]}),(0,c.jsxs)("div",{className:"flex justify-between mt-4",children:[(0,c.jsx)("div",{className:"mr-3",children:(0,c.jsx)(h.Z,{dashboard:!0,green:!0,name:"Total Companies",count:y&&(null===y||void 0===y?void 0:y.total_company)||0})}),(0,c.jsx)("div",{className:"mr-3",children:(0,c.jsx)(h.Z,{dashboard:!0,name:"Total Riders",count:y&&(null===y||void 0===y?void 0:y.total_riders)||0})}),(0,c.jsx)("div",{className:"mr-3",children:(0,c.jsx)(h.Z,{dashboard:!0,name:"Rides in progress",count:y&&(null===y||void 0===y?void 0:y.rider_in_progress)||0})}),(0,c.jsx)("div",{className:"mr-3",children:(0,c.jsx)(h.Z,{dashboard:!0,name:"Users",count:y&&(null===y||void 0===y?void 0:y.active_bikes)||0})}),(0,c.jsxs)("div",{className:"relative w-full",children:[(0,c.jsx)("div",{className:"flex-between px-2 w-full text-xs absolute ",style:{top:"-20px"},children:(0,c.jsx)("p",{className:"font-bold flextext-xs self-end",children:"Today"})}),(0,c.jsx)(h.Z,{dashboard:!0,small:!0,name:"Earnings",count:function(e){var r;return null===e||void 0===e||null===(r=e.toString())||void 0===r?void 0:r.replace(/\B(?=(\d{3})+(?!\d))/g,",")}(y&&(null===y||void 0===y||null===(n=y.total_earnings)||void 0===n?void 0:n.toFixed(2))||0)})]})]}),(0,c.jsx)("div",{children:(0,c.jsx)(Z,{riders:w})})]})}},3849:function(e,r,t){t.d(r,{Z:function(){return Z}});t(4165),t(5861);var i=t(885),a=t(2791),s=t(8152),l=(t(5705),t(1724),t(5588)),n=(t(6113),t(676)),o=(t(8871),t(5311),t(7328),t(1306),t(656),t(2426)),d=t.n(o),c=t(4569),u=t.n(c),v=new(t(8190).Z),m=u().create({baseURL:"https://app.todoorapp.com"});console.log(v.get("token"));m.interceptors.request.use((function(e){return console.log("Interceptor Request (Outgoing) ",e),v.get("token")&&(e.headers.Authorization="Bearer ".concat(v.get("token"))),e}),(function(e){return Promise.reject(e)}));t(9795),t(4861),t(2699);var x=t(8928),p=t(5194),h=t(3978),f=t(4565),j=t(8916),b=t(6871),g=t(184);var Z=function(e){var r=e.companyDetails,t=e.handleShow,o=(e.companyId,a.useState("")),c=(0,i.Z)(o,2),u=(c[0],c[1],(0,b.s0)(),(0,n.Z)(),(0,l.Ds)().enqueueSnackbar,s.Z.useLoginMutation()),v=(0,i.Z)(u,2);return v[0],v[1],console.log(null===r||void 0===r?void 0:r.verified),(0,g.jsx)("div",{className:"",children:(0,g.jsx)(x.Z,{className:" text-black text-center relative",sx:{width:300,minHeight:120,backgroundColor:null!==r&&void 0!==r&&r.verified?"#EBEBEB":"#FFCD0061"},children:(0,g.jsxs)(p.Z,{className:"",children:[(0,g.jsxs)("div",{onClick:function(){t(null===r||void 0===r?void 0:r.verified)},className:"flex pb-2 items-start  cursor-pointer",style:{backGroundColor:null!==r&&void 0!==r&&r.verified?"#EBEBEB":"#FFCD0061"},children:[(0,g.jsx)(h.Z,{sx:{width:70,height:70},src:null===r||void 0===r?void 0:r.profileUrl}),(0,g.jsxs)("div",{className:"ml-2 text-left",style:{backGroundColor:null!==r&&void 0!==r&&r.verified?"#EBEBEB":"#FFCD0061"},children:[(0,g.jsx)(f.Z,{className:"font-bold",variant:"h6",children:(null===r||void 0===r?void 0:r.fname)||"-"}),(0,g.jsx)("p",{className:"medium-size cardhead",children:(null===r||void 0===r?void 0:r.companyLocation)||"Apapa Lagos"}),(0,g.jsx)("p",{className:"medium-size cardhead mt-1",children:d()(null===r||void 0===r?void 0:r.created_at).format("ll")})]})]}),(0,g.jsx)(j.Z,{className:"mb-2"}),(0,g.jsx)(f.Z,{style:{color:null!==r&&void 0!==r&&r.verified?"green":"red"},className:"font-bold text-base italic",children:null!==r&&void 0!==r&&r.verified?"Verified":null!==r&&void 0!==r&&r.verified||null!==r&&void 0!==r&&r.companyRegistrationPhotoUrl||null!==r&&void 0!==r&&r.idPhotoUrl?null!==r&&void 0!==r&&r.verified||null!==r&&void 0!==r&&r.idPhotoUrl?null!==r&&void 0!==r&&r.verified||null!==r&&void 0!==r&&r.companyRegistrationPhotoUrl?"Pending Verification":"CAC not uploaded":"ID Not uploaded":"No Document Uploaded"})]})})})}},2013:function(e,r,t){t(2791),t(5932),t(656),t(184)},3978:function(e,r,t){t.d(r,{Z:function(){return g}});var i=t(885),a=t(3366),s=t(7462),l=t(2791),n=t(8182),o=t(4419),d=t(6863),c=t(7254),u=t(233),v=t(184),m=(0,u.Z)((0,v.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),x=t(1217);function p(e){return(0,x.Z)("MuiAvatar",e)}(0,t(5878).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var h=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],f=(0,d.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,t=e.ownerState;return(0,s.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(r.vars||r).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,s.Z)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}))})),j=(0,d.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,d.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var g=l.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiAvatar"}),d=t.alt,u=t.children,m=t.className,x=t.component,g=void 0===x?"div":x,Z=t.imgProps,y=t.sizes,N=t.src,w=t.srcSet,S=t.variant,k=void 0===S?"circular":S,D=(0,a.Z)(t,h),A=null,C=function(e){var r=e.crossOrigin,t=e.referrerPolicy,a=e.src,s=e.srcSet,n=l.useState(!1),o=(0,i.Z)(n,2),d=o[0],c=o[1];return l.useEffect((function(){if(a||s){c(!1);var e=!0,i=new Image;return i.onload=function(){e&&c("loaded")},i.onerror=function(){e&&c("error")},i.crossOrigin=r,i.referrerPolicy=t,i.src=a,s&&(i.srcset=s),function(){e=!1}}}),[r,t,a,s]),d}((0,s.Z)({},Z,{src:N,srcSet:w})),R=N||w,F=R&&"error"!==C,G=(0,s.Z)({},t,{colorDefault:!F,component:g,variant:k}),B=function(e){var r=e.classes,t={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,o.Z)(t,p,r)}(G);return A=F?(0,v.jsx)(j,(0,s.Z)({alt:d,src:N,srcSet:w,sizes:y,ownerState:G,className:B.img},Z)):null!=u?u:R&&d?d[0]:(0,v.jsx)(b,{className:B.fallback}),(0,v.jsx)(f,(0,s.Z)({as:g,ownerState:G,className:(0,n.Z)(B.root,m),ref:r},D,{children:A}))}))}}]);
//# sourceMappingURL=471.07d5c9f1.chunk.js.map