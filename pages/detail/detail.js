//index.js
//获取应用实例
import apiPhoto from '../../api/photo'
import { IMG_URL } from '../../config/index'

Page({
  data: {
    photo: {},
    IMG_URL
  },
  onLoad (options) {
    this.getPhotoDetail(options.id)
  },
  getPhotoDetail (id) {
    apiPhoto.getPhotoDetail(id).then(res => {
      this.setData({ photo: res.data })
    })
  }
})
