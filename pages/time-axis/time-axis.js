// pages/time-axis/time-axis.js
const http_ajax = require('../../http_ajax')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // textArray: ["2019-05-21 21:09:09 描述一","2019-05-21 21:09:09","2019-05-21 21:09:09"],
    activities: [{
      isCurent: true, //是否是当前时间点
      axisTitle: '取消退货', //标题
      axisTime: '2018-2-15', //时间点
     
    }, {
      axisTitle: '买家修改申请',
      axisTime: '2018-2-15',
      textArray: ["描述一", "描述二", "描述三"] //详情描述列表
    }, {
      axisTitle: '买家修改退货',
      axisTime: '2018-2-15',
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    app.checkLogin() //判断是否有openId，若没有返回到登录页面
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})