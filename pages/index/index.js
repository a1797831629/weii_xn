//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/1.png',
      '../../images/2.png',
      '../../images/3.png'
    ],
    renwuInfo:[
      {
        'images': [
          '../../images/head/1.jpg'
        ]
      },
      {
        'images': [
          '../../images/head/2.jpg'
        ]
      },
      {
        'images': [
          '../../images/head/3.jpg'
        ]
      }
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {
    function toDetil(){
      console.log(index)
    }
  }
})
