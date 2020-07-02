import request from '@/utils/request'

export function getHotPoi(params) {
  return request({
    url: '/star/getHost',
    method: 'GET',
    params
  })
}

