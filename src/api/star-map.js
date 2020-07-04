import request from '@/utils/request'

export function getHost(params) {
  return request({
    url: '/star/getHost',
    method: 'GET',
    params
  })
}

