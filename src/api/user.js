import request from '@/utils/request'

export function getPublicKey() {
  return request({
    url: '/system/login/getPublicKey',
    method: 'POST'
  })
}

export function login(data) {
  return request({
    url: '/system/login/userLogin',
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/system/login/logout',
    method: 'POST'
  })
}
