(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{527:function(t,e,r){"use strict";var n={props:{src:{type:String,default:""},title:{type:String,default:""},height:{type:String,default:""}},data:function(){return{isImageModalActive:!1}}},c=r(17),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"image-modal"},[r("a",{on:{click:function(e){t.isImageModalActive=!0}}},[r("img",{staticClass:"image",style:"height: "+t.height+";",attrs:{src:t.src,title:t.title,alt:t.title}})]),t._v(" "),r("b-modal",{attrs:{active:t.isImageModalActive},on:{"update:active":function(e){t.isImageModalActive=e}}},[r("p",{staticClass:"image"},[r("img",{attrs:{src:t.src,title:t.title,alt:t.title}})])])],1)},[],!1,null,null,null);e.a=component.exports},538:function(t,e,r){"use strict";r.r(e);r(33);var n,c=r(7),l={components:{ImageModal:r(527).a},asyncData:(n=Object(c.a)(regeneratorRuntime.mark(function t(e){var r,n,c,l,o,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.app,n=e.route,c=e.error,l=n.params.slug,o="projects.".concat(l),(d=r.i18n.t(o))!==o){t.next=6;break}return t.abrupt("return",c({statusCode:404}));case 6:return t.abrupt("return",{slug:l,project:d});case 7:case"end":return t.stop()}},t)})),function(t){return n.apply(this,arguments)})},o=r(17),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"software-slug"},[r("section",{staticClass:"section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"columns is-vcentered"},[r("div",{staticClass:"column"},[r("p",{staticClass:"title"},[t._v(t._s(t.project.title))]),t._v(" "),r("p",{staticClass:"subtitle"},[t._v(t._s(t.project.description))]),t._v(" "),r("div",{staticClass:"content",domProps:{innerHTML:t._s(t.$md.render(t.project.body))}}),t._v(" "),r("div",{staticClass:"tags"},t._l(t.project.tags,function(e){return r("span",{key:e,staticClass:"tag"},[t._v("\n              "+t._s(e)+"\n            ")])}),0)]),t._v(" "),r("div",{staticClass:"column is-centered"},[t.project.thumbnail?r("image-modal",{attrs:{src:t.project.thumbnail,title:t.project.title,height:"400px"}}):t._e()],1)])])])])},[],!1,null,null,null);e.default=component.exports}}]);