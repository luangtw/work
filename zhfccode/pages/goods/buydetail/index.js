
var WxParse = require('../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    housedetail:[],
    id:'',
    reply:[],
    from: [
      { 'att': 'Tipzhilya：', 'value': '转售' },
      { 'att': '房间数量:', 'value': '2' },
      { 'att': '房间类型:', 'value': '绝缘' },
      { 'att': '楼层：', 'value': '5' },
      { 'att': '总楼层：', 'value': '9' },
      { 'att': '房屋类型：', 'value': '单片' },
      { 'att': '提货方式：', 'value': '自提/邮寄' },
      { 'att': '独立浴室：', 'value': '2' },
      { 'att': '从窗户进入:', 'value': '庭院' },
      { 'att': '建造年份:', 'value': '2006' },
      { 'att': '墙体材料：', 'value': '单片' },
      { 'att': '地板：', 'value': '9' },
      { 'att': '单元：', 'value': '4' },
      { 'att': '公寓：', 'value': '62' },
      { 'att': '每平方米的平均价格：', 'value': '924447卢布924447卢布' },
      { 'att': '名字:', 'value': '阿尔巴特' },
      { 'att': '地区:', 'value': '莫斯科' }
    ],
    images:[],
    area:'',
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
    swiperPic: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    beforeColor: 'white',
    afterColor: 'coral',
    tips:'由于地域性差异，95%以上的房源信息有可能不会租给外国人，为了方便客户了解市场和我们更好的服务客户，请详细填写找房要求'


  },

  //轮播图片点击预览事件
  imgYu: function (event) {
    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList = event.currentTarget.dataset.list;//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表

    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    this.gethousedetail(options);
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

  gethousedetail: function (options) {
    var that = this;//重置data{}里数据时候setData方法的this应为一级函数的this，如果在下方的success直接写this就变成了wx.request()的this了
    wx.request({
      url: 'https://frk.muztak.cn/house-detail',
      data: {
        type: 'Projects',
        id:options.id
      },
      header: {
        "Content-Type": "applciation/json"
      },
      method: "GET",
      success: function (res) {
        var dataModel = res.data;
        var article = dataModel.description;
        WxParse.wxParse('article', 'html', article, that, 5);
        var imgsrc = dataModel.image;
        var images=that.data.images;
        var swiperPic = that.data.swiperPic;
        for(var i=0;i<imgsrc.length;i++){
          images.push(imgsrc[i]); 
        }
        for (var i = 0; i < imgsrc.length;i++){
          swiperPic.push(imgsrc[i]);
        }
        
       //面积去掉小数点和后面的0，价格去掉小数点和后面的0，地址去掉地图俄文
       dataModel.area = parseInt(dataModel.area);
       dataModel.price = parseInt(dataModel.price);
       dataModel.position = dataModel.position.substring(0, dataModel.position.length - 8);
        that.setData({
          images: that.data.images,
          swiperPic: that.data.swiperPic,
          area:that.data.area
        })
          that.setData({
            housedetail: dataModel
          });
        
         
      },
      fail: function (err) { }, //请求失败
      complete: function () { } //请求完成后执行的函数
    })
  },


})