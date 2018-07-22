//index.js
//获取应用实例
const app = getApp()
import apiPhoto from '../../api/photo'

Page({
  data: {
    photos: []
  },
  onLoad () {
    this.getRatingPhotos()
  },
  getRatingPhotos () {
    apiPhoto.getPhotos({ page: 1, size: 20 }).then(res => {
      this.setData({ photos: res.data.data })
    })
  }
})
