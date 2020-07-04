import request from '@/utils/request'

export function getIntendedUser(params) {
  return request({
    url: `/enterprise/users/queryByInfo`,
    method: 'GET',
    params
  })
}

export function getTagList(params) {
  return request({
    url: `/enterprise/users/queryTag`,
    method: 'GET',
    params
  })
}

export function addTag(data) {
  return request({
    url: `/enterprise/users/addTag`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function editTag(data) {
  return request({
    url: `/enterprise/users/updTag`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function deleteTag(data) {
  return request({
    url: `/enterprise/users/deleteTag`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function getUserByAction(params) {
  return request({
    url: `/enterprise/users/queryByAction`,
    method: 'GET',
    params
  })
}

export function getServiceList(data) {
  return request({
    url: `/enterprise/users/list`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function addService(data) {
  return request({
    url: `/enterprise/users/create`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function deleteService(data) {
  return request({
    url: `/enterprise/users/delete`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}
