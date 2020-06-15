import request from '@/utils/request'

export function getHotVideo(params) {
  return request({
    url: '/video/getHotVideo',
    method: 'GET',
    params
  })
}

export function getHotWord() {
  return request({
    url: '/video/getHotWord',
    method: 'GET'
  })
}

export function getTopWord(params) {
  return request({
    url: '/video/getTopWord',
    method: 'GET',
    params
  })
}

export function getVideoData(params) {
  return request({
    url: '/video/getVideoData',
    method: 'GET',
    params
  })
}

export function getVideoList(params) {
  return request({
    url: '/video/videoList',
    method: 'GET',
    params
  })
}

export function uploadVideo(data) {
  return request({
    url: '/video/uploadVideo',
    method: 'POST',
    data
  })
}

export function deleteVideo(data) {
  return request({
    url: '/video/deleteVideo',
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}
