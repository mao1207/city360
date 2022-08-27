// pages/homePage/homePage.js
Page({

 
  data: {
    imgUrls: [
      '../../images/case1.png',
      '../../images/case2.png',
      '../../images/case3.png',
      '../../images/case4.png',
      '../../images/case5.png',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
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
    ]
  },

 skip1(){
   wx.switchTab({
     url: '../about/about',
   })
 },

 skip2(){
  wx.switchTab({
    url: '../dream/dream',
  })
 },

skip3(){
  wx.switchTab({
    url: '../community/community',
  })
 },

  onLoad(options) {

  },

})