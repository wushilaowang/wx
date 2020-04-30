// Pages/home/home.js
import request from '../../service/request'
Page({
  //函数返回
  handleBack() {
    wx.navigateBack({
    })
  },
  //获取opeanid和session
  handleGetToken() {
    wx.login({
      success: res => {
        if(res.code) {
          console.log(res.code)
          wx.request({
            url: 'http://39.97.214.57:90/user/miniToken',
            data: {code: res.code},
            success: resu => {
              console.log(JSON.parse(resu.data.data))
            }
          })
        }
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
    return {
      title: '分享',
      path: '/pages/about/about',
      imageUrl: 'https://static.tukuppt.com/common/image/collect.png'
    }
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('页面退出');
    //获取当前所有活跃页面
    let pages = getCurrentPages();
    console.log(pages)
    //获取到about page对象
    const about = pages[pages.length - 2]
    about.setData({
      title: 'home传来的数据'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
    onLoad: function(options) {
      console.log(options);
    },
  // onLoad: function (options) {
  //   request({
  //     url: 'https://www.baidu.com/s?ie=utf-8&newi=1&mod=1&isbd=1&isid=dee70f5d0003faa1&wd=%E6%B0%B4%E6%BB%B4%E5%A3%B0&rsv_spt=1&rsv_iqid=0xb41a51ab000a3a1d&issp=1&f=3&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=48021271_15_hao_pg&rsv_enter=0&rsv_dl=ts_2&oq=%25E6%25B0%25B4%25E6%25BB%25B4%25E5%25A3%25B0&rsv_btype=t&rsv_t=b0070NksVLF3xyzcAV6fd1aHBRvMA53kqyuKNbM19zEvqPfDLZTWMUxkP2XEhrCwbxMieF%2Bl4vRu&rsv_pq=dee70f5d0003faa1&prefixsug=%25E6%25B0%25B4%25E6%25BB%25B4%25E5%25A3%25B0&rsp=2&bs=%E6%B0%B4%E6%BB%B4%E5%A3%B0&rsv_sid=&_ss=1&clist=&hsug=&f4s=1&csor=3&_cr1=39672',
  //     data: {}
  //   }).then(res => {
  //     console.log(res)
  //   })
  // },

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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  
})