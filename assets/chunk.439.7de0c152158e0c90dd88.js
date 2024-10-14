/*! For license information please see chunk.439.7de0c152158e0c90dd88.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[439],{843:(e,t,n)=>{n.r(t),n.d(t,{afterMain:()=>k,afterRead:()=>y,afterWrite:()=>E,applyStyles:()=>D,arrow:()=>Q,auto:()=>s,basePlacements:()=>c,beforeMain:()=>w,beforeRead:()=>b,beforeWrite:()=>O,bottom:()=>r,clippingParents:()=>u,computeStyles:()=>ne,createPopper:()=>je,createPopperBase:()=>Ce,createPopperLite:()=>De,detectOverflow:()=>be,end:()=>f,eventListeners:()=>re,flip:()=>ve,hide:()=>xe,left:()=>o,main:()=>x,modifierPhases:()=>T,offset:()=>ke,placements:()=>g,popper:()=>p,popperGenerator:()=>Se,popperOffsets:()=>Oe,preventOverflow:()=>Ae,read:()=>v,reference:()=>m,right:()=>i,start:()=>l,top:()=>a,variationPlacements:()=>h,viewport:()=>d,write:()=>A})
var a="top",r="bottom",i="right",o="left",s="auto",c=[a,r,i,o],l="start",f="end",u="clippingParents",d="viewport",p="popper",m="reference",h=c.reduce((function(e,t){return e.concat([t+"-"+l,t+"-"+f])}),[]),g=[].concat(c,[s]).reduce((function(e,t){return e.concat([t,t+"-"+l,t+"-"+f])}),[]),b="beforeRead",v="read",y="afterRead",w="beforeMain",x="main",k="afterMain",O="beforeWrite",A="write",E="afterWrite",T=[b,v,y,w,x,k,O,A,E]
function N(e){return e?(e.nodeName||"").toLowerCase():null}function P(e){if(null==e)return window
if("[object Window]"!==e.toString()){var t=e.ownerDocument
return t&&t.defaultView||window}return e}function S(e){return e instanceof P(e).Element||e instanceof Element}function C(e){return e instanceof P(e).HTMLElement||e instanceof HTMLElement}function j(e){return"undefined"!=typeof ShadowRoot&&(e instanceof P(e).ShadowRoot||e instanceof ShadowRoot)}const D={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state
Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},a=t.attributes[e]||{},r=t.elements[e]
C(r)&&N(r)&&(Object.assign(r.style,n),Object.keys(a).forEach((function(e){var t=a[e]
!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var a=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{})
C(a)&&N(a)&&(Object.assign(a.style,i),Object.keys(r).forEach((function(e){a.removeAttribute(e)})))}))}},requires:["computeStyles"]}
function M(e){return e.split("-")[0]}var F=Math.max,R=Math.min,L=Math.round
function z(){var e=navigator.userAgentData
return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function I(){return!/^((?!chrome|android).)*safari/i.test(z())}function _(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1)
var a=e.getBoundingClientRect(),r=1,i=1
t&&C(e)&&(r=e.offsetWidth>0&&L(a.width)/e.offsetWidth||1,i=e.offsetHeight>0&&L(a.height)/e.offsetHeight||1)
var o=(S(e)?P(e):window).visualViewport,s=!I()&&n,c=(a.left+(s&&o?o.offsetLeft:0))/r,l=(a.top+(s&&o?o.offsetTop:0))/i,f=a.width/r,u=a.height/i
return{width:f,height:u,top:l,right:c+f,bottom:l+u,left:c,x:c,y:l}}function W(e){var t=_(e),n=e.offsetWidth,a=e.offsetHeight
return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-a)<=1&&(a=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:a}}function B(e,t){var n=t.getRootNode&&t.getRootNode()
if(e.contains(t))return!0
if(n&&j(n)){var a=t
do{if(a&&e.isSameNode(a))return!0
a=a.parentNode||a.host}while(a)}return!1}function H(e){return P(e).getComputedStyle(e)}function U(e){return["table","td","th"].indexOf(N(e))>=0}function Y(e){return((S(e)?e.ownerDocument:e.document)||window.document).documentElement}function $(e){return"html"===N(e)?e:e.assignedSlot||e.parentNode||(j(e)?e.host:null)||Y(e)}function G(e){return C(e)&&"fixed"!==H(e).position?e.offsetParent:null}function q(e){for(var t=P(e),n=G(e);n&&U(n)&&"static"===H(n).position;)n=G(n)
return n&&("html"===N(n)||"body"===N(n)&&"static"===H(n).position)?t:n||function(e){var t=/firefox/i.test(z())
if(/Trident/i.test(z())&&C(e)&&"fixed"===H(e).position)return null
var n=$(e)
for(j(n)&&(n=n.host);C(n)&&["html","body"].indexOf(N(n))<0;){var a=H(n)
if("none"!==a.transform||"none"!==a.perspective||"paint"===a.contain||-1!==["transform","perspective"].indexOf(a.willChange)||t&&"filter"===a.willChange||t&&a.filter&&"none"!==a.filter)return n
n=n.parentNode}return null}(e)||t}function V(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e,t,n){return F(e,R(t,n))}function K(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Z(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}const Q={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,s=e.name,l=e.options,f=n.elements.arrow,u=n.modifiersData.popperOffsets,d=M(n.placement),p=V(d),m=[o,i].indexOf(d)>=0?"height":"width"
if(f&&u){var h=function(e,t){return K("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Z(e,c))}(l.padding,n),g=W(f),b="y"===p?a:o,v="y"===p?r:i,y=n.rects.reference[m]+n.rects.reference[p]-u[p]-n.rects.popper[m],w=u[p]-n.rects.reference[p],x=q(f),k=x?"y"===p?x.clientHeight||0:x.clientWidth||0:0,O=y/2-w/2,A=h[b],E=k-g[m]-h[v],T=k/2-g[m]/2+O,N=X(A,T,E),P=p
n.modifiersData[s]=((t={})[P]=N,t.centerOffset=N-T,t)}},effect:function(e){var t=e.state,n=e.options.element,a=void 0===n?"[data-popper-arrow]":n
null!=a&&("string"!=typeof a||(a=t.elements.popper.querySelector(a)))&&B(t.elements.popper,a)&&(t.elements.arrow=a)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}
function J(e){return e.split("-")[1]}var ee={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function te(e){var t,n=e.popper,s=e.popperRect,c=e.placement,l=e.variation,u=e.offsets,d=e.position,p=e.gpuAcceleration,m=e.adaptive,h=e.roundOffsets,g=e.isFixed,b=u.x,v=void 0===b?0:b,y=u.y,w=void 0===y?0:y,x="function"==typeof h?h({x:v,y:w}):{x:v,y:w}
v=x.x,w=x.y
var k=u.hasOwnProperty("x"),O=u.hasOwnProperty("y"),A=o,E=a,T=window
if(m){var N=q(n),S="clientHeight",C="clientWidth"
N===P(n)&&"static"!==H(N=Y(n)).position&&"absolute"===d&&(S="scrollHeight",C="scrollWidth"),(c===a||(c===o||c===i)&&l===f)&&(E=r,w-=(g&&N===T&&T.visualViewport?T.visualViewport.height:N[S])-s.height,w*=p?1:-1),c!==o&&(c!==a&&c!==r||l!==f)||(A=i,v-=(g&&N===T&&T.visualViewport?T.visualViewport.width:N[C])-s.width,v*=p?1:-1)}var j,D=Object.assign({position:d},m&&ee),M=!0===h?function(e,t){var n=e.x,a=e.y,r=t.devicePixelRatio||1
return{x:L(n*r)/r||0,y:L(a*r)/r||0}}({x:v,y:w},P(n)):{x:v,y:w}
return v=M.x,w=M.y,p?Object.assign({},D,((j={})[E]=O?"0":"",j[A]=k?"0":"",j.transform=(T.devicePixelRatio||1)<=1?"translate("+v+"px, "+w+"px)":"translate3d("+v+"px, "+w+"px, 0)",j)):Object.assign({},D,((t={})[E]=O?w+"px":"",t[A]=k?v+"px":"",t.transform="",t))}const ne={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,a=n.gpuAcceleration,r=void 0===a||a,i=n.adaptive,o=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,l={placement:M(t.placement),variation:J(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy}
null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,te(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,te(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}
var ae={passive:!0}
const re={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,a=e.options,r=a.scroll,i=void 0===r||r,o=a.resize,s=void 0===o||o,c=P(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper)
return i&&l.forEach((function(e){e.addEventListener("scroll",n.update,ae)})),s&&c.addEventListener("resize",n.update,ae),function(){i&&l.forEach((function(e){e.removeEventListener("scroll",n.update,ae)})),s&&c.removeEventListener("resize",n.update,ae)}},data:{}}
var ie={left:"right",right:"left",bottom:"top",top:"bottom"}
function oe(e){return e.replace(/left|right|bottom|top/g,(function(e){return ie[e]}))}var se={start:"end",end:"start"}
function ce(e){return e.replace(/start|end/g,(function(e){return se[e]}))}function le(e){var t=P(e)
return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function fe(e){return _(Y(e)).left+le(e).scrollLeft}function ue(e){var t=H(e),n=t.overflow,a=t.overflowX,r=t.overflowY
return/auto|scroll|overlay|hidden/.test(n+r+a)}function de(e){return["html","body","#document"].indexOf(N(e))>=0?e.ownerDocument.body:C(e)&&ue(e)?e:de($(e))}function pe(e,t){var n
void 0===t&&(t=[])
var a=de(e),r=a===(null==(n=e.ownerDocument)?void 0:n.body),i=P(a),o=r?[i].concat(i.visualViewport||[],ue(a)?a:[]):a,s=t.concat(o)
return r?s:s.concat(pe($(o)))}function me(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function he(e,t,n){return t===d?me(function(e,t){var n=P(e),a=Y(e),r=n.visualViewport,i=a.clientWidth,o=a.clientHeight,s=0,c=0
if(r){i=r.width,o=r.height
var l=I();(l||!l&&"fixed"===t)&&(s=r.offsetLeft,c=r.offsetTop)}return{width:i,height:o,x:s+fe(e),y:c}}(e,n)):S(t)?function(e,t){var n=_(e,!1,"fixed"===t)
return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):me(function(e){var t,n=Y(e),a=le(e),r=null==(t=e.ownerDocument)?void 0:t.body,i=F(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=F(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-a.scrollLeft+fe(e),c=-a.scrollTop
return"rtl"===H(r||n).direction&&(s+=F(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:o,x:s,y:c}}(Y(e)))}function ge(e){var t,n=e.reference,s=e.element,c=e.placement,u=c?M(c):null,d=c?J(c):null,p=n.x+n.width/2-s.width/2,m=n.y+n.height/2-s.height/2
switch(u){case a:t={x:p,y:n.y-s.height}
break
case r:t={x:p,y:n.y+n.height}
break
case i:t={x:n.x+n.width,y:m}
break
case o:t={x:n.x-s.width,y:m}
break
default:t={x:n.x,y:n.y}}var h=u?V(u):null
if(null!=h){var g="y"===h?"height":"width"
switch(d){case l:t[h]=t[h]-(n[g]/2-s[g]/2)
break
case f:t[h]=t[h]+(n[g]/2-s[g]/2)}}return t}function be(e,t){void 0===t&&(t={})
var n=t,o=n.placement,s=void 0===o?e.placement:o,l=n.strategy,f=void 0===l?e.strategy:l,h=n.boundary,g=void 0===h?u:h,b=n.rootBoundary,v=void 0===b?d:b,y=n.elementContext,w=void 0===y?p:y,x=n.altBoundary,k=void 0!==x&&x,O=n.padding,A=void 0===O?0:O,E=K("number"!=typeof A?A:Z(A,c)),T=w===p?m:p,P=e.rects.popper,j=e.elements[k?T:w],D=function(e,t,n,a){var r="clippingParents"===t?function(e){var t=pe($(e)),n=["absolute","fixed"].indexOf(H(e).position)>=0&&C(e)?q(e):e
return S(n)?t.filter((function(e){return S(e)&&B(e,n)&&"body"!==N(e)})):[]}(e):[].concat(t),i=[].concat(r,[n]),o=i[0],s=i.reduce((function(t,n){var r=he(e,n,a)
return t.top=F(r.top,t.top),t.right=R(r.right,t.right),t.bottom=R(r.bottom,t.bottom),t.left=F(r.left,t.left),t}),he(e,o,a))
return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(S(j)?j:j.contextElement||Y(e.elements.popper),g,v,f),M=_(e.elements.reference),L=ge({reference:M,element:P,strategy:"absolute",placement:s}),z=me(Object.assign({},P,L)),I=w===p?z:M,W={top:D.top-I.top+E.top,bottom:I.bottom-D.bottom+E.bottom,left:D.left-I.left+E.left,right:I.right-D.right+E.right},U=e.modifiersData.offset
if(w===p&&U){var G=U[s]
Object.keys(W).forEach((function(e){var t=[i,r].indexOf(e)>=0?1:-1,n=[a,r].indexOf(e)>=0?"y":"x"
W[e]+=G[n]*t}))}return W}const ve={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,f=e.name
if(!t.modifiersData[f]._skip){for(var u=n.mainAxis,d=void 0===u||u,p=n.altAxis,m=void 0===p||p,b=n.fallbackPlacements,v=n.padding,y=n.boundary,w=n.rootBoundary,x=n.altBoundary,k=n.flipVariations,O=void 0===k||k,A=n.allowedAutoPlacements,E=t.options.placement,T=M(E),N=b||(T!==E&&O?function(e){if(M(e)===s)return[]
var t=oe(e)
return[ce(e),t,ce(t)]}(E):[oe(E)]),P=[E].concat(N).reduce((function(e,n){return e.concat(M(n)===s?function(e,t){void 0===t&&(t={})
var n=t,a=n.placement,r=n.boundary,i=n.rootBoundary,o=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,f=void 0===l?g:l,u=J(a),d=u?s?h:h.filter((function(e){return J(e)===u})):c,p=d.filter((function(e){return f.indexOf(e)>=0}))
0===p.length&&(p=d)
var m=p.reduce((function(t,n){return t[n]=be(e,{placement:n,boundary:r,rootBoundary:i,padding:o})[M(n)],t}),{})
return Object.keys(m).sort((function(e,t){return m[e]-m[t]}))}(t,{placement:n,boundary:y,rootBoundary:w,padding:v,flipVariations:O,allowedAutoPlacements:A}):n)}),[]),S=t.rects.reference,C=t.rects.popper,j=new Map,D=!0,F=P[0],R=0;R<P.length;R++){var L=P[R],z=M(L),I=J(L)===l,_=[a,r].indexOf(z)>=0,W=_?"width":"height",B=be(t,{placement:L,boundary:y,rootBoundary:w,altBoundary:x,padding:v}),H=_?I?i:o:I?r:a
S[W]>C[W]&&(H=oe(H))
var U=oe(H),Y=[]
if(d&&Y.push(B[z]<=0),m&&Y.push(B[H]<=0,B[U]<=0),Y.every((function(e){return e}))){F=L,D=!1
break}j.set(L,Y)}if(D)for(var $=function(e){var t=P.find((function(t){var n=j.get(t)
if(n)return n.slice(0,e).every((function(e){return e}))}))
if(t)return F=t,"break"},G=O?3:1;G>0&&"break"!==$(G);G--);t.placement!==F&&(t.modifiersData[f]._skip=!0,t.placement=F,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}
function ye(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function we(e){return[a,i,r,o].some((function(t){return e[t]>=0}))}const xe={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,a=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,o=be(t,{elementContext:"reference"}),s=be(t,{altBoundary:!0}),c=ye(o,a),l=ye(s,r,i),f=we(c),u=we(l)
t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":u})}},ke={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,s=n.offset,c=void 0===s?[0,0]:s,l=g.reduce((function(e,n){return e[n]=function(e,t,n){var r=M(e),s=[o,a].indexOf(r)>=0?-1:1,c="function"==typeof n?n(Object.assign({},t,{placement:e})):n,l=c[0],f=c[1]
return l=l||0,f=(f||0)*s,[o,i].indexOf(r)>=0?{x:f,y:l}:{x:l,y:f}}(n,t.rects,c),e}),{}),f=l[t.placement],u=f.x,d=f.y
null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=d),t.modifiersData[r]=l}},Oe={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name
t.modifiersData[n]=ge({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},Ae={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,s=e.name,c=n.mainAxis,f=void 0===c||c,u=n.altAxis,d=void 0!==u&&u,p=n.boundary,m=n.rootBoundary,h=n.altBoundary,g=n.padding,b=n.tether,v=void 0===b||b,y=n.tetherOffset,w=void 0===y?0:y,x=be(t,{boundary:p,rootBoundary:m,padding:g,altBoundary:h}),k=M(t.placement),O=J(t.placement),A=!O,E=V(k),T="x"===E?"y":"x",N=t.modifiersData.popperOffsets,P=t.rects.reference,S=t.rects.popper,C="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,j="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0}
if(N){if(f){var z,I="y"===E?a:o,_="y"===E?r:i,B="y"===E?"height":"width",H=N[E],U=H+x[I],Y=H-x[_],$=v?-S[B]/2:0,G=O===l?P[B]:S[B],K=O===l?-S[B]:-P[B],Z=t.elements.arrow,Q=v&&Z?W(Z):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[I],ne=ee[_],ae=X(0,P[B],Q[B]),re=A?P[B]/2-$-ae-te-j.mainAxis:G-ae-te-j.mainAxis,ie=A?-P[B]/2+$+ae+ne+j.mainAxis:K+ae+ne+j.mainAxis,oe=t.elements.arrow&&q(t.elements.arrow),se=oe?"y"===E?oe.clientTop||0:oe.clientLeft||0:0,ce=null!=(z=null==D?void 0:D[E])?z:0,le=H+ie-ce,fe=X(v?R(U,H+re-ce-se):U,H,v?F(Y,le):Y)
N[E]=fe,L[E]=fe-H}if(d){var ue,de="x"===E?a:o,pe="x"===E?r:i,me=N[T],he="y"===T?"height":"width",ge=me+x[de],ve=me-x[pe],ye=-1!==[a,o].indexOf(k),we=null!=(ue=null==D?void 0:D[T])?ue:0,xe=ye?ge:me-P[he]-S[he]-we+j.altAxis,ke=ye?me+P[he]+S[he]-we-j.altAxis:ve,Oe=v&&ye?function(e,t,n){var a=X(e,t,n)
return a>n?n:a}(xe,me,ke):X(v?xe:ge,me,v?ke:ve)
N[T]=Oe,L[T]=Oe-me}t.modifiersData[s]=L}},requiresIfExists:["offset"]}
function Ee(e,t,n){void 0===n&&(n=!1)
var a,r,i=C(t),o=C(t)&&function(e){var t=e.getBoundingClientRect(),n=L(t.width)/e.offsetWidth||1,a=L(t.height)/e.offsetHeight||1
return 1!==n||1!==a}(t),s=Y(t),c=_(e,o,n),l={scrollLeft:0,scrollTop:0},f={x:0,y:0}
return(i||!i&&!n)&&(("body"!==N(t)||ue(s))&&(l=(a=t)!==P(a)&&C(a)?{scrollLeft:(r=a).scrollLeft,scrollTop:r.scrollTop}:le(a)),C(t)?((f=_(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):s&&(f.x=fe(s))),{x:c.left+l.scrollLeft-f.x,y:c.top+l.scrollTop-f.y,width:c.width,height:c.height}}function Te(e){var t=new Map,n=new Set,a=[]
function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var a=t.get(e)
a&&r(a)}})),a.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),a}var Ne={placement:"bottom",modifiers:[],strategy:"absolute"}
function Pe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Se(e){void 0===e&&(e={})
var t=e,n=t.defaultModifiers,a=void 0===n?[]:n,r=t.defaultOptions,i=void 0===r?Ne:r
return function(e,t,n){void 0===n&&(n=i)
var r,o,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ne,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,f={state:s,setOptions:function(n){var r="function"==typeof n?n(s.options):n
u(),s.options=Object.assign({},i,s.options,r),s.scrollParents={reference:S(e)?pe(e):e.contextElement?pe(e.contextElement):[],popper:pe(t)}
var o,l,d=function(e){var t=Te(e)
return T.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((o=[].concat(a,s.options.modifiers),l=o.reduce((function(e,t){var n=e[t.name]
return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(l).map((function(e){return l[e]}))))
return s.orderedModifiers=d.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,a=void 0===n?{}:n,r=e.effect
if("function"==typeof r){var i=r({state:s,name:t,instance:f,options:a})
c.push(i||function(){})}})),f.update()},forceUpdate:function(){if(!l){var e=s.elements,t=e.reference,n=e.popper
if(Pe(t,n)){s.rects={reference:Ee(t,q(n),"fixed"===s.options.strategy),popper:W(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}))
for(var a=0;a<s.orderedModifiers.length;a++)if(!0!==s.reset){var r=s.orderedModifiers[a],i=r.fn,o=r.options,c=void 0===o?{}:o,u=r.name
"function"==typeof i&&(s=i({state:s,options:c,name:u,instance:f})||s)}else s.reset=!1,a=-1}}},update:(r=function(){return new Promise((function(e){f.forceUpdate(),e(s)}))},function(){return o||(o=new Promise((function(e){Promise.resolve().then((function(){o=void 0,e(r())}))}))),o}),destroy:function(){u(),l=!0}}
if(!Pe(e,t))return f
function u(){c.forEach((function(e){return e()})),c=[]}return f.setOptions(n).then((function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var Ce=Se(),je=Se({defaultModifiers:[re,Oe,ne,D,ke,ve,Ae,Q,xe]}),De=Se({defaultModifiers:[re,Oe,ne,D]})},929:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u})
var a=n(663),r=n.n(a),i=n(336),o=n.n(i),s=n(603),c=n(630)
function l(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||null===e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(){}class u extends(o()){constructor(...e){super(...e),l(this,"tagName",f),l(this,"componentClass",void 0)}compute(e,t){(0,s.assert)("The `element` helper takes a single positional argument",1===e.length),(0,s.assert)("The `element` helper does not take any named arguments",0===Object.keys(t).length)
let n=e[0]
return n!==this.tagName&&(this.tagName=n,"string"==typeof n?this.componentClass=(0,c.ensureSafeComponent)(class extends(r()){constructor(...e){super(...e),l(this,"tagName",n)}},this):(this.componentClass=void 0,(0,s.runInDebug)((()=>{let e="The argument passed to the `element` helper must be a string"
try{e+=` (you passed \`${n}\`)`}catch(e){}(0,s.assert)(e,null==n)})))),this.componentClass}}},343:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F})
var a=n(377),r=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],i=r.join(","),o="undefined"==typeof Element,s=o?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=!o&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},l=function(e,t,n){var a=Array.prototype.slice.apply(e.querySelectorAll(i))
return t&&s.call(e,i)&&a.unshift(e),a.filter(n)},f=function e(t,n,a){for(var r=[],o=Array.from(t);o.length;){var c=o.shift()
if("SLOT"===c.tagName){var l=c.assignedElements(),f=e(l.length?l:c.children,!0,a)
a.flatten?r.push.apply(r,f):r.push({scope:c,candidates:f})}else{s.call(c,i)&&a.filter(c)&&(n||!t.includes(c))&&r.push(c)
var u=c.shadowRoot||"function"==typeof a.getShadowRoot&&a.getShadowRoot(c),d=!a.shadowRootFilter||a.shadowRootFilter(c)
if(u&&d){var p=e(!0===u?c.children:u.children,!0,a)
a.flatten?r.push.apply(r,p):r.push({scope:c,candidates:p})}else o.unshift.apply(o,c.children)}}return r},u=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},d=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},p=function(e){return"INPUT"===e.tagName},m=function(e){var t=e.getBoundingClientRect(),n=t.width,a=t.height
return 0===n&&0===a},h=function(e,t){return!(t.disabled||function(e){return p(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,a=t.getShadowRoot
if("hidden"===getComputedStyle(e).visibility)return!0
var r=s.call(e,"details>summary:first-of-type")?e.parentElement:e
if(s.call(r,"details:not([open]) *"))return!0
var i=c(e).host,o=(null==i?void 0:i.ownerDocument.contains(i))||e.ownerDocument.contains(e)
if(n&&"full"!==n){if("non-zero-area"===n)return m(e)}else{if("function"==typeof a){for(var l=e;e;){var f=e.parentElement,u=c(e)
if(f&&!f.shadowRoot&&!0===a(f))return m(e)
e=e.assignedSlot?e.assignedSlot:f||u===e.ownerDocument?f:u.host}e=l}if(o)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var a=t.children.item(n)
if("LEGEND"===a.tagName)return!!s.call(t,"fieldset[disabled] *")||!a.contains(e)}return!0}t=t.parentElement}return!1}(t))},g=function(e,t){return!(function(e){return function(e){return p(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0
var t,n=e.form||c(e),a=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=a(window.CSS.escape(e.name))
else try{t=a(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var r=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form)
return!r||r===e}(e)}(t)||u(t)<0||!h(e,t))},b=function(e){var t=parseInt(e.getAttribute("tabindex"),10)
return!!(isNaN(t)||t>=0)},v=function e(t){var n=[],a=[]
return t.forEach((function(t,r){var i=!!t.scope,o=i?t.scope:t,s=u(o,i),c=i?e(t.candidates):o
0===s?i?n.push.apply(n,c):n.push(o):a.push({documentOrder:r,tabIndex:s,item:t,isScope:i,content:c})})),a.sort(d).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},y=function(e,t){var n
return n=(t=t||{}).getShadowRoot?f([e],t.includeContainer,{filter:g.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:b}):l(e,t.includeContainer,g.bind(null,t)),v(n)},w=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==s.call(e,i)&&g(t,e)},x=r.concat("iframe").join(","),k=function(e,t){if(t=t||{},!e)throw new Error("No node provided")
return!1!==s.call(e,x)&&h(t,e)}
function O(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?O(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T,N=(T=[],{activateTrap:function(e){if(T.length>0){var t=T[T.length-1]
t!==e&&t.pause()}var n=T.indexOf(e);-1===n||T.splice(n,1),T.push(e)},deactivateTrap:function(e){var t=T.indexOf(e);-1!==t&&T.splice(t,1),T.length>0&&T[T.length-1].unpause()}}),P=function(e){return setTimeout(e,0)},S=function(e,t){var n=-1
return e.every((function(e,a){return!t(e)||(n=a,!1)})),n},C=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a]
return"function"==typeof e?e.apply(void 0,n):e},j=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},D=function(e,t){var n,a=(null==t?void 0:t.document)||document,r=A({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),i={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},o=function(e,t,n){return e&&void 0!==e[t]?e[t]:r[n||t]},s=function(e){return i.containerGroups.findIndex((function(t){var n=t.container,a=t.tabbableNodes
return n.contains(e)||a.find((function(t){return t===e}))}))},c=function(e){var t=r[e]
if("function"==typeof t){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o]
t=t.apply(void 0,i)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t
throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var s=t
if("string"==typeof t&&!(s=a.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"))
return s},u=function(){var e=c("initialFocus")
if(!1===e)return!1
if(void 0===e)if(s(a.activeElement)>=0)e=a.activeElement
else{var t=i.tabbableGroups[0]
e=t&&t.firstTabbableNode||c("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element")
return e},d=function(){if(i.containerGroups=i.containers.map((function(e){var t,n,a=y(e,r.tabbableOptions),i=(t=e,(n=(n=r.tabbableOptions)||{}).getShadowRoot?f([t],n.includeContainer,{filter:h.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):l(t,n.includeContainer,h.bind(null,n)))
return{container:e,tabbableNodes:a,focusableNodes:i,firstTabbableNode:a.length>0?a[0]:null,lastTabbableNode:a.length>0?a[a.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=i.findIndex((function(t){return t===e}))
if(!(n<0))return t?i.slice(n+1).find((function(e){return w(e,r.tabbableOptions)})):i.slice(0,n).reverse().find((function(e){return w(e,r.tabbableOptions)}))}}})),i.tabbableGroups=i.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),i.tabbableGroups.length<=0&&!c("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},p=function e(t){!1!==t&&t!==a.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!r.preventScroll}),i.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(u()))},m=function(e){var t=c("setReturnFocus",e)
return t||!1!==t&&e},g=function(e){var t=j(e)
s(t)>=0||(C(r.clickOutsideDeactivates,e)?n.deactivate({returnFocus:r.returnFocusOnDeactivate&&!k(t,r.tabbableOptions)}):C(r.allowOutsideClick,e)||e.preventDefault())},b=function(e){var t=j(e),n=s(t)>=0
n||t instanceof Document?n&&(i.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),p(i.mostRecentlyFocusedNode||u()))},v=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==C(r.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=j(e)
d()
var n=null
if(i.tabbableGroups.length>0){var a=s(t),o=a>=0?i.containerGroups[a]:void 0
if(a<0)n=e.shiftKey?i.tabbableGroups[i.tabbableGroups.length-1].lastTabbableNode:i.tabbableGroups[0].firstTabbableNode
else if(e.shiftKey){var l=S(i.tabbableGroups,(function(e){var n=e.firstTabbableNode
return t===n}))
if(l<0&&(o.container===t||k(t,r.tabbableOptions)&&!w(t,r.tabbableOptions)&&!o.nextTabbableNode(t,!1))&&(l=a),l>=0){var f=0===l?i.tabbableGroups.length-1:l-1
n=i.tabbableGroups[f].lastTabbableNode}}else{var u=S(i.tabbableGroups,(function(e){var n=e.lastTabbableNode
return t===n}))
if(u<0&&(o.container===t||k(t,r.tabbableOptions)&&!w(t,r.tabbableOptions)&&!o.nextTabbableNode(t))&&(u=a),u>=0){var m=u===i.tabbableGroups.length-1?0:u+1
n=i.tabbableGroups[m].firstTabbableNode}}}else n=c("fallbackFocus")
n&&(e.preventDefault(),p(n))}(e)},x=function(e){var t=j(e)
s(t)>=0||C(r.clickOutsideDeactivates,e)||C(r.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},O=function(){if(i.active)return N.activateTrap(n),i.delayInitialFocusTimer=r.delayInitialFocus?P((function(){p(u())})):p(u()),a.addEventListener("focusin",b,!0),a.addEventListener("mousedown",g,{capture:!0,passive:!1}),a.addEventListener("touchstart",g,{capture:!0,passive:!1}),a.addEventListener("click",x,{capture:!0,passive:!1}),a.addEventListener("keydown",v,{capture:!0,passive:!1}),n},E=function(){if(i.active)return a.removeEventListener("focusin",b,!0),a.removeEventListener("mousedown",g,!0),a.removeEventListener("touchstart",g,!0),a.removeEventListener("click",x,!0),a.removeEventListener("keydown",v,!0),n}
return(n={get active(){return i.active},get paused(){return i.paused},activate:function(e){if(i.active)return this
var t=o(e,"onActivate"),n=o(e,"onPostActivate"),r=o(e,"checkCanFocusTrap")
r||d(),i.active=!0,i.paused=!1,i.nodeFocusedBeforeActivation=a.activeElement,t&&t()
var s=function(){r&&d(),O(),n&&n()}
return r?(r(i.containers.concat()).then(s,s),this):(s(),this)},deactivate:function(e){if(!i.active)return this
var t=A({onDeactivate:r.onDeactivate,onPostDeactivate:r.onPostDeactivate,checkCanReturnFocus:r.checkCanReturnFocus},e)
clearTimeout(i.delayInitialFocusTimer),i.delayInitialFocusTimer=void 0,E(),i.active=!1,i.paused=!1,N.deactivateTrap(n)
var a=o(t,"onDeactivate"),s=o(t,"onPostDeactivate"),c=o(t,"checkCanReturnFocus"),l=o(t,"returnFocus","returnFocusOnDeactivate")
a&&a()
var f=function(){P((function(){l&&p(m(i.nodeFocusedBeforeActivation)),s&&s()}))}
return l&&c?(c(m(i.nodeFocusedBeforeActivation)).then(f,f),this):(f(),this)},pause:function(){return i.paused||!i.active||(i.paused=!0,E()),this},unpause:function(){return i.paused&&i.active?(i.paused=!1,d(),O(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean)
return i.containers=t.map((function(e){return"string"==typeof e?a.querySelector(e):e})),i.active&&d(),this}}).updateContainerElements(e),n}
let M
try{M=(0,a.capabilities)("3.22")}catch{M=(0,a.capabilities)("3.13")}var F=(0,a.setModifierManager)((()=>({capabilities:M,createModifier:()=>({focusTrapOptions:void 0,isActive:!0,isPaused:!1,shouldSelfFocus:!1,focusTrap:void 0}),installModifier(e,t,{named:{isActive:n,isPaused:a,shouldSelfFocus:r,focusTrapOptions:i,additionalElements:o,_createFocusTrap:s}}){e.focusTrapOptions={...i}||{},void 0!==n&&(e.isActive=n),void 0!==a&&(e.isPaused=a),e.focusTrapOptions&&void 0===e.focusTrapOptions.initialFocus&&r&&(e.focusTrapOptions.initialFocus=t)
let c=D
s&&(c=s),!1!==e.focusTrapOptions.returnFocusOnDeactivate&&(e.focusTrapOptions.returnFocusOnDeactivate=!0),e.focusTrap=c(void 0!==o?[t,...o]:t,e.focusTrapOptions),e.isActive&&e.focusTrap.activate(),e.isPaused&&e.focusTrap.pause()},updateModifier(e,{named:t}){const n=t.focusTrapOptions||{}
if(e.isActive&&!t.isActive){const{returnFocusOnDeactivate:t}=n,a=void 0===t
e.focusTrap.deactivate({returnFocus:a})}else!e.isActive&&t.isActive&&e.focusTrap.activate()
e.isPaused&&!t.isPaused?e.focusTrap.unpause():!e.isPaused&&t.isPaused&&e.focusTrap.pause(),e.focusTrapOptions=n,void 0!==t.isActive&&(e.isActive=t.isActive),void 0!==t.isPaused&&(e.isPaused=t.isPaused)},destroyModifier({focusTrap:e}){e.deactivate()}})),class{})},119:(e,t,n)=>{n.r(t),n.d(t,{_setRegisteredPollers:()=>v,_setRegisteredTimers:()=>c,cancelDebounce:()=>N,cancelPoll:()=>A,cancelTask:()=>f,debounceTask:()=>T,getTimeoutOrTestFallback:()=>P,pollTask:()=>O,runTask:()=>u,scheduleTask:()=>p,setShouldPoll:()=>x,throttleTask:()=>m})
var a=n(223),r=n(130)
function i(e,t,n){let a,r=typeof t
if("function"===r)a=t
else{if("string"!==r)throw new TypeError(`You must pass a task function or method name to '${n}'.`)
if(a=e[t],"function"!=typeof a)throw new TypeError(`The method name '${t}' passed to ${n} does not resolve to a valid function.`)}return a}const o=-1
let s=new WeakMap
function c(e){s=e}function l(e){let t=s.get(e)
return t||(t=new Set,s.set(e,t),(0,r.registerDestructor)(e,function(e,t){return function(){t.forEach((t=>{f(e,t)})),t.clear()}}(e,t))),t}function f(e,t){l(e).delete(t),(0,a.cancel)(t)}function u(e,t,n=0){if((0,r.isDestroying)(e))return o
let s=i(e,t,"runTask"),c=l(e),f=(0,a.later)((()=>{c.delete(f),s.call(e)}),n)
return c.add(f),f}var d=n(603)
function p(e,t,n,...s){if((0,d.assert)(`Called \`scheduleTask\` without a string as the first argument on ${e}.`,"string"==typeof t),(0,d.assert)(`Called \`scheduleTask\` while trying to schedule to the \`afterRender\` queue on ${e}.`,"afterRender"!==t),(0,r.isDestroying)(e))return o
let c,f=i(e,n,"scheduleTask"),u=l(e)
return c=(0,a.schedule)(t,e,((...t)=>{u.delete(c),f.call(e,...t)}),...s),u.add(c),c}function m(e,t,...n){if((0,d.assert)(`Called \`throttleTask\` without a string as the first argument on ${e}.`,"string"==typeof t),(0,d.assert)(`Called \`throttleTask('${t}')\` where '${t}' is not a function.`,"function"==typeof e[t]),(0,r.isDestroying)(e))return o
const i=n[n.length-1],s="boolean"==typeof i?n[n.length-2]:i;(0,d.assert)(`Called \`throttleTask\` with incorrect \`spacing\` argument. Expected Number and received \`${s}\``,"number"==typeof s)
let c=l(e),f=(0,a.throttle)(e,t,...n)
return c.add(f),f}var h=n(211),g=n.n(h)
let b=new WeakMap
function v(e){b=e}let y,w=0
function x(e){y=e}function k(){let e=Symbol.for("LIFELINE_QUEUED_POLL_TASKS"),t=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if("undefined"!=typeof global)return global
throw new Error("unable to locate global object")}(),n=t[e]
return n||(n=t[e]=new Map),n}function O(e,t,n=function(){return w++}()){let a,o=i(e,t,"pollTask"),s=()=>o.call(e,a),c=b.get(e)
return c||(c=new Set,b.set(e,c),(0,r.registerDestructor)(e,function(e,t){return function(){t.forEach((t=>{A(e,t)}))}}(e,c))),c.add(n),a=(y?y():!g().testing)?s:()=>{k().set(n,s)},o.call(e,a),n}function A(e,t){let n,a=b.get(e)
n=t,void 0!==a&&a.delete(n),k().delete(n)}const E=new WeakMap
function T(e,t,...n){if((0,d.assert)(`Called \`debounceTask\` without a string as the first argument on ${e}.`,"string"==typeof t),(0,d.assert)(`Called \`destroyable.debounceTask('${t}', ...)\` where 'destroyable.${t}' is not a function.`,"function"==typeof e[t]),e.isDestroying)return
const i=n[n.length-1],o="boolean"==typeof i?n[n.length-2]:i;(0,d.assert)(`Called \`debounceTask\` with incorrect \`spacing\` argument. Expected Number and received \`${o}\``,"number"==typeof o)
let s=E.get(e)
var c
let l
s||(s=new Map,E.set(e,s),(0,r.registerDestructor)(e,(c=s,function(){0!==c.size&&c.forEach((e=>(0,a.cancel)(e.cancelId)))}))),l=s.has(t)?s.get(t).debouncedTask:(...n)=>{s.delete(t),e[t](...n)}
let f=(0,a.debounce)(e,l,...n)
s.set(t,{debouncedTask:l,cancelId:f})}function N(e,t){if(!E.has(e))return
const n=E.get(e)
if(!n.has(t))return
const{cancelId:r}=n.get(t)
n.delete(t),(0,a.cancel)(r)}function P(e,{timeout:t,scaling:n=100}={scaling:100}){return g().testing?void 0!==t?t:e/n:e}},853:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c,modifier:()=>f})
var a=n(294),r=n(377),i=n(130)
function o(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class s{constructor(e){o(this,"capabilities",(0,r.capabilities)("3.22")),this.owner=e}createModifier(e,t){return{instance:new e(this.owner,t),element:null}}installModifier(e,t,n){const a=function(e,t){const n=e
return n.element=t,n}(e,t)
a.instance.modify(t,n.positional,n.named)}updateModifier(e,t){e.instance.modify(e.element,t.positional,t.named)}destroyModifier({instance:e}){(0,i.destroy)(e)}}class c{constructor(e,t){(0,a.setOwner)(this,e)}modify(e,t,n){}}(0,r.setModifierManager)((e=>new s(e)),c)
const l=new class{constructor(){o(this,"capabilities",(0,r.capabilities)("3.22"))}createModifier(e){return{element:null,instance:e}}installModifier(e,t,n){const a=function(e,t){const n=e
return n.element=t,n}(e,t),{positional:r,named:i}=n,o=e.instance(t,r,i)
"function"==typeof o&&(a.teardown=o)}updateModifier(e,t){"function"==typeof e.teardown&&e.teardown()
const n=e.instance(e.element,t.positional,t.named)
"function"==typeof n&&(e.teardown=n)}destroyModifier(e){"function"==typeof e.teardown&&e.teardown()}getDebugName(e){return e.instance.toString()}getDebugInstance(e){return e}}
function f(e,t){return e.toString=()=>t?.name||e.name,(0,r.setModifierManager)((()=>l),e)}},81:(e,t,n)=>{function a(e,t,n){return(t="symbol"==typeof(a=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?a:String(a))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e
var a}function r(e,t,n,a){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(a):void 0})}function i(e,t,n,a,r){var i={}
return Object.keys(a).forEach((function(e){i[e]=a[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,a){return a(e,t,n)||n}),i),r&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(r):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}n.d(t,{_:()=>i,a:()=>r,b:()=>a})},266:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u})
var a,r,i,o=n(81),s=n(735),c=n(336),l=n.n(c),f=n(666)
let u=(a=(0,s.inject)("page-title"),r=class extends(l()){constructor(e){super(e),(0,o.a)(this,"tokens",i,this),(0,o.b)(this,"tokenId",(0,f.guidFor)(this)),this.tokens.push({id:this.tokenId})}compute(e,t){const n={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(n),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},i=(0,o._)(r.prototype,"tokens",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r)},299:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b})
var a,r,i,o,s,c=n(81),l=n(223),f=n(735),u=n.n(f),d=n(553),p=n(603)
const m="undefined"!=typeof FastBoot,h="routeDidChange",g=["separator","prepend","replace"]
let b=(a=(0,f.inject)("router"),r=(0,f.inject)("-document"),i=class extends(u()){constructor(e){if(super(e),(0,c.a)(this,"router",o,this),(0,c.a)(this,"document",s,this),(0,c.b)(this,"tokens",[]),(0,c.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,c.b)(this,"scheduleTitleUpdate",(()=>{(0,l.scheduleOnce)("afterRender",this,this._updateTitle)})),this._validateExistingTitleElement(),function(e){return"resolveRegistration"in e}(e)){const n=e.resolveRegistration("config:environment")
"object"==typeof(t=n)&&null!==t&&"pageTitle"in t&&g.forEach((e=>{if(!(0,d.isEmpty)(n.pageTitle[e])){const t=n.pageTitle[e]
this._defaultConfig[e]=t}}))}var t
this.router.on(h,this.scheduleTitleUpdate)}applyTokenDefaults(e){const t=this._defaultConfig.separator,n=this._defaultConfig.prepend,a=this._defaultConfig.replace
e.previous??=null,e.next??=null,null==e.separator&&(e.separator=t),null==e.prepend&&null!=n&&(e.prepend=n),null==e.replace&&null!=a&&(e.replace=a)}inheritFromPrevious(e){const t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){const t=this._findTokenById(e.id)
if(t){const n=this.tokens.indexOf(t),a=[...this.tokens],r=t.previous
return e.previous=r,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),a.splice(n,1,e),void(this.tokens=a)}const n=this.tokens.slice(-1)[0]
n&&(e.previous=n??null,n.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){const t=this._findTokenById(e)
if(!t)return
const{next:n,previous:a}=t
n&&(n.previous=a),a&&(a.next=n),t.previous=t.next=null
const r=[...this.tokens]
r.splice(r.indexOf(t),1),this.tokens=r}get visibleTokens(){const e=this.tokens
let t=e?e.length:0
const n=[]
for(;t--;){const a=e[t]
if(a){if(a.replace){n.unshift(a)
break}n.unshift(a)}}return n}get sortedTokens(){const e=this.visibleTokens
if(!e)return[]
let t=!0,n=[]
const a=[n],r=[]
return e.forEach((e=>{if(e.front)r.unshift(e)
else if(e.prepend){t&&(t=!1,n=[],a.push(n))
const r=n[0]
r&&((e={...e}).separator=r.separator),n.unshift(e)}else t||(t=!0,n=[],a.push(n)),n.push(e)})),r.concat(a.reduce(((e,t)=>e.concat(t)),[]))}toString(){const e=this.sortedTokens,t=[]
for(let n=0,a=e.length;n<a;n++){const r=e[n]
r&&r.title&&(t.push(r.title),n+1<a&&t.push(r.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(h,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
m?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){m||(0,p.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find((t=>t.id===e))}updateFastbootTitle(e){if(!m)return
const t=this.document.head,n=t.childNodes
for(let i=0;i<n.length;i++){const e=n[i]
e&&"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}const a=this.document.createElement("title"),r=this.document.createTextNode(e)
a.appendChild(r),t.appendChild(a)}titleDidUpdate(e){}},o=(0,c._)(i.prototype,"router",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=(0,c._)(i.prototype,"document",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i)},934:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w})
var a=n(853)
class r{constructor(e,t,n){this.limit=e,this.func=t,this.store=n,this.size=0,this.misses=0,this.hits=0,this.store=n||new Map}get(e){let t=this.store.get(e)
return this.store.has(e)?(this.hits++,this.store.get(e)):(this.misses++,t=this.set(e,this.func(e)),t)}set(e,t){return this.limit>this.size&&(this.size++,this.store.set(e,t)),t}purge(){this.store.clear(),this.size=0,this.hits=0,this.misses=0}}const i=/[ _]/g,o=new r(1e3,(e=>{return(t=e,g.get(t)).replace(i,"-")
var t})),s=/(\-|\_|\.|\s)+(.)?/g,c=/(^|\/)([A-Z])/g,l=(new r(1e3,(e=>e.replace(s,((e,t,n)=>n?n.toUpperCase():"")).replace(c,(e=>e.toLowerCase())))),/^(\-|_)+(.)?/),f=/(.)(\-|\_|\.|\s)+(.)?/g,u=/(^|\/|\.)([a-z])/g,d=(new r(1e3,(e=>{const t=(e,t,n)=>n?`_${n.toUpperCase()}`:"",n=(e,t,n,a)=>t+(a?a.toUpperCase():""),a=e.split("/")
for(let r=0;r<a.length;r++)a[r]=a[r].replace(l,t).replace(f,n)
return a.join("/").replace(u,(e=>e.toUpperCase()))})),/([a-z\d])([A-Z]+)/g),p=/\-|\s+/g,m=(new r(1e3,(e=>e.replace(d,"$1_$2").replace(p,"_").toLowerCase())),/(^|\/)([a-z\u00C0-\u024F])/g),h=(new r(1e3,(e=>e.replace(m,(e=>e.toUpperCase())))),/([a-z\d])([A-Z])/g),g=new r(1e3,(e=>e.replace(h,"$1_$2").toLowerCase()))
var b=n(603),v=n(553)
function y(e){return"object"==typeof e&&Boolean(e)}class w extends a.default{constructor(...e){var t,n,a
super(...e),t=this,n="existingStyles",a=new Set,(n=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(n))in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a}setStyles(e,t){const{existingStyles:n}=this,a=new Set(n)
n.clear(),t.forEach((([t,r])=>{(0,b.assert)(`Your given value for property '${t}' is ${r} (${(0,v.typeOf)(r)}). Accepted types are string and undefined. Please change accordingly.`,void 0===r||"string"===(0,v.typeOf)(r))
let i=""
r&&r.includes("!important")&&(i="important",r=r.replace("!important","")),e.style.setProperty(t,r,i),a.delete(t),n.add(t)})),a.forEach((t=>e.style.removeProperty(t)))}modify(e,t,n){this.setStyles(e,function(e,t){return[...e.filter(y),t].map((e=>Object.entries(e).map((([e,t])=>{return[(n=e,o.get(n)),t]
var n})))).flat()}(t,n))}}},24:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o})
var a=n(336),r=n.n(a),i=n(670)
class o extends(r()){compute(e){for(let t=0,n=e.length;t<n;t++)if(!1===(0,i.A)(e[t]))return e[t]
return e[e.length-1]}}},651:(e,t,n)=>{function a(e,t){return e===t}n.r(t),n.d(t,{default:()=>a})},650:(e,t,n)=>{function a(e,t,n){return n?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>t}n.r(t),n.d(t,{default:()=>a})},379:(e,t,n)=>{function a(e,t,n){return n?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>=t}n.r(t),n.d(t,{default:()=>a})},151:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r})
var a=n(770)
function r(...e){return e.every(a.isArray)}},941:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a.isEmpty})
var a=n(553)},88:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a.isEqual})
var a=n(553)},685:(e,t,n)=>{function a(e,t,n){return n?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<t}n.r(t),n.d(t,{default:()=>a})},230:(e,t,n)=>{function a(e,t,n){return n?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<=t}n.r(t),n.d(t,{default:()=>a})},943:(e,t,n)=>{function a(e,t){return e!==t}n.r(t),n.d(t,{default:()=>a})},692:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r})
var a=n(670)
function r(...e){return e.every((e=>!(0,a.A)(e)))}},588:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o})
var a=n(670),r=n(336),i=n.n(r)
class o extends(i()){compute(e){for(let t=0,n=e.length;t<n;t++)if(!0===(0,a.A)(e[t]))return e[t]
return e[e.length-1]}}},456:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r})
var a=n(670)
function r(e,t){return(0,a.A)(e)!==(0,a.A)(t)}},670:(e,t,n)=>{n.d(t,{A:()=>r})
var a=n(770)
function r(e){return"object"==typeof e&&e&&"isTruthy"in e&&"boolean"==typeof e.isTruthy?e.isTruthy:(0,a.isArray)(e)?0!==e.length:!!e}},742:(e,t,n)=>{n.r(t),n.d(t,{cached:()=>y,dedupeTracked:()=>w,localCopy:()=>b,trackedReset:()=>v})
var a,r,i=n(603),o=n(471),s=n(473),c=n(217)
function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let f=(a=class{constructor(){var e
l(this,"prevRemote",void 0),l(this,"peek",void 0),(e=r)&&Object.defineProperty(this,"value",{enumerable:e.enumerable,configurable:e.configurable,writable:e.writable,value:e.initializer?e.initializer.call(this):void 0})}},u=a.prototype,d="value",p=[s.tracked],m={configurable:!0,enumerable:!0,writable:!0,initializer:null},h={},Object.keys(m).forEach((function(e){h[e]=m[e]})),h.enumerable=!!h.enumerable,h.configurable=!!h.configurable,("value"in h||h.initializer)&&(h.writable=!0),void 0===(h=p.slice().reverse().reduce((function(e,t){return t(u,d,e)||e}),h)).initializer&&(Object.defineProperty(u,d,h),h=null),r=h,a)
var u,d,p,m,h
function g(e,t,n){let a=t.get(e)
return void 0===a&&(a=new f,t.set(e,a),a.value=a.peek="function"==typeof n?n.call(e):n),a}function b(e,t){(0,i.assert)(`@localCopy() must be given a memo path as its first argument, received \`${String(e)}\``,"string"==typeof e)
let n=new WeakMap
return()=>{let a=t=>(0,o.get)(t,e)
return{get(){let e=g(this,n,t),{prevRemote:r}=e,i=a(this)
return r!==i&&(e.value=e.prevRemote=i),e.value},set(e){if(!n.has(this)){let r=g(this,n,t)
return r.prevRemote=a(this),void(r.value=e)}g(this,n,t).value=e}}}}function v(e){(0,i.assert)(`@trackedReset() must be given a memo path, a memo function, or config object with a memo path or function as its first argument, received \`${String(e)}\``,"string"==typeof e||"function"==typeof e||"object"==typeof e&&null!==e&&void 0!==e.memo)
let t=new WeakMap
return(n,a,r)=>{let i,s,c=r.initializer??(()=>{})
"object"==typeof e?(i=e.memo,s=e.update??c):(i=e,s=c)
let l="function"==typeof i?(e,t)=>i.call(e,e,a,t):e=>(0,o.get)(e,i)
return{get(){let e=g(this,t,c),{prevRemote:n}=e,r=l(this,n)
return r!==n&&(e.prevRemote=r,e.value=e.peek=s.call(this,this,a,e.peek)),e.value},set(e){g(this,t,c).value=e}}}}function y(e,t,n){(0,i.assert)("@cached can only be used on getters",n&&n.get)
let{get:a,set:r}=n,o=new WeakMap
return{get(){let e=o.get(this)
return void 0===e&&(e=(0,c.createCache)(a.bind(this)),o.set(this,e)),(0,c.getValue)(e)},set:r}}function w(){let e
const t=function(t,n,a){let{initializer:r}=a,{get:i,set:o}=(0,s.tracked)(t,n,a),c=new WeakMap
return{get(){if(!c.has(this)){let e=r?.call(this)
c.set(this,e),o.call(this,e)}return i.call(this)},set(t){c.has(this)&&e(t,c.get(this))||(c.set(this,t),o.call(this,t))}}}
return 3===arguments.length?(e=(e,t)=>e===t,t(...arguments)):1===arguments.length&&"function"==typeof arguments[0]?(e=arguments[0],t):void(0,i.assert)(`@dedupeTracked() can either be invoked without arguments or with one comparator function, received \`${String(arguments)}\``,!1)}},389:(e,t,n)=>{n.r(t),n.d(t,{api:()=>ct,config:()=>dn,counter:()=>xn,dom:()=>mn,findIconDefinition:()=>gn,icon:()=>vn,layer:()=>yn,library:()=>pn,noAuto:()=>un,parse:()=>hn,text:()=>wn,toHtml:()=>bn})
const a=()=>{}
let r={},i={},o=null,s={mark:a,measure:a}
try{"undefined"!=typeof window&&(r=window),"undefined"!=typeof document&&(i=document),"undefined"!=typeof MutationObserver&&(o=MutationObserver),"undefined"!=typeof performance&&(s=performance)}catch(e){}const{userAgent:c=""}=r.navigator||{},l=r,f=i,u=o,d=s,p=(l.document,!!f.documentElement&&!!f.head&&"function"==typeof f.addEventListener&&"function"==typeof f.createElement),m=~c.indexOf("MSIE")||~c.indexOf("Trident/")
var h="classic",g="duotone",b="sharp",v="sharp-duotone",y=[h,g,b,v],w={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},x=[1,2,3,4,5,6,7,8,9,10],k=x.concat([11,12,13,14,15,16,17,18,19,20]),O={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},A=[...Object.keys({classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]}),"solid","regular","light","thin","duotone","brands","2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",O.GROUP,O.SWAP_OPACITY,O.PRIMARY,O.SECONDARY].concat(x.map((e=>"".concat(e,"x")))).concat(k.map((e=>"w-".concat(e))))
const E="___FONT_AWESOME___",T=16,N="fa",P="svg-inline--fa",S="data-fa-i2svg",C="data-fa-pseudo-element",j="data-fa-pseudo-element-pending",D="data-prefix",M="data-icon",F="fontawesome-i2svg",R="async",L=["HTML","HEAD","STYLE","SCRIPT"],z=(()=>{try{return!0}catch(e){return!1}})(),I=[h,b,v]
function _(e){return new Proxy(e,{get:(e,t)=>t in e?e[t]:e[h]})}const W={...w}
W[h]={...w[h],fak:"kit","fa-kit":"kit",fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}
const B=_(W),H={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}}
H[h]={...H[h],kit:"fak","kit-duotone":"fakd"}
const U=_(H),Y={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}}
Y[h]={...Y[h],fak:"fa-kit"}
const $=_(Y),G={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}}
G[h]={...G[h],"fa-kit":"fak"}
const q=_(G),V=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,X="fa-layers-text",K=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Z=(_({classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}}),["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"]),Q=O,J=new Set
Object.keys(U[h]).map(J.add.bind(J)),Object.keys(U[b]).map(J.add.bind(J)),Object.keys(U[v]).map(J.add.bind(J))
const ee=["kit",...A],te=l.FontAwesomeConfig||{}
f&&"function"==typeof f.querySelector&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((e=>{let[t,n]=e
const a=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=f.querySelector("script["+e+"]")
if(t)return t.getAttribute(e)}(t))
null!=a&&(te[n]=a)}))
const ne={styleDefault:"solid",familyDefault:"classic",cssPrefix:N,replacementClass:P,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0}
te.familyPrefix&&(te.cssPrefix=te.familyPrefix)
const ae={...ne,...te}
ae.autoReplaceSvg||(ae.observeMutations=!1)
const re={}
Object.keys(ne).forEach((e=>{Object.defineProperty(re,e,{enumerable:!0,set:function(t){ae[e]=t,ie.forEach((e=>e(re)))},get:function(){return ae[e]}})})),Object.defineProperty(re,"familyPrefix",{enumerable:!0,set:function(e){ae.cssPrefix=e,ie.forEach((e=>e(re)))},get:function(){return ae.cssPrefix}}),l.FontAwesomeConfig=re
const ie=[],oe=T,se={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1},ce="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
function le(){let e=12,t=""
for(;e-- >0;)t+=ce[62*Math.random()|0]
return t}function fe(e){const t=[]
for(let n=(e||[]).length>>>0;n--;)t[n]=e[n]
return t}function ue(e){return e.classList?fe(e.classList):(e.getAttribute("class")||"").split(" ").filter((e=>e))}function de(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pe(e){return Object.keys(e||{}).reduce(((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";")),"")}function me(e){return e.size!==se.size||e.x!==se.x||e.y!==se.y||e.rotate!==se.rotate||e.flipX||e.flipY}var he=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}'
function ge(){const e=N,t=P,n=re.cssPrefix,a=re.replacementClass
let r=he
if(n!==e||a!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g")
r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let be=!1
function ve(){re.autoAddCss&&!be&&(function(e){if(!e||!p)return
const t=f.createElement("style")
t.setAttribute("type","text/css"),t.innerHTML=e
const n=f.head.childNodes
let a=null
for(let r=n.length-1;r>-1;r--){const e=n[r],t=(e.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(a=e)}f.head.insertBefore(t,a)}(ge()),be=!0)}var ye={mixout:()=>({dom:{css:ge,insertCss:ve}}),hooks:()=>({beforeDOMElementCreation(){ve()},beforeI2svg(){ve()}})}
const we=l||{}
we[E]||(we[E]={}),we[E].styles||(we[E].styles={}),we[E].hooks||(we[E].hooks={}),we[E].shims||(we[E].shims=[])
var xe=we[E]
const ke=[],Oe=function(){f.removeEventListener("DOMContentLoaded",Oe),Ae=1,ke.map((e=>e()))}
let Ae=!1
function Ee(e){const{tag:t,attributes:n={},children:a=[]}=e
return"string"==typeof e?de(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(((t,n)=>t+"".concat(n,'="').concat(de(e[n]),'" ')),"").trim()}(n),">").concat(a.map(Ee).join(""),"</").concat(t,">")}function Te(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}p&&(Ae=(f.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(f.readyState),Ae||f.addEventListener("DOMContentLoaded",Oe))
var Ne=function(e,t,n,a){var r,i,o,s=Object.keys(e),c=s.length,l=void 0!==a?function(e,t){return function(n,a,r,i){return e.call(t,n,a,r,i)}}(t,a):t
for(void 0===n?(r=1,o=e[s[0]]):(r=0,o=n);r<c;r++)o=l(o,e[i=s[r]],i,e)
return o}
function Pe(e){const t=function(e){const t=[]
let n=0
const a=e.length
for(;n<a;){const r=e.charCodeAt(n++)
if(r>=55296&&r<=56319&&n<a){const a=e.charCodeAt(n++)
56320==(64512&a)?t.push(((1023&r)<<10)+(1023&a)+65536):(t.push(r),n--)}else t.push(r)}return t}(e)
return 1===t.length?t[0].toString(16):null}function Se(e){return Object.keys(e).reduce(((t,n)=>{const a=e[n]
return a.icon?t[a.iconName]=a.icon:t[n]=a,t}),{})}function Ce(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const{skipHooks:a=!1}=n,r=Se(t)
"function"!=typeof xe.hooks.addPack||a?xe.styles[e]={...xe.styles[e]||{},...r}:xe.hooks.addPack(e,Se(t)),"fas"===e&&Ce("fa",t)}const{styles:je,shims:De}=xe,Me={[h]:Object.values($[h]),[b]:Object.values($[b]),[v]:Object.values($[v])}
let Fe=null,Re={},Le={},ze={},Ie={},_e={}
const We={[h]:Object.keys(B[h]),[b]:Object.keys(B[b]),[v]:Object.keys(B[v])},Be=()=>{const e=e=>Ne(je,((t,n,a)=>(t[a]=Ne(n,e,{}),t)),{})
Re=e(((e,t,n)=>(t[3]&&(e[t[3]]=n),t[2]&&t[2].filter((e=>"number"==typeof e)).forEach((t=>{e[t.toString(16)]=n})),e))),Le=e(((e,t,n)=>(e[n]=n,t[2]&&t[2].filter((e=>"string"==typeof e)).forEach((t=>{e[t]=n})),e))),_e=e(((e,t,n)=>{const a=t[2]
return e[n]=n,a.forEach((t=>{e[t]=n})),e}))
const t="far"in je||re.autoFetchSvg,n=Ne(De,((e,n)=>{const a=n[0]
let r=n[1]
const i=n[2]
return"far"!==r||t||(r="fas"),"string"==typeof a&&(e.names[a]={prefix:r,iconName:i}),"number"==typeof a&&(e.unicodes[a.toString(16)]={prefix:r,iconName:i}),e}),{names:{},unicodes:{}})
ze=n.names,Ie=n.unicodes,Fe=Ve(re.styleDefault,{family:re.familyDefault})}
var He
function Ue(e,t){return(Re[e]||{})[t]}function Ye(e,t){return(_e[e]||{})[t]}function $e(e){return ze[e]||{prefix:null,iconName:null}}function Ge(){return Fe}He=e=>{Fe=Ve(e.styleDefault,{family:re.familyDefault})},ie.push(He),Be()
const qe=()=>({prefix:null,iconName:null,rest:[]})
function Ve(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{family:n=h}=t,a=B[n][e],r=U[n][e]||U[n][a],i=e in xe.styles?e:null
return r||i||null}const Xe={[h]:Object.keys($[h]),[b]:Object.keys($[b]),[v]:Object.keys($[v])}
function Ke(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{skipLookups:n=!1}=t,a={[h]:"".concat(re.cssPrefix,"-").concat(h),[b]:"".concat(re.cssPrefix,"-").concat(b),[v]:"".concat(re.cssPrefix,"-").concat(v)}
let r=null,i=h
const o=y.filter((e=>e!==g))
o.forEach((t=>{(e.includes(a[t])||e.some((e=>Xe[t].includes(e))))&&(i=t)}))
const s=e.reduce(((e,t)=>{const s=function(e,t){const n=t.split("-"),a=n[0],r=n.slice(1).join("-")
return a!==e||""===r||(i=r,~ee.indexOf(i))?null:r
var i}(re.cssPrefix,t)
if(je[t]?(t=Me[i].includes(t)?q[i][t]:t,r=t,e.prefix=t):We[i].indexOf(t)>-1?(r=t,e.prefix=Ve(t,{family:i})):s?e.iconName=s:t===re.replacementClass||o.some((e=>t===a[e]))||e.rest.push(t),!n&&e.prefix&&e.iconName){const t="fa"===r?$e(e.iconName):{},n=Ye(e.prefix,e.iconName)
t.prefix&&(r=null),e.iconName=t.iconName||n||e.iconName,e.prefix=t.prefix||e.prefix,"far"!==e.prefix||je.far||!je.fas||re.autoFetchSvg||(e.prefix="fas")}return e}),qe())
return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),s.prefix||i!==b||!je.fass&&!re.autoFetchSvg||(s.prefix="fass",s.iconName=Ye(s.prefix,s.iconName)||s.iconName),s.prefix||i!==v||!je.fasds&&!re.autoFetchSvg||(s.prefix="fasds",s.iconName=Ye(s.prefix,s.iconName)||s.iconName),"fa"!==s.prefix&&"fa"!==r||(s.prefix=Ge()||"fas"),s}let Ze=[],Qe={}
const Je={},et=Object.keys(Je)
function tt(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r]
return(Qe[e]||[]).forEach((e=>{t=e.apply(null,[t,...a])})),t}function nt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(Qe[e]||[]).forEach((e=>{e.apply(null,n)}))}function at(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1)
return Je[e]?Je[e].apply(null,t):void 0}function rt(e){"fa"===e.prefix&&(e.prefix="fas")
let{iconName:t}=e
const n=e.prefix||Ge()
if(t)return t=Ye(n,t)||t,Te(it.definitions,n,t)||Te(xe.styles,n,t)}const it=new class{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
const a=t.reduce(this._pullDefinitions,{})
Object.keys(a).forEach((e=>{this.definitions[e]={...this.definitions[e]||{},...a[e]},Ce(e,a[e])
const t=$[h][e]
t&&Ce(t,a[e]),Be()}))}reset(){this.definitions={}}_pullDefinitions(e,t){const n=t.prefix&&t.iconName&&t.icon?{0:t}:t
return Object.keys(n).map((t=>{const{prefix:a,iconName:r,icon:i}=n[t],o=i[2]
e[a]||(e[a]={}),o.length>0&&o.forEach((t=>{"string"==typeof t&&(e[a][t]=i)})),e[a][r]=i})),e}},ot={i2svg:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return p?(nt("beforeI2svg",e),at("pseudoElements2svg",e),at("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const{autoReplaceSvgRoot:t}=e
var n
!1===re.autoReplaceSvg&&(re.autoReplaceSvg=!0),re.observeMutations=!0,n=()=>{lt({autoReplaceSvgRoot:t}),nt("watch",e)},p&&(Ae?setTimeout(n,0):ke.push(n))}},st={icon:e=>{if(null===e)return null
if("object"==typeof e&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ye(e.prefix,e.iconName)||e.iconName}
if(Array.isArray(e)&&2===e.length){const t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],n=Ve(e[0])
return{prefix:n,iconName:Ye(n,t)||t}}if("string"==typeof e&&(e.indexOf("".concat(re.cssPrefix,"-"))>-1||e.match(V))){const t=Ke(e.split(" "),{skipLookups:!0})
return{prefix:t.prefix||Ge(),iconName:Ye(t.prefix,t.iconName)||t.iconName}}if("string"==typeof e){const t=Ge()
return{prefix:t,iconName:Ye(t,e)||e}}}},ct={noAuto:()=>{re.autoReplaceSvg=!1,re.observeMutations=!1,nt("noAuto")},config:re,dom:ot,parse:st,library:it,findIconDefinition:rt,toHtml:Ee},lt=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const{autoReplaceSvgRoot:t=f}=e;(Object.keys(xe.styles).length>0||re.autoFetchSvg)&&p&&re.autoReplaceSvg&&ct.dom.i2svg({node:t})}
function ft(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((e=>Ee(e)))}}),Object.defineProperty(e,"node",{get:function(){if(!p)return
const t=f.createElement("div")
return t.innerHTML=e.html,t.children}}),e}function ut(e){const{icons:{main:t,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:c,titleId:l,extra:f,watchable:u=!1}=e,{width:d,height:p}=n.found?n:t,m="fak"===a,h=[re.replacementClass,r?"".concat(re.cssPrefix,"-").concat(r):""].filter((e=>-1===f.classes.indexOf(e))).filter((e=>""!==e||!!e)).concat(f.classes).join(" ")
let g={children:[],attributes:{...f.attributes,"data-prefix":a,"data-icon":r,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(p)}}
const b=m&&!~f.classes.indexOf("fa-fw")?{width:"".concat(d/p*16*.0625,"em")}:{}
u&&(g.attributes[S]=""),s&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(l||le())},children:[s]}),delete g.attributes.title)
const v={...g,prefix:a,iconName:r,main:t,mask:n,maskId:c,transform:i,symbol:o,styles:{...b,...f.styles}},{children:y,attributes:w}=n.found&&t.found?at("generateAbstractMask",v)||{children:[],attributes:{}}:at("generateAbstractIcon",v)||{children:[],attributes:{}}
return v.children=y,v.attributes=w,o?function(e){let{prefix:t,iconName:n,children:a,attributes:r,symbol:i}=e
return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:!0===i?"".concat(t,"-").concat(re.cssPrefix,"-").concat(n):i},children:a}]}]}(v):function(e){let{children:t,main:n,mask:a,attributes:r,styles:i,transform:o}=e
if(me(o)&&n.found&&!a.found){const{width:e,height:t}=n,a={x:e/t/2,y:.5}
r.style=pe({...i,"transform-origin":"".concat(a.x+o.x/16,"em ").concat(a.y+o.y/16,"em")})}return[{tag:"svg",attributes:r,children:t}]}(v)}function dt(e){const{content:t,width:n,height:a,transform:r,title:i,extra:o,watchable:s=!1}=e,c={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")}
s&&(c[S]="")
const l={...o.styles}
me(r)&&(l.transform=function(e){let{transform:t,width:n=T,height:a=T,startCentered:r=!1}=e,i=""
return i+=r&&m?"translate(".concat(t.x/oe-n/2,"em, ").concat(t.y/oe-a/2,"em) "):r?"translate(calc(-50% + ".concat(t.x/oe,"em), calc(-50% + ").concat(t.y/oe,"em)) "):"translate(".concat(t.x/oe,"em, ").concat(t.y/oe,"em) "),i+="scale(".concat(t.size/oe*(t.flipX?-1:1),", ").concat(t.size/oe*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform)
const f=pe(l)
f.length>0&&(c.style=f)
const u=[]
return u.push({tag:"span",attributes:c,children:[t]}),i&&u.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),u}const{styles:pt}=xe
function mt(e){const t=e[0],n=e[1],[a]=e.slice(4)
let r=null
return r=Array.isArray(a)?{tag:"g",attributes:{class:"".concat(re.cssPrefix,"-").concat(Q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(re.cssPrefix,"-").concat(Q.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(re.cssPrefix,"-").concat(Q.PRIMARY),fill:"currentColor",d:a[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:r}}const ht={found:!1,width:512,height:512}
function gt(e,t){let n=t
return"fa"===t&&null!==re.styleDefault&&(t=Ge()),new Promise(((a,r)=>{if("fa"===n){const n=$e(e)||{}
e=n.iconName||e,t=n.prefix||t}if(e&&t&&pt[t]&&pt[t][e])return a(mt(pt[t][e]))
!function(e,t){z||re.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}(e,t),a({...ht,icon:re.showMissingIcons&&e&&at("missingIconAbstract")||{}})}))}const bt=()=>{},vt=re.measurePerformance&&d&&d.mark&&d.measure?d:{mark:bt,measure:bt},yt='FA "6.6.0"',wt=e=>{vt.mark("".concat(yt," ").concat(e," ends")),vt.measure("".concat(yt," ").concat(e),"".concat(yt," ").concat(e," begins"),"".concat(yt," ").concat(e," ends"))}
var xt={begin:e=>(vt.mark("".concat(yt," ").concat(e," begins")),()=>wt(e)),end:wt}
const kt=()=>{}
function Ot(e){return"string"==typeof(e.getAttribute?e.getAttribute(S):null)}function At(e){return f.createElementNS("http://www.w3.org/2000/svg",e)}function Et(e){return f.createElement(e)}function Tt(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{ceFn:n=("svg"===e.tag?At:Et)}=t
if("string"==typeof e)return f.createTextNode(e)
const a=n(e.tag)
return Object.keys(e.attributes||[]).forEach((function(t){a.setAttribute(t,e.attributes[t])})),(e.children||[]).forEach((function(e){a.appendChild(Tt(e,{ceFn:n}))})),a}const Nt={replace:function(e){const t=e[0]
if(t.parentNode)if(e[1].forEach((e=>{t.parentNode.insertBefore(Tt(e),t)})),null===t.getAttribute(S)&&re.keepOriginalSource){let e=f.createComment(function(e){let t=" ".concat(e.outerHTML," ")
return t="".concat(t,"Font Awesome fontawesome.com "),t}(t))
t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1]
if(~ue(t).indexOf(re.replacementClass))return Nt.replace(e)
const a=new RegExp("".concat(re.cssPrefix,"-.*"))
if(delete n[0].attributes.id,n[0].attributes.class){const e=n[0].attributes.class.split(" ").reduce(((e,t)=>(t===re.replacementClass||t.match(a)?e.toSvg.push(t):e.toNode.push(t),e)),{toNode:[],toSvg:[]})
n[0].attributes.class=e.toSvg.join(" "),0===e.toNode.length?t.removeAttribute("class"):t.setAttribute("class",e.toNode.join(" "))}const r=n.map((e=>Ee(e))).join("\n")
t.setAttribute(S,""),t.innerHTML=r}}
function Pt(e){e()}function St(e,t){const n="function"==typeof t?t:kt
if(0===e.length)n()
else{let t=Pt
re.mutateApproach===R&&(t=l.requestAnimationFrame||Pt),t((()=>{const t=!0===re.autoReplaceSvg?Nt.replace:Nt[re.autoReplaceSvg]||Nt.replace,a=xt.begin("mutate")
e.map(t),a(),n()}))}}let Ct=!1
function jt(){Ct=!0}function Dt(){Ct=!1}let Mt=null
function Ft(e){if(!u)return
if(!re.observeMutations)return
const{treeCallback:t=kt,nodeCallback:n=kt,pseudoElementsCallback:a=kt,observeMutationsRoot:r=f}=e
Mt=new u((e=>{if(Ct)return
const r=Ge()
fe(e).forEach((e=>{if("childList"===e.type&&e.addedNodes.length>0&&!Ot(e.addedNodes[0])&&(re.searchPseudoElements&&a(e.target),t(e.target)),"attributes"===e.type&&e.target.parentNode&&re.searchPseudoElements&&a(e.target.parentNode),"attributes"===e.type&&Ot(e.target)&&~Z.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){const t=e.getAttribute?e.getAttribute(D):null,n=e.getAttribute?e.getAttribute(M):null
return t&&n}(e.target)){const{prefix:t,iconName:n}=Ke(ue(e.target))
e.target.setAttribute(D,t||r),n&&e.target.setAttribute(M,n)}else(i=e.target)&&i.classList&&i.classList.contains&&i.classList.contains(re.replacementClass)&&n(e.target)
var i}))})),p&&Mt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Rt(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0}
const{iconName:n,prefix:a,rest:r}=function(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=void 0!==e.innerText?e.innerText.trim():""
let r=Ke(ue(e))
return r.prefix||(r.prefix=Ge()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=(i=r.prefix,o=e.innerText,(Le[i]||{})[o]||Ue(r.prefix,Pe(e.innerText)))),!r.iconName&&re.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r
var i,o}(e),i=function(e){const t=fe(e.attributes).reduce(((e,t)=>("class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e)),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id")
return re.autoA11y&&(n?t["aria-labelledby"]="".concat(re.replacementClass,"-title-").concat(a||le()):(t["aria-hidden"]="true",t.focusable="false")),t}(e),o=tt("parseNodeAttributes",{},e)
let s=t.styleParser?function(e){const t=e.getAttribute("style")
let n=[]
return t&&(n=t.split(";").reduce(((e,t)=>{const n=t.split(":"),a=n[0],r=n.slice(1)
return a&&r.length>0&&(e[a]=r.join(":").trim()),e}),{})),n}(e):[]
return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:se,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i},...o}}const{styles:Lt}=xe
function zt(e){const t="nest"===re.autoReplaceSvg?Rt(e,{styleParser:!1}):Rt(e)
return~t.extra.classes.indexOf(X)?at("generateLayersText",e,t):at("generateSvgReplacementMutation",e,t)}let It=new Set
function _t(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(!p)return Promise.resolve()
const n=f.documentElement.classList,a=e=>n.add("".concat(F,"-").concat(e)),r=e=>n.remove("".concat(F,"-").concat(e)),i=re.autoFetchSvg?It:I.map((e=>"fa-".concat(e))).concat(Object.keys(Lt))
i.includes("fa")||i.push("fa")
const o=[".".concat(X,":not([").concat(S,"])")].concat(i.map((e=>".".concat(e,":not([").concat(S,"])")))).join(", ")
if(0===o.length)return Promise.resolve()
let s=[]
try{s=fe(e.querySelectorAll(o))}catch(e){}if(!(s.length>0))return Promise.resolve()
a("pending"),r("complete")
const c=xt.begin("onTree"),l=s.reduce(((e,t)=>{try{const n=zt(t)
n&&e.push(n)}catch(e){z||"MissingIcon"===e.name&&console.error(e)}return e}),[])
return new Promise(((e,n)=>{Promise.all(l).then((n=>{St(n,(()=>{a("active"),a("complete"),r("pending"),"function"==typeof t&&t(),c(),e()}))})).catch((e=>{c(),n(e)}))}))}function Wt(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
zt(e).then((e=>{e&&St([e],t)}))}I.map((e=>{It.add("fa-".concat(e))})),Object.keys(B[h]).map(It.add.bind(It)),Object.keys(B[b]).map(It.add.bind(It)),Object.keys(B[v]).map(It.add.bind(It)),It=[...It]
const Bt=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{transform:n=se,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:c=[],attributes:l={},styles:f={}}=t
if(!e)return
const{prefix:u,iconName:d,icon:p}=e
return ft({type:"icon",...e},(()=>(nt("beforeDOMElementCreation",{iconDefinition:e,params:t}),re.autoA11y&&(o?l["aria-labelledby"]="".concat(re.replacementClass,"-title-").concat(s||le()):(l["aria-hidden"]="true",l.focusable="false")),ut({icons:{main:mt(p),mask:r?mt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:d,transform:{...se,...n},symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:l,styles:f,classes:c}}))))}
var Ht={mixout(){return{icon:(e=Bt,function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const a=(t||{}).icon?t:rt(t||{})
let{mask:r}=n
return r&&(r=(r||{}).icon?r:rt(r||{})),e(a,{...n,mask:r})})}
var e},hooks:()=>({mutationObserverCallbacks:e=>(e.treeCallback=_t,e.nodeCallback=Wt,e)}),provides(e){e.i2svg=function(e){const{node:t=f,callback:n=()=>{}}=e
return _t(t,n)},e.generateSvgReplacementMutation=function(e,t){const{iconName:n,title:a,titleId:r,prefix:i,transform:o,symbol:s,mask:c,maskId:l,extra:f}=t
return new Promise(((t,u)=>{Promise.all([gt(n,i),c.iconName?gt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((c=>{let[u,d]=c
t([e,ut({icons:{main:u,mask:d},prefix:i,iconName:n,transform:o,symbol:s,maskId:l,title:a,titleId:r,extra:f,watchable:!0})])})).catch(u)}))},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:a,transform:r,styles:i}=e
const o=pe(i)
let s
return o.length>0&&(n.style=o),me(r)&&(s=at("generateAbstractTransformGrouping",{main:a,transform:r,containerWidth:a.width,iconWidth:a.width})),t.push(s||a.icon),{children:t,attributes:n}}}},Ut={mixout:()=>({layer(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{classes:n=[]}=t
return ft({type:"layer"},(()=>{nt("beforeDOMElementCreation",{assembler:e,params:t})
let a=[]
return e((e=>{Array.isArray(e)?e.map((e=>{a=a.concat(e.abstract)})):a=a.concat(e.abstract)})),[{tag:"span",attributes:{class:["".concat(re.cssPrefix,"-layers"),...n].join(" ")},children:a}]}))}})},Yt={mixout:()=>({counter(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=t
return ft({type:"counter",content:e},(()=>(nt("beforeDOMElementCreation",{content:e,params:t}),function(e){const{content:t,title:n,extra:a}=e,r={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},i=pe(a.styles)
i.length>0&&(r.style=i)
const o=[]
return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}({content:e.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(re.cssPrefix,"-layers-counter"),...a]}}))))}})},$t={mixout:()=>({text(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{transform:n=se,title:a=null,classes:r=[],attributes:i={},styles:o={}}=t
return ft({type:"text",content:e},(()=>(nt("beforeDOMElementCreation",{content:e,params:t}),dt({content:e,transform:{...se,...n},title:a,extra:{attributes:i,styles:o,classes:["".concat(re.cssPrefix,"-layers-text"),...r]}}))))}}),provides(e){e.generateLayersText=function(e,t){const{title:n,transform:a,extra:r}=t
let i=null,o=null
if(m){const t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect()
i=n.width/t,o=n.height/t}return re.autoA11y&&!n&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,dt({content:e.innerHTML,width:i,height:o,transform:a,title:n,extra:r,watchable:!0})])}}}
const Gt=new RegExp('"',"ug"),qt=[1105920,1112319],Vt={FontAwesome:{normal:"fas",400:"fas"},"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"},"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"},"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Xt=Object.keys(Vt).reduce(((e,t)=>(e[t.toLowerCase()]=Vt[t],e)),{}),Kt=Object.keys(Xt).reduce(((e,t)=>{const n=Xt[t]
return e[t]=n[900]||[...Object.entries(n)][0][1],e}),{})
function Zt(e,t){const n="".concat(j).concat(t.replace(":","-"))
return new Promise(((a,r)=>{if(null!==e.getAttribute(n))return a()
const i=fe(e.children).filter((e=>e.getAttribute(C)===t))[0],o=l.getComputedStyle(e,t),s=o.getPropertyValue("font-family"),c=s.match(K),u=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content")
if(i&&!c)return e.removeChild(i),a()
if(c&&"none"!==d&&""!==d){const l=o.getPropertyValue("content")
let d=function(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a
return(Xt[n]||{})[r]||Kt[n]}(s,u)
const{value:p,isSecondary:m}=function(e){const t=e.replace(Gt,""),n=function(e){const t=e.length
let n,a=e.charCodeAt(0)
return a>=55296&&a<=56319&&t>1&&(n=e.charCodeAt(1),n>=56320&&n<=57343)?1024*(a-55296)+n-56320+65536:a}(t),a=n>=qt[0]&&n<=qt[1],r=2===t.length&&t[0]===t[1]
return{value:Pe(r?t[0]:t),isSecondary:a||r}}(l),h=c[0].startsWith("FontAwesome")
let g=Ue(d,p),b=g
if(h){const e=function(e){const t=Ie[e],n=Ue("fas",e)
return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}(p)
e.iconName&&e.prefix&&(g=e.iconName,d=e.prefix)}if(!g||m||i&&i.getAttribute(D)===d&&i.getAttribute(M)===b)a()
else{e.setAttribute(n,b),i&&e.removeChild(i)
const o={iconName:null,title:null,titleId:null,prefix:null,transform:se,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},{extra:s}=o
s.attributes[C]=t,gt(g,d).then((r=>{const i=ut({...o,icons:{main:r,mask:qe()},prefix:d,iconName:b,extra:s,watchable:!0}),c=f.createElementNS("http://www.w3.org/2000/svg","svg")
"::before"===t?e.insertBefore(c,e.firstChild):e.appendChild(c),c.outerHTML=i.map((e=>Ee(e))).join("\n"),e.removeAttribute(n),a()})).catch(r)}}else a()}))}function Qt(e){return Promise.all([Zt(e,"::before"),Zt(e,"::after")])}function Jt(e){return!(e.parentNode===document.head||~L.indexOf(e.tagName.toUpperCase())||e.getAttribute(C)||e.parentNode&&"svg"===e.parentNode.tagName)}function en(e){if(p)return new Promise(((t,n)=>{const a=fe(e.querySelectorAll("*")).filter(Jt).map(Qt),r=xt.begin("searchPseudoElements")
jt(),Promise.all(a).then((()=>{r(),Dt(),t()})).catch((()=>{r(),Dt(),n()}))}))}var tn={hooks:()=>({mutationObserverCallbacks:e=>(e.pseudoElementsCallback=en,e)}),provides(e){e.pseudoElements2svg=function(e){const{node:t=f}=e
re.searchPseudoElements&&en(t)}}}
let nn=!1
var an={mixout:()=>({dom:{unwatch(){jt(),nn=!0}}}),hooks:()=>({bootstrap(){Ft(tt("mutationObserverCallbacks",{}))},noAuto(){Mt&&Mt.disconnect()},watch(e){const{observeMutationsRoot:t}=e
nn?Dt():Ft(tt("mutationObserverCallbacks",{observeMutationsRoot:t}))}})}
const rn=e=>e.toLowerCase().split(" ").reduce(((e,t)=>{const n=t.toLowerCase().split("-"),a=n[0]
let r=n.slice(1).join("-")
if(a&&"h"===r)return e.flipX=!0,e
if(a&&"v"===r)return e.flipY=!0,e
if(r=parseFloat(r),isNaN(r))return e
switch(a){case"grow":e.size=e.size+r
break
case"shrink":e.size=e.size-r
break
case"left":e.x=e.x-r
break
case"right":e.x=e.x+r
break
case"up":e.y=e.y-r
break
case"down":e.y=e.y+r
break
case"rotate":e.rotate=e.rotate+r}return e}),{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})
var on={mixout:()=>({parse:{transform:e=>rn(e)}}),hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform")
return n&&(e.transform=rn(n)),e}}),provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:a,iconWidth:r}=e
const i={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(32*n.x,", ").concat(32*n.y,") "),s="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(c)},f={transform:"translate(".concat(r/2*-1," -256)")}
return{tag:"g",attributes:{...i},children:[{tag:"g",attributes:{...l},children:[{tag:t.icon.tag,children:t.icon.children,attributes:{...t.icon.attributes,...f}}]}]}}}}
const sn={x:0,y:0,width:"100%",height:"100%"}
function cn(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}var ln={hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?Ke(n.split(" ").map((e=>e.trim()))):qe()
return a.prefix||(a.prefix=Ge()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}),provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:n,main:a,mask:r,maskId:i,transform:o}=e
const{width:s,icon:c}=a,{width:l,icon:f}=r,u=function(e){let{transform:t,containerWidth:n,iconWidth:a}=e
const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)")
return{outer:r,inner:{transform:"".concat(i," ").concat(o," ").concat(s)},path:{transform:"translate(".concat(a/2*-1," -256)")}}}({transform:o,containerWidth:l,iconWidth:s}),d={tag:"rect",attributes:{...sn,fill:"white"}},p=c.children?{children:c.children.map(cn)}:{},m={tag:"g",attributes:{...u.inner},children:[cn({tag:c.tag,attributes:{...c.attributes,...u.path},...p})]},h={tag:"g",attributes:{...u.outer},children:[m]},g="mask-".concat(i||le()),b="clip-".concat(i||le()),v={tag:"mask",attributes:{...sn,id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[d,h]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:(w=f,"g"===w.tag?w.children:[w])},v]}
var w
return t.push(y,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(g,")"),...sn}}),{children:t,attributes:n}}}},fn={provides(e){let t=!1
l.matchMedia&&(t=l.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const e=[],n={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"}
e.push({tag:"path",attributes:{...n,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}})
const r={...a,attributeName:"opacity"},i={tag:"circle",attributes:{...n,cx:"256",cy:"364",r:"28"},children:[]}
return t||i.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...r,values:"1;0;1;1;0;1;"}}),e.push(i),e.push({tag:"path",attributes:{...n,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...r,values:"1;0;0;0;0;1;"}}]}),t||e.push({tag:"path",attributes:{...n,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...r,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:e}}}}
!function(e,t){let{mixoutsTo:n}=t
Ze=e,Qe={},Object.keys(Je).forEach((e=>{-1===et.indexOf(e)&&delete Je[e]})),Ze.forEach((e=>{const t=e.mixout?e.mixout():{}
if(Object.keys(t).forEach((e=>{"function"==typeof t[e]&&(n[e]=t[e]),"object"==typeof t[e]&&Object.keys(t[e]).forEach((a=>{n[e]||(n[e]={}),n[e][a]=t[e][a]}))})),e.hooks){const t=e.hooks()
Object.keys(t).forEach((e=>{Qe[e]||(Qe[e]=[]),Qe[e].push(t[e])}))}e.provides&&e.provides(Je)}))}([ye,Ht,Ut,Yt,$t,tn,an,on,ln,fn,{hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=null!==n&&(""===n||n)
return e.symbol=a,e}})}],{mixoutsTo:ct})
const un=ct.noAuto,dn=ct.config,pn=ct.library,mn=ct.dom,hn=ct.parse,gn=ct.findIconDefinition,bn=ct.toHtml,vn=ct.icon,yn=ct.layer,wn=ct.text,xn=ct.counter}}])
