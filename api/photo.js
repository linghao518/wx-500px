import http from './index'

const getPhotos = function(page) {
  return http.get(`discover/rating?resourceType=0,2&category=&orderBy=rating&photographerType=&startTime=&page=${page.page}&size=${page.size}&type=json`)
}

export default {
    getPhotos
}