import request from '@/utils/request'

export function searchByKey(params) {
  return request({
    url: '/yuser/searchByKey',
    method: 'GET',
    params
  })
}

export function getVideoByUserId(params) {
  return request({
    url: '/yuser/getVideoByUserId',
    method: 'GET',
    params
  })
}

export function getFollower(params) {
  return request({
    url: '/yuser/getFollower',
    method: 'GET',
    params
  })
}

export function getFollowing(params) {
  return request({
    url: '/yuser/getFollowing',
    method: 'GET',
    params
  })
}

export function getCommentByVideoId(params) {
  return request({
    url: '/yuser/getCommentByVideoId',
    method: 'GET',
    params
  })
}

export function queryUserList(params) {
  return request({
    url: '/yuser/query',
    method: 'GET',
    params
  })
}

export function saveSelect(data) {
  return request({
    url: '/yuser/save',
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function getTagList(params) {
  return request({
    url: '/yuser/tag/list',
    method: 'GET',
    params
  })
}

export function updateTag(data, type) {
  return request({
    url: `/yuser/tag/${type}`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function deleteTags(data) {
  return request({
    url: `/yuser/tag/deleteBatch`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function getCount() {
  return request({
    url: `/yuser/tag/getCount`,
    method: 'GET'
  })
}

export function getTagDetail(params) {
  return request({
    url: `/yuser/tag/getDetail`,
    method: 'GET',
    params
  })
}

export function unForzen(data) {
  return request({
    url: `/yuser/tag/unForzen`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function getShortIds(params) {
  return request({
    url: `/yuser/tag/getShortIds`,
    method: 'GET',
    params
  })
}
