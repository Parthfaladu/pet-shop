import request from '@/utils/request'

export const getProducts = (params) => {
  return request({
    url: '/products',
    method: 'get',
    params,
  })
}
