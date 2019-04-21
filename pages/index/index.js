//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    wording: 'girl'
  },

  onClick: function() {
    this.setData({
      wording: 'boy'
    })
  },
  onLoad: function (e) {
    wx.showShareMenu({
      withShareTicket: true
    });
  },
})
