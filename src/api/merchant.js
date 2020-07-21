import request from '@/utils/request'

export function getMerchantList(params) {
  return request({
    url: '/merchant/list',
    method: 'GET',
    params
  })
}

export function addMerchant(data) {
  return request({
    url: '/merchant/add',
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function editMerchant(data) {
  return request({
    url: '/merchant/edit',
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function collection(data) {
  return request({
    url: '/merchant/collection',
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

export function deleteMerchant(data) {
  return request({
    url: '/merchant/deleteBatch',
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
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

export function getQrCode() {
  return request({
    url: '/device/merchantPort/getQr',
    method: 'GET'
  })
}

export function getAllMerchantList() {
  return request({
    url: '/merchant/listAll',
    method: 'GET'
  })
}
