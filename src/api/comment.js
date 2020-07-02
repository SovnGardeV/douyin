import request from '@/utils/request'

export function getCommentByUser(params, isEnterprise) {
  const _api = isEnterprise ? 'getCommentByUser' : 'commentList'
  return request({
    url: `/comment/${_api}`,
    method: 'GET',
    params
  })
}

export function replyComment(data) {
  return request({
    url: '/comment/replyComment',
    'Content-Type': 'multipart/form-data',
    method: 'POST',
    data
  })
}

export function getReplyComment(params, isEnterprise) {
  const _api = isEnterprise ? 'getCommentBy' : 'replyList'
  return request({
    url: `/comment/${_api}`,
    method: 'GET',
    params
  })
}

export function topComment(data) {
  return request({
    url: '/comment/topComment',
    'Content-Type': 'multipart/form-data',
    method: 'POST',
    data
  })
}

export function getCardList(params) {
  return request({
    url: '/comment/cardList',
    method: 'GET',
    params
  })
}

export function updateCard(data) {
  return request({
    url: '/comment/save',
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}

export function deleteCard(data) {
  return request({
    url: '/comment/deleteCard',
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    data
  })
}
