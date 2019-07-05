// pages/research/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price:'40000000',
    area:'三室150㎡',
    rentdate:'一年合同',
    startProduceDate:'2019-02-03',
    endProduceDate:'2019-04-07',
    selectedProduceDate:'2018-12-23',
    list: [
      { 'date': '7天内' },
      { 'date': '30天内'},
      { 'date': '90天内'}
    ],
    list1: [
      { 'objective': '自住' },
      { 'objective': '投资' },
      { 'objective': '理财' }
    ],
    list2: [
      { 'demand': '一手' },
      { 'demand': '二手' },
      { 'demand': '毛坯' },
      { 'demand': '拎包入住'}
    ],
    list3: [
      { 'range': '内环内' },
      { 'range': '三环内' },
      { 'range': '大环内' },
      { 'range': '大环外'},
      { 'range': '别墅'}
    ], 
    list4: [
      { 'demand': '1' },
      { 'demand': '2' },
      { 'demand': '3' },
      { 'demand': '4' },
      { 'demand': '5' },
      { 'demand': '6' }
    ],
    list5: [
      { 'objective': '男' },
      { 'objective': '女' }
    ],
  list6: [
    { 'objective': '长租' },
    { 'objective': '短租' },
    { 'objective': '日租' }
  ],
  list7: [
    { 'objective': '一居' },
    { 'objective': '两居' },
    { 'objective': '三居' },
    { 'objective': '四居' },
    { 'objective': '五居' },
  ],
    idx: 0,
    idx1: 0,
    idx2: 0,
    idx3: 0,
    idx4:0,
    idx5:0,
    idx6:0,
    idx7:0,
    cityarray: ['莫斯科', '圣彼得堡', '叶卡捷琳堡', '下诺夫哥罗德'],
    cityindex: 0,
    urgentarray: ['3天内', '7天内', '14天内','30天内'],
    urgentindex: 0,
    effectivearray: ['3天内', '7天内', '14天内', '30天内'],
    effectiveindex: 0,
    tips: '由于地域性差异，95%以上的房源信息有可能不会租给外国人，为了方便客户了解市场和我们更好的服务客户，请详细填写找房要求'

  },

  datestartChange:function(e){
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      startProduceDate:e.detail.value
    })
    
  },

  bindUrgentChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      urgentindex: e.detail.value
    })
  },
  bindeffectiveChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      effectiveindex: e.detail.value
    })
  },
  dateendChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      endProduceDate: e.detail.value
    })

  },

  objectiveIndex(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      idx1: index
    })
  },
  rentsortIndex(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      idx6: index
    })
  },
  roomsIndex(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      idx7: index
    })
  },
  peopleIndex(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      idx4: index
    })
  },

  sexIndex(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      idx5: index
    })
  },


  demandIndex(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      idx2: index
    })
  },

  rangeIndex(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      idx3: index
    })
  },

  dateIndex(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      idx: index
    })
  },

  // 弹窗
  showDialogBtn: function () {
    this.setData({
      showModal: true
    })
  },

  // 弹出框蒙层截断touchmove事件
  preventTouchMove: function () {

  },

  // 隐藏模态对话框
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },

  // 对话框取消按钮点击事件
  onCancel: function () {
    this.hideModal();
  },

  // 对话框确认按钮点击事件
  onConfirm: function () {
    wx.showToast({
      title: '更改成功',
      icon: 'success',
      duration: 2000
    })
    this.hideModal();
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