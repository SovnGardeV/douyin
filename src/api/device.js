import request from '@/utils/request'
const role = localStorage.getItem('loginType')

export function getGroupDeviceList(params) {
  return request({
    url: `/device/group/list`,
    method: 'GET',
    params
  })
}

export function updateGroupDevice(data, type) {
  return request({
    url: `/device/group/${type}`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function deleteGroupDevice(data) {
  return request({
    url: `/device/group/deleteBatch`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function getDeviceList(params) {
  return request({
    url: `/device/${role === 'admin' ? 'list' : 'deviceList'}`,
    method: 'GET',
    params
  })
}

export function getMerchantDeviceList(params) {
  return request({
    url: `/device/getMDeviceAll`,
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

export function bindDevice(data) {
  return request({
    url: `/device/bindDevice`,
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

export function getDeviceWithoutBinding(params) {
  return request({
    url: `/device/getDeviceAll`,
    method: 'GET',
    params
  })
}

export function getMerchantDeviceInfo(params) {
  return request({
    url: `/device/MerchantDevice`,
    method: 'GET',
    params
  })
}

export function getIndexData(params) {
  return request({
    url: `/device/getIndex`,
    method: 'GET',
    params
  })
}
