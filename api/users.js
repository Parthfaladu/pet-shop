import request from '@/utils/request'

export const signup = (params) => {
  return request({
    url: '/user/create',
    method: 'post',
    params,
  })
}
