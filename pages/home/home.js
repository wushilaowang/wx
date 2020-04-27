// Pages/home/home.js
const app = getApp()

Page({
  // 生命周期函数
  onLoad() {
    wx.request({
      url: 'http://39.97.214.57:90/goods/findAll?pageNum=1&pageRecord=10&query=',
      success: (res) => {
        console.log(res)
      }
    })
    console.log('页面加载')
  },
  onShow() {
    console.log('页面显示')
  },
  onReady() {
    console.log(' 页面初次渲染完成')
  },
  onHide() {
    console.log('页面隐藏')
  },
  onUnload() {
    console.log('页面卸载')
  },
  //初始化数据
  data: {
    lucyName: app.globalData.name,
    class: '2(1)班',
    students: [
      {name: '一号', age: 5},
      {name: '二号', age: 4},
      {name: '仨号', age: 3}
    ],
    counter: 0
  },
  //获取授权
  bindGetUserInfo(e) {
    console.log(e)
  },
  //点击事件
  handleAdditon() {
    this.setData({
      counter : this.data.counter + 1
    })
  },
  //底部加载更多
  onReachBottom() {
    console.log('上拉加载更多')
  },
  //监听下拉动作
  onPullDownRefresh() {
    console.log('下拉刷新')
  }
})