var page = 1;
var offset = 0;
var sortRule = true;
var _property= '';

// pages/goods/sortlist/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:'',
      catname:'',
      inputShowed: false,
      inputVal: "",
      showModal:false,
      showModalAll:false,
    houseListArray: [],
    houseNum:'6345',

    selectedFlag: [false, false, false, false, false],
    boroughFlag: [],
    boroughArray: ['不限', 'HAO(新莫斯科区)', 'C3AO(西北区)', '3AO(西区)', 'HOAO(南区)', 'HO3AO(西南区)'],
    lineArray: ['不限', 'Федеральный город', 'Автономная республика', 'Края', 'Области', 'автономные округа', 'районы', 'города', '', '', '', '', '', '', '', ''],
    lineFlag: [],
    subWayFlag:[],
    subwayArray: ['不限', '1号线', '2号线', '3号线', '4号线', '5号线', '6号线', '7号线', '8号线', '9号线', '10号线'],
    layoutArray: ['不限', '一室', '二室', '三室', '四室', '五室', '五室以上'],
    homeFlag:[],
    _num:'',
    

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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getdata();
    //页面传参，修改顶部标题
    that.setData({
      catname:options.catname,
      id:options.id
    })
    wx.setNavigationBarTitle({
      title: that.data.catname//页面标题为路由参数
    })

  },


  getdata: function () {
    var that = this;//重置data{}里数据时候setData方法的this应为一级函数的this，如果在下方的success直接写this就变成了wx.request()的this了
    wx.request({
      url: 'https://frk.muztak.cn/house-list?limit=20',
      data: {
        type: 'Projects',
        p: page,
        offset: offset
      },
      header: {
        "Content-Type": "applciation/json"
      },
      method: "GET",
      success: function (res) {
        var dataModel = res.data;
        //console.log(dataModel);
        //价格去掉小数点和后面的0，地址去掉最后的地图俄文,面积去掉小数点和0
        for (var i = 0; i < dataModel.length; i++) {
          dataModel[i].price = parseInt(dataModel[i].price);
          dataModel[i].area = parseInt(dataModel[i].area);
          dataModel[i].position = dataModel[i].position.substring(0, dataModel[i].position.length - 8);
        }
        if (page == 1) {
          that.setData({
            houseListArray: dataModel
          });
          // 设置数组元素
          that.setData({
            houseListArray: that.data.houseListArray
          });
          // 隐藏导航栏加载框
          wx.hideNavigationBarLoading();//隐藏导航栏加载突变
          // 停止下拉动作
          wx.stopPullDownRefresh();
        } else {
          // 回调函数
          var moment_list = that.data.houseListArray;
          var _num=that.data._num;

          if (_num && _property) { dataModel.sort(that.compare(_property, sortRule))}
          for (var i = offset, l = (i + dataModel.length); i < l; i++) {
             moment_list.push(dataModel[i % 5])
          }
          // 设置数据
          that.setData({
            houseListArray: that.data.houseListArray
          })
          // 隐藏加载框
          wx.hideLoading();
        }
      },
      fail: function (err) { }, //请求失败
      complete: function () { } //请求完成后执行的函数
    })
  },

  onReachBottom: function () {
    var that=this;
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中',
    })
    // 页数+1
    page = page + 1;
    offset = offset + 20;
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
  //下拉刷新
  onPullDownRefresh: function () {
    var that=this;
    wx.showNavigationBarLoading();
    that.getdata();
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

  /**
   * 弹出层
   */
  // 外面的弹窗

  //按价格
  showSelsectPrice: function (e) {
    var that = this;
    _property = e.currentTarget.dataset.property;
    that.setData({
      showModal: false,
      showModalAll: false,
      _num: e.currentTarget.dataset.num,
    })
    var houseListArray = that.data.houseListArray;
    that.setData({
      houseListArray: that.data.houseListArray.sort(that.compare(_property, sortRule))
    })
  },
  //按面积
  showSelectArea: function (e) {
    var that=this;
    _property = e.currentTarget.dataset.property;
    that.setData({
      showModal: false,
      showModalAll: false,
      _num: e.currentTarget.dataset.num,
    })
    var houseListArray = that.data.houseListArray;
    that.setData({
      houseListArray: that.data.houseListArray.sort(that.compare(_property, sortRule))
    })
  },
  //排序
  compare: function (property, sortRule) {
    return function (a, b) {
      var value1 = a[property];
      var value2 = b[property];
      if (true) {
        return value1 - value2;
      } else {
        return value2 - value1;
      }
    }
  },

  //按单价
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
  }
})