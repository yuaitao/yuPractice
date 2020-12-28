import axios from 'axios'
console.log(process.env)


const service = axios.create({
    // 公共接口--这里注意后面会讲
    baseURL: process.env.VUE_APP_URL,
    // 超时时间 单位是ms，这里设置了3s的超时时间
    timeout: 3 * 1000
})

//POST传参序列化(添加请求拦截器)
service.interceptors.request.use((config) => {
    //返回状态判断(添加响应拦截器)
    // axios.interceptors.response.use((res) => {
    //在发送请求之前做某件事
    console.log('请求前')
    console.log(config)
    // if (config.method === 'post') {
    //     config.data = qs.stringify(config.data);
    // }
    return config;
}, (error) => {
    console.log('错误的传参')
    return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
service.interceptors.response.use((res) => {
    //对响应数据做些事
    console.log('请求后')
    // if (!res.data.success) {
    //     return Promise.resolve(res);
    // }
    return res;
}, (error) => {
    console.log('网络异常')
    return Promise.reject(error);
});

////返回一个Promise(发送get请求)
// export function fetchGet (url, param) {
//     return new Promise((resolve, reject) => {
//         console.log('!!!!!!')
//         console.log(url)
//         service.get(url, { params: param })
//             .then(response => {
//                 resolve(response)
//             }, err => {
//                 reject(err)
//             })
//             .catch((error) => {
//                 reject(error)
//             })
//     })
// }

export default service;