// pages/historyorder/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ListArray:[
      {
        viewid:1,
        picurl:'https://cdn-p.cian.site/images/6/906/336/633609615-2.jpg',
        title:'优质网络安装服务，及时高效及时高效及时高效',
        time:'2019年3月2日',
        btn:'已完成',
        price:'42343卢布'
      }, {
        viewid:2,
        picurl: 'https://cdn-p.cian.site/images/6/906/336/633609615-2.jpg',
        title: '优质网络安装服务，及时高效及时高效及时高效',
        time: '2019年3月2日',
        btn: '待支付',
        price:'3442卢布'
      }, {
        viewid:3,
        picurl: 'https://cdn-p.cian.site/images/6/906/336/633609615-2.jpg',
        title: '优质网络安装服务，及时高效及时高效及时高效',
        time: '2019年3月2日',
        btn: '已完成',
        price: '6666644卢布'
      }, {
        viewid:4,
        picurl: 'https://cdn-p.cian.site/images/6/906/336/633609615-2.jpg',
        title: '优质网络安装服务，及时高效及时高效及时高效',
        time: '2019年3月2日',
        btn: '待支付',
        price: '344卢布'
      }
    ],
    state:'已完成'
  },

  /**
   * 订单跳转，已完成，待支付
   */
  orderDetail:function(e){
    var index=e.currentTarget.dataset.index;
    var listarray=this.data.ListArray;
    var state=listarray[index].btn;
    if(state=="已完成"){
      wx.navigateTo({
        url: '../orderdetail/finish/index?id=index'
      })
    }else{
      wx.navigateTo({
        url: '../orderdetail/pay/index?id=index'
      })
    }

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