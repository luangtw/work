
//index.js
//获取应用实例
const app = getApp()
var page=1;
var offset=0;
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls:[
      {
        link:'/pages/question/index',
        url:'../../images/sw1.jpg'
      },{
        link:'/pages/question/index',
        url:'../../images/sw2.jpg'
      }
    ],
    indicatorDots:true,
    autoplay:true,
    interval:5000,
    duration:1000,
    beforeColor:'white',
    afterColor:'coral',

    itemNavList:[
      {
        viewid:'1',
        pic:'../../images/icon1.png',
        name:'租赁'
      },{
        viewid:'2',
        pic:'../../images/icon2.png',
        name:'买卖'
      },{
        viewid:'3',
        pic:'../../images/icon3.png',
        name:'民宿'
      },{
        viewid:'4',
        pic:'../../images/icon4.png',
        name:'二手商品'
      }, {
        viewid: '5',
        pic: '../../images/icon5.png',
        name: '搬家服务'
      }, {
        viewid: '6',
        pic: '../../images/icon6.png',
        name: '网络安装'
      }, {
        viewid: '7',
        pic: '../../images/icon7.png',
        name: '家政服务'
      }, {
        viewid: '8',
        pic: '../../images/icon8.png',
        name: '打车接送'
      }, {
        viewid: '9',
        pic: '../../images/icon9.png',
        name: '商家入驻'
      }, {
        viewid: '10',
        pic: '../../images/icon10.png',
        name: '中华美食'
      }
    ],
    adpicUrl:'pages/index/index',
    adbanner:'../../images/temp1.jpg',
    goodsPirce:'603822',
    goodsNum:'59993',
    cityarray: ['莫斯科', '圣彼得堡', '叶卡捷琳堡', '下诺夫哥罗德'],
    cityindex:0,
    sortarray:['租赁','买卖','民宿'],
    sortindex:0,
    boroughArray: ['不限', 'HAO(新莫斯科区)', 'C3AO(西北区)', '3AO(西区)', 'HOAO(南区)','HO3AO(西南区)'],
    subwayArray:['不限', '1号线', '2号线','3号线','4号线','5号线','6号线','7号线','8号线','9号线','10号线'],

    subwayArray:[
      {
        
        line:'1号线',
        son:['1Федеральный город', 'Автономная республика', 'Края', 'Области','автономные округа','районы','города']
      },
      {
        
        line: '2号线',
        son: ['2Федеральный город','Автономная республика', 'Края', 'Области', 'автономные округа', 'районы','города']
      },
      {
        
        line: '3号线',
        son: ['3Федеральный город', 'Автономная республика','Края','Области','автономные округа','районы','города']
      },
      {
        
        line: '4号线',
        son: ['4Федеральный город','Автономная республика','Края','Области','автономные округа','районы','города']
      },
      {
        
        line: '5号线',
        son: ['5Федеральный город', 'Автономная республика', 'Края', 'Области', 'автономные округа', 'районы', 'города']
      },
      {
        
        line: '6号线',
        son: ['6Федеральный город', 'Автономная республика', 'Края', 'Области', 'автономные округа', 'районы', 'города']
      },
      {
        
        line: '7号线',
        son: ['7Федеральный город', 'Автономная республика', 'Края', 'Области', 'автономные округа', 'районы', 'города']
      }
    ],






    layoutArray:['不限','一室','二室','三室','四室','五室','五室以上'],

    houseListArray:[],
    selectedFlag:[false,false,false,false,false],
    boroughFlag:[],
    subWayFlag:[],
    homeFlag:[],
    lineArray:['不限', 'Федеральный город', 'Автономная республика', 'Края', 'Области', 'автономные округа', 'районы','города','','','','','','','',''],
    lineFlag:[],
    subwayDetailArray: ['不限', 'Федеральный город', 'Автономная республика', 'Края', 'Области', 'автономные округа', 'районы', 'города', '', '', '', '', '', '', '', ''],
    subWayDetailFlag:[],
    slideMoreTit:'展开所有筛选项>>',
    subWaySortFlag:[],



  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindCityChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      cityindex: e.detail.value
    })
  },
  bindSortChange: function (e) {
   // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      sortindex: e.detail.value
    })
  },
  selectShow: function (e) {
    
    var index = e.currentTarget.dataset.index;
    if (this.data.selectedFlag[index]) {
      this.data.selectedFlag[index] = false;
      this.setData({
        slideMoreTit:'展开所有筛选项>>'
      })
    } else {
      this.data.selectedFlag[index] = true;
    }
    this.setData({
      selectedFlag: this.data.selectedFlag
    })
  },

  toggleBorough:function(e){
    var index =e.currentTarget.dataset.index;
    if (this.data.boroughFlag[index]) { this.data.boroughFlag[index]=false}
    else { this.data.boroughFlag[index]=true}
    this.setData({
      boroughFlag: this.data.boroughFlag
    })
  },

  togglesubWay:function(e){
    var index = e.currentTarget.dataset.index;
    var subWayFlag = this.data.subWayFlag;
    if (this.data.subWayFlag[index]) { 
      this.data.subWayFlag[index] = false;;
     }else { 
      this.data.subWayFlag[index] = true; 
     }
    this.setData({
      subWayFlag: this.data.subWayFlag
    })

  },

  togglessubWayDetail:function(e){
    var leg = this.data.subwayArray.length;
    console.log(leg);
    for(var i=0;i<leg;i++){
      
    }
    var index = e.currentTarget.dataset.index;
    var subWayDetailFlag = this.data.subWayDetailFlag;
    if (this.data.subWayDetailFlag[index]) { this.data.subWayDetailFlag[index] = false }
    else { this.data.subWayDetailFlag[index] = true }
    this.setData({
      subWayDetailFlag: this.data.subWayDetailFlag
    })
  },

  toggleLine:function(e){
    var index = e.currentTarget.dataset.index;
    if (this.data.lineFlag[index]) { this.data.lineFlag[index] = false }
    else { this.data.lineFlag[index] = true }
    this.setData({
      lineFlag: this.data.lineFlag
    })
  },
  
  toggleHome:function(e){
    var index = e.currentTarget.dataset.index;
    if (this.data.homeFlag[index]) { this.data.homeFlag[index] = false }
    else { this.data.homeFlag[index] = true }
    this.setData({
      homeFlag: this.data.homeFlag
    })
  },

  showAll:function(e){
    var val=this.data.slideMoreTit;
    if (val=='展开所有筛选项>>'){
      this.setData({
        selectedFlag: [true, true, true, true, true],
        slideMoreTit: '收缩所有筛选项>>'

      })
    }else{
      this.setData({
        selectedFlag: [false, false, false, false, false],
        slideMoreTit: '展开所有筛选项>>'
      })
    }
    
  },


  onLoad: function () {
    var that=this;
    that.getdata();
    that.getQuotes();
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  //全市均价，买房房数
  getQuotes:function(){
    var that=this;
    wx.request({
      url: 'https://frk.muztak.cn/total',
      data: {
        type: 'Projects'
      },
      header: {
        "Content-Type": "applciation/json"
      },
      method: "GET",
      success: function (res) {
       var data=res.data;
       that.setData({
         goodsPirce:data.avg,
         goodsNum: data.total
       })
      },
      fail: function (err) { }, //请求失败
      complete: function () { } //请求完成后执行的函数
    })
  },

  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    this.getdata();
  },
  
  getdata: function () {
    var that = this;//重置data{}里数据时候setData方法的this应为一级函数的this，如果在下方的success直接写this就变成了wx.request()的this了
    wx.request({
      url: 'https://frk.muztak.cn/house-list?limit=5',
      data: {
        type:'Projects',
        p:page,
        offset:offset
      },
      header: {
        "Content-Type": "applciation/json"
      },
      method: "GET",
      success: function (res) {
        var dataModel = res.data;
        //console.log(dataModel);
        //价格去掉小数点和后面的0，地址去掉最后的地图俄文，面积去掉小数点和0
        for(var i=0;i<dataModel.length;i++){
          dataModel[i].price=parseInt(dataModel[i].price);
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
          for (var i = offset, l = (i + dataModel.length); i <l; i++) {
            moment_list.push(dataModel[i%5]);
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
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中',
    })
    // 页数+1
    page = page + 1;
    offset = offset + 5;
    this.getdata();
    
  }

})
