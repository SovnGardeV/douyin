import request from '@/utils/request'

export function getSourceList(params) {
  return request({
    url: `/source/list`,
    method: 'GET',
    params
  })
}

export function getSourceGroupList(params) {
  return request({
    url: `/sourceGroup/list`,
    method: 'GET',
    params
  })
}

export function updateSourceGroup(data, type) {
  return request({
    url: `/sourceGroup/${type}`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function deleteSourceGroup(data) {
  return request({
    url: `/sourceGroup/deleteBatch`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function getSourceMap() {
  return request({
    url: `/device/group/getMap`,
    method: 'GET',
    params: {
      'flag': true
    }
  })
}

export function updateSource(data, type) {
  return request({
    url: `/source/${type}`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function uploadSource(data) {
  return request({
    url: `/source/uploadSource`,
    method: 'POST',
    data
  })
}
