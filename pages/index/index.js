//index.js
//获取应用实例
import apiPhoto from '../../api/photo'
import { IMG_URL } from '../../config/index'

Page({
  data: {
    photos: [],
    activedId: null,
    IMG_URL
  },
  onLoad () {
    this.getRatingPhotos()
  },
  getRatingPhotos () {
    apiPhoto.getPhotos({ page: 1, size: 20 }).then(res => {
      this.setData({ photos: res.data.data })
    })
  },
  zoomIn(ev) {
    this.setData({ activedId: ev.currentTarget.dataset.id })
  }
  // goDetail(ev) {
  //   let info = ev.currentTarget.dataset
  //   let navigationUrl = '../detail/detail?'
  //   for (let key in info) {
  //     info[key] = encodeURIComponent(info[key])
  //     navigationUrl += key + '=' + info[key] + '&'
  //   }
  //   navigationUrl = navigationUrl.substring(0, navigationUrl.length - 1)
  //   wx.navigateTo({
  //     url: navigationUrl
  //   })
  // }
})
