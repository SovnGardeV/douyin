import request from '@/utils/request'
// const role = localStorage.getItem('loginType')

export function getPlugList(params) {
  return request({
    url: `/plug/list`,
    method: 'GET',
    params
  })
}

export function getMerchantPlugList(params) {
  return request({
    url: `/plug/merchantPlugs`,
    method: 'GET',
    params
  })
}

export function updatePlug(data, type) {
  return request({
    url: `/plug/${type}`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function deletePlug(data) {
  return request({
    url: `/plug/deleteBatch`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function getDeviceList(params) {
  return request({
    url: `/device/deviceList`,
    method: 'GET',
    params
  })
}

export function updateDevice(data, type) {
  return request({
    url: `/device/${type === 'add' ? type : 'updateName'}`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function getDeviceMap() {
  return request({
    url: `/device/group/getMap`,
    method: 'GET',
    params: {
      'flag': false
    }
  })
}

export function groupDevice(data) {
  return request({
    url: `/device/device_group`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function unbind(data) {
  return request({
    url: `/device/unBind`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function queryDeviceInfo(params) {
  return request({
    url: `/device/queryById`,
    method: 'GET',
    params
  })
}

export function queryPlugClassify(params) {
  return request({
    url: `/plug/type/list`,
    method: 'GET',
    params
  })
}

export function updatePlugClassify(data, type) {
  return request({
    url: `/plug/type/${type}`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function deletePlugClassify(params) {
  return request({
    url: `/plug/type/deleteBatch`,
    method: 'DELETE',
    params
  })
}

export function queryPluginList(params) {
  return request({
    url: `/plug/list`,
    method: 'GET',
    params
  })
}

export function updatePlugin(data, type) {
  return request({
    url: `/plug/${type}`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function deletePlugin(params) {
  return request({
    url: `/plug/deleteBatch`,
    method: 'DELETE',
    params
  })
}

export function queryMealOrder(params) {
  return request({
    url: `/mealOrder/list`,
    method: 'GET',
    params
  })
}

export function updateMealOrder(data) {
  return request({
    url: `/mealOrder/edit`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function addMealOrder(data) {
  return request({
    url: `/mealOrder/add`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}
