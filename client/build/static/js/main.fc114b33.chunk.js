(this["webpackJsonpreact-sample"]=this["webpackJsonpreact-sample"]||[]).push([[0],{201:function(e,a,t){e.exports=t.p+"static/media/LOGO.1be3401f.svg"},239:function(e,a,t){e.exports=t(372)},244:function(e,a,t){},246:function(e,a,t){},247:function(e,a,t){},369:function(e,a,t){},370:function(e,a,t){},371:function(e,a,t){},372:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),s=t.n(r),i=(t(244),t(37)),c=t(38),o=t(42),m=t(40),u=(t(245),t(246),t(53)),d=t(414),h=t(415),E=t(411),f=t(413),p=t(408),g=t(410),w=(t(247),t(57)),b=t(146),v=t(220),O=(t(10),t(404)),N=t(412),P=t(418),j=t(417),y=t(419),x=t(416),L=t(137),S=t.n(L),B=t(138),T=t.n(B),k=Object(O.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},margin:{margin:e.spacing(1)},withoutLabel:{marginTop:e.spacing(3)}}}));function F(e){k();var a,t=l.a.useState({password:"",showPassword:!1}),n=Object(v.a)(t,2),r=n[0],s=n[1];return l.a.createElement("div",null,l.a.createElement(x.a,{variant:"outlined",fullWidth:!0,onBlur:e.onBlur,onFocus:e.onFocus},l.a.createElement(j.a,{htmlFor:"outlined-adornment-password"},e.name||"Password"),l.a.createElement(P.a,{id:"outlined-adornment-password",type:r.showPassword?"text":"password",value:r.password,onChange:(a="password",function(e){s(Object(b.a)({},r,Object(u.a)({},a,e.target.value)))}),endAdornment:l.a.createElement(y.a,{position:"end"},l.a.createElement(N.a,{"aria-label":"toggle password visibility",onClick:function(){s(Object(b.a)({},r,{showPassword:!r.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end"},r.showPassword?l.a.createElement(S.a,null):l.a.createElement(T.a,null))),labelWidth:"Confirm Password"===e.name?120:70})))}var C=t(201),R=t.n(C);function A(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"logocontainer"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:R.a})),l.a.createElement("div",null,l.a.createElement("p",{className:"logo-heading"},"SENSEGRASS"))))}var I=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).handleClickShowPassword=function(){e.setState({showPassword:!e.state.showPassword})},e.handleMouseDownPassword=function(e){e.preventDefault()},e.handleChange=function(a){e.setState(Object(u.a)({},a.target.name,a.target.value))},e.handleSignup=function(){e.props.updateEmail(e.state.signupEmail),e.props.history.push("/signup")},e.handleEmailFocus=function(a){return e.emailLabel.current.innerText="Enter your Email address"},e.handleEmailBlur=function(a){return e.emailLabel.current.innerText=""},e.handlePasswordFocus=function(a){return e.passwordLabel.current.innerText="Enter your Password"},e.handleShowPassword=function(e){console.log(e.target)},e.handlePasswordBlur=function(a){return e.passwordLabel.current.innerText=""},e.state={signupEmail:"",showPassword:!1,password:""},e.emailLabel=Object(n.createRef)(null),e.passwordLabel=Object(n.createRef)(null),e.signupEmail=Object(n.createRef)(null),e}return Object(c.a)(t,[{key:"render",value:function(){return console.log(this.state),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-second"},l.a.createElement("div",{className:"formcontainer-second"},l.a.createElement(A,null),l.a.createElement(d.a,{textAlign:"center",style:{marginTop:"6rem"},verticalAlign:"middle",className:"padit"},l.a.createElement(d.a.Column,{style:{maxWidth:350}},l.a.createElement(h.a,{as:"h3",color:"grey",textAlign:"left"},"LOGIN TO SG ACCOUNT"),l.a.createElement(E.a,{size:"large"},l.a.createElement(g.a,{id:"outlined-multiline-flexible",label:"Email",variant:"outlined",onFocus:this.handleEmailFocus,onBlur:this.handleEmailBlur,fullWidth:!0,placeholder:"farmer@gmail.com"}),l.a.createElement("p",{ref:this.emailLabel,className:"label"}),l.a.createElement("div",{className:"password"},l.a.createElement(F,{onBlur:this.handlePasswordBlur,onFocus:this.handlePasswordFocus})),l.a.createElement("p",{ref:this.passwordLabel,className:"label"}),l.a.createElement("div",{className:"submit-div flex end"},l.a.createElement("span",null,"Forgot Password?"),l.a.createElement(f.a,{color:"green",fluid:!0,size:"large"},"LOGIN"))),l.a.createElement("div",{className:"m5"},l.a.createElement(h.a,{as:"h3",color:"grey",textAlign:"left"},"LET'S GET STARTED"),l.a.createElement("div",{className:"signup-div"},l.a.createElement(E.a,{size:"large"},l.a.createElement(E.a.Input,{fluid:!0,placeholder:"Enter Your Email ID",type:"email",value:this.state.signupEmail,onChange:this.handleChange,name:"signupEmail"}),l.a.createElement("div",{className:"checkbox-div"},l.a.createElement(p.a,{label:l.a.createElement("label",{className:"label-font"},'I agree with processing of my personal data in conformity with the Privacy Policy. When clicking on "Get Started", you also agree with the End User License Agreement.')})),l.a.createElement("div",{className:"flex end"},l.a.createElement(f.a,{fluid:!0,size:"large",onClick:this.handleSignup},"SIGN UP")))))))),l.a.createElement("div",{className:"imagesection"})))}}]),t}(n.Component),z=Object(w.f)(I),D=(t(369),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).handleChange=function(a){e.setState({signUpEmail:a.target.value})},e.handleBack=function(){e.props.history.goBack()},e.handleEmailFocus=function(a){return e.emailLabel.current.innerText="Enter your Email address"},e.handleEmailBlur=function(a){return e.emailLabel.current.innerText=""},e.handlePasswordFocus=function(a){return e.passwordLabel.current.innerText="Enter your Password"},e.handleShowPassword=function(e){console.log(e.target)},e.handlePasswordBlur=function(a){return e.passwordLabel.current.innerText=""},e.handleSetPasswordFocus=function(a){return e.setPasswordLabel.current.innerText="Confirm your Password"},e.handleSetPasswordBlur=function(a){return e.setPasswordLabel.current.innerText=""},e.emailLabel=Object(n.createRef)(null),e.passwordLabel=Object(n.createRef)(null),e.setPasswordLabel=Object(n.createRef)(null),e.state={signUpEmail:""},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({signUpEmail:this.props.email})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-second"},l.a.createElement("div",{className:"formcontainer-second"},l.a.createElement(A,null),l.a.createElement(d.a,{textAlign:"center",style:{marginTop:"6rem"},verticalAlign:"middle",className:"padit"},l.a.createElement(d.a.Column,{style:{maxWidth:350}},l.a.createElement(h.a,{as:"h3",color:"grey",textAlign:"left"},"ENTER YOUR DETAILS"),l.a.createElement(E.a,{size:"large"},l.a.createElement(g.a,{id:"outlined-multiline-flexible",label:"Email",variant:"outlined",onFocus:this.handleEmailFocus,onBlur:this.handleEmailBlur,fullWidth:!0,placeholder:"farmer@gmail.com"}),l.a.createElement("p",{ref:this.emailLabel,className:"label"}),l.a.createElement("div",{className:"password"},l.a.createElement(F,{onBlur:this.handlePasswordBlur,onFocus:this.handlePasswordFocus}),l.a.createElement("p",{ref:this.passwordLabel,className:"label"}),l.a.createElement(F,{onBlur:this.handleSetPasswordBlur,onFocus:this.handleSetPasswordFocus,name:"Confirm Password"})),l.a.createElement("p",{ref:this.setPasswordLabel,className:"label"}),l.a.createElement(E.a.Input,{fluid:!0,placeholder:"Phone number",className:"contact"}),l.a.createElement("div",{className:"submit-div flex end"},l.a.createElement(f.a,{fluid:!0,size:"large",className:"white",onClick:this.handleBack},"Back"),l.a.createElement(f.a,{color:"green",fluid:!0,size:"large"},"NEXT")))))),l.a.createElement("div",{className:"imagesection"})))}}]),t}(n.Component)),W=Object(w.f)(D),G=(t(370),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).handleClickShowPassword=function(){e.setState({showPassword:!e.state.showPassword})},e.handleMouseDownPassword=function(e){e.preventDefault()},e.handleChange=function(a){e.setState(Object(u.a)({},a.target.name,a.target.value))},e.handleSignup=function(){e.props.updateEmail(e.state.signupEmail),e.props.history.push("/signup")},e.handleEmailFocus=function(a){return e.emailLabel.current.innerText="Enter your Email address"},e.handleEmailBlur=function(a){return e.emailLabel.current.innerText=""},e.handlePasswordFocus=function(a){return e.passwordLabel.current.innerText="Enter your Password"},e.handleShowPassword=function(e){console.log(e.target)},e.handlePasswordBlur=function(a){return e.passwordLabel.current.innerText=""},e.state={signupEmail:"",showPassword:!1,password:""},e.emailLabel=Object(n.createRef)(null),e.passwordLabel=Object(n.createRef)(null),e.signupEmail=Object(n.createRef)(null),e}return Object(c.a)(t,[{key:"render",value:function(){return console.log(this.state),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-second"},l.a.createElement("div",{className:"formcontainer-second"},l.a.createElement(A,null),l.a.createElement(d.a,{textAlign:"center",style:{marginTop:"6rem"},verticalAlign:"middle",className:"padit"},l.a.createElement(d.a.Column,{style:{maxWidth:350}},l.a.createElement(h.a,{as:"h3",color:"grey",textAlign:"left"},"REGISTER IOT SOIL SENSOR"),l.a.createElement("div",{className:"iot-image-holder"}),l.a.createElement(E.a,{size:"large"},l.a.createElement(g.a,{id:"outlined-multiline-flexible",label:"Email",variant:"outlined",onFocus:this.handleEmailFocus,onBlur:this.handleEmailBlur,fullWidth:!0,placeholder:"farmer@gmail.com"}),l.a.createElement("p",{ref:this.emailLabel,className:"label"}),l.a.createElement("div",{className:"submit-div flex end"},l.a.createElement(f.a,{fluid:!0,size:"large",className:"white",onClick:this.handleBack},"Back"),l.a.createElement(f.a,{fluid:!0,size:"large",className:"white",onClick:this.handleBack},"Skip"),l.a.createElement(f.a,{color:"green",fluid:!0,size:"large"},"NEXT")))))),l.a.createElement("div",{className:"imagesection"})))}}]),t}(n.Component)),U=Object(w.f)(G),M=(t(371),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={signupEmail:"",showPassword:!1,password:""},e.emailLabel=Object(n.createRef)(null),e.passwordLabel=Object(n.createRef)(null),e.signupEmail=Object(n.createRef)(null),e}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-second"},l.a.createElement("div",{className:"formcontainer-second"},l.a.createElement(A,null)),l.a.createElement("div",{className:"error-container"},l.a.createElement(h.a,{className:"error-page-header",as:"h3"},"OOPS !Looks like the page you requested does not exist"),l.a.createElement(f.a,{class:"revert-button",color:"green",size:"large"},"GO BACK TO DASHBOARD"))))}}]),t}(n.Component)),J=Object(w.f)(M),X=t(218),Y=t(409),q=Object(X.a)({palette:{primary:{light:"#fff",main:"#67bc46",dark:"#000"},secondary:{main:"#fff"}},typography:{useNextVariants:!0}}),H=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).updateEmail=function(a){e.setState({signupEmail:a})},e.state={signupEmail:""},e}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(Y.a,{theme:q},l.a.createElement(w.c,null,l.a.createElement(w.a,{path:"/",exact:!0},l.a.createElement(z,{updateEmail:this.updateEmail})," "),l.a.createElement(w.a,{path:"/signup"},l.a.createElement(W,{email:this.state.signupEmail})),l.a.createElement(w.a,{path:"/Iot"},l.a.createElement(U,{email:this.state.signupEmail})),l.a.createElement(w.a,{path:"/*"},l.a.createElement(J,{email:this.state.signupEmail}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=t(64);s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(K.a,null,l.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[239,1,2]]]);
//# sourceMappingURL=main.fc114b33.chunk.js.map