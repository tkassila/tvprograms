(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{BM80:function(t,e,n){"use strict";function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){return Object(s.h)("h1",{tabIndex:"0"},"Hello, ",t.name)}function h(t){return Object(s.h)(i,{name:t.name})}n.r(e),n.d(e,"default",(function(){return C}));var s=n("hosL"),r=n("x9vV"),c=n.n(r),o=(n("E0vE"),"profile__hKgU4");const u=["PST","MST","MDT","EST","UTC"];class b extends s.Component{constructor(t){super(t),l(this,"_",void 0),l(this,"_",void 0);const{tz:e,msg:n}=t;this.state={tz:e,msg:n}}_handleChange(t){"function"==typeof this.props.onFormChange&&this.props.onFormChange(this.state)}_changeTimezone(t){this.setState({tz:t.target.value},this._handleChange)}_changeMsg(t){const e=encodeURIComponent(t.target.value).replace(/%20/,"+");this.setState({msg:e},this._handleChange)}_handleFormSubmit(t){t.preventDefault(),"function"==typeof this.props.onFormSubmit&&this.props.onFormSubmit(this.state)}render(t,e){const{tz:n}=e;return Object(s.h)("form",{onSubmit:this._handleFormSubmit},Object(s.h)("select",{onChange:this._changeTimezone,defaultValue:n},u.map((t=>Object(s.h)("option",{key:t,value:t},t)))),Object(s.h)("input",{type:"text",placeholder:"A chronic string message (such as 7 hours from\r now)",onChange:this._changeMsg}),Object(s.h)("input",{type:"submit",value:"Update request"}))}}var d=n("auy+"),m=n("aOzT"),f=n.n(m),j=(n("QPb0"),n("pfa1")),O=n.n(j),p=(n("E5ZW"),n("u2Uw")),g=n.n(p);class C extends s.Component{constructor(t){super(t),a(this,"updateTime",(()=>{this.setState({time:Date.now()})})),a(this,"increment",(()=>{this.setState({count:this.state.count+1})})),a(this,"getApiUrl",(()=>"https://andthetimeis.com/"+this.state.tz+"/"+this.state.msg+".json")),a(this,"addKissaCount",(()=>{this.setState({kissacount:this.state.kissacount+1})})),this.state={time:Date.now(),count:10,tz:null,msg:"now",tz:"PST",currentTime:null,kissacount:0},this.fetchCurrentTime=this.fetchCurrentTime.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleChange=this.handleChange.bind(this)}componentDidMount(){this.timer=setInterval(this.updateTime,1e3)}componentWillUnmount(){clearInterval(this.timer)}handleChange(t){this.setState({newState:t})}handleFormSubmit(t){this.fetchCurrentTime()}fetchCurrentTime(){const t=this.getApiUrl();fetch(t,{mode:"cors",credentials:"include"}).then((t=>t.json())).then((t=>{this.setState({currentTime:t.dataString})}))}render({user:t},{time:e,count:n}){const{currentTime:l,tz:a}=this.state,{kissacount:i}=this.state,r=this.getApiUrl();let u=null;console.log(d.a.screen);let m=["col1","col2","col3","col4"].map(((t,e)=>Object(s.h)("td",{id:"telkkutablecol"+e,lang:"fi",tabIndex:"0",style:"vertical-align: top; padding-left: 5px; padding-right: 5px; "},Object(s.h)(O.a,null,Object(s.h)(O.a.Item,{tabIndex:"0"},"Item1 ",t),Object(s.h)(O.a.Item,{tabIndex:"0"},"Item2 ",t),Object(s.h)(O.a.Item,{tabIndex:"0"},"Item3 ",t),Object(s.h)(O.a.Item,{tabIndex:"0"},"Item4 ",t),Object(s.h)(O.a.Item,{tabIndex:"0"},"Item5 ",t)))));return console.log("Media.screen"),Object(s.h)("div",{class:`${o} page`},Object(s.h)("h1",{tabIndex:"0"},"Profile: ",t),Object(s.h)("p",null,"This is the user profile for a user named ",t,"."),Object(s.h)("div",null,"Current time: ",new Date(e).toLocaleString()),Object(s.h)("p",null,Object(s.h)(c.a,{tabIndex:"0",raised:!0,ripple:!0,onClick:this.increment},"Click Me")," ","Clicked ",n," times."),Object(s.h)("div",null,!l&&Object(s.h)("button",{onClick:this.fetchCurrentTime},"Get the current time"),l&&Object(s.h)("div",null,"The current time is: ",l),Object(s.h)(b,{onFormSubmit:this.handleFormSubmit,onFormChange:this.handleChange,tz:a,msg:"now"}),Object(s.h)("p",null,"We'll be making a request from: ",Object(s.h)("code",null,r))),Object(s.h)(h,{name:"kissa "+i}),Object(s.h)("button",{onClick:this.addKissaCount},"KissaCount"),Object(s.h)("table",{id:"programtable2",style:"width:100%",ref:this.tablCntl},Object(s.h)("tbody",null,Object(s.h)("tr",null,u),Object(s.h)("tr",{tabIndex:"0"},Object(s.h)("table",{id:"programtable2",style:"width:100%",ref:this.tablCntl},Object(s.h)("tbody",null,Object(s.h)("tr",null,u),Object(s.h)("tr",null,m),Object(s.h)("tr",null,m),Object(s.h)("tr",null,m)))),Object(s.h)("tr",{tabIndex:"0"},Object(s.h)("table",{id:"programtable2",style:"width:100%",ref:this.tablCntl},Object(s.h)("tbody",null,Object(s.h)("tr",null,u),Object(s.h)("tr",null,m),Object(s.h)("tr",null,m),Object(s.h)("tr",null,m)))),Object(s.h)("tr",{tabIndex:"0"},Object(s.h)("table",{id:"programtable2",style:"width:100%",ref:this.tablCntl},Object(s.h)("tbody",null,Object(s.h)("tr",null,u),Object(s.h)("tr",null,m),Object(s.h)("tr",null,m),Object(s.h)("tr",null,m)))))),Object(s.h)("div",null,Object(s.h)(f.a,{style:"width:100%"},Object(s.h)(f.a.Inner,null,Object(s.h)(f.a.Cell,{tabIndex:"0"},"1 First cell"),Object(s.h)(f.a.Cell,{tabIndex:"0"},"2 Second cell dffdsffdssddsff"),Object(s.h)(f.a.Cell,{tabIndex:"0"},"3 Third cell"),Object(s.h)(f.a.Cell,{tabIndex:"0"},"4 First cell"),Object(s.h)(f.a.Cell,{tabIndex:"0"},"5 Second cell dffdsffdssddsff"),Object(s.h)(f.a.Cell,{tabIndex:"0"},"6 Third cell"),Object(s.h)(f.a.Cell,{tabIndex:"0"},"7 First cell"),Object(s.h)(f.a.Cell,{tabIndex:"0"},"8 Second cell dffdsffdssddsff"),Object(s.h)(f.a.Cell,{tabIndex:"0"},"9 Third cell")))),Object(s.h)("div",null,Object(s.h)(g.a,{tabIndex:"0"},"Z0"),Object(s.h)(g.a,{tabIndex:"0"},"Z1"),Object(s.h)(g.a,{tabIndex:"0"},"Z2")))}}},u2Uw:function(t,e,n){"use strict";function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},l.apply(this,arguments)}var a=n("63Ad");Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Elevation=void 0;for(var i=a(n("SDJZ")),h=a(n("NToG")),s=a(n("K4DB")),r=a(n("+IV6")),c=a(n("eef+")),o=n("hosL"),u=a(n("CW11")),b=[],d=0;d<25;d++)b.push("z"+d);var m=function(t){function e(){var t;return(0,i.default)(this,e),(t=(0,s.default)(this,(0,r.default)(e).apply(this,arguments))).componentName="elevation",t.mdcProps=b,t}return(0,c.default)(e,t),(0,h.default)(e,[{key:"materialDom",value:function(t){var e;return t.z&&(e="mdc-elevation--z"+t.z),(0,o.h)("p",l({className:e},t,{ref:this.setControlRef}),t.children)}}]),e}(u.default);e.Elevation=m,e.default=m}}]);
//# sourceMappingURL=route-profile.chunk.33802.esm.js.map