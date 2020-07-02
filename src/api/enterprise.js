import request from '@/utils/request'

export function getIntendedUser(params) {
  return request({
    url: `/enterprise/users/queryByInfo`,
    method: 'GET',
    params
  })
}
