<!--
 * @Author: lijy
 * 设置请求拦截器和响应拦截器
-->
1. 安装  
npm install --save axios
2. 二次封装
    ```
    // 引入 axios
    import axios from axios

    const requests = axios.create({
        // 配置对象
        // 基础路径：发送请求的时候，路径当中会带有api
        baseURL: '/api',
        // 请求超时的时间
        timeout: 5000,
    })

    // 请求拦截器
    requests.interceptors.request.use((config) => {
        // 携带 token 给服务器
        if(store.state.user.token){
            config.headers.token = store.state.user.token
        }
        return config
    })

    // 响应拦截器
    requests.interceptors.response.use(res => {
        return res.data
    },err => {
        return Promise.reject(new Error('faile'))
    })

    // 对外暴露
    export default requests
    ```