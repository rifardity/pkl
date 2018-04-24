import request from '@/utils/request'

// export function fetchList(query) {
//   return request({
//     url: '/karyawan/list',
//     method: 'get',
//     params: query
//   })
// }

export function fetchKaryawan() {
  return request({
    url: '/karyawan',
    method: 'get'
  })
}
//
// export function fetchPv(pv) {
//   return request({
//     url: '/article/pv',
//     method: 'get',
//     params: { pv }
//   })
// }

export function createKaryawan(data) {
  return request({
    url: '/karyawan/create',
    method: 'post',
    data
  })
}

export function updateKaryawan(data) {
  return request({
    url: '/karyawan/update',
    method: 'post',
    data
  })
}
