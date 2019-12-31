//app.js
const http_ajax = require('./http_ajax')
App({
  globalData: {
    userInfo: null,
    openid: wx.getStorageSync('openid')||null,
    navHeight:30,//自定义导航栏的高度
    navTop:0//导航栏距离上端的高度
  },
  onLaunch: function () {
    //当使用自定义tabbar时需要将默认的tabbar隐藏
    wx.hideTabBar({
      fail: function () {
        setTimeout(function () {
          wx.hideTabBar()
        }, 500)
      }
    });
    //获取胶囊菜单的位置和高度
    let menuRectObj = wx.getMenuButtonBoundingClientRect()
    let top = menuRectObj.top
    let height = menuRectObj.height
    this.globalData.navHeight = height
    this.globalData.navTop = top 
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }else{
                console.log('暂时还没有userInfoReadyCallback')
              }
            }
          })
        }else{
          console.log("暂未授权")
        }
      }
    })
  },
  getUserOpenId(callback) {//登录懒加载
    const self = this
    if (self.globalData.openid){
      callback(null, self.globalData.openid)
    }else{
      wx.login({
        success(data){//code为获取的临时登录凭证
          wx.setStorageSync("openid", "openId")
          self.globalData.openid = wx.getStorageSync('openid')//正式调用接口时删除
          callback(null, self.globalData.openid)//正式调用接口时删除
          // http_ajax.http_get("请求地址",{code:data.code}).then(//调用服务器获取自定义登录态
          //   res=>{
          //     wx.setStorageSync("openid", res.data.openid)
          //     self.globalData.openid = wx.getStorageSync("openId")
          //     callback(res, self.globalData.openid)
          //   },
          //   err=>{
          //     console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res)
          //     callback(err)
          //   }
          // )
        }
      })
    }
  },
  checkLogin:function(){
    console.log("openId的值为:" + this.globalData.openid)
    if (!this.globalData.openid) {//如果用户没有登录态
      wx.redirectTo({
        url: '/pages/login/login'
      })
    }
  }
 
})