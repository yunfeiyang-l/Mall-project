import Vue from 'vue'; //引入vue
import { //定义组件
  Tabbar,
  TabbarItem, //底部
  Search, //搜索
  Swipe,
  SwipeItem, //轮播图
  //Grid, GridItem,     //宫格
  Button, //按钮
  List, //懒加载
  Cell,
  CellGroup, //单元格
  Sticky, //吸顶
  Sidebar,
  SidebarItem, //侧边导航
  Icon, //字符图标
  Tab,
  Tabs, //Tab 标签页
  GoodsAction, //详情页底部
  GoodsActionIcon,
  GoodsActionButton,
  ActionSheet, //ActionSheet 上拉菜单

} from 'vant';

export default () => { //注册组件
  Vue //底部
    .use(Tabbar)
    .use(TabbarItem)
    //搜索
    .use(Search)
    //轮播图
    .use(Swipe).use(SwipeItem)
    //宫格
    //.use(Grid).use(GridItem);
    //按钮
    .use(Button)
    //懒加载
    .use(List)
    //单元格
    .use(Cell).use(CellGroup)
    //吸顶
    .use(Sticky)
    // 侧边导航
    .use(Sidebar)
    .use(SidebarItem)
    // 字符图标
    .use(Icon)
    //Tab 标签页
    .use(Tab).use(Tabs)
    //详情页底部
    .use(GoodsAction)
    .use(GoodsActionIcon)
    .use(GoodsActionButton)
    //ActionSheet 上拉菜单
    .use(ActionSheet)


}