"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[959],{7623:function(e,t,n){n.d(t,{Z:function(){return j}});var i=n(5861),a=n(885),r=n(7757),o=n.n(r),c=n(2791),s=n(9686),l="TrailerModal_overlayModal__Vt4Xe",u="TrailerModal_modal-div__r75dI",d=n(184);function h(e){e.trailerMovieName;var t=e.closeModal;(0,c.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t]);return(0,d.jsx)("div",{className:l,onClick:function(e){e.currentTarget===e.target&&t()},children:(0,d.jsx)("div",{className:u,children:(0,d.jsx)(s.Z,{videoId:"AiohkY_XQYQ",opts:{height:"400",width:"720",playerVars:{autoplay:1}}})})})}var f=n(898),v=n(1087),p=n(7689),m=n(3160),g="Banner_banner__7KCUI",_="Banner_banner_content__VMkGJ",x="Banner_banner_title__eMG++",b="Banner_banner_description__x8a5L",w="Banner_banner_button__bIOQQ",k="Banner_fadeBottom__LdeWC";function j(e){var t=e.isRandomMovie,n=(0,c.useState)([]),r=(0,a.Z)(n,2),s=r[0],l=r[1],u=(0,c.useState)(""),j=(0,a.Z)(u,2),S=j[0],T=j[1],Z=(0,p.UO)().movieId,N=(0,p.TH)();(0,c.useEffect)((function(){function e(){return(e=(0,i.Z)(o().mark((function e(){var n,i,a,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}return e.next=3,m.Z.get(f.c.fetchTrending);case 3:n=e.sent,i=n.data,l(i.results[Math.floor(Math.random()*i.results.length)]),e.next=13;break;case 8:return e.next=10,m.Z.get(f.c.fetchSingleMovie(Z));case 10:a=e.sent,r=a.data,l(r);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,Z]);var y,U;return(0,d.jsxs)("header",{className:g,style:{backgroundSize:"cover",backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(null===s||void 0===s?void 0:s.backdrop_path,")"),backgroundPosition:"center"},children:[(0,d.jsxs)("div",{className:_,children:[(0,d.jsx)("h1",{className:x,children:(null===s||void 0===s?void 0:s.title)||(null===s||void 0===s?void 0:s.name)||(null===s||void 0===s?void 0:s.original_name)}),(0,d.jsx)("div",{className:"banner_buttons"}),t&&(0,d.jsx)("button",{type:"button",className:w,onClick:function(){return function(e){T((null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_title))}(s)},children:"Watch trailer"}),!t&&(0,d.jsx)(v.rU,{to:"reviews",className:w,state:N.state,children:"Reviews"}),!t&&(0,d.jsx)(v.rU,{to:"casts",className:w,state:N.state,children:"Casts"}),(0,d.jsx)("h2",{className:b,children:t?(y=null===s||void 0===s?void 0:s.overview,U=150,(null===y||void 0===y?void 0:y.length)>U?(null===y||void 0===y?void 0:y.slice(0,U-1))+"\u2026":y):null===s||void 0===s?void 0:s.overview})]}),(0,d.jsx)("div",{className:k}),S&&(0,d.jsx)(h,{movieName:S,closeModal:function(){return T("")}})]})}},8015:function(e,t,n){n.d(t,{Z:function(){return f}});var i=n(8683),a=n(5861),r=n(885),o=n(7757),c=n.n(o),s=n(2791),l=(n(3037),n(8688),n(1087)),u=n(3160),d=n(5717),h=n(184);function f(e){var t=e.title,n=e.fetchURL,o=e.isLargePicture,f=(0,s.useState)([]),v=(0,r.Z)(f,2),p=v[0],m=v[1];(0,s.useEffect)((function(){function e(){return(e=(0,a.Z)(c().mark((function e(){var t,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get(n);case 2:return t=e.sent,i=t.data,m(i.results),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);return(0,h.jsxs)("div",{className:"row",children:[Boolean(p.length)&&(0,h.jsx)("h2",{children:t}),(0,h.jsx)("div",{className:"sliderWrapper",children:(0,h.jsx)(d.Z,(0,i.Z)((0,i.Z)({},{dots:!0,infinite:!1,speed:500,slidesToShow:7,slidesToScroll:4,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:7,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:7,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),{},{children:p.map((function(e){return(0,h.jsx)(l.rU,{className:"'row_poster' ".concat(o&&"row_poster_large"),to:"/movies/".concat(e.id),"aria-current":"true",children:(0,h.jsx)("img",{className:"row_img",src:"".concat("https://image.tmdb.org/t/p/original").concat(o?e.poster_path:e.backdrop_path),alt:e.title})},e.id)}))}))})]})}},3160:function(e,t,n){var i=n(1044).ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"08cfb1cba341ef968995af439d190569"}});t.Z=i},898:function(e,t,n){n.d(t,{c:function(){return i}});var i={fetchLoginWithPass:"/authentication/token/validate_with_login",fetchCreateSession:"authentication/session/new?",fetchToken:"/authentication/token/new?",fetchTrending:"/trending/movie/day?",fetchTopRaiting:"movie/top_rated?&language=en-US&page=1",fetchUpcoming:"movie/upcoming?&language=en-US&page=1",fetchGuestSession:"/authentication/guest_session/new",fetchAddToFavorete:"/account/q/favorite",fetchReview:function(e){return"/movie/".concat(e,"/reviews?")},fetchSimilar:function(e){return"movie/".concat(e,"/similar?&language=en-US&page=1")},fetchSingleMovie:function(e){return"/movie/".concat(e,"?")},fetchMovieByName:function(e){return"/search/movie?query=".concat(e,"&page=1&")},fetchCasts:function(e){return"/movie/".concat(e,"/credits?")},fetchActor:function(e){return"/person/".concat(e,"?")}}},680:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var i=n(898),a=n(7623),r=n(8015),o=n(184);function c(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Z,{isRandomMovie:!0}),(0,o.jsx)(r.Z,{fetchURL:i.c.fetchTrending,title:"Trending Today",isLargePicture:!0}),(0,o.jsx)(r.Z,{title:"Top raiting",fetchURL:i.c.fetchTopRaiting}),(0,o.jsx)(r.Z,{title:"Upcoming",fetchURL:i.c.fetchUpcoming})]})}}}]);
//# sourceMappingURL=959.f9dacc1d.chunk.js.map