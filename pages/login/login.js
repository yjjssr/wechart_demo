// pages/login/login.js
// const util = require('../../utils/util');
const http_ajax = require('../../http_ajax')
const app = getApp()
Page({
  confirm_login: function(e) {
    if (!e.detail.value.uid || !e.detail.value.pwd) {
      wx.showToast({
        title: '请完整输入',
        duration: 2000,
        mask: true,
        icon: 'none'
      })
    } else {
      app.getUserOpenId(function(res, openid) {
        wx.switchTab({ //正式调用接口时删除
          url: '../index/index',
        })
        //根据获取得到的openId进一步调用接口获取改用户的信息
        // http_ajax.http_post('地址','参数').then(res=>{
        // wx.switchTab({ //因为index被设置为自定义的tabbar的其中一个页面因此redirectTo失效
        //   url: '../index/index',
        // })
        // },err=>{
        //   wx.showToast({
        //     title: '登录失败',
        //     duration: 2000,
        //     mask: true,
        //     icon: 'none'
        //   })
        // })

      })

    }

  },
  navigate_password: function() {
    wx.navigateTo({
      url: '../password_back/password_back'
    })
  },
  navigate_register: function() {
    wx.navigateTo({
      url: '../register/register'
    })
  }
})