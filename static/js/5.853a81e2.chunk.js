(this.webpackJsonpsoap=this.webpackJsonpsoap||[]).push([[5],{287:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var n=t(50),s=t(51),i=t(53),o=t(52),r=t(0),l=t.n(r),c=t(19),u=t(10),m=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var a=function(a){Object(i.a)(r,a);var t=Object(o.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return this.props.isAuth?l.a.createElement(e,this.props):l.a.createElement(u.a,{to:"/login"})}}]),r}(l.a.Component);return Object(c.b)(m)(a)}},288:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__281WP",dialogsItems:"Dialogs_dialogsItems__1ouag",active:"Dialogs_active__1alHM",dialog:"Dialogs_dialog__3GlWE",messages:"Dialogs_messages__3wGaJ",message:"Dialogs_message__13J1F"}},301:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(126),o=t(288),r=t.n(o),l=t(20),c=function(e){var a="/dialogs/"+e.id;return s.a.createElement("li",{className:r.a.dialog+" "+r.a.active},s.a.createElement(l.b,{to:a},e.name))},u=function(e){return s.a.createElement("li",{className:r.a.message},e.message)},m=t(84),g=t(127),d=t(32),b=t(81),f=Object(b.a)(50),p=Object(g.a)({form:"dialogAddMessageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement(m.a,{component:d.b,validate:[b.b,f],name:"newMessageBody",placeholder:"Enter your message"}),s.a.createElement("button",null,"Send"))})),_=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return s.a.createElement(c,{key:e.id,name:e.name,id:e.id})})),n=a.messages.map((function(e){return s.a.createElement(u,{key:e.id,message:e.message,id:e.id})}));a.newMessageBody;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:r.a.dialogs},s.a.createElement("ul",{className:r.a.dialogsItems},t),s.a.createElement("ul",{className:r.a.messages},n)),s.a.createElement(p,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))},E=t(19),h=t(287),v=t(9);a.default=Object(v.d)(Object(E.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}})),h.a)(_)}}]);
//# sourceMappingURL=5.853a81e2.chunk.js.map