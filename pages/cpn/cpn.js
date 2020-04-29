// pages/cpn/cpn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'lucy',
    counter: 0
  },

  //接收子页面事件
  fatherIncreament(event) {
    console.log(event.detail)
    this.setData({
      counter: this.data.counter + 1
    }) 
  },
  handleTabClick(event) {
    console.log(event)
  },
  //改变组件data
  handleChangeSon() {
    //获取组件对象
    const tabcontrol_cpn = this.selectComponent("#tabcontrol")
    console.log(tabcontrol_cpn)
    // 通过组件的methods修改
    tabcontrol_cpn.counterIncreamnet(2);
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    setTimeout(() => {
      this.setData({
        name: 'hanmeimei'
      })
    },3000)
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