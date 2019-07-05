// pages/historyorder/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sortarray: ['租赁', '买卖', '民宿'],
    sortindex: 0,
    ListArray:[
      {
        picurl:'https://cdn-p.cian.site/images/6/906/336/633609615-2.jpg',
        title:'优质网络安装服务，及时高效及时高效及时高效',
        time:'2019年3月2日',
        user:'用户：科技网络',
        sort:'二手商品',
        btn:'已浏览'
      }, {
        picurl: 'https://cdn-p.cian.site/images/6/906/336/633609615-2.jpg',
        title: '优质网络安装服务，及时高效及时高效及时高效',
        time: '2019年3月2日',
        user: '用户：科技网络',
        sort: '二手商品',
        btn: '已回复'
      }, {
        picurl: 'https://cdn-p.cian.site/images/6/906/336/633609615-2.jpg',
        title: '优质网络安装服务，及时高效及时高效及时高效',
        time: '2019年3月2日',
        user: '用户：科技网络',
        sort: '二手商品',
        btn: '已回复'
      }, {
        picurl: 'https://cdn-p.cian.site/images/6/906/336/633609615-2.jpg',
        title: '优质网络安装服务，及时高效及时高效及时高效',
        time: '2019年3月2日',
        user: '用户：科技网络',
        sort: '二手商品',
        btn: '已浏览'
      }
    ],
    state:'已浏览'
  },

  bindSortChange: function (e) {
    this.setData({
      sortindex: e.detail.value
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