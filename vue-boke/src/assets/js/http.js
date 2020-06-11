import axios from 'axios';

axios.defaults.baseURL = 'http://blog.lemonotes.cn/blog';
 
//请求拦截器
axios.interceptors.request.use(request => {
       return request;
})



//响应拦截器
axios.interceptors.response.use(response => {
       if (response.status === 200) {
              return response.data.data;
       }

       return response;
})


export default axios;