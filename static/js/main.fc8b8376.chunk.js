(this.webpackJsonpsoap=this.webpackJsonpsoap||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return o}));var r=n(130),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"3c81fd9e-287b-43e8-9969-1552db318957"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),u.getProfile(e)}},u={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},o={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},126:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(36),a=n(5),c={messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"}],dialogs:[{id:1,name:"Yana"},{id:2,name:"Olya"},{id:3,name:"Sveta"},{id:4,name:"Vasya"},{id:5,name:"Sasha"}]},u=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:n}])});default:return e}}},129:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return b})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return g})),n.d(t,"f",(function(){return E}));var r=n(8),a=n.n(r),c=n(13),u=n(36),o=n(5),i=n(12),s=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(o.a)(Object(o.a)({},e),r):e}))},l={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},f=function(e){return{type:"FOLLOW",userId:e}},d=function(e){return{type:"UNFOLLOW",userId:e}},p=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},m=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},b=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},h=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(m(!0)),r(p(e)),n.next=4,i.c.getUsers(e,t);case 4:c=n.sent,r(m(!1)),r({type:"SET_USERS",users:c.items}),r({type:"SET_TOTAL_USERS_COUNT",count:c.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(c(n)),t(b(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v(n,e,i.c.follow.bind(i.c),f);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v(n,e,i.c.unfollow.bind(i.c),d);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:s(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:s(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(u.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}}},133:function(e,t,n){e.exports=n.p+"static/media/preloader.208ba494.svg"},160:function(e,t,n){e.exports=n(285)},165:function(e,t,n){},18:function(e,t,n){e.exports={nav:"Navbar_nav__2BDtF",item:"Navbar_item__4ZwcX",active:"Navbar_active__2ZSPY"}},285:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);n(95),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(63),u=n.n(c),o=n(50),i=n(51),s=n(53),l=n(52),f=(n(165),n(18)),d=n.n(f),p=n(20),m=function(){return a.a.createElement("nav",{className:d.a.nav},a.a.createElement("ul",{className:d.a.nav_list},a.a.createElement("li",{className:d.a.item},a.a.createElement(p.b,{to:"/profile",activeClassName:d.a.active},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),a.a.createElement("li",{className:d.a.item},a.a.createElement(p.b,{to:"/about",activeClassName:d.a.active},"\u041e \u041d\u0430\u0441")),a.a.createElement("li",{className:d.a.item},a.a.createElement(p.b,{to:"/contacts",activeClassName:d.a.active},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b")),a.a.createElement("li",{className:d.a.item},a.a.createElement(p.b,{to:"/dialogs",activeClassName:d.a.active},"\u0427\u0430\u0442")),a.a.createElement("li",{className:d.a.item},a.a.createElement(p.b,{to:"/users",activeClassName:d.a.active},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"))))},b=n(5),h=n(8),v=n.n(h),g=n(13),E=n(12),O=n(29),_="organic-soap/auth/SET_USER_DATA",j={userId:null,email:null,login:null,isAuth:!1},S=function(e,t,n,r){return{type:_,payload:{userId:e,email:t,login:n,isAuth:r}}},w=function(){return function(){var e=Object(g.a)(v.a.mark((function e(t){var n,r,a,c,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,u=r.email,t(S(a,u,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(b.a)(Object(b.a)({},e),t.payload);default:return e}},C={initialized:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{initialized:!0});default:return e}},P=n(10),I=n(88),N=n.n(I),x=function(e){return a.a.createElement("header",{className:N.a.header},a.a.createElement("h2",null,"Organic Soap by YS"),a.a.createElement("div",{className:N.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," -",a.a.createElement("button",{onClick:e.logout},"Log out")):a.a.createElement(p.b,{to:"/login"},"login")))},k=n(19),L=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(x,this.props)}}]),n}(a.a.Component),A=Object(k.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.logout();case 2:0===e.sent.data.resultCode&&t(S(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(L),U=n(127),F=n(32),G=n(81),R=n(43),D=n.n(R),z=Object(U.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(F.c)("Email","email",[G.b],F.a),Object(F.c)("Password","password",[G.b],F.a,{type:"password"}),Object(F.c)(null,"rememberMe",[],F.a,{type:"checkbox"},"remember me"),n&&a.a.createElement("div",{className:D.a.formError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),M=Object(k.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(g.a)(v.a.mark((function r(a){var c,u;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,E.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(w()):(u=c.data.messages.length>0?c.data.messages[0]:"Some error",a(Object(O.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(P.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(z,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),B=n(9),H=n(62),W=n(92),Y=n(126),V=n(129),Z=n(134),J=n(128),X=Object(B.c)({profilePage:W.b,dialogsPage:Y.a,usersPage:V.a,auth:y,form:J.a,app:T}),q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.d,K=Object(B.e)(X,q(Object(B.a)(Z.a)));window.__store__=K;var $=K,Q=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(H.a,null)},a.a.createElement(e,t))}},ee=a.a.lazy((function(){return n.e(5).then(n.bind(null,301))})),te=a.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),ne=a.a.lazy((function(){return n.e(4).then(n.bind(null,300))})),re=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(A,null),a.a.createElement(m,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(P.b,{path:"/dialogs",render:Q(ee)}),a.a.createElement(P.b,{path:"/profile/:userId?",render:Q(te)}),a.a.createElement(P.b,{path:"/users",render:Q(ne)}),a.a.createElement(P.b,{path:"/login",render:function(){return a.a.createElement(M,null)}}))):a.a.createElement(H.a,null)}}]),n}(r.Component),ae=Object(B.d)(P.f,Object(k.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(w());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(re),ce=function(e){return a.a.createElement(p.a,null,a.a.createElement(k.a,{store:$},a.a.createElement(ae,null)))};u.a.render(a.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return d}));var r=n(85),a=n(0),c=n.n(a),u=n(43),o=n.n(u),i=n(84),s=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,u=n&&r;return c.a.createElement("div",{className:o.a.formControl+" "+(u?o.a.error:"")},c.a.createElement("div",null,a),u&&c.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return c.a.createElement(s,e,c.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return c.a.createElement(s,e,c.a.createElement("input",Object.assign({},t,n)))},d=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a)),u)}},43:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3JSLG",error:"FormsControls_error__mne_m",formError:"FormsControls_formError__15Lwo"}},62:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(133),u=n.n(c);t.a=function(e){return a.a.createElement("img",{src:u.a})}},81:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max Length ".concat(e," symbols")}}},88:function(e,t,n){e.exports={header:"Header_header__9SxPT",loginBlock:"Header_loginBlock__2ncfA"}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return b})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return v}));var r=n(8),a=n.n(r),c=n(13),u=n(36),o=n(5),i=n(12),s=n(29),l={posts:[{id:1,message:"\u044d\u0442\u043e \u043c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442",likesCount:20},{id:2,message:"\u044d\u0442\u043e \u043c\u043e\u0439 \u0432\u0442\u043e\u0440\u043e\u0439 \u043f\u043e\u0441\u0442",likesCount:33}],profile:null,status:""},f=function(e){return{type:"ADD-POST",newPostText:e}},d=function(e){return{type:"SET_STATUS",status:e}},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(d(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,i.b.saveProfile(e);case 3:if(0!==(u=t.sent).data.resultCode){t.next=8;break}n(p(c)),t.next=10;break;case 8:return n(Object(s.a)("edit-profile",{_error:u.data.messages[0]})),t.abrupt("return",Promise.reject(u.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:3,message:t.newPostText,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[n]),newPostText:""});case"SET_STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case"SET_USER_PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case"SAVE_PHOTO_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}},95:function(e,t,n){}},[[160,1,2]]]);
//# sourceMappingURL=main.fc8b8376.chunk.js.map