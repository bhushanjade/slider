(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{62:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return x});var n=t(42),r=t(43),l=t(14),s=t(15),c=t(17),m=t(16),o=t(18),u=t(0),i=t.n(u),d=t(63),h=t(64),p=t(65),E=t(66),w=t(67),g=t(68),b=t(69),f=t(70),C=t(71),j=t(72),O=t(45),S=t(6),k="shaadi",P="123",x=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(m.a)(a).call(this))).handleChange=function(a){e.setState(Object(r.a)({},Object(n.a)({},a.target.name,a.target.value)))},e.handleSubmit=function(a){e.state.username===k&&e.state.password===P?(localStorage.setItem("token",!0),e.setState({isAuthenticated:!0})):alert("Please Enter Correct Username & Password")},e.state={isAuthenticated:null!==localStorage.getItem("token"),username:null,password:null},e}return Object(o.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return this.state.isAuthenticated?i.a.createElement(S.a,{to:"/"}):i.a.createElement(d.a,{fluid:!1},i.a.createElement(h.a,null,i.a.createElement(p.a,{sm:"4",lg:"4",style:{margin:"20% auto",float:"none",marginBottom:"10px"}},i.a.createElement(E.a,{className:"text-md-center"},i.a.createElement(w.a,null,"Login"),i.a.createElement(g.a,null,i.a.createElement(b.a,null,i.a.createElement(f.a,{row:!0},i.a.createElement(C.a,{for:"exampleEmail",sm:4},"UserName"),i.a.createElement(p.a,{sm:8},i.a.createElement(j.a,{type:"text",name:"username",id:"userName",placeholder:"Please enter username",onChange:this.handleChange}))),i.a.createElement(f.a,{row:!0},i.a.createElement(C.a,{for:"examplePassword",sm:4},"Password"),i.a.createElement(p.a,{sm:8},i.a.createElement(j.a,{type:"password",name:"password",id:"password",placeholder:"Please enter password",onChange:this.handleChange}))),i.a.createElement(O.a,{onClick:this.handleSubmit},"Submit")))))))}}]),a}(i.a.Component)}}]);
//# sourceMappingURL=8.a09dd49a.chunk.js.map