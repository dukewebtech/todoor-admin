"use strict";(self.webpackChunksoftwrk_web=self.webpackChunksoftwrk_web||[]).push([[854],{5255:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var o=t(1413),i=t(4165),r=t(5861),a=t(885),s=t(2791),l=(t(5705),t(1724),t(5588),t(676),t(9126)),u=t(9795),c=(t(5087),t(7993)),d=(t(8871),t.p,t.p+"static/media/todoor image.2dabe7881be92a826a0c.png"),p=(t(7328),t(656),t(2699),t(7205)),v=t(6871),f=(t(3979),t(4781)),g=(t(4428),t(184));var m=function(e){var n,t=(0,s.useState)(null),m=(0,a.Z)(t,2),w=m[0],x=m[1],h=(0,s.useState)(null),Z=(0,a.Z)(h,2),j=(Z[0],Z[1]),b=(0,s.useState)({lat:7,lng:5}),L=(0,a.Z)(b,2),S=L[0],k=(L[1],(0,s.useState)([])),y=(0,a.Z)(k,2),C=y[0],z=y[1],A=(0,s.useState)(null),N=(0,a.Z)(A,2),I=(N[0],N[1]),R=(0,s.useState)(0),T=(0,a.Z)(R,2),V=(T[0],T[1],(0,s.useState)(null)),O=(0,a.Z)(V,2),_=O[0],M=O[1],q=((0,s.useRef)(null),(0,s.useState)(null)),B=(0,a.Z)(q,2),D=(B[0],B[1],localStorage.getItem("token").slice(0,7),function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){var t,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.U2)({endpoint:"api/super-admin/getActiveRiders",auth:!0});case 2:return o=e.sent,z(null===o||void 0===o?void 0:o.data),e.abrupt("return",null===o||void 0===o||null===(t=o.data)||void 0===t?void 0:t.length);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),F=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.U2)({endpoint:"api/super-admin/getActiveRiders",auth:!0});case 2:t=e.sent,console.log(null===t||void 0===t?void 0:t.data[0]),G(null===t||void 0===t?void 0:t.data[0]);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),G=function(e){if(w){console.log(null===e||void 0===e?void 0:e.gpsLoc);var n=new window.google.maps.LatLngBounds;n.extend(new window.google.maps.LatLng(null===e||void 0===e?void 0:e.gpsLoc[1],null===e||void 0===e?void 0:e.gpsLoc[0])),w.fitBounds(n),w.panTo(new window.google.maps.LatLng(null===e||void 0===e?void 0:e.gpsLoc[1],null===e||void 0===e?void 0:e.gpsLoc[0]))}};(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();F();var n=setInterval(e,3e3);return function(){return clearInterval(n)}}),[w]),(0,v.s0)();var H=(0,c.Ji)({googleMapsApiKey:"AIzaSyAOcmuq7zgq9R_ZubLHlhw6VO_XRidO1Vg"}).isLoaded;if(!H)return(0,g.jsx)("p",{children:"isloaded"});var J=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n,t){var o,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=n&&""!=t){e.next=2;break}return e.abrupt("return");case 2:return o=new google.maps.DirectionsService,e.next=5,o.route({origin:n,destination:t,travelMode:google.maps.TravelMode.DRIVING});case 5:r=e.sent,M(r),j(r.routes[0].legs[0].distance.text),I(r.routes[0].legs[0].duration.text);case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),K={color:"white",fontSize:"12px",fontWeight:"bold",anchor:new window.google.maps.Point(0,20)},U={url:d,scaledSize:new window.google.maps.Size(60,60)};return H?(0,g.jsxs)("div",{className:"w-full",children:[(0,g.jsx)(f.Z,{}),(0,g.jsxs)("div",{className:"flex justify-between items-center",children:[(0,g.jsx)("div",{className:"mb-4",children:(0,g.jsx)(p.Z,{onClick:function(){return J("Apapa, Lagos","Ikeja, Lagos")},style:{color:"#8C8C8C"},className:" ml-3 px-7 py-2 bg-transparent",children:"God's View"})}),(0,g.jsx)("div",{className:"flex-between w-2/5 mr-12",children:(0,g.jsxs)("div",{className:" flex items-center",children:[(0,g.jsx)(l.KC7,{className:"mr-1",style:{color:"#078532"},fontSize:12}),(0,g.jsxs)("p",{children:["Online ",null===C||void 0===C||null===(n=C.map((function(e){return e.isAvailable})))||void 0===n?void 0:n.length]})]})})]}),(0,g.jsxs)(c.b6,{mapContainerStyle:{width:"100%",height:"45vw"},center:S,zoom:50,options:{zoomControl:!1,streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1},onLoad:function(e){setTimeout((function(){x(e)}))},children:[w&&(0,g.jsx)("div",{children:C.map((function(e){return(null===e||void 0===e?void 0:e.gpsLoc)&&(0,g.jsx)("div",{children:(null===e||void 0===e?void 0:e.isAvailable)&&(0,g.jsx)("div",{children:(0,g.jsx)(c.Jx,{style:{width:"10px"},onClick:function(){G(e)},icon:U,position:{lat:null===e||void 0===e?void 0:e.gpsLoc[1],lng:null===e||void 0===e?void 0:e.gpsLoc[0]},label:(0,o.Z)((0,o.Z)({text:null===e||void 0===e?void 0:e.fname},K),{},{marginTop:"-250px"})})})})}))}),_&&(0,g.jsx)(c.tH,{directions:_}),(0,g.jsx)(g.Fragment,{})]})]}):(0,g.jsx)(g.Fragment,{})}}}]);
//# sourceMappingURL=854.2551b9a0.chunk.js.map