// pages/orderdetail/finish/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      catname:'',
      state:'退款',
      inforArray:[
        {
          name:'订单号:',
          content:'123123123'
        },{
          name:'下单时间:',
          content:'2019年4月3日'
        },{
          name:'收货人:',
          content:'张三'
        },{
          name:'地址:',
          content:'莫斯科，中央区，1-1'
        }
      ],
    imgUrl:'https://cdn-p.cian.site/images/6/906/336/633609615-2.jpg',
    price:'234235234235',
    num:'*1',
    title:'闲置化妆台一张闲置化妆台一张',
    goodnew:'九成新',
    costArray:[
      {
        name:'运费',
        cost:'4242卢布'
      },{
        name:'手续费',
        cost:'23423卢布'
      },{
        name:'委托服务费',
        cost:'0'
      }
    ],
    aftermeterArray:[
      {
        step:'申请退款',
        reason:'原因：新旧程度不符',
        time:'2018年2月3日 18：34：23'
      }, {
        step: '退款受理',
        reason: '原因：已联系卖家，同意退款',
        time: '2018年2月3日 18：34：23'
      }, {
        step: '退款完成',
        reason: '原因：退款已于2018年3月12日退换付款账户，请注意查收',
        time: '2018年2月3日 18：34：23'
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