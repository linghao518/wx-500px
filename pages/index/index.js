//index.js
//获取应用实例
import apiPhoto from '../../api/photo'
import { IMG_URL } from '../../config/index'

Page({
  data: {
    photos: [],
    activedId: null,
    currentPhoto: {
      x: 0,
      y: 0
    },
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
    console.log(ev)
    this.setData({ currentPhoto: {
      x: ev.currentTarget.offsetLeft,
      y: ev.currentTarget.offsetTop
    }})
    this.setData({ activedId: ev.currentTarget.dataset.id })
  },
  close(ev) {
    this.setData({ activedId: null })
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
