import request from '@/utils/request'

export function getMerchantList(params) {
  return request({
    url: '/merchant/list',
    method: 'GET',
    params
  })
}
