"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[198],{198:(e,t,r)=>{function s(e,t){if("detect"in e)return e.detect(t)
for(let r=0;r<e.length;r++)if(t(e[r]))return e[r]}function i(e,t){if("any"in e)return e.any(t)
for(let r=0;r<e.length;r++)if(t(e[r]))return!0
return!1}function n(e,t){if("forEach"in e)e.forEach(t)
else for(let r=0;r<e.length;r++)t(e[r],r)}function a(e,t){const r=[]
return n(e,(e=>{t(e)&&r.push(e)})),r}function o(e,t){let r=0
for(;r<e.length&&r<t.length&&e[r]===t[r];)r++
return r}function l(e,t,r){let s=r
return n(e,((e,r)=>{s=t(s,e,r)})),s}function h(e){const t={}
for(let r=0;r<e.length;r+=2){let[s,i]=[e[r],e[r+1]]
t[s]=i}return t}function d(e){const t=Object.keys(e).sort(),r=[]
return t.forEach((t=>{r.push(t),r.push(e[t])})),r}function c(e,t){let r=e.length
if(r!==t.length)return!1
for(let s=0;s<r;s++)if(e[s]!==t[s])return!1
return!0}function u(e,t){return-1!==e.indexOf(t)}function p(e){return Object.keys(e).map((t=>e[t]))}function m(e){return 3===e.nodeType}function f(e){return 8===e.nodeType}function k(e){return 1===e.nodeType}function g(e,t){return e===t||!!(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)}function _(e){const t={}
return e.hasAttributes()&&n(e.attributes,(e=>{let{name:r,value:s}=e
t[r]=s})),t}function C(e,t){e.classList.add(t)}function b(e){return e.toLowerCase()}function v(e,t){let r=e.lastIndexOf(t)
return-1!==r&&r===e.length-t.length}r.d(t,{ML:()=>Is})
class S{constructor(){this.markups=[],this.prev=null,this.next=null,this.isAtom=!1,this.isMarker=!1,this.section=null,this.parent=null,this.renderNode=null}charAt(e){return this.value.slice(e,e+1)}clearMarkups(){this.markups=[]}addMarkup(e){this.markups.push(e)}addMarkupAtIndex(e,t){this.markups.splice(t,0,e)}removeMarkup(e){let t
if("function"==typeof e)t=e
else{let r=e
t=e=>e===r}n(a(this.markups,t),(e=>this._removeMarkup(e)))}_removeMarkup(e){const t=this.markups.indexOf(e);-1!==t&&this.markups.splice(t,1)}hasMarkup(e){return!!this.getMarkup(e)}getMarkup(e){if("string"==typeof e){let t=b(e)
return s(this.markups,(e=>e.tagName===t))}{let t=e
return s(this.markups,(e=>e===t))}}get openedMarkups(){let e=0
return this.prev&&(e=o(this.markups,this.prev.markups)),this.markups.slice(e)}get closedMarkups(){let e=0
return this.next&&(e=o(this.markups,this.next.markups)),this.markups.slice(e)}}class E extends Error{}function A(e,t){if(!t)throw new E(e)}function y(e,t,r){A(e,t in r)}function w(e,t){if(null===t)throw new E(e)}function M(e,t,r){A(e,r)}function N(e,t){if(null==e)throw new E(t)
return e}function T(e){return N(e,"expected value to not be null or undefined")}const R=[55296,56319],I=[56320,57343]
class L extends S{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
super(),this.type="marker",this.isMarker=!0,this.markups=[],this.renderNode=null,this.value=e,A("Marker must have value",null!=e),t.forEach((e=>this.addMarkup(e)))}clone(){const e=this.markups.slice()
return this.builder.createMarker(this.value,e)}get isEmpty(){return this.isBlank}get isBlank(){return 0===this.length}get text(){return this.value}get length(){return this.value.length}deleteValueAtOffset(e){A("Cannot delete value at offset outside bounds",e>=0&&e<=this.length)
let t=1,r=this.value.charCodeAt(e)
r>=R[0]&&r<=R[1]?t=2:r>=I[0]&&r<=I[1]&&(t=2,e-=1)
const[s,i]=[this.value.slice(0,e),this.value.slice(e+t)]
return this.value=s+i,t}canJoin(e){return e&&e.isMarker&&c(this.markups,e.markups)}textUntil(e){return this.value.slice(0,e)}split(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.length,r=[this.builder.createMarker(this.value.substring(0,e)),this.builder.createMarker(this.value.substring(e,t)),this.builder.createMarker(this.value.substring(t))]
return this.markups.forEach((e=>r.forEach((t=>t.addMarkup(e))))),r}splitAtOffset(e){A("Cannot split a marker at an offset > its length",e<=this.length)
let{value:t,builder:r}=this,s=r.createMarker(t.substring(0,e)),i=r.createMarker(t.substring(e))
return this.markups.forEach((e=>{s.addMarkup(e),i.addMarkup(e)})),[s,i]}}var x,D={BACKSPACE:8,SPACE:32,ENTER:13,SHIFT:16,ESC:27,DELETE:46,0:48,9:57,A:65,Z:90,a:97,z:122,NUMPAD_0:186,NUMPAD_9:111,";":186,".":190,"`":192,"[":219,'"':222,IME:229,TAB:9,CLEAR:12,PAUSE:19,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,INS:45,META:91,ALT:18,CTRL:17},P={BACKSPACE:"Backspace",SPACE:" ",ENTER:"Enter",SHIFT:"Shift",ESC:"Escape",DELETE:"Delete",INS:"Insert",HOME:"Home",END:"End",PAGEUP:"PageUp",PAGEDOWN:"PageDown",CLEAR:"Clear",PAUSE:"Pause",TAB:"Tab",ALT:"Alt",CTRL:"Control",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",DOWN:"ArrowDown"}
!function(e){e[e.FORWARD=1]="FORWARD",e[e.BACKWARD=-1]="BACKWARD"}(x||(x={}))
const O={META:1,CTRL:2,SHIFT:4,ALT:8},B={BACKSPACE:D.BACKSPACE,TAB:D.TAB,ENTER:D.ENTER,ESC:D.ESC,SPACE:D.SPACE,PAGEUP:D.PAGEUP,PAGEDOWN:D.PAGEDOWN,END:D.END,HOME:D.HOME,LEFT:D.LEFT,UP:D.UP,RIGHT:D.RIGHT,DOWN:D.DOWN,INS:D.INS,DEL:D.DELETE}
class H{constructor(e){this.key=e.key,this.keyCode=e.keyCode,this.charCode=e.charCode,this.event=e,this.modifierMask=function(e){let{metaKey:t,shiftKey:r,ctrlKey:s,altKey:i}=e,n=(e,t)=>e&&t||0
return n(t,O.META)+n(r,O.SHIFT)+n(s,O.CTRL)+n(i,O.ALT)}(e)}static fromEvent(e){return A("Must pass a Key event to Key.fromEvent",e&&function(e){return/^key/.test(e.type)}(e)),new H(e)}toString(){return this.isTab()?"\t":String.fromCharCode(this.charCode)}isKeySupported(){return this.key}isKey(e){return this.isKeySupported()?(A(`Must define Keys.${e}.`,!!P[e]),this.key===P[e]):(A(`Must define Keycodes.${e}.`,!!D[e]),this.keyCode===D[e])}isEscape(){return this.isKey("ESC")}isDelete(){return this.isKey("BACKSPACE")||this.isForwardDelete()}isForwardDelete(){return this.isKey("DELETE")}isArrow(){return this.isHorizontalArrow()||this.isVerticalArrow()}isHorizontalArrow(){return this.isLeftArrow()||this.isRightArrow()}isHorizontalArrowWithoutModifiersOtherThanShift(){return this.isHorizontalArrow()&&!(this.ctrlKey||this.metaKey||this.altKey)}isVerticalArrow(){return this.isKey("UP")||this.isKey("DOWN")}isLeftArrow(){return this.isKey("LEFT")}isRightArrow(){return this.isKey("RIGHT")}isHome(){return this.isKey("HOME")}isEnd(){return this.isKey("END")}isPageUp(){return this.isKey("PAGEUP")}isPageDown(){return this.isKey("PAGEDOWN")}isInsert(){return this.isKey("INS")}isClear(){return this.isKey("CLEAR")}isPause(){return this.isKey("PAUSE")}isSpace(){return this.isKey("SPACE")}isTab(){return!this.hasAnyModifier()&&this.isKey("TAB")}isEnter(){return this.isKey("ENTER")}isShiftKey(){return this.isKey("SHIFT")}isAltKey(){return this.isKey("ALT")}isCtrlKey(){return this.isKey("CTRL")}isIME(){return this.keyCode===D.IME}get direction(){switch(!0){case this.isDelete():return this.isForwardDelete()?x.FORWARD:x.BACKWARD
case this.isHorizontalArrow():return this.isRightArrow()?x.FORWARD:x.BACKWARD
default:return x.FORWARD}}isShift(){return this.shiftKey}hasModifier(e){return e&this.modifierMask}hasAnyModifier(){return!!this.modifierMask}get ctrlKey(){return O.CTRL&this.modifierMask}get metaKey(){return O.META&this.modifierMask}get shiftKey(){return O.SHIFT&this.modifierMask}get altKey(){return O.ALT&this.modifierMask}isPrintableKey(){return!(this.isArrow()||this.isHome()||this.isEnd()||this.isPageUp()||this.isPageDown()||this.isInsert()||this.isClear()||this.isPause()||this.isEscape())}isNumberKey(){if(this.isKeySupported())return this.key>="0"&&this.key<="9"
{const e=this.keyCode
return e>=D[0]&&e<=D[9]||e>=D.NUMPAD_0&&e<=D.NUMPAD_9}}isLetterKey(){if(this.isKeySupported()){const e=this.key
return e>="a"&&e<="z"||e>="A"&&e<="Z"}{const e=this.keyCode
return e>=D.A&&e<=D.Z||e>=D.a&&e<=D.z}}isPunctuation(){if(this.isKeySupported()){const e=this.key
return e>=";"&&e<="`"||e>="["&&e<='"'}{const e=this.keyCode
return e>=D[";"]&&e<=D["`"]||e>=D["["]&&e<=D['"']}}isPrintable(){return!this.ctrlKey&&!this.metaKey&&!!this.isPrintableKey()&&(0!==this.keyCode||this.toString().length>0||this.isNumberKey()||this.isSpace()||this.isTab()||this.isEnter()||this.isLetterKey()||this.isPunctuation()||this.isIME())}}function F(e){let t=document.createRange()
return t.setEnd(e,e.nodeValue.length),t.setStart(e,0),t.getClientRects()}function $(e,t){let r,s,i=1e8,n=0
for(let a=e.firstChild;a;a=a.nextSibling){let e
if(k(a))e=a.getClientRects()
else{if(!m(a))continue
e=F(a)}for(let o=0;o<e.length;o++){let l=e[o]
if(l.left<=t.left&&l.right>=t.left){let e=l.top>t.top?l.top-t.top:l.bottom<t.top?t.top-l.bottom:0
if(e<i){r=a,i=e,s=e?{left:t.left,top:l.top}:t,k(a)&&!a.firstChild&&(n=o+(t.left>=(l.left+l.right)/2?1:0))
continue}}!r&&(t.top>=l.bottom||t.top>=l.top&&t.left>=l.right)&&(n=o+1)}}return r?m(r)?function(e,t){let r=e.nodeValue.length,s=document.createRange()
for(let i=0;i<r;i++){s.setEnd(e,i+1),s.setStart(e,i)
let r=s.getBoundingClientRect()
if(r.top!==r.bottom&&r.left<=t.left&&r.right>=t.left&&r.top<=t.top&&r.bottom>=t.top)return{node:e,offset:i+(t.left>=(r.left+r.right)/2?1:0)}}return{node:e,offset:0}}(r,s):r.firstChild?$(r,s):{node:e,offset:n}:{node:e,offset:n}}function U(e,t,r){let s=t.compareDocumentPosition(e)
if(s&Node.DOCUMENT_POSITION_CONTAINED_BY)return{node:e,offset:r}
if(s&Node.DOCUMENT_POSITION_CONTAINS)return{node:e,offset:r}
if(s&Node.DOCUMENT_POSITION_PRECEDING){let e=t.firstChild
for(;e&&e.firstChild;)e=e.firstChild
return{node:e,offset:0}}if(s&Node.DOCUMENT_POSITION_FOLLOWING){let e=t.lastChild
for(;e.lastChild;)e=e.lastChild
return{node:e,offset:m(e)?e.textContent.length:1}}return{node:e,offset:r}}function K(e){w("selection anchorNode should not be null",e.anchorNode),w("selection focusNode should not be null",e.focusNode)
let t,r,s,i,n,{anchorNode:a,focusNode:o,anchorOffset:l,focusOffset:h}=e
const d=a.compareDocumentPosition(o)
if(d&Node.DOCUMENT_POSITION_CONTAINS){if(h<o.childNodes.length)o=o.childNodes[h],h=0
else{for(;o.lastChild;)o=o.lastChild
h=o.textContent.length}return K({focusNode:o,focusOffset:h,anchorNode:a,anchorOffset:l})}if(d&Node.DOCUMENT_POSITION_CONTAINED_BY){let e=l-1
return e<0&&(e=0),K({anchorNode:a.childNodes[e],anchorOffset:0,focusNode:o,focusOffset:h})}return d&Node.DOCUMENT_POSITION_FOLLOWING?(t=a,r=o,s=l,i=h,n=x.FORWARD):d&Node.DOCUMENT_POSITION_PRECEDING?(t=o,r=a,s=h,i=l,n=x.BACKWARD):(t=r=a,s=l,i=h,i<s?(s=h,i=l,n=x.BACKWARD):n=s<i?x.FORWARD:null),{headNode:t,headOffset:s,tailNode:r,tailOffset:i,direction:n}}class W{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
this.head=e,this.tail=t,this.direction=r}static create(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null
return new W(new ne(e,t),new ne(r,s),i)}static blankRange(){return new W(ne.blankPosition(),ne.blankPosition())}trimTo(e){const t=e.length
let r=e===this.head.section?Math.min(this.head.offset,t):0,s=e===this.tail.section?Math.min(this.tail.offset,t):t
return W.create(e,r,e,s)}extend(e){if(A("Must pass integer to Range#extend","number"==typeof e),0===e)return this
let{head:t,tail:r,direction:s}=this
switch(s){case x.FORWARD:return new W(t,r.move(e),s)
case x.BACKWARD:return new W(t.move(e),r,s)
default:{let s=e>0?x.FORWARD:x.BACKWARD
return new W(t,r,s).extend(e)}}}move(e){A(`Must pass DIRECTION.FORWARD (${x.FORWARD}) or DIRECTION.BACKWARD (${x.BACKWARD}) to Range#move`,e===x.FORWARD||e===x.BACKWARD)
let{focusedPosition:t,isCollapsed:r}=this
return r?new W(t.move(e)):this._collapse(e)}expandByMarker(e){let{head:t,tail:r,direction:s}=this,{section:i}=t
if(w("expected range section to not be null",i),j(i),i!==r.section)throw new Error("#expandByMarker does not work across sections. Perhaps you should confirm the range is collapsed")
let n=t=>!e(t),a=i.markers.detect(n,t.marker,!0)
a=!a&&e(i.markers.head)?i.markers.head:T(a).next||t.marker
let o=new ne(i,i.offsetOfMarker(T(a)))
j(r.section)
let l=r.section.markers.detect(n,r.marker)
l=!l&&e(T(i.markers.tail))?T(i.markers.tail):T(l).prev||T(r.marker)
let h=new ne(r.section,r.section.offsetOfMarker(l)+l.length)
return o.toRange(h,s)}_collapse(e){return new W(e===x.BACKWARD?this.head:this.tail)}get focusedPosition(){return this.direction===x.BACKWARD?this.head:this.tail}isEqual(e){return e&&this.head.isEqual(e.head)&&this.tail.isEqual(e.tail)}get isBlank(){return this.head.isBlank&&this.tail.isBlank}get headSection(){return this.head.section}get tailSection(){return this.tail.section}get headSectionOffset(){return this.head.offset}get tailSectionOffset(){return this.tail.offset}get isCollapsed(){return this.head.isEqual(this.tail)}get headMarker(){return this.head.marker}get tailMarker(){return this.tail.marker}get headMarkerOffset(){return this.head.offsetInMarker}get tailMarkerOffset(){return this.tail.offsetInMarker}}function j(e){if(!("markers"in e))throw new E("Expected position section to be markerable")}class q{constructor(){this.next=null,this.prev=null}}function G(e){return"items"in e&&e.items}class V extends q{constructor(e){super(),this.isSection=!0,this.isMarkerable=!1,this.isNested=!1,this.isListItem=!1,this.isListSection=!1,this.isLeafSection=!0,this.isCardSection=!1,this._parent=null,A("Cannot create section without type",!!e),this.type=e}get parent(){return N(this._parent,"expected section parent to be assigned")}get isBlank(){return!1}get length(){return 0}headPosition(){return this.toPosition(0)}tailPosition(){return this.toPosition(this.length)}toPosition(e){return A("Must pass number to `toPosition`","number"==typeof e),A("Cannot call `toPosition` with offset > length",e<=this.length),new ne(this,e)}toRange(){return this.headPosition().toRange(this.tailPosition())}splitMarkerAtOffset(e){return{added:[],removed:[]}}nextLeafSection(){const e=this.next
return e?G(e)?e.items.head:e:z(this)?this.parent.nextLeafSection():null}immediatelyNextMarkerableSection(){let e=this.nextLeafSection()
for(;e&&!e.isMarkerable;)e=e.nextLeafSection()
return e}previousLeafSection(){const e=this.prev
return e?G(e)?e.items.tail:e:z(this)?this.parent.previousLeafSection():null}}function z(e){return e.isNested}var J
function Q(e){return e.isCardSection}!function(e){e.DISPLAY="display",e.EDIT="edit"}(J||(J={}))
class Y extends V{constructor(e,t){super("card-section"),this._initialMode=J.DISPLAY,this.isCardSection=!0,this.name=e,this.payload=t,this.isCardSection=!0}textUntil(){return""}canJoin(){return!1}get length(){return 1}clone(){let e=(t=this.payload,{...t})
var t
let r=this.builder.createCardSection(this.name,e),s=this._initialMode
return this.renderNode&&this.renderNode.cardNode&&(s=this.renderNode.cardNode.mode),r.setInitialMode(s),r}setInitialMode(e){this._initialMode=e}}class Z extends S{constructor(e,t,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[]
super(),this.type="atom",this.isAtom=!0,this.name=e,this.value=t,this.text="",A("Atom must have value",null!=t),this.payload=r,this.type="atom",this.isMarker=!1,this.isAtom=!0,this.markups=[],s.forEach((e=>this.addMarkup(e)))}clone(){let e=this.markups.slice()
return this.builder.createAtom(this.name,this.value,this.payload,e)}get isBlank(){return!1}get length(){return 1}canJoin(){return!1}textUntil(){return""}split(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=[]
return 0===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:e)&&t.push(this.builder.createMarker("",this.markups.slice())),t.push(this.clone()),1===e&&t.push(this.builder.createMarker("",this.markups.slice())),t}splitAtOffset(e){A("Cannot split a marker at an offset > its length",e<=this.length)
let t,r,{builder:s}=this,i=this.clone(),n=s.createMarker("")
return 0===e?[t,r]=[n,i]:1===e?[t,r]=[i,n]:A(`Invalid offset given to Atom#splitAtOffset: "${e}"`,!1),this.markups.forEach((e=>{t.addMarkup(e),r.addMarkup(e)})),[t,r]}}function X(e){return"atom"===e.type}const{FORWARD:ee,BACKWARD:te}=x,re=/[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͅͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևְ-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-ٗٙ-ٟٮ-ۓە-ۜۡ-ۭۨ-ۯۺ-ۼۿܐ-ܿݍ-ޱߊ-ߪߴߵߺࠀ-ࠗࠚ-ࠬࡀ-ࡘࢠ-ࢴࣣ-ࣰࣩ-ऻऽ-ौॎ-ॐॕ-ॣॱ-ঃঅ-ঌএঐও-নপ-রলশ-হঽ-ৄেৈোৌৎৗড়ঢ়য়-ৣৰৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੂੇੈੋੌੑਖ਼-ੜਫ਼ੰ-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ૅે-ૉોૌૐૠ-ૣૹଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽ-ୄେୈୋୌୖୗଡ଼ଢ଼ୟ-ୣୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-ௌௐௗఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-ౌౕౖౘ-ౚౠ-ౣಁ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊ-ೌೕೖೞೠ-ೣೱೲഁ-ഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൌൎൗൟ-ൣൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆා-ුූෘ-ෟෲෳก-ฺเ-ๆํກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆໍໜ-ໟༀཀ-ཇཉ-ཬཱ-ཱྀྈ-ྗྙ-ྼက-ံးျ-ဿၐ-ၢၥ-ၨၮ-ႆႎႜႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፟ᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜓᜠ-ᜳᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-ឳា-ៈៗៜᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-ᤸᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨛᨠ-ᩞᩡ-ᩴᪧᬀ-ᬳᬵ-ᭃᭅ-ᭋᮀ-ᮩᮬ-ᮯᮺ-ᯥᯧ-ᯱᰀ-ᰵᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳳᳵᳶᴀ-ᶿᷧ-ᷴḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙴ-ꙻꙿ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞭꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠧꡀ-ꡳꢀ-ꣃꣲ-ꣷꣻꣽꤊ-ꤪꤰ-ꥒꥠ-ꥼꦀ-ꦲꦴ-ꦿꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨶꩀ-ꩍꩠ-ꩶꩺꩾ-ꪾꫀꫂꫛ-ꫝꫠ-ꫯꫲ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯪ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]|[0-9]|_|:/
function se(e,t){let r=e.findRenderNodeFromElement(t,(e=>e.postNode.isSection))
return r&&r.postNode}function ie(e){if(!e)throw new Error("expected marker to have render node")}class ne{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
r||(A("Position must have a section that is addressable by the cursor",e&&e.isLeafSection),A("Position must have numeric offset","number"==typeof t)),this.section=e,this.offset=t,this.isBlank=r}static atPoint(e,t,r){let{_renderTree:s,element:i}=r,n=document.elementFromPoint(e,t)
if(!n||!g(i,n))return null
let{node:a,offset:o}=$(n,{left:e,top:t})
return ne.fromNode(s,a,o)}static blankPosition(){return new ae}toRange(){return new W(this,arguments.length>0&&void 0!==arguments[0]?arguments[0]:this,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null)}get leafSectionIndex(){let e
return this.section.post.walkAllLeafSections(((t,r)=>{t===this.section&&(e=r)})),e}get isMarkerable(){return this.section&&this.section.isMarkerable}get marker(){return this.isMarkerable&&this.markerPosition.marker||null}markerIn(e){if(!this.isMarkerable)return
let{marker:t,offsetInMarker:r}=this
return t?r>0&&r<t.length?t:0===r?e===te?t:t.prev:r===t.length?e===ee?t.next:t:void 0:void 0}get offsetInMarker(){return this.markerPosition.offset}isEqual(e){return this.section===e.section&&this.offset===e.offset}isHeadOfPost(){return this.move(te).isEqual(this)}isTailOfPost(){return this.move(ee).isEqual(this)}isHead(){return this.isEqual(this.section.headPosition())}isTail(){return this.isEqual(this.section.tailPosition())}move(e){return A("Must pass integer to Position#move","number"==typeof e),e<0?this.moveLeft().move(++e):e>0?this.moveRight().move(--e):this}moveWord(e){if(e===te?this.isHeadOfPost():this.isTailOfPost())return this
if(!this.isMarkerable)return this.move(e)
let t=this,r=(e,t)=>t===te?e.isHead():e.isTail(),s=(e,t)=>(e=>{let{marker:t,offsetInMarker:r}=e
return t.charAt(r)})(t===te?e.move(te):e),i=(e,t)=>!(t!==te||!e.isTail()||!e.marker.isAtom)||(t===te?e.move(te).marker.isAtom:e.marker.isAtom)
if(r(t,e))return t.move(e).moveWord(e)
let n=t=>!r(t,e)&&!i(t,e)&&!re.test(s(t,e))
for(;n(t);)t=t.move(e)
if(i(t,e))return t.move(e)
let a=t=>!r(t,e)&&!i(t,e)&&re.test(s(t,e))
for(;a(t);)t=t.move(e)
return t}moveLeft(){if(this.isHead()){let e=this.section.previousLeafSection()
return e?e.tailPosition():this}{let e=this.offset-1
if(this.isMarkerable&&this.marker){let t=this.marker.value.charCodeAt(e)
t>=I[0]&&t<=I[1]&&(e-=1)}return new ne(this.section,e)}}moveRight(){if(this.isTail()){let e=this.section.nextLeafSection()
return e?e.headPosition():this}{let e=this.offset+1
if(this.isMarkerable&&this.marker){let t=this.marker.value.charCodeAt(e-1)
t>=R[0]&&t<=R[1]&&(e+=1)}return new ne(this.section,e)}}static fromNode(e,t,r){return m(t)?ne.fromTextNode(e,t,r):k(t)?ne.fromElementNode(e,t,r):void A("Positions can only be created from text nodes or elements",!1)}static fromTextNode(e,t,r){const s=e.getElementRenderNode(t)
let i,n
if(s){const e=s.postNode
i=e.section,A(`Could not find parent section for mapped text node "${t.textContent}"`,!!i),n=e.section.offsetOfMarker(e,r)}else i=se(e,t),A(`Could not find parent section for un-mapped text node "${t.textContent}"`,!!i),n=function(e,t,r){return function(e){return e.isMarkerable}(e)?function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=0,i=e.markers.head
for(;i;){if(ie(i.renderNode),i.renderNode.element===t)return s+r
if(i.isAtom){if(i.renderNode.headTextNode===t)return s
if(i.renderNode.tailTextNode===t)return s+1}s+=i.length,i=i.next}return s}(e,t,r):(function(e){A("findOffsetInSection must be called with markerable or card section",e&&e.isCardSection)}(e),ie(e.renderNode),t===e.renderNode.element.lastChild?1:0)}(i,t,r)
return new ne(i,n)}static fromElementNode(e,t){let r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
if(t===e.rootElement){let t=e.rootNode.postNode
r=0===s?t.headPosition():t.tailPosition()}else{let i=se(e,t)
if(A("Could not find parent section from element node",!!i),Q(i))r=s<2?i.headPosition():i.tailPosition()
else{let n=e.getElementRenderNode(t),a=n&&n.postNode
if(a&&X(a)){let e=i.offsetOfMarker(a)
s>1&&(e+=a.length),r=new ne(i,e)}else r=s>=t.childNodes.length?i.tailPosition():i.headPosition()}}return r}get markerPosition(){return A("Cannot get markerPosition without a section",!!this.section),M("cannot get markerPosition of a non-markerable",this.section,!!this.section.isMarkerable),this.section.markerPositionAtOffset(this.offset)}}class ae extends ne{constructor(){super(null,0,!0)}isEqual(e){return e&&e.isBlank}toRange(){return W.blankRange()}get leafSectionIndex(){throw new Error("must implement get leafSectionIndex")}get isMarkerable(){return!1}get marker(){return null}isHeadOfPost(){return!1}isTailOfPost(){return!1}isHead(){return!1}isTail(){return!1}move(){return this}moveWord(){return this}get markerPosition(){return{}}}const oe=(e,t,r)=>r(window.prompt(e,t))
function le(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:oe
if(e.range.isCollapsed)return
let r=e.cursor.selectedText(),s="";-1!==r.indexOf("http")&&(s=r)
let{range:i}=e,n=e.detectMarkupInRange(i,"a")
n?e.toggleMarkup("a"):t("Enter a URL",s,(t=>{t&&e.toggleMarkup("a",{href:t})}))}class he extends class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.isShowing=!1,this.isDestroyed=!1,e.tagName=e.tagName||"div",e.container=e.container||document.body,this.element=document.createElement(e.tagName),this.container=e.container,(e.classNames||[]).forEach((e=>C(this.element,e))),this._eventListeners=[]}addEventListener(e,t,r){e.addEventListener(t,r),this._eventListeners.push([e,t,r])}removeAllEventListeners(){this._eventListeners.forEach((e=>{let[t,r,s]=e
t.removeEventListener(r,s)}))}show(){if(!this.isShowing)return this.container.appendChild(this.element),this.isShowing=!0,!0}hide(){if(this.isShowing)return this.container.removeChild(this.element),this.isShowing=!1,!0}destroy(){this.removeAllEventListeners(),this.hide(),this.isDestroyed=!0}}{constructor(e){super({...e,classNames:["__mobiledoc-tooltip"]}),this.elementObserver=null,this.rootElement=e.rootElement,this.editor=e.editor,this.addListeners(e)}showLink(e){const{editor:t,element:r}=this,{tooltipPlugin:s}=t
s.renderLink(r,e,{editLink:()=>{(function(e,t){(arguments.length>2&&void 0!==arguments[2]?arguments[2]:oe)("Enter a URL",e.href,(r=>{if(!r)return
const s=ne.fromNode(t._renderTree,e.firstChild),i=new W(s,new ne(s.section,s.offset+e.textContent.length))
t.run((e=>{let s=t.builder.createMarkup("a",{href:r})
e.toggleMarkup(s,i),e.toggleMarkup(s,i)}))}))})(e,t),this.hide()}}),this.show(),function(e,t){const r=function(e,t){return parseFloat(window.getComputedStyle(e).marginTop)}(e);(function(e,t,r){(function(e,t,r,s){const i=function(e){const t={left:0,top:-window.pageYOffset},r=e.offsetParent
let s
return"relative"===window.getComputedStyle(r).position&&(s=r.getBoundingClientRect(),t.left=s.left,t.top=s.top),t}(e),n=e.style,a=Math.round
let o,l
r=r||0,s=s||0,o=a(t.left-i.left-s),l=a(t.top+t.height-i.top-r),n.left=`${o}px`,n.top=`${l}px`})(e,t,r,e.offsetWidth/2-t.width/2)})(e,t.getBoundingClientRect(),-r)}(this.element,e),this.elementObserver=function(e,t){let r=!1
const s=()=>{r||(e.parentNode?window.requestAnimationFrame(s):t())}
return s(),{cancel:()=>r=!0}}(e,(()=>this.hide()))}addListeners(e){const{rootElement:t,element:r}=this
let s,i
const n=()=>{clearTimeout(i),i=setTimeout((()=>{this.hide()}),600)}
this.addEventListener(r,"mouseenter",(()=>{clearTimeout(i)})),this.addEventListener(r,"mouseleave",(()=>{n()})),this.addEventListener(t,"mouseover",(r=>{let n=function(e,t,r){for(e=b(e);t&&t!==r;){if(b(t.tagName)===e)return t
t=t.parentElement}}(e.showForTag,r.target,t)
n&&n.isContentEditable&&(clearTimeout(i),s=setTimeout((()=>{n&&this.showLink(n)}),200))})),this.addEventListener(t,"mouseout",(()=>{clearTimeout(s),this.elementObserver&&this.elementObserver.cancel(),n()}))}}const de={renderLink(e,t,r){let{editLink:s}=r
const{href:i}=t
e.innerHTML=`<a href="${i}" target="_blank">${i}</a>`
const n=document.createElement("button")
n.classList.add("__mobiledoc-tooltip__edit-link"),n.innerText="Edit Link",n.addEventListener("click",s),e.append(n)}}
class ce{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
this.callbackQueues={},this.removalQueues={},e.forEach((e=>{this.callbackQueues[e]=[],this.removalQueues[e]=[]}))}runCallbacks(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=this._getQueue(e)
r.forEach((e=>e(...t))),this.removalQueues[e].forEach((e=>{let t=r.indexOf(e);-1!==t&&r.splice(t,1)})),this.removalQueues[e]=[]}addCallback(e,t){this._getQueue(e).push(t)}_scheduleCallbackForRemoval(e,t){this.removalQueues[e].push(t)}addCallbackOnce(e,t){let r=this._getQueue(e);-1===r.indexOf(t)&&(r.push(t),this._scheduleCallbackForRemoval(e,t))}_getQueue(e){let t=this.callbackQueues[e]
return A(`No queue found for "${e}"`,!!t),t}}function ue(e){return"sections"in e}class pe{constructor(e,t){let{postEditor:r,post:s}=e
this.postEditor=r,this._post=s,this.cursorPosition=t,this.builder=this.postEditor.builder,this._hasInsertedFirstLeafSection=!1}get cursorPosition(){return this._cursorPosition}set cursorPosition(e){this._cursorPosition=e,this.postEditor.setRange(e)}visit(e){let t=e.type
M(`Cannot visit node of type ${e.type}`,0,t in this),this[t](e)}_canMergeSection(e){return!this._hasInsertedFirstLeafSection&&this._isMarkerable&&e.isMarkerable}get _isMarkerable(){return this.cursorSection.isMarkerable}get cursorSection(){return this.cursorPosition.section}get cursorOffset(){return this.cursorPosition.offset}get _isNested(){return this.cursorSection.isNested}post(e){let{cursorSection:t}=this
if(t.isBlank&&!t.isNested){let r=e.sections.map((e=>e.clone()))
this._replaceSection(t,r)}else e.sections.forEach((e=>this.visit(e)))}"markup-section"(e){this.markerable(e)}"list-section"(e){let t=!!e.next
e.items.forEach((e=>this.visit(e))),this._isNested&&t&&this._breakNestedAtCursor()}"list-item"(e){this.nested_markerable(e)}"card-section"(e){this.non_markerable(e)}"image-section"(e){this.non_markerable(e)}non_markerable(e){this._isNested?this._breakNestedAtCursor():this.cursorSection.isBlank||this._breakAtCursor(),this._insertLeafSection(e)}markerable(e){if(this._canMergeSection(e))this._mergeSection(e)
else if(this._isNested&&this._isMarkerable){this._breakAtCursor()
let t=this.cursorSection.next.headPosition()
this.cursorPosition=t,this._mergeSection(e)}else this._breakAtCursor(),this._insertLeafSection(e)}nested_markerable(e){if(this._canMergeSection(e))return void this._mergeSection(e)
let t=this._isNested?e:this._wrapNestedSection(e)
this._breakAtCursor(),this._insertLeafSection(t)}_breakNestedAtCursor(){A("Cannot call _breakNestedAtCursor if not nested",this._isNested)
let e=this.cursorSection.parent
if(this.cursorPosition.isEqual(e.tailPosition())){let t=this.builder.createMarkupSection()
this._insertSectionAfter(t,e)}else{let[,e]=this._breakListAtCursor()
this.cursorPosition=e.tailPosition()}}_breakListAtCursor(){A("Cannot _splitParentSection if cursor position is not nested",this._isNested)
const e=this.cursorSection.parent,t=this.cursorPosition,r=this.builder.createMarkupSection()
let[s,i]=this.postEditor._splitListAtPosition(e,t),n=this._post.sections,a=i
return this.postEditor.insertSectionBefore(n,r,a),[s,r,i]}_wrapNestedSection(e){let t=e.parent.tagName,r=this.builder.createListSection(t)
return r.items.append(e.clone()),r}_mergeSection(e){A("Can only merge markerable sections",this._isMarkerable&&e.isMarkerable),this._hasInsertedFirstLeafSection=!0
let t=e.markers.map((e=>e.clone())),r=this.postEditor.insertMarkers(this.cursorPosition,t)
this.cursorPosition=r}_breakAtCursor(){this.cursorSection.isBlank||(this._isMarkerable?this._breakMarkerableAtCursor():this._breakNonMarkerableAtCursor())}_breakNonMarkerableAtCursor(){const e=this._post.sections,t=this.builder.createMarkupSection(),r=this.cursorPosition.isHead()?this.cursorSection:this.cursorSection.next
this.postEditor.insertSectionBefore(e,t,r),this.cursorPosition=t.tailPosition()}_breakMarkerableAtCursor(){let[e]=this.postEditor.splitSection(this.cursorPosition)
this.cursorPosition=e.tailPosition()}_replaceSection(e,t){A("Cannot replace section that does not have parent.sections",ue(e.parent)),A("Must pass enumerable to _replaceSection",!!t.forEach)
let r=e.parent.sections,s=e.next
this.postEditor.removeSection(e),t.forEach((e=>{this.postEditor.insertSectionBefore(r,e,s)}))
let i=t[t.length-1]
this.cursorPosition=i.tailPosition()}_insertSectionBefore(e,t){A("Cannot insert into section that does not have parent.sections",ue(this.cursorSection.parent))
let r=this.cursorSection.parent.sections
this.postEditor.insertSectionBefore(r,e,t),this.cursorPosition=e.tailPosition()}_insertSectionAfter(e,t){A("Cannot _insertSectionAfter nested section",!t.isNested)
let r=t.next,s=this._post.sections
this.postEditor.insertSectionBefore(s,e,r),this.cursorPosition=e.tailPosition()}_insertLeafSection(e){if(A("Can only _insertLeafSection when cursor is at end of section",this.cursorPosition.isTail()),this._hasInsertedFirstLeafSection=!0,e=e.clone(),this.cursorSection.isBlank)A("Cannot insert leaf non-markerable section when cursor is nested",!(e.isMarkerable&&this._isNested)),this._replaceSection(this.cursorSection,[e])
else if(this.cursorSection.next&&this.cursorSection.next.isBlank)this._replaceSection(this.cursorSection.next,[e])
else{let t=this.cursorSection.next
this._insertSectionBefore(e,t)}}}class me{constructor(e,t){this.postEditor=e,this.post=t}insert(e,t){let r=new pe(this,e)
return t.isBlank||r.visit(t),r.cursorPosition}}function fe(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
t||console.log(`[mobiledoc-kit] [DEPRECATED]: ${e}`)}function ke(e){return A('Must pass non-blank object to "toRange"',!!e),e instanceof W?e:e instanceof ne?e.toRange():void A(`Incorrect structure for rangeLike: ${e}`,!1)}class ge{constructor(e){this.editor=e,this.renderTree=e._renderTree,this.post=e.post}clearSelection(){!function(){const e=window.getSelection()
e&&e.removeAllRanges()}()}hasCursor(){return this.editor.hasRendered&&(this._hasCollapsedSelection()||this._hasSelection())}hasSelection(){return this.editor.hasRendered&&this._hasSelection()}isAddressable(e){let{renderTree:t}=this,r=t.findRenderNodeFromElement(e)
if(r&&r.postNode.isCardSection){let t=r.element
if(e!==t&&e!==t.firstChild&&e!==t.lastChild)return!1}return!!r}get offsets(){if(!this.hasCursor())return W.blankRange()
let{renderTree:e}=this,t=T(this.editor.element),r=function(e,t){w("selection anchorNode should not be null",e.anchorNode),w("selection focusNode should not be null",e.focusNode)
let{node:r,offset:s}=U(e.anchorNode,t,e.anchorOffset),{node:i,offset:n}=U(e.focusNode,t,e.focusOffset)
return{anchorNode:r,anchorOffset:s,focusNode:i,focusOffset:n}}(this.selection,t)
const{headNode:s,headOffset:i,tailNode:n,tailOffset:a,direction:o}=K(r),l=ne.fromNode(e,s,i),h=ne.fromNode(e,n,a)
return new W(l,h,o)}_findNodeForPosition(e){let t,r,s=T(e.section)
if(w("expected section to have render node",s.renderNode),Q(s))r=0,t=0===e.offset?s.renderNode.element.firstChild:s.renderNode.element.lastChild
else if(s.isBlank||"image-section"===s.type)t=s.renderNode.cursorElement,r=0
else{let{marker:s,offsetInMarker:i}=e
w("expected position to have marker",s),w("expected marker to have render node",s.renderNode),s.isAtom?i>0?(r=0,t=s.renderNode.tailTextNode):(r=0,t=s.renderNode.headTextNode):(t=s.renderNode.element,r=i)}return{node:t,offset:r}}selectRange(e){if(e.isBlank)return void this.clearSelection()
const{head:t,tail:r,direction:s}=e,{node:i,offset:n}=this._findNodeForPosition(t),{node:a,offset:o}=this._findNodeForPosition(r)
this._moveToNode(i,n,a,o,s),this.editor._ensureFocus()}get selection(){return N(window.getSelection(),"expected window selection to not be null")}selectedText(){return this.selection.toString()}_moveToNode(e,t,r,s){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:x.FORWARD
this.clearSelection(),i===x.BACKWARD&&([e,t,r,s]=[r,s,e,t])
const n=document.createRange()
n.setStart(e,t),i===x.BACKWARD&&this.selection instanceof Selection?(this.selection.addRange(n),this.selection.extend(r,s)):(n.setEnd(r,s),this.selection.addRange(n))}_hasSelection(){const e=T(this.editor.element),{_selectionRange:t}=this
return!(!t||t.collapsed)&&g(e,T(this.selection.anchorNode))&&g(e,T(this.selection.focusNode))}_hasCollapsedSelection(){const{_selectionRange:e}=this
return!!e&&g(T(this.editor.element),T(this.selection.anchorNode))}get _selectionRange(){const{selection:e}=this
return 0===e.rangeCount?null:e.getRangeAt(0)}}class _e{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
this.items=[],e.forEach((e=>this.add(e)))}add(e){this.has(e)||this.items.push(e)}get length(){return this.items.length}has(e){return-1!==this.items.indexOf(e)}toArray(){return this.items}}class Ce{constructor(e){if(this.head=null,this.tail=null,this.length=0,e){const{adoptItem:t,freeItem:r}=e
this._adoptItem=t,this._freeItem=r}}adoptItem(e){e.__parent=this,this.length++,this._adoptItem&&this._adoptItem(e)}freeItem(e){e.__parent=null,this.length--,this._freeItem&&this._freeItem(e)}get isEmpty(){return 0===this.length}prepend(e){this.insertBefore(e,this.head)}append(e){this.insertBefore(e,null)}insertAfter(e,t){let r=t?t.next:this.head
this.insertBefore(e,r)}_ensureItemIsNotAlreadyInList(e){A("Cannot insert an item into a list if it is already in a list",!e.next&&!e.prev&&this.head!==e)}insertBefore(e,t){let r
switch(this._ensureItemIsNotInList(e),this.adoptItem(e),r=t&&t.prev?"middle":t?"start":"end",r){case"start":this.head&&(e.next=this.head,this.head.prev=e),this.head=e
break
case"middle":{let r=t.prev
e.next=t,e.prev=r,t.prev=e,r.next=e
break}case"end":{let t=this.tail
e.prev=t,t?t.next=e:this.head=e,this.tail=e
break}}}remove(e){if(!be(e))return
this._ensureItemIsInThisList(e),this.freeItem(e)
let[t,r]=[e.prev,e.next]
e.prev=null,e.next=null,t?t.next=r:this.head=r,r?r.prev=t:this.tail=t}forEach(e){let t=this.head,r=0
for(;t;)e(t,r++),t=t.next}map(e){let t=[]
return this.forEach((r=>t.push(e(r)))),t}walk(e,t,r){let s=e||this.head
for(;s&&(r(s),s!==t);)s=s.next}readRange(e,t){let r=[]
return this.walk(e,t,(e=>{r.push(e)})),r}toArray(){return this.readRange()}detect(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.head,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
for(;t;){if(e(t))return t
t=r?t.prev:t.next}}any(e){return!!this.detect(e)}every(e){let t=this.head
for(;t;){if(!e(t))return!1
t=t.next}return!0}objectAt(e){let t=-1
return this.detect((()=>(t++,e===t)))}splice(e,t,r){let s=e,i=s.next,n=0
for(;s&&n<t;)n++,i=s.next,this.remove(s),s=i
r.forEach((e=>{this.insertBefore(e,i)}))}removeBy(e){let t=this.head
for(;t;){let r=t.next
e(t)&&this.remove(t),t=r}}_ensureItemIsNotInList(e){A("Cannot insert an item into a list if it is already in a list",!e.__parent)}_ensureItemIsInThisList(e){A("Cannot remove item that is in another list",be(e)===this)}}function be(e){return e.__parent||null}function ve(e){return class extends e{constructor(){super(...arguments),this._tagName=null}set tagName(e){let t=b(e)
A(`Cannot set section tagName to ${e}`,this.isValidTagName(t)),this._tagName=t}get tagName(){return this._tagName}}}class Se extends(ve(V)){constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]
super(e),this.type=e,this.isMarkerable=!0,this.tagName=t,this.markers=new Ce({adoptItem:e=>{A(`Can only insert markers and atoms into markerable (was: ${e.type})`,e.isMarker||e.isAtom),e.section=e.parent=this},freeItem:e=>e.section=e.parent=null}),r.forEach((e=>this.markers.append(e)))}canJoin(e){return e.isMarkerable&&e.type===this.type&&e.tagName===this.tagName}clone(){const e=this.markers.map((e=>e.clone()))
return this.builder.createMarkerableSection(this.type,this.tagName,e)}get isBlank(){return!this.markers.length||this.markers.every((e=>e.isBlank))}textUntil(e){A("Cannot get textUntil for a position not in this section",e.section===this)
let{marker:t,offsetInMarker:r}=e,s="",i=this.markers.head
for(;i;){if(i===t){s+=i.textUntil(r)
break}s+=i.text,i=i.next}return s}offsetOfMarker(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
A("Cannot get offsetOfMarker for marker that is not child of this",e.section===this)
let r=0,s=this.markers.head
for(;s&&s!==e.next;)r+=s===e?t:s.length,s=s.next
return r}_redistributeMarkers(e,t,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=e
return n(this.markers,(a=>{if(a===r){const[a,...o]=r.split(s)
e.markers.append(a),n(o,(e=>t.markers.append(e))),i=t}else i.markers.append(a.clone())})),[e,t]}splitMarkerAtOffset(e){let t
A("Cannot splitMarkerAtOffset when offset is > length",e<=this.length)
let r=0,s=this.markers.head,i={added:[],removed:[]}
if(s)for(;s&&(r+=s.length,r!==e);){if(r>e){t=s.length-(r-e)
let n=s.splitAtOffset(t)
i.added.push(...n),i.removed.push(s),this.markers.splice(s,1,n)
break}s=s.next}else{let e=this.builder.createMarker()
this.markers.prepend(e),i.added.push(e)}return i}splitAtPosition(e){const{marker:t,offsetInMarker:r}=e
return this.splitAtMarker(t,r)}markerBeforeOffset(e){let t=0,r=this.markers.head
for(;r;){if(t+=r.length,t===e)return r
A("markerBeforeOffset called with sectionOffset not between markers",t<e),r=r.next}}markerPositionAtOffset(e){let t=0,r=null,s=e
return this.markers.detect((e=>(t=Math.min(s,e.length),s-=t,0===s&&(r=e,!0)))),{marker:r,offset:t}}get text(){return l(this.markers,((e,t)=>e+t.value),"")}get length(){return l(this.markers,((e,t)=>e+t.length),0)}markersFor(e,t){const r=W.create(this,e,this,t)
let s=[]
return this._markersInRange(r,((e,t)=>{let{markerHead:r,markerTail:i,isContained:n}=t
const a=e.clone()
n||(a.value=e.value.slice(r,i)),s.push(a)})),s}markupsInRange(e){const t=new _e
return this._markersInRange(e,(e=>{e.markups.forEach((e=>t.add(e)))})),t.toArray()}_markersInRange(e,t){const{head:r,tail:s}=e
A("Cannot call #_markersInRange if range expands beyond this section",r.section===this&&s.section===this)
const{offset:i}=r,{offset:n}=s
let a=0,o=0,l=this.markers.head
for(;l;){if(o+=l.length,o>i&&a<n){let e=Math.max(i-a,0),r=l.length-Math.max(o-n,0)
t(l,{markerHead:e,markerTail:r,isContained:0===e&&r===l.length})}if(a+=l.length,l=l.next,a>n)break}}join(e){let t=this.markers.tail,r=null
return e.markers.forEach((e=>{e.isBlank||(e=e.clone(),this.markers.append(e),r||(r=e))})),{beforeMarker:t,afterMarker:r}}}function Ee(e){return e.isMarkerable}const Ae="markup-section",ye="list-section",we="list-item"
function Me(e){const t=Object.keys(e)
let r=t.length
const s=new Array(r)
for(;r--;)s[r]=[t[r],e[t[r]]]
return s}const Ne=["data-md-text-align"]
function Te(e){return class extends e{constructor(){super(...arguments),this.attributes={}}hasAttribute(e){return e in this.attributes}setAttribute(e,t){if(!u(Ne,e))throw new Error(`Invalid attribute "${e}" was passed. Constrain attributes to the spec-compliant whitelist.`)
this.attributes[e]=t}removeAttribute(e){delete this.attributes[e]}getAttribute(e){return this.attributes[e]}eachAttribute(e){Me(this.attributes).forEach((t=>{let[r,s]=t
return e(r,s)}))}}}const Re=["ul","ol"].map(b),Ie=Re[0]
class Le extends(Te(ve(V))){constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
super(ye),this.isListSection=!0,this.isLeafSection=!1,this.tagName=e,Me(r).forEach((e=>{let[t,r]=e
return this.setAttribute(t,r)})),this.items=new Ce({adoptItem:e=>{A(`Cannot insert non-list-item to list (is: ${e.type})`,e.isListItem),e.section=e._parent=this},freeItem:e=>e.section=e._parent=null}),this.sections=this.items,t.forEach((e=>this.items.append(e)))}canJoin(){return!1}isValidTagName(e){return u(Re,e)}headPosition(){return this.items.head.headPosition()}tailPosition(){return this.items.tail.tailPosition()}get isBlank(){return this.items.isEmpty}clone(){let e=this.builder.createListSection(this.tagName)
return n(this.items,(t=>e.items.append(t.clone()))),e}join(e){if(xe(e))e.items.forEach((e=>this.join(e)))
else if(e.isMarkerable){let t=this.builder.createListItem()
t.join(e),this.items.append(t)}}}function xe(e){return e.isListSection}const De=["li"].map(b)
class Pe extends Se{constructor(e){super("list-item",e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]),this.isListItem=!0,this.isNested=!0,this.section=null}isValidTagName(e){return u(De,e)}splitAtMarker(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
const r=!this.next,s=!e&&0===t&&r
let[i,n]=[this.builder.createListItem(),s?this.builder.createMarkupSection():this.builder.createListItem()]
return this._redistributeMarkers(i,n,e,t)}get post(){return N(this.section,"expected list item to have section").post}}function Oe(e){return e.isListItem}const Be=["aside","blockquote","h1","h2","h3","h4","h5","h6","p"].map(b),He=["aside","blockquote","h1","h2","h3","h4","h5","h6","p"].map(b),Fe=Be[8]
class $e extends(Te(Se)){constructor(){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
super(Ae,arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]),this.isMarkupSection=!0,this.isGenerated=!1,this._inferredTagName=!1,Me(e).forEach((e=>{let[t,r]=e
return this.setAttribute(t,r)}))}isValidTagName(e){return u(Be,e)}splitAtMarker(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,[r,s]=[this.builder.createMarkupSection(this.tagName,[],!1,this.attributes),this.builder.createMarkupSection()]
return this._redistributeMarkers(r,s,e,t)}}function Ue(e){return e.isMarkupSection}function Ke(e){return Ue(e)&&e._inferredTagName}const{FORWARD:We,BACKWARD:je}=x,qe={BEFORE_COMPLETE:"beforeComplete",COMPLETE:"complete",AFTER_COMPLETE:"afterComplete"}
class Ge{constructor(e){this.editor=e,this.builder=this.editor.builder,this._callbacks=new ce(p(qe)),this._didComplete=!1,this.editActionTaken=null,this._renderRange=()=>this.editor.selectRange(this._range),this._postDidChange=()=>this.editor._postDidChange(),this._rerender=()=>this.editor.rerender()}addCallback(e,t){this._callbacks.addCallback(e,t)}addCallbackOnce(e,t){this._callbacks.addCallbackOnce(e,t)}runCallbacks(e){this._callbacks.runCallbacks(e)}begin(){this._range=this.editor.range}setRange(e){e=ke(e),this._range=e,this.scheduleAfterRender(this._renderRange,!0)}deleteRange(e){A("Must pass MobiledocKit Range to `deleteRange`",e instanceof W),this.editActionTaken=2
const{head:t,tail:r}=e
let s=t.section,i=r.section
const{editor:n}=this,{post:a}=n
if(s===i)return this.cutSection(s,t,r)
let o=s.nextLeafSection(),l=this.cutSection(s,t,s.tailPosition())
for(s=l.section;o!==i;){let e=o
o=o.nextLeafSection(),this.removeSection(e)}let h=this.cutSection(i,i.headPosition(),r)
return i=h.section,i.isBlank?this.removeSection(i):Ee(s)&&Ee(i)?(s.join(i),this._markDirty(s),this.removeSection(i)):s.isBlank&&(this.removeSection(s),l=h),a.isBlank&&(a.sections.append(this.builder.createMarkupSection("p")),l=a.headPosition()),l}cutSection(e,t,r){if(A("Must pass head position and tail position to `cutSection`",t instanceof ne&&r instanceof ne),A("Must pass positions within same section to `cutSection`",t.section===r.section),e.isBlank||t.isEqual(r))return t
if(e.isCardSection){if(t.isHead()&&r.isTail()){let t=this.builder.createMarkupSection()
return this.replaceSection(e,t),t.headPosition()}return r}let s=t.toRange(r)
return this.splitMarkers(s).forEach((e=>this.removeMarker(e))),t}_coalesceMarkers(e){Ee(e)&&(this._removeBlankMarkers(e),this._joinSimilarMarkers(e))}_removeBlankMarkers(e){n(a(e.markers,(e=>e.isBlank)),(e=>this.removeMarker(e)))}_joinSimilarMarkers(e){let t,r=e.markers.head
for(;r&&r.next;)t=r.next,r.canJoin(t)&&(t.value=r.value+t.value,this._markDirty(t),this.removeMarker(r)),r=t}removeMarker(e){this._scheduleForRemoval(e),e.section&&(this._markDirty(e.section),e.section.markers.remove(e))}_scheduleForRemoval(e){e.renderNode&&(e.renderNode.scheduleForRemoval(),this.scheduleRerender(),this.scheduleDidUpdate()),(e.prev&&xe(e.prev)||e.next&&xe(e.next))&&this.addCallback(qe.BEFORE_COMPLETE,(()=>this._joinContiguousListSections()))}_joinContiguousListSections(){let e,t,{post:r}=this.editor,s=this._range,i=[],a=null
n(r.sections,(r=>{e&&xe(e)&&xe(r)&&e.tagName===r.tagName?(t=t||[e],t.push(r)):(t&&i.push(t),t=null),e=r})),t&&i.push(t),n(i,(e=>{let t=e[0]
n(e,(e=>{if(e===t)return
let r,i=s.head
!s.isBlank&&Oe(i.section)&&i.section.parent===e&&(r=t.tailPosition()),this._joinListSections(t,e),r&&(a=r.move(We))}))})),a&&this.setRange(a)}_joinListSections(e,t){e.join(t),this._markDirty(e),this.removeSection(t)}_markDirty(e){e.renderNode&&(e.renderNode.markDirty(),this.scheduleRerender(),this.scheduleDidUpdate()),"section"in e&&e.section&&this._markDirty(e.section),Ee(e)&&this.addCallback(qe.BEFORE_COMPLETE,(()=>this._coalesceMarkers(e)))}deleteFrom(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x.BACKWARD
return fe("`postEditor#deleteFrom is deprecated. Use `deleteAtPosition(position, direction=BACKWARD, {unit}={unit: 'char'})` instead"),this.deleteAtPosition(e,t,{unit:Rs.CHAR})}deleteAtPosition(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x.BACKWARD,{unit:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{unit:Rs.CHAR}
return t===x.BACKWARD?this._deleteAtPositionBackward(e,r):this._deleteAtPositionForward(e,r)}_deleteAtPositionBackward(e,t){if(e.isHead()&&Oe(e.section))return this.toggleSection("p",e),this._range.head
{let r=("word"===t?e.moveWord(je):e.move(je)).toRange(e)
return this.deleteRange(r)}}_deleteAtPositionForward(e,t){let r="word"===t?e.moveWord(We):e.move(We),s=e.toRange(r)
return this.deleteRange(s)}splitMarkers(e){const{post:t}=this.editor,{head:r,tail:s}=e
return this.splitSectionMarkerAtOffset(r.section,r.offset),this.splitSectionMarkerAtOffset(s.section,s.offset),t.markersContainedByRange(e)}splitSectionMarkerAtOffset(e,t){e.splitMarkerAtOffset(t).removed.forEach((e=>this.removeMarker(e)))}splitSection(e){const t=e.section
if(Q(t))return this._splitCardSection(t,e)
if(Oe(t)){if(t.isBlank&&!t.next){let e=t.parent,r=this.editor.post.sections,s=this.builder.createMarkupSection()
return this.removeSection(t),this.insertSectionBefore(r,s,e.next),[null,s]}{let[r,s]=this._splitListItem(t,e)
return[r,s]}}{let r=t.splitAtPosition(e)
return r.forEach((e=>this._coalesceMarkers(e))),this._replaceSection(t,r),r}}_splitCardSection(e,t){let{offset:r}=t
A("Cards section must be split at offset 0 or 1",0===r||1===r)
let s,i,n=this.builder.createMarkupSection()
0===r?(s=e,i=[n,e]):(s=e.next,i=[e,n])
let a=this.editor.post.sections
return this.insertSectionBefore(a,n,s),i}replaceSection(e,t){e?this._replaceSection(e,[t]):this.insertSectionBefore(this.editor.post.sections,t,null)}moveSectionBefore(e,t,r){const s=t.clone()
return this.removeSection(t),this.insertSectionBefore(e,s,r),s}moveSectionUp(e){if(!e.prev)return e
const t=e.parent.sections,r=e.prev
return this.moveSectionBefore(t,e,r)}moveSectionDown(e){if(!e.next)return e
const t=e.next.next,r=e.parent.sections
return this.moveSectionBefore(r,e,t)}insertMarkers(e,t){const r=e.section
let s=e.offset
A("Cannot insert markers at non-markerable position",r.isMarkerable),this.editActionTaken=1,r.splitMarkerAtOffset(s).removed.forEach((e=>this._scheduleForRemoval(e)))
let i=r.markerBeforeOffset(s)
t.forEach((e=>{r.markers.insertAfter(e,i),s+=e.length,i=e})),this._coalesceMarkers(r),this._markDirty(r)
let n=r.toPosition(s)
return this.setRange(n),n}insertTextWithMarkup(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],{section:s}=e
if(!s.isMarkerable)return
let i=this.builder.createMarker(t,r)
return this.insertMarkers(e,[i])}insertText(e,t){let{section:r}=e
if(!r.isMarkerable)return
let s=e.marker&&e.marker.markups
return s=s||[],this.insertTextWithMarkup(e,t,s)}_replaceSection(e,t){let r=e.next,s=e.parent.sections
Ue(t[0])&&Oe(e)&&(s=e.parent.parent.sections,r=e.parent.next),t.forEach((e=>this.insertSectionBefore(s,e,r))),this.removeSection(e)}addMarkupToRange(e,t){if(e.isCollapsed)return
let r=this.splitMarkers(e)
if(r.length){let e=l(r,(function(e,t){return function(e,t){let r=0
for(;r<e.length&&r<t.length&&e[r]===t[r];)r++
return e.slice(0,r)}(e,t.markups)}),r[0].markups).length
r.forEach((r=>{r.addMarkupAtIndex(t,e),this._markDirty(r)}))}}removeMarkupFromRange(e,t){e.isCollapsed||this.splitMarkers(e).forEach((e=>{e.removeMarkup(t),this._markDirty(e)}))}toggleMarkup(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._range
t=ke(t)
const r="string"==typeof e?this.builder.createMarkup(e):e,s=this.editor.detectMarkupInRange(t,r.tagName)
s?this.removeMarkupFromRange(t,s):this.addMarkupToRange(t,r),this.setRange(t)}toggleSection(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._range
t=function(e){const{head:t,tail:r}=e
return 0===r.offset&&t.section!==r.section&&(e.tail=new ne(r.section.prev,r.section.prev.length)),e}(ke(t)),e=b(e)
let{post:r}=this.editor,s=!0
r.walkMarkerableSections(t,(t=>{this._isSameSectionType(t,e)||(s=!1)}))
let i=s?"p":e,n=[]
r.walkMarkerableSections(t,(e=>{let t=this.changeSectionTagName(e,i)
n.push({from:e,to:t})}))
let a=this._determineNextRangeAfterToggleSection(t,n)
this.setRange(a)}_determineNextRangeAfterToggleSection(e,t){if(t.length){let r=s(t,(t=>{let{from:r}=t
return r===e.headSection})).to,i=s(t,(t=>{let{from:r}=t
return r===e.tailSection})).to
return r.isListSection||i.isListSection?t[0].to.headPosition().toRange():W.create(r,e.headSectionOffset,i,e.tailSectionOffset,e.direction)}return e}setAttribute(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._range
this._mutateAttribute(e,r,((e,r)=>{if(e.getAttribute(r)!==t)return e.setAttribute(r,t),!0}))}removeAttribute(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._range
this._mutateAttribute(e,t,((e,t)=>{if(e.hasAttribute(t))return e.removeAttribute(t),!0}))}_mutateAttribute(e,t,r){t=ke(t)
let{post:s}=this.editor,i=`data-md-${e}`
s.walkMarkerableSections(t,(e=>{const t=Oe(e)?e.parent:e
!0===r(t,i)&&this._markDirty(e)})),this.setRange(t)}_isSameSectionType(e,t){return Oe(e)?e.parent.tagName===t:e.tagName===t}changeSectionTagName(e,t){return A("Cannot pass non-markerable section to `changeSectionTagName`",e.isMarkerable),"ul"===(r=t)||"ol"===r?this._changeSectionToListItem(e,t):Oe(e)?this._changeSectionFromListItem(e,t):(e.tagName=t,this._markDirty(e),e)
var r}_splitListItem(e,t){let{section:r,offset:s}=t
A("Cannot split list item at position that does not include item",e===r),e.splitMarkerAtOffset(s)
let i=e.markerBeforeOffset(s),n=this.builder.createListItem(),a=this.builder.createListItem(),o=n
return e.markers.forEach((e=>{o.markers.append(e.clone()),e===i&&(o=a)})),this._replaceSection(e,[n,a]),[n,a]}_splitListAtPosition(e,t){if(A("Cannot split list at position not in list",t.section.parent===e),!t.isHead()&&!t.isTail()){let e=t.section,[r]=this._splitListItem(e,t)
t=r.tailPosition()}let r=this.builder.createListSection(e.tagName),s=this.builder.createListSection(e.tagName),i=t.section,n=r
return e.items.forEach((e=>{e===i&&t.isEqual(e.headPosition())&&(n=s),n.items.append(e.clone()),e===i&&(n=s)})),this._replaceSection(e,[r,s]),[r,s]}_splitListAtItem(e,t){let r=e,s=this.builder.createListSection(r.tagName,[],r.attributes),i=this.builder.createListSection(r.tagName),n=!0
r.items.toArray().forEach((e=>{let r
if(e===t)n=!1,r=i
else{if(!n)return
r=s}r.join(e),this.removeSection(e)})),A("Cannot split list at item that is not present in the list",!n)
let a=this.editor.post.sections
return this.insertSectionBefore(a,i,r),this.insertSectionBefore(a,s,i),this.addCallback(qe.BEFORE_COMPLETE,(()=>{[s,r].forEach((e=>{let t=!!e._parent
e.isBlank&&t&&this.removeSection(e)}))})),[s,i,r]}_changeSectionFromListItem(e,t){M("Must pass list item to `_changeSectionFromListItem`",0,Oe(e))
let r=e.parent,s=this.builder.createMarkupSection(t)
s.join(e)
let[,i]=this._splitListAtItem(r,e)
return this.replaceSection(i,s),s}_changeSectionToListItem(e,t){if(e.isListItem&&e.parent.tagName===t)return e
let r,s=this.builder.createListSection(t)
if(s.join(e),Oe(e)){let[,t]=this._splitListAtItem(e.parent,e)
r=t}else r=e
return this.replaceSection(r,s),s}insertSectionBefore(e,t,r){e.insertBefore(t,r),this._markDirty(t.parent)}insertSection(e){const t=this.editor.activeSection,r=t&&t.next,s=this.editor.post.sections
this.insertSectionBefore(s,e,r)}insertSectionAtEnd(e){this.insertSectionBefore(this.editor.post.sections,e,null)}insertPost(e,t){let r=this.editor.post
return new me(this,r).insert(e,t)}removeSection(e){let t=e.parent
M("expected section to have child sections",0,ue(t)),this._scheduleForRemoval(e),t.sections.remove(e),xe(t)&&this._scheduleListRemovalIfEmpty(t)}removeAllSections(){this.editor.post.sections.toArray().forEach((e=>{this.removeSection(e)}))}migrateSectionsFromPost(e){e.sections.toArray().forEach((t=>{e.sections.remove(t),this.insertSectionBefore(this.editor.post.sections,t,null)}))}_scheduleListRemovalIfEmpty(e){this.addCallback(qe.BEFORE_COMPLETE,(()=>{e._parent&&e.isBlank&&this.removeSection(e)}))}schedule(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
A("Work can only be scheduled before a post edit has completed",!this._didComplete),t?this.addCallbackOnce(qe.COMPLETE,e):this.addCallback(qe.COMPLETE,e)}scheduleOnce(e){this.schedule(e,!0)}scheduleRerender(){this.scheduleOnce(this._rerender)}scheduleDidUpdate(){this.scheduleOnce(this._postDidChange)}scheduleAfterRender(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]?this.addCallbackOnce(qe.AFTER_COMPLETE,e):this.addCallback(qe.AFTER_COMPLETE,e)}complete(){A("Post editing can only be completed once",!this._didComplete),this.runCallbacks(qe.BEFORE_COMPLETE),this._didComplete=!0,this.runCallbacks(qe.COMPLETE),this.runCallbacks(qe.AFTER_COMPLETE)}undoLastChange(){this.editor._editHistory.stepBackward(this)}redoLastChange(){this.editor._editHistory.stepForward(this)}cancelSnapshot(){this._shouldCancelSnapshot=!0}}var Ve={name:"image",type:"dom",render(e){let{payload:t}=e,r=document.createElement("img")
return r.src=t.src||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsHm6+63u77Hy868wMPe4+bO09bh5unr8fTR1djAxMfM0NPX3N/c4eTBxcjXRf5TAAACh0lEQVR4nO3b6ZKqMBSFUSQMYZL3f9tbBq/NEEDiqUqOfusn1ZXKbjcQlGQZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACC6RkbsGHuabChEtHmiGYfS3EQYM+Sxw/gMQvmcNnYaj6oTDHi73WPn2eqnj9B8zo3TJXcq5uNjXmVff86VwSR3JtryMa1BYqi7S1hJDCVpSigyLcGhJJEwzlCSNtPKrbVhVwsdCfOhH7uuaG3ARV9DwsaOzxt3N1yPqCHhvXytTUz92VDpmE/LLhZwl++R6Sds6sUa/PL6K/2E2fIhw1xdRKefsFolrPc+xNx/N0k/4fpBsdhL2HfeiN+TsDCms8dDpeRyS3P3QDl6Iqaf8L0rTf+80m6Lmn7Ct+4Wxf+/2RY1/YRv3PHz/u+fsCmqgoTnq7Z+8SGviqoh4dnKu1ieqauiakh4/PQ0r6ivqDoSHj0B97eNRVG1JNxV+L4bnxdVecJtRTdFVZ7QU9F1UXUn9FZ0VVRlCav5ob2KLouqKmFjy676u2HsVnRRVFUJq3J+8KCi86IqSthMvyl209Hjijqm3RsqAZ5pNfa5PJ2KelJRjQmr1/r7cfy0ouoSNvOfvbvhvKLaEr4qOin9kTQnrN7LpDZhE/Zmhp6Eq4p+YcKgiipKGFhRRQkDK6ooYfgLbiSMioQkJGF8P5XwHv4O+7AaKiXzaeXh1kMl5AffTUxiKEm/krD94BR8Gdxl1fceSlR58ZhXKbEpyD2amNiBtmrJLTMHL1LF8/rpXkSZXEmz8K8uvAFFNm6Iq0aBLUFOmeCuJ6exrcCmoLpN7kYx891bSAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgh/wDdr8peyRHLogAAAAASUVORK5CYII=",r}}
class ze{constructor(e){this.builder=e}parse(e){let{sections:t}=e
try{const e=t[0],r=t[1],s=this.builder.createPost()
return this.markups=[],this.markerTypes=this.parseMarkerTypes(e),this.parseSections(r,s),s}catch(e){A(`Unable to parse mobiledoc: ${e.message}`,!1)}}parseMarkerTypes(e){return e.map((e=>this.parseMarkerType(e)))}parseMarkerType(e){let[t,r]=e
const s=h(r||[])
return this.builder.createMarkup(t,s)}parseSections(e,t){e.forEach((e=>this.parseSection(e,t)))}parseSection(e,t){switch(e[0]){case 1:this.parseMarkupSection(e,t)
break
case 2:this.parseImageSection(e,t)
break
case 10:this.parseCardSection(e,t)
break
case 3:this.parseListSection(e,t)
break
default:A(`Unexpected section type ${e[0]}`,!1)}}parseCardSection(e,t){let[,r,s]=e
const i=this.builder.createCardSection(r,s)
t.sections.append(i)}parseImageSection(e,t){let[,r]=e
const s=this.builder.createImageSection(r)
t.sections.append(s)}parseMarkupSection(e,t){let[,r,s]=e
const i=this.builder.createMarkupSection("pull-quote"===r.toLowerCase()?"aside":r)
t.sections.append(i),this.parseMarkers(s,i),a(i.markers,(e=>e.isBlank)).forEach((e=>{i.markers.remove(e)}))}parseListSection(e,t){let[,r,s]=e
const i=this.builder.createListSection(r)
t.sections.append(i),this.parseListItems(s,i)}parseListItems(e,t){e.forEach((e=>this.parseListItem(e,t)))}parseListItem(e,t){const r=this.builder.createListItem()
this.parseMarkers(e,r),t.items.append(r)}parseMarkers(e,t){e.forEach((e=>this.parseMarker(e,t)))}parseMarker(e,t){let[r,s,i]=e
r.forEach((e=>{this.markups.push(this.markerTypes[e])}))
const n=this.builder.createMarker(i,this.markups.slice())
t.markers.append(n),this.markups=this.markups.slice(0,this.markups.length-s)}}class Je{constructor(e){this.builder=e}parse(e){let{sections:t,markups:r,cards:s,atoms:i}=e
try{const e=this.builder.createPost()
return this.markups=[],this.markerTypes=this.parseMarkerTypes(r),this.cardTypes=this.parseCardTypes(s),this.atomTypes=this.parseAtomTypes(i),this.parseSections(t,e),e}catch(e){A(`Unable to parse mobiledoc: ${e.message}`,!1)}}parseMarkerTypes(e){return e.map((e=>this.parseMarkerType(e)))}parseMarkerType(e){let[t,r]=e
const s=h(r||[])
return this.builder.createMarkup(t,s)}parseCardTypes(e){return e.map((e=>this.parseCardType(e)))}parseCardType(e){let[t,r]=e
return[t,r]}parseAtomTypes(e){return e.map((e=>this.parseAtomType(e)))}parseAtomType(e){let[t,r,s]=e
return[t,r,s]}parseSections(e,t){e.forEach((e=>this.parseSection(e,t)))}parseSection(e,t){switch(e[0]){case 1:this.parseMarkupSection(e,t)
break
case 2:this.parseImageSection(e,t)
break
case 10:this.parseCardSection(e,t)
break
case 3:this.parseListSection(e,t)
break
default:A(`Unexpected section type ${e[0]}`,!1)}}getAtomTypeFromIndex(e){const t=this.atomTypes[e]
return A(`No atom definition found at index ${e}`,!!t),t}getCardTypeFromIndex(e){const t=this.cardTypes[e]
return A(`No card definition found at index ${e}`,!!t),t}parseCardSection(e,t){let[,r]=e
const[s,i]=this.getCardTypeFromIndex(r),n=this.builder.createCardSection(s,i)
t.sections.append(n)}parseImageSection(e,t){let[,r]=e
const s=this.builder.createImageSection(r)
t.sections.append(s)}parseMarkupSection(e,t){let[,r,s]=e
const i=this.builder.createMarkupSection("pull-quote"===r.toLowerCase()?"aside":r)
t.sections.append(i),this.parseMarkers(s,i),a(i.markers,(e=>e.isBlank)).forEach((e=>{i.markers.remove(e)}))}parseListSection(e,t){let[,r,s]=e
const i=this.builder.createListSection(r)
t.sections.append(i),this.parseListItems(s,i)}parseListItems(e,t){e.forEach((e=>this.parseListItem(e,t)))}parseListItem(e,t){const r=this.builder.createListItem()
this.parseMarkers(e,r),t.items.append(r)}parseMarkers(e,t){e.forEach((e=>this.parseMarker(e,t)))}parseMarker(e,t){let[r,s,i,n]=e
s.forEach((e=>{this.markups.push(this.markerTypes[e])}))
const a=this.buildMarkerType(r,n)
t.markers.append(a),this.markups=this.markups.slice(0,this.markups.length-i)}buildMarkerType(e,t){switch(e){case 0:return this.builder.createMarker(t,this.markups.slice())
case 1:{const[e,r,s]=this.getAtomTypeFromIndex(t)
return this.builder.createAtom(e,r,s,this.markups.slice())}default:A(`Unexpected marker type ${e}`,!1)}}}class Qe{constructor(e){this.builder=e}parse(e){let{sections:t,markups:r,cards:s,atoms:i}=e
try{const e=this.builder.createPost()
return this.markups=[],this.markerTypes=this.parseMarkerTypes(r),this.cardTypes=this.parseCardTypes(s),this.atomTypes=this.parseAtomTypes(i),this.parseSections(t,e),e}catch(e){A(`Unable to parse mobiledoc: ${e.message}`,!1)}}parseMarkerTypes(e){return e.map((e=>this.parseMarkerType(e)))}parseMarkerType(e){let[t,r]=e
const s=h(r||[])
return this.builder.createMarkup(t,s)}parseCardTypes(e){return e.map((e=>this.parseCardType(e)))}parseCardType(e){let[t,r]=e
return[t,r]}parseAtomTypes(e){return e.map((e=>this.parseAtomType(e)))}parseAtomType(e){let[t,r,s]=e
return[t,r,s]}parseSections(e,t){e.forEach((e=>this.parseSection(e,t)))}parseSection(e,t){switch(e[0]){case 1:this.parseMarkupSection(e,t)
break
case 2:this.parseImageSection(e,t)
break
case 10:this.parseCardSection(e,t)
break
case 3:this.parseListSection(e,t)
break
default:A(`Unexpected section type ${e[0]}`,!1)}}getAtomTypeFromIndex(e){const t=this.atomTypes[e]
return A(`No atom definition found at index ${e}`,!!t),t}getCardTypeFromIndex(e){const t=this.cardTypes[e]
return A(`No card definition found at index ${e}`,!!t),t}parseCardSection(e,t){let[,r]=e
const[s,i]=this.getCardTypeFromIndex(r),n=this.builder.createCardSection(s,i)
t.sections.append(n)}parseImageSection(e,t){let[,r]=e
const s=this.builder.createImageSection(r)
t.sections.append(s)}parseMarkupSection(e,t){let[,r,s]=e
const i=this.builder.createMarkupSection(r)
t.sections.append(i),this.parseMarkers(s,i),a(i.markers,(e=>e.isBlank)).forEach((e=>{i.markers.remove(e)}))}parseListSection(e,t){let[,r,s]=e
const i=this.builder.createListSection(r)
t.sections.append(i),this.parseListItems(s,i)}parseListItems(e,t){e.forEach((e=>this.parseListItem(e,t)))}parseListItem(e,t){const r=this.builder.createListItem()
this.parseMarkers(e,r),t.items.append(r)}parseMarkers(e,t){e.forEach((e=>this.parseMarker(e,t)))}parseMarker(e,t){let[r,s,i,n]=e
s.forEach((e=>{this.markups.push(this.markerTypes[e])}))
const a=this.buildMarkerType(r,n)
t.markers.append(a),this.markups=this.markups.slice(0,this.markups.length-i)}buildMarkerType(e,t){switch(e){case 0:return this.builder.createMarker(t,this.markups.slice())
case 1:{const[e,r,s]=this.getAtomTypeFromIndex(t)
return this.builder.createAtom(e,r,s,this.markups.slice())}default:A(`Unexpected marker type ${e}`,!1)}}}class Ye{constructor(e){this.builder=e}parse(e){let{sections:t,markups:r,cards:s,atoms:i}=e
try{const e=this.builder.createPost()
return this.markups=[],this.markerTypes=this.parseMarkerTypes(r),this.cardTypes=this.parseCardTypes(s),this.atomTypes=this.parseAtomTypes(i),this.parseSections(t,e),e}catch(e){A(`Unable to parse mobiledoc: ${e.message}`,!1)}}parseMarkerTypes(e){return e.map((e=>this.parseMarkerType(e)))}parseMarkerType(e){let[t,r]=e
const s=h(r||[])
return this.builder.createMarkup(t,s)}parseCardTypes(e){return e.map((e=>this.parseCardType(e)))}parseCardType(e){let[t,r]=e
return[t,r]}parseAtomTypes(e){return e.map((e=>this.parseAtomType(e)))}parseAtomType(e){let[t,r,s]=e
return[t,r,s]}parseSections(e,t){e.forEach((e=>this.parseSection(e,t)))}parseSection(e,t){switch(e[0]){case 1:this.parseMarkupSection(e,t)
break
case 2:this.parseImageSection(e,t)
break
case 10:this.parseCardSection(e,t)
break
case 3:this.parseListSection(e,t)
break
default:A(`Unexpected section type ${e[0]}`,!1)}}getAtomTypeFromIndex(e){const t=this.atomTypes[e]
return A(`No atom definition found at index ${e}`,!!t),t}getCardTypeFromIndex(e){const t=this.cardTypes[e]
return A(`No card definition found at index ${e}`,!!t),t}parseCardSection(e,t){let[,r]=e
const[s,i]=this.getCardTypeFromIndex(r),n=this.builder.createCardSection(s,i)
t.sections.append(n)}parseImageSection(e,t){let[,r]=e
const s=this.builder.createImageSection(r)
t.sections.append(s)}parseMarkupSection(e,t){let[,r,s,i]=e
const n=this.builder.createMarkupSection(r)
t.sections.append(n),i&&Me(h(i)).forEach((e=>{let[t,r]=e
n.setAttribute(t,r)})),this.parseMarkers(s,n),a(n.markers,(e=>e.isBlank)).forEach((e=>{n.markers.remove(e)}))}parseListSection(e,t){let[,r,s,i]=e
const n=this.builder.createListSection(r)
t.sections.append(n),i&&Me(h(i)).forEach((e=>{let[t,r]=e
n.setAttribute(t,r)})),this.parseListItems(s,n)}parseListItems(e,t){e.forEach((e=>this.parseListItem(e,t)))}parseListItem(e,t){const r=this.builder.createListItem()
this.parseMarkers(e,r),t.items.append(r)}parseMarkers(e,t){e.forEach((e=>this.parseMarker(e,t)))}parseMarker(e,t){let[r,s,i,n]=e
s.forEach((e=>{this.markups.push(this.markerTypes[e])}))
const a=this.buildMarkerType(r,n)
t.markers.append(a),this.markups=this.markups.slice(0,this.markups.length-i)}buildMarkerType(e,t){switch(e){case 0:return this.builder.createMarker(t,this.markups.slice())
case 1:{const[e,r,s]=this.getAtomTypeFromIndex(t)
return this.builder.createAtom(e,r,s,this.markups.slice())}default:A(`Unexpected marker type ${e}`,!1)}}}function Ze(e,t,r){const s=t.type
y(`Cannot visit unknown type ${s}`,s,e),e[s](t,r)}function Xe(e,t){for(let r=0,s=t.length;r<s;r++){let[s,...i]=t[r]
e[s].apply(e,i)}}function et(e,t,r){t&&0!==t.length&&n(t,(t=>{Ze(e,t,r)}))}const tt="0.2.0",rt={post(e,t){t.push(["openPost"]),et(rt,e.sections,t)},"markup-section"(e,t){t.push(["openMarkupSection",e.tagName]),et(rt,e.markers,t)},"list-section"(e,t){t.push(["openListSection",e.tagName]),et(rt,e.items,t)},"list-item"(e,t){t.push(["openListItem"]),et(rt,e.markers,t)},"image-section"(e,t){t.push(["openImageSection",e.src])},"card-section"(e,t){t.push(["openCardSection",e.name,e.payload])},marker(e,t){t.push(["openMarker",e.closedMarkups.length,e.value]),et(rt,e.openedMarkups,t)},markup(e,t){t.push(["openMarkup",e.tagName,d(e.attributes)])}}
class st{openMarker(e,t){this.markupMarkerIds=[],this.markers.push([this.markupMarkerIds,e,t||""])}openMarkupSection(e){this.markers=[],this.sections.push([1,e,this.markers])}openListSection(e){this.items=[],this.sections.push([3,e,this.items])}openListItem(){this.markers=[],this.items.push(this.markers)}openImageSection(e){this.sections.push([2,e])}openCardSection(e,t){this.sections.push([10,e,t])}openPost(){this.markerTypes=[],this.sections=[],this.result={version:tt,sections:[this.markerTypes,this.sections]}}openMarkup(e,t){const r=this._findOrAddMarkerTypeIndex(e,t)
this.markupMarkerIds.push(r)}_findOrAddMarkerTypeIndex(e,t){this._markerTypeCache||(this._markerTypeCache={})
const r=`${e}-${t.join("-")}`
let s=this._markerTypeCache[r]
if(void 0===s){let i=[e]
t.length&&i.push(t),this.markerTypes.push(i),s=this.markerTypes.length-1,this._markerTypeCache[r]=s}return s}}var it={render(e){let t=[]
Ze(rt,e,t)
let r=new st
return Xe(r,t),r.result}}
const nt="0.3.0",at={post(e,t){t.push(["openPost"]),et(at,e.sections,t)},"markup-section"(e,t){t.push(["openMarkupSection",e.tagName]),et(at,e.markers,t)},"list-section"(e,t){t.push(["openListSection",e.tagName]),et(at,e.items,t)},"list-item"(e,t){t.push(["openListItem"]),et(at,e.markers,t)},"image-section"(e,t){t.push(["openImageSection",e.src])},"card-section"(e,t){t.push(["openCardSection",e.name,e.payload])},marker(e,t){t.push(["openMarker",e.closedMarkups.length,e.value]),et(at,e.openedMarkups,t)},markup(e,t){t.push(["openMarkup",e.tagName,d(e.attributes)])},atom(e,t){t.push(["openAtom",e.closedMarkups.length,e.name,e.value,e.payload]),et(at,e.openedMarkups,t)}}
class ot{openMarker(e,t){this.markupMarkerIds=[],this.markers.push([0,this.markupMarkerIds,e,t||""])}openAtom(e,t,r,s){const i=this._addAtomTypeIndex(t,r,s)
this.markupMarkerIds=[],this.markers.push([1,this.markupMarkerIds,e,i])}openMarkupSection(e){this.markers=[],this.sections.push([1,e,this.markers])}openListSection(e){this.items=[],this.sections.push([3,e,this.items])}openListItem(){this.markers=[],this.items.push(this.markers)}openImageSection(e){this.sections.push([2,e])}openCardSection(e,t){const r=this._addCardTypeIndex(e,t)
this.sections.push([10,r])}openPost(){this.atomTypes=[],this.cardTypes=[],this.markerTypes=[],this.sections=[],this.result={version:nt,atoms:this.atomTypes,cards:this.cardTypes,markups:this.markerTypes,sections:this.sections}}openMarkup(e,t){const r=this._findOrAddMarkerTypeIndex(e,t)
this.markupMarkerIds.push(r)}_addCardTypeIndex(e,t){let r=[e,t]
return this.cardTypes.push(r),this.cardTypes.length-1}_addAtomTypeIndex(e,t,r){let s=[e,t,r]
return this.atomTypes.push(s),this.atomTypes.length-1}_findOrAddMarkerTypeIndex(e,t){this._markerTypeCache||(this._markerTypeCache={})
const r=`${e}-${t.join("-")}`
let s=this._markerTypeCache[r]
if(void 0===s){let i=[e]
t.length&&i.push(t),this.markerTypes.push(i),s=this.markerTypes.length-1,this._markerTypeCache[r]=s}return s}}var lt={render(e){let t=[]
Ze(at,e,t)
let r=new ot
return Xe(r,t),r.result}}
const ht="0.3.1",dt={post(e,t){t.push(["openPost"]),et(dt,e.sections,t)},"markup-section"(e,t){t.push(["openMarkupSection",e.tagName]),et(dt,e.markers,t)},"list-section"(e,t){t.push(["openListSection",e.tagName]),et(dt,e.items,t)},"list-item"(e,t){t.push(["openListItem"]),et(dt,e.markers,t)},"image-section"(e,t){t.push(["openImageSection",e.src])},"card-section"(e,t){t.push(["openCardSection",e.name,e.payload])},marker(e,t){t.push(["openMarker",e.closedMarkups.length,e.value]),et(dt,e.openedMarkups,t)},markup(e,t){t.push(["openMarkup",e.tagName,d(e.attributes)])},atom(e,t){t.push(["openAtom",e.closedMarkups.length,e.name,e.value,e.payload]),et(dt,e.openedMarkups,t)}}
class ct{openMarker(e,t){this.markupMarkerIds=[],this.markers.push([0,this.markupMarkerIds,e,t||""])}openAtom(e,t,r,s){const i=this._addAtomTypeIndex(t,r,s)
this.markupMarkerIds=[],this.markers.push([1,this.markupMarkerIds,e,i])}openMarkupSection(e){this.markers=[],this.sections.push([1,e,this.markers])}openListSection(e){this.items=[],this.sections.push([3,e,this.items])}openListItem(){this.markers=[],this.items.push(this.markers)}openImageSection(e){this.sections.push([2,e])}openCardSection(e,t){const r=this._addCardTypeIndex(e,t)
this.sections.push([10,r])}openPost(){this.atomTypes=[],this.cardTypes=[],this.markerTypes=[],this.sections=[],this.result={version:ht,atoms:this.atomTypes,cards:this.cardTypes,markups:this.markerTypes,sections:this.sections}}openMarkup(e,t){const r=this._findOrAddMarkerTypeIndex(e,t)
this.markupMarkerIds.push(r)}_addCardTypeIndex(e,t){let r=[e,t]
return this.cardTypes.push(r),this.cardTypes.length-1}_addAtomTypeIndex(e,t,r){let s=[e,t,r]
return this.atomTypes.push(s),this.atomTypes.length-1}_findOrAddMarkerTypeIndex(e,t){this._markerTypeCache||(this._markerTypeCache={})
const r=`${e}-${t.join("-")}`
let s=this._markerTypeCache[r]
if(void 0===s){let i=[e]
t.length&&i.push(t),this.markerTypes.push(i),s=this.markerTypes.length-1,this._markerTypeCache[r]=s}return s}}var ut={render(e){let t=[]
Ze(dt,e,t)
let r=new ct
return Xe(r,t),r.result}}
const pt="0.3.2",mt={post(e,t){t.push(["openPost"]),et(mt,e.sections,t)},"markup-section"(e,t){t.push(["openMarkupSection",e.tagName,d(e.attributes)]),et(mt,e.markers,t)},"list-section"(e,t){t.push(["openListSection",e.tagName,d(e.attributes)]),et(mt,e.items,t)},"list-item"(e,t){t.push(["openListItem"]),et(mt,e.markers,t)},"image-section"(e,t){t.push(["openImageSection",e.src])},"card-section"(e,t){t.push(["openCardSection",e.name,e.payload])},marker(e,t){t.push(["openMarker",e.closedMarkups.length,e.value]),et(mt,e.openedMarkups,t)},markup(e,t){t.push(["openMarkup",e.tagName,d(e.attributes)])},atom(e,t){t.push(["openAtom",e.closedMarkups.length,e.name,e.value,e.payload]),et(mt,e.openedMarkups,t)}}
class ft{openMarker(e,t){this.markupMarkerIds=[],this.markers.push([0,this.markupMarkerIds,e,t||""])}openAtom(e,t,r,s){const i=this._addAtomTypeIndex(t,r,s)
this.markupMarkerIds=[],this.markers.push([1,this.markupMarkerIds,e,i])}openMarkupSection(e,t){this.markers=[],t&&0!==t.length?this.sections.push([1,e,this.markers,t]):this.sections.push([1,e,this.markers])}openListSection(e,t){this.items=[],t&&0!==t.length?this.sections.push([3,e,this.items,t]):this.sections.push([3,e,this.items])}openListItem(){this.markers=[],this.items.push(this.markers)}openImageSection(e){this.sections.push([2,e])}openCardSection(e,t){const r=this._addCardTypeIndex(e,t)
this.sections.push([10,r])}openPost(){this.atomTypes=[],this.cardTypes=[],this.markerTypes=[],this.sections=[],this.result={version:pt,atoms:this.atomTypes,cards:this.cardTypes,markups:this.markerTypes,sections:this.sections}}openMarkup(e,t){const r=this._findOrAddMarkerTypeIndex(e,t)
this.markupMarkerIds.push(r)}_addCardTypeIndex(e,t){let r=[e,t]
return this.cardTypes.push(r),this.cardTypes.length-1}_addAtomTypeIndex(e,t,r){let s=[e,t,r]
return this.atomTypes.push(s),this.atomTypes.length-1}_findOrAddMarkerTypeIndex(e,t){this._markerTypeCache||(this._markerTypeCache={})
const r=`${e}-${t.join("-")}`
let s=this._markerTypeCache[r]
if(void 0===s){let i=[e]
t.length&&i.push(t),this.markerTypes.push(i),s=this.markerTypes.length-1,this._markerTypeCache[r]=s}return s}}var kt={render(e){let t=[]
Ze(mt,e,t)
let r=new ft
return Xe(r,t),r.result}},gt={parse(e,t){switch(t.version){case tt:return new ze(e).parse(t)
case nt:return new Je(e).parse(t)
case ht:return new Qe(e).parse(t)
case pt:return new Ye(e).parse(t)
default:A(`Unknown version of mobiledoc parser requested: ${t.version}`,!1)}}}
class _t{constructor(e,t,r,s,i){this._rendered=null,this._teardownCallback=null,this._didRenderCallback=null,this.editor=e,this.card=t,this.section=r,this.element=s,this.options=i}render(e){if(this.mode===e)return
this.teardown(),this.mode=e
let t="display"===e?"render":"edit",r=this.card[t]
A(`Card is missing "${t}" (tried to render mode: "${e}")`,!!r)
let s=r({env:this.env,options:this.options,payload:this.section.payload})||null
this._validateAndAppendRenderResult(s)}teardown(){this._teardownCallback&&(this._teardownCallback(),this._teardownCallback=null),this._rendered&&(this.element.removeChild(this._rendered),this._rendered=null)}didRender(){this._didRenderCallback&&this._didRenderCallback()}get env(){var e=this
return{name:this.card.name,isInEditor:!0,onTeardown:e=>this._teardownCallback=e,didRender:e=>this._didRenderCallback=e,edit:()=>this.edit(),save:function(t){let r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
e.section.payload=t,e.editor._postDidChange(),r&&e.display()},cancel:()=>this.display(),remove:()=>this.remove(),postModel:this.section}}display(){this.render(J.DISPLAY)}edit(){this.render(J.EDIT)}remove(){this.editor.run((e=>e.removeSection(this.section)))}_validateAndAppendRenderResult(e){if(!e)return
let{card:{name:t}}=this
A(`Card "${t}" must render dom (render value was: "${e}")`,!!e.nodeType),this.element.appendChild(e),this._rendered=e,this.didRender()}}class Ct{constructor(e,t,r,s,i){this._teardownCallback=null,this.editor=e,this.atom=t,this.model=r,this.atomOptions=i,this.element=s}render(){if(!this._rendered){let{atomOptions:e,env:t,model:{value:r,payload:s}}=this
this._rendered=this.atom.render({options:e,env:t,value:r,payload:s})||null}this._validateAndAppendRenderResult(this._rendered)}get env(){var e=this
return{name:this.atom.name,onTeardown:e=>this._teardownCallback=e,save:function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
e.model.value=t,e.model.payload=r,e.editor._postDidChange(),e.teardown(),e.render()}}}teardown(){this._teardownCallback&&(this._teardownCallback(),this._teardownCallback=null),this._rendered&&(this.element.removeChild(this._rendered),this._rendered=null)}_validateAndAppendRenderResult(e){if(!e)return
let{atom:{name:t}}=this
A(`Atom "${t}" must return a DOM node (returned value was: "${e}")`,!!e.nodeType),this.element.appendChild(e)}}const bt="‌",vt="-mobiledoc-kit__atom"
function St(e,t){let r=e.createElement(t.tagName)
return Object.keys(t.attributes).forEach((e=>{r.setAttribute(e,t.attributes[e])})),r}const Et=new RegExp("  ","g"),At=new RegExp("\t","g"),yt=function(e){return v(e," ")}
function wt(e,t){for(;t&&e.parentNode!==t&&e.parentNode!==document.body;)e=e.parentNode
return e}function Mt(e,t){e.eachAttribute(((e,r)=>{t.setAttribute(e,r)}))}function Nt(){return document.createElement("br")}function Tt(){return document.createTextNode(bt)}function Rt(e,t){let r=e
for(let s=t.length-1;s>=0;s--){let e=t[s],i=St(document,e)
i.appendChild(r),r=i}return r}function It(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if(r){let s=wt(r.element,t)
t.insertBefore(e,s.nextSibling)}else t.insertBefore(e,t.firstChild)}function Lt(e){let t=e.element.parentNode,r=e.postNode.closedMarkups.length
for(;r--;)t=t.parentNode
return t}function xt(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
const r=T(e.element)
if(w("expected RenderNode to have a parent",e.parent),t)e.parent.element.replaceChild(r,t)
else{let t,s
if(e.prev){let r=T(e.prev.element)
t=T(r.parentNode),s=r.nextSibling}else t=e.parent.element,s=t.firstChild
t.insertBefore(r,s)}}function Dt(e,t){w("expected RenderNode to have a parent",e.parent),w("expected parent RenderNode to have a PostNode",e.parent.postNode)
const r=e.parent.postNode
A("expected PostNode to have sections",ue(r)),r.sections.remove(t)}function Pt(e){e.element&&e.element.parentNode&&e.element.parentNode.removeChild(e.element)}class Ot{constructor(e,t,r,s,i,a){this.editor=e,this.cards=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
return n(e,(e=>{A(`Card "${e.name}" must define type "dom", has: "${e.type}"`,"dom"===e.type),A(`Card "${e.name}" must define \`render\` method`,!!e.render)})),e}(t),this.atoms=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
return n(e,(e=>{A(`Atom "${e.name}" must define type "dom", has: "${e.type}"`,"dom"===e.type),A(`Atom "${e.name}" must define \`render\` method`,!!e.render)})),e}(r),this.unknownCardHandler=s,this.unknownAtomHandler=i,this.options=a}_findCard(e){return s(this.cards,(t=>t.name===e))||this._createUnknownCard(e)}_createUnknownCard(e){return A(`Unknown card "${e}" found, but no unknownCardHandler is defined`,!!this.unknownCardHandler),{name:e,type:"dom",render:this.unknownCardHandler,edit:this.unknownCardHandler}}_findAtom(e){return s(this.atoms,(t=>t.name===e))||this._createUnknownAtom(e)}_createUnknownAtom(e){return A(`Unknown atom "${e}" found, but no unknownAtomHandler is defined`,!!this.unknownAtomHandler),{name:e,type:"dom",render:this.unknownAtomHandler}}post(e,t,r){e.element||(e.element=document.createElement("div"))
let s=e.element
C(s,"__mobiledoc-editor"),t.hasContent?function(e,t){e.classList.remove("__has-no-content")}(s):C(s,"__has-no-content"),r(e,t.sections)}"markup-section"(e,t,r){const s=e.element
if(e.element=function(e){let t
return-1!==He.indexOf(e.tagName)?t=document.createElement(e.tagName):(t=document.createElement("div"),C(t,e.tagName)),Mt(e,t),t}(t),e.cursorElement=null,xt(e,s),t.isBlank){let t=Nt()
e.element.appendChild(t),e.cursorElement=t}else{const s=!0
r(e,t.markers,s)}}"list-section"(e,t,r){const s=e.element
e.element=function(e){let t=document.createElement(e.tagName)
return Mt(e,t),t}(t),xt(e,s),r(e,t.items,!0)}"list-item"(e,t,r){if(e.element=document.createElement("li"),e.cursorElement=null,xt(e,null),t.isBlank){let t=Nt()
e.element.appendChild(t),e.cursorElement=t}else{const s=!0
r(e,t.markers,s)}}marker(e,t){let r
r=e.prev?Lt(e.prev):e.parent.element
let{element:s,markupElement:i}=function(e,t,r){let s=function(e){let t=e.value
return t=t.replace(Et,"  ").replace(At," "),e.isMarker&&yt(t)&&!e.next&&(t=t.substr(0,t.length-1)+" "),e.isMarker&&function(e){return" "===e.charAt(0)}(t)&&(!e.prev||e.prev.isMarker&&yt(e.prev.value))&&(t=" "+t.substr(1)),t}(e),i=document.createTextNode(s),n=Rt(i,e.openedMarkups)
return It(n,t,r),{element:i,markupElement:n}}(t,r,e.prev)
e.element=s,e.markupElement=i}"image-section"(e,t){if(e.element)e.element.src!==t.src&&(e.element.src=t.src||"")
else{let r=document.createElement("img")
if(r.src=t.src||"",e.prev){let t=e.prev.element.nextSibling
t&&t.parentNode.insertBefore(r,t)}r.parentNode||e.parent.element.appendChild(r),e.element=r}}"card-section"(e,t){const r=e.element,{editor:s,options:i}=this,n=this._findCard(t.name)
let{wrapper:a,cardElement:o}=function(){let e=document.createElement("div"),t=document.createElement("div")
return t.contentEditable="false",C(t,"__mobiledoc-card"),e.appendChild(Tt()),e.appendChild(t),e.appendChild(Tt()),{wrapper:e,cardElement:t}}()
e.element=a,xt(e,r)
const l=new _t(s,n,t,o,i)
e.cardNode=l,l[t._initialMode]()}atom(e,t){let r
r=e.prev?Lt(e.prev):e.parent.element
const{editor:s,options:i}=this,{wrapper:n,markupElement:a,atomElement:o,headTextNode:l,tailTextNode:h}=function(e,t,r){let s=document.createElement("span")
s.contentEditable="false"
let i=document.createElement("span")
C(i,vt)
let n=Tt(),a=Tt()
i.appendChild(n),i.appendChild(s),i.appendChild(a)
let o=Rt(i,e.openedMarkups)
return It(o,t,r),{markupElement:o,wrapper:i,atomElement:s,headTextNode:n,tailTextNode:a}}(t,r,e.prev),d=this._findAtom(t.name)
let c=e.atomNode
c?c.element=o:c=new Ct(s,d,t,o,i),c.render(),e.atomNode=c,e.element=n,e.headTextNode=l,e.tailTextNode=h,e.markupElement=a}}let Bt={post(){A("post destruction is not supported by the renderer",!1)},"markup-section"(e,t){Dt(e,t),Pt(e)},"list-section"(e,t){Dt(e,t),Pt(e)},"list-item"(e,t){Dt(e,t),Pt(e)},marker(e,t){if(!e.isRendered)return
let{markupElement:r}=e
t.section&&t.section.markers.remove(t),r.parentNode&&r.parentNode.removeChild(r)},"image-section"(e,t){Dt(e,t),Pt(e)},"card-section"(e,t){e.cardNode&&e.cardNode.teardown(),Dt(e,t),Pt(e)},atom(e,t){e.atomNode&&e.atomNode.teardown(),Bt.marker(e,t)}}
function Ht(e){let t,r,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.childNodes.head
for(;i;)t=i.next,(i.isRemoved||s)&&(Ht(i,!0),r=i.postNode.type,y(`editor-dom cannot destroy "${r}"`,r,Bt),Bt[r](i,i.postNode),e.childNodes.remove(i)),i=t}class Ft{constructor(e,t,r,s,i,n){this.renderTree=null,this.editor=e,this.visitor=new Ot(e,t,r,s,i,n),this.nodes=[],this.hasRendered=!1}destroy(){this.hasRendered&&Ht(T(this.renderTree).rootNode,!0)}visit(e,t,r){let s,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
r.forEach((r=>{let n=function(e,t,r,s){if(r.renderNode)return r.renderNode
{const i=e.buildRenderNode(r)
return t.childNodes.insertAfter(i,s),i}}(e,t,r,s);(n.isDirty||i)&&this.nodes.push(n),s=n}))}render(e){var t=this
this.hasRendered=!0,this.renderTree=e
let r,s,i=e.rootNode
for(;i;)Ht(i),s=i.postNode,r=s.type,y(`EditorDom visitor cannot handle type ${r}`,r,this.visitor),this.visitor[r](i,s,(function(){for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i]
return t.visit(e,...s)})),i.markClean(),i=this.nodes.shift()}}const $t=["a","b","code","em","i","s","del","strong","sub","sup","u"].map(b),Ut=["href","rel"]
class Kt{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this.type="markup",A(`Cannot create markup of tagName ${e}`,-1!==$t.indexOf(e)),this.tagName=b(e),A("Must use attributes object param (not array) for Markup",!Array.isArray(t)),this.attributes=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r={}
return n(a(Object.keys(e),(e=>-1!==t.indexOf(e))),(t=>r[t]=e[t])),r}(t,Ut)}isForwardInclusive(){return this.tagName!==b("a")}isBackwardInclusive(){return!1}hasTag(e){return this.tagName===b(e)}getAttribute(e){return this.attributes[e]}static isValidElement(e){const t=b(e.tagName)
return-1!==$t.indexOf(t)}}const Wt=["style","head","title","meta"].map(b),jt=/\s*\n\s*/g
class qt{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this.builder=e,this.plugins=t.plugins||[]}parse(e){if(this._isSkippable(e))return[]
this.sections=[],this.state={},this._updateStateFromElement(e)
let t=!1
return m(e)||(t=this.runPlugins(e)),t||n(m(e)?[e]:e.childNodes,(e=>{this.parseNode(e)})),this._closeCurrentSection(),this.sections}runPlugins(e){let t=!1,r={addSection:e=>{this.state.section&&Ee(this.state.section)&&!this.state.section.text&&!this.state.text?this.state.section=null:this._closeCurrentSection(),this.sections.push(e)},addMarkerable:e=>{let{state:t}=this,{section:r}=t
r||(t.text="",t.section=this.builder.createMarkupSection(b("p")),r=t.section),M("Markerables can only be appended to markup sections and list item sections",0,r&&r.isMarkerable),t.text&&this._createMarker(),r.markers.append(e)},nodeFinished(){t=!0}}
for(let s=0;s<this.plugins.length;s++)if((0,this.plugins[s])(e,this.builder,r),t)return!0
return!1}parseNode(e){if(this.state.section||this._updateStateFromElement(e),!this.runPlugins(e)){if(this.state.section&&k(e)&&e.tagName){let t=b(e.tagName),r=u(Re,t),s=u(De,t),i=u(Be,t),a=r&&this.state.section.isListItem,o=this.sections[this.sections.length-1]
if(s&&Ue(this.state.section)&&(this._closeCurrentSection(),this._updateStateFromElement(e.parentElement)),s&&o&&xe(o)){let t=N(e.parentElement,"expected node to have parent element")
b(t.tagName)!==o.tagName&&(this._closeCurrentSection(),this._updateStateFromElement(t))}if(!s||this.state.section.isListItem||this.state.section.isListSection||o.isListSection||(this._closeCurrentSection(),this._updateStateFromElement(e.parentElement)),o&&xe(o)&&this.state.section.isListItem&&r&&t!==o.tagName||r&&!a||i||s){if(this.state.section.isListItem&&"p"===t&&!e.nextSibling&&u(De,b(N(e.parentElement,"expected node to have parent element").tagName)))return void this.parseElementNode(e)
Ee(this.state.section)&&!this.state.text&&0===this.state.section.markers.length?this.state.section=null:this._closeCurrentSection(),this._updateStateFromElement(e)}if(this.state.section&&this.state.section.isListSection)return this._closeCurrentSection(),void n(e.childNodes,(e=>{this.parseNode(e)}))}switch(e.nodeType){case 3:this.parseTextNode(e)
break
case 1:this.parseElementNode(e)}}}parseElementNode(e){let{state:t}=this
A("expected markups to be non-null",t.markups)
const r=this._markupsFromElement(e)
r.length&&t.text.length&&Ee(t.section)&&this._createMarker(),t.markups.push(...r),n(e.childNodes,(e=>{this.parseNode(e)})),r.length&&t.text.length&&t.section.isMarkerable&&this._createMarker(),t.markups.splice(-r.length,r.length)}parseTextNode(e){let{state:t}=this
t.text+=e.textContent.replace(jt," ")}_updateStateFromElement(e){if(f(e))return
let{state:t}=this
t.section=this._createSectionFromElement(e),t.markups=this._markupsFromElement(e),t.text=""}_closeCurrentSection(){let{sections:e,state:t}=this,r=e[e.length-1]
if(t.section){if(t.text.length&&t.section.isMarkerable&&this._createMarker(),Oe(t.section)&&r&&xe(r))Qt(t.section),r.items.append(t.section)
else{if(Ee(t.section)&&!t.section.text.trim()&&!i(t.section.markers,(e=>e.isAtom)))return t.section=null,void(t.text="")
r&&xe(r)&&0===r.items.length&&e.pop(),e.push(t.section)}t.section=null,t.text=""}}_markupsFromElement(e){let{builder:t}=this,r=[]
if(m(e))return r
const s=b(e.tagName)
return this._isValidMarkupForElement(s,e)&&r.push(t.createMarkup(s,_(e))),this._markupsFromElementStyle(e).forEach((e=>r.push(e))),r}_isValidMarkupForElement(e,t){return-1!==$t.indexOf(e)&&("b"!==e||"normal"!==t.style.fontWeight)}_markupsFromElementStyle(e){let{builder:t}=this,r=[],{fontStyle:s,fontWeight:i}=e.style
return"italic"===s&&r.push(t.createMarkup("em")),"bold"!==i&&"700"!==i||r.push(t.createMarkup("strong")),r}_createMarker(){let{state:e}=this,t=Jt(e.text),r=this.builder.createMarker(t,e.markups)
M("expected section to be markerable",e.section,Ee(e.section)),e.section.markers.append(r),e.text=""}_getSectionDetails(e){let t,r,s=!1
return m(e)?(r=Fe,t=Ae,s=!0):(r=b(e.tagName),"p"===r&&e.parentElement&&"blockquote"===b(e.parentElement.tagName)&&(r="blockquote"),u(Re,r)?t=ye:u(De,r)?t=we:u(Be,r)?t=Ae:(t=Ae,r=Fe,s=!0)),{sectionType:t,tagName:r,inferredTagName:s}}_createSectionFromElement(e){if(f(e))return
let t,{builder:r}=this,{tagName:s,sectionType:i,inferredTagName:n}=this._getSectionDetails(e)
switch(i){case ye:t=r.createListSection(s)
break
case we:t=r.createListItem()
break
case Ae:t=r.createMarkupSection(s),t._inferredTagName=n
break
default:A("Cannot parse section from element",!1)}return t}_isSkippable(e){return k(e)&&u(Wt,b(e.tagName))}}const Gt=/^docs-internal-guid/,Vt=new RegExp(" ","g"),zt=new RegExp(" ","g")
function Jt(e){let t=e
return t=t.replace(Vt," "),t=t.replace(zt,"\t"),t}function Qt(e){if(Ee(e)&&e.markers.length){let{head:t,tail:r}=e.markers
t.value=t.value.replace(/^\s+/,""),r.value=r.value.replace(/\s+$/,"")}}function Yt(e){return k(e)&&b(e.tagName)===b("b")&&Gt.test(e.id)}const Zt={b:"strong",i:"em"}
function Xt(e,t){let r=e
if(m(r)||k(r)&&r.classList.contains(vt))t(r)
else for(r=r.firstChild;r;)Xt(r,t),r=r.nextSibling}class er{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this.builder=e,this.sectionParser=new qt(this.builder,t)}parse(e){const t=this.builder.createPost()
let r=function(e){return s(e.childNodes||[],Yt)||e}(e)
return this._eachChildNode(r,(e=>{let r=this.parseSections(e)
this.appendSections(t,r)})),n(t.sections,(e=>Qt(e))),t}appendSections(e,t){n(t,(t=>this.appendSection(e,t)))}appendSection(e,t){if(t.isBlank||Ee(t)&&""===t.text.replace(/^\s+/,"").replace(/\s+$/,"")&&!i(t.markers,(e=>e.isAtom)))return
let r=e.sections.tail
r&&Ke(r)&&Ke(t)&&r.tagName===t.tagName?r.join(t):e.sections.append(t)}_eachChildNode(e,t){n(m(e)?[e]:e.childNodes,(e=>t(e)))}parseSections(e){return this.sectionParser.parse(e)}collectMarkups(e,t){let r=[],s=e.parentNode
for(;s&&s!==t;){let e=this.markupFromNode(s)
e&&r.push(e),s=s.parentNode}return r}markupFromNode(e){if(k(e)&&Kt.isValidElement(e)){let t=function(e){let t=b(e)
return Zt[t]||t}(e.tagName),r=_(e)
return this.builder.createMarkup(t,r)}}reparseSection(e,t){switch(e.type){case ye:return this.reparseListSection(e,t)
case we:return this.reparseListItem(e,t)
case Ae:return this.reparseMarkupSection(e,t)
default:return}}reparseMarkupSection(e,t){return this._reparseSectionContainingMarkers(e,t)}reparseListItem(e,t){return this._reparseSectionContainingMarkers(e,t)}reparseListSection(e,t){e.items.forEach((e=>this.reparseListItem(e,t)))}_reparseSectionContainingMarkers(e,t){let r,s=e.renderNode.element,i=[]
Xt(s,(n=>{let a,o=t.getElementRenderNode(n)
if(o){if("marker"===o.postNode.type){let e=Jt(n.textContent||""),t=this.collectMarkups(n,s)
e.length?(a=o.postNode,a.value=e,a.markups=t):o.scheduleForRemoval()}else if(X(o.postNode)){let{headTextNode:s,tailTextNode:n}=o
if(s.textContent!==bt){let n=s.textContent.replace(new RegExp(bt,"g"),"")
if(s.textContent=bt,r&&r.isMarker)r.value+=n,r.renderNode&&r.renderNode.markDirty()
else{let r=o.postNode,s=r.markups.slice(),a=this.builder.createMarker(n,s)
e.markers.insertBefore(a,r)
let l=t.buildRenderNode(a)
l.markDirty(),e.renderNode.markDirty(),i.push(l),e.renderNode.childNodes.insertBefore(l,o)}}if(n.textContent!==bt){let r=n.textContent.replace(new RegExp(bt,"g"),"")
if(n.textContent=bt,o.postNode.next&&o.postNode.next.isMarker){let e=o.postNode.next
if(e.renderNode){let t=e.renderNode.element.textContent
e.renderNode.element.textContent=r+t}else{let t=r+e.value
e.value=t}}else{let s=o.postNode,n=s.markups.slice(),a=this.builder.createMarker(r,n)
e.markers.insertAfter(a,s)
let l=t.buildRenderNode(a)
i.push(l),l.markDirty(),e.renderNode.markDirty(),e.renderNode.childNodes.insertAfter(l,o)}}o&&(a=o.postNode)}}else if(m(n)){let i=Jt(n.textContent),l=this.collectMarkups(n,s)
a=this.builder.createMarker(i,l),o=t.buildRenderNode(a),o.element=n,o.markClean(),e.renderNode.markDirty()
let h=r&&r.renderNode
e.markers.insertAfter(a,r),e.renderNode.childNodes.insertAfter(o,h)}o&&i.push(o),r=a}))
let n=e.renderNode.childNodes.head
for(;n;)-1===i.indexOf(n)&&n.scheduleForRemoval(),n=n.next}}class tr{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
A("Must pass builder to HTMLParser",e),this.builder=e,this.options=t}parse(e){let t=function(e){const t=document.createElement("div")
return t.innerHTML=e,t}(e)
return new er(this.builder,this.options).parse(t)}}class rr extends q{constructor(e,t){super(),this.parent=null,this.isDirty=!0,this.isRemoved=!1,this.markupElement=null,this.headTextNode=null,this.tailTextNode=null,this.atomNode=null,this.cardNode=null,this._childNodes=null,this._element=null,this._cursorElement=null,this.postNode=e,this.renderTree=t}isAttached(){return A("Cannot check if a renderNode is attached without an element.",!!this.element),g(T(T(this.renderTree).rootElement),this.element)}get childNodes(){return this._childNodes||(this._childNodes=new Ce({adoptItem:e=>e.parent=this,freeItem:e=>e.destroy()})),this._childNodes}scheduleForRemoval(){this.isRemoved=!0,this.parent&&this.parent.markDirty()}markDirty(){this.isDirty=!0,this.parent&&this.parent.markDirty()}get isRendered(){return!!this.element}markClean(){this.isDirty=!1}get element(){return this._element}set element(e){const t=this._element
this._element=e,t&&this.renderTree.removeElementRenderNode(t),e&&this.renderTree.setElementRenderNode(e,this)}set cursorElement(e){this._cursorElement=e}get cursorElement(){return this._cursorElement||this.element}destroy(){this.element=null,this.parent=null,this.postNode=null,this.renderTree=null}reparsesMutationOfChildNode(e){return this.postNode.isCardSection?!g(this.cardNode.element,e):!this.postNode.isAtom||!g(this.atomNode.element,e)}}let sr=1
class ir{constructor(){this._map={}}set(e,t){let r=e._uuid
r||(e._uuid=r=""+sr++),this._map[r]=t}get(e){return e._uuid?this._map[e._uuid]:null}remove(e){!function(e){A("tried to fetch a value for an element not seen before",!!e._uuid)}(e),delete this._map[e._uuid]}}class nr{constructor(e){this._rootNode=this.buildRenderNode(e),this._elements=new ir}get rootNode(){return this._rootNode}get isDirty(){return this.rootNode&&this.rootNode.isDirty}get rootElement(){return this.rootNode.element}getElementRenderNode(e){return this._elements.get(e)}setElementRenderNode(e,t){this._elements.set(e,t)}removeElementRenderNode(e){this._elements.remove(e)}findRenderNodeFromElement(e){let t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>!0,s=e
for(;s;){if(t=this.getElementRenderNode(s),t&&r(t))return t
if(s=s.parentElement,s===this.rootElement)return r(this.rootNode)?this.rootNode:void 0}}buildRenderNode(e){const t=new rr(e,this)
return e.renderNode=t,t}}const ar=pt
var or={render(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:pt
switch(t){case tt:return it.render(e)
case nt:return lt.render(e)
case ht:return ut.render(e)
case void 0:case null:case pt:return kt.render(e)
default:A(`Unknown version of mobiledoc renderer requested: ${t}`,!1)}}}
class lr{constructor(){this.type="post",this.sections=new Ce({adoptItem:e=>e.post=e._parent=this,freeItem:e=>e.post=e._parent=null})}headPosition(){return this.isBlank?ne.blankPosition():this.sections.head.headPosition()}tailPosition(){return this.isBlank?ne.blankPosition():this.sections.tail.tailPosition()}toRange(){return this.headPosition().toRange(this.tailPosition())}get isBlank(){return this.sections.isEmpty}get hasContent(){return this.sections.length>1||1===this.sections.length&&!this.sections.head.isBlank}markersContainedByRange(e){const t=[]
return this.walkMarkerableSections(e,(r=>{r._markersInRange(e.trimTo(r),((e,r)=>{let{isContained:s}=r
s&&t.push(e)}))})),t}markupsInRange(e){const t=new _e
if(e.isCollapsed){let r=e.head
if(r.isMarkerable){let[e,s]=[r.markerIn(-1),r.markerIn(1)]
e&&s&&e===s?e.markups.forEach((e=>t.add(e))):((e&&e.markups||[]).forEach((e=>{e.isForwardInclusive()&&t.add(e)})),(s&&s.markups||[]).forEach((e=>{e.isBackwardInclusive()&&t.add(e)})))}}else this.walkMarkerableSections(e,(r=>{n(r.markupsInRange(e.trimTo(r)),(e=>t.add(e)))}))
return t.toArray()}walkAllLeafSections(e){let t=this.headPosition().toRange(this.tailPosition())
return this.walkLeafSections(t,e)}walkLeafSections(e,t){const{head:r,tail:s}=e
let i,n,a=0,o=r.section
for(;o&&(i=this._nextLeafSection(o),n=o===s.section,t(o,a),a++,!n);)o=i}walkMarkerableSections(e,t){this.walkLeafSections(e,(e=>{Ee(e)&&t(e)}))}_nextLeafSection(e){if(!e)return null
const t=e.next
return t?t.isLeafSection?t:xe(t)?t.items.head:void A("Cannot determine next section from non-leaf-section",!1):z(e)?this._nextLeafSection(e.parent):null}trimTo(e){const{builder:t}=this,r=t.createPost(),{head:s,tail:i}=e,a=0===i.offset&&s.section!==i.section
let o=r,l=null
return this.walkLeafSections(e,(s=>{let h
if(Ee(s)){if(Oe(s))l||(l=t.createListSection(s.parent.tagName),r.sections.append(l)),o=null,h=t.createListItem(),l.items.append(h)
else{l=null,o=r
const e=a&&i.section===s?"p":s.tagName
h=t.createMarkupSection(e)}let d=e.trimTo(s)
n(s.markersFor(d.headSectionOffset,d.tailSectionOffset),(e=>h.markers.append(e)))}else h=a&&i.section===s?t.createMarkupSection("p"):function(e){if(!("clone"in e))throw new Error("Expected section to be cloneable")
return e}(s).clone(),o=r
o&&o.sections.append(h)})),r}}class hr extends V{constructor(){super("image-section"),this.src=null}clone(){return this.builder.createImageSection(this.src)}canJoin(){return!1}get length(){return 1}}function dr(e,t){return`${b(e)}-${d(t).join("-")}`}class cr{constructor(){this.markupCache={}}createPost(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
const t=new lr
return t.builder=this,e.forEach((e=>t.sections.append(e))),t}createMarkerableSection(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]
switch(e){case we:return this.createListItem(r)
case Ae:return this.createMarkupSection(t,r)
default:A(`Cannot create markerable section of type ${e}`,!1)}}createMarkupSection(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
e=b(e)
const i=new $e(e,t,s)
return r&&(i.isGenerated=!0),i.builder=this,i}createListSection(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
e=b(e)
const s=new Le(e,t,r)
return s.builder=this,s}createListItem(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
const t=b("li"),r=new Pe(t,e)
return r.builder=this,r}createImageSection(e){let t=new hr
return e&&(t.src=e),t.builder=this,t}createCardSection(e){const t=new Y(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})
return t.builder=this,t}createMarker(e){const t=new L(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:[])
return t.builder=this,t}createAtom(e){const t=new Z(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},arguments.length>3&&void 0!==arguments[3]?arguments[3]:[])
return t.builder=this,t}createMarkup(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
e=b(e)
let r=function(e,t,r){return e[dr(t,r)]}(this.markupCache,e,t)
return r||(r=new Kt(e,t),r.builder=this,function(e,t){e[dr(t.tagName,t.attributes)]=t}(this.markupCache,r)),r}}function ur(e,t){const{range:r}=e,{head:s}=r,{section:i}=s
s.isTail()&&(i.isListItem||e.run((e=>{let{builder:r}=e,s=r.createListItem(),n=r.createListSection(t,[s])
e.replaceSection(i,n),e.setRange(n.headPosition())})))}const pr=[{name:"ul",match:/^\* $/,run(e){ur(e,"ul")}},{name:"ol",match:/^1\.? $/,run(e){ur(e,"ol")}},{name:"heading",match:/^(#{1,6}) $/,run(e,t){!function(e,t){let{range:{head:r,head:{section:s}}}=e
r.isTail()&&e.run((e=>{let{builder:r}=e,i=r.createMarkupSection(t)
e.replaceSection(s,i),e.setRange(i.headPosition())}))}(e,"h"+t[1].length)}}]
var mr=()=>"undefined"!=typeof window&&window.navigator&&/Mac/.test(window.navigator.platform),fr=()=>"undefined"!=typeof window&&"chrome"in window
function kr(e){let{post:t}=e
e.selectRange(t.toRange())}const gr=[{str:"META+B",run(e){e.toggleMarkup("strong")}},{str:"CTRL+B",run(e){e.toggleMarkup("strong")}},{str:"META+I",run(e){e.toggleMarkup("em")}},{str:"CTRL+I",run(e){e.toggleMarkup("em")}},{str:"META+U",run(e){e.toggleMarkup("u")}},{str:"CTRL+U",run(e){e.toggleMarkup("u")}},{str:"CTRL+K",run:e=>mr()?function(e){let{range:t}=e
if(t.isCollapsed){let{head:e,head:{section:r}}=t
t=e.toRange(r.tailPosition())}e.run((e=>{let r=e.deleteRange(t)
e.setRange(r)}))}(e):"undefined"!=typeof window&&window.navigator&&/Win/.test(window.navigator.platform)?le(e):void 0},{str:"CTRL+A",run(e){mr()?function(e){let{range:t}=e,{tail:{section:r}}=t
e.run((e=>{e.setRange(r.headPosition())}))}(e):kr(e)}},{str:"META+A",run(e){mr()&&kr(e)}},{str:"CTRL+E",run(e){mr()&&function(e){let{range:t}=e,{tail:{section:r}}=t
e.run((e=>{e.setRange(r.tailPosition())}))}(e)}},{str:"META+K",run:e=>le(e)},{str:"META+Z",run(e){e.run((e=>{e.undoLastChange()}))}},{str:"META+SHIFT+Z",run(e){e.run((e=>{e.redoLastChange()}))}},{str:"CTRL+Z",run(e){if(mr())return!1
e.run((e=>e.undoLastChange()))}},{str:"CTRL+SHIFT+Z",run(e){if(mr())return!1
e.run((e=>e.redoLastChange()))}}]
function _r(e){const t=e.toUpperCase()
return B[t]||(A(`Only 1 character can be used in a key command str (got "${e}")`,1===e.length),t.charCodeAt(0))}class Cr{constructor(e){this.editor=e,this.logger=e.loggerFor("mutation-handler"),this.renderTree=null,this._isObserving=!1,this._observer=new MutationObserver((e=>{this._handleMutations(e)}))}init(){this.startObserving()}destroy(){this.stopObserving(),this._observer=null}suspendObservation(e){this.stopObserving(),e(),this.startObserving()}stopObserving(){this._isObserving&&(this._isObserving=!1,this._observer.disconnect())}startObserving(){if(!this._isObserving){let{editor:e}=this
A("Cannot observe un-rendered editor",e.hasRendered),this._isObserving=!0,this.renderTree=e._renderTree,this._observer.observe(e.element,{characterData:!0,childList:!0,subtree:!0})}}reparsePost(){this.editor._reparsePost()}reparseSections(e){this.editor._reparseSections(e)}_handleMutations(e){let t=!1,r=new _e
for(let s=0;s<e.length&&!t;s++){let i=this._findTargetNodes(e[s])
for(let e=0;e<i.length;e++){let s=i[e],n=this._findRenderNodeFromNode(s)
if(!n){t=!0
break}if(n.reparsesMutationOfChildNode(s)){let e=this._findSectionFromRenderNode(n)
e?r.add(e):t=!0}}}t?(this.logger.log(`reparsePost (${e.length} mutations)`),this.reparsePost()):r.length&&(this.logger.log(`reparse ${r.length} sections (${e.length} mutations)`),this.reparseSections(r.toArray()))}_findTargetNodes(e){let t=[]
switch(e.type){case"characterData":t.push(e.target)
break
case"childList":n(e.addedNodes,(e=>t.push(e))),e.removedNodes.length&&t.push(e.target)}let r=this.editor.element
return a(t,(e=>g(r,e)))}_findSectionRenderNodeFromNode(e){return this.renderTree.findRenderNodeFromElement(e,(e=>e.postNode.isSection))}_findRenderNodeFromNode(e){return this.renderTree.findRenderNodeFromElement(e)}_findSectionFromRenderNode(e){let t=this._findSectionRenderNodeFromNode(e.element)
return t&&t.postNode}}class br{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
this._maxLength=e,this._items=[]}get length(){return this._items.length}pop(){return this._items.pop()}push(e){this._items.push(e),this.length>this._maxLength&&this._items.shift()}clear(){this._items=[]}toArray(){return this._items}}function vr(e,t){let r
return e.walkAllLeafSections(((e,s)=>{t===s&&(r=e)})),r}class Sr{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
this.mobiledoc=t.serialize(),this.editor=t,this.editAction=r,this.takenAt=e,this.snapshotRange()}snapshotRange(){let{range:e,cursor:t}=this.editor
if(t.hasCursor()&&!e.isBlank){let{head:t,tail:r}=e
this.range={head:[t.leafSectionIndex,t.offset],tail:[r.leafSectionIndex,r.offset]}}}getRange(e){if(this.range){let{head:t,tail:r}=this.range,[s,i]=t,[n,a]=r,o=vr(e,s),l=vr(e,n),h=o.toPosition(i),d=l.toPosition(a)
return h.toRange(d)}}groupsWith(e,t,r){return null!==t&&this.editAction===t&&this.takenAt+e>r}}class Er{constructor(e,t,r){this.editor=e,this._undoStack=new br(t),this._redoStack=new br(t),this._pendingSnapshot=null,this._groupingTimeout=r}snapshot(){this._pendingSnapshot&&this._pendingSnapshot.snapshotRange()}storeSnapshot(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Date.now(),r=this._pendingSnapshot
r&&(r.groupsWith(this._groupingTimeout,e,t)||this._undoStack.push(r),this._redoStack.clear()),this._pendingSnapshot=new Sr(t,this.editor,e)}stepBackward(e){this._pendingSnapshot=null
let t=this._undoStack.pop()
t&&(this._redoStack.push(new Sr(Date.now(),this.editor)),this._restoreFromSnapshot(t,e))}stepForward(e){let t=this._redoStack.pop()
t&&(this._undoStack.push(new Sr(Date.now(),this.editor)),this._restoreFromSnapshot(t,e)),e.cancelSnapshot()}_restoreFromSnapshot(e,t){let{mobiledoc:r}=e,{editor:s}=this,{builder:i,post:n}=s,a=gt.parse(i,r)
t.removeAllSections(),t.migrateSectionsFromPost(a)
let o=e.getRange(n)
o&&t.setRange(o)}}const Ar=/^\* (.*)$/,yr=/^\d\.? (.*)$/,wr=new RegExp("\r","g"),Mr=new RegExp("\r\n","g")
class Nr{constructor(e,t){this.builder=e,this.options=t,this.post=this.builder.createPost(),this.prevSection=null}parse(e){return(e=function(e){return e.replace(Mr,"\n").replace(wr,"\n")}(e)).split("\n").forEach((e=>{let t=this._parseSection(e)
this._appendSection(t)})),this.post}_parseSection(e){let t,r=Fe,s=Ae
Ar.test(e)?(r="ul",s=ye,e=e.match(Ar)[1]):yr.test(e)&&(r="ol",s=ye,e=e.match(yr)[1])
let i=[this.builder.createMarker(e)]
switch(s){case ye:{let e=this.builder.createListItem(i)
t=this.builder.createListSection(r,[e])
break}case Ae:t=this.builder.createMarkupSection(r,i)
break
default:A(`Unknown type encountered ${s}`,!1)}return t}_appendSection(e){xe(e)&&this.prevSection&&xe(this.prevSection)&&this.prevSection.tagName===e.tagName?e.items.forEach((e=>{this.prevSection.items.append(e.clone())})):(this.post.sections.insertAfter(e,this.prevSection),this.prevSection=e)}}const Tr="text/plain",Rr="text/html",Ir="Text",Lr=new RegExp(/data-mobiledoc='(.*?)'>/)
function xr(e,t,r){let s
if(Lr.test(e)){let r=e.match(Lr)[1],i=JSON.parse(r)
s=gt.parse(t,i)}else s=new tr(t,{plugins:r}).parse(e)
return s}function Dr(e,t,r){return new Nr(t,{plugins:r}).parse(e)}function Pr(e,t){let r="",s="",{clipboardData:i}=e
return i&&i.getData?(r=i.getData(Rr),s=i.getData(Tr)):t.clipboardData&&t.clipboardData.getData&&(r=t.clipboardData.getData(Ir)),{html:r,text:s}}function Or(e,t){let r="",s=""
try{r=e.dataTransfer.getData(Rr),s=e.dataTransfer.getData(Tr)}catch(e){t&&t.log("Error getting drop data: ",e)}return{html:r,text:s}}class Br{constructor(e){this.editor=e,this._handlers=[]}register(e){A("Input Handler is not valid",this._validateHandler(e)),this._handlers.push(e)}unregister(e){let t=this._handlers
for(let r=0;r<t.length;r++)t[r].name===e&&t.splice(r,1)}handle(e){let{editor:t}=this
t.insertText(e)
let r=this._findHandler()
if(r){let[e,s]=r
e.run(t,s)}}handleNewLine(){let{editor:e}=this,t=this._findHandler("\n")
if(t){let[r,s]=t
r.run(e,s)}}_findHandler(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
const{editor:t}=this,{range:r}=t,{head:s}=r,{section:i}=s
let n=i.textUntil(s)+e
for(let a=0;a<this._handlers.length;a++){let e=this._handlers[a]
if("text"in e&&v(n,e.text))return[e,[e.text]]
if("match"in e&&e.match.test(n))return[e,e.match.exec(n)]}}_validateHandler(e){return fe('Registered input handlers require a "name" property so that they can be unregistered',!!e.name),!(!e.run||!e.text&&!e.match||e.text&&e.match)}destroy(){this._handlers=[]}}let Hr
class Fr{constructor(){this.started=!1,this.listeners=[],this.selection={}}static getInstance(){return Hr||(Hr=new Fr),Hr}static addListener(e){Fr.getInstance().addListener(e)}addListener(e){-1===this.listeners.indexOf(e)&&(this.listeners.push(e),this.start())}static removeListener(e){Fr.getInstance().removeListener(e)}removeListener(e){let t=this.listeners.indexOf(e);-1!==t&&(this.listeners.splice(t,1),0===this.listeners.length&&this.stop())}start(){this.started||(this.started=!0,this.poll())}stop(){this.started=!1,this.selection={}}notifyListeners(e,t){this.listeners.forEach((r=>{r.selectionDidChange(e,t)}))}destroy(){this.stop(),this.listeners=[]}getSelection(){let e=window.getSelection(),{anchorNode:t,focusNode:r,anchorOffset:s,focusOffset:i}=e
return{anchorNode:t,focusNode:r,anchorOffset:s,focusOffset:i}}poll(){this.started&&(this.update(),this.runNext((()=>this.poll())))}runNext(e){window.requestAnimationFrame(e)}update(){let e=this.selection,t=this.getSelection()
this.selectionIsEqual(e,t)||(this.selection=t,this.notifyListeners(t,e))}selectionIsEqual(e,t){return e.anchorNode===t.anchorNode&&e.anchorOffset===t.anchorOffset&&e.focusNode===t.focusNode&&e.focusOffset===t.focusOffset}}class $r{constructor(e,t){this.editor=e,this.callback=t,this.started=!1}start(){this.started||(Fr.addListener(this),this.started=!0)}stop(){this.started=!1,Fr.removeListener(this)}destroy(){this.stop()}selectionDidChange(e,t){this.started&&this.callback(e,t)}}const Ur=["keydown","keyup","cut","copy","paste","keypress","drop","compositionstart","compositionend"]
class Kr{constructor(e){this.editor=e,this.logger=e.loggerFor("event-manager"),this._textInputHandler=new Br(e),this._listeners=[],this.modifierKeys={shift:!1},this._selectionManager=new $r(this.editor,this.selectionDidChange.bind(this)),this.started=!0,this._isComposingOnBlankLine=!1}init(){let{editor:{element:e}}=this
A("Cannot init EventManager without element",!!e),Ur.forEach((t=>{this._addListener(e,t)})),this._selectionManager.start()}start(){this.started=!0}stop(){this.started=!1}registerInputHandler(e){this._textInputHandler.register(e)}unregisterInputHandler(e){this._textInputHandler.unregister(e)}unregisterAllTextInputHandlers(){this._textInputHandler.destroy(),this._textInputHandler=new Br(this.editor)}_addListener(e,t){A(`Missing listener for ${t}`,!!this[t])
let r=e=>this._handleEvent(t,e)
e.addEventListener(t,r),this._listeners.push([e,t,r])}_removeListeners(){this._listeners.forEach((e=>{let[t,r,s]=e
t.removeEventListener(r,s)})),this._listeners=[]}_trigger(e,t,r){n(a(this._listeners,(r=>{let[s,i]=r
return s===e&&i===t})),(e=>{let[t,,s]=e
s.call(t,r)}))}destroy(){this._textInputHandler.destroy(),this._selectionManager.destroy(),this._removeListeners()}_handleEvent(e,t){let{target:r}=t
return!this.started||!this.isElementAddressable(r)||void this[e](t)}isElementAddressable(e){return this.editor.cursor.isAddressable(e)}selectionDidChange(e){let t=!0,{anchorNode:r}=e
this.isElementAddressable(r)||(t=!this.editor.range.isBlank),t&&this.editor._readRangeFromDOM()}keypress(e){let{editor:t,_textInputHandler:r}=this
if(!t.hasCursor())return
let s=H.fromEvent(e)
if(s.isPrintable()){if(e.preventDefault(),!s.isEnter()&&13===s.keyCode)return r.handleNewLine(),void t.handleNewline(e)
r.handle(s.toString())}}keydown(e){let{editor:t}=this
if(!t.hasCursor())return
if(!t.isEditable)return
let r=H.fromEvent(e)
if(this._updateModifiersFromKey(r,{isDown:!0}),t.handleKeyCommand(e))return
t.post.isBlank&&t._insertEmptyMarkupSectionAtCursor()
let s=t.range
switch(!0){case r.isIME():break
case r.isHorizontalArrowWithoutModifiersOtherThanShift():{let i
i=r.isShift()?s.extend(1*r.direction):s.move(r.direction),t.selectRange(i),e.preventDefault()
break}case r.isDelete():{let{direction:s}=r,i=Rs.CHAR;(r.altKey&&mr()||r.ctrlKey&&!mr())&&(i=Rs.WORD),t.performDelete({direction:s,unit:i}),e.preventDefault()
break}case r.isEnter():this._textInputHandler.handleNewLine(),t.handleNewline(e)
break
case r.isTab():e.preventDefault(),this._textInputHandler.handle(r.toString())}}keyup(e){let{editor:t}=this
if(!t.hasCursor())return
let r=H.fromEvent(e)
this._updateModifiersFromKey(r,{isDown:!1})}compositionstart(e){let{editor:t}=this
t.range.headMarker||(this._isComposingOnBlankLine=!0,t.post.isBlank&&t._insertEmptyMarkupSectionAtCursor(),fr()?(t.setPlaceholder(""),t._mutationHandler.stopObserving()):this._textInputHandler.handle(" "))}compositionend(e){const{editor:t}=this
if(this._isComposingOnBlankLine)if(this._isComposingOnBlankLine=!1,fr())t.insertText(e.data),t.setPlaceholder(t.placeholder),t._mutationHandler.startObserving()
else{let r=t.range.headSection.toPosition(0),s=t.range.headSection.toPosition(e.data.length)
t.run((e=>{e.deleteAtPosition(r,1,{unit:Rs.CHAR}),e.setRange(s)}))}}cut(e){e.preventDefault(),this.copy(e),this.editor.performDelete()}copy(e){e.preventDefault()
let{editor:t,editor:{range:r,post:s}}=this
s=s.trimTo(r)
let i={html:t.serializePost(s,Ts.HTML),text:t.serializePost(s,Ts.TEXT),mobiledoc:t.serializePost(s,Ts.MOBILEDOC)}
t.runCallbacks("willCopy",[i]),function(e,t,r){let{mobiledoc:s,html:i,text:n}=t
s&&i&&(i=`<div data-mobiledoc='${JSON.stringify(s)}'>${i}</div>`)
let{clipboardData:a}=e,{clipboardData:o}=r
a&&a.setData?(a.setData(Rr,i),a.setData(Tr,n)):o&&o.setData&&o.setData(Ir,i)}(e,i,window)}paste(e){e.preventDefault()
let{editor:t}=this
t.range.isCollapsed||t.performDelete(),t.post.isBlank&&t._insertEmptyMarkupSectionAtCursor()
let r=t.range.head,s=function(e,t){let{builder:r,_parserPlugins:s}=t,{targetFormat:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{targetFormat:"html"},{html:n,text:a}=Pr(e,window)
return"html"===i&&n&&n.length?xr(n,r,s):a&&a.length?Dr(a,r,s):void 0}(e,t,{targetFormat:this.modifierKeys.shift?"text":"html"})
t.runCallbacks("willPaste",[s]),t.run((e=>{let t=e.insertPost(r,s)
e.setRange(t)}))}drop(e){e.preventDefault()
let{clientX:t,clientY:r}=e,{editor:s}=this,i=s.positionAtPoint(t,r)
if(!i)return void this.logger.log("Could not find drop position")
let n=function(e,t){let{logger:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{builder:s,_parserPlugins:i}=t,{html:n,text:a}=Or(e,r)
return n&&n.length?xr(n,s,i):a&&a.length?Dr(a,s,i):void 0}(e,s,{logger:this.logger})
n?s.run((e=>{let t=e.insertPost(i,n)
e.setRange(t)})):this.logger.log("Could not determine post from drop event")}_updateModifiersFromKey(e,t){let{isDown:r}=t
e.isShiftKey()&&(this.modifierKeys.shift=r)}}class Wr{constructor(e){this.editor=e
let t={range:W.blankRange(),activeMarkups:[],activeSections:[],activeSectionTagNames:[],activeSectionAttributes:{}}
this.prevState=this.state=t}updateRange(e){this.prevState=this.state,this.state=this._readState(e)}destroy(){this.editor=null,this.prevState=this.state=null}rangeDidChange(){const{state:e,prevState:t}=this,{range:r}=e,{range:s}=t
return!s.isEqual(r)}inputModeDidChange(){const e=this.state,t=this.prevState
return!c(e.activeMarkups,t.activeMarkups)||!c(e.activeSectionTagNames,t.activeSectionTagNames)||!c(d(e.activeSectionAttributes),d(t.activeSectionAttributes))}get range(){return this.state.range}get activeSections(){return this.state.activeSections}get activeSectionAttributes(){return this.state.activeSectionAttributes}get activeMarkups(){return this.state.activeMarkups}toggleMarkupState(e){u(this.activeMarkups,e)?this._removeActiveMarkup(e):this._addActiveMarkup(e)}_readState(e){let t={range:e,activeMarkups:this._readActiveMarkups(e),activeSections:this._readActiveSections(e)}
return t.activeSectionTagNames=t.activeSections.map((e=>e.isNested?e.parent.tagName:e.tagName)),t.activeSectionAttributes=this._readSectionAttributes(t.activeSections),t}_readActiveSections(e){const{head:t,tail:r}=e,{editor:s}=this,{post:i}=s
return e.isBlank?[]:i.sections.readRange(t.section,r.section)}_readActiveMarkups(e){const{editor:t}=this,{post:r}=t
return r.markupsInRange(e)}_readSectionAttributes(e){return e.reduce(((e,t)=>{let r=z(s=t)?s.parent.attributes||{}:s.attributes||{}
var s
return Object.keys(r).forEach((t=>{let s=t.replace(/^data-md-/,""),i=r[t]
e[s]=e[s]||[],u(e[s],i)||e[s].push(i)})),e}),{})}_removeActiveMarkup(e){let t=this.state.activeMarkups.indexOf(e)
this.state.activeMarkups.splice(t,1)}_addActiveMarkup(e){this.state.activeMarkups.push(e)}}function jr(e,t){return e.createTextNode(function(e){return e.replace(/  /g,"  ")}(t))}function qr(e){return e.toLowerCase()}var Gr="dom",Vr={name:"image",type:Gr,render(e){let{payload:t,env:{dom:r}}=e,s=r.createElement("img")
return s.src=t.src,s}}
const zr=["p","h1","h2","h3","h4","h5","h6","blockquote","pull-quote","aside"].map(qr),Jr=["p","h1","h2","h3","h4","h5","h6","blockquote","aside"].map(qr),Qr=["ul","ol"].map(qr),Yr=["b","i","strong","em","a","u","sub","sup","s","code"].map(qr)
function Zr(e,t){return-1!==e.indexOf(t)}function Xr(e,t){switch(e=qr(e),t){case 1:return Zr(zr,e)
case 3:return Zr(Qr,e)
default:throw new Error(`Cannot validate tagName for unknown section type "${t}"`)}}function es(e){return e=qr(e),Zr(Jr,e)}function ts(e){return e=qr(e),Zr(Yr,e)}const rs=/^([a-z0-9.+-]+:)/i,ss=["javascript:","vbscript:"]
function is(e){let t={}
for(let r=0;r<e.length;r+=2){let s=e[r],i=e[r+1]
t[s.toLowerCase()]=i}return t}const ns=["data-md-text-align"]
function as(e,t,r){if(s=t,-1===ns.indexOf(s))throw new Error(`Cannot use attribute: ${t}`)
var s
e.setAttribute(t,r)}function os(e,t){let r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return es(e)?(r=t.createElement(e),Object.keys(s).forEach((e=>{as(r,e,s[e])}))):(r=t.createElement("div"),r.setAttribute("class",e)),r}function ls(e,t,r){let s=t.createElement(e)
return Object.keys(r).forEach((t=>{let i=r[t]
i=function(e,t,r){return"a"===e&&"href"===t?function(e){let t=function(e){let t=e&&e.match(rs)
return t&&t[0]||":"}(e).toLowerCase()
return function(e,t){for(let r=0;r<e.length;r++)if(e[r]===t)return!0
return!1}(ss,t)?`unsafe:${e}`:e}(r):r}(e,t,i),s.setAttribute(t,i)})),s}const hs="0.2.0"
class ds{constructor(e,t){let{cards:r,cardOptions:s,unknownCardHandler:i,markupElementRenderer:n,sectionElementRenderer:a,dom:o}=t,{version:l,sections:h}=e
!function(e){if(e!==hs)throw new Error(`Unexpected Mobiledoc version "${e}"`)}(l)
const[d,c]=h
this.dom=o,this.root=o.createDocumentFragment(),this.markerTypes=d,this.sections=c,this.cards=r,this.cardOptions=s,this.unknownCardHandler=i||this._defaultUnknownCardHandler,this.sectionElementRenderer={__default__:os},Object.keys(a).forEach((e=>{this.sectionElementRenderer[e.toLowerCase()]=a[e]})),this.markupElementRenderer={__default__:ls},Object.keys(n).forEach((e=>{this.markupElementRenderer[e.toLowerCase()]=n[e]})),this._renderCallbacks=[],this._teardownCallbacks=[],this._renderedChildNodes=[]}get _defaultUnknownCardHandler(){return e=>{let{env:{name:t}}=e
throw new Error(`Card "${t}" not found but no unknownCardHandler was registered`)}}render(){this.sections.forEach((e=>{let t=this.renderSection(e)
t&&this.root.appendChild(t)}))
for(let t=0;t<this._renderCallbacks.length;t++)this._renderCallbacks[t]()
this._renderedChildNodes=[]
let e=this.root.firstChild
for(;e;)this._renderedChildNodes.push(e),e=e.nextSibling
return{result:this.root,teardown:()=>this.teardown()}}teardown(){for(let e=0;e<this._teardownCallbacks.length;e++)this._teardownCallbacks[e]()
for(let e=0;e<this._renderedChildNodes.length;e++){let t=this._renderedChildNodes[e]
t.parentNode&&t.parentNode.removeChild(t)}}renderSection(e){const[t]=e
switch(t){case 1:return this.renderMarkupSection(e)
case 2:return this.renderImageSection(e)
case 3:return this.renderListSection(e)
case 10:return this.renderCardSection(e)
default:throw new Error(`Cannot render mobiledoc section of type "${t}"`)}}renderMarkersOnElement(e,t){let r=[e],s=e
for(let n=0,a=t.length;n<a;n++){let e=t[n],[a,o,l]=e
for(let t=0,n=a.length;t<n;t++){let e=this.markerTypes[a[t]],[n,l=[]]=e
ts(n)?(i=this.renderMarkupElement(n,l),s.appendChild(i),r.push(i),s=i):o--}s.appendChild(jr(this.dom,l))
for(let t=0,i=o;t<i;t++)r.pop(),s=r[r.length-1]}var i}renderMarkupElement(e,t){return e=e.toLowerCase(),t=is(t),this.markupElementRendererFor(e)(e,this.dom,t)}markupElementRendererFor(e){return this.markupElementRenderer[e]||this.markupElementRenderer.__default__}renderListItem(e){const t=this.dom.createElement("li")
return this.renderMarkersOnElement(t,e),t}renderListSection(e){let[t,r,s]=e
if(!Xr(r,3))return
const i=this.dom.createElement(r)
return s.forEach((e=>{i.appendChild(this.renderListItem(e))})),i}renderImageSection(e){let[t,r]=e,s=this.dom.createElement("img")
return s.src=r,s}findCard(e){for(let t=0;t<this.cards.length;t++)if(this.cards[t].name===e)return this.cards[t]
return e===Vr.name?Vr:this._createUnknownCard(e)}_createUnknownCard(e){return{name:e,type:Gr,render:this.unknownCardHandler}}_createCardArgument(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return{env:{name:e.name,isInEditor:!1,dom:this.dom,didRender:e=>this._registerRenderCallback(e),onTeardown:e=>this._registerTeardownCallback(e)},options:this.cardOptions,payload:t}}_registerRenderCallback(e){this._renderCallbacks.push(e)}_registerTeardownCallback(e){this._teardownCallbacks.push(e)}renderCardSection(e){let[t,r,s]=e,i=this.findCard(r),n=this._createCardArgument(i,s),a=i.render(n)
return this._validateCardRender(a,i.name),a}_validateCardRender(e,t){if(e&&"object"!=typeof e)throw new Error(`Card "${t}" must render dom, but result was "${e}"`)}renderMarkupSection(e){let[t,r,s]=e
if(r=r.toLowerCase(),!Xr(r,1))return
let i=this.sectionElementRendererFor(r)(r,this.dom)
return this.renderMarkersOnElement(i,s),i}sectionElementRendererFor(e){return this.sectionElementRenderer[e]||this.sectionElementRenderer.__default__}}const cs="0.3.0",us="0.3.1",ps="0.3.2"
class ms{constructor(e,t){let{cards:r,cardOptions:s,atoms:i,unknownCardHandler:n,unknownAtomHandler:a,markupElementRenderer:o,sectionElementRenderer:l,dom:h}=t,{version:d,sections:c,atoms:u,cards:p,markups:m}=e
!function(e){switch(e){case cs:case us:case ps:return
default:throw new Error(`Unexpected Mobiledoc version "${e}"`)}}(d),this.dom=h,this.root=this.dom.createDocumentFragment(),this.sections=c,this.atomTypes=u,this.cardTypes=p,this.markerTypes=m,this.cards=r,this.atoms=i,this.cardOptions=s,this.unknownCardHandler=n||this._defaultUnknownCardHandler,this.unknownAtomHandler=a||this._defaultUnknownAtomHandler,this.sectionElementRenderer={__default__:os},Object.keys(l).forEach((e=>{this.sectionElementRenderer[e.toLowerCase()]=l[e]})),this.markupElementRenderer={__default__:ls},Object.keys(o).forEach((e=>{this.markupElementRenderer[e.toLowerCase()]=o[e]})),this._renderCallbacks=[],this._teardownCallbacks=[]}get _defaultUnknownCardHandler(){return e=>{let{env:{name:t}}=e
throw new Error(`Card "${t}" not found but no unknownCardHandler was registered`)}}get _defaultUnknownAtomHandler(){return e=>{let{env:{name:t}}=e
throw new Error(`Atom "${t}" not found but no unknownAtomHandler was registered`)}}render(){this.sections.forEach((e=>{let t=this.renderSection(e)
t&&this.root.appendChild(t)}))
for(let e=0;e<this._renderCallbacks.length;e++)this._renderCallbacks[e]()
return this._renderedChildNodes=Array.prototype.slice.call(this.root.childNodes),{result:this.root,teardown:()=>this.teardown()}}teardown(){for(let e=0;e<this._teardownCallbacks.length;e++)this._teardownCallbacks[e]()
for(let e=0;e<this._renderedChildNodes.length;e++){let t=this._renderedChildNodes[e]
t.parentNode&&t.parentNode.removeChild(t)}}renderSection(e){const[t]=e
switch(t){case 1:return this.renderMarkupSection(e)
case 2:return this.renderImageSection(e)
case 3:return this.renderListSection(e)
case 10:return this.renderCardSection(e)
default:throw new Error(`Cannot render mobiledoc section of type "${t}"`)}}renderMarkersOnElement(e,t){let r=[e],s=e
for(let n=0,a=t.length;n<a;n++){let e=t[n],[a,o,l,h]=e
for(let t=0,n=o.length;t<n;t++){let e=this.markerTypes[o[t]],[n,a=[]]=e
ts(n)?(i=this.renderMarkupElement(n,a),s.appendChild(i),r.push(i),s=i):l--}switch(a){case 0:s.appendChild(jr(this.dom,h))
break
case 1:s.appendChild(this._renderAtom(h))
break
default:throw new Error(`Unknown markup type (${a})`)}for(let t=0,i=l;t<i;t++)r.pop(),s=r[r.length-1]}var i}renderMarkupElement(e,t){return e=e.toLowerCase(),t=is(t),this.markupElementRendererFor(e)(e,this.dom,t)}markupElementRendererFor(e){return this.markupElementRenderer[e]||this.markupElementRenderer.__default__}renderListItem(e){const t=this.dom.createElement("li")
return this.renderMarkersOnElement(t,e),t}renderListSection(e){let[t,r,s]=e
if(!Xr(r,3))return
const i=this.dom.createElement(r)
return s.forEach((e=>{i.appendChild(this.renderListItem(e))})),i}renderImageSection(e){let[t,r]=e,s=this.dom.createElement("img")
return s.src=r,s}findCard(e){for(let t=0;t<this.cards.length;t++)if(this.cards[t].name===e)return this.cards[t]
return e===Vr.name?Vr:this._createUnknownCard(e)}_findCardByIndex(e){let t=this.cardTypes[e]
if(!t)throw new Error(`No card definition found at index ${e}`)
let[r,s]=t
return{card:this.findCard(r),payload:s}}_createUnknownCard(e){return{name:e,type:Gr,render:this.unknownCardHandler}}_createCardArgument(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return{env:{name:e.name,isInEditor:!1,dom:this.dom,didRender:e=>this._registerRenderCallback(e),onTeardown:e=>this._registerTeardownCallback(e)},options:this.cardOptions,payload:t}}_registerTeardownCallback(e){this._teardownCallbacks.push(e)}_registerRenderCallback(e){this._renderCallbacks.push(e)}renderCardSection(e){let[t,r]=e,{card:s,payload:i}=this._findCardByIndex(r),n=this._createCardArgument(s,i),a=s.render(n)
return this._validateCardRender(a,s.name),a}_validateCardRender(e,t){if(e&&"object"!=typeof e)throw new Error(`Card "${t}" must render dom, but result was "${e}"`)}findAtom(e){for(let t=0;t<this.atoms.length;t++)if(this.atoms[t].name===e)return this.atoms[t]
return this._createUnknownAtom(e)}_createUnknownAtom(e){return{name:e,type:Gr,render:this.unknownAtomHandler}}_createAtomArgument(e,t,r){return{env:{name:e.name,isInEditor:!1,dom:this.dom,onTeardown:e=>this._registerTeardownCallback(e)},options:this.cardOptions,value:t,payload:r}}_validateAtomRender(e,t){if(e&&"object"!=typeof e)throw new Error(`Atom "${t}" must render dom, but result was "${e}"`)}_findAtomByIndex(e){let t=this.atomTypes[e]
if(!t)throw new Error(`No atom definition found at index ${e}`)
let[r,s,i]=t
return{atom:this.findAtom(r),value:s,payload:i}}_renderAtom(e){let{atom:t,value:r,payload:s}=this._findAtomByIndex(e),i=this._createAtomArgument(t,r,s),n=t.render(i)
return this._validateAtomRender(n,t.name),n||jr(this.dom,"")}renderMarkupSection(e){let[t,r,s,i=[]]=e
if(r=r.toLowerCase(),!Xr(r,1))return
let n=is(i),a=this.sectionElementRendererFor(r)(r,this.dom,n)
return this.renderMarkersOnElement(a,s),a}sectionElementRendererFor(e){return this.sectionElementRenderer[e]||this.sectionElementRenderer.__default__}}class fs{constructor(){let{cards:e=[],atoms:t=[],cardOptions:r={},unknownCardHandler:s,unknownAtomHandler:i,markupElementRenderer:n={},sectionElementRenderer:a={},dom:o,markupSanitizer:l=null}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(function(e){if(!Array.isArray(e))throw new Error("`cards` must be passed as an array")
for(let t=0;t<e.length;t++){let r=e[t]
if(r.type!==Gr)throw new Error(`Card "${r.name}" must be of type "dom", was "${r.type}"`)
if(!r.render)throw new Error(`Card "${r.name}" must define \`render\``)}}(e),function(e){if(!Array.isArray(e))throw new Error("`atoms` must be passed as an array")
for(let t=0;t<e.length;t++){let r=e[t]
if(r.type!==Gr)throw new Error(`Atom "${r.name}" must be type "dom", was "${r.type}"`)
if(!r.render)throw new Error(`Atom "${r.name}" must define \`render\``)}}(t),!o){if("undefined"==typeof window)throw new Error("A `dom` option must be provided to the renderer when running without window.document")
o=window.document}this.options={cards:e,atoms:t,cardOptions:r,unknownCardHandler:s,unknownAtomHandler:i,markupElementRenderer:n,sectionElementRenderer:a,dom:o,markupSanitizer:l}}render(e){let{version:t}=e
switch(t){case hs:case void 0:case null:return new ds(e,this.options).render()
case cs:case us:case ps:return new ms(e,this.options).render()
default:throw new Error(`Unexpected Mobiledoc version "${t}"`)}}}var ks={name:"image-card",type:"text",render(){}},gs="text"
const _s="0.2.0"
class Cs{constructor(e,t){let{cards:r,cardOptions:s,atoms:i,unknownCardHandler:n}=t,{version:a,sections:o}=e
!function(e){if(e!==_s)throw new Error(`Unexpected Mobiledoc version "${e}"`)}(a)
let[,l]=o
this.root=[],this.sections=l,this.cards=r,this.atoms=i,this.cardOptions=s,this.unknownCardHandler=n||this._defaultUnknownCardHandler,this._teardownCallbacks=[]}render(){return this.sections.forEach((e=>{this.root.push(this.renderSection(e))})),{result:this.root.join("\n"),teardown:()=>this.teardown()}}teardown(){for(let e=0;e<this._teardownCallbacks.length;e++)this._teardownCallbacks[e]()}get _defaultUnknownCardHandler(){return()=>{}}renderSection(e){const[t]=e
switch(t){case 1:return this.renderMarkupSection(e)
case 2:return this.renderImageSection(e)
case 3:return this.renderListSection(e)
case 10:return this.renderCardSection(e)
default:throw new Error("Unimplemented renderer for type "+t)}}renderImageSection(){return""}renderListSection(e){let[t,r,s]=e
return s.map((e=>this.renderListItem(e))).join("\n")}renderListItem(e){return this.renderMarkers(e)}findCard(e){for(let t=0;t<this.cards.length;t++)if(this.cards[t].name===e)return this.cards[t]
return e===ks.name?ks:this._createUnknownCard(e)}_createUnknownCard(e){return{name:e,type:gs,render:this.unknownCardHandler}}renderCardSection(e){let[t,r,s]=e,i=this.findCard(r),n=this._createCardArgument(i,s),a=i.render(n)
return this._validateCardRender(a,i.name),a||""}_validateCardRender(e,t){if(e&&"string"!=typeof e)throw new Error(`Card "${t}" must render text, but result was ${typeof e}"`)}_registerTeardownCallback(e){this._teardownCallbacks.push(e)}_createCardArgument(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return{env:{name:e.name,isInEditor:!1,onTeardown:e=>this._registerTeardownCallback(e)},options:this.cardOptions,payload:t}}renderMarkupSection(e){let[t,r,s]=e
return this.renderMarkers(s)}renderMarkers(e){let t=""
return e.forEach((e=>{let[,,r]=e
t+=r})),t}}const bs="0.3.0",vs="0.3.1",Ss="0.3.2"
class Es{constructor(e,t){let{cards:r,cardOptions:s,atoms:i,unknownCardHandler:n,unknownAtomHandler:a}=t,{version:o,sections:l,atoms:h,cards:d}=e
!function(e){if(e!==bs&&e!==vs&&e!==Ss)throw new Error(`Unexpected Mobiledoc version "${e}"`)}(o),this.root=[],this.sections=l,this.atomTypes=h,this.cardTypes=d,this.cards=r,this.atoms=i,this.cardOptions=s,this.unknownCardHandler=n||this._defaultUnknownCardHandler,this.unknownAtomHandler=a||this._defaultUnknownAtomHandler,this._teardownCallbacks=[]}render(){return this.sections.forEach((e=>{this.root.push(this.renderSection(e))})),{result:this.root.join("\n"),teardown:()=>this.teardown()}}teardown(){for(let e=0;e<this._teardownCallbacks.length;e++)this._teardownCallbacks[e]()}get _defaultUnknownCardHandler(){return()=>{}}get _defaultUnknownAtomHandler(){return e=>{let{value:t}=e
return t||""}}renderSection(e){const[t]=e
switch(t){case 1:return this.renderMarkupSection(e)
case 2:return this.renderImageSection(e)
case 3:return this.renderListSection(e)
case 10:return this.renderCardSection(e)
default:throw new Error("Unimplemented renderer for type "+t)}}renderImageSection(){return""}renderListSection(e){let[t,r,s]=e
return s.map((e=>this.renderListItem(e))).join("\n")}renderListItem(e){return this.renderMarkers(e)}findCard(e){for(let t=0;t<this.cards.length;t++)if(this.cards[t].name===e)return this.cards[t]
return e===ks.name?ks:this._createUnknownCard(e)}_findCardByIndex(e){let t=this.cardTypes[e]
if(!t)throw new Error(`No card definition found at index ${e}`)
let[r,s]=t
return{card:this.findCard(r),payload:s}}_createUnknownCard(e){return{name:e,type:gs,render:this.unknownCardHandler}}renderCardSection(e){let[t,r]=e,{card:s,payload:i}=this._findCardByIndex(r),n=this._createCardArgument(s,i),a=s.render(n)
return this._validateCardRender(a,s.name),a||""}_validateCardRender(e,t){if(e&&"string"!=typeof e)throw new Error(`Card "${t}" must render text, but result was ${typeof e}"`)}_registerTeardownCallback(e){this._teardownCallbacks.push(e)}_createCardArgument(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return{env:{name:e.name,isInEditor:!1,onTeardown:e=>this._registerTeardownCallback(e)},options:this.cardOptions,payload:t}}renderMarkupSection(e){let[t,r,s]=e
return this.renderMarkers(s)}findAtom(e){for(let t=0;t<this.atoms.length;t++)if(this.atoms[t].name===e)return this.atoms[t]
return this._createUnknownAtom(e)}_createUnknownAtom(e){return{name:e,type:gs,render:this.unknownAtomHandler}}_createAtomArgument(e,t,r){return{env:{name:e.name,onTeardown:e=>this._registerTeardownCallback(e)},options:this.cardOptions,value:t,payload:r}}_validateAtomRender(e,t){if(e&&"string"!=typeof e)throw new Error(`Atom "${t}" must render text, but result was ${typeof e}"`)}_findAtomByIndex(e){let t=this.atomTypes[e]
if(!t)throw new Error(`No atom definition found at index ${e}`)
let[r,s,i]=t
return{atom:this.findAtom(r),value:s,payload:i}}_renderAtom(e){let{atom:t,value:r,payload:s}=this._findAtomByIndex(e),i=this._createAtomArgument(t,r,s),n=t.render(i)
return this._validateAtomRender(n,t.name),n||""}renderMarkers(e){let t=""
return e.forEach((e=>{let[r,,,s]=e
switch(r){case 0:t+=s
break
case 1:t+=this._renderAtom(s)
break
default:throw new Error(`Unknown markup type (${r})`)}})),t}}class As{constructor(){let{cards:e,atoms:t,cardOptions:r,unknownCardHandler:s,unknownAtomHandler:i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
e=e||[],function(e){if(!Array.isArray(e))throw new Error("`cards` must be passed as an array")
for(let t=0;t<e.length;t++){let r=e[t]
if(r.type!==gs)throw new Error(`Card "${r.name}" must be type "text", was "${r.type}"`)
if(!r.render)throw new Error(`Card "${r.name}" must define \`render\``)}}(e),t=t||[],function(e){if(!Array.isArray(e))throw new Error("`atoms` must be passed as an array")
for(let t=0;t<e.length;t++){let r=e[t]
if(r.type!==gs)throw new Error(`Atom "${r.name}" must be type "text", was "${r.type}"`)
if(!r.render)throw new Error(`Atom "${r.name}" must define \`render\``)}}(t),r=r||{},this.state={cards:e,atoms:t,cardOptions:r,unknownCardHandler:s,unknownAtomHandler:i}}render(e){let{version:t}=e
switch(t){case _s:return new Cs(e,this.state).render()
case void 0:case null:case bs:case vs:case Ss:return new Es(e,this.state).render()
default:throw new Error(`Unexpected Mobiledoc version "${t}"`)}}}class ys{constructor(e,t){this.type=e,this.manager=t}isEnabled(){return this.manager.isEnabled(this.type)}log(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
t.unshift(`[${this.type}]`),this.isEnabled()&&window.console.log(...t)}}class ws{constructor(){this.enabledTypes=[],this.allEnabled=!1}for(e){return new ys(e,this)}enableAll(){this.allEnabled=!0}enableTypes(e){this.enabledTypes=this.enabledTypes.concat(e)}disable(){this.enabledTypes=[],this.allEnabled=!1}isEnabled(e){return this.allEnabled||-1!==this.enabledTypes.indexOf(e)}}const Ms={placeholder:"Write here...",spellcheck:!0,autofocus:!0,showLinkTooltips:!0,undoDepth:5,undoBlockTimeout:5e3,cards:[],atoms:[],cardOptions:{},unknownCardHandler:e=>{let{env:t}=e
throw new E(`Unknown card encountered: ${t.name}`)},unknownAtomHandler:e=>{let{env:t}=e
throw new E(`Unknown atom encountered: ${t.name}`)},mobiledoc:null,html:null,tooltipPlugin:de},Ns={DID_UPDATE:"didUpdate",WILL_RENDER:"willRender",DID_RENDER:"didRender",WILL_DELETE:"willDelete",DID_DELETE:"didDelete",WILL_HANDLE_NEWLINE:"willHandleNewline",CURSOR_DID_CHANGE:"cursorDidChange",DID_REPARSE:"didReparse",POST_DID_CHANGE:"postDidChange",INPUT_MODE_DID_CHANGE:"inputModeDidChange",WILL_COPY:"willCopy",WILL_PASTE:"willPaste"}
var Ts,Rs
!function(e){e.MOBILEDOC="mobiledoc",e.HTML="html",e.TEXT="text"}(Ts||(Ts={})),function(e){e.CHAR="char",e.WORD="word"}(Rs||(Rs={}))
class Is{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
A("editor create accepts an options object. For legacy usage passing an element for the first argument, consider the `html` option for loading DOM or HTML posts. For other cases call `editor.render(domNode)` after editor creation",e&&!e.nodeType),this._views=[],this.isEditable=!0,this._parserPlugins=e.parserPlugins||[],function(e,t,r){Object.assign(e,t,r)}(this,Ms,e),this.cards.push(Ve),gr.forEach((e=>this.registerKeyCommand(e))),this._logManager=new ws,this._parser=new er(this.builder)
let{cards:t,atoms:r,unknownCardHandler:s,unknownAtomHandler:i,cardOptions:n}=this
this._renderer=new Ft(this,t,r,s,i,n),this.post=this.loadPost(),this._renderTree=new nr(this.post),this._editHistory=new Er(this,this.undoDepth,this.undoBlockTimeout),this._eventManager=new Kr(this),this._mutationHandler=new Cr(this),this._editState=new Wr(this),this._callbacks=new ce(p(Ns)),this._beforeHooks={toggleMarkup:[]},this._isComposingOnBlankLine=!1,pr.forEach((e=>this.onTextInput(e))),this.hasRendered=!1,this.isDestroyed=!1}enableLogging(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
0===e.length?this._logManager.enableAll():this._logManager.enableTypes(e)}disableLogging(){this._logManager.disable()}loggerFor(e){return this._logManager.for(e)}get builder(){return this._builder||(this._builder=new cr),this._builder}loadPost(){let{mobiledoc:e,html:t}=this
if(e)return gt.parse(this.builder,e)
if(t){if("string"==typeof t){let e={plugins:this._parserPlugins}
return new tr(this.builder,e).parse(t)}{let e=t
return this._parser.parse(e)}}return this.builder.createPost([this.builder.createMarkupSection()])}rerender(){let e=this.post.renderNode
e.element||(A("Must call `render` before `rerender` can be called",this.hasRendered),e.element=this.element,e.markDirty()),this.runCallbacks(Ns.WILL_RENDER),this._mutationHandler.suspendObservation((()=>{this._renderer.render(this._renderTree)})),this.runCallbacks(Ns.DID_RENDER)}render(e){A("Cannot render an editor twice. Use `rerender` to update the rendering of an existing editor instance.",!this.hasRendered),e.spellcheck=this.spellcheck,function(e){for(;e.childNodes.length;)e.removeChild(e.childNodes[0])}(e),this.element=e,this.showLinkTooltips&&this._addTooltip(),this.run((()=>{})),this.hasRendered=!0,this.rerender(),this._mutationHandler.init(),this._eventManager.init(),!1===this.isEditable?this.disableEditing():this.enableEditing(),this.autofocus&&this.selectRange(this.post.headPosition())}_addTooltip(){this.addView(new he({rootElement:this.element,showForTag:"a",editor:this}))}get keyCommands(){return this._keyCommands||(this._keyCommands=[]),this._keyCommands}registerKeyCommand(e){const t=function(e){if(function(e){return void 0===e.str}(e))return e
A("[deprecation] Key commands no longer use the `modifier` property",!e.modifier)
let{str:t,run:r,name:s}=e,[i,...n]=t.split("+").reverse()
return{name:s,run:r,modifierMask:(a=n,l(a,((e,t)=>{let r=O[t.toUpperCase()]
return A(`No modifier named "${t}" found`,!!r),e+r}),0)),code:_r(i)}
var a}(e)
A("Key Command is not valid",function(e){return!!e.code&&!!e.run}(t)),this.keyCommands.unshift(t)}unregisterKeyCommands(e){for(let t=this.keyCommands.length-1;t>-1;t--)this.keyCommands[t].name===e&&this.keyCommands.splice(t,1)}deleteAtPosition(e,t,r){let{unit:s}=r
this.run((r=>{let i=r.deleteAtPosition(e,t,{unit:s})
r.setRange(i)}))}deleteRange(e){this.run((t=>{let r=t.deleteRange(e)
t.setRange(r)}))}performDelete(){let{direction:e,unit:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{direction:x.BACKWARD,unit:Rs.CHAR}
const{range:r}=this
this.runCallbacks(Ns.WILL_DELETE,[r,e,t]),r.isCollapsed?this.deleteAtPosition(r.head,e,{unit:t}):this.deleteRange(r),this.runCallbacks(Ns.DID_DELETE,[r,e,t])}handleNewline(e){if(!this.hasCursor())return
e.preventDefault()
let{range:t}=this
this.run((e=>{let r
if(!t.isCollapsed&&(r=e.deleteRange(t).section,r&&r.isBlank))return void e.setRange(r.headPosition())
let s=!1
const i={preventDefault(){s=!0}}
this.runCallbacks(Ns.WILL_HANDLE_NEWLINE,[i]),s||(r=e.splitSection(t.head)[1],e.setRange(r.headPosition()))}))}_postDidChange(){this.runCallbacks(Ns.POST_DID_CHANGE)}selectRange(e){e=ke(e),this.cursor.selectRange(e),this.range=e}get cursor(){return new ge(this)}get range(){return this._editState.range}set range(e){this._editState.updateRange(e),this._editState.rangeDidChange()&&this._rangeDidChange(),this._editState.inputModeDidChange()&&this._inputModeDidChange()}_readRangeFromDOM(){this.range=this.cursor.offsets}setPlaceholder(e){!function(e,t,r){if(!e.dataset){const s=t.replace(/[A-Z]/g,((e,t)=>{const r=e.toLowerCase()
return 0===t?r:"-"+r}))
return e.setAttribute(s,r)}e.dataset[t]=r}(this.element,"placeholder",e)}_reparsePost(){let e=this._parser.parse(this.element)
this.run((t=>{t.removeAllSections(),t.migrateSectionsFromPost(e),t.setRange(W.blankRange())})),this.runCallbacks(Ns.DID_REPARSE),this._postDidChange()}_reparseSections(){let e;(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((e=>{this._parser.reparseSection(e,this._renderTree)})),this._removeDetachedSections(),this._renderTree.isDirty&&(e=this.range)
const t=this._editHistory._pendingSnapshot,r=t.range
this.run((()=>{t.range=r})),this.rerender(),e&&this.selectRange(e),this.runCallbacks(Ns.DID_REPARSE),this._postDidChange()}_removeDetachedSections(){n(a(this.post.sections,(e=>!e.renderNode.isAttached())),(e=>e.renderNode.scheduleForRemoval()))}get activeSections(){return this._editState.activeSections}get activeSection(){const{activeSections:e}=this
return e[e.length-1]}get activeSectionAttributes(){return this._editState.activeSectionAttributes}detectMarkupInRange(e,t){return s(this.post.markupsInRange(e),(e=>e.hasTag(t)))}get activeMarkups(){return this._editState.activeMarkups}hasActiveMarkup(e){let t
if("string"==typeof e){let r=b(e)
t=e=>e.tagName===r}else t=t=>t===e
return!!s(this.activeMarkups,t)}serialize(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ar
return this.serializePost(this.post,Ts.MOBILEDOC,{version:e})}serializeTo(e){let t=this.post
return this.serializePost(t,e)}serializePost(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(A(`Unrecognized serialization format ${t}`,u(Object.values(Ts),t)),t===Ts.MOBILEDOC){let t=r.version||ar
return or.render(e,t)}{let s=this.serializePost(e,Ts.MOBILEDOC),i={unknownCardHandler:()=>{},unknownAtomHandler:()=>{}}
switch(t){case Ts.HTML:return"undefined"!=typeof document?`<div>${function(e){const t=document.createElement("div")
return t.appendChild(e),t.innerHTML}(new fs(i).render(s).result)}</div>`:this.serializePost(e,Ts.TEXT,r)
case Ts.TEXT:return new As(i).render(s).result}}}addView(e){this._views.push(e)}removeAllViews(){this._views.forEach((e=>e.destroy())),this._views=[]}hasCursor(){return this.cursor.hasCursor()}destroy(){this.isDestroyed=!0,this._hasSelection()&&this.cursor.clearSelection(),this._hasFocus()&&this.element.blur(),this._mutationHandler.destroy(),this._eventManager.destroy(),this.removeAllViews(),this._renderer.destroy(),this._editState.destroy()}disableEditing(){this.isEditable=!1,this.hasRendered&&(this._eventManager.stop(),this.element.setAttribute("contentEditable","false"),this.setPlaceholder(""),this.selectRange(W.blankRange()))}enableEditing(){this.isEditable=!0,this.hasRendered&&(this._eventManager.start(),this.element.setAttribute("contentEditable","true"),this.setPlaceholder(this.placeholder))}editCard(e){this._setCardMode(e,J.EDIT)}displayCard(e){this._setCardMode(e,J.DISPLAY)}run(e){const t=new Ge(this)
t.begin(),this._editHistory.snapshot()
const r=e(t)
return this.runCallbacks(Ns.DID_UPDATE,[t]),t.complete(),this._readRangeFromDOM(),t._shouldCancelSnapshot&&(this._editHistory._pendingSnapshot=null),this._editHistory.storeSnapshot(t.editActionTaken),r}didUpdatePost(e){this.addCallback(Ns.DID_UPDATE,e)}postDidChange(e){this.addCallback(Ns.POST_DID_CHANGE,e)}onTextInput(e){this._eventManager.registerInputHandler(e)}unregisterAllTextInputHandlers(){this._eventManager.unregisterAllTextInputHandlers()}unregisterTextInputHandler(e){this._eventManager.unregisterInputHandler(e)}inputModeDidChange(e){this.addCallback(Ns.INPUT_MODE_DID_CHANGE,e)}willRender(e){this.addCallback(Ns.WILL_RENDER,e)}didRender(e){this.addCallback(Ns.DID_RENDER,e)}willCopy(e){this.addCallback(Ns.WILL_COPY,e)}willPaste(e){this.addCallback(Ns.WILL_PASTE,e)}willDelete(e){this.addCallback(Ns.WILL_DELETE,e)}didDelete(e){this.addCallback(Ns.DID_DELETE,e)}willHandleNewline(e){this.addCallback(Ns.WILL_HANDLE_NEWLINE,e)}cursorDidChange(e){this.addCallback(Ns.CURSOR_DID_CHANGE,e)}_rangeDidChange(){this.hasRendered&&this.runCallbacks(Ns.CURSOR_DID_CHANGE)}_inputModeDidChange(){this.runCallbacks(Ns.INPUT_MODE_DID_CHANGE)}_insertEmptyMarkupSectionAtCursor(){this.run((e=>{const t=e.builder.createMarkupSection("p")
e.insertSectionBefore(this.post.sections,t),e.setRange(t.toRange())}))}beforeToggleMarkup(e){this._beforeHooks.toggleMarkup.push(e)}toggleMarkup(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const r=this.builder.createMarkup(e,t),{range:s}=this,i=!this.detectMarkupInRange(s,r.tagName)
this._runBeforeHooks("toggleMarkup",{markup:r,range:s,willAdd:i})||(s.isCollapsed?(this._editState.toggleMarkupState(r),this._inputModeDidChange(),this._ensureFocus()):this.run((e=>e.toggleMarkup(r,s))))}_ensureFocus(){this._hasSelection()&&!this._hasFocus()&&this.focus()}focus(){this.element.focus()}_hasSelection(){const{cursor:e}=this
return this.hasRendered&&(e._hasCollapsedSelection()||e._hasSelection())}_hasFocus(){return document.activeElement===this.element}toggleSection(e){this.run((t=>t.toggleSection(e,this.range)))}setAttribute(e,t){this.run((r=>r.setAttribute(e,t,this.range)))}removeAttribute(e){this.run((t=>t.removeAttribute(e,this.range)))}handleKeyCommand(e){const t=function(e,t){const r=H.fromEvent(t)
return a(e,(e=>{let{modifierMask:t,code:s}=e
return r.keyCode===s&&r.modifierMask===t}))}(this.keyCommands,e)
for(let r=0;r<t.length;r++)if(!1!==t[r].run(this))return e.preventDefault(),!0
return!1}insertText(e){if(!this.hasCursor())return
this.post.isBlank&&this._insertEmptyMarkupSectionAtCursor()
let{activeMarkups:t,range:r,range:{head:s}}=this
this.run((i=>{r.isCollapsed||(s=i.deleteRange(r)),i.insertTextWithMarkup(s,e,t)}))}insertAtom(e){let t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(!this.hasCursor())return
this.post.isBlank&&this._insertEmptyMarkupSectionAtCursor()
let{range:i}=this
return this.run((n=>{let a=i.head
t=n.builder.createAtom(e,r,s),i.isCollapsed||(a=n.deleteRange(i)),n.insertMarkers(a,[t])})),t}insertCard(e){let t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
if(!this.hasCursor())return
this.post.isBlank&&this._insertEmptyMarkupSectionAtCursor()
let{range:i}=this
return this.run((n=>{let a=i.tail
t=n.builder.createCardSection(e,r),s&&this.editCard(t),i.isCollapsed||(a=n.deleteRange(i))
let o=a.section
if(z(o)&&(o=o.parent),o.isBlank)n.replaceSection(o,t)
else{let e=this.post.sections
n.insertSectionBefore(e,t,o.next)}n.setRange(t.tailPosition())})),t}positionAtPoint(e,t){return ne.atPoint(e,t,this)}_setCardMode(e,t){const r=e.renderNode
r&&r.isRendered?r.cardNode[t]():e.setInitialMode(t)}triggerEvent(e,t,r){this._eventManager._trigger(e,t,r)}addCallback(e,t){this._callbacks.addCallback(e,t)}addCallbackOnce(e,t){this._callbacks.addCallbackOnce(e,t)}runCallbacks(e,t){this.isDestroyed||this._callbacks.runCallbacks(e,t)}_runBeforeHooks(e){let t=this._beforeHooks[e]||[]
for(var r=arguments.length,s=new Array(r>1?r-1:0),i=1;i<r;i++)s[i-1]=arguments[i]
for(let n=0;n<t.length;n++)if(!1===t[n](...s))return!0}}}}])
