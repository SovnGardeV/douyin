import request from '@/utils/request'

export function getHost(params) {
  return request({
    url: '/star/getHost',
    method: 'GET',
    params
  })
}

export function getScore(params) {
  return request({
    url: '/star/getScore',
    method: 'GET',
    params
  })
}

export function getScore2(params) {
  return request({
    url: '/star/getScore2',
    method: 'GET',
    params
  })
}
