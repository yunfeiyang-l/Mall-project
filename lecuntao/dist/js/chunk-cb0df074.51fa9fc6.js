(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb0df074"],{5597:function(t,s,e){"use strict";var a=e("9c7b"),n=e.n(a);n.a},"9c7b":function(t,s,e){},eb85:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"listpage"},[e("div",{staticClass:"headerTob"},[e("div",{staticClass:"header"},[e("van-icon",{attrs:{name:"arrow-left"},on:{click:t.getBack}}),e("h2",[t._v("干货")])],1),t._m(0)]),e("ul",{staticClass:"main"},t._l(t.getlistPages.list,function(s){return e("li",{key:s.index,attrs:{id:s.goods_id},on:{click:function(e){return t.skipDeta(s.goods_id)}}},[e("img",{attrs:{src:s.goods_image,alt:""}}),e("p",{domProps:{textContent:t._s(s.goods_name)}}),e("div",[e("span",{staticClass:"s1"},[t._v(t._s(s.goods_price)+"元")]),e("span",{staticClass:"s2"},[t._v(t._s(s.goods_salenum)+"人付款")])])])}),0)])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"label"},[e("span",[t._v("全部")]),e("span",[t._v("销量优先")]),e("span",[t._v("价格")]),e("span",[t._v("人气")])])}],i=(e("96cf"),e("3b8d")),c={data:function(){return{getlistPages:[]}},created:function(){this.listPage()},methods:{listPage:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios("https://www.easy-mock.com/mock/5d4c1ea6c11cc157dfe0ea09/hoem/listpage");case 2:s=t.sent,this.getlistPages=s.data.datas;case 4:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}(),getBack:function(){this.$router.go(-1)},skipDeta:function(t){this.$router.push({name:"detailpage",params:{id:t}})}}},r=c,o=(e("5597"),e("2877")),u=Object(o["a"])(r,a,n,!1,null,null,null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-cb0df074.51fa9fc6.js.map