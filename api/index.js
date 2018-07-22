import { API_URL } from '../config/index'

const http = {
  get(url) {
    return new Promise((reslove, reject) => {
      wx.request({
        url: API_URL + url,
        success: res => {
          reslove(res)
        },
        fail: res => {
          reject(res)
        }
      })
    })
  }
}

export default http