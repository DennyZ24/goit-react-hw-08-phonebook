"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[35],{5035:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(885),a=n(2791),s="Section_container__vEvWA",i=n(3329);function o(e){var t=e.title,n=e.children;return(0,i.jsxs)("section",{className:s,children:[(0,i.jsx)("h2",{children:t}),n]})}var c=n(2411),l=n(4039),u="ContactsList_list__mmE3Y",h="ContactItem_item__gxreB",d="ContactItem_button__IRFBz";function m(e){var t=e.contact,n=t.id,a=t.phone,s=t.name,o=(0,c.Nt)(),l=(0,r.Z)(o,2),u=l[0],m=l[1].isLoading;return(0,i.jsxs)("li",{className:h,children:[s,": ",a,(0,i.jsx)("button",{type:"button",className:d,onClick:function(){return u(n)},children:m?"Deliting...":"Delete"})]})}function p(e){var t=e.filter,n=(0,c.wY)(void 0,{selectFromResult:function(e){var n=e.data,r=e.isFetching;return{contacts:n&&n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})),isFetching:r}},refetchOnMountOrArgChange:!0}),r=n.contacts,a=n.isFetching;return(0,i.jsxs)(i.Fragment,{children:[r&&0===r.length&&(0,i.jsx)("p",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e "}),r&&(0,i.jsx)("ul",{className:u,children:r.map((function(e){return(0,i.jsx)(m,{contact:e},e.id)}))}),a&&(0,i.jsx)(l.iT,{color:"#00FFFF",height:40,width:40})]})}var g="Filter_input__N7T3z";function f(e){var t=e.filter,n=e.onFilterContact;return(0,i.jsxs)("label",{children:["Search contact",(0,i.jsx)("input",{className:g,type:"text",name:"filer",value:t,onChange:function(e){return n(e.target.value)}})]})}var _=n(5861),b=n(7757),x=n.n(b),v=n(8926),j="Phonebook_label__Qzztg",C="Phonebook_input__8yiEQ",k="Phonebook_button__QiRKB",F=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],s=t[1],o=(0,a.useState)(""),l=(0,r.Z)(o,2),u=l[0],h=l[1],d=(0,c.Tn)(),m=(0,r.Z)(d,1)[0],p=function(){var e=(0,_.Z)(x().mark((function e(t){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m({name:n,number:u});case 4:v.Am.success("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),v.Am.error(e.t0.message,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0});case 10:s(""),h("");case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":s(r);break;case"number":h(r);break;default:return}};return(0,i.jsxs)("form",{onSubmit:p,children:[(0,i.jsxs)("label",{className:j,children:["Name",(0,i.jsx)("input",{className:C,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:g})]}),(0,i.jsxs)("label",{children:["Number",(0,i.jsx)("input",{className:C,type:"tel",name:"number",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:g})]}),(0,i.jsx)("button",{type:"submit",className:k,children:"Add contact"})]})};function N(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],s=t[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{title:"Phonebook",children:(0,i.jsx)(F,{})}),(0,i.jsx)(o,{title:"Contacts",children:(0,i.jsx)(p,{filter:n})}),(0,i.jsx)(o,{children:(0,i.jsx)(f,{filterValue:n,onFilterContact:s})})]})}}}]);
//# sourceMappingURL=35.f5981c53.chunk.js.map