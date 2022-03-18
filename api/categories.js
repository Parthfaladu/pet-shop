import request from '@/utils/request'

export const getCategories = (params) => {
  return request({
    url: '/categories',
    method: 'get',
    params,
  })
}
