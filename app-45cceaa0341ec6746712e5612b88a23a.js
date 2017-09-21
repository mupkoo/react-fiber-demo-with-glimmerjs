(function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()})(0,function(){"use strict"
function t(t){return t[ie]}function e(t,e){t[ie]=e}function s(t){if(null===t||void 0===t)throw new Error(`Expected value to be present`)
return t}function n(t,e){if(null===t||void 0===t)throw new Error(e)
return t}function i(){return new Error("unreachable")}function r(t){return t-4}function a(t,e){if(!t)throw new Error(e||"assertion failure")}function o(t){for(let e=1;e<arguments.length;e++){let s=arguments[e]
if(null===s||"object"!=typeof s)continue
let n=ce(s)
for(let e=0;e<n.length;e++){let i=n[e]
t[i]=s[i]}}return t}function l(t){let e=new Array(t)
for(let s=0;s<t;s++)e[s]=null
return e}function h(t){return t._guid=++ue}function c(t){return t._guid||h(t)}function u(){}function p(){return new u}function d(t){let e=Te.length
Te.push(t=>t.value()),Ae.push((t,e)=>t.validate(e)),t.id=e}function m({tag:t}){return t===Oe}function f(t){return t===Oe}function g(t){let e=[]
for(let s=0,n=t.length;s<n;s++){let n=t[s].tag
if(n===Be)return Be
n!==Oe&&e.push(n)}return v(e)}function y(t){let e=[],s=t.head()
for(;null!==s;){let n=s.tag
if(n===Be)return Be
n!==Oe&&e.push(n),s=t.nextNode(s)}return v(e)}function b(t){let e=[]
for(let s=0,n=t.length;s<n;s++){let n=t[s]
if(n===Be)return Be
n!==Oe&&e.push(n)}return v(e)}function v(t){switch(t.length){case 0:return Oe
case 1:return t[0]
case 2:return Fe.create(t[0],t[1])
default:return Ie.create(t)}}function k(t,e){return new Ue(t,e)}function S(t){return t!==$e}function _(t){return"function"!=typeof t.toString?"":String(t)}function w(t){return x(t)?"":String(t)}function E(t){return x(t)?"":A(t)?t:C(t)?t.toHTML():N(t)?t:String(t)}function x(t){return null===t||void 0===t||"function"!=typeof t.toString}function C(t){return"object"==typeof t&&null!==t&&"function"==typeof t.toHTML}function N(t){return"object"==typeof t&&null!==t&&"number"==typeof t.nodeType}function T(t){return N(t)&&11===t.nodeType}function A(t){return"string"==typeof t}function D(t){return"object"==typeof t&&null!==t&&t[ws]}function O(t){let e=t.element,s=t.nextSibling
return null===s?e.lastChild:s.previousSibling}function B(t,e,s){return new Os(t,e,s)}function M(t,e){return new Bs(t,e)}function L(t,e){let s=t.parentElement(),n=t.firstNode(),i=t.lastNode(),r=n
for(;r;){let t=r.nextSibling
if(s.insertBefore(r,e),r===i)return t
r=t}return null}function R(t){let e=t.parentElement(),s=t.firstNode(),n=t.lastNode(),i=s
for(;i;){let t=i.nextSibling
if(e.removeChild(i),i===n)return t
i=t}return null}function F(t){return 3===t.nodeType}function I(t){return 8===t.nodeType}function P(t){let e=t.nodeValue.match(/^%\+bounds:(\d+)%$/)
return e&&e[1]?Number(e[1]):null}function j(t){let e=t.nodeValue.match(/^%\-bounds:(\d+)%$/)
return e&&e[1]?Number(e[1]):null}function U(t){return 1===t.nodeType}function H(t){return 8===t.nodeType&&"%glimmer%"===t.nodeValue}function $(t){return 8===t.nodeType&&"%sep%"===t.nodeValue}function V(t){return 8===t.nodeType&&"%empty%"===t.nodeValue}function z(t){let e=n(t.parentNode,`cannot remove a detached node`),s=t.nextSibling
return e.removeChild(t),s}function G(t,e){for(let s=0;s<t.length;s++){let n=t[s]
if(n.name===e)return n}}function J(){return new Error("Not implemented")}function W(t){return function(e){return Array.isArray(e)&&e[0]===t}}function Y(t,e){let s=new tn(e)
return t.compile(s),s.compile()}function X(t,e){return new cn(t,e)}function K(t){return"object"==typeof t&&null!==t&&"function"==typeof t.compile}function q(t,e,s){let n=t[1],i=t[2],r=t[3]
Q(i,s),r?s.dynamicAttr(n,r,e):s.dynamicAttr(n,null,e)}function Q(t,e){Array.isArray(t)?vn.compile(t,e):e.primitive(t)}function Z(t,e){if(!t)return 0
for(let s=0;s<t.length;s++)Q(t[s],e)
return t.length}function tt(t=new _n,e=new wn){return t.add("if",(t,e,n,i,r)=>{if(!t||1!==t.length)throw new Error(`SYNTAX ERROR: #if requires a single argument`)
r.startLabels(),r.pushFrame(),r.returnTo("END"),Q(t[0],r),r.test("environment"),r.enter(1),r.jumpUnless("ELSE"),r.invokeStatic(s(n)),i?(r.jump("EXIT"),r.label("ELSE"),r.invokeStatic(i),r.label("EXIT"),r.exit(),r.return()):(r.label("ELSE"),r.exit(),r.return()),r.label("END"),r.popFrame(),r.stopLabels()}),t.add("unless",(t,e,n,i,r)=>{if(!t||1!==t.length)throw new Error(`SYNTAX ERROR: #unless requires a single argument`)
r.startLabels(),r.pushFrame(),r.returnTo("END"),Q(t[0],r),r.test("environment"),r.enter(1),r.jumpIf("ELSE"),r.invokeStatic(s(n)),i?(r.jump("EXIT"),r.label("ELSE"),r.invokeStatic(i),r.label("EXIT"),r.exit(),r.return()):(r.label("ELSE"),r.exit(),r.return()),r.label("END"),r.popFrame(),r.stopLabels()}),t.add("with",(t,e,n,i,r)=>{if(!t||1!==t.length)throw new Error(`SYNTAX ERROR: #with requires a single argument`)
r.startLabels(),r.pushFrame(),r.returnTo("END"),Q(t[0],r),r.dup(),r.test("environment"),r.enter(2),r.jumpUnless("ELSE"),r.invokeStatic(s(n),1),i?(r.jump("EXIT"),r.label("ELSE"),r.invokeStatic(i),r.label("EXIT"),r.exit(),r.return()):(r.label("ELSE"),r.exit(),r.return()),r.label("END"),r.popFrame(),r.stopLabels()}),t.add("each",(t,e,n,i,r)=>{r.startLabels(),r.pushFrame(),r.returnTo("END"),e&&"key"===e[0][0]?Q(e[1][0],r):r.primitive(null),Q(t[0],r),r.enter(2),r.putIterator(),r.jumpUnless("ELSE"),r.pushFrame(),r.returnTo("ITER"),r.dup(Se.fp,1),r.enterList("BODY"),r.label("ITER"),r.iterate("BREAK"),r.label("BODY"),r.invokeStatic(s(n),2),r.pop(2),r.exit(),r.return(),r.label("BREAK"),r.exitList(),r.popFrame(),i?(r.jump("EXIT"),r.label("ELSE"),r.invokeStatic(i),r.label("EXIT"),r.exit(),r.return()):(r.label("ELSE"),r.exit(),r.return()),r.label("END"),r.popFrame(),r.stopLabels()}),t.add("-in-element",(t,e,n,i,r)=>{if(!t||1!==t.length)throw new Error(`SYNTAX ERROR: #-in-element requires a single argument`)
if(r.startLabels(),r.pushFrame(),r.returnTo("END"),e&&e[0].length){let t=e[0],s=e[1]
if(1!==t.length||"nextSibling"!==t[0])throw new Error(`SYNTAX ERROR: #-in-element does not take a \`${t[0]}\` option`)
Q(s[0],r)}else Q(null,r)
Q(t[0],r),r.dup(),r.test("simple"),r.enter(3),r.jumpUnless("ELSE"),r.pushRemoteElement(),r.invokeStatic(s(n)),r.popRemoteElement(),r.label("ELSE"),r.exit(),r.return(),r.label("END"),r.popFrame(),r.stopLabels()}),t.add("-with-dynamic-vars",(t,e,n,i,r)=>{if(e){let t=e[0]
Z(e[1],r),r.pushDynamicScope(),r.bindDynamicScope(t),r.invokeStatic(s(n)),r.popDynamicScope()}else r.invokeStatic(s(n))}),{blocks:t,inlines:e}}function et(t,e){mn.compile(t,e)}function st(t,e,s){let n=new cn(s,e)
for(let i=0;i<t.length;i++)et(t[i],n)
return n}function nt(t,e){return-1!==t.indexOf(e)}function it(t,e){return(null===t||nt(Dn,t))&&nt(Bn,e)}function rt(t,e){return null!==t&&(nt(On,t)&&nt(Mn,e))}function at(t,e){return it(t,e)||rt(t,e)}function ot(t,e,s,n){let i=null
if(null===n||void 0===n)return n
if(C(n))return n.toHTML()
i=e?e.tagName.toUpperCase():null
let r=w(n)
if(it(i,s)){let e=t.protocolForURL(r)
if(nt(An,e))return`unsafe:${r}`}return rt(i,s)?`unsafe:${r}`:r}function lt(t,e){let s,n
if(e in t)n=e,s="prop"
else{let i=e.toLowerCase()
i in t?(s="prop",n=i):(s="attr",n=e)}return"prop"!==s||"style"!==n.toLowerCase()&&!ht(t.tagName,n)||(s="attr"),{normalized:n,type:s}}function ht(t,e){let s=Ln[t.toUpperCase()]
return s&&s[e.toLowerCase()]||!1}function ct(t,e){if(!t)return e
if(!pt(t))return e
let s=t.createElement("div")
return class extends e{insertHTMLBefore(t,e,n){if(null===n||""===n)return super.insertHTMLBefore(t,e,n)
let i=t.tagName.toLowerCase(),r=Rn[i]
return void 0===r?super.insertHTMLBefore(t,e,n):ut(t,r,s,n,e)}}}function ut(t,e,s,n,i){let r=e.before+n+e.after
s.innerHTML=r
let a=s
for(let c=0;c<e.depth;c++)a=a.childNodes[0]
var o=bt(a,t,i)
let l=o[0],h=o[1]
return new Os(t,l,h)}function pt(t){let e=t.createElement("table")
try{e.innerHTML="<tbody></tbody>"}catch(t){}finally{if(0!==e.childNodes.length)return!1}return!0}function dt(t,e,s){if(!t)return e
if(!ft(t,s))return e
let n=t.createElement("div")
return class extends e{insertHTMLBefore(t,e,i){return null===i||""===i?super.insertHTMLBefore(t,e,i):t.namespaceURI!==s?super.insertHTMLBefore(t,e,i):mt(t,n,i,e)}}}function mt(t,e,s,n){let i="<svg>"+s+"</svg>"
e.innerHTML=i
var r=bt(e.firstChild,t,n)
let a=r[0],o=r[1]
return new Os(t,a,o)}function ft(t,e){let n=t.createElementNS(e,"svg")
try{n.insertAdjacentHTML("beforeend","<circle></circle>")}catch(t){}finally{return 1!==n.childNodes.length||s(n.firstChild).namespaceURI!==Fn}}function gt(t,e){return t&&yt(t)?class extends e{constructor(t){super(t),this.uselessComment=this.createComment("")}insertHTMLBefore(t,e,s){if(null===s)return super.insertHTMLBefore(t,e,s)
let n=!1,i=e?e.previousSibling:t.lastChild
i&&i instanceof Text&&(n=!0,t.insertBefore(this.uselessComment,e))
let r=super.insertHTMLBefore(t,e,s)
return n&&t.removeChild(this.uselessComment),r}}:e}function yt(t){let e=t.createElement("div")
return e.innerHTML="first",e.insertAdjacentHTML("beforeend","second"),2!==e.childNodes.length}function bt(t,e,s){let n=t.firstChild,i=null,r=n
for(;r;)i=r,r=r.nextSibling,e.insertBefore(i,s)
return[n,i]}function vt(t,e,s,n){let i,r=e,a=t,o=s,l=o?o.previousSibling:r.lastChild
if(null===n||""===n)return new Os(r,null,null)
null===o?(r.insertAdjacentHTML("beforeend",n),i=r.lastChild):o instanceof HTMLElement?(o.insertAdjacentHTML("beforebegin",n),i=o.previousSibling):(r.insertBefore(a,o),a.insertAdjacentHTML("beforebegin",n),i=a.previousSibling,r.removeChild(a))
let h=l?l.nextSibling:r.firstChild
return new Os(r,h,i)}function kt(t){return t.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function St(t,e){let s=t.tagName
if(t.namespaceURI===In)return _t(s,e)
var n=lt(t,e)
let i=n.type,r=n.normalized
return"attr"===i?_t(s,r):wt(s,r)}function _t(t,e){return at(t,e)?qn:Yn}function wt(t,e){return at(t,e)?Kn:xt(t,e)?Qn:Et(t,e)?Zn:Xn}function Et(t,e){return"OPTION"===t&&"selected"===e}function xt(t,e){return("INPUT"===t||"TEXTAREA"===t)&&"value"===e}function Ct(t){return!1===t||void 0===t||null===t||void 0===t.toString?null:!0===t?"":"function"==typeof t?null:String(t)}function Nt({id:t,meta:e,block:s}){let n,i=t||`client-${yi++}`
return{id:i,meta:e,create:(t,r)=>{let a=r?o({},r,e):e
return n||(n=JSON.parse(s)),new bi(i,a,t,n)}}}function Tt(){}function At(t){return-1===t.indexOf(":")}function Dt(t,e,s,n,i){let r=[t.slice(0,1),null,null,null],a=[t.slice(1),Mt(e),s,n]
return i.component.dynamic(r,Bt,a),!0}function Ot(t,e,s,n){let i=[e.slice(0,1),null,null,null],r=[e.slice(1),Mt(s),null,null]
return n.component.dynamic(i,Bt,r),!0}function Bt(t,e,s){let n=e.positional.at(0),i=t.env
return new Fi(n,i,s)}function Mt(t){return null===t?null:[t[0].map(t=>`@${t}`),t[1]]}function Lt(t,e){let s=Rt(e)
throw new Error(`You tried to create an action with the {{action}} helper, but the first argument ${s}was ${typeof t} instead of a function.`)}function Rt(t){let e,s,n=""
return null===t||void 0===t?n:("parent"in t&&"property"in t?(e=t.parent.value(),s=t.property):"_parentValue"in t&&"_propertyKey"in t&&(e=t._parentValue,s=t._propertyKey),void 0!==s&&(n+=`('${s}' on ${Ft(e)}) `),n)}function Ft(t){let e=typeof t
if(null===t||void 0===t)return e
if("number"===e||"boolean"===e)return t.toString()
if(t.debugName)return t.debugName
try{return JSON.stringify(t)}catch(t){}return t.toString()}function It(t){return(e,s)=>new Pi(t,s)}function Pt(t,e){t.add("component",Dt),e.add("component",Ot)}function jt(t){return void 0!==t.createComponentDefinition}function Ut(){}function Ht(t){var e=t.split(":")
let s=e[0],n=e[1]
return!!(s&&n&&0===n.indexOf("/")&&n.split("/").length>3)}function $t(t){return void 0!==t.rootName&&void 0!==t.collection&&void 0!==t.name&&void 0!==t.type}function Vt(t){let e=t.type,s=zt(t)
return s?e+":"+s:e}function zt(t){let e=[]
if(t.rootName&&e.push(t.rootName),t.collection&&e.push(t.collection),t.namespace&&e.push(t.namespace),t.name&&e.push(t.name),e.length>0){let s=e.join("/")
return $t(t)&&(s="/"+s),s}}function Gt(t){let e={}
if(t.indexOf(":")>-1){var s=t.split(":")
let n=s[0],i=s[1]
e.type=n
let r
0===i.indexOf("/")?(r=i.substr(1).split("/"),e.rootName=r.shift(),e.collection=r.shift()):r=i.split("/"),r.length>0&&(e.name=r.pop(),r.length>0&&(e.namespace=r.join("/")))}else e.type=t
return e}function Jt(t,e){if(!e)throw new Error("Assertion Failed: "+t)}function Wt(...t){let e=t[0],s=t[1],n=t[2]
return"string"==typeof e?function(e,s,n){return Yt(e,s,n,t)}:n?Yt(e,s,n,[]):void Xt(e,s)}function Yt(t,e,s,n){let i=qt(t)
return i.trackedProperties[e]=!0,i.trackedPropertyDependencies[e]=n||[],{enumerable:!0,configurable:!1,get:s.get,set:function(){qt(this).dirtyableTagFor(e).inner.dirty(),s.set.apply(this,arguments),Ki()}}}function Xt(t,e){let s,n=Symbol(e)
qt(t).trackedProperties[e]=!0,void 0!==t[e]&&(s=t[e]),Object.defineProperty(t,e,{configurable:!0,get(){return this[n]},set(t){qt(this).dirtyableTagFor(e).inner.dirty(),this[n]=t,Ki()}})}function Kt(t,e,s){let n=[t.dirtyableTagFor(e)]
if(s&&s.length)for(let i=0;i<s.length;i++)n.push(t.tagFor(s[i]))
return b(n)}function qt(t){let e=t[Yi]
return e&&Qt(t,Yi)?e:t[Yi]=new Wi(e)}function Qt(t,e){return Xi.call(t,e)}function Zt(t,e){throw qi.for(t,e)}function te(t,e,s=Zt){return"object"==typeof t&&t?qt(t).tagFor(e):Oe}function ee(t,e){let s=`The '${e}' property on the ${t} was changed after it had been rendered. Properties that change after being rendered must be tracked. Use the @tracked decorator to mark this as a tracked property.`
throw new qi(t,e,s)}class se{constructor(t,e=null){this._registry=t,this._resolver=e,this._lookups={},this._factoryDefinitionLookups={}}factoryFor(t){let e=this._factoryDefinitionLookups[t]
if(e||(this._resolver&&(e=this._resolver.retrieve(t)),e||(e=this._registry.registration(t)),e&&(this._factoryDefinitionLookups[t]=e)),e)return this.buildFactory(t,e)}lookup(t){let e=!1!==this._registry.registeredOption(t,"singleton")
if(e&&this._lookups[t])return this._lookups[t]
let s=this.factoryFor(t)
if(!s)return
if(!1===this._registry.registeredOption(t,"instantiate"))return s.class
let n=s.create()
return e&&n&&(this._lookups[t]=n),n}defaultInjections(t){return{}}buildInjections(t){let e,s=this.defaultInjections(t),n=this._registry.registeredInjections(t)
for(let i=0;i<n.length;i++)s[(e=n[i]).property]=this.lookup(e.source)
return s}buildFactory(t,e){let s=this.buildInjections(t)
return{class:e,create(t){let n=Object.assign({},s,t)
return e.create(n)}}}}class ne{constructor(t){this._registrations={},this._registeredOptions={},this._registeredInjections={},t&&t.fallback&&(this._fallback=t.fallback)}register(t,e,s){this._registrations[t]=e,s&&(this._registeredOptions[t]=s)}registration(t){let e=this._registrations[t]
return void 0===e&&this._fallback&&(e=this._fallback.registration(t)),e}unregister(t){delete this._registrations[t],delete this._registeredOptions[t],delete this._registeredInjections[t]}registerOption(t,e,s){let n=this._registeredOptions[t]
n||(n={},this._registeredOptions[t]=n),n[e]=s}registeredOption(t,e){let s,n=this.registeredOptions(t)
return n&&(s=n[e]),void 0===s&&void 0!==this._fallback&&(s=this._fallback.registeredOption(t,e)),s}registeredOptions(t){let e=this._registeredOptions[t]
if(void 0===e){let s=t.split(":")[0]
e=this._registeredOptions[s]}return e}unregisterOption(t,e){let s=this._registeredOptions[t]
s&&delete s[e]}registerInjection(t,e,s){let n=this._registeredInjections[t]
void 0===n&&(this._registeredInjections[t]=n=[]),n.push({property:e,source:s})}registeredInjections(t){let e=t.split(":")[0],s=this._fallback?this._fallback.registeredInjections(t):[]
return Array.prototype.push.apply(s,this._registeredInjections[e]),Array.prototype.push.apply(s,this._registeredInjections[t]),s}}const ie="__owner__"
var re;(function(t){t[t.Trace=0]="Trace",t[t.Debug=1]="Debug",t[t.Warn=2]="Warn",t[t.Error=3]="Error"})(re||(re={}))
class ae{log(t){}warn(t){}error(t){}trace(){}}let oe
class le{constructor({console:t,level:e}){this.f=oe,this.force=oe,this.console=t,this.level=e}skipped(t){return t<this.level}trace(t,{stackTrace:e=!1}={}){this.skipped(re.Trace)||(this.console.log(t),e&&this.console.trace())}debug(t,{stackTrace:e=!1}={}){this.skipped(re.Debug)||(this.console.log(t),e&&this.console.trace())}warn(t,{stackTrace:e=!1}={}){this.skipped(re.Warn)||(this.console.warn(t),e&&this.console.trace())}error(t){this.skipped(re.Error)||this.console.error(t)}}let he="undefined"==typeof console?new ae:console
oe=new le({console:he,level:re.Trace}),new le({console:he,level:re.Debug})
const ce=Object.keys
let ue=0,pe=Object.create(null,{constructor:{value:void 0,enumerable:!1,writable:!0}})
u.prototype=pe
class de{constructor(){this.dict=p()}add(t){return"string"==typeof t?this.dict[t]=t:this.dict[c(t)]=t,this}delete(t){"string"==typeof t?delete this.dict[t]:t._guid&&delete this.dict[t._guid]}forEach(t){let e=this.dict,s=Object.keys(e)
for(let n=0;s.length;n++)t(e[s[n]])}toArray(){return Object.keys(this.dict)}}class me{constructor(){this.stack=[],this.current=null}toArray(){return this.stack}push(t){this.current=t,this.stack.push(t)}pop(){let t=this.stack.pop(),e=this.stack.length
return this.current=0===e?null:this.stack[e-1],void 0===t?null:t}isEmpty(){return 0===this.stack.length}}class fe{constructor(t){this.next=null,this.prev=null,this.value=t}}class ge{constructor(){this.clear()}static fromSlice(t){let e=new ge
return t.forEachNode(t=>e.append(t.clone())),e}head(){return this._head}tail(){return this._tail}clear(){this._head=this._tail=null}isEmpty(){return null===this._head}toArray(){let t=[]
return this.forEachNode(e=>t.push(e)),t}splice(t,e,s){let n
null===s?(n=this._tail,this._tail=e):(n=s.prev,e.next=s,s.prev=e),n&&(n.next=t,t.prev=n)}nextNode(t){return t.next}prevNode(t){return t.prev}forEachNode(t){let e=this._head
for(;null!==e;)t(e),e=e.next}contains(t){let e=this._head
for(;null!==e;){if(e===t)return!0
e=e.next}return!1}insertBefore(t,e=null){return null===e?this.append(t):(e.prev?e.prev.next=t:this._head=t,t.prev=e.prev,t.next=e,e.prev=t,t)}append(t){let e=this._tail
return e?(e.next=t,t.prev=e,t.next=null):this._head=t,this._tail=t}pop(){return this._tail?this.remove(this._tail):null}prepend(t){return this._head?this.insertBefore(t,this._head):this._head=this._tail=t}remove(t){return t.prev?t.prev.next=t.next:this._head=t.next,t.next?t.next.prev=t.prev:this._tail=t.prev,t}}class ye{constructor(t,e){this._head=t,this._tail=e}static toList(t){let e=new ge
return t.forEachNode(t=>e.append(t.clone())),e}forEachNode(t){let e=this._head
for(;null!==e;)t(e),e=this.nextNode(e)}contains(t){let e=this._head
for(;null!==e;){if(e===t)return!0
e=e.next}return!1}head(){return this._head}tail(){return this._tail}toArray(){let t=[]
return this.forEachNode(e=>t.push(e)),t}nextNode(t){return t===this._tail?null:t.next}prevNode(t){return t===this._head?null:t.prev}isEmpty(){return!1}}new ye(null,null)
const be=function(){if(!("function"==typeof WeakMap))return!1
let t=new WeakMap
return"[object WeakMap]"===Object.prototype.toString.call(t)}()
let ve
ve="undefined"!=typeof Uint32Array?Uint32Array:Array
const ke=be?Object.freeze([]):[]
var Se;(function(t){t[t.pc=0]="pc",t[t.ra=1]="ra",t[t.fp=2]="fp",t[t.sp=3]="sp",t[t.s0=4]="s0",t[t.s1=5]="s1",t[t.t0=6]="t0",t[t.t1=7]="t1"})(Se||(Se={}))
class _e{constructor(){this.evaluateOpcode=l(72).slice()}add(t,e){this.evaluateOpcode[t]=e}evaluate(t,e,s){(0,this.evaluateOpcode[s])(t,e)}}const we=new _e
class Ee{constructor(){h(this)}toJSON(){return{guid:this._guid,type:this.type}}}class xe extends Ee{constructor(){super(...arguments),this.next=null,this.prev=null}}const Ce=1
class Ne{validate(t){return this.value()===t}}Ne.id=0
const Te=[],Ae=[]
class De{constructor(t,e){this.type=t,this.inner=e}value(){return(0,Te[this.type])(this.inner)}validate(t){return(0,Ae[this.type])(this.inner,t)}}Te.push(()=>0),Ae.push((t,e)=>0===e)
const Oe=new De(0,null)
Te.push(()=>NaN),Ae.push((t,e)=>NaN===e)
const Be=new De(1,null)
Te.push(()=>Me),Ae.push((t,e)=>e===Me)
new De(2,null)
let Me=Ce
class Le extends Ne{static create(t=Me){return new De(this.id,new Le(t))}constructor(t=Me){super(),this.revision=t}value(){return this.revision}dirty(){this.revision=++Me}}d(Le)
class Re extends Ne{constructor(){super(...arguments),this.lastChecked=null,this.lastValue=null}value(){let t=this.lastChecked,e=this.lastValue
return t!==Me&&(this.lastChecked=Me,this.lastValue=e=this.compute()),this.lastValue}invalidate(){this.lastChecked=null}}class Fe extends Re{static create(t,e){return new De(this.id,new Fe(t,e))}constructor(t,e){super(),this.first=t,this.second=e}compute(){return Math.max(this.first.value(),this.second.value())}}d(Fe)
class Ie extends Re{static create(t){return new De(this.id,new Ie(t))}constructor(t){super(),this.tags=t}compute(){let t=this.tags,e=-1
for(let s=0;s<t.length;s++){let n=t[s].value()
e=Math.max(n,e)}return e}}d(Ie)
class Pe extends Re{static create(t){return new De(this.id,new Pe(t))}constructor(t){super(),this.tag=t,this.lastUpdated=Ce}compute(){return Math.max(this.lastUpdated,this.tag.value())}update(t){t!==this.tag&&(this.tag=t,this.lastUpdated=Me,this.invalidate())}}d(Pe)
class je{constructor(){this.lastRevision=null,this.lastValue=null}value(){let t=this.tag,e=this.lastRevision,s=this.lastValue
return e&&t.validate(e)||(s=this.lastValue=this.compute(),this.lastRevision=t.value()),s}invalidate(){this.lastRevision=null}}class Ue extends je{constructor(t,e){super(),this.tag=t.tag,this.reference=t,this.mapper=e}compute(){let t=this.reference
return(0,this.mapper)(t.value())}}class He{constructor(t){this.lastValue=null,this.lastRevision=null,this.initialized=!1,this.tag=t.tag,this.reference=t}peek(){return this.initialized?this.lastValue:this.initialize()}revalidate(){if(!this.initialized)return this.initialize()
let t=this.reference,e=this.lastRevision,s=t.tag
if(s.validate(e))return $e
this.lastRevision=s.value()
let n=this.lastValue,i=t.value()
return i===n?$e:(this.lastValue=i,i)}initialize(){let t=this.reference,e=this.lastValue=t.value()
return this.lastRevision=t.tag.value(),this.initialized=!0,e}}const $e="adb3b78e-3d22-4e4b-877a-6317c2c5c145"
class Ve{constructor(t){this.inner=t,this.tag=Oe}value(){return this.inner}}class ze extends fe{constructor(t,e){super(t.valueReferenceFor(e)),this.retained=!1,this.seen=!1,this.key=e.key,this.iterable=t,this.memo=t.memoReferenceFor(e)}update(t){this.retained=!0,this.iterable.updateValueReference(this.value,t),this.iterable.updateMemoReference(this.memo,t)}shouldRemove(){return!this.retained}reset(){this.retained=!1,this.seen=!1}}class Ge{constructor(t){this.map=p(),this.list=new ge,this.tag=t.tag,this.iterable=t}isEmpty(){return(this.iterator=this.iterable.iterate()).isEmpty()}iterate(){let t=this.iterator||this.iterable.iterate()
return this.iterator=null,t}has(t){return!!this.map[t]}get(t){return this.map[t]}wasSeen(t){let e=this.map[t]
return e&&e.seen}append(t){let e=this.map,s=this.list,n=this.iterable,i=e[t.key]=new ze(n,t)
return s.append(i),i}insertBefore(t,e){let s=this.map,n=this.list,i=this.iterable,r=s[t.key]=new ze(i,t)
return r.retained=!0,n.insertBefore(r,e),r}move(t,e){let s=this.list
t.retained=!0,s.remove(t),s.insertBefore(t,e)}remove(t){this.list.remove(t),delete this.map[t.key]}nextNode(t){return this.list.nextNode(t)}head(){return this.list.head()}}class Je{constructor(t){this.iterator=null
let e=new Ge(t)
this.artifacts=e}next(){let t=this.artifacts,e=(this.iterator=this.iterator||t.iterate()).next()
return e?t.append(e):null}}var We;(function(t){t[t.Append=0]="Append",t[t.Prune=1]="Prune",t[t.Done=2]="Done"})(We||(We={}))
class Ye{constructor({target:t,artifacts:e}){this.target=t,this.artifacts=e,this.iterator=e.iterate(),this.current=e.head()}sync(){let t=We.Append
for(;;)switch(t){case We.Append:t=this.nextAppend()
break
case We.Prune:t=this.nextPrune()
break
case We.Done:return void this.nextDone()}}advanceToKey(t){let e=this.current,s=this.artifacts,n=e
for(;n&&n.key!==t;)n.seen=!0,n=s.nextNode(n)
this.current=n&&s.nextNode(n)}nextAppend(){let t=this.iterator,e=this.current,s=this.artifacts,n=t.next()
if(null===n)return this.startPrune()
let i=n.key
return e&&e.key===i?this.nextRetain(n):s.has(i)?this.nextMove(n):this.nextInsert(n),We.Append}nextRetain(t){let e=this.artifacts,s=this.current;(s=n(s,"BUG: current is empty")).update(t),this.current=e.nextNode(s),this.target.retain(t.key,s.value,s.memo)}nextMove(t){let e=this.current,s=this.artifacts,n=this.target,i=t.key,r=s.get(t.key)
r.update(t),s.wasSeen(t.key)?(s.move(r,e),n.move(r.key,r.value,r.memo,e?e.key:null)):this.advanceToKey(i)}nextInsert(t){let e=this.artifacts,s=this.target,n=this.current,i=e.insertBefore(t,n)
s.insert(i.key,i.value,i.memo,n?n.key:null)}startPrune(){return this.current=this.artifacts.head(),We.Prune}nextPrune(){let t=this.artifacts,e=this.target,s=this.current
if(null===s)return We.Done
let n=s
return this.current=t.nextNode(n),n.shouldRemove()?(t.remove(n),e.delete(n.key)):n.reset(),We.Prune}nextDone(){this.target.done()}}class Xe extends Ve{constructor(t){super(t)}static create(t){return void 0===t?Qe:null===t?Ze:!0===t?ts:!1===t?es:"number"==typeof t?new qe(t):new Ke(t)}get(t){return Qe}}class Ke extends Xe{constructor(){super(...arguments),this.lengthReference=null}get(t){if("length"===t){let t=this.lengthReference
return null===t&&(t=this.lengthReference=new qe(this.inner.length)),t}return super.get(t)}}class qe extends Xe{constructor(t){super(t)}}const Qe=new qe(void 0),Ze=new qe(null),ts=new qe(!0),es=new qe(!1)
class ss{constructor(t){this.inner=t,this.tag=t.tag}value(){return this.toBool(this.inner.value())}toBool(t){return!!t}}class ns extends je{constructor(t){super(),this.parts=t,this.tag=g(t)}compute(){let t=new Array
for(let e=0;e<this.parts.length;e++){let s=this.parts[e].value()
null!==s&&void 0!==s&&(t[e]=_(s))}return t.length>0?t.join(""):null}}we.add(1,(t,{op1:e})=>{let s=t.stack,n=t.constants.getFunction(e),i=s.pop(),r=n(t,i)
i.clear(),t.stack.push(r)}),we.add(2,(t,{op1:e})=>{let s=t.constants.getFunction(e)
t.stack.push(s(t))}),we.add(5,(t,{op1:e})=>{let s=t.referenceForSymbol(e)
t.stack.push(s)}),we.add(4,(t,{op1:e})=>{let s=t.stack.pop()
t.scope().bindSymbol(e,s)}),we.add(70,(t,{op1:e})=>{let s=t.constants.getString(e),n=t.scope().getPartialMap()[s]
void 0===n&&(n=t.getSelf().get(s)),t.stack.push(n)}),we.add(19,(t,{op1:e,op2:s})=>{t.pushRootScope(e,!!s)}),we.add(6,(t,{op1:e})=>{let s=t.constants.getString(e),n=t.stack.pop()
t.stack.push(n.get(s))}),we.add(7,(t,{op1:e})=>{let s=e?t.constants.getBlock(e):null
t.stack.push(s)}),we.add(8,(t,{op1:e})=>{t.stack.push(t.scope().getBlock(e))}),we.add(9,(t,{op1:e})=>{let s=!!t.scope().getBlock(e)
t.stack.push(s?ts:es)}),we.add(10,(t,{op1:e})=>{let s=t.scope().getBlock(e),n=s&&s.symbolTable.parameters.length
t.stack.push(n?ts:es)}),we.add(11,(t,{op1:e})=>{let s=[]
for(let n=e;n>0;n--)s.push(t.stack.pop())
t.stack.push(new ns(s.reverse()))}),we.add(20,t=>t.pushChildScope()),we.add(21,t=>t.popScope()),we.add(39,t=>t.pushDynamicScope()),we.add(40,t=>t.popDynamicScope()),we.add(12,(t,{op1:e})=>{t.stack.push(e)}),we.add(13,(t,{op1:e})=>{t.stack.push(t.constants.getOther(e))}),we.add(14,(t,{op1:e})=>{let s=t.stack,n=e&~(3<<30)
switch((e&3<<30)>>>30){case 0:s.push(Xe.create(n))
break
case 1:s.push(Xe.create(t.constants.getString(n)))
break
case 2:switch(n){case 0:s.push(es)
break
case 1:s.push(ts)
break
case 2:s.push(Ze)
break
case 3:s.push(Qe)}}}),we.add(15,(t,{op1:e,op2:s})=>{let n=t.fetchValue(e)-s
t.stack.dup(n)}),we.add(16,(t,{op1:e})=>t.stack.pop(e)),we.add(17,(t,{op1:e})=>t.load(e)),we.add(18,(t,{op1:e})=>t.fetch(e)),we.add(38,(t,{op1:e})=>{let s=t.constants.getArray(e)
t.bindDynamicScope(s)}),we.add(47,t=>t.pushFrame()),we.add(48,t=>t.popFrame()),we.add(49,(t,{op1:e})=>t.enter(e)),we.add(50,t=>t.exit()),we.add(41,t=>{let e=t.stack,s=e.pop()
e.push(s?s.compileDynamic(t.env):null)}),we.add(42,(t,{op1:e})=>{let s=t.constants.getBlock(e).compileStatic(t.env)
t.call(s.handle)})
we.add(43,(t,{op1:e})=>{let s=t.constants.getOther(e),n=t.stack.pop()
s.invoke(t,n)}),we.add(44,(t,{op1:e})=>t.goto(e)),we.add(45,(t,{op1:e})=>{let s=t.stack.pop()
if(m(s))s.value()&&t.goto(e)
else{let n=new He(s)
n.peek()&&t.goto(e),t.updateWith(new os(n))}}),we.add(46,(t,{op1:e})=>{let s=t.stack.pop()
if(m(s))s.value()||t.goto(e)
else{let n=new He(s)
n.peek()||t.goto(e),t.updateWith(new os(n))}}),we.add(22,t=>t.return()),we.add(23,(t,{op1:e})=>{t.returnTo(e)})
const is=function(t,e){return new Ve(!!t.value())},rs=function(t,e){return t},as=function(t,e){return e.toConditionalReference(t)}
we.add(51,(t,{op1:e})=>{let s=t.stack,n=s.pop(),i=t.constants.getFunction(e)
s.push(i(n,t.env))})
class os extends xe{constructor(t){super(),this.type="assert",this.tag=t.tag,this.cache=t}evaluate(t){S(this.cache.revalidate())&&t.throw()}toJSON(){let t,e=this.type,s=this._guid,n=this.cache
try{t=JSON.stringify(n.peek())}catch(e){t=String(n.peek())}return{args:[],details:{expected:t},guid:s,type:e}}}class ls extends xe{constructor(t,e){super(),this.target=e,this.type="jump-if-not-modified",this.tag=t,this.lastRevision=t.value()}evaluate(t){let e=this.tag,s=this.target,n=this.lastRevision
!t.alwaysRevalidate&&e.validate(n)&&t.goto(s)}didModify(){this.lastRevision=this.tag.value()}toJSON(){return{args:[JSON.stringify(this.target.inspect())],guid:this._guid,type:this.type}}}class hs extends xe{constructor(t){super(),this.target=t,this.type="did-modify",this.tag=Oe}evaluate(){this.target.didModify()}}class cs{constructor(t){this.tag=Oe,this.type="label",this.label=null,this.prev=null,this.next=null,h(this),this.label=t}evaluate(){}inspect(){return`${this.label} [${this._guid}]`}toJSON(){return{args:[JSON.stringify(this.inspect())],guid:this._guid,type:this.type}}}we.add(24,(t,{op1:e})=>{t.elements().appendText(t.constants.getString(e))}),we.add(25,(t,{op1:e})=>{t.elements().appendComment(t.constants.getString(e))}),we.add(27,(t,{op1:e})=>{t.elements().openElement(t.constants.getString(e))}),we.add(28,(t,{op1:e})=>{let s=t.constants.getString(e)
t.elements().openElement(s)}),we.add(29,t=>{let e=t.stack.pop().value()
t.elements().openElement(e)}),we.add(36,t=>{let e,s,n=t.stack.pop(),i=t.stack.pop()
if(m(n))e=n.value()
else{let s=new He(n)
e=s.peek(),t.updateWith(new os(s))}if(m(i))s=i.value()
else{let e=new He(i)
s=e.peek(),t.updateWith(new os(e))}t.elements().pushRemoteElement(e,s)}),we.add(37,t=>t.elements().popRemoteElement()),we.add(33,t=>{let e=t.fetchValue(Se.t0)
e&&(e.flush(t),t.loadValue(Se.t0,null)),t.elements().flushElement()}),we.add(34,t=>t.elements().closeElement()),we.add(35,(t,{op1:e})=>{let s=t.constants.getOther(e),n=t.stack.pop()
var i=t.elements()
let r=i.constructing,a=i.updateOperations,o=t.dynamicScope(),l=s.create(r,n,o,a)
n.clear(),t.env.scheduleInstallModifier(l,s)
let h=s.getDestructor(l)
h&&t.newDestroyable(h)
let c=s.getTag(l)
f(c)||t.updateWith(new us(c,s,l))})
class us extends xe{constructor(t,e,s){super(),this.tag=t,this.manager=e,this.modifier=s,this.type="update-modifier",this.lastUpdated=t.value()}evaluate(t){let e=this.manager,s=this.modifier,n=this.tag,i=this.lastUpdated
n.validate(i)||(t.env.scheduleUpdateModifier(s,e),this.lastUpdated=n.value())}toJSON(){return{guid:this._guid,type:this.type}}}we.add(30,(t,{op1:e,op2:s,op3:n})=>{let i=t.constants.getString(e),r=t.constants.getString(s),a=n?t.constants.getString(n):null
t.elements().setStaticAttribute(i,r,a)}),we.add(31,(t,{op1:e,op2:s,op3:n})=>{let i=t.constants.getString(e),r=t.stack.pop(),a=r.value(),o=n?t.constants.getString(n):null,l=t.elements().setDynamicAttribute(i,a,!!s,o)
m(r)||t.updateWith(new ps(r,l))})
class ps extends xe{constructor(t,e){super(),this.reference=t,this.attribute=e,this.type="patch-element",this.tag=t.tag}evaluate(t){let e=this.attribute,s=this.reference
e.update(s.value(),t.env)}}class ds{constructor(){this.stack=null,this.positional=new ms,this.named=new gs}empty(){return this.setup(null,!0),this}setup(t,e){this.stack=t
let s=t.fromTop(0),n=s.length,i=t.fromTop(n+1),r=i+n+2
this.positional.setup(t,r,i),this.named.setup(t,n,s,e)}get tag(){return g([this.positional,this.named])}get length(){return this.positional.length+this.named.length}at(t){return this.positional.at(t)}get(t){return this.named.get(t)}capture(){return{tag:this.tag,length:this.length,positional:this.positional.capture(),named:this.named.capture()}}clear(){let t=this.stack,e=this.length
t.pop(e+2)}}class ms{constructor(){this.length=0,this.stack=null,this.start=0,this._tag=null,this._references=null}setup(t,e,s){this.stack=t,this.start=e,this.length=s,this._tag=null,this._references=null}get tag(){let t=this._tag
return t||(t=this._tag=g(this.references)),t}at(t){let e=this.start,s=this.length
if(t<0||t>=s)return Qe
let n=e-t-1
return this.stack.fromTop(n)}capture(){return new fs(this.tag,this.references)}get references(){let t=this._references
if(!t){let e=this.length
t=this._references=new Array(e)
for(let s=0;s<e;s++)t[s]=this.at(s)}return t}}class fs{constructor(t,e,s=e.length){this.tag=t,this.references=e,this.length=s}at(t){return this.references[t]}value(){return this.references.map(this.valueOf)}get(t){let e=this.references,s=this.length
if("length"===t)return Xe.create(s)
{let n=parseInt(t,10)
return n<0||n>=s?Qe:e[n]}}valueOf(t){return t.value()}}class gs{constructor(){this.length=0,this._tag=null,this._references=null,this._names=null,this._realNames=ke}setup(t,e,s,n){this.stack=t,this.length=e,this._tag=null,this._references=null,n?(this._names=s,this._realNames=ke):(this._names=null,this._realNames=s)}get tag(){return g(this.references)}get names(){let t=this._names
return t||(t=this._names=this._realNames.map(this.sliceName)),t}has(t){return-1!==this.names.indexOf(t)}get(t){let e=this.names,s=this.length,n=e.indexOf(t)
if(-1===n)return Qe
let i=s-n
return this.stack.fromTop(i)}capture(){return new ys(this.tag,this.names,this.references)}get references(){let t=this._references
if(!t){let e=this.names,s=this.length
t=this._references=[]
for(let n=0;n<s;n++)t[n]=this.get(e[n])}return t}sliceName(t){return t.slice(1)}}class ys{constructor(t,e,s){this.tag=t,this.names=e,this.references=s,this.length=e.length,this._map=null}get map(){let t=this._map
if(!t){let e=this.names,s=this.references
t=this._map=p()
for(let n=0;n<e.length;n++)t[e[n]]=s[n]}return t}has(t){return-1!==this.names.indexOf(t)}get(t){let e=this.names,s=this.references,n=e.indexOf(t)
return-1===n?Qe:s[n]}value(){let t=this.names,e=this.references,s=p()
for(let n=0;n<t.length;n++)s[t[n]]=e[n].value()
return s}}var bs=new ds
we.add(56,(t,{op1:e})=>{let s=t.constants.getOther(e)
t.stack.push({definition:s,manager:s.manager,component:null})}),we.add(57,t=>{let e=t.stack,s=e.pop(),n=m(s)?void 0:new He(s),i=n?n.peek():s.value()
e.push({definition:i,manager:i.manager,component:null}),n&&t.updateWith(new os(n))}),we.add(58,(t,{op1:e})=>{let s=t.stack
bs.setup(s,!!e),s.push(bs)}),we.add(59,(t,{op1:e})=>{let s=t.stack
var n=t.fetchValue(e)
let i=n.definition,r=n.manager,a=s.pop(),o=r.prepareArgs(i,a)
if(o){a.clear()
let t=o.positional,e=o.named,n=t.length
for(let i=0;i<n;i++)s.push(t[i])
s.push(n)
let i=Object.keys(e),r=i.length,l=[]
for(let a=0;a<r;a++){let t=e[i[a]],n=`@${i[a]}`
s.push(t),l.push(n)}s.push(l),a.setup(s,!1)}s.push(a)}),we.add(60,(t,{op1:e,op2:s})=>{var n
let i,r,a=t.stack.pop(),o=t.dynamicScope(),l=(n=t.fetchValue(s),i=n.definition,r=n.manager,n),h=1&e,c=r.create(t.env,i,a,o,t.getSelf(),!!h)
l.component=c
let u=r.getTag(c)
f(u)||t.updateWith(new Ss(u,i.name,c,r,o))}),we.add(61,(t,{op1:e})=>{var s=t.fetchValue(e)
let n=s.manager,i=s.component,r=n.getDestructor(i)
r&&t.newDestroyable(r)}),we.add(65,t=>{t.beginCacheGroup(),t.elements().pushSimpleBlock()}),we.add(62,t=>{t.loadValue(Se.t0,new vs)}),we.add(32,(t,{op1:e,op2:s,op3:n})=>{let i=t.constants.getString(e),r=t.stack.pop(),a=n?t.constants.getString(n):null
t.fetchValue(Se.t0).setAttribute(i,r,!!s,a)})
class vs{constructor(){this.attributes=p(),this.classes=[]}setAttribute(t,e,s,n){let i={value:e,namespace:n,trusting:s}
"class"===t&&this.classes.push(e),this.attributes[t]=i}flush(t){for(let e in this.attributes){let s=this.attributes[e],n=s.value,i=s.namespace,r=s.trusting
"class"===e&&(n=new ks(this.classes))
let a=t.elements().setDynamicAttribute(e,n.value(),r,i)
m(n)||t.updateWith(new ps(n,a))}}}class ks{constructor(t){this.list=t,this.tag=g(t),this.list=t}value(){let t=[],e=this.list
for(let s=0;s<e.length;s++){let n=w(e[s].value())
n&&t.push(n)}return 0===t.length?null:t.join(" ")}}we.add(67,(t,{op1:e})=>{var s=t.fetchValue(e)
let n=s.manager,i=s.component,r=t.fetchValue(Se.t0)
n.didCreateElement(i,t.elements().expectConstructing("DidCreateElementOpcode#evaluate"),r)}),we.add(63,(t,{op1:e})=>{let s=t.fetchValue(e)
t.stack.push(s.manager.getSelf(s.component))}),we.add(64,(t,{op1:e})=>{var s=t.fetchValue(e)
let n=s.manager,i=s.definition,r=s.component
t.stack.push(n.layoutFor(i,r,t.env))}),we.add(68,(t,{op1:e})=>{var s=t.fetchValue(e)
let n=s.manager,i=s.component,r=t.elements().popBlock()
n.didRenderLayout(i,r),t.env.didCreate(i,n),t.updateWith(new _s(n,i,r))}),we.add(66,t=>t.commitCacheGroup())
class Ss extends xe{constructor(t,e,s,n,i){super(),this.tag=t,this.name=e,this.component=s,this.manager=n,this.dynamicScope=i,this.type="update-component"}evaluate(t){let e=this.component,s=this.manager,n=this.dynamicScope
s.update(e,n)}toJSON(){return{args:[JSON.stringify(this.name)],guid:this._guid,type:this.type}}}class _s extends xe{constructor(t,e,s){super(),this.manager=t,this.component=e,this.bounds=s,this.type="did-update-layout",this.tag=Oe}evaluate(t){let e=this.manager,s=this.component,n=this.bounds
e.didUpdateLayout(s,n),t.env.didUpdate(s,e)}}const ws="COMPONENT DEFINITION [id=e59c754e-61eb-4392-8c4a-2c0ac72bfcd4]"
class Es{constructor(t,e,s){this[ws]=!0,this.name=t,this.manager=e,this.ComponentClass=s}}class xs extends ss{static create(t){return new xs(t)}toBool(t){return D(t)}}we.add(26,(t,{op1:e})=>{let s,n=t.stack.pop(),i=n.value()
s=e?t.elements().appendTrustingDynamicContent(i):t.elements().appendCautiousDynamicContent(i),m(n)||t.updateWith(new Cs(n,s))})
class Cs extends xe{constructor(t,e){super(),this.reference=t,this.content=e,this.tag=t.tag}evaluate(t){let e=this.content,s=this.reference
e.update(t.env,s.value())}}let Ns=function(t,e){console.info("Use `context`, and `get(<path>)` to debug this template."),e("this")}
class Ts{constructor(t,e,s){this.scope=t,this.locals=p()
for(let n=0;n<s.length;n++){let i=s[n],r=e[i-1],a=t.getSymbol(i)
this.locals[r]=a}}get(t){let e=this.scope,s=this.locals,n=t.split(".")
var i=t.split(".")
let r,a=i[0],o=i.slice(1),l=e.getEvalScope()
return"this"===a?r=e.getSelf():s[a]?r=s[a]:0===a.indexOf("@")&&l[a]?r=l[a]:(r=this.scope.getSelf(),o=n),o.reduce((t,e)=>t.get(e),r)}}we.add(71,(t,{op1:e,op2:s})=>{let n=t.constants.getOther(e),i=t.constants.getArray(s),r=new Ts(t.scope(),n,i)
Ns(t.getSelf().value(),t=>r.get(t).value())}),we.add(69,t=>{let e=t.stack,s=e.pop()
e.push(s.value().template.asPartial())})
class As{constructor(t){this.tag=t.tag,this.artifacts=t}value(){return!this.artifacts.isEmpty()}}we.add(54,t=>{let e=t.stack,s=e.pop(),n=e.pop(),i=t.env.iterableFor(s,n.value()),r=new Je(i)
e.push(r),e.push(new As(r.artifacts))}),we.add(52,(t,{op1:e})=>{t.enterList(e)}),we.add(53,t=>t.exitList()),we.add(55,(t,{op1:e})=>{let s=t.stack.peek().next()
if(s){let e=t.iterate(s.memo,s.value)
t.enterItem(s.key,e)}else t.goto(e)})
class Ds{constructor(t,e){this.element=t,this.nextSibling=e}}class Os{constructor(t,e,s){this.parentNode=t,this.first=e,this.last=s}parentElement(){return this.parentNode}firstNode(){return this.first}lastNode(){return this.last}}class Bs{constructor(t,e){this.parentNode=t,this.node=e}parentElement(){return this.parentNode}firstNode(){return this.node}lastNode(){return this.node}}class Ms{constructor(t){this.trusting=t}retry(t,e){let s=this.bounds,n=s.parentElement(),i=R(s),r=Hs.forInitialRender(t,n,i)
return this.trusting?r.__appendTrustingDynamicContent(e):r.__appendCautiousDynamicContent(e)}}class Ls{constructor(t){this.inner=t,this.bounds=t.bounds}parentElement(){return this.bounds.parentElement()}firstNode(){return this.bounds.firstNode()}lastNode(){return this.bounds.lastNode()}update(t,e){let s=this.inner=this.inner.update(t,e)
return this.bounds=s.bounds,this}}class Rs extends Ms{constructor(t,e,s){super(s),this.bounds=t,this.lastValue=e}update(t,e){let s=this.lastValue
if(e===s)return this
if(N(e)||C(e))return this.retry(t,e)
let n
return(n=x(e)?"":A(e)?e:String(e))!==s&&(this.bounds.firstNode().nodeValue=this.lastValue=n),this}}class Fs extends Ms{constructor(t,e,s){super(s),this.bounds=t,this.lastValue=e}update(t,e){return e===this.lastValue?this:this.retry(t,e)}}class Is extends Ms{constructor(t,e,s){super(s),this.bounds=t,this.lastValue=e}update(t,e){let s=this.lastValue
return e===s?this:C(e)&&e.toHTML()===s.toHTML()?(this.lastValue=e,this):this.retry(t,e)}}class Ps extends Ms{constructor(t,e,s){super(s),this.bounds=t,this.lastValue=e}update(t,e){let s=this.lastValue
return e===s?this:E(e)===s?this:this.retry(t,e)}}class js{constructor(t){this.node=t}firstNode(){return this.node}}class Us{constructor(t){this.node=t}lastNode(){return this.node}}class Hs{constructor(t,e,s){this.constructing=null,this.operations=null,this.cursorStack=new me,this.blockStack=new me,this.cursorStack.push(new Ds(e,s)),this.env=t,this.dom=t.getAppendOperations(),this.updateOperations=t.getDOM()}static forInitialRender(t,e,s){let n=new this(t,e,s)
return n.pushSimpleBlock(),n}static resume(t,e,s){let n=new this(t,e.parentElement(),s)
return n.pushSimpleBlock(),n.pushBlockTracker(e),n}get element(){return this.cursorStack.current.element}get nextSibling(){return this.cursorStack.current.nextSibling}expectConstructing(t){return n(this.constructing,`${t} should only be called while constructing an element`)}expectOperations(t){return n(this.operations,`${t} should only be called while constructing an element`)}block(){return n(this.blockStack.current,"Expected a current block tracker")}popElement(){this.cursorStack.pop(),n(this.cursorStack.current,"can't pop past the last element")}pushSimpleBlock(){return this.pushBlockTracker(new $s(this.element))}pushUpdatableBlock(){return this.pushBlockTracker(new zs(this.element))}pushBlockList(t){return this.pushBlockTracker(new Gs(this.element,t))}pushBlockTracker(t,e=!1){let s=this.blockStack.current
return null!==s&&(s.newDestroyable(t),e||s.didAppendBounds(t)),this.__openBlock(),this.blockStack.push(t),t}popBlock(){return this.block().finalize(this),this.__closeBlock(),n(this.blockStack.pop(),"Expected popBlock to return a block")}__openBlock(){}__closeBlock(){}openElement(t){let e=this.__openElement(t)
return this.constructing=e,e}__openElement(t){return this.dom.createElement(t,this.element)}flushElement(){let t=this.element,e=n(this.constructing,`flushElement should only be called when constructing an element`)
this.__flushElement(t,e),this.constructing=null,this.operations=null,this.pushElement(e,null),this.didOpenElement(e)}__flushElement(t,e){this.dom.insertBefore(t,e,this.nextSibling)}closeElement(){this.willCloseElement(),this.popElement()}pushRemoteElement(t,e=null){this.pushElement(t,e)
let s=new Vs(t)
this.pushBlockTracker(s,!0)}popRemoteElement(){this.popBlock(),this.popElement()}pushElement(t,e){this.cursorStack.push(new Ds(t,e))}didAddDestroyable(t){this.block().newDestroyable(t)}didAppendBounds(t){return this.block().didAppendBounds(t),t}didAppendNode(t){return this.block().didAppendNode(t),t}didOpenElement(t){return this.block().openElement(t),t}willCloseElement(){this.block().closeElement()}appendText(t){return this.didAppendNode(this.__appendText(t))}__appendText(t){let e=this.dom,s=this.element,n=this.nextSibling,i=e.createTextNode(t)
return e.insertBefore(s,i,n),i}appendNode(t){return this.didAppendNode(this.__appendNode(t))}__appendNode(t){return this.dom.insertBefore(this.element,t,this.nextSibling),t}appendFragment(t){return this.didAppendBounds(this.__appendFragment(t))}__appendFragment(t){let e=t.firstChild
if(e){let s=B(this.element,e,t.lastChild)
return this.dom.insertBefore(this.element,t,this.nextSibling),s}return M(this.element,this.__appendComment(""))}appendHTML(t){return this.didAppendBounds(this.__appendHTML(t))}__appendHTML(t){return this.dom.insertHTMLBefore(this.element,this.nextSibling,t)}appendTrustingDynamicContent(t){let e=new Ls(this.__appendTrustingDynamicContent(t))
return this.didAppendBounds(e),e}__appendTrustingDynamicContent(t){if(T(t)){let e=this.__appendFragment(t)
return new Fs(e,t,!0)}if(N(t)){let e=this.__appendNode(t)
return new Fs(M(this.element,e),e,!0)}{let e
e=x(t)?"":C(t)?t.toHTML():A(t)?t:String(t)
let s=this.__appendHTML(e)
return new Ps(s,e,!0)}}appendCautiousDynamicContent(t){let e=new Ls(this.__appendCautiousDynamicContent(t))
return this.didAppendBounds(e.bounds),e}__appendCautiousDynamicContent(t){if(T(t)){let e=this.__appendFragment(t)
return new Fs(e,t,!1)}if(N(t)){let e=this.__appendNode(t)
return new Fs(M(this.element,e),e,!1)}if(C(t)){let e=t.toHTML(),s=this.__appendHTML(e)
return new Is(s,t,!1)}{let e
e=x(t)?"":A(t)?t:String(t)
let s=this.__appendText(e),n=M(this.element,s)
return new Rs(n,e,!1)}}appendComment(t){return this.didAppendNode(this.__appendComment(t))}__appendComment(t){let e=this.dom,s=this.element,n=this.nextSibling,i=e.createComment(t)
return e.insertBefore(s,i,n),i}__setAttribute(t,e,s){this.dom.setAttribute(this.constructing,t,e,s)}__setProperty(t,e){this.constructing[t]=e}setStaticAttribute(t,e,s){this.__setAttribute(t,e,s)}setDynamicAttribute(t,e,s,n){let i=this.constructing,r=new(this.env.attributeFor(i,t,s,n))({element:i,name:t,namespace:n||null})
return r.set(this,e,this.env),r}}class $s{constructor(t){this.parent=t,this.first=null,this.last=null,this.destroyables=null,this.nesting=0}destroy(){let t=this.destroyables
if(t&&t.length)for(let e=0;e<t.length;e++)t[e].destroy()}parentElement(){return this.parent}firstNode(){return this.first&&this.first.firstNode()}lastNode(){return this.last&&this.last.lastNode()}openElement(t){this.didAppendNode(t),this.nesting++}closeElement(){this.nesting--}didAppendNode(t){0===this.nesting&&(this.first||(this.first=new js(t)),this.last=new Us(t))}didAppendBounds(t){0===this.nesting&&(this.first||(this.first=t),this.last=t)}newDestroyable(t){this.destroyables=this.destroyables||[],this.destroyables.push(t)}finalize(t){this.first||t.appendComment("")}}class Vs extends $s{destroy(){super.destroy(),R(this)}}class zs extends $s{reset(t){let e=this.destroyables
if(e&&e.length)for(let n=0;n<e.length;n++)t.didDestroy(e[n])
let s=R(this)
return this.first=null,this.last=null,this.destroyables=null,this.nesting=0,s}}class Gs{constructor(t,e){this.parent=t,this.boundList=e,this.parent=t,this.boundList=e}destroy(){this.boundList.forEachNode(t=>t.destroy())}parentElement(){return this.parent}firstNode(){let t=this.boundList.head()
return t&&t.firstNode()}lastNode(){let t=this.boundList.tail()
return t&&t.lastNode()}openElement(t){a(!1,"Cannot openElement directly inside a block list")}closeElement(){a(!1,"Cannot closeElement directly inside a block list")}didAppendNode(t){a(!1,"Cannot create a new node directly inside a block list")}didAppendBounds(t){}newDestroyable(t){}finalize(t){}}class Js extends Hs{constructor(t,e,s){if(super(t,e,s),this.lastMatchedNode=null,this.unmatchedAttributes=null,this.blockDepth=0,s)throw new Error("Rehydration with nextSibling not supported")
this._candidate=e.firstChild}get candidate(){let t=this._candidate
return t?I(t)&&j(t)===this.blockDepth?null:t:null}clearMismatch(t){if(I(t)){let e=P(t)
if(null!==e)return void this.clearBlock(e)}let e=t,s=this.nextSibling
for(;e&&e!==s;)e=z(e)
this._candidate=null}clearBlock(t){let e=this._candidate
for(;e&&(!I(e)||j(e)!==t);)e=z(e)
a(e&&I(e)&&j(e)===t,"An opening block should be paired with a closing block comment"),this._candidate=z(e)}__openBlock(){let t=this.candidate
if(t){if(I(t)){let e=P(t)
return null!==e&&(this.blockDepth=e),void(this._candidate=z(t))}this.clearMismatch(t)}}__closeBlock(){let t=this._candidate
if(t){if(I(t)){let e=j(t)
return null!==e&&(this.blockDepth=e-1),void(this._candidate=z(t))}this.clearMismatch(t)}}__appendNode(t){let e=this.candidate
return e||super.__appendNode(t)}__appendHTML(t){let e=this.markerBounds()
if(e){let t=e.firstNode(),s=e.lastNode(),n=B(this.element,t.nextSibling,s.previousSibling)
return z(t),z(s),n}return super.__appendHTML(t)}markerBounds(){let t=this._candidate
if(t&&H(t)){let e=t,s=n(e.nextSibling,`BUG: serialization markers must be paired`)
for(;s&&!H(s);)s=n(s.nextSibling,`BUG: serialization markers must be paired`)
return B(this.element,e,s)}return null}__appendText(t){let e=this.candidate
if(e){if(V(e)){let s=this._candidate=z(e),n=this.dom.createTextNode(t)
return this.dom.insertBefore(this.element,n,s),n}return F(e)?(e.nodeValue=t,this.lastMatchedNode=e,this._candidate=e.nextSibling,e):e&&($(e)||V(e))?(this._candidate=e.nextSibling,z(e),this.__appendText(t)):(this.clearMismatch(e),super.__appendText(t))}return super.__appendText(t)}__appendComment(t){let e=this._candidate
return e&&I(e)?(e.nodeValue=t,this.lastMatchedNode=e,this._candidate=e.nextSibling,e):(e&&this.clearMismatch(e),super.__appendComment(t))}__openElement(t,e){let s=this._candidate
return s&&U(s)&&s.tagName===t.toUpperCase()?(this.unmatchedAttributes=[].slice.call(s.attributes),this._candidate=s.firstChild,s):(s&&this.clearMismatch(s),super.__openElement(t))}__setAttribute(t,e,s){let n=this.unmatchedAttributes
if(n){let s=G(n,t)
if(s)return s.value=e,void n.splice(n.indexOf(s),1)}return super.__setAttribute(t,e,s)}__setProperty(t,e){let s=this.unmatchedAttributes
if(s){let n=G(s,t)
if(n)return n.value=e,void s.splice(s.indexOf(n),1)}return super.__setProperty(t,e)}__flushElement(t,e){let s=this.unmatchedAttributes
if(s){for(let t=0;t<s.length;t++)this.constructing.removeAttribute(s[t].name)
this.unmatchedAttributes=null}else super.__flushElement(t,e)}appendCautiousDynamicContent(t){let e=super.appendCautiousDynamicContent(t)
return e.update(this.env,t),e}willCloseElement(){let t=this.candidate
t&&this.clearMismatch(t),this._candidate=this.element.nextSibling,this.lastMatchedNode=this.element,super.willCloseElement()}pushRemoteElement(t,e=null){throw J()}popRemoteElement(){throw J()}didAppendBounds(t){super.didAppendBounds(t)
let e=t.lastNode()
return this._candidate=e&&e.nextSibling,t}didOpenElement(t){return super.didOpenElement(t),this._candidate=t.firstChild,t}}class Ws extends Hs{constructor(){super(...arguments),this.serializeBlockDepth=0}__openBlock(){let t=this.serializeBlockDepth++
this.__appendComment(`%+block:${t}%`),super.__openBlock()}__closeBlock(){super.__closeBlock(),this.__appendComment(`%-block:${--this.serializeBlockDepth}%`)}__appendHTML(t){let e=this.__appendComment("%glimmer%")
super.__appendHTML(t)
let s=this.__appendComment("%glimmer%")
return B(this.element,e,s)}__appendText(t){let e=O(this)
return""===t?this.__appendComment("%empty%"):(e&&e.nodeType===Node.TEXT_NODE&&this.__appendComment("%sep%"),super.__appendText(t))}}var Ys;(function(t){t[t.Text=0]="Text",t[t.Append=1]="Append",t[t.Comment=2]="Comment",t[t.Modifier=3]="Modifier",t[t.Block=4]="Block",t[t.Component=5]="Component",t[t.OpenElement=6]="OpenElement",t[t.FlushElement=7]="FlushElement",t[t.CloseElement=8]="CloseElement",t[t.StaticAttr=9]="StaticAttr",t[t.DynamicAttr=10]="DynamicAttr",t[t.Yield=11]="Yield",t[t.Partial=12]="Partial",t[t.DynamicArg=13]="DynamicArg",t[t.StaticArg=14]="StaticArg",t[t.TrustingAttr=15]="TrustingAttr",t[t.Debugger=16]="Debugger",t[t.ClientSideStatement=17]="ClientSideStatement",t[t.Unknown=18]="Unknown",t[t.Get=19]="Get",t[t.MaybeLocal=20]="MaybeLocal",t[t.FixThisBeforeWeMerge=21]="FixThisBeforeWeMerge",t[t.HasBlock=22]="HasBlock",t[t.HasBlockParams=23]="HasBlockParams",t[t.Undefined=24]="Undefined",t[t.Helper=25]="Helper",t[t.Concat=26]="Concat",t[t.ClientSideExpression=27]="ClientSideExpression"})(Ys||(Ys={}))
var Xs;(function(t){t.isUnknown=W(Ys.Unknown),t.isGet=W(Ys.Get),t.isConcat=W(Ys.Concat),t.isHelper=W(Ys.Helper),t.isHasBlock=W(Ys.HasBlock),t.isHasBlockParams=W(Ys.HasBlockParams),t.isUndefined=W(Ys.Undefined),t.isClientSide=W(Ys.ClientSideExpression),t.isMaybeLocal=W(Ys.MaybeLocal),t.isPrimitiveValue=function(t){return null===t||"object"!=typeof t}})(Xs||(Xs={}))
var Ks;(function(t){function e(t){return t[0]===Ys.StaticAttr||t[0]===Ys.DynamicAttr||t[0]===Ys.TrustingAttr}function s(t){return t[0]===Ys.StaticArg||t[0]===Ys.DynamicArg}t.isText=W(Ys.Text),t.isAppend=W(Ys.Append),t.isComment=W(Ys.Comment),t.isModifier=W(Ys.Modifier),t.isBlock=W(Ys.Block),t.isComponent=W(Ys.Component),t.isOpenElement=W(Ys.OpenElement),t.isFlushElement=W(Ys.FlushElement),t.isCloseElement=W(Ys.CloseElement),t.isStaticAttr=W(Ys.StaticAttr),t.isDynamicAttr=W(Ys.DynamicAttr),t.isYield=W(Ys.Yield),t.isPartial=W(Ys.Partial),t.isDynamicArg=W(Ys.DynamicArg),t.isStaticArg=W(Ys.StaticArg),t.isTrustingAttr=W(Ys.TrustingAttr),t.isDebugger=W(Ys.Debugger),t.isClientSide=W(Ys.ClientSideStatement),t.isAttribute=e,t.isArgument=s,t.isParameter=function(t){return e(t)||s(t)},t.getParameterName=function(t){return t[1]}})(Ks||(Ks={}))
var qs;(function(t){t[t.OpenComponentElement=0]="OpenComponentElement",t[t.DidCreateElement=1]="DidCreateElement",t[t.SetComponentAttrs=2]="SetComponentAttrs",t[t.DidRenderLayout=3]="DidRenderLayout",t[t.FunctionExpression=4]="FunctionExpression",t[t.Debugger=5]="Debugger"})(qs||(qs={}))
class Qs{constructor(t){this.handle=t}}class Zs{constructor(t,e){this.handle=t,this.symbolTable=e}}class tn{constructor(t){this.env=t}wrapLayout(t){this.inner=new en(this.env,t)}fromLayout(t,e){this.inner=new sn(this.env,t,e)}compile(){return this.inner.compile()}get tag(){return this.inner.tag}get attrs(){return this.inner.attrs}}class en{constructor(t,e){this.env=t,this.layout=e,this.tag=new nn,this.attrs=new rn}compile(){let t=this.env,e=this.layout,s={templateMeta:e.meta,symbols:e.symbols,asPartial:!1},n=this.tag.getDynamic(),i=this.tag.getStatic(),r=X(t,s)
if(r.startLabels(),n?(r.fetch(Se.s1),Q(n,r),r.dup(),r.load(Se.s1),r.test("simple"),r.jumpUnless("BODY"),r.fetch(Se.s1),r.putComponentOperations(),r.openDynamicElement()):i&&(r.putComponentOperations(),r.openElementWithOperations(i)),n||i){r.didCreateElement(Se.s0)
let t=this.attrs.buffer
r.setComponentAttrs(!0)
for(let e=0;e<t.length;e++)et(t[e],r)
r.setComponentAttrs(!1),r.flushElement()}r.label("BODY"),r.invokeStatic(e.asBlock()),n?(r.fetch(Se.s1),r.test("simple"),r.jumpUnless("END"),r.closeElement()):i&&r.closeElement(),r.label("END"),r.didRenderLayout(Se.s0),n&&r.load(Se.s1),r.stopLabels()
let a=r.start
r.finalize()
return new Zs(a,{meta:s,hasEval:e.hasEval,symbols:e.symbols.concat([pn])})}}class sn{constructor(t,e,s){this.env=t,this.componentName=e,this.layout=s,this.attrs=new rn}get tag(){throw new Error("BUG: Cannot call `tag` on an UnwrappedBuilder")}compile(){let t=this.env
return this.layout.asLayout(this.componentName,this.attrs.buffer).compileDynamic(t)}}class nn{constructor(){this.isDynamic=null,this.isStatic=null,this.staticTagName=null,this.dynamicTagName=null}getDynamic(){if(this.isDynamic)return this.dynamicTagName}getStatic(){if(this.isStatic)return this.staticTagName}static(t){this.isStatic=!0,this.staticTagName=t}dynamic(t){this.isDynamic=!0,this.dynamicTagName=[Ys.ClientSideExpression,qs.FunctionExpression,t]}}class rn{constructor(){this.buffer=[]}static(t,e){this.buffer.push([Ys.StaticAttr,t,e,null])}dynamic(t,e){this.buffer.push([Ys.DynamicAttr,t,[Ys.ClientSideExpression,qs.FunctionExpression,e],null])}}class an{constructor(t){this.builder=t,this.env=t.env}static(t,e){let s=e[0],n=e[1],i=e[2],r=e[3],a=this.builder
a.pushComponentManager(t),a.invokeComponent(null,s,n,i,r)}dynamic(t,e,s){let n=s[0],i=s[1],r=s[2],a=s[3],o=this.builder
if(!t||0===t.length)throw new Error("Dynamic syntax without an argument")
let l=this.builder.meta.templateMeta
o.startLabels(),o.pushFrame(),o.returnTo("END"),o.compileArgs(t[0],t[1],!0),o.helper(function(t,s){return e(t,s,l)}),o.dup(),o.test("simple"),o.enter(2),o.jumpUnless("ELSE"),o.pushDynamicComponentManager(),o.invokeComponent(null,n,i,r,a),o.label("ELSE"),o.exit(),o.return(),o.label("END"),o.popFrame(),o.stopLabels()}}class on{constructor(t,e,s){this.meta=t,this.statements=e,this.parameters=s}scan(){return new En(this.statements,{parameters:this.parameters,meta:this.meta})}}class ln{constructor(){this.labels=p(),this.targets=[]}label(t,e){this.labels[t]=e}target(t,e,s){this.targets.push({at:t,Target:e,target:s})}patch(t){let e=this.targets,s=this.labels
for(let i=0;i<e.length;i++){var n=e[i]
let r=n.at,a=s[n.target]-r
t.heap.setbyaddr(r+1,a)}}}class hn{constructor(t,e,s){this.env=t,this.meta=e,this.program=s,this.labelsStack=new me,this.isComponentAttrs=!1,this.constants=s.constants,this.heap=s.heap,this.start=this.heap.malloc()}get pos(){return r(this.heap.size())}get nextPos(){return this.heap.size()}upvars(t){return l(t)}reserve(t){this.push(t,0,0,0)}push(t,e=0,s=0,n=0){this.heap.push(t),this.heap.push(e),this.heap.push(s),this.heap.push(n)}finalize(){return this.push(22),this.heap.finishMalloc(this.start),this.start}setComponentAttrs(t){this.isComponentAttrs=t}pushArgs(t){this.push(58,!0===t?1:0)}get labels(){return n(this.labelsStack.current,"bug: not in a label stack")}startLabels(){this.labelsStack.push(new ln)}stopLabels(){n(this.labelsStack.pop(),"unbalanced push and pop labels").patch(this.program)}pushComponentManager(t){this.push(56,this.other(t))}pushDynamicComponentManager(){this.push(57)}prepareArgs(t){this.push(59,t)}createComponent(t,e,s){let n=(!0===e?1:0)|(!0===s?1:0)<<1
this.push(60,n,t)}registerComponentDestructor(t){this.push(61,t)}beginComponentTransaction(){this.push(65)}commitComponentTransaction(){this.push(66)}putComponentOperations(){this.push(62)}getComponentSelf(t){this.push(63,t)}getComponentLayout(t){this.push(64,t)}didCreateElement(t){this.push(67,t)}didRenderLayout(t){this.push(68,t)}getPartialTemplate(){this.push(69)}resolveMaybeLocal(t){this.push(70,this.string(t))}debugger(t,e){this.push(71,this.constants.other(t),this.constants.array(e))}dynamicContent(t){this.push(26,t?1:0)}text(t){this.push(24,this.constants.string(t))}openPrimitiveElement(t){this.push(27,this.constants.string(t))}openElementWithOperations(t){this.push(28,this.constants.string(t))}openDynamicElement(){this.push(29)}flushElement(){this.push(33)}closeElement(){this.push(34)}staticAttr(t,e,s){let n=this.constants.string(t),i=e?this.constants.string(e):0
if(this.isComponentAttrs)this.primitive(s),this.push(32,n,1,i)
else{let t=this.constants.string(s)
this.push(30,n,t,i)}}dynamicAttr(t,e,s){let n=this.constants.string(t),i=e?this.constants.string(e):0
this.isComponentAttrs?this.push(32,n,!0===s?1:0,i):this.push(31,n,!0===s?1:0,i)}comment(t){let e=this.constants.string(t)
this.push(25,e)}modifier(t){this.push(35,this.other(t))}putIterator(){this.push(54)}enterList(t){this.reserve(52),this.labels.target(this.pos,52,t)}exitList(){this.push(53)}iterate(t){this.reserve(55),this.labels.target(this.pos,55,t)}setVariable(t){this.push(4,t)}getVariable(t){this.push(5,t)}getProperty(t){this.push(6,this.string(t))}getBlock(t){this.push(8,t)}hasBlock(t){this.push(9,t)}hasBlockParams(t){this.push(10,t)}concat(t){this.push(11,t)}function(t){this.push(2,this.func(t))}load(t){this.push(17,t)}fetch(t){this.push(18,t)}dup(t=Se.sp,e=0){return this.push(15,t,e)}pop(t=1){return this.push(16,t)}pushRemoteElement(){this.push(36)}popRemoteElement(){this.push(37)}label(t){this.labels.label(t,this.nextPos)}pushRootScope(t,e){this.push(19,t,e?1:0)}pushChildScope(){this.push(20)}popScope(){this.push(21)}returnTo(t){this.reserve(23),this.labels.target(this.pos,23,t)}pushDynamicScope(){this.push(39)}popDynamicScope(){this.push(40)}pushImmediate(t){this.push(13,this.other(t))}primitive(t){let e,s=0
switch(typeof t){case"number":e=t
break
case"string":e=this.string(t),s=1
break
case"boolean":e=0|t,s=2
break
case"object":e=2,s=2
break
case"undefined":e=3,s=2
break
default:throw new Error("Invalid primitive passed to pushPrimitive")}this.push(14,s<<30|e)}helper(t){this.push(1,this.func(t))}pushBlock(t){this.push(7,this.block(t))}bindDynamicScope(t){this.push(38,this.names(t))}enter(t){this.push(49,t)}exit(){this.push(50)}return(){this.push(22)}pushFrame(){this.push(47)}popFrame(){this.push(48)}compileDynamicBlock(){this.push(41)}invokeDynamic(t){this.push(43,this.other(t))}invokeStatic(t,e=0){let s=t.symbolTable.parameters,n=s.length,i=Math.min(e,n)
if(this.pushFrame(),i){this.pushChildScope()
for(let t=0;t<i;t++)this.dup(Se.fp,e-t),this.setVariable(s[t])}let r=this.constants.block(t)
this.push(42,r),i&&this.popScope(),this.popFrame()}test(t){let e
if("const"===t)e=is
else if("simple"===t)e=rs
else if("environment"===t)e=as
else{if("function"!=typeof t)throw new Error("unreachable")
e=t}let s=this.constants.function(e)
this.push(51,s)}jump(t){this.reserve(44),this.labels.target(this.pos,44,t)}jumpIf(t){this.reserve(45),this.labels.target(this.pos,45,t)}jumpUnless(t){this.reserve(46),this.labels.target(this.pos,46,t)}string(t){return this.constants.string(t)}names(t){let e=[]
for(let s=0;s<t.length;s++){let n=t[s]
e[s]=this.constants.string(n)}return this.constants.array(e)}symbols(t){return this.constants.array(t)}other(t){return this.constants.other(t)}block(t){return t?this.constants.block(t):0}func(t){return this.constants.function(t)}}class cn extends hn{constructor(t,e,s=t.program){super(t,e,s),this.component=new an(this)}compileArgs(t,e,s){let n=0
if(t){for(let e=0;e<t.length;e++)Q(t[e],this)
n=t.length}this.pushImmediate(n)
let i=ke
if(e){i=e[0]
let t=e[1]
for(let e=0;e<t.length;e++)Q(t[e],this)}this.pushImmediate(i),this.pushArgs(s)}compile(t){return K(t)?t.compile(this):t}guardedAppend(t,e){this.startLabels(),this.pushFrame(),this.returnTo("END"),Q(t,this),this.dup(),this.test(t=>xs.create(t)),this.enter(2),this.jumpUnless("ELSE"),this.pushDynamicComponentManager(),this.invokeComponent(null,null,null,null,null),this.exit(),this.return(),this.label("ELSE"),this.dynamicContent(e),this.exit(),this.return(),this.label("END"),this.popFrame(),this.stopLabels()}invokeComponent(t,e,s,n,i=null){this.fetch(Se.s0),this.dup(Se.sp,1),this.load(Se.s0),this.pushBlock(n),this.pushBlock(i),this.compileArgs(e,s,!1),this.prepareArgs(Se.s0),this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent(Se.s0,null!==n,null!==i),this.registerComponentDestructor(Se.s0),this.getComponentSelf(Se.s0),this.getComponentLayout(Se.s0),this.invokeDynamic(new gn(t&&t.scan())),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction(),this.load(Se.s0)}template(t){return t?new on(this.meta,t.statements,t.parameters):null}}var un=Ys
const pn="&attrs"
class dn{constructor(t=0){this.offset=t,this.names=p(),this.funcs=[]}add(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1}compile(t,e){let s=t[this.offset],n=this.names[s],i=this.funcs[n]
a(!!i,`expected an implementation for ${0===this.offset?un[t[0]]:qs[t[1]]}`),i(t,e)}}const mn=new dn,fn=new dn(1)
mn.add(un.Text,(t,e)=>{e.text(t[1])}),mn.add(un.Comment,(t,e)=>{e.comment(t[1])}),mn.add(un.CloseElement,(t,e)=>{e.closeElement()}),mn.add(un.FlushElement,(t,e)=>{e.flushElement()}),mn.add(un.Modifier,(t,e)=>{let s=e.env,n=e.meta,i=t[1],r=t[2],a=t[3]
if(!s.hasModifier(i,n.templateMeta))throw new Error(`Compile Error ${i} is not a modifier: Helpers may not be used in the element form.`)
e.compileArgs(r,a,!0),e.modifier(s.lookupModifier(i,n.templateMeta))}),mn.add(un.StaticAttr,(t,e)=>{let s=t[1],n=t[2],i=t[3]
e.staticAttr(s,i,n)}),mn.add(un.DynamicAttr,(t,e)=>{q(t,!1,e)}),mn.add(un.TrustingAttr,(t,e)=>{q(t,!0,e)}),mn.add(un.OpenElement,(t,e)=>{e.openPrimitiveElement(t[1])}),fn.add(qs.OpenComponentElement,(t,e)=>{e.putComponentOperations(),e.openElementWithOperations(t[2])}),fn.add(qs.DidCreateElement,(t,e)=>{e.didCreateElement(Se.s0)}),fn.add(qs.SetComponentAttrs,(t,e)=>{e.setComponentAttrs(t[2])}),fn.add(qs.Debugger,()=>{}),fn.add(qs.DidRenderLayout,(t,e)=>{e.didRenderLayout(Se.s0)}),mn.add(un.Append,(t,e)=>{let s=t[1],n=t[2]
if(!0===(e.env.macros().inlines.compile(t,e)||s))return
let i=Sn.isGet(s),r=Sn.isMaybeLocal(s)
n?e.guardedAppend(s,!0):i||r?e.guardedAppend(s,!1):(Q(s,e),e.dynamicContent(!1))}),mn.add(un.Block,(t,e)=>{let s=t[1],n=t[2],i=t[3],r=t[4],a=t[5],o=e.template(r),l=e.template(a),h=o&&o.scan(),c=l&&l.scan()
e.env.macros().blocks.compile(s,n,i,h,c,e)})
class gn{constructor(t){this.attrs=t}invoke(t,e){var s=e.symbolTable
let n=s.symbols,i=s.hasEval,r=t.stack,o=t.pushRootScope(n.length+1,!0)
o.bindSelf(r.pop()),o.bindBlock(n.indexOf(pn)+1,this.attrs)
let l=null,h=-1
i&&(h=n.indexOf("$eval")+1,l=p())
let c=r.pop()
for(let a=c.length-1;a>=0;a--){let t=n.indexOf(c[a]),e=r.pop();-1!==t&&o.bindSymbol(t+1,e),i&&(l[c[a]]=e)}let u=r.pop()
a("number"==typeof u,"[BUG] Incorrect value of positional argument count found during invoke-dynamic-layout."),r.pop(u)
let d=n.indexOf("&inverse"),m=r.pop();-1!==d&&o.bindBlock(d+1,m),l&&(l["&inverse"]=m)
let f=n.indexOf("&default"),g=r.pop();-1!==f&&o.bindBlock(f+1,g),l&&(l["&default"]=g),l&&o.bindEvalScope(l),t.pushFrame(),t.call(e.handle)}toJSON(){return{GlimmerDebug:"<invoke-dynamic-layout>"}}}mn.add(un.Component,(t,e)=>{let s=t[1],n=t[2],i=t[3],r=t[4]
if(e.env.hasComponentDefinition(s,e.meta.templateMeta)){let t=e.template(r),a=[[un.ClientSideStatement,qs.SetComponentAttrs,!0],...n,[un.ClientSideStatement,qs.SetComponentAttrs,!1]],o=new on(e.meta,a,ke),l=e.env.getComponentDefinition(s,e.meta.templateMeta)
e.pushComponentManager(l),e.invokeComponent(o,null,i,t&&t.scan())}else{if(r&&r.parameters.length)throw new Error(`Compile Error: Cannot find component ${s}`)
e.openPrimitiveElement(s)
for(let t=0;t<n.length;t++)mn.compile(n[t],e)
if(e.flushElement(),r){let t=r.statements
for(let s=0;s<t.length;s++)mn.compile(t[s],e)}e.closeElement()}})
class yn{constructor(t,e){this.outerSymbols=t,this.evalInfo=e}invoke(t,e){let n=s(e),i=n.symbolTable.symbols,r=t.scope(),a=t.pushRootScope(i.length,!1)
a.bindCallerScope(r.getCallerScope()),a.bindEvalScope(r.getEvalScope()),a.bindSelf(r.getSelf())
let o=this.evalInfo,l=this.outerSymbols,h=p()
for(let s=0;s<o.length;s++){let t=o[s],e=l[t-1],n=r.getSymbol(t)
h[e]=n}let c=r.getEvalScope()
for(let s=0;s<i.length;s++){let t=s+1,e=c[i[s]]
void 0!==e&&a.bind(t,e)}a.bindPartialMap(h),t.pushFrame(),t.call(n.handle)}}mn.add(un.Partial,(t,e)=>{let s=t[1],n=t[2]
var i=e.meta
let r=i.templateMeta,a=i.symbols
e.startLabels(),e.pushFrame(),e.returnTo("END"),Q(s,e),e.pushImmediate(1),e.pushImmediate(ke),e.pushArgs(!0),e.helper(function(t,e){let s=t.env
return k(e.positional.at(0),t=>{if("string"==typeof t&&t){if(!s.hasPartial(t,r))throw new Error(`Could not find a partial named "${t}"`)
return s.lookupPartial(t,r)}if(t)throw new Error(`Could not find a partial named "${String(t)}"`)
return null})}),e.dup(),e.test("simple"),e.enter(2),e.jumpUnless("ELSE"),e.getPartialTemplate(),e.compileDynamicBlock(),e.invokeDynamic(new yn(a,n)),e.popScope(),e.popFrame(),e.label("ELSE"),e.exit(),e.return(),e.label("END"),e.popFrame(),e.stopLabels()})
class bn{constructor(t){this.callerCount=t}invoke(t,e){let s=this.callerCount,n=t.stack
if(!e)return t.pushFrame(),void t.pushCallerScope()
let i=e.symbolTable.parameters,r=i?i.length:0,a=Math.min(s,r)
t.pushFrame(),t.pushCallerScope(r>0)
let o=t.scope()
for(let l=0;l<a;l++)o.bindSymbol(i[l],n.fromBase(s-l))
t.call(e.handle)}toJSON(){return{GlimmerDebug:`<invoke-dynamic-yield caller-count=${this.callerCount}>`}}}mn.add(un.Yield,(t,e)=>{let s=t[1],n=Z(t[2],e)
e.getBlock(s),e.compileDynamicBlock(),e.invokeDynamic(new bn(n)),e.popScope(),e.popFrame(),n&&e.pop(n)}),mn.add(un.Debugger,(t,e)=>{let s=t[1]
e.debugger(e.meta.symbols,s)}),mn.add(un.ClientSideStatement,(t,e)=>{fn.compile(t,e)})
const vn=new dn,kn=new dn(1)
var Sn=Xs
vn.add(un.Unknown,(t,e)=>{let s=t[1]
e.env.hasHelper(s,e.meta.templateMeta)?vn.compile([un.Helper,s,ke,null],e):e.meta.asPartial?e.resolveMaybeLocal(s):(e.getVariable(0),e.getProperty(s))}),vn.add(un.Concat,(t,e)=>{let s=t[1]
for(let n=0;n<s.length;n++)Q(s[n],e)
e.concat(s.length)}),kn.add(qs.FunctionExpression,(t,e)=>{e.function(t[2])}),vn.add(un.Helper,(t,e)=>{let s=e.env,n=e.meta,i=t[1],r=t[2],a=t[3]
if(!s.hasHelper(i,n.templateMeta))throw new Error(`Compile Error: ${i} is not a helper`)
e.compileArgs(r,a,!0),e.helper(s.lookupHelper(i,n.templateMeta))}),vn.add(un.Get,(t,e)=>{let s=t[1],n=t[2]
e.getVariable(s)
for(let i=0;i<n.length;i++)e.getProperty(n[i])}),vn.add(un.MaybeLocal,(t,e)=>{let s=t[1]
if(e.meta.asPartial){let t=s[0]
s=s.slice(1),e.resolveMaybeLocal(t)}else e.getVariable(0)
for(let n=0;n<s.length;n++)e.getProperty(s[n])}),vn.add(un.Undefined,(t,e)=>e.primitive(void 0)),vn.add(un.HasBlock,(t,e)=>{e.hasBlock(t[1])}),vn.add(un.HasBlockParams,(t,e)=>{e.hasBlockParams(t[1])}),vn.add(un.ClientSideExpression,(t,e)=>{kn.compile(t,e)})
class _n{constructor(){this.names=p(),this.funcs=[]}add(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1}addMissing(t){this.missing=t}compile(t,e,s,n,i,r){let o=this.names[t]
void 0===o?(a(!!this.missing,`${t} not found, and no catch-all block handler was registered`),a(!!(0,this.missing)(t,e,s,n,i,r),`${t} not found, and the catch-all block handler didn't handle it`)):(0,this.funcs[o])(e,s,n,i,r)}}class wn{constructor(){this.names=p(),this.funcs=[]}add(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1}addMissing(t){this.missing=t}compile(t,e){let s=t[1]
if(!Array.isArray(s))return["expr",s]
let n,i,r
if(s[0]===un.Helper)n=s[1],i=s[2],r=s[3]
else{if(s[0]!==un.Unknown)return["expr",s]
n=s[1],i=r=null}let a=this.names[n]
if(void 0===a&&this.missing){let t=(0,this.missing)(n,i,r,e)
return!1===t?["expr",s]:t}if(void 0!==a){let t=(0,this.funcs[a])(n,i,r,e)
return!1===t?["expr",s]:t}return["expr",s]}}tt(new _n,new wn)
class En{constructor(t,e){this.statements=t,this.symbolTable=e,this.compiledStatic=null,this.compiledDynamic=null}compileStatic(t){let e=this.compiledStatic
if(!e){let s=st(this.statements,this.symbolTable.meta,t)
s.finalize()
let n=s.start
e=this.compiledStatic=new Qs(n)}return e}compileDynamic(t){let e=this.compiledDynamic
if(!e){let s=this.compileStatic(t)
e=new Zs(s.handle,this.symbolTable)}return e}}var xn=Ys
class Cn{constructor(t,e){this.block=t,this.env=e}scanEntryPoint(t){let e=this.block,s=e.statements,n=e.symbols,i=e.hasEval
return new En(s,{meta:t,symbols:n,hasEval:i})}scanBlock(t){let e=this.block.statements
return new En(e,{meta:t,parameters:ke})}scanLayout(t,e,s){let n=this.block,i=n.symbols,r=n.hasEval,a=new Nn(n,this.env,t,e,s)
return new En(a.scan(),{meta:t,hasEval:r,symbols:i})}}class Nn{constructor(t,e,s,n,i){this.env=e,this.attrs=n,this.componentName=i,this.state=0
let r=t.statements,a=t.symbols
this.statements=r,this.symbols=a,this.meta=s.templateMeta}scan(){let t=this.statements
this.state=0
let e=[]
for(let s=0;s<t.length;s++)this.processStatement(this.statements[s],e)
return e.push([xn.ClientSideStatement,qs.DidRenderLayout]),e}processStatement(t,e){switch(this.state){case 0:this.processBeforeTopLevel(t,e)
break
case 1:this.processInTopLevel(t,e)
break
case 2:e.push(t)
break
default:throw i()}}processBeforeTopLevel(t,e){Ks.isComponent(t)?this.processTopLevelComponent(t,e):Ks.isOpenElement(t)?this.processIsOpenElement(t,e):e.push(t)}processTopLevelComponent(t,e){let s=t[1],n=t[2],i=t[4]
if(this.env.hasComponentDefinition(s,this.meta)&&s!==this.componentName)return e.push(t),void(this.state=2)
a(!this.env.hasComponentDefinition(s,this.meta)||s===this.componentName,`Cannot use a component (<${s}>) as the top-level element in the layout of <${this.componentName}>`),this.state=1,e.push([xn.ClientSideStatement,qs.SetComponentAttrs,!0]),e.push([xn.ClientSideStatement,qs.OpenComponentElement,s]),e.push([xn.ClientSideStatement,qs.DidCreateElement])
for(let r=0;r<n.length;r++)this.processStatement(n[r],e)
if(this.processStatement([xn.FlushElement],e),i){let t=i.statements
for(let s=0;s<t.length;s++)this.processStatement(t[s],e)}this.processStatement([xn.CloseElement],e)}processIsOpenElement(t,e){let s=t[1]
this.state=1,e.push([xn.ClientSideStatement,qs.SetComponentAttrs,!0]),e.push([xn.ClientSideStatement,qs.OpenComponentElement,s]),e.push([xn.ClientSideStatement,qs.DidCreateElement])}processInTopLevel(t,e){if(a(!Ks.isModifier(t),`Cannot use element modifiers ({{${t[1]} ...}}) in the top-level element in the layout of <${this.componentName}>`),Ks.isFlushElement(t)){let t=this.symbols,s=this.attrs
this.state=2
let n=t.push(pn)
e.push(...s),e.push([xn.Yield,n,ke]),e.push([xn.ClientSideStatement,qs.SetComponentAttrs,!1])}e.push(t)}}class Tn{constructor(){this.references=[],this.strings=[],this.expressions=[],this.arrays=[],this.blocks=[],this.functions=[],this.others=[]}getReference(t){return this.references[t-1]}reference(t){let e=this.references.length
return this.references.push(t),e+1}getString(t){return this.strings[t-1]}string(t){let e=this.strings.length
return this.strings.push(t),e+1}getExpression(t){return this.expressions[t-1]}getArray(t){return this.arrays[t-1]}getNames(t){let e=[],s=this.getArray(t)
for(let n=0;n<s.length;n++){let t=s[n]
e[n]=this.getString(t)}return e}array(t){let e=this.arrays.length
return this.arrays.push(t),e+1}getBlock(t){return this.blocks[t-1]}block(t){let e=this.blocks.length
return this.blocks.push(t),e+1}getFunction(t){return this.functions[t-1]}function(t){let e=this.functions.length
return this.functions.push(t),e+1}getOther(t){return this.others[t-1]}other(t){let e=this.others.length
return this.others.push(t),e+1}}const An=["javascript:","vbscript:"],Dn=["A","BODY","LINK","IMG","IFRAME","BASE","FORM"],On=["EMBED"],Bn=["href","src","background","action"],Mn=["src"],Ln={BUTTON:{type:!0,form:!0},INPUT:{type:!0,form:!0,autocorrect:!0,list:!0},SELECT:{form:!0},OPTION:{form:!0},TEXTAREA:{form:!0},LABEL:{form:!0},FIELDSET:{form:!0},LEGEND:{form:!0},OBJECT:{form:!0}}
let Rn={colgroup:{depth:2,before:"<table><colgroup>",after:"</colgroup></table>"},table:{depth:1,before:"<table>",after:"</table>"},tbody:{depth:2,before:"<table><tbody>",after:"</tbody></table>"},tfoot:{depth:2,before:"<table><tfoot>",after:"</tfoot></table>"},thead:{depth:2,before:"<table><thead>",after:"</thead></table>"},tr:{depth:3,before:"<table><tbody><tr>",after:"</tr></tbody></table>"}}
const Fn="http://www.w3.org/2000/svg",In="http://www.w3.org/2000/svg",Pn={foreignObject:1,desc:1,title:1},jn=Object.create(null);["b","big","blockquote","body","br","center","code","dd","div","dl","dt","em","embed","h1","h2","h3","h4","h5","h6","head","hr","i","img","li","listing","main","meta","nobr","ol","p","pre","ruby","s","small","span","strong","strike","sub","sup","table","tt","u","ul","var"].forEach(t=>jn[t]=1)
let Un="undefined"==typeof document?null:document
class Hn{constructor(t){this.document=t,this.setupUselessElement()}setupUselessElement(){this.uselessElement=this.document.createElement("div")}createElement(t,e){let s,n
if(e?(s=e.namespaceURI===In||"svg"===t,n=Pn[e.tagName]):(s="svg"===t,n=!1),s&&!n){if(jn[t])throw new Error(`Cannot create a ${t} inside an SVG context`)
return this.document.createElementNS(In,t)}return this.document.createElement(t)}insertBefore(t,e,s){t.insertBefore(e,s)}insertHTMLBefore(t,e,s){return vt(this.uselessElement,t,e,s)}createTextNode(t){return this.document.createTextNode(t)}createComment(t){return this.document.createComment(t)}}var $n;(function(t){class e extends Hn{createElementNS(t,e){return this.document.createElementNS(t,e)}setAttribute(t,e,s,n=null){n?t.setAttributeNS(n,e,s):t.setAttribute(e,s)}}t.TreeConstruction=e
let s=e
s=gt(Un,s),s=ct(Un,s),s=dt(Un,s,In),t.DOMTreeConstruction=s})($n||($n={}))
class Vn extends Hn{constructor(t){super(t),this.document=t,this.namespace=null}setAttribute(t,e,s){t.setAttribute(e,s)}setAttributeNS(t,e,s,n){t.setAttributeNS(e,s,n)}removeAttribute(t,e){t.removeAttribute(e)}removeAttributeNS(t,e,s){t.removeAttributeNS(e,s)}insertNodeBefore(t,e,s){if(kt(e)){let n=e.firstChild,i=e.lastChild
return this.insertBefore(t,e,s),new Os(t,n,i)}return this.insertBefore(t,e,s),new Bs(t,e)}insertTextBefore(t,e,s){let n=this.createTextNode(s)
return this.insertBefore(t,n,e),n}insertBefore(t,e,s){t.insertBefore(e,s)}insertAfter(t,e,s){this.insertBefore(t,e,s.nextSibling)}}let zn=Vn
zn=function(t,e){return t&&yt(t)?class extends e{constructor(t){super(t),this.uselessComment=t.createComment("")}insertHTMLBefore(t,e,s){if(null===s)return super.insertHTMLBefore(t,e,s)
let n=!1,i=e?e.previousSibling:t.lastChild
i&&i instanceof Text&&(n=!0,t.insertBefore(this.uselessComment,e))
let r=super.insertHTMLBefore(t,e,s)
return n&&t.removeChild(this.uselessComment),r}}:e}(Un,zn),zn=function(t,e){if(!t)return e
if(!pt(t))return e
let s=t.createElement("div")
return class extends e{insertHTMLBefore(t,e,n){if(null===n||""===n)return super.insertHTMLBefore(t,e,n)
let i=t.tagName.toLowerCase(),r=Rn[i]
return void 0===r?super.insertHTMLBefore(t,e,n):ut(t,r,s,n,e)}}}(Un,zn)
var Gn=zn=function(t,e,s){if(!t)return e
if(!ft(t,s))return e
let n=t.createElement("div")
return class extends e{insertHTMLBefore(t,e,i){return null===i||""===i?super.insertHTMLBefore(t,e,i):t.namespaceURI!==s?super.insertHTMLBefore(t,e,i):mt(t,n,i,e)}}}(Un,zn,In)
const Jn=$n.DOMTreeConstruction
class Wn{constructor(t){this.attribute=t}}class Yn extends Wn{set(t,e,s){let n=Ct(e)
if(null!==n){var i=this.attribute
let e=i.name,s=i.namespace
t.__setAttribute(e,n,s)}}update(t,e){let s=Ct(t)
var n=this.attribute
let i=n.element,r=n.name
null===s?i.removeAttribute(r):i.setAttribute(r,s)}}class Xn extends Wn{set(t,e,s){if(null!==e&&void 0!==e){let s=this.attribute.name
t.__setProperty(s,e)}}update(t,e){var s=this.attribute
s.element[s.name]=t,null!==t&&void 0!==t||this.removeAttribute()}removeAttribute(){var t=this.attribute
let e=t.element,s=t.name,n=t.namespace
n?e.removeAttributeNS(n,s):e.removeAttribute(s)}}class Kn extends Xn{set(t,e,s){var n=this.attribute
let i=ot(s,n.element,n.name,e)
super.set(t,i,s)}update(t,e){var s=this.attribute
let n=ot(e,s.element,s.name,t)
super.update(n,e)}}class qn extends Yn{set(t,e,s){var n=this.attribute
let i=ot(s,n.element,n.name,e)
super.set(t,i,s)}update(t,e){var s=this.attribute
let n=ot(e,s.element,s.name,t)
super.update(n,e)}}class Qn extends Xn{set(t,e){t.__setProperty("value",w(e))}update(t){let e=this.attribute.element,s=e.value,n=w(t)
s!==n&&(e.value=n)}}class Zn extends Xn{set(t,e){null!==e&&void 0!==e&&!1!==e&&t.__setProperty("selected",!0)}update(t){let e=this.attribute.element
e.selected=!!t}}class ti{constructor(t,e,s,n){this.slots=t,this.callerScope=e,this.evalScope=s,this.partialMap=n}static root(t,e=0){let s=new Array(e+1)
for(let n=0;n<=e;n++)s[n]=Qe
return new ti(s,null,null,null).init({self:t})}static sized(t=0){let e=new Array(t+1)
for(let s=0;s<=t;s++)e[s]=Qe
return new ti(e,null,null,null)}init({self:t}){return this.slots[0]=t,this}getSelf(){return this.get(0)}getSymbol(t){return this.get(t)}getBlock(t){return this.get(t)}getEvalScope(){return this.evalScope}getPartialMap(){return this.partialMap}bind(t,e){this.set(t,e)}bindSelf(t){this.set(0,t)}bindSymbol(t,e){this.set(t,e)}bindBlock(t,e){this.set(t,e)}bindEvalScope(t){this.evalScope=t}bindPartialMap(t){this.partialMap=t}bindCallerScope(t){this.callerScope=t}getCallerScope(){return this.callerScope}child(){return new ti(this.slots.slice(),this.callerScope,this.evalScope,this.partialMap)}get(t){if(t>=this.slots.length)throw new RangeError(`BUG: cannot get $${t} from scope; length=${this.slots.length}`)
return this.slots[t]}set(t,e){if(t>=this.slots.length)throw new RangeError(`BUG: cannot get $${t} from scope; length=${this.slots.length}`)
this.slots[t]=e}}class ei{constructor(){this.scheduledInstallManagers=[],this.scheduledInstallModifiers=[],this.scheduledUpdateModifierManagers=[],this.scheduledUpdateModifiers=[],this.createdComponents=[],this.createdManagers=[],this.updatedComponents=[],this.updatedManagers=[],this.destructors=[]}didCreate(t,e){this.createdComponents.push(t),this.createdManagers.push(e)}didUpdate(t,e){this.updatedComponents.push(t),this.updatedManagers.push(e)}scheduleInstallModifier(t,e){this.scheduledInstallManagers.push(e),this.scheduledInstallModifiers.push(t)}scheduleUpdateModifier(t,e){this.scheduledUpdateModifierManagers.push(e),this.scheduledUpdateModifiers.push(t)}didDestroy(t){this.destructors.push(t)}commit(){let t=this.createdComponents,e=this.createdManagers
for(let h=0;h<t.length;h++){let s=t[h]
e[h].didCreate(s)}let s=this.updatedComponents,n=this.updatedManagers
for(let h=0;h<s.length;h++){let t=s[h]
n[h].didUpdate(t)}let i=this.destructors
for(let h=0;h<i.length;h++)i[h].destroy()
let r=this.scheduledInstallManagers,a=this.scheduledInstallModifiers
for(let h=0;h<r.length;h++){let t=r[h],e=a[h]
t.install(e)}let o=this.scheduledUpdateModifierManagers,l=this.scheduledUpdateModifiers
for(let h=0;h<o.length;h++){let t=o[h],e=l[h]
t.update(e)}}}class si{constructor(t){this.heap=t,this.offset=0}get type(){return this.heap.getbyaddr(this.offset)}get op1(){return this.heap.getbyaddr(this.offset+1)}get op2(){return this.heap.getbyaddr(this.offset+2)}get op3(){return this.heap.getbyaddr(this.offset+3)}}var ni;(function(t){t[t.Allocated=0]="Allocated",t[t.Freed=1]="Freed",t[t.Purged=2]="Purged",t[t.Pointer=3]="Pointer"})(ni||(ni={}))
class ii{constructor(){this.heap=[],this.offset=0,this.handle=0,this.table=[]}push(t){this.heap[this.offset++]=t}getbyaddr(t){return this.heap[t]}setbyaddr(t,e){this.heap[t]=e}malloc(){this.table.push(this.offset,0,0)
let t=this.handle
return this.handle+=3,t}finishMalloc(t){let e=this.table[t],s=this.offset
this.table[t+1]=s-e}size(){return this.offset}getaddr(t){return this.table[t]}gethandle(t){this.table.push(t,0,ni.Pointer)
let e=this.handle
return this.handle+=3,e}sizeof(t){return-1}free(t){this.table[t+2]=1}compact(){let t=0,e=this.table,s=this.table.length,n=this.heap
for(let i=0;i<s;i+=3){let s=e[i],r=e[i+1],a=e[i+2]
if(a!==ni.Purged)if(a===ni.Freed)e[i+2]=2,t+=r
else if(a===ni.Allocated){for(let e=s;e<=i+r;e++)n[e-t]=n[e]
e[i]=s-t}else a===ni.Pointer&&(e[i]=s-t)}this.offset=this.offset-t}}class ri{constructor(){this.heap=new ii,this._opcode=new si(this.heap),this.constants=new Tn}opcode(t){return this._opcode.offset=t,this._opcode}}class ai{constructor({appendOperations:t,updateOperations:e}){this._macros=null,this._transaction=null,this.program=new ri,this.appendOperations=t,this.updateOperations=e}toConditionalReference(t){return new ss(t)}getAppendOperations(){return this.appendOperations}getDOM(){return this.updateOperations}getIdentity(t){return c(t)+""}begin(){a(!this._transaction,"a glimmer transaction was begun, but one already exists. You may have a nested transaction"),this._transaction=new ei}get transaction(){return n(this._transaction,"must be in a transaction")}didCreate(t,e){this.transaction.didCreate(t,e)}didUpdate(t,e){this.transaction.didUpdate(t,e)}scheduleInstallModifier(t,e){this.transaction.scheduleInstallModifier(t,e)}scheduleUpdateModifier(t,e){this.transaction.scheduleUpdateModifier(t,e)}didDestroy(t){this.transaction.didDestroy(t)}commit(){let t=this.transaction
this._transaction=null,t.commit()}attributeFor(t,e,s,n=null){return St(t,e)}macros(){let t=this._macros
return t||(this._macros=t=this.populateBuiltins()),t}populateBuiltins(){return tt()}}class oi{constructor(t,{alwaysRevalidate:e=!1}){this.frameStack=new me,this.env=t,this.constants=t.program.constants,this.dom=t.getDOM(),this.alwaysRevalidate=e}execute(t,e){let s=this.frameStack
for(this.try(t,e);;){if(s.isEmpty())break
let t=this.frame.nextStatement()
null!==t?t.evaluate(this):this.frameStack.pop()}}get frame(){return n(this.frameStack.current,"bug: expected a frame")}goto(t){this.frame.goto(t)}try(t,e){this.frameStack.push(new pi(this,t,e))}throw(){this.frame.handleException(),this.frameStack.pop()}evaluateOpcode(t){t.evaluate(this)}}class li extends xe{constructor(t,e,s,n){super(),this.start=t,this.type="block",this.next=null,this.prev=null
let i=e.env,r=e.scope,a=e.dynamicScope,o=e.stack
this.children=n,this.env=i,this.scope=r,this.dynamicScope=a,this.stack=o,this.bounds=s}parentElement(){return this.bounds.parentElement()}firstNode(){return this.bounds.firstNode()}lastNode(){return this.bounds.lastNode()}evaluate(t){t.try(this.children,null)}destroy(){this.bounds.destroy()}didDestroy(){this.env.didDestroy(this.bounds)}toJSON(){let t=p()
return t.guid=`${this._guid}`,{guid:this._guid,type:this.type,details:t,children:this.children.toArray().map(t=>t.toJSON())}}}class hi extends li{constructor(t,e,s,n){super(t,e,s,n),this.type="try",this.tag=this._tag=Pe.create(Oe)}didInitializeChildren(){this._tag.inner.update(y(this.children))}evaluate(t){t.try(this.children,this)}handleException(){let t=this.env,e=this.bounds,s=this.children,n=this.scope,i=this.dynamicScope,r=this.start,a=this.stack,o=this.prev,l=this.next
s.clear()
let h=Hs.resume(t,e,e.reset(t)),c=new fi(t,n,i,h),u=new ge
c.execute(r,t=>{t.stack=mi.restore(a),t.updatingOpcodeStack.push(u),t.updateWith(this),t.updatingOpcodeStack.push(s)}),this.prev=o,this.next=l}toJSON(){let t=super.toJSON(),e=t.details
return e||(e=t.details={}),super.toJSON()}}class ci{constructor(t,e){this.opcode=t,this.marker=e,this.didInsert=!1,this.didDelete=!1,this.map=t.map,this.updating=t.children}insert(t,e,s,n){let i=this.map,r=this.opcode,a=this.updating,o=null,l=null
o=n?(l=i[n]).bounds.firstNode():this.marker
let h=r.vmForInsertion(o),c=null,u=r.start
h.execute(u,n=>{i[t]=c=n.iterate(s,e),n.updatingOpcodeStack.push(new ge),n.updateWith(c),n.updatingOpcodeStack.push(c.children)}),a.insertBefore(c,l),this.didInsert=!0}retain(t,e,s){}move(t,e,s,n){let i=this.map,r=this.updating,a=i[t],o=i[n]||null
n?L(a,o.firstNode()):L(a,this.marker),r.remove(a),r.insertBefore(a,o)}delete(t){let e=this.map,s=e[t]
s.didDestroy(),R(s),this.updating.remove(s),delete e[t],this.didDelete=!0}done(){this.opcode.didInitializeChildren(this.didInsert||this.didDelete)}}class ui extends li{constructor(t,e,s,n,i){super(t,e,s,n),this.type="list-block",this.map=p(),this.lastIterated=Ce,this.artifacts=i
let r=this._tag=Pe.create(Oe)
this.tag=b([i.tag,r])}didInitializeChildren(t=!0){this.lastIterated=this.artifacts.tag.value(),t&&this._tag.inner.update(y(this.children))}evaluate(t){let e=this.artifacts,s=this.lastIterated
if(!e.tag.validate(s)){let s=this.bounds,i=t.dom,r=i.createComment("")
i.insertAfter(s.parentElement(),r,n(s.lastNode(),"can't insert after an empty bounds"))
let a=new ci(this,r)
new Ye({target:a,artifacts:e}).sync(),this.parentElement().removeChild(r)}super.evaluate(t)}vmForInsertion(t){let e=this.env,s=this.scope,n=this.dynamicScope,i=Hs.forInitialRender(this.env,this.bounds.parentElement(),t)
return new fi(e,s,n,i)}toJSON(){let t=super.toJSON(),e=this.map,s=Object.keys(e).map(t=>`${JSON.stringify(t)}: ${e[t]._guid}`).join(", "),n=t.details
return n||(n=t.details={}),n.map=`{${s}}`,t}}class pi{constructor(t,e,s){this.vm=t,this.ops=e,this.exceptionHandler=s,this.vm=t,this.ops=e,this.current=e.head()}goto(t){this.current=t}nextStatement(){let t=this.current,e=this.ops
return t&&(this.current=e.nextNode(t)),t}handleException(){this.exceptionHandler&&this.exceptionHandler.handleException()}}class di{constructor(t,e,s){this.env=t,this.updating=e,this.bounds=s}rerender({alwaysRevalidate:t=!1}={alwaysRevalidate:!1}){let e=this.env,s=this.updating
new oi(e,{alwaysRevalidate:t}).execute(s,this)}parentElement(){return this.bounds.parentElement()}firstNode(){return this.bounds.firstNode()}lastNode(){return this.bounds.lastNode()}opcodes(){return this.updating}handleException(){throw"this should never happen"}destroy(){this.bounds.destroy(),R(this.bounds)}}class mi{constructor(t,e,s){this.stack=t,this.fp=e,this.sp=s}static empty(){return new this([],0,-1)}static restore(t){return new this(t.slice(),0,t.length-1)}isEmpty(){return-1===this.sp}push(t){this.stack[++this.sp]=t}dup(t=this.sp){this.push(this.stack[t])}pop(t=1){let e=this.stack[this.sp]
return this.sp-=t,e}peek(){return this.stack[this.sp]}fromBase(t){return this.stack[this.fp-t]}fromTop(t){return this.stack[this.sp-t]}capture(t){let e=this.sp+1,s=e-t
return this.stack.slice(s,e)}reset(){this.stack.length=0}toArray(){return this.stack.slice(this.fp,this.sp+1)}}class fi{constructor(t,e,s,n){this.env=t,this.elementStack=n,this.dynamicScopeStack=new me,this.scopeStack=new me,this.updatingOpcodeStack=new me,this.cacheGroups=new me,this.listBlockStack=new me,this.stack=mi.empty(),this.pc=-1,this.ra=-1,this.s0=null,this.s1=null,this.t0=null,this.t1=null,this.env=t,this.heap=t.program.heap,this.constants=t.program.constants,this.elementStack=n,this.scopeStack.push(e),this.dynamicScopeStack.push(s)}get fp(){return this.stack.fp}set fp(t){this.stack.fp=t}get sp(){return this.stack.sp}set sp(t){this.stack.sp=t}fetch(t){this.stack.push(this[Se[t]])}load(t){this[Se[t]]=this.stack.pop()}fetchValue(t){return this[Se[t]]}loadValue(t,e){this[Se[t]]=e}pushFrame(){this.stack.push(this.ra),this.stack.push(this.fp),this.fp=this.sp-1}popFrame(){this.sp=this.fp-1,this.ra=this.stack.fromBase(0),this.fp=this.stack.fromBase(-1)}goto(t){this.pc=r(this.pc+t)}call(t){let e=this.heap.getaddr(t)
this.ra=this.pc,this.pc=e}returnTo(t){this.ra=r(this.pc+t)}return(){this.pc=this.ra}static initial(t,e,s,n,i){let r=ti.root(e,i.symbolTable.symbols.length),a=new fi(t,r,s,n)
return a.pc=a.heap.getaddr(i.handle),a.updatingOpcodeStack.push(new ge),a}capture(t){return{dynamicScope:this.dynamicScope(),env:this.env,scope:this.scope(),stack:this.stack.capture(t)}}beginCacheGroup(){this.cacheGroups.push(this.updating().tail())}commitCacheGroup(){let t=new cs("END"),e=this.updating(),s=this.cacheGroups.pop(),n=s?e.nextNode(s):e.head(),i=e.tail(),r=y(new ye(n,i)),a=new ls(r,t)
e.insertBefore(a,n),e.append(new hs(a)),e.append(t)}enter(t){let e=new ge,s=this.capture(t),n=this.elements().pushUpdatableBlock(),i=new hi(this.heap.gethandle(this.pc),s,n,e)
this.didEnter(i)}iterate(t,e){let s=this.stack
s.push(e),s.push(t)
let n=this.capture(2),i=this.elements().pushUpdatableBlock()
return new hi(this.heap.gethandle(this.pc),n,i,new ge)}enterItem(t,e){this.listBlock().map[t]=e,this.didEnter(e)}enterList(t){let e=new ge,s=this.capture(0),n=this.elements().pushBlockList(e),i=this.stack.peek().artifacts,a=this.heap.gethandle(r(this.pc+t)),o=new ui(a,s,n,e,i)
this.listBlockStack.push(o),this.didEnter(o)}didEnter(t){this.updateWith(t),this.updatingOpcodeStack.push(t.children)}exit(){this.elements().popBlock(),this.updatingOpcodeStack.pop(),this.updating().tail().didInitializeChildren()}exitList(){this.exit(),this.listBlockStack.pop()}updateWith(t){this.updating().append(t)}listBlock(){return n(this.listBlockStack.current,"expected a list block")}updating(){return n(this.updatingOpcodeStack.current,"expected updating opcode on the updating opcode stack")}elements(){return this.elementStack}scope(){return n(this.scopeStack.current,"expected scope on the scope stack")}dynamicScope(){return n(this.dynamicScopeStack.current,"expected dynamic scope on the dynamic scope stack")}pushChildScope(){this.scopeStack.push(this.scope().child())}pushCallerScope(t=!1){let e=n(this.scope().getCallerScope(),"pushCallerScope is called when a caller scope is present")
this.scopeStack.push(t?e.child():e)}pushDynamicScope(){let t=this.dynamicScope().child()
return this.dynamicScopeStack.push(t),t}pushRootScope(t,e){let s=ti.sized(t)
return e&&s.bindCallerScope(this.scope()),this.scopeStack.push(s),s}popScope(){this.scopeStack.pop()}popDynamicScope(){this.dynamicScopeStack.pop()}newDestroyable(t){this.elements().didAddDestroyable(t)}getSelf(){return this.scope().getSelf()}referenceForSymbol(t){return this.scope().getSymbol(t)}execute(t,e){this.pc=this.heap.getaddr(t),e&&e(this)
let s
for(;;)if((s=this.next()).done)break
return s.value}next(){let t,e=this.env,s=this.updatingOpcodeStack,i=this.elementStack,r=this.nextStatement(e)
return null!==r?(we.evaluate(this,r,r.type),t={done:!1,value:null}):(this.stack.reset(),t={done:!0,value:new di(e,n(s.pop(),"there should be a final updating opcode stack"),i.popBlock())}),t}nextStatement(t){let e=this.pc
if(-1===e)return null
let s=t.program
return this.pc+=4,s.opcode(e)}evaluateOpcode(t){we.evaluate(this,t,t.type)}bindDynamicScope(t){let e=this.dynamicScope()
for(let s=t.length-1;s>=0;s--){let n=this.constants.getString(t[s])
e.set(n,this.stack.pop())}}}class gi{constructor(t){this.vm=t}next(){return this.vm.next()}}let yi=0
class bi{constructor(t,e,s,n){this.id=t,this.meta=e,this.env=s,this.entryPoint=null,this.layout=null,this.partial=null,this.block=null,this.scanner=new Cn(n,s),this.symbols=n.symbols,this.hasEval=n.hasEval}render({self:t,parentNode:e,dynamicScope:s,mode:n}){let i,r=this.env
switch(n){case void 0:i=Hs.forInitialRender(r,e,null)
break
case"rehydrate":i=Js.forInitialRender(r,e,null)
break
case"serialize":i=Ws.forInitialRender(r,e,null)
break
default:throw new Error("unreachable")}let a=this.asEntryPoint().compileDynamic(r),o=fi.initial(r,t,s,i,a)
return new gi(o)}asEntryPoint(){return this.entryPoint||(this.entryPoint=this.scanner.scanEntryPoint(this.compilationMeta())),this.entryPoint}asLayout(t,e){return this.layout||(this.layout=this.scanner.scanLayout(this.compilationMeta(),e||ke,t)),this.layout}asPartial(){return this.partial||(this.partial=this.scanner.scanEntryPoint(this.compilationMeta(!0))),this.partial}asBlock(){return this.block||(this.block=this.scanner.scanBlock(this.compilationMeta())),this.block}compilationMeta(t=!1){return{templateMeta:this.meta,symbols:this.symbols,asPartial:t}}}class vi{constructor(t,e){this.cache=Tt,this.inner=null,this.chains=null,this.lastParentValue=Tt,this._guid=0,this.tag=Be,this.parent=t,this.property=e}value(){let t=this.lastParentValue,e=this.property,s=this.inner,n=this._parentValue()
if(null===n||void 0===n)return this.cache=void 0
if(t===n)s=this.inner
else{let t="object"==typeof n?Ni.for(n).referenceTypeFor(e):Ti
s=this.inner=new t(n,e,this)}return this.cache=s.value()}get(t){let e=this._getChains()
return t in e?e[t]:e[t]=new vi(this,t)}label(){return"[reference Direct]"}_getChains(){return this.chains?this.chains:this.chains=p()}_parentValue(){let t=this.parent.value()
return this.lastParentValue=t,t}}class ki{constructor(t){this.chains=p(),this.tag=Be,this.object=t}value(){return this.object}update(t){this.object=t}get(t){let e=this.chains
return t in e?e[t]:e[t]=new vi(this,t)}chainFor(t){let e=this.chains
return t in e?e[t]:null}path(t){return t.split(".").reduce((t,e)=>t.get(e),this)}referenceFromParts(t){return t.reduce((t,e)=>t.get(e),this)}label(){return"[reference Root]"}}const Si={destroy(){}}
class _i{constructor(t,e){this.tag=Be,this.parent=t}chain(){return Si}notify(){}value(){return this.parent[this.property]}get(t){return new _i(this.parent[this.property],t)}}class wi{constructor(t){this.tag=Be,this.inner=t}update(t){this.inner=t}chain(){return Si}notify(){}value(){return this.inner}referenceFromParts(t){throw new Error("Not implemented")}chainFor(t){throw new Error("Not implemented")}get(t){return new _i(this.inner,t)}}class Ei{constructor(t){this.object=t}root(){return new wi(this.object)}}const xi="df8be4c8-4e89-44e2-a8f9-550c8dacdca7",Ci=Object.hasOwnProperty
class Ni{constructor(t,{RootReferenceFactory:e,DefaultPathReferenceFactory:s}){this.references=null,this.slots=null,this.referenceTypes=null,this.propertyMetadata=null,this.object=t,this.RootReferenceFactory=e||ki,this.DefaultPathReferenceFactory=s||Ti}static for(t){if(null===t||void 0===t)return new Ni(t,{})
if(Ci.call(t,"_meta")&&t._meta)return t._meta
if(!Object.isExtensible(t))return new Ei(t)
let e=Ni
return t.constructor&&t.constructor[xi]?e=t.constructor[xi].InstanceMetaConstructor:t[xi]&&(e=t[xi].InstanceMetaConstructor),t._meta=new e(t,{})}static exists(t){return"object"==typeof t&&t._meta}static metadataForProperty(t){return null}addReference(t,e){let s=this.references=this.references||p();(s[t]=s[t]||new de).add(e)}addReferenceTypeFor(t,e){this.referenceTypes=this.referenceTypes||p(),this.referenceTypes[t]=e}referenceTypeFor(t){return this.referenceTypes?this.referenceTypes[t]||Ti:Ti}removeReference(t,e){this.references&&this.references[t].delete(e)}getReferenceTypes(){return this.referenceTypes=this.referenceTypes||p(),this.referenceTypes}referencesFor(t){return this.references?this.references[t]:null}getSlots(){return this.slots=this.slots||p()}root(){return this.rootCache=this.rootCache||new this.RootReferenceFactory(this.object)}}class Ti{constructor(t,e,s){this.tag=Be,this.object=t,this.property=e}value(){return this.object[this.property]}label(){return"[reference Property]"}}class Ai{constructor(t,e){this._registry=t,this._resolver=e}register(t,e,s){let n=this._toAbsoluteSpecifier(t)
this._registry.register(n,e,s)}registration(t){let e=this._toAbsoluteSpecifier(t)
return this._registry.registration(e)}unregister(t){let e=this._toAbsoluteSpecifier(t)
this._registry.unregister(e)}registerOption(t,e,s){let n=this._toAbsoluteOrTypeSpecifier(t)
this._registry.registerOption(n,e,s)}registeredOption(t,e){let s=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredOption(s,e)}registeredOptions(t){let e=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredOptions(e)}unregisterOption(t,e){let s=this._toAbsoluteOrTypeSpecifier(t)
this._registry.unregisterOption(s,e)}registerInjection(t,e,s){let n=this._toAbsoluteOrTypeSpecifier(t),i=this._toAbsoluteSpecifier(s)
this._registry.registerInjection(n,e,i)}registeredInjections(t){let e=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredInjections(e)}_toAbsoluteSpecifier(t,e){return this._resolver.identify(t,e)}_toAbsoluteOrTypeSpecifier(t){return At(t)?t:this._toAbsoluteSpecifier(t)}}class Di{constructor(t=null){this.bucket=t?o({},t):{}}get(t){return this.bucket[t]}set(t,e){return this.bucket[t]=e}child(){return new Di(this.bucket)}}class Oi{constructor(t,e){this.position=0,this.array=t,this.keyFor=e}isEmpty(){return 0===this.array.length}next(){let t=this.position,e=this.array,s=this.keyFor
if(t>=e.length)return null
let n=e[t],i=s(n,t),r=t
return this.position++,{key:i,value:n,memo:r}}}class Bi{constructor(t,e,s){this.position=0,this.keys=t,this.values=e,this.keyFor=s}isEmpty(){return 0===this.keys.length}next(){let t=this.position,e=this.keys,s=this.values,n=this.keyFor
if(t>=e.length)return null
let i=s[t],r=e[t],a=n(i,r)
return this.position++,{key:a,value:i,memo:r}}}class Mi{isEmpty(){return!0}next(){throw new Error(`Cannot call next() on an empty iterator`)}}const Li=new Mi
class Ri{constructor(t,e){this.tag=t.tag,this.ref=t,this.keyFor=e}iterate(){let t=this.ref,e=this.keyFor,s=t.value()
if(Array.isArray(s))return s.length>0?new Oi(s,e):Li
if(void 0===s||null===s)return Li
if(void 0!==s.forEach){let t=[]
return s.forEach(function(e){t.push(e)}),t.length>0?new Oi(t,e):Li}if("object"==typeof s){let t=Object.keys(s)
return t.length>0?new Bi(t,t.map(t=>s[t]),e):Li}throw new Error(`Don't know how to {{#each ${s}}}`)}valueReferenceFor(t){return new ki(t.value)}updateValueReference(t,e){t.update(e.value)}memoReferenceFor(t){return new ki(t.memo)}updateMemoReference(t,e){t.update(e.memo)}}class Fi{constructor(t,e,s){this.nameRef=t,this.env=e,this.meta=s,this.tag=t.tag}value(){let t=this.env,e=this.nameRef.value()
return"string"==typeof e?t.getComponentDefinition(e,this.meta):null}get(){return Qe}}class Ii{constructor(t,e){this.tag=Be,this.parent=t,this.property=e}value(){return this.parent.value()[this.property]}get(t){return new Ii(this,t)}}class Pi{constructor(t,e){this.tag=Be,this.helper=t,this.args=e.capture()}value(){let t=this.helper,e=this.args
return t(e.positional.value(),e.named.value())}get(t){return new Ii(this,t)}}class ji extends Es{toJSON(){return`<default-component-definition name=${this.name}>`}}const Ui="main",Hi={action:function(t,e){let s=t.getSelf(),n=e.capture(),i=n.positional.at(0).value()
return"function"!=typeof i&&Lt(i,n.positional.at(0)),new Ve(function(...t){let e=n.positional.value()
e.shift(),e.push(...t),i.apply(s&&s.value(),e)})}}
class $i extends ai{constructor(s){super({appendOperations:s.appendOperations,updateOperations:new Gn(s.document||document)}),this.helpers=p(),this.modifiers=p(),this.components=p(),this.managers=p(),e(this,t(s)),this.uselessAnchor=s.document.createElement("a")}static create(t={}){return t.document=t.document||self.document,t.appendOperations=t.appendOperations||new Jn(t.document),new $i(t)}protocolForURL(t){return this.uselessAnchor.href=t,this.uselessAnchor.protocol}hasPartial(){return!1}lookupPartial(){}managerFor(e=Ui){let s
if(!(s=this.managers[e])){let n=t(this)
if(!(s=this.managers[e]=t(this).lookup(`component-manager:/${n.rootName}/component-managers/${e}`)))throw new Error(`No component manager found for ID ${e}.`)}return s}hasComponentDefinition(t,e){return!!this.identifyComponent(t,e)}getComponentDefinition(e,n){let i=t(this),r=s(this.identifyComponent(e,n))
return this.components[r]?this.components[r]:this.registerComponent(e,r,n,i)}registerComponent(t,e,s,n){let i=n.lookup("template",e),r=n.identify("component",e),a=null
r&&(a=n.factoryFor(r))
let o,l=Nt(i).create(this),h=this.managerFor(i.meta.managerId)
return o=jt(h)?h.createComponentDefinition(t,l,a):new ji(t,h,a),this.components[e]=o,o}hasHelper(t,e){return!!this.lookupHelper(t,e)}lookupHelper(e,s){if(Hi[e])return Hi[e]
let n=t(this),i=`helper:${e}`,r=s.specifier,a=n.identify(i,r)
return void 0!==a?this.helpers[a]?this.helpers[a]:this.registerHelper(a,n):void 0}registerHelper(t,e){let s=It(e.lookup(t))
return this.helpers[t]=s,s}hasModifier(t,e){return 1===t.length&&t in this.modifiers}lookupModifier(t,e){let s=this.modifiers[t]
if(!s)throw new Error(`Modifier for ${t} not found.`)
return s}iterableFor(t,e){let s
if(!e)throw new Error("Must specify a key for #each")
switch(e){case"@index":s=((t,e)=>String(e))
break
case"@primitive":s=(t=>String(t))
break
default:s=(t=>t[e])}return new Ri(t,s)}macros(){let t=super.macros()
return Pt(t.blocks,t.inlines),t}identifyComponent(e,s){let n=t(this),i=`template:${e}`,r=s.specifier,a=n.identify(i,r)
if(void 0===a&&n.identify(`component:${e}`,r))throw new Error(`The component '${e}' is missing a template. All components must have a template. Make sure there is a template.hbs in the component directory.`)
return a}}var Vi={id:"UN61+JFU",block:'{"symbols":["root"],"statements":[[4,"each",[[19,0,["roots"]]],[["key"],["id"]],{"statements":[[4,"-in-element",[[19,1,["parent"]]],[["nextSibling"],[[19,1,["nextSibling"]]]],{"statements":[[1,[25,"component",[[19,1,["component"]]],null],false]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{specifier:"template:/-application/templates/main"}}
class zi{constructor(t){this._roots=[],this._rootsIndex=0,this._initializers=[],this._initialized=!1,this._rendering=!1,this._rendered=!1,this._scheduled=!1,this._rerender=Ut,this.rootName=t.rootName,this.resolver=t.resolver,this.document=t.document||window.document}registerInitializer(t){this._initializers.push(t)}initRegistry(){let t=this._registry=new ne,e=new Ai(this._registry,this.resolver)
t.register(`environment:/${this.rootName}/main/main`,$i),t.registerOption("helper","instantiate",!1),t.registerOption("template","instantiate",!1),t.register(`document:/${this.rootName}/main/main`,this.document),t.registerOption("document","instantiate",!1),t.registerInjection("environment","document",`document:/${this.rootName}/main/main`),t.registerInjection("component-manager","env",`environment:/${this.rootName}/main/main`)
let s=this._initializers
for(let n=0;n<s.length;n++)s[n].initialize(e)
this._initialized=!0}initContainer(){this._container=new se(this._registry,this.resolver),this._container.defaultInjections=(t=>{let s={}
return e(s,this),s})}initialize(){this.initRegistry(),this.initContainer()}boot(){this.initialize(),this.env=this.lookup(`environment:/${this.rootName}/main/main`),this.render()}render(){this.env.begin()
let t,e=Nt(Vi).create(this.env),s=new ki({roots:this._roots}),n=this.document.body,i=new Di,r=e.render({self:s,parentNode:n,dynamicScope:i})
do{t=r.next()}while(!t.done)
this.env.commit()
let a=t.value
this._rerender=(()=>{this.env.begin(),a.rerender(),this.env.commit(),this._didRender()}),this._didRender()}_didRender(){this._rendered=!0}renderComponent(t,e,s=null){this._roots.push({id:this._rootsIndex++,component:t,parent:e,nextSibling:s}),this.scheduleRerender()}scheduleRerender(){!this._scheduled&&this._rendered&&(this._rendering=!0,this._scheduled=!0,requestAnimationFrame(()=>{this._scheduled=!1,this._rerender(),this._rendering=!1}))}identify(t,e){return this.resolver.identify(t,e)}factoryFor(t,e){return this._container.factoryFor(this.identify(t,e))}lookup(t,e){return this._container.lookup(this.identify(t,e))}}class Gi{constructor(t,e){this.config=t,this.registry=e}identify(t,e){if(Ht(t))return t
let s,n=Gt(t)
if(e){let t=Gt(e)
if($t(t)){if(Jt("Specifier must not include a rootName, collection, or namespace when combined with an absolute referrer",void 0===n.rootName&&void 0===n.collection&&void 0===n.namespace),n.rootName=t.rootName,n.collection=t.collection,n.name?n.namespace=t.namespace?t.namespace+"/"+t.name:t.name:(n.namespace=t.namespace,n.name=t.name),s=this._serializeAndVerify(n))return s
let e=this._definitiveCollection(n.type)
if(e&&(n.namespace+="/-"+e,s=this._serializeAndVerify(n)))return s
n.rootName=n.collection=n.namespace=void 0}else Jt('Referrer must either be "absolute" or include a `type` to determine the associated type',t.type),n.collection=this._definitiveCollection(t.type),Jt(`'${t.type}' does not have a definitive collection`,n.collection)}if(n.collection||(n.collection=this._definitiveCollection(n.type),Jt(`'${n.type}' does not have a definitive collection`,n.collection)),!n.rootName){if(n.rootName=this.config.app.rootName||"app",s=this._serializeAndVerify(n))return s
let t
n.namespace?(t=this.config.addons&&this.config.addons[n.namespace],n.rootName=n.namespace,n.namespace=void 0):(t=this.config.addons&&this.config.addons[n.name],n.rootName=n.name,n.name="main")}return(s=this._serializeAndVerify(n))?s:void 0}retrieve(t){return this.registry.get(t)}resolve(t,e){let s=this.identify(t,e)
if(s)return this.retrieve(s)}_definitiveCollection(t){let e=this.config.types[t]
return Jt(`'${t}' is not a recognized type`,e),e.definitiveCollection}_serializeAndVerify(t){let e=Vt(t)
if(this.registry.has(e))return e}}class Ji{constructor(t={}){this._entries=t}has(t){return t in this._entries}get(t){return this._entries[t]}}class Wi{constructor(t){this.tags=p(),this.computedPropertyTags=p(),this.trackedProperties=t?Object.create(t.trackedProperties):p(),this.trackedPropertyDependencies=t?Object.create(t.trackedPropertyDependencies):p()}tagFor(t){let e=this.tags[t]
if(e)return e
let s
return(s=this.trackedPropertyDependencies[t])?this.tags[t]=Kt(this,t,s):this.tags[t]=Le.create()}dirtyableTagFor(t){let e
return this.trackedPropertyDependencies[t]?(e=this.computedPropertyTags[t])||(this.computedPropertyTags[t]=Le.create()):(e=this.tags[t])||(this.tags[t]=Le.create())}}let Yi=Symbol("ember-object"),Xi=Object.prototype.hasOwnProperty,Ki=function(){}
class qi extends Error{constructor(t,e,s){super(s),this.target=t,this.key=e}static for(t,e){return new qi(t,e,`The property '${e}' on ${t} was changed after being rendered. If you want to change a property used in a template after the component has rendered, mark the property as a tracked property with the @tracked decorator.`)}}class Qi{constructor(t){this.element=null,this.debugName=null,this.__args__=null,Object.assign(this,t)}get args(){return this.__args__}set args(t){this.__args__=t,qt(this).dirtyableTagFor("args").inner.dirty()}static create(t){return new this(t)}didInsertElement(){}didUpdate(){}willDestroy(){}destroy(){this.willDestroy()}toString(){return`${this.debugName} component`}}class Zi extends Es{constructor(t,e,s,n){super(t,e,n),this.template=s,this.componentFactory=n}toJSON(){return{GlimmerDebug:`<component-definition name="${this.name}">`}}}class tr{get(t){return nr.create(this,t)}}class er extends tr{constructor(){super(...arguments),this._lastRevision=null,this._lastValue=null}value(){let t=this.tag,e=this._lastRevision,s=this._lastValue
return e&&t.validate(e)||(s=this._lastValue=this.compute(),this._lastRevision=t.value()),s}}class sr extends Ve{constructor(){super(...arguments),this.children=p()}get(t){let e=this.children[t]
return e||(e=this.children[t]=new ir(this.inner,t)),e}}class nr extends er{static create(t,e){return m(t)?new ir(t.value(),e):new rr(t,e)}get(t){return new rr(this,t)}}class ir extends nr{constructor(t,e){super(),this._parentValue=t,this._propertyKey=e,this.tag=te(t,e,ee)}compute(){return this._parentValue[this._propertyKey]}}class rr extends nr{constructor(t,e){super()
let s=t.tag,n=Pe.create(Oe)
this._parentReference=t,this._parentObjectTag=n,this._propertyKey=e,this.tag=b([s,n])}compute(){let t=this._parentReference,e=this._parentObjectTag,s=this._propertyKey,n=t.value()
return e.inner.update(te(n,s)),"string"==typeof n&&"length"===s?n.length:"object"==typeof n&&n?n[s]:void 0}}class ar{constructor(t,s,n){let i=t.componentFactory,r=t.name
this.args=s
let a={debugName:r,args:this.namedArgsSnapshot()}
e(a,n),this.component=i.create(a)}get tag(){return this.args.tag}namedArgsSnapshot(){return Object.freeze(this.args.named.value())}}class or{constructor(t,e){this.template=e,this.name=t}compile(t){t.fromLayout(this.name,this.template)}}class lr{static create(t){return new lr(t)}constructor(t){this.env=t.env}prepareArgs(t,e){return null}create(e,s,n){let i=t(this.env)
return new ar(s,n.capture(),i)}createComponentDefinition(t,e,s){return s||(s={class:Qi,create(t){return this.class.create(t)}}),new Zi(t,this,e,s)}layoutFor(t,e,s){let n=t.template
return Y(new or(t.name,n),this.env)}getSelf(t){return new sr(t.component)}didCreateElement(t,e){t&&(t.component.element=e)}didRenderLayout(t,e){}didCreate(t){t&&t.component.didInsertElement()}getTag({tag:t}){return t}update(t,e){}didUpdateLayout(){}didUpdate(t){if(!t)return
let e=t.component
e.args=t.namedArgsSnapshot(),e.didUpdate()}getDestructor(t){return t.component}}var hr=function(t,e,s,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,n)
else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(a=(r<3?i(a):r>3?i(e,s,a):i(e,s))||a)
return r>3&&a&&Object.defineProperty(e,s,a),a}
class cr extends Qi{constructor(){super(...arguments),this.elapsed=0,this.seconds=0,this.dotsCount=1e3,this.startX=0,this.startY=0}get style(){let t=this.elapsed/1e3%10,e=this.dotsCount/1e3
return`\n      position: absolute;\n      transform-origin: 0 0;\n      left: 50%;\n      top: 50%;\n      width: 10px;\n      height: 10px;\n      transform: scaleX(${(1+(t>5?10-t:t)/10)/(2.1*e)}) scaleY(${.7/e}) translateZ(0.1px);\n    `}increaseDots(){this.dotsCount*=2}decreaseDots(){this.dotsCount*=.5}didInsertElement(){let t=this.tick.bind(this)
this.intervalID=setInterval(t,1e3)
var e=(new Date).getTime()
let s=()=>{this.elapsed=(new Date).getTime()-e,requestAnimationFrame(s)}
requestAnimationFrame(s)}tick(){this.seconds=this.seconds%10+1}}hr([Wt],cr.prototype,"elapsed",void 0),hr([Wt],cr.prototype,"seconds",void 0),hr([Wt],cr.prototype,"dotsCount",void 0),hr([Wt("elapsed","dotsCount")],cr.prototype,"style",null)
var ur={id:"NtHohGYH",block:'{"symbols":[],"statements":[[0,"Number of dots: "],[6,"strong"],[7],[1,[18,"dotsCount"],false],[8],[6,"br"],[7],[8],[0,"\\n"],[6,"button"],[10,"onclick",[25,"action",[[19,0,["increaseDots"]]],null],null],[9,"type","button"],[7],[0,"Increase Dots"],[8],[0,"\\n"],[6,"button"],[10,"onclick",[25,"action",[[19,0,["decreaseDots"]]],null],null],[9,"type","button"],[7],[0,"Decrease Dots"],[8],[0,"\\n\\n"],[6,"div"],[10,"style",[18,"style"],null],[7],[0,"\\n  "],[5,"fiber-triangle",[],[["@x","@y","@s","@seconds"],[[18,"startX"],[18,"startY"],[18,"dotsCount"],[18,"seconds"]]],{"statements":[],"parameters":[]}],[0,"\\n"],[8]],"hasEval":false}',meta:{specifier:"template:/glimmer-fiber-demo/components/fiber-container"}},pr=function(t,e,s,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,n)
else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(a=(r<3?i(a):r>3?i(e,s,a):i(e,s))||a)
return r>3&&a&&Object.defineProperty(e,s,a),a}
class dr extends Qi{constructor(){super(...arguments),this.hover=!1}get text(){return this.hover?"**"+this.args.text+"**":this.args.text}get style(){let t=1.3*this.args.size
return`\n      position: absolute;\n      font: normal 15px sans-serif;\n      text-align: center;\n      cursor: pointer;\n      width: ${t}px;\n      height: ${t}px;\n      left: ${this.args.x}px;\n      top: ${this.args.y}px;\n      border-radius: ${t/2}px;\n      line-height: ${t}px;\n      background: ${this.hover?"#ff0":"#61dafb"};\n    `}onEnter(){this.hover=!0}onLeave(){this.hover=!1}}pr([Wt],dr.prototype,"hover",void 0),pr([Wt("args","hover")],dr.prototype,"text",null),pr([Wt("args","hover")],dr.prototype,"style",null)
var mr={id:"dWFdJwsC",block:'{"symbols":[],"statements":[[6,"div"],[10,"style",[18,"style"],null],[10,"onmouseenter",[25,"action",[[19,0,["onEnter"]]],null],null],[10,"onmouseleave",[25,"action",[[19,0,["onLeave"]]],null],null],[7],[0,"\\n  "],[1,[18,"text"],false],[0,"\\n"],[8]],"hasEval":false}',meta:{specifier:"template:/glimmer-fiber-demo/components/fiber-dot"}},fr=function(t,e,s,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,n)
else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(a=(r<3?i(a):r>3?i(e,s,a):i(e,s))||a)
return r>3&&a&&Object.defineProperty(e,s,a),a}
class gr extends Qi{constructor(){super(...arguments),this.targetSize=25}get showDot(){return this.args.s<=this.targetSize}get nextS(){return this.args.s/2}get positions(){let t=this.nextS
return{dot:{x:this.args.x-this.targetSize/2,y:this.args.y-this.targetSize/2},top:{x:this.args.x,y:this.args.y-t/2},middle:{x:this.args.x-t,y:this.args.y+t/2},bottom:{x:this.args.x+t,y:this.args.y+t/2}}}}fr([Wt("args")],gr.prototype,"showDot",null),fr([Wt("args")],gr.prototype,"nextS",null),fr([Wt("args")],gr.prototype,"positions",null)
var yr={"component:/glimmer-fiber-demo/components/fiber-container":cr,"template:/glimmer-fiber-demo/components/fiber-container":ur,"component:/glimmer-fiber-demo/components/fiber-dot":dr,"template:/glimmer-fiber-demo/components/fiber-dot":mr,"component:/glimmer-fiber-demo/components/fiber-triangle":gr,"template:/glimmer-fiber-demo/components/fiber-triangle":{id:"FtQf3jc4",block:'{"symbols":["@seconds"],"statements":[[6,"div"],[7],[0,"\\n"],[4,"if",[[19,0,["showDot"]]],null,{"statements":[[0,"    "],[5,"fiber-dot",[],[["@x","@y","@size","@text"],[[20,["positions","dot","x"]],[20,["positions","dot","y"]],[18,"targetSize"],[19,1,[]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},{"statements":[[0,"    "],[5,"fiber-triangle",[],[["@x","@y","@s","@seconds"],[[20,["positions","top","x"]],[20,["positions","top","y"]],[18,"nextS"],[19,1,[]]]],{"statements":[],"parameters":[]}],[0,"\\n\\n    "],[5,"fiber-triangle",[],[["@x","@y","@s","@seconds"],[[20,["positions","middle","x"]],[20,["positions","middle","y"]],[18,"nextS"],[19,1,[]]]],{"statements":[],"parameters":[]}],[0,"\\n\\n    "],[5,"fiber-triangle",[],[["@x","@y","@s","@seconds"],[[20,["positions","bottom","x"]],[20,["positions","bottom","y"]],[18,"nextS"],[19,1,[]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]}],[8]],"hasEval":false}',meta:{specifier:"template:/glimmer-fiber-demo/components/fiber-triangle"}}},br={app:{name:"glimmer-fiber-demo",rootName:"glimmer-fiber-demo"},types:{application:{definitiveCollection:"main"},component:{definitiveCollection:"components"},"component-test":{unresolvable:!0},helper:{definitiveCollection:"components"},"helper-test":{unresolvable:!0},renderer:{definitiveCollection:"main"},template:{definitiveCollection:"components"}},collections:{main:{types:["application","renderer"]},components:{group:"ui",types:["component","component-test","template","helper","helper-test"],defaultType:"component",privateCollections:["utils"]},styles:{group:"ui",unresolvable:!0},utils:{unresolvable:!0}}}
class vr extends zi{constructor(){let t=new Ji(yr),e=new Gi(br,t)
super({rootName:br.app.rootName,resolver:e})}}const kr=new vr,Sr=document.getElementById("app");(function(t){Ki=t})(()=>{kr.scheduleRerender()}),kr.registerInitializer({initialize(t){t.register(`component-manager:/${kr.rootName}/component-managers/main`,lr)}}),kr.renderComponent("fiber-container",Sr,null),kr.boot()})
