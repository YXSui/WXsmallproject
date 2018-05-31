// pages/fuli/fuli.js
const app = getApp()
const util = require('../utils/util.js')
var types = ['default', 'primary', 'warn']
var inputContent = {}
Page({
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    disabled: false,
    iconType: 'info_circle',
    plain: false,
    inputContent : {},
    qszj:'起始资金',
    mnsy:'每年收益',
    flns:'复利年数',
    zjzj:'每年追加资金',
    timeunit:'年',
    switcheck: false,
    ifchecked:{}
  },
  fulical: function () {
    var initMoney = parseFloat(inputContent['initMoney']);
    var rate = parseFloat(inputContent['rate']);
    var year = parseFloat(inputContent['year']);
    var each = parseFloat(inputContent['each']);
    var sum1 = (year - 1) * each + initMoney;
    var sum3 = each * util.fuli((1 + rate / 100), (year - 1)) + initMoney * util.power((1 + rate / 100), year);
    var sum2 = sum3 - sum1;
    this.setData({
      sum1: sum1.toFixed(2),
      sum2: sum2.toFixed(2),
      sum3: sum3.toFixed(2)
    })
    return sum1,sum2,sum3;
  },
  //保存input的值
  bindChange: function (e) {
    inputContent[e.currentTarget.id] = e.detail.value
  },
  switchChange: function(e){
    var switcheck=e.detail.value;
    if (switcheck===false){
      var var6 = '起始资金';
      var var7 = '每年收益';
      var var8 = '复利年数';
      var var9 = '每年追加资金';
      var var10 = '年';
      this.setData({
        qszj: var6,
        mnsy: var7,
        flns: var8,
        zjzj: var9,
        timeunit: var10,
      })
    }
    else if(switcheck===true){
      var var1 = '起始资金';
      var var2 = '每月收益';
      var var3 = '复利月数';
      var var4 = '每月追加资金';
      var var5 = '月';
      this.setData({
        qszj: var1,
        mnsy: var2,
        flns: var3,
        zjzj: var4,
        timeunit: var5,
      })
    };
    return;
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