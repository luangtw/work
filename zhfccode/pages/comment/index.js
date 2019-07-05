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
        user:'用户：科技网络'
      }, {
        picurl: 'https://cdn-p.cian.site/images/6/906/336/633609615-2.jpg',
        title: '优质网络安装服务，及时高效及时高效及时高效',
        time: '2019年3月2日',
        user: '用户：科技网络'
      }, {
        picurl: 'https://cdn-p.cian.site/images/6/906/336/633609615-2.jpg',
        title: '优质网络安装服务，及时高效及时高效及时高效',
        time: '2019年3月2日',
        user: '用户：科技网络'
      }, {
        picurl: 'https://cdn-p.cian.site/images/6/906/336/633609615-2.jpg',
        title: '优质网络安装服务，及时高效及时高效及时高效',
        time: '2019年3月2日',
        user: '用户：科技网络'
      }
    ],
    msg: [
      { 'user': '用户s2135', 'time': '12.48 4-8', 'good': '点赞', 'reply_b': '回复', 'comment': '已经卖了吗，能不能便宜点?' },
      { 'user': '用户s2125', 'time': '12.48 4-8', 'good': '点赞', 'reply_b': '回复', 'comment': '可不可以送上门', 'replyUser': '用户s311 回复：', 'reply': '自提，不送' },
    ],
    brawse: [
      { 'brawse': '浏览', 'quantity': '395' },
      { 'brawse': '收藏', 'quantity': '21' },
      { 'brawse': '评论', 'quantity': '8' },
      { 'brawse': '回复', 'quantity': '3' }
    ],
    selectedFlag:[]
  },

  toggleComment:function(e){
    var index=e.currentTarget.dataset.index;
    if(this.data.selectedFlag[index]){
      this.data.selectedFlag[index] = false
    }else{
      this.data.selectedFlag[index] = true;
    }
    this.setData({
      selectedFlag: this.data.selectedFlag
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