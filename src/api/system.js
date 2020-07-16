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

export function getAPPList(params) {
  return request({
    url: '/system/douyinApp/list',
    method: 'GET',
    params
  })
}

export function getSystemSource(params) {
  return request({
    url: '/systemSource/list',
    method: 'GET',
    params
  })
}

export function getSystemSourceTypeBySort(params) {
  return request({
    url: '/systemSource/queryTypeList',
    method: 'GET',
    params
  })
}

export function getSystemSourceByType(params) {
  return request({
    url: '/systemSource/queryTitleList',
    method: 'GET',
    params
  })
}

export function getSystemSourceTextById(params) {
  return request({
    url: '/systemSource/queryById',
    method: 'GET',
    params
  })
}

export function getPortList(params) {
  return request({
    url: '/device/merchantPort/list',
    method: 'GET',
    params
  })
}
