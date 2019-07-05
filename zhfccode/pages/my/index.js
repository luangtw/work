// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */

  
  // 跳转至发布页
  publish: function () {
    wx.navigateTo({
      url: "/pages/user/publish/publish"
    })
  },
  data: {
    //  数据绑定
    tit: '个人信息',
    name: '张三',
    sex: '男',
    birthday: '1996/09/07',
    num: '0',
    imgWidth: '0',
    hideClass: 'xInformationBox',
    person:'https://cdn-p.cian.site/images/6/906/336/633609615-2.jpg',
    nickname:'Hll',
    WeChat:'123165321',
    phone:'18276459741',
    id:'225306',
    assortment: [
      { 
        'tit': '个人信息',
        'num': '1', 
        'status': '0',
        information: [
          { 'name': '姓名', 'value': '张三'},
          { 'name': '性别', 'value': '男' },
          { 'name': '生日', 'value': '1998/09/07' },
          { 'name': '更多', 'value': '' }
        ]
      },
      { 'tit': '评论', 'num': '2', 'status': '0',},
      { 'tit': '收藏', 'num': '3', 'status': '0',},
      { 
        'tit': '帖子',
        'num': '4', 
        'status': '0',
        information: [
          {'name': '发帖'},
          {'name': '看过的'}
        ]
      },
      {
        'tit': '订单',
        'num': '3', 
        'status': '0',
        information: [
          { 'name': '历史订单' },
        ]
      }
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
    // 图片自适应console.log(12313);
    var img = this;
    wx.getImageInfo({
      src: img.data.person,
      success: function (res) {
        img.setData({
          imgWidth: res.width,
          imgHeight: res.height,
          ratio: res.width /res.height,
          changeRatio: 160/res.width,
        })
      },
    })
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