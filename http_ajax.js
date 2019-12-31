const config = require('./config')
function http_post(url, data) {
  return new Promise((resolve, reject) => {
     wx.request({
       url: `${config.commonDomainUrl}${url}`,
       data: data,
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       success: function (res) {
         resolve(res)
       },
       fail: function (res) {
         reject(res)
       }
     })
  })
}
function http_get(url,data){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: `${config.commonDomainUrl}${url}`,
      data:data,
      success: res => {
        resolve(res)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}
module.exports = {
  http_post
}