(this.webpackJsonpwatchwhat=this.webpackJsonpwatchwhat||[]).push([[0],{100:function(e,a,t){e.exports={trailersContainer:"MovieTrailers_trailersContainer__2IPBr",trailer:"MovieTrailers_trailer__10K-d"}},101:function(e,a,t){e.exports={imagesContainer:"MovieImages_imagesContainer__6Snv9",image:"MovieImages_image__U6d12"}},150:function(e,a,t){e.exports={container:"Trending_container__3T0Vx"}},151:function(e,a,t){e.exports={container:"SearchPage_container__qsAV3"}},152:function(e,a,t){e.exports={container:"GenrePage_container__1br87"}},153:function(e,a,t){e.exports={container:"Upcoming_container__2OJW9"}},154:function(e,a,t){e.exports={container:"MovieCard_container__3ymdK",details:"MovieCard_details__1vD8p",flexRow:"MovieCard_flexRow__B8_Da",show:"MovieCard_show__1Duar",hide:"MovieCard_hide__1Ex56"}},155:function(e,a,t){e.exports={container:"MainContainer_container__3H9R5"}},157:function(e,a,t){e.exports={loaderContainer:"LoaderComponent_loaderContainer__39xrb"}},159:function(e,a,t){e.exports={movieFrame:"MoviePlayer_movieFrame__3NHY-"}},167:function(e,a,t){e.exports=t(326)},172:function(e,a,t){},208:function(e,a,t){},217:function(e,a,t){},323:function(e,a,t){},324:function(e,a,t){},326:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(14),o=t.n(c),i=(t(172),t(15)),l=t(30),s=(t(352),t(353),t(354),t(355),t(356),t(21)),u=t(7),m=t(80),p=t(27),d=t.n(p),E="d64c362a1aa8492138a5053bb3f6542f",v="https://image.tmdb.org/t/p/original",_="https://api.themoviedb.org/3/",f=function(e){return"".concat("https://cors-anywhere.herokuapp.com/").concat(_,"search/movie?query=").concat(e,"&api_key=").concat(E)},g=d.a.create({baseURL:"https://www.googleapis.com/youtube/v3/"}),b=t(16),h=t.n(b),C=t(28),O=t(24),j=Object(O.a)({basename:"/WatchWhat"}),y=function(e){return function(){var a=Object(C.a)(h.a.mark((function a(t){var n,r;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:"FETCH_MOVIE_INITIATED"}),n="".concat(_,"movie/").concat(e,"?api_key=").concat(E,"&&language=en-US&append_to_response=credits,videos,images&include_image_language=en,null"),a.prev=2,a.next=5,d.a.get(n);case 5:r=a.sent,t({type:"FETCH_MOVIE_SUCCESS",payload:r.data}),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(2),t({type:"FETCH_MOVIE_FAIL"}),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()},I=function(e){return function(){var a=Object(C.a)(h.a.mark((function a(t){return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t({type:"SET_SEARCH_RESULTS",payload:e});case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},N=(t(121),t(208),t(65)),w=t(357),T=t(32),S=t(149),x=t.n(S),k=t(8),M=t(42),R=t.n(M),F=t(77),L=t(359),A=t(84),D=t(369),H=t(361),P=t(362),U=t(363),G=t(364),W=t(367),V=t(365),B=[{name:"action",id:28},{name:"adventure",id:12},{name:"comedy",id:35},{name:"horror",id:27},{name:"romance",id:10749},{name:"thriller",id:53}],z=Object(w.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,backgroundColor:"rgb(20, 20, 20, 0.9)",justifyContent:"space-between",flexDirection:"row",color:"#bb86fc",borderBottom:"solid 1px rgb(148, 148, 148)"},drawer:{width:300,flexShrink:0},drawerPaper:{width:300,backgroundColor:"#202020",borderRight:"solid 1px rgb(148, 148, 148)",color:"#bb86fc"},drawerContainer:{overflow:"auto"},search:Object(N.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(T.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(T.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(N.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),divider:{background:"rgb(148, 148, 148)"}}}));function K(){var e=Object(F.useMediaQuery)({query:"(max-width: 1024px)"}),a=z(),t=Object(u.c)((function(e){return e.drawerOpen})),n=Object(u.b)(),c=B.map((function(e){return r.a.createElement(qe,{text:e.name})})),o=r.a.createElement(L.a,{className:R.a.navSubContainer},r.a.createElement(A.a,{variant:"h6",noWrap:!0},r.a.createElement(s.a,{to:"/trending",className:R.a.navBrand},"Trending")),r.a.createElement(A.a,{variant:"h6",noWrap:!0},r.a.createElement(s.a,{to:"/upcoming",className:R.a.navBrand},"Upcoming")),r.a.createElement(L.a,null,r.a.createElement(Ze,null))),i=r.a.createElement("div",null,r.a.createElement(D.a,null,r.a.createElement(L.a,null,r.a.createElement(Ze,null))),r.a.createElement(D.a,null,r.a.createElement(A.a,{variant:"h6",noWrap:!0},r.a.createElement(s.a,{to:"/trending",className:R.a.navBrand},"Trending"))),r.a.createElement(D.a,null,r.a.createElement(A.a,{variant:"h6",noWrap:!0},r.a.createElement(s.a,{to:"/upcoming",className:R.a.navBrand},"Upcoming"))),r.a.createElement(H.a,{classes:{root:a.divider}}));return r.a.createElement("div",{className:a.root},r.a.createElement(P.a,null),r.a.createElement(U.a,{position:"fixed",className:a.appBar},r.a.createElement(L.a,null,r.a.createElement(G.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return n((e=!t,function(a){a({type:"SET_DRAWER_OPEN",payload:e})}));var e},edge:"start",className:Object(k.a)(a.menuButton,t&&a.hide)},r.a.createElement(x.a,{className:R.a.menuIcon})),r.a.createElement(A.a,{variant:"h4",noWrap:!0},r.a.createElement(s.a,{to:"/",className:R.a.navBrand},"WatchWhat"))),!e&&o),r.a.createElement(W.a,{className:a.drawer,variant:"persistent",classes:{paper:a.drawerPaper},open:t},r.a.createElement(L.a,null),r.a.createElement("div",{className:a.drawerContainer},e&&i,r.a.createElement(V.a,null,c))))}var J=t(150),q=t.n(J),Z=t(51);function Q(){var e=Object(u.b)(),a=Object(u.c)((function(e){return e.trending})),t=Object(u.c)((function(e){return e.trendingPage}));Object(n.useEffect)((function(){c()}),[]);var c=function(){e(function(e){return function(){var a=Object(C.a)(h.a.mark((function a(t){var n,r;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:"FETCH_TRENDING_INITIATED"}),n="".concat(_,"discover/movie?api_key=").concat(E,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=").concat(e),a.prev=2,a.next=5,d.a.get(n);case 5:return r=a.sent,a.next=8,Promise.all(r.data.results.map(function(){var e=Object(C.a)(h.a.mark((function e(a){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat(_,"movie/").concat(a.id,"?api_key=").concat(E,"&&language=en-US"));case 2:t=e.sent,a.details=t.data;case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()));case 8:t({type:"FETCH_TRENDING_SUCCESS",payload:r.data.results}),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(2),t({type:"FETCH_TRENDING_FAIL"}),console.log(a.t0);case 15:case"end":return a.stop()}}),a,null,[[2,11]])})));return function(e){return a.apply(this,arguments)}}()}(t))},o=a.map((function(e){return r.a.createElement(le,Object.assign({key:e.id},e))}));return r.a.createElement(Z.a,{dataLength:a.length,next:c,hasMore:!0,loader:r.a.createElement("h4",null,"Loading...")},r.a.createElement("div",{className:q.a.container},o))}var Y=t(151),X=t.n(Y);function $(){Object(u.b)();var e=Object(u.c)((function(e){return e.searchResults})),a=e?e.map((function(e){return r.a.createElement(le,Object.assign({key:e.id},e))})):null;return r.a.createElement("div",{className:X.a.container},a)}var ee=t(152),ae=t.n(ee);function te(e){var a=null,t=Object(u.b)(),c=Object(u.c)((function(e){return e.genreMovies})),o=Object(u.c)((function(e){return e.genrePage})),i=Object(u.c)((function(e){return e.genre}));Object(n.useEffect)((function(){null===i&&(i=e.match.params.genre),l()}),[i]);var l=function(){null===i&&(i=e.match.params.genre),a=B.filter((function(e){return e.name==i.toLowerCase()})),t(function(e,a){return function(){var t=Object(C.a)(h.a.mark((function t(n){var r,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"FETCH_GENRE_MOVIES_INITIATED"}),n({type:"SET_DRAWER_OPEN",payload:!1}),r="".concat(_,"discover/movie?api_key=").concat(E,"&with_genres=").concat(e,"&page=").concat(a),t.prev=3,t.next=6,d.a.get(r);case 6:c=t.sent,n({type:"FETCH_GENRE_MOVIES_SUCCESS",payload:c.data.results}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),n({type:"FETCH_GENRE_MOVIES_FAIL"}),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}()}(a[0].id,o))},s=c.map((function(e){return r.a.createElement(le,Object.assign({key:e.id},e))}));return r.a.createElement(Z.a,{dataLength:c.length,next:l,hasMore:!0,loader:r.a.createElement("h4",null,"Loading...")},r.a.createElement("div",{className:ae.a.container},s))}var ne=t(153),re=t.n(ne);function ce(){var e=Object(u.b)(),a=Object(u.c)((function(e){return e.upcoming})),t=Object(u.c)((function(e){return e.upcomingPage}));Object(n.useEffect)((function(){c()}),[]);var c=function(){e(function(e){return function(){var a=Object(C.a)(h.a.mark((function a(t){var n,r;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:"FETCH_UPCOMING_INITIATED"}),n="".concat(_,"movie/upcoming?api_key=").concat(E,"&language-en-US&page=").concat(e),a.prev=2,a.next=5,d.a.get(n);case 5:r=a.sent,t({type:"FETCH_UPCOMING_SUCCESS",payload:r.data.results}),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(2),t({type:"FETCH_UPCOMING_FAIL"}),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}(t))},o=a.map((function(e){return r.a.createElement(le,Object.assign({key:e.id},e))}));return r.a.createElement(Z.a,{dataLength:a.length,next:c,hasMore:!0,loader:r.a.createElement("h4",null,"Loading...")},r.a.createElement("div",{className:re.a.container},o))}var oe=t(154),ie=t.n(oe);t(10);function le(e){var a=Object(u.b)(),t=Object(n.useState)(!1),c=Object(l.a)(t,2),o=(c[0],c[1]);return r.a.createElement("div",{className:ie.a.container,onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},onClick:function(){return a((t=e.id,function(){var e=Object(C.a)(h.a.mark((function e(a){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:"MOVIE_CLICKED",payload:t}),a({type:"SET_DRAWER_OPEN",payload:!1}),n="/movies/".concat(t,"/details"),j.push(n);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()));var t}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:""}))}var se=t(368),ue=(t(217),function(e){var a=Object(u.c)((function(e){return e.isError})),t=Object(u.b)();Object(n.useEffect)((function(){1==a&&function(){var e=Object(C.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){t(function(){var e=Object(C.a)(h.a.mark((function e(a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:"SET_IS_ERROR_FALSE"});case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}),2e3);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a]);return r.a.createElement(se.a,{color:"danger",isOpen:a},e.message?e.message:"Oops! Something went wrong :( ")}),me=t(155),pe=t.n(me),de=t(18);function Ee(){var e=Object(u.c)((function(e){return e.isError})),a=Object(u.c)((function(e){return e.isLoading}));return r.a.createElement("div",{className:pe.a.container},e&&r.a.createElement(ue,null),a&&r.a.createElement(Oe,null),r.a.createElement(de.c,{history:j},r.a.createElement(K,null),r.a.createElement(de.d,null,r.a.createElement(de.a,{exact:!0,from:"/",to:"/trending"}),r.a.createElement(de.b,{exact:!0,path:"/trending",component:Q}),r.a.createElement(de.b,{exact:!0,path:"/upcoming",component:ce}),r.a.createElement(de.b,{path:"/search",component:$}),r.a.createElement(de.b,{path:"/movies/:id",component:je}),r.a.createElement(de.b,{path:"/genre/:genre",component:te}))))}var ve=t(43),_e=t.n(ve);function fe(){var e=Object(u.c)((function(e){return e.movie})),a=e?e.genres.map((function(e){return e.name})).join(", "):null;return r.a.createElement("div",{className:_e.a.container},r.a.createElement("h1",null,e.title),e.tagline&&r.a.createElement("h5",{className:_e.a.tagline},'"'.concat(e.tagline,'"')),r.a.createElement("div",{className:_e.a.rating},r.a.createElement("i",{className:"fas fa-stopwatch"}),function(e){var a=Math.floor(e/60),t=e%60;return"".concat(a,"h ").concat(t,"m")}(e.runtime),r.a.createElement("span",{className:_e.a.star},r.a.createElement("i",{className:"fas fa-star"}),e.vote_average)),r.a.createElement("div",{className:_e.a.genres},r.a.createElement("h4",null,a)),r.a.createElement("div",{className:_e.a.overview},r.a.createElement("h4",{className:_e.a.textMuted},"Overview"),e.overview))}t(218);var ge=t(156),be=t.n(ge),he=t(157),Ce=t.n(he);function Oe(){return r.a.createElement("div",{className:Ce.a.loaderContainer},r.a.createElement(be.a,{type:"ThreeDots",color:"#9e46ffe0",height:100,width:100,timeout:0}))}function je(e){var a=Object(u.b)(),t=Object(de.g)().path,c=e.match.params.id,o=Object(n.useState)(null),i=Object(l.a)(o,2),s=i[0],m=i[1],p=Object(u.c)((function(e){return e.movie})),d=Object(F.useMediaQuery)({query:"(max-width: 1023px)"}),E=p?p.backdrop_path:null,v=p?p.images.backdrops:[],_=Object(l.a)(v,3),f=_[0],g=_[1],b=_[2],h=d?r.a.createElement(Ke,{backdrop:E},r.a.createElement(fe,null)):r.a.createElement(Ve,{backdrop:E},r.a.createElement(fe,null));return Object(n.useEffect)((function(){a(y(c))}),[]),p?r.a.createElement("div",null,r.a.createElement(de.d,null,r.a.createElement(de.b,{path:"".concat(t,"/details")},h),r.a.createElement(de.b,{path:"".concat(t,"/trailers")},r.a.createElement(Ke,{backdrop:f?f.file_path:E},r.a.createElement(xe,Object.assign({},e,{setTrailerId:m})),r.a.createElement(Ue,{trailerId:s}),"s")),r.a.createElement(de.b,{path:"".concat(t,"/cast-and-crew")},r.a.createElement(Ke,{backdrop:g?g.file_path:E},r.a.createElement(De,e))),r.a.createElement(de.b,{path:"".concat(t,"/images")},r.a.createElement(Ke,{backdrop:b?b.file_path:E},r.a.createElement(Fe,e)))),r.a.createElement(Ne,null)):null}var ye=t(58),Ie=t.n(ye);function Ne(){var e=Object(de.g)().url;return r.a.createElement("div",{className:Ie.a.footer},r.a.createElement("div",null,r.a.createElement(s.a,{to:"".concat(e,"/details"),activeClassName:Ie.a.navActive},"Details")),r.a.createElement("div",null,r.a.createElement(s.a,{to:"".concat(e,"/trailers"),activeClassName:Ie.a.navActive},"Trailers")),r.a.createElement("div",null,r.a.createElement(s.a,{to:"".concat(e,"/cast-and-crew"),activeClassName:Ie.a.navActive},"Cast & Crew")),r.a.createElement("div",null,r.a.createElement(s.a,{to:"".concat(e,"/images"),activeClassName:Ie.a.navActive},"Images")))}var we=t(158),Te=t(100),Se=t.n(Te);function xe(e){var a=Object(u.c)((function(e){return e.movie})),t=Object(u.c)((function(e){return e.trailers})),c=Object(u.b)(),o=e.match.params.id;Object(n.useEffect)((function(){a&&a.movie_id===o||c(y(o))}),[]),Object(n.useEffect)((function(){if(a){var e,t=[],n=Object(we.a)(a.videos.results);try{for(n.s();!(e=n.n()).done;){var r=e.value;t.push(r.key)}}catch(o){n.e(o)}finally{n.f()}t=t.join(),c(function(e){return function(){var a=Object(C.a)(h.a.mark((function a(t){var n;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:"FETCH_TRAILERS_INITIATED"}),a.prev=1,a.next=4,g.get("/videos",{params:{id:e,part:"snippet,contentDetails,statistics",key:"AIzaSyD21bdvM51FepYa3sQqd3RDAs-gvIG5fb8"}});case 4:n=a.sent,console.log(n),t({type:"FETCH_TRAILERS_SUCCESS",payload:n.data.items}),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),t({type:"FETCH_TRAILERS_FAIL"}),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()}(t))}}),[a]);var i=t?t.map((function(a,t){return r.a.createElement("div",{onClick:function(){return e.setTrailerId(a.id)},key:a.id},r.a.createElement("img",{src:a.snippet.thumbnails.medium.url,className:Se.a.trailer}))})):null,l=a&&t?r.a.createElement("div",{className:Se.a.trailersContainer},i):null;return a?l:null}var ke=t(101),Me=t.n(ke),Re=t(52);function Fe(e){var a=Object(u.c)((function(e){return e.movie})),t=Object(u.b)(),c=e.match.params.id;Object(n.useEffect)((function(){a&&a.movie_id===c||t(y(c))}),[]);var o=a.images.backdrops;console.log("images",o);var i=o?o.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("img",{src:"".concat(v).concat(e.file_path),className:Me.a.image}))})):null;return a?r.a.createElement(Re.a,null,r.a.createElement("div",{className:Me.a.imagesContainer},i)):null}var Le=t(59),Ae=t.n(Le);function De(e){var a=Object(u.c)((function(e){return e.movie})),t=Object(u.b)(),c=e.match.params.id;Object(n.useEffect)((function(){a&&a.movie_id===c||t(y(c))}),[]);var o=a?a.credits.cast:null,i=(a&&a.credits.crew,o?o.map((function(e,a){return r.a.createElement("div",{className:Ae.a.singleCastContainer,key:a},r.a.createElement("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(e.profile_path),className:Ae.a.image,alt:"".concat(e.name," as ").concat(e.character)}),r.a.createElement("h6",null,e.name),r.a.createElement("h6",{className:Ae.a.textMuted},e.character))})):null);return a?r.a.createElement(Re.a,null,r.a.createElement("div",{className:Ae.a.container},r.a.createElement("div",{className:Ae.a.castContainer},i))):null}var He=t(159),Pe=t.n(He);function Ue(e){var a=e.trailerId,t="".concat("https://www.youtube.com/embed/").concat(a);return a&&r.a.createElement("iframe",{className:Pe.a.movieFrame,title:"",src:t,frameborder:"0",allowFullScreen:!0})}var Ge=t(82),We=t.n(Ge);function Ve(e){var a=e.children,t=e.backdrop;return r.a.createElement("div",{className:We.a.mainContainer},r.a.createElement("div",{className:We.a.leftContainer},a),r.a.createElement("div",{className:We.a.rightContainer,style:{backgroundImage:"url(".concat(v).concat(t,")"),backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}))}var Be=t(83),ze=t.n(Be);function Ke(e){var a=e.children,t=e.backdrop;return r.a.createElement("div",{className:ze.a.mainContainer},r.a.createElement("div",{className:ze.a.topContainer,style:{backgroundImage:"url(".concat(v).concat(t,")"),backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}},a&&a[1]?a[1]:null),r.a.createElement("div",{className:ze.a.bottomContainer},a.length>1?a[0]:a))}var Je=t(366);t(323);function qe(e){var a=e.text,t=Object(u.b)();return r.a.createElement(D.a,{button:!0,key:a,onClick:function(){return t((e=a,function(a){a({type:"GENRE_CLICKED",payload:e});var t="/genre/".concat(e);j.push(t)}));var e}},r.a.createElement(Je.a,{primary:r.a.createElement(A.a,{variant:"h6"},a.toUpperCase())}))}t(324);function Ze(){var e=Object(u.b)(),a=Object(n.useState)({loading:!1,options:[]}),t=Object(l.a)(a,2),c=t[0],o=t[1];return r.a.createElement(m.a,{id:"Search Typeahead",isLoading:c.loading,labelKey:function(e){return"".concat(e.title)},placeholder:"Search Movie...",onKeyDown:function(e){13===e.keyCode&&function(e){var a="/search?=".concat(e);j.push(a)}(e.target.value)},onSearch:function(a){o(Object(i.a)(Object(i.a)({},c),{},{loading:!0})),d.a.get(f(a)).then((function(e){return console.log(e.data.results),e.data.results})).then((function(a){return o({loading:!1,options:a},e(I(a)))}))},options:c.options})}var Qe=t(54),Ye=t(44),Xe={trending:[],trendingPage:1,upcoming:[],upcomingPage:1,isLoading:!1,isError:!1,drawerOpen:!0},$e=[t(160).a],ea=Object(Qe.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_TRENDING_INITIATED":case"FETCH_UPCOMING_INITIATED":case"FETCH_MOVIE_INITIATED":case"FETCH_TRAILERS_INITIATED":case"FETCH_GENRE_MOVIES_INITIATED":return Object(i.a)(Object(i.a)({},e),{},{isLoading:!0});case"FETCH_TRENDING_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{trending:[].concat(Object(Ye.a)(e.trending),Object(Ye.a)(a.payload)),trendingPage:e.trendingPage+1,isLoading:!1});case"FETCH_TRENDING_FAIL":case"FETCH_UPCOMING_FAIL":case"FETCH_MOVIE_FAIL":case"FETCH_TRAILERS_FAIL":case"FETCH_GENRE_MOVIES_FAIL":return Object(i.a)(Object(i.a)({},e),{},{isLoading:!1,isError:!0});case"FETCH_MOVIE_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{movie:a.payload,isLoading:!1});case"FETCH_TRAILERS_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{trailers:a.payload,isLoading:!1});case"FETCH_UPCOMING_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{upcoming:[].concat(Object(Ye.a)(e.upcoming),Object(Ye.a)(a.payload)),upcomingPage:e.upcomingPage+1,isLoading:!1});case"FETCH_GENRE_MOVIES_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{genreMovies:[].concat(Object(Ye.a)(e.genreMovies),Object(Ye.a)(a.payload)),genrePage:e.genrePage+1,isLoading:!1});case"SET_SEARCH_RESULTS":return Object(i.a)(Object(i.a)({},e),{},{searchResults:Object(Ye.a)(a.payload)});case"SET_IS_ERROR_FALSE":return Object(i.a)(Object(i.a)({},e),{},{isError:!1});case"GENRE_CLICKED":return Object(i.a)(Object(i.a)({},e),{},{genre:a.payload,genreMovies:[],genrePage:1});case"SET_DRAWER_OPEN":return Object(i.a)(Object(i.a)({},e),{},{drawerOpen:a.payload});default:return e}}),{trending:[],trendingPage:1,upcoming:[],upcomingPage:1,genre:null,genreMovies:[],genrePage:1,isError:!1,isLoading:!1,searchResults:[],drawerOpen:!0},Object(Qe.c)(Qe.a.apply(void 0,$e)));var aa=function(){return r.a.createElement(u.a,{store:ea},r.a.createElement(Re.b,null,r.a.createElement("div",{className:"App"},r.a.createElement(Ee,null))))};t(325);o.a.render(r.a.createElement(aa,null),document.getElementById("root"))},42:function(e,a,t){e.exports={menuIcon:"NewHeader_menuIcon__3HMWp",navBrand:"NewHeader_navBrand__3I-KG",navSubContainer:"NewHeader_navSubContainer__3i6AE"}},43:function(e,a,t){e.exports={container:"MovieDetail_container__oorku",rating:"MovieDetail_rating__2pqZ7",overview:"MovieDetail_overview__3JnYP",tagline:"MovieDetail_tagline__z0VZw",star:"MovieDetail_star__1ivru",textMuted:"MovieDetail_textMuted__2b0zV"}},58:function(e,a,t){e.exports={footer:"MoviePageFooter_footer__11vUy",navActive:"MoviePageFooter_navActive__8DTZa"}},59:function(e,a,t){e.exports={castContainer:"MovieCastCrew_castContainer__KLQTZ",container:"MovieCastCrew_container__LXsIl",image:"MovieCastCrew_image__1Jp9Z",singleCastContainer:"MovieCastCrew_singleCastContainer__2If4J",textMuted:"MovieCastCrew_textMuted__2zkBJ"}},82:function(e,a,t){e.exports={mainContainer:"HorizontalWrapper_mainContainer__2dD5J",leftContainer:"HorizontalWrapper_leftContainer__3zVjy",rightContainer:"HorizontalWrapper_rightContainer___vPrp"}},83:function(e,a,t){e.exports={mainContainer:"VerticalWrapper_mainContainer__aoXOb",topContainer:"VerticalWrapper_topContainer__3iCWm",bottomContainer:"VerticalWrapper_bottomContainer__1bcdO"}}},[[167,1,2]]]);
//# sourceMappingURL=main.f6b710bc.chunk.js.map