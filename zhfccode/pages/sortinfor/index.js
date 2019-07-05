Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    showModal: false,
    showModalAll: false,
    rentList: [],
    buyList: [],
    selectedFlag: [false, false, false, false, false],
    boroughFlag: [],
    boroughArray: ['不限', 'HAO(新莫斯科区)', 'C3AO(西北区)', '3AO(西区)', 'HOAO(南区)', 'HO3AO(西南区)'],
    lineArray: ['不限', 'Федеральный город', 'Автономная республика', 'Края', 'Области', 'автономные округа', 'районы', 'города', '', '', '', '', '', '', '', ''],
    lineFlag: [],
    subWayFlag: [],
    subwayArray: ['不限', '1号线', '2号线', '3号线', '4号线', '5号线', '6号线', '7号线', '8号线', '9号线', '10号线'],
    layoutArray: ['不限', '一室', '二室', '三室', '四室', '五室', '五室以上'],
    homeFlag: [],
    _num: '',
  },

  selectShow: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.selectedFlag[index]) {
      this.data.selectedFlag[index] = false;
    } else {
      this.data.selectedFlag[index] = true;
    }
    this.setData({
      selectedFlag: this.data.selectedFlag
    })
  },

  toggleBorough: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.boroughFlag[index]) { this.data.boroughFlag[index] = false }
    else { this.data.boroughFlag[index] = true }
    this.setData({
      boroughFlag: this.data.boroughFlag
    })
  },

  toggleLine: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.lineFlag[index]) { this.data.lineFlag[index] = false }
    else { this.data.lineFlag[index] = true }
    this.setData({
      lineFlag: this.data.lineFlag
    })
  },

  togglesubWay: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.subWayFlag[index]) { this.data.subWayFlag[index] = false }
    else { this.data.subWayFlag[index] = true }
    this.setData({
      subWayFlag: this.data.subWayFlag
    })
  },

  toggleHome: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.homeFlag[index]) { this.data.homeFlag[index] = false }
    else { this.data.homeFlag[index] = true }
    this.setData({
      homeFlag: this.data.homeFlag
    })
  },

  /**
   * 弹出层
   */
  // 外面的弹窗
  showSelsectPrice: function (e) {
    this.setData({
      showModal: false,
      showModalAll: false,
      _num: e.currentTarget.dataset.num
    })
  },
  showSelectArea: function (e) {
    this.setData({
      showModal: false,
      showModalAll: false,
      _num: e.currentTarget.dataset.num
    })
  },
  showSelectLayout: function (e) {
    this.setData({
      showModal: false,
      showModalAll: false,
      _num: e.currentTarget.dataset.num
    })
  },
  showSelectAll: function (e) {
    this.setData({
      showModal: true,
      showModalAll: true,
      _num: e.currentTarget.dataset.num
    })
  },


  // 禁止屏幕滚动
  preventTouchMove: function () {
  },

  // 弹出层里面的弹窗
  ok: function () {
    this.setData({
      showModal: false,
      showModalAll: false,
      _num: ''
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getdata();
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

  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    this.getdata();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getdata: function () {
    var that = this;//重置data{}里数据时候setData方法的this应为一级函数的this，如果在下方的success直接写this就变成了wx.request()的this了
    wx.request({
      url: 'https://frk.muztak.cn/house-list?limit=4',
      data: {
        type: 'Projects'
      },
      header: {
        "Content-Type": "applciation/json"
      },
      method: "GET",
      success: function (res) {
        var dataModel = res.data;

          that.setData({
            rentList: dataModel,
            buyList: dataModel
          });
          // 设置数组元素
          that.setData({
            rentList: that.data.rentList,
            buyList:that.data.buyList
          });
          // 隐藏导航栏加载框
          wx.hideNavigationBarLoading();//隐藏导航栏加载突变
          // 停止下拉动作
          wx.stopPullDownRefresh();
        
      },
      fail: function (err) { }, //请求失败
      complete: function () { } //请求完成后执行的函数
    })
  },


})