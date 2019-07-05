// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '请输入搜索内容',
    newList:[
      {
        index:1,
        title:'价格行情',
        time:'2019-23-23'
      },{
        index: 2,
        title: '外国公民如何在俄罗斯买房',
        time: '2019-23-23'
      }, {
        index: 3,
        title: '无法获得保险赔偿金的五种原因',
        time: '2019-23-23'
      }, {
        index: 4,
        title: '从今年7月13日起俄罗斯停止发放不动产产权注册证',
        time: '2019-2-23'
      }, {
        index: 5,
        title: '房客是否可以按照租房地址进行临时性居住登记',
        time: '2019-3-23'
      }, {
        index: 6,
        title: '俄罗斯联邦不动产权利及相关法律行为登记法',
        time: '2019-3-23'
      }, {
        index: 7,
        title: '真人实例房东讹诈(一)',
        time: '2019-23-23'
      }, {
        index: 8,
        title: '卖房税：规则与实例',
        time: '2019-23-23'
      }, {
        index: 9,
        title: '首届俄罗斯房产法律咨询推介会圆满结束',
        time: '2019-3-23'
      }, {
        index: 10,
        title: '房客是如何上当受骗的',
        time: '2019-23-23'
      }, {
        index: 11,
        title: '莫斯科外期房的利与弊',
        time: '2019-23-23'
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

  },

  /**
     * 搜索框
     */
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },


})