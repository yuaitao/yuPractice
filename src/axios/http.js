// 导入封装好的axios实例
import request from './request'

const http = {
    /**
     * methods: 请求
     * @param url 请求地址 
     * @param params 请求参数
     */
    ////返回一个Promise(发送get请求)
    fetchGet (url, param) {
        return new Promise((resolve, reject) => {
            request.get(url, { params: param })
                .then(response => {
                    resolve(response)
                }, err => {
                    reject(err)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
}
//导出
export default http

