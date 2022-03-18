import request from '@/utils/request'

export const getBrands = (params) => {
  return request({
    url: '/brands',
    method: 'get',
    params,
  })
}
