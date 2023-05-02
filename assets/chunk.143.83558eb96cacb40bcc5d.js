var __ember_auto_import__;(()=>{var e,o={820:(e,o,r)=>{"use strict"
r.r(o),r.d(o,{default:()=>l})
const t=require("@ember/template-factory"),i=require("@ember/component"),n=require("@glimmer/component")
var a=r.n(n),d=(0,t.createTemplateFactory)({id:"xvKX3/W4",block:'[[[10,0],[14,0,"mobiledoc-canvas"],[12],[1,"\\n  "],[18,6,null],[1,"\\n\\n  "],[11,0],[4,[38,1],null,[["content","postDidChange","editorDidLoad","cards","atoms"],[[30,1],[30,2],[30,3],[30,4],[30,5]]]],[12],[13],[1,"\\n"],[13]],["@content","@postDidChange","@editorDidLoad","@cards","@atoms","&toolbar"],false,["yield","mobiledoc-editor"]]',moduleName:"(unknown template module)",isStrictMode:!1})
class l extends(a()){}(0,i.setComponentTemplate)(d,l)},947:(e,o,r)=>{"use strict"
r.r(o),r.d(o,{default:()=>a})
const t=require("ember-modifier")
var i=r.n(t),n=r(198)
class a extends(i()){modify(e,o,r){let{content:t,postDidChange:i,editorDidLoad:a,cards:d=[],atoms:l=[]}=r
if(!this.editor){const o={mobiledoc:t,placeholder:"Type here",autofocus:!0,cards:d,atoms:l}
this.editor=new n.ML(o),this.editor.render(e),this.editor.postDidChange(((e,o,r)=>{i?.(this.editor.serialize())})),a?.(this.editor,e)}}}},145:(e,o,r)=>{var t,i
e.exports=(t=_eai_d,i=_eai_r,window.emberAutoImportDynamic=function(e){return 1===arguments.length?i("_eai_dyn_"+e):i("_eai_dynt_"+e)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(e){return i("_eai_sync_"+e)(Array.prototype.slice.call(arguments,1))},t("cb-ember-mobiledoc-editor/components/mobiledoc/editor",[],(function(){return r(820)})),void t("cb-ember-mobiledoc-editor/modifiers/mobiledoc-editor",[],(function(){return r(947)})))},377:function(e,o){window._eai_r=require,window._eai_d=define}},r={}
function t(e){var i=r[e]
if(void 0!==i)return i.exports
var n=r[e]={exports:{}}
return o[e].call(n.exports,n,n.exports,t),n.exports}t.m=o,e=[],t.O=(o,r,i,n)=>{if(!r){var a=1/0
for(s=0;s<e.length;s++){for(var[r,i,n]=e[s],d=!0,l=0;l<r.length;l++)(!1&n||a>=n)&&Object.keys(t.O).every((e=>t.O[e](r[l])))?r.splice(l--,1):(d=!1,n<a&&(a=n))
if(d){e.splice(s--,1)
var c=i()
void 0!==c&&(o=c)}}return o}n=n||0
for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1]
e[s]=[r,i,n]},t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e
return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={143:0}
t.O.j=o=>0===e[o]
var o=(o,r)=>{var i,n,[a,d,l]=r,c=0
if(a.some((o=>0!==e[o]))){for(i in d)t.o(d,i)&&(t.m[i]=d[i])
if(l)var s=l(t)}for(o&&o(r);c<a.length;c++)n=a[c],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0
return t.O(s)},r=globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]
r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))})(),t.O(void 0,[198],(()=>t(377)))
var i=t.O(void 0,[198],(()=>t(145)))
i=t.O(i),__ember_auto_import__=i})()
