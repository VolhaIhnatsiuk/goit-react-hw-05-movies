"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[964],{11:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(689),a=r(87),s="MoviesListItems_link__kD6ZF",o=r(184),i=function(e){var t=e.movies,r=(0,n.TH)();return(0,o.jsx)(o.Fragment,{children:t.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"/".concat(e.id),state:{from:r},className:s,children:e.title})},e.id)}))})}},964:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(861),a=r(439),s=r(757),o=r.n(s),i=r(73),u=r(791),l=r(87),c=r(920),m=r(597),h=r(11),f=r(705),p={form:"SearchForm_form__o80os",label:"SearchForm_label__GvSVH",input:"SearchForm_input__HOxJo",button:"SearchForm_button__UXY06"},b=r(184),d=function(e){var t=e.onSubmit;return(0,b.jsx)(f.J9,{initialValues:{query:""},onSubmit:function(e,r){var n=r.resetForm;t(e.query.trim()),n()},children:(0,b.jsxs)(f.l0,{className:p.form,autoComplete:"off",children:[(0,b.jsx)("label",{className:p.label,htmlFor:"keyword",children:(0,b.jsx)(f.gN,{className:p.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"query"})}),(0,b.jsx)("button",{type:"submit",className:p.button,children:(0,b.jsx)("span",{className:p.buttonLabel,children:"Search"})})]})})},x="Movies_list__hqYjd",_=function(){var e,t=(0,l.lr)(),r=(0,a.Z)(t,2),s=r[0],f=r[1],p=(0,u.useState)([]),_=(0,a.Z)(p,2),v=_[0],j=_[1],S=(0,u.useState)(!1),k=(0,a.Z)(S,2),g=k[0],w=k[1],y=(0,u.useState)(!1),F=(0,a.Z)(y,2),N=F[0],Z=F[1],q=null!==(e=s.get("query"))&&void 0!==e?e:"";return(0,u.useEffect)((function(){function e(){return(e=(0,n.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j([]),w(!0),Z(!1),e.prev=3,e.next=6,(0,m.Ht)(q);case 6:if(0!==(t=e.sent).results.length){e.next=9;break}return e.abrupt("return",i.ZP.error("Sorry, there are no movies. Try again"));case 9:j(t.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),Z(!0);case 15:return e.prev=15,w(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[3,12,15,18]])})))).apply(this,arguments)}""!==q&&function(){e.apply(this,arguments)}()}),[q]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d,{onSubmit:function(e){f(""!==e?{query:e}:{})}}),g&&(0,b.jsx)(c.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]}),(0,b.jsx)("ul",{className:x,children:0!==v.length&&(0,b.jsx)(h.Z,{movies:v})}),N&&(0,b.jsx)("span",{children:"Something went wrong!"}),(0,b.jsx)(i.x7,{position:"top-right"})]})}}}]);
//# sourceMappingURL=964.ffaafd63.chunk.js.map