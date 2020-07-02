import request from '@/utils/request'

export function getLogList(params) {
  return request({
    url: '/system/systemLog/list',
    method: 'GET',
    params
  })
}

export function deleteLog(params) {
  return request({
    url: '/system/systemLog/deleteBatch',
    method: 'DELETE',
    params
  })
}

export function getAdminList(params) {
  return request({
    url: '/system/user/list',
    method: 'GET',
    params
  })
}

export function deleteAdmin(params) {
  return request({
    url: '/system/user/deleteBatch',
    method: 'DELETE',
    params
  })
}

export function addAdmin(data) {
  return request({
    url: '/system/user/add',
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function getCollection(params) {
  return request({
    url: '/merchant/queryCollection',
    method: 'GET',
    params
  })
}

export function deleteAccountInMerchant(data) {
  return request({
    url: '/merchant/delete',
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}
