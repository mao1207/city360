// pages/uploading/uploading.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:[
      {
          caseName:'上海杨浦“和佳天宜”小区改造',
          caseNumber:84522315,
          caseOrg:'OPEN建筑事务所',
          picture:'../../images/case1.png'
      },
      {
          caseName:'“深圳·华润城”写字楼改造',
          caseNumber:26515212,
          caseOrg:'刘宇扬建筑事务所',
          picture:'../../images/case2.png'
      },
      {
          caseName:'深圳市罗湖“步行街”更新与扩建',
          caseNumber:58425658,
          caseOrg:'三益建筑设计公司',
          picture:'../../images/case3.png'
      },
      {
          caseName:'上海静安区水舍微更新',
          caseNumber:25442641,
          caseOrg:'MLJ建筑事务所',
          picture:'../../images/case4.png'
      },
      {
          caseName:'“宝山再生能源利用中心扩建',
          caseNumber:75211420,
          caseOrg:'合生建筑事务所',
          picture:'../../images/case5.png'
      },
  ],
  type2:1,
  },

  click(e){
      wx.switchTab({
        url: '../../pages/me/me',
      })
    wx.showToast({
        title: '点击成功',   
        icon: 'success',   
        duration: 2000
    })
    var num=e.currentTarget.dataset.num;
    if(num==0){
        this.setData({
            type2:1,
          })
    }
    if(num==1){
        this.setData({
            type2:0,
          })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})