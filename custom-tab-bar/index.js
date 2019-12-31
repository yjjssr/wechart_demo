Component({
  data: {
    selected: 0,
    color: "#dbdbdb",
    selectedColor: "#e5971f",
    "list": [
      {
        "text": "首页",
        "iconPath": "../assets/images/upload_inactive.png",
        "selectedIconPath": "../assets/images/upload_active.png",
        "pagePath": "../index/index"
      },
      {
        "text": "时间轴",
        "iconPath": "../assets/images/axis_inactive.png",
        "selectedIconPath": "../assets/images/axis_active.png",
        "pagePath": "../time-axis/time-axis"
      }
    ]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})