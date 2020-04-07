import axios from 'axios';
import { getToken } from '@/assets/utils/token';

// create axios instance
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 10000,
});

// create request interceptor
service.interceptors.request.use(
  () => {
    const token = getToken();
    const config = {};
    if (token != null) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response) => response,
  (error) => {
    let msg = '';
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          msg = '错误请求';
          break;
        case 401:
          msg = '未授权，请重新登录';
          break;
        case 403:
          msg = '禁止访问';
          break;
        case 404:
          msg = '请求错误,未找到该资源';
          break;
        case 405:
          msg = '请求方法未允许';
          break;
        case 408:
          msg = '请求超时';
          break;
        case 413:
          msg = '上传文件过大';
          break;
        case 500:
          msg = '服务器端出错';
          break;
        case 501:
          msg = '网络未实现';
          break;
        case 502:
          msg = '网络错误';
          break;
        case 503:
          msg = '服务不可用';
          break;
        case 504:
          msg = '网络超时';
          break;
        case 505:
          msg = 'http版本不支持该请求';
          break;
        default:
          msg = `连接错误,${error.response.msg}`;
      }
    } else {
      msg = '当前网络状态不佳';
    }

    this.$message.closeAll();
    this.$message({
      showClose: true,
      message: msg || '数据解析出错',
      type: 'error',
    });
  },
);
