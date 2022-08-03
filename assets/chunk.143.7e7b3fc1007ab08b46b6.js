var __ember_auto_import__;(()=>{var e,r={820:(e,r,o)=>{"use strict"
o.r(r),o.d(r,{default:()=>l})
const t=require("@ember/template-factory"),i=require("@ember/component"),n=require("@glimmer/component")
var a=o.n(n),d=(0,t.createTemplateFactory)({id:"6zjp6uuL",block:'[[[10,0],[14,0,"mobiledoc-canvas"],[12],[1,"\\n  "],[18,4,null],[1,"\\n\\n  "],[11,0],[4,[38,1],[[30,1],[30,2],[30,3]],null],[12],[1,"\\n  "],[13],[1,"\\n"],[13]],["@content","@postDidChange","@editorDidLoad","&toolbar"],false,["yield","mobiledoc-editor"]]',moduleName:"(unknown template module)",isStrictMode:!1})
class l extends(a()){}(0,i.setComponentTemplate)(d,l)},947:(e,r,o)=>{"use strict"
o.r(r),o.d(r,{default:()=>a})
const t=require("ember-modifier")
var i=o.n(t),n=o(198)
class a extends(i()){modify(e,r){let[o,t,i]=r
if(!this.editor){const r={mobiledoc:o}
this.editor=new n.ML(r),this.editor.render(e),this.editor.postDidChange(((e,r,o)=>{t?.(this.editor.serialize())})),i?.(this.editor,e)}}}},880:(e,r,o)=>{var t,i
e.exports=(t=_eai_d,i=_eai_r,window.emberAutoImportDynamic=function(e){return 1===arguments.length?i("_eai_dyn_"+e):i("_eai_dynt_"+e)(Array.prototype.slice.call(arguments,1))},window.emberAutoImportSync=function(e){return i("_eai_sync_"+e)(Array.prototype.slice.call(arguments,1))},t("cb-ember-mobiledoc-editor/components/mobiledoc/editor",[],(function(){return o(820)})),void t("cb-ember-mobiledoc-editor/modifiers/mobiledoc-editor",[],(function(){return o(947)})))},318:function(e,r){window._eai_r=require,window._eai_d=define}},o={}
function t(e){var i=o[e]
if(void 0!==i)return i.exports
var n=o[e]={exports:{}}
return r[e].call(n.exports,n,n.exports,t),n.exports}t.m=r,e=[],t.O=(r,o,i,n)=>{if(!o){var a=1/0
for(u=0;u<e.length;u++){for(var[o,i,n]=e[u],d=!0,l=0;l<o.length;l++)(!1&n||a>=n)&&Object.keys(t.O).every((e=>t.O[e](o[l])))?o.splice(l--,1):(d=!1,n<a&&(a=n))
if(d){e.splice(u--,1)
var c=i()
void 0!==c&&(r=c)}}return r}n=n||0
for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1]
e[u]=[o,i,n]},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e
return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={143:0}
t.O.j=r=>0===e[r]
var r=(r,o)=>{var i,n,[a,d,l]=o,c=0
if(a.some((r=>0!==e[r]))){for(i in d)t.o(d,i)&&(t.m[i]=d[i])
if(l)var u=l(t)}for(r&&r(o);c<a.length;c++)n=a[c],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0
return t.O(u)},o=globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]
o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})(),t.O(void 0,[198],(()=>t(318)))
var i=t.O(void 0,[198],(()=>t(880)))
i=t.O(i),__ember_auto_import__=i})()
