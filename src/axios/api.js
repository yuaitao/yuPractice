import http from './http'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let request = "/pet/findByStatus"


// get请求
export default {
    getListAPI (params) {
        return http.fetchGet(`${request}`, params)
    },
    postFormAPI (params) {
        return http.post(`${request}/postForm.json`, params)
    }
}

