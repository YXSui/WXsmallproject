//index.js
const app = getApp()
Page({
  data: {
    primarySize: 'default',
    plain: false,
    defaultSize: 'default',
    disabled: false,
    iconType: 'info_circle',
    motto:'开始你的投资规划',
    userInfo: {},
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
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
