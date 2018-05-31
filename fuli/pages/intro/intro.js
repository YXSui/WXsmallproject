//index.js
var app = getApp()
Page({
  data: {
    primarySize: 'default',
    plain: false,
    defaultSize: 'default',
    disabled: false,
    iconType: 'info_circle',
    motto1: '房产投资',
    motto2: 'PE投资',
    motto3: '买房出租',
    motto4: '贷款利息',
    motto5: '复利计算'
  },
  //事件处理函数
  tofuli: function () {
    wx.navigateTo({
      url: '../fuli/fuli'
    })
  },
  tointro: function () {
    wx.navigateTo({
      url: '../intro/intro'
    })
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
