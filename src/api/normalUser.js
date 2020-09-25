import request from '@/utils/request'

export function queryUserList(params) {
  return request({
    url: '/puser/list',
    method: 'GET',
    params
  })
}

export function updateUser(data, type) {
  return request({
    url: '/puser/edit',
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function deleteUser(params) {
  return request({
    url: '/puser/deleteBatch',
    method: 'DELETE',
    params
  })
}

export function queryUserOrderList(data) {
  return request({
    url: '/order/list',
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function updateOrder(data, type) {
  return request({
    url: '/order/verify',
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function queryWorkOrderList(params) {
  return request({
    url: '/work/list',
    method: 'GET',
    params
  })
}

export function updateWorkOrder(data, type) {
  return request({
    url: '/work/edit',
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function deleteWorkOrder(params) {
  return request({
    url: '/work/deleteBatch',
    method: 'DELETE',
    params
  })
}

export function recharge(data) {
  return request({
    url: '/order/recharge',
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function queryNoticeList(params) {
  return request({
    url: '/message/list',
    method: 'GET',
    params
  })
}

export function queryPuserMap(params) {
  return request({
    url: '/puser/getAll',
    method: 'GET',
    params
  })
}

export function updateNotice(data, type) {
  return request({
    url: `/message/${type}`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function deleteNotice(data) {
  return request({
    url: '/message/deleteBatch',
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}
