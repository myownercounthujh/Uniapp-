
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/login/register","pages/login/recommendSelect","pages/bookmanager/index","pages/tabbar/home/home","pages/bookmanager/bookEntry","pages/bookmanager/bookBorrow","pages/bookmanager/message","pages/bookmanager/messageList2","pages/tabbar/message/messageList","pages/tabbar/bookrack/bookrack","pages/tabbar/bookrack/reading","pages/tabbar/home/reading","pages/tabbar/tabbar-3/tabbar-3","pages/tabbar/message/message","pages/tabbar/mine/mine","pages/tabbar/mine/setting","pages/tabbar/mine/debit","pages/tabbar/mine/forward","pages/tabbar/mine/addForward","pages/tabbar-3-detial/tabbar-3-release/tabbar-3-release","pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video","pages/tabbar-3-detial/tabbar-3-qa/tabbar-3-qa"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"borderStyle":"blue","backgroundColor":" #00aded","color":"#8F8F94","selectedColor":"#f33e54","list":[{"pagePath":"pages/tabbar/home/home","iconPath":"static/img/tabbar/home.png","selectedIconPath":"static/img/tabbar/homeactive.png","text":"首页"},{"pagePath":"pages/tabbar/bookrack/bookrack","iconPath":"static/img/tabbar/guanzhu.png","selectedIconPath":"static/img/tabbar/guanzhuactive.png","text":"书架"},{"pagePath":"pages/tabbar/tabbar-3/tabbar-3","iconPath":"static/img/tabbar/add.png","selectedIconPath":"static/img/tabbar/addactive.png"},{"pagePath":"pages/tabbar/message/message","iconPath":"static/img/tabbar/news.png","selectedIconPath":"static/img/tabbar/newsactive.png","text":"消息"},{"pagePath":"pages/tabbar/mine/mine","iconPath":"static/img/tabbar/me.png","selectedIconPath":"static/img/tabbar/meactive.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"wangbook-app-ui","compilerVersion":"3.3.5","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{}},{"path":"/pages/login/register","meta":{},"window":{"navigationStyle":"custom","popGesture":"none","titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"100px"}}},{"path":"/pages/login/recommendSelect","meta":{},"window":{}},{"path":"/pages/bookmanager/index","meta":{},"window":{"navigationStyle":"custom","popGesture":"none","titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"100px"}}},{"path":"/pages/tabbar/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","popGesture":"none","titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"100px"}}},{"path":"/pages/bookmanager/bookEntry","meta":{},"window":{"navigationStyle":"custom","popGesture":"none","titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"100px"}}},{"path":"/pages/bookmanager/bookBorrow","meta":{},"window":{"navigationStyle":"custom","popGesture":"none","titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"100px"}}},{"path":"/pages/bookmanager/message","meta":{},"window":{"navigationStyle":"custom","popGesture":"none","titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"100px"}}},{"path":"/pages/bookmanager/messageList2","meta":{},"window":{"navigationStyle":"custom","popGesture":"none","titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"100px"}}},{"path":"/pages/tabbar/message/messageList","meta":{},"window":{"navigationStyle":"custom","popGesture":"none","titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"100px"}}},{"path":"/pages/tabbar/bookrack/bookrack","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","popGesture":"none","titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"100px"}}},{"path":"/pages/tabbar/bookrack/reading","meta":{},"window":{"navigationStyle":"custom","popGesture":"none","titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"100px"}}},{"path":"/pages/tabbar/home/reading","meta":{},"window":{"navigationStyle":"custom","popGesture":"none","titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"100px"}}},{"path":"/pages/tabbar/tabbar-3/tabbar-3","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/tabbar/message/message","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","popGesture":"none","titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"100px"}}},{"path":"/pages/tabbar/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","popGesture":"none","titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"100px"}}},{"path":"/pages/tabbar/mine/setting","meta":{},"window":{"navigationStyle":"custom","popGesture":"none","titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"100px"}}},{"path":"/pages/tabbar/mine/debit","meta":{},"window":{"navigationStyle":"custom","popGesture":"none","titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"100px"}}},{"path":"/pages/tabbar/mine/forward","meta":{},"window":{"navigationStyle":"custom","popGesture":"none","titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"100px"}}},{"path":"/pages/tabbar/mine/addForward","meta":{},"window":{"navigationStyle":"custom","popGesture":"none","titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"100px"}}},{"path":"/pages/tabbar-3-detial/tabbar-3-release/tabbar-3-release","meta":{},"window":{}},{"path":"/pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video","meta":{},"window":{}},{"path":"/pages/tabbar-3-detial/tabbar-3-qa/tabbar-3-qa","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});