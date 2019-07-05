// pages/post/posting/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sortarray: ['租赁', '买卖', '民宿'],
    sortindex: 0,
    img: 'https://cdn-p.cian.site/images/6/906/336/633609615-2.jpg',
    arr: [
      {'name' : '价格', 'value': '9000卢布' },
      { 'name': '详细地址', 'value': '莫斯科，中央区ICS' },
      { 'name': '联系方式', 'value': '13162656' },
      { 'name': '电子邮箱', 'value': '2523232@qq.com' }
    ],
    inputValue:''

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