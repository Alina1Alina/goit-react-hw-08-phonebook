"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[453],{7009:function(n,e,r){r.d(e,{Dx:function(){return v},Fg:function(){return w},M5:function(){return g},Yb:function(){return h},k4:function(){return Z},l0:function(){return f},xv:function(){return m}});var t,o,a,i,d,c,s,u,p,l=r(168),x=r(7691),b=r(1087),h=x.ZP.div(t||(t=(0,l.Z)(["\n  background-color: #1976d2;\n  ","\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"])),""),f=x.ZP.form(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n"]))),m=x.ZP.p(a||(a=(0,l.Z)(["\n  font-size: 24px;\n  padding: 0;\n  margin: 0;\n  margin-bottom: 5px;\n  margin-top: 20px;\n  color: white;\n"]))),g=x.ZP.input(i||(i=(0,l.Z)(["\n  height: 25px;\n  width: 300px;\n  border: 1px solid #1976d2;\n  border-radius: 4px;\n"]))),Z=x.ZP.button(d||(d=(0,l.Z)(["\n  margin-top: 20px;\n  width: 120px;\n  padding: 8px 12px;\n  border-radius: 24px;\n  border: 1px solid white;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: white;\n  color: #1976d2;\n  cursor: pointer;\n  :hover,\n  :focus {\n    background-color: #1976d2;\n    color: white;\n  }\n"]))),v=x.ZP.h2(c||(c=(0,l.Z)(["\n  border-radius: 4px;\n  padding: 10px;\n  background-color: #1976d2;\n  color: white;\n  text-align: center;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),w=(x.ZP.label(s||(s=(0,l.Z)(["\n  background-color: #1976d2;\n  margin-left: auto;\n  margin-right: auto;\n"]))),x.ZP.input(u||(u=(0,l.Z)(["\n  height: 25px;\n  width: 300px;\n  border: 1px solid #1976d2;\n  border-radius: 4px;\n"]))),(0,x.ZP)(b.OL)(p||(p=(0,l.Z)(["\n  font-size: 14px;\n  color: #1976d2;\n"]))))},2453:function(n,e,r){r.r(e),r.d(e,{Contacts:function(){return A}});var t,o,a,i,d=r(9434),c=r(2169),s=r(7009),u=function(n){return n.contacts.contacts.items},p=function(n){return n.contacts.contacts.isLoading},l=function(n){return n.contacts.filter},x=r(184),b=function(){var n=(0,d.v9)(u),e=(0,d.I0)();return(0,x.jsx)(s.Yb,{children:(0,x.jsxs)(s.l0,{onSubmit:function(r){r.preventDefault();var t=r.target.elements,o=t.name,a=t.number;n.find((function(n){return n.name.toLowerCase()===o.value.toLowerCase()}))?alert("".concat(o.value," is already in contacts")):e((0,c.uK)({name:o.value,number:a.value})),o.value="",a.value=""},children:[(0,x.jsxs)("label",{children:[(0,x.jsx)(s.xv,{children:"Name"}),(0,x.jsx)(s.M5,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,x.jsxs)("label",{children:[(0,x.jsx)(s.xv,{children:"Number"}),(0,x.jsx)(s.M5,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,x.jsx)(s.k4,{type:"submit",children:"Add contact"})]})})},h=r(2791),f=r(168),m=r(7691),g=m.ZP.span(t||(t=(0,f.Z)(["\n  font-size: 24px;\n  color: gray;\n"]))),Z=m.ZP.button(o||(o=(0,f.Z)(["\n  background-color: #1976d2;\n  color: white;\n  padding: 6px 14px;\n  border-radius: 24px;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n  :hover,\n  :focus {\n    background-color: white;\n    color: #1976d2;\n    outline: 1px solid gray;\n  }\n"]))),v=m.ZP.ul(a||(a=(0,f.Z)(["\n  list-style: none;\n\n  padding: 0;\n"]))),w=m.ZP.li(i||(i=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid gray;\n  padding: 10px;\n  border-radius: 6px;\n  margin-bottom: 5px;\n"]))),j=r(8451),k=function(){var n=(0,d.v9)(u),e=(0,d.v9)(l),r=(0,d.v9)(p),t=(0,d.I0)();(0,h.useEffect)((function(){t((0,c.yF)())}),[t]);var o=n.filter((function(n){return n.name.toLowerCase().includes(e)}));return(0,x.jsxs)("div",{children:[r&&(0,x.jsx)(j.Z,{}),(null===o||void 0===o?void 0:o.length)>0&&(0,x.jsx)(v,{children:o.map((function(n){var e=n.id,r=n.name,o=n.number;return(0,x.jsxs)(w,{children:[(0,x.jsxs)(g,{children:[r,": ",o]}),(0,x.jsx)(Z,{onClick:function(){return function(n){return t((0,c.GK)(n))}(e)},type:"button",children:"Delete"})]},e)}))})]})},y=r(4554),P=r(4953),C=r(9365);function z(){var n=(0,d.I0)();return(0,x.jsx)(y.Z,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:(0,x.jsx)(P.Z,{onChange:function(e){n((0,C.WB)(e.currentTarget.value.toLowerCase()))},id:"standard-basic",label:"Find contacts by name",variant:"standard"})})}var A=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s.Dx,{children:"Phonebook"}),(0,x.jsx)(b,{}),(0,x.jsx)(z,{}),(0,x.jsx)(k,{})]})}}}]);
//# sourceMappingURL=453.1d4089ae.chunk.js.map