(this["webpackJsonpaem-demo-app"]=this["webpackJsonpaem-demo-app"]||[]).push([[0],{204:function(t,e,n){t.exports=n(473)},470:function(t,e,n){},471:function(t,e,n){},472:function(t,e,n){},473:function(t,e,n){"use strict";n.r(e);n(205),n(399),n(448);var a=n(59),r=n(39),c=n(3),o=n.n(c),i=n(199),s=n(474),p=n(48),u=n(49),h=n(51),l=n(50),m=n(43),O=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,this.childComponents,this.childPages)}}]),n}(m.Page),d=Object(m.withModel)(O),b=n(202),j=n(58);n(470);var f,v,y=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"containerProps",get:function(){var t=Object(b.a)(Object(j.a)(n.prototype),"containerProps",this);return t.className=(t.className||"")+" page "+(this.props.cssClassNames||""),t}}]),n}(m.Page),P=(Object(m.MapTo)("aem-demo-app/components/page")(Object(m.withComponentMappingContext)((f=y,function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props.cqPath;return e?(v=v||"html",o.a.createElement(s.a,{key:e,exact:!0,path:"(.*)"+e+"(."+v+")?",render:function(e){return o.a.createElement(f,Object.assign({},t.props,e))}})):o.a.createElement(f,this.props)}}]),n}(c.Component)))),n(201)),C=n.n(P);n(471);var g=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return this.props.richText?this.richTextContent:this.textContent}},{key:"richTextContent",get:function(){return o.a.createElement("div",{id:(t=this.props.cqPath,t&&t.replace(/\/|:/g,"_")),"data-rte-editelement":!0,dangerouslySetInnerHTML:{__html:C.a.sanitize(this.props.text)}});var t}},{key:"textContent",get:function(){return o.a.createElement("div",null,this.props.text)}}]),n}(c.Component);Object(m.MapTo)("aem-demo-app/components/text")(g,{emptyLabel:"Text",isEmpty:function(t){return!t||!t.text||t.text.trim().length<1}}),n(472);document.addEventListener("DOMContentLoaded",(function(){a.ModelManager.initialize().then((function(t){var e=Object(r.a)();Object(i.render)(o.a.createElement(s.b,{history:e},o.a.createElement(d,{history:e,cqChildren:t[a.Constants.CHILDREN_PROP],cqItems:t[a.Constants.ITEMS_PROP],cqItemsOrder:t[a.Constants.ITEMS_ORDER_PROP],cqPath:t[a.Constants.PATH_PROP],locationPathname:window.location.pathname})),document.getElementById("spa-root"))}))}))}},[[204,1,2]]]);
//# sourceMappingURL=main.efb2f0fb.chunk.js.map