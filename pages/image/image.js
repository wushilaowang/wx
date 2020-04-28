// pages/image/image.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imageUrl1: ''
  },
  //图片加载完毕触发
  handleBindLoad() {
    console.log('加载图片')
  },
//选择图片上传
  handleUploadImage() {
    wx.chooseImage({
      //图片上传成功回调图片
      success: (res) => {
        console.log(res)
        this.setData({
          imageUrl1: res.tempFilePaths[0]
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})