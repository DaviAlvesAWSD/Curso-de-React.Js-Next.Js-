(this.webpackJsonpprojeto1=this.webpackJsonpprojeto1||[]).push([[0],{19:function(e,t,s){},21:function(e,t,s){},22:function(e,t,s){},23:function(e,t,s){},25:function(e,t,s){},26:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(12),r=s.n(c),o=(s(19),s(13)),i=s(2),l=s.n(i),u=s(8),p=s(3),h=s(4),j=s(6),d=s(5),b=(s(21),s(22),s(23),s(0)),f=function(e){var t=e.title,s=e.body,n=(e.id,e.cover);return Object(b.jsxs)("div",{className:"post",children:[Object(b.jsx)("img",{src:n,alt:t}),Object(b.jsxs)("div",{className:"post-content",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:s})]})]})},O=function(e){var t=e.posts;return Object(b.jsx)("div",{className:"posts",children:t.map((function(e){return Object(b.jsx)(f,{title:e.title,body:e.body,id:e.id,cover:e.cover},e.id)}))})},v=s(11),x=s(14),m=function(){var e=Object(u.a)(l.a.mark((function e(){var t,s,n,a,c,r,o,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=fetch("https://jsonplaceholder.typicode.com/posts"),s=fetch("https://jsonplaceholder.typicode.com/photos"),e.next=4,Promise.all([t,s]);case 4:return n=e.sent,a=Object(x.a)(n,2),c=a[0],r=a[1],e.next=10,c.json();case 10:return o=e.sent,e.next=13,r.json();case 13:return i=e.sent,u=o.map((function(e,t){return Object(v.a)(Object(v.a)({},e),{},{cover:i[t].url})})),e.abrupt("return",u);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=(s(25),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(p.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){var e=this.props,t=e.text,s=e.onClick,n=e.disabled;return Object(b.jsx)("button",{disabled:n,className:"buttonMore",onClick:s,children:t})}}]),s}(n.Component)),P=(s(26),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(p.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){var e=this.props,t=e.text,s=e.disabled,n=e.onClick;return Object(b.jsx)("button",{disabled:s,className:"buttonLess",onClick:n,children:t})}}]),s}(n.Component)),y=(s(27),function(e){var t=e.searchValue,s=e.handleChange;return Object(b.jsx)("input",{className:"search",onChange:s,value:t,type:"search",placeholder:"Type your search"})}),C=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(p.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={posts:[],allPosts:[],page:0,postsPerPage:2,searchValue:""},e.loadPosts=Object(u.a)(l.a.mark((function t(){var s,n,a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.state,n=s.page,a=s.postsPerPage,t.next=3,m();case 3:c=t.sent,e.setState({posts:c.slice(n,a),allPosts:c});case 5:case"end":return t.stop()}}),t)}))),e.loadMorePosts=function(){var t=e.state,s=t.page,n=t.postsPerPage,a=t.allPosts,c=t.posts,r=s+n,i=a.slice(r,r+n);c.push.apply(c,Object(o.a)(i)),e.setState({posts:c,page:r})},e.loadLessPosts=function(){var t=e.state,s=t.page,n=t.postsPerPage,a=t.posts,c=s-n;a.splice(c,2),e.setState({posts:a,page:c})},e.handleChange=function(t){var s=t.target.value;e.setState({searchValue:s})},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadPosts();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.posts,s=e.page,n=e.postsPerPage,a=e.allPosts,c=e.searchValue,r=s+n>=a.length,o=s<n,i=c?a.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())})):t;return Object(b.jsxs)("section",{className:"container",children:[Object(b.jsxs)("div",{className:"search-container",children:[!!c&&Object(b.jsx)("h1",{children:c}),Object(b.jsx)(y,{searchValue:c,handleChange:this.handleChange})]}),i.length>0&&Object(b.jsx)(O,{posts:i}),0===i.length&&Object(b.jsx)("p",{children:"Search not found"}),Object(b.jsxs)("ul",{className:"buttons",children:[Object(b.jsx)("div",{className:"button-container",children:!c&&Object(b.jsx)(P,{text:"Load less pages",onClick:this.loadLessPosts,disabled:o})}),Object(b.jsx)("div",{className:"button-container",children:!c&&Object(b.jsx)(g,{text:"Load more pages",onClick:this.loadMorePosts,disabled:r})})]})]})}}]),s}(n.Component);r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.c298d181.chunk.js.map