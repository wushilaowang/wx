// pages/currenttarget/currenttarget.js
Page({
  handleInner(event) {
    console.log(event)
  },
  handleOuter(event) {
    console.log(event)
  },
  //事件传值
  handleTitleClick(event) {
    console.log(event.currentTarget.dataset)
  },
  //冒泡捕获
  bind1() {
    console.log('bind1')
  },
  catch1() {
    console.log('catch1')
  },
  bind2() {
    console.log('bind2')
  },
  catch2() {
    console.log('catch2')
  },
  bind3() {
    console.log('bind3')
  },
  catch3() {
    console.log('catch3')
  },
  /**
   * 页面的初始数据
   */
  data: {
    title: [
      '上',
      '中',
      '下'
    ]
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