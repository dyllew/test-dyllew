(function(t){function e(e){for(var s,n,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dyllew.github.io/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},"05c2":function(t,e,a){},"1e7d":function(t,e,a){},2133:function(t,e,a){"use strict";var s=a("1e7d"),i=a.n(s);i.a},2758:function(t,e,a){},"2a31":function(t,e,a){"use strict";var s=a("60cb"),i=a.n(s);i.a},"2e92":function(t,e,a){},"339e":function(t,e,a){t.exports=a.p+"img/FrequencyPlot.970f0c80.png"},"33f1":function(t,e,a){"use strict";var s=a("d9d9"),i=a.n(s);i.a},"3bc0":function(t,e,a){t.exports=a.p+"img/negative-positive.6d580dd8.jpg"},"3ea6":function(t,e,a){t.exports=a.p+"img/RelativeWordFrequencyDiff.ea5b86c8.png"},4906:function(t,e,a){t.exports=a.p+"img/portrait.b2c89646.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=a("5f5b"),r=a("b1e0"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid p-3 min-vh-100",attrs:{id:"app"}},[a("Header"),"/"!==this.$route.path?a("NavBar"):t._e(),a("router-view")],1)},o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-end"},[a("div",{staticClass:"col-12 col-md-4 col-lg-4",attrs:{id:"website-title"}},[a("h1",{attrs:{id:"name animate__fadeInDown"},on:{click:t.goHome}},[t._v(" Dylan Lewis ")])]),t._m(0)])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4 my-auto",attrs:{id:"logos-col"}},[a("div",{staticClass:"d-flex flex-row justify-content-center justify-content-md-end"},[a("a",{attrs:{href:"mailto: drlewis@mit.edu"}},[a("i",{staticClass:"fa fa-envelope-o fa-3x"}),a("i",{staticClass:"fa fa-envelope-o fa-2x"})]),a("a",{attrs:{href:"https://www.linkedin.com/in/dylan-lewis-2020/",target:"_blank"}},[a("i",{staticClass:"fa fa-linkedin-square fa-3x"}),a("i",{staticClass:"fa fa-linkedin-square fa-2x"})]),a("a",{attrs:{href:"https://github.com/dyllew/",target:"_blank"}},[a("i",{staticClass:"fa fa-github fa-3x"}),a("i",{staticClass:"fa fa-github fa-2x"})])])])}],u={name:"Header",methods:{goHome:function(){this.$router.push("/")}}},d=u,m=(a("8805"),a("2877")),p=Object(m["a"])(d,c,l,!1,null,"1285f182",null),f=p.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row pt-2 justify-content-center"},[a("div",{staticClass:"col-md-12",attrs:{id:"nav-bar"}},[a("router-link",{staticClass:"router-link",attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),a("router-link",{staticClass:"router-link",attrs:{to:"/projects"}},[t._v("Projects")]),t._v(" | "),a("router-link",{staticClass:"router-link",attrs:{to:"/artwork"}},[t._v("Artwork")]),t._v(" | "),a("router-link",{staticClass:"router-link",attrs:{to:"/resume"}},[t._v("Resume")])],1)])},h=[],v={name:"NavBar"},C=v,b=(a("7202"),Object(m["a"])(C,g,h,!1,null,"19a2c64a",null)),w=b.exports,_={name:"App",components:{Header:f,NavBar:w}},y=_,x=(a("034f"),Object(m["a"])(y,n,o,!1,null,null,null)),j=x.exports,k=a("8c4f"),T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row align-items-center justify-content-center"},[s("div",{staticClass:"col col-md-4"},[s("div",{staticClass:"img-container"},[s("h4",[t._v("About")]),s("div",{staticClass:"img-holder",on:{click:t.goToAbout}},[s("img",{staticClass:"rounded img-fluid",attrs:{src:a("cbeb")}}),s("div",{staticClass:"screen"}),s("div",{staticClass:"screen-text",attrs:{id:"about-text"}})])])]),s("div",{staticClass:"col mt-5 mt-md-0 col-md-5"},[s("div",{staticClass:"img-container"},[s("h4",[t._v("Projects")]),s("div",{staticClass:"img-holder",on:{click:t.goToProjects}},[s("img",{staticClass:"rounded img-fluid",attrs:{src:a("5e93")}}),s("div",{staticClass:"screen"}),s("div",{staticClass:"screen-text",attrs:{id:"artwork-text"}})])])]),s("div",{staticClass:"w-100"}),s("div",{staticClass:"col mt-5 mt-md-0 col-md-5"},[s("div",{staticClass:"img-container"},[s("h4",[t._v("Artwork")]),s("div",{staticClass:"img-holder",on:{click:t.goToArtwork}},[s("img",{staticClass:"rounded img-fluid",attrs:{src:a("4906")}}),s("div",{staticClass:"screen"}),s("div",{staticClass:"screen-text",attrs:{id:"artwork-text"}})])])]),s("div",{staticClass:"col mt-5 mt-md-0 col-md-4"},[s("div",{staticClass:"img-container"},[s("h4",[t._v("Resume")]),s("div",{staticClass:"img-holder",on:{click:t.goToResume}},[s("img",{staticClass:"rounded img-fluid",attrs:{src:a("a297")}}),s("div",{staticClass:"screen"}),s("div",{staticClass:"screen-text",attrs:{id:"artwork-text"}})])])])])},P=[],$={name:"Home",methods:{goToAbout:function(){this.$router.push("/about")},goToProjects:function(){this.$router.push("/projects")},goToArtwork:function(){this.$router.push("/artwork")},goToResume:function(){this.$router.push("/resume")}}},O=$,A=(a("33f1"),Object(m["a"])(O,T,P,!1,null,"02dffea6",null)),E=A.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row pt-3 pt-md-5 about-me"},[s("div",{staticClass:"col-5 col-md-5 col-lg-5 col-xl-3 mx-auto my-auto"},[s("img",{staticClass:"rounded img-fluid",attrs:{id:"leo-and-dylan-pic",src:a("ee29"),alt:"Leo and Dylan"}})]),s("div",{staticClass:"col-10 col-md-6 col-lg-5 col-xl-6 mx-auto my-auto",attrs:{id:"about-description"}},[s("p",{attrs:{id:"intro-paragraph"}},[t._v(" Hey there! I'm a Masters student at MIT studying Computer Science. But more importantly, I am a proud dog dad to my son, Leo 🐶 ")]),s("p",[t._v(" I'm interested in Software Engineering, Data Science & Machine Learning, and Web Development! You can contact me through email, add me on LinkedIn & GitHub! ")]),s("p",[t._v(" In my freetime, I love to explore nature, make and experiment with different forms of art, develop new skills, and go on adventures with my pup! ")])])])}],D={name:"About"},B=D,F=(a("7d2f"),Object(m["a"])(B,S,I,!1,null,"b91fc68e",null)),q=F.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"projects row align-items-center justify-content-center"},[s("div",{staticClass:"col-12 col-md-3 pt-3"},[s("div",{staticClass:"card border-info bg-transparent"},[s("h5",{staticClass:"card-header"},[t._v("Boomerang")]),s("img",{staticClass:"card-img-top",attrs:{id:"boomerang-img",src:a("5e93"),alt:"Card image cap"}}),s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text"},[t._v("Boomerang is a full-stack web application where users can efficiently and reliably borrow items from others within their communities")]),s("div",{attrs:{id:"button-holder"}},[s("a",{staticClass:"btn btn-light",attrs:{href:"https://team-aesthetech-boomerang.herokuapp.com/",target:"_blank"}},[t._v("Go to the Boomerang website")]),s("a",{staticClass:"btn btn-info text-light",on:{click:t.goToBoomerangProjectPage}},[t._v("See Project Details")])])])])]),s("div",{staticClass:"col-12 col-md-3 pt-3"},[s("div",{staticClass:"card border-info bg-transparent"},[s("h5",{staticClass:"card-header"},[t._v("Trump Campaign Speech Analysis")]),s("img",{staticClass:"card-img-top",attrs:{id:"boomerang-img",src:a("339e"),alt:"Card image cap"}}),s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text"},[t._v(" Data Science project which investigated how Donald Trump's 2016 campaign speeches may have influenced public sentiment on a regional level ")]),s("a",{staticClass:"btn btn-info text-light",on:{click:t.goToTrumpSpeechPage}},[t._v("See Project Details")])])])])])},M=[],R={name:"Artwork",methods:{goToBoomerangProjectPage:function(){this.$router.push("/projects/boomerang")},goToTrumpSpeechPage:function(){this.$router.push("projects/trump-speech-analysis")},goHome:function(){this.$router.push("/")}}},L=R,W=Object(m["a"])(L,H,M,!1,null,null,null),z=W.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"artwork row align-items-center justify-content-center justify-content-xl-around"},[s("div",{staticClass:"col-8 pt-3 pt-md-0 col-md-3"},[s("h4",[t._v("Portrait")]),s("img",{staticClass:"rounded img-fluid",attrs:{src:a("4906")}})]),s("div",{staticClass:"col-8 pt-4 pt-md-2 col-md-3"},[s("h4",[t._v("Reptile")]),s("img",{staticClass:"rounded img-fluid",attrs:{src:a("a2c3")}})]),s("div",{staticClass:"col-8 pt-4 pt-md-2 col-md-3"},[s("h4",[t._v("4-in-1")]),s("img",{staticClass:"rounded img-fluid",attrs:{src:a("c207")}})])])}],J={name:"Artwork"},U=J,V=Object(m["a"])(U,N,G,!1,null,null,null),Y=V.exports,K=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"resume row align-items-center justify-content-center"},[a("div",{staticClass:"col-12"},[a("a",{attrs:{target:"_blank",href:"./assets/Dylan_Lewis_Resume.pdf"}},[t._v("View PDF")])]),a("div",{staticClass:"col-12 mt-2"},[a("embed",{staticClass:"pdf",attrs:{src:"./assets/Dylan_Lewis_Resume.pdf"}})])])}],X={name:"About"},Z=X,tt=(a("2a31"),Object(m["a"])(Z,K,Q,!1,null,"219010d6",null)),et=tt.exports,at=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row align-items-center justify-content-center"},[s("div",{staticClass:"col-12"},[s("h1",[t._v("Boomerang")])]),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"carousel slide",attrs:{id:"boomerangCarousel","data-ride":"carousel","data-interval":"false"}},[s("ol",{staticClass:"carousel-indicators"},[s("li",{staticClass:"active",attrs:{"data-target":"#boomerangCarousel","data-slide-to":"0"}}),s("li",{attrs:{"data-target":"#boomerangCarousel","data-slide-to":"1"}}),s("li",{attrs:{"data-target":"#boomerangCarousel","data-slide-to":"2"}})]),s("div",{staticClass:"carousel-inner"},[s("div",{staticClass:"carousel-item active boomerang-carousel-item"},[s("img",{staticClass:"rounded img-fluid",attrs:{src:a("5e93"),alt:"First slide"}}),s("div",{staticClass:"carousel-text"},[s("h5",[t._v("Sign Up/Login Page")]),s("p",[t._v("When my group decided on how we wanted to split up the work for Boomerang, I decided to do the sign up/login page & the create account flow. I thought this would be a good section to practice and enhance my visual design skills & to create a user interface that was intuitive. ")])])]),s("div",{staticClass:"carousel-item boomerang-carousel-item"},[s("img",{staticClass:"rounded img-fluid",attrs:{src:a("e1a7"),alt:"Second slide"}}),s("div",{staticClass:"carousel-text"},[s("h5",[t._v("Create Account Part I")]),s("p",[t._v(" In developing the create account flow, I create the front-end using Vue.js which is the same front-end framework I am used to build this website. The backend was built using Express.js. The fields above checked for user input to ensure that the account username was not taken and in the right format and that the password was in a valid format. ")])])]),s("div",{staticClass:"carousel-item boomerang-carousel-item"},[s("img",{staticClass:"rounded img-fluid",attrs:{src:a("a21f"),alt:"Third slide"}}),s("div",{staticClass:"carousel-text"},[s("h5",[t._v("Create Account Part II")]),s("p",[t._v(" Account creation for any app is an important user flow as it let the user understand both the purpose of app & how they can engage with it. For these reasons, I decided to include the main concepts of the application (Communities, Channels, etc.) in the context of Boomerang as this would reduce the time it would take for a user to get started using the app. ")])])])])])])])}],it={name:"Boomerang"},rt=it,nt=(a("d660"),Object(m["a"])(rt,at,st,!1,null,"4023bc80",null)),ot=nt.exports,ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row align-items-center justify-content-center"},[s("div",{staticClass:"col-12"},[s("h1",[t._v("Trump Campaign Speech Analysis")])]),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"carousel slide",attrs:{id:"trumpCarousel","data-ride":"carousel","data-interval":"false"}},[s("ol",{staticClass:"carousel-indicators"},[s("li",{staticClass:"active",attrs:{"data-target":"#trumpCarousel","data-slide-to":"0"}}),s("li",{attrs:{"data-target":"#trumpCarousel","data-slide-to":"1"}}),s("li",{attrs:{"data-target":"#trumpCarousel","data-slide-to":"2"}})]),s("div",{staticClass:"carousel-inner"},[s("div",{staticClass:"carousel-item active trump-carousel-item"},[s("img",{staticClass:"rounded img-fluid",attrs:{src:a("89e4"),alt:"First slide"}}),s("div",{staticClass:"carousel-text"},[s("h5",[t._v("Main Puzzle")]),s("p",[t._v(" There have been concerns that nationalist, right-wing sentiments have gained momentum over the past three and a half years of the Trump presidency. Our group was interested in understanding how Trump’s rhetoric may influence public sentiment on a regional level. To this end, we analyzed tweets from 4 cities and Florida where Trump gave speeches during his campaign. We focused particularly on how words’ frequencies in tweets by locals are affected by Trump’s speeches. ")])])]),s("div",{staticClass:"carousel-item trump-carousel-item"},[s("img",{staticClass:"rounded img-fluid",attrs:{src:a("3bc0"),alt:"Second slide"}}),s("div",{staticClass:"carousel-text"},[s("h5",[t._v("Most Frequent Negative and Positive Words in Trump's Campaign Speeches")]),s("p",[t._v(' Trump\'s positive sentiment words tend to be adjectives with "great" far exceeding the rest. Among words with negative sentiment, there are more meaningful words related to his speech topics such as "investigation", "defense", "deficit", & "press". ')])])]),s("div",{staticClass:"carousel-item trump-carousel-item"},[s("img",{staticClass:"rounded img-fluid",attrs:{src:a("3ea6")}}),s("img",{staticClass:"rounded img-fluid",attrs:{src:a("f061")}}),s("div",{staticClass:"carousel-text"},[s("h5",[t._v("Trump's Most Frequently Used Words Across his Entire Campaign & Across Florida Campaign")]),s("p",[t._v(' In Trump\'s speeches across the entire campaign, his most frequent words, normalized on Romney\'s campaign speeches, include, "don\'t", "hillary", "great", "deal", as well as words related to his election platform such as "border", "wall", "mexico", "isis", "trade", and "china". Words used to thwart Hillary Clinton\'s campaign such as "hillary", "email", "lies", "corrupt", "crook", and "fbi" in regards to Clinton\'s email scandal appear more frequently in Trump\'s Florida campaign speeches than across all of his campaign speeches, showing that in swing states, Trump strategizes to mention the scandal more frequently to win voters to tip the scale. ')])])])])])])])}],ut={name:"Trump"},dt=ut,mt=(a("2133"),Object(m["a"])(dt,ct,lt,!1,null,"2e0dcc64",null)),pt=mt.exports;s["default"].use(k["a"]);var ft=[{path:"/",component:E},{path:"/about",component:q},{path:"/projects",component:z},{path:"/projects/boomerang",component:ot},{path:"/projects/trump-speech-analysis",component:pt},{path:"/artwork",component:Y},{path:"/resume",component:et}],gt=new k["a"]({mode:"history",base:"dyllew.github.io",routes:ft}),ht=gt;a("f9e3"),a("2dd8");s["default"].config.productionTip=!1,s["default"].use(i["a"]),s["default"].use(r["a"]),new s["default"]({router:ht,render:function(t){return t(j)}}).$mount("#app")},"5e93":function(t,e,a){t.exports=a.p+"img/boomerang-home.2b52b305.jpg"},"60cb":function(t,e,a){},7202:function(t,e,a){"use strict";var s=a("c944"),i=a.n(s);i.a},"7d2f":function(t,e,a){"use strict";var s=a("2758"),i=a.n(s);i.a},"85ec":function(t,e,a){},8805:function(t,e,a){"use strict";var s=a("2e92"),i=a.n(s);i.a},"89e4":function(t,e,a){t.exports=a.p+"img/trump-campaign.81aaea0e.png"},a21f:function(t,e,a){t.exports=a.p+"img/join-communities.392bb659.png"},a297:function(t,e,a){t.exports=a.p+"img/resume.dd9cc590.png"},a2c3:function(t,e,a){t.exports=a.p+"img/reptile.b479d166.png"},c207:function(t,e,a){t.exports=a.p+"img/feelings.7216f530.jpg"},c944:function(t,e,a){},cbeb:function(t,e,a){t.exports=a.p+"img/linkedin-profpic.00cde042.jpg"},d660:function(t,e,a){"use strict";var s=a("05c2"),i=a.n(s);i.a},d9d9:function(t,e,a){},e1a7:function(t,e,a){t.exports=a.p+"img/create-account.b25be796.png"},ee29:function(t,e,a){t.exports=a.p+"img/leo_n_me.2868644e.jpg"},f061:function(t,e,a){t.exports=a.p+"img/RelativeWordFreqDiffFlorida.80584f3b.png"}});
//# sourceMappingURL=app.f2b4fe10.js.map