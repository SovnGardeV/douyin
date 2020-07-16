import request from '@/utils/request'

export function getTaskList(params) {
  return request({
    url: `/task/list`,
    method: 'GET',
    params
  })
}

export function getTaskDetailInfo(params) {
  return request({
    url: `/task/queryDetailByTaskId`,
    method: 'GET',
    params
  })
}

export function updateTask(data) {
  return request({
    url: `/task/add`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function updateMoreTask(data) {
  return request({
    url: `/task/addMore`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function updateTaskAgain(data) {
  return request({
    url: `/task/addAgain`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function closeTask(data) {
  return request({
    url: `/task/close`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}
