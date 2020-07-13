import request from '@/utils/request'

export function getTaskList(params) {
  return request({
    url: `/task/list`,
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

export function updateTaskAgain(data) {
  return request({
    url: `/task/addAgain`,
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}
