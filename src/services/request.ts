import axios from "axios";

const request = axios.create({
  // 小于500按成功响应
  validateStatus: (status) => status < 500,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // console.log("响应拦截器-res.data: ", response.data);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
