import request from '@/utils/request'

export function getUserList(params) {
  return request({
    url: '/user/list',
    method: 'GET',
    params
  })
}

export function getUserData(params) {
  return request({
    url: '/user/getUserData',
    method: 'GET',
    params
  })
}

export function getFansList(params) {
  return request({
    url: '/user/fansList',
    method: 'GET',
    params
  })
}
export function getFansData(params) {
  return request({
    url: '/user/getFansData',
    method: 'GET',
    params
  })
}

export function getFocusData(params) {
  return request({
    url: '/user/followList',
    method: 'GET',
    params
  })
}
