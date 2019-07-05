// pages/secondhand_datelied/secondhand_datelied.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    catname:'',
    imgUrl:'../../../images/sw1.jpg',
    tit: '出售闲置无用的化妆台一张，5800卢布，有意者加微信8369210，花儿',
    time: '2019年4月8日',
    user: '国宝花儿',
    price:'95589996卢布',
    permeter:'1231431卢布/平米',
    rooms:'2室公寓',
    meters:'92.6平方米',
    floors:'5楼(共9楼)',
    address1:'简述，概要描述在住宅区“俄罗斯现代”，29日委托',
    address:'地址：城市，行政区，片区街道地址，莫斯科，中央行政区，阿尔巴特区，29Gogolevsky大道',
    subway:'地铁：地铁站名，阿尔巴特5分钟，kropotkinskaya步行6分钟。borovitskaya步行10分钟',
    from: [
      { 'att': '价格：', 'value': '5800卢布' },
      { 'att': '品牌:', 'value': 'AaaH' },
      { 'att': '使用时间:', 'value': '2年' },
      { 'att': '新旧程度', 'value': '9成新' },
      { 'att': '联系方式', 'value': '+7 8080 88888' },
      { 'att': '地址：', 'value': '莫斯科国立大学(地铁大学站)' },
      { 'att': '提货方式：', 'value': '自提/邮寄' }
    ],
    images: [
      { 'image': '../../../images/temp2.jpg' },
      { 'image': '../../../images/temp3.jpg' },
      { 'image': '../../../images/temp4.jpg' }
    ],
    int: '在俄罗斯现代住宅区提供一个漂亮的两卧室公寓。公寓的内部采用现代风格，采用优质天然材料制成。公寓设备齐全，配有豪华家具，配备领先制造商的现代化设备，随时可供客人使用。实用的布局包括处方，宽敞的起居室，带私人浴室的我是，更衣室和客用浴室。公寓的窗户俯瞰着宁静的庭院。酒店设有围栏区，地下停车场，24小时保安和视频监控。便利的交通便利性和该地区完善的基础设施将使公寓生活更加舒适。',
    prcie: '价钱',
    money: '5800卢布',
    p: 'aum',
    msg: [
      { 'user': '用户s2135', 'time': '12.48 4-8', 'good': '点赞', 'reply_b': '回复', 'comment': '已经卖了吗，能不能便宜点?' },
      { 'user': '用户s2125', 'time': '12.48 4-8', 'good': '点赞', 'reply_b': '回复', 'comment': '可不可以送上门', 'replyUser': '用户s311 回复：', 'reply': '自提，不送' },
    ],
    brawse: [
      { 'brawse': '浏览', 'quantity': '395' },
      { 'brawse': '收藏', 'quantity': '21' },
      { 'brawse': '评论', 'quantity': '8' },
      { 'brawse': '分享', 'quantity': '22' }
    ],
    imgUrls: [
      {
        url: '../../../images/sw1.jpg'
      }, {
        url: '../../../images/sw2.jpg'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    beforeColor: 'white',
    afterColor: 'coral',
    tips:'由于地域性差异，95%以上的房源信息有可能不会租给外国人，为了方便客户了解市场和我们更好的服务客户，请详细填写找房要求'


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (a) {
    wx.setNavigationBarTitle({
      title: a.catname
    })
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