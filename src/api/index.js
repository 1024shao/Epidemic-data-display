import axios from '../utils/request'

const base = {
  baseUrl: 'http://api.tianapi.com',
  ncov: "/ncov/index",
  ncovcity: "/txapi/ncovcity/index"
}
const api = {
  /*
    抗击疫情数据
  */
  getNcov(params) {
    return axios.get(base.baseUrl + base.ncov, {
      params
    })
  },
  getCaseNum(params) {
    return axios.get(base.baseUrl + base.ncovcity, {
      params
    })
  }
}
export default api;