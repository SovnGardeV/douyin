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

export function uploadInfo(data) {
  return request({
    url: '/merchant/info/uploadInfo',
    method: 'POST',
    data
  })
}

export function uploadHead(data) {
  return request({
    url: '/merchant/info/uploadHead',
    method: 'POST',
    data
  })
}

export function uploadVideo(data) {
  return request({
    url: '/merchant/info/uploadVideo',
    method: 'POST',
    data
  })
}

export function getVList(params) {
  return request({
    url: '/merchant/info/vlist',
    method: 'GET',
    params
  })
}

export function getInfoList(params) {
  return request({
    url: '/merchant/info/list',
    method: 'GET',
    params
  })
}

export function updateInfo(data, type) {
  return request({
    url: `/merchant/info/${type}`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function editVideoInfo(data) {
  return request({
    url: `/merchant/info/editVideoInfo`,
    method: 'PUT',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function resetVideo() {
  return request({
    url: `/merchant/info/resetVideo`,
    method: 'POST'
  })
}

export function pushByHand(data) {
  return request({
    url: `/merchant/info/pushByHand`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function clearVideoList(data) { // 清空信息补充下的视频列表
  return request({
    url: `/merchant/info/deleteBatchVideo`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function deleteInfo(data) { // 删除所选信息及视频列,并解除已绑定设备
  return request({
    url: `/merchant/info/deleteBatch`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}
