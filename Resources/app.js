// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window ,hehah',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var view1 = Titanium.UI.createView({
  borderRadius:10,
  backgroundColor: 'white',
    top:20,
    width:100,
    height:100
});

var sharesdk = require("com.mamashai.sharesdk");

var button_share = Titanium.UI.createButton({
    title: "分享",
    top: 30,
    width: 100,
    height: 30,
    font: {fontSize: 30},
    backgroundImage : "/images/bg.png",
    backgroundSelectedImage : "/images/bg_select.png",
    color: "blue"
})

sharesdk.addEventListener("share_success", function(e){
  Ti.API.log("分享成功", e.platform);
})

button_share.addEventListener("click", function(e){
  sharesdk.share({
    title: "sharesdk测试",
    type: "news",
    content: "我们的口号是：优先享受优质生活。",
    url: "http:sina.com.cn",
    imageUrl: ""
  });
})

view1.add(button_share);
win1.add(view1);
win1.add(label1);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
//第三方登录的架子
var login_sina = Ti.UI.createButton({
  width: 50,
    height: 30,
    left: 20,
    right: 20,
    title: "微博登录",
    color: "blue",
    font: {fontSize: 10},
    backgroundImage: "/images/login_qq.png"
});
var login_wx = Ti.UI.createButton({
  width: 50,
    height: 30,
    left: 20,
    right: 20,
    title: "wx登录",
    color: "blue",
    font: {fontSize: 10},
    backgroundImage: "/images/login_qq.png"
});
var login_qq = Ti.UI.createButton({
  width: 50,
    height: 30,
    left: 20,
    right: 20,
    title: "qq登录",
    color: "blue",
    font: {fontSize: 10},
    backgroundImage: "/images/login_qq.png"
});
var sharesdk = require("com.mamashai.sharesdk");
sharesdk.addEventListener("third_login", function(e){
      if (!e.uid && !e.token){
                return;
                    }

          var options = {
              uid: e.uid,
              token: e.token,
              nick: e.nickname,
              logo: e.profileImage,
              gender: e.gender,
              platform: e.platform
      }

              if (e.json){
                        options.json = e.json;
                            }
                  http_call({
                            //url: "http://serverurl.com/api/user/third_login",
                            url: "",
                          success: function(e){
                                        alert(e.responseText)
                            },
                          method: "POST",
                          args: options
                        })
});
login_wx.addEventListener("click", function(e){
      sharesdk.login({
                tp: "Wechat"
            });
})

login_qq.addEventListener("click", function(e){
      sharesdk.login({
        tp: "QZone"
            });
})

login_sina.addEventListener("click", function(e){
      sharesdk.login({
                tp: "SinaWeibo"
            });
})
var wrapper1 = Ti.UI.createView({
		top:  200,
		width: 200,
		height: 250,
		layout: 'horizontal'
	})
wrapper1.add(login_wx);
wrapper1.add(login_qq);
wrapper1.add(login_sina);
win2.add(wrapper1);

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);


// open tab group
tabGroup.open();
