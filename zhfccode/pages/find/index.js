// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { "name": "租房人数","right": [
        { "a": 1 },
        { "a": 2 },
        { "a": 3 },
        { "a": 4 }
      ]},
      {
        "name": "性别", "right": [
          { "value": "男" },
          { "value": "女" }
        ]
      },
      {
        "name": "开始时间", "right": [
          { "value": "2019-7-4" }
        ]
      },
      {
        "name": "结束时间", "right": [
          { "value": "2019-8-4" }
        ]
      },
      {
        "name": "着急程度", "right": [
          { "value": "三天内" }
        ]
      },{
        "name": "开始时间", "right": [
          { "value": "2019-7-4" }
        ]
      },
      {
        "name": "最低预算", "right": [
          { "value": "卢布" },
        ],
        "input": true 
      },
      {
        "name": "最高预算", "right": [
          { "value": "卢布" },
        ],
        "input": true 
      },
    ],
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