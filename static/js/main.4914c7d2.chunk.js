(this["webpackJsonptesla-workshop-web-3d"]=this["webpackJsonptesla-workshop-web-3d"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var o=c(7),s=c.n(o),n=c(27),r=c.n(n),i=(c(33),c(34),c(12)),a=c(42),j=c(5),b=c(10),l=function(){return Object(b.jsxs)("group",{children:[Object(b.jsx)("ambientLight",{intensity:.5}),Object(b.jsx)("directionalLight",{castShadow:!0,position:[-4,3,3]})]})},h=function(e){var t=e.position,c=e.color,s=Object(o.useRef)();Object(i.b)((function(e){var t=e.clock;s.current.rotation.y+=.1,s.current.rotation.y=Math.sin(t.elapsedTime)}));var n=Object(i.c)(j.TextureLoader,"/react-three-fiber-practices/box.jpg");return Object(b.jsxs)("mesh",{ref:s,castShadow:!0,position:t,children:[Object(b.jsx)("boxGeometry",{attach:"geometry",args:[1,1,1]}),Object(b.jsx)("meshPhysicalMaterial",{attach:"material",color:c,map:n})]})},u=function(){return Object(b.jsxs)("mesh",{receiveShadow:!0,rotation:[-Math.PI/2,0,0],position:[0,-.5,0],children:[Object(b.jsx)("planeBufferGeometry",{attach:"geometry",args:[10,10]}),Object(b.jsx)("meshPhysicalMaterial",{attach:"material",color:"green",side:j.DoubleSide})]})};var d=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(i.a,{shadows:!0,children:[Object(b.jsx)("axesHelper",{}),Object(b.jsx)(l,{}),Object(b.jsx)(a.a,{}),Object(b.jsxs)(o.Suspense,{fallback:null,children:[Object(b.jsx)(u,{}),Object(b.jsx)(h,{position:[-2.5,1.5,0],color:"yellow"}),Object(b.jsx)(h,{position:[0,1,0],color:"#81cefb"}),Object(b.jsx)(h,{position:[2.5,.5,0],color:"red"})]})]})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,o=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),o(e),s(e),n(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root")),x()}},[[39,1,2]]]);
//# sourceMappingURL=main.4914c7d2.chunk.js.map