(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64214578"],{2337:function(t,o,n){},"527a":function(t,o,n){"use strict";var s=n("2337"),e=n.n(s);e.a},"9ebe":function(t,o,n){"use strict";n.r(o);var s=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"detailpage"},[n("div",{staticClass:"header"},[n("van-icon",{attrs:{name:"arrow-left"},on:{click:t.getBack}}),t._m(0)],1),n("van-swipe",{on:{change:t.onChange}},[t._l(t.bund_goods.img_list,function(t){return n("van-swipe-item",{key:t.index},[n("img",{attrs:{src:t.goods_image,alt:""}})])}),n("div",{staticClass:"custom-indicator",attrs:{slot:"indicator"},slot:"indicator"},[t._v("\n      "+t._s(t.current+1)+"/\n      "),n("span",[t._v("5")])])],2),n("div",{staticClass:"jieshao"},[n("p",{staticStyle:{width:"80%","font-size":"16px","margin-bottom":"20px"}},[t._v(t._s(t.goods_name))]),n("span",{staticStyle:{"font-size":"0.48rem",color:"#ff4b4b"}},[t._v("￥"+t._s(this.goods_price))]),n("p",{staticStyle:{color:"#808080","font-size":"10px","margin-top":"15px"}},[t._v("运费："+t._s(t.fare_title))])]),n("div",{staticClass:"picture",domProps:{innerHTML:t._s(t.goods_body)}}),n("van-goods-action",[n("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服"},on:{click:t.onClickIcon}}),n("van-goods-action-icon",{attrs:{icon:"cart-o",info:"0",text:"购物车",to:"/shopping"},on:{click:t.onClickIcon}}),n("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.onClickButton}}),n("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"},on:{click:t.onClickButton}})],1)],1)},e=[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"labelSpan"},[n("span",[t._v("商品")]),n("span",[t._v("详情")]),n("span",[t._v("推荐")]),n("span",[t._v("营业执照")])])}],a=(n("96cf"),n("3b8d")),i={data:function(){return{show:!1,active:0,current:0,bund_goods:[],goods_name:"",goods_price:"",fare_title:"",goods_body:""}},created:function(){this.detApage()},methods:{onClickIcon:function(){},onClickButton:function(){},getBack:function(){this.$router.go(-1)},onChange:function(t){this.current=t},detApage:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var o,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios("https://www.easy-mock.com/mock/5d4c1ea6c11cc157dfe0ea09/hoem/xiangqing");case 2:return o=t.sent,this.bund_goods=o.data.datas,this.goods_name=this.bund_goods.goods_info.goods_name,this.goods_price=this.bund_goods.goods_info.goods_price,this.fare_title=this.bund_goods.goods_info.fare_title,t.next=9,this.$axios("https://www.easy-mock.com/mock/5d4c1ea6c11cc157dfe0ea09/hoem/tupian");case 9:n=t.sent,this.goods_body=n.data.datas.goodsDetail.goods_body;case 11:case"end":return t.stop()}},t,this)}));function o(){return t.apply(this,arguments)}return o}()}},c=i,r=(n("527a"),n("2877")),d=Object(r["a"])(c,s,e,!1,null,null,null);o["default"]=d.exports}}]);
//# sourceMappingURL=chunk-64214578.f64afa94.js.map