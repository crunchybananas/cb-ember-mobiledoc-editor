var __ember_auto_import__;(()=>{var e,r={76:(e,r,t)=>{"use strict"
t.r(r),t.d(r,{default:()=>m})
const o=require("@ember/template-factory"),i=require("@ember/component"),n=require("@glimmer/component")
var a=t.n(n)
const d=require("@ember/object"),l=require("@glimmer/tracking")
function s(e,r,t,o,i){var n={}
return Object.keys(o).forEach((function(e){n[e]=o[e]})),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=t.slice().reverse().reduce((function(t,o){return o(e,r,t)||t}),n),i&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(i):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(e,r,n),n=null),n}var c,u,p=(0,o.createTemplateFactory)({id:"82kdYfsB",block:'[[[10,0],[14,0,"cb-mobiledoc-editor"],[12],[1,"\\n  "],[18,5,[[28,[37,1],null,[["insertCard","insertAtom"],[[30,0,["insertCard"]],[30,0,["insertAtom"]]]]]]],[1,"\\n\\n  "],[11,0],[24,0,"cb-mobiledoc-editor__canvas"],[4,[38,2],null,[["content","postDidChange","editorDidLoad","cards","atoms"],[[30,1],[30,2],[30,0,["editorDidLoad"]],[30,3],[30,4]]]],[12],[13],[1,"\\n"],[13],[1,"\\n\\n"],[18,6,[[28,[37,1],null,[["insertCard","insertAtom"],[[30,0,["insertCard"]],[30,0,["insertAtom"]]]]]]],[1,"\\n"]],["@content","@postDidChange","@cards","@atoms","&toolbar","&default"],false,["yield","hash","mobiledoc-editor"]]',moduleName:"(unknown template module)",isStrictMode:!1})
let m=(c=class extends(a()){constructor(){var e
super(...arguments),(e=u)&&Object.defineProperty(this,"editor",{enumerable:e.enumerable,configurable:e.configurable,writable:e.writable,value:e.initializer?e.initializer.call(this):void 0})}editorDidLoad(e,r){console.log("HI!"),this.editor=e,this.args.editorDidLoad?.(e,r)}insertCard(e,r){r.preventDefault(),this.editor&&this.editor.insertCard(e)}insertAtom(e,r){r.preventDefault(),this.editor&&this.editor.insertAtom(e)}},u=s(c.prototype,"editor",[l.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),s(c.prototype,"editorDidLoad",[d.action],Object.getOwnPropertyDescriptor(c.prototype,"editorDidLoad"),c.prototype),s(c.prototype,"insertCard",[d.action],Object.getOwnPropertyDescriptor(c.prototype,"insertCard"),c.prototype),s(c.prototype,"insertAtom",[d.action],Object.getOwnPropertyDescriptor(c.prototype,"insertAtom"),c.prototype),c);(0,i.setComponentTemplate)(p,m)},947:(e,r,t)=>{"use strict"
t.r(r),t.d(r,{default:()=>a})
const o=require("ember-modifier")
var i=t.n(o),n=t(198)
class a extends(i()){modify(e,r,t){let{content:o,postDidChange:i,editorDidLoad:a,cards:d=[],atoms:l=[]}=t
if(!this.editor){const r={mobiledoc:o,placeholder:"Type here",autofocus:!0,cards:d,atoms:l}
this.editor=new n.ML(r),this.editor.render(e),this.editor.postDidChange(((e,r,t)=>{i?.(this.editor.serialize())})),a?.(this.editor,e)}}}},136:(e,r,t)=>{var o,i
e.exports=(o=_eai_d,i=_eai_r,window.emberAutoImportDynamic=function(e){return 1===arguments.length?i("_eai_dyn_"+e):i("_eai_dynt_"+e)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(e){return i("_eai_sync_"+e)(Array.prototype.slice.call(arguments,1))},o("cb-ember-mobiledoc-editor/components/mobiledoc/editor",[],(function(){return t(76)})),void o("cb-ember-mobiledoc-editor/modifiers/mobiledoc-editor",[],(function(){return t(947)})))},678:function(e,r){window._eai_r=require,window._eai_d=define}},t={}
function o(e){var i=t[e]
if(void 0!==i)return i.exports
var n=t[e]={exports:{}}
return r[e].call(n.exports,n,n.exports,o),n.exports}o.m=r,e=[],o.O=(r,t,i,n)=>{if(!t){var a=1/0
for(c=0;c<e.length;c++){for(var[t,i,n]=e[c],d=!0,l=0;l<t.length;l++)(!1&n||a>=n)&&Object.keys(o.O).every((e=>o.O[e](t[l])))?t.splice(l--,1):(d=!1,n<a&&(a=n))
if(d){e.splice(c--,1)
var s=i()
void 0!==s&&(r=s)}}return r}n=n||0
for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1]
e[c]=[t,i,n]},o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e
return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={143:0}
o.O.j=r=>0===e[r]
var r=(r,t)=>{var i,n,[a,d,l]=t,s=0
if(a.some((r=>0!==e[r]))){for(i in d)o.o(d,i)&&(o.m[i]=d[i])
if(l)var c=l(o)}for(r&&r(t);s<a.length;s++)n=a[s],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0
return o.O(c)},t=globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]
t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),o.O(void 0,[198],(()=>o(678)))
var i=o.O(void 0,[198],(()=>o(136)))
i=o.O(i),__ember_auto_import__=i})()
