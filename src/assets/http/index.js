/* 封装axios请求 */
/* 用法示例：(*)为必须参数
  this.$request.httpRequest({
    isFormSubmit: false, // 是否格式化参数
    (*)method: 'post', // 请求方式，post或get
    (*)url: this.API.ResetPassword, // 请求地址，请求地址的配置在@/api/apiUrl.js
    (*)params: {}, // 请求参数，object类型
    (*)success: (data) => { // 请求成功之后的回调函数，data是回调参数
      // 在这里写请求成功后的逻辑
    },
    error: (err) => { 请求不成功之后的回调函数，data是回调参数
      // 在这里写请求报错后的逻辑
    }
  })
*/
import qs from 'qs';
import { Message, Loading } from 'element-ui';
import service from './service';

function requestMethods(options) {
  return new Promise((resolve, reject) => {
    try {
      switch (options.method) {
        case 'post':
          if (options.isFormSubmit) {
            resolve(
              service({
                url: options.url,
                method: 'post',
                data: qs.stringify(options.params),
              }),
            );
          } else {
            resolve(
              service({
                url: options.url,
                method: 'post',
                data: options.params,
              }),
            );
          }
          break;
        case 'get':
          resolve(
            service({
              url: options.url,
              method: 'get',
              params: options.params,
            }),
          );
          break;
        default:
          resolve(
            service({
              url: options.url,
              method: 'get',
              params: options.params,
            }),
          );
      }
    } catch (e) {
      reject(new Error('HTTP请求方法出错！'));
    }
  });
}

const httpRequest = function (options) {
  const loading = Loading.service({
    lock: true,
    text: '加载中...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)',
  });

  try {
    requestMethods(options).then((response) => {
      const result = response.data;
      if (result.status === 'OK') {
        options.success(result);
      } else {
        // 失败
        const errorInfo = Object.prototype.hasOwnProperty.call(result, 'errorInfo')
          ? result.errorInfo : '数据解析错误';
        if (result.resultCode === 401) {
          errorInfo.message = '暂无操作权限';
        }
        Message({
          showClose: true,
          message: errorInfo.message,
          type: 'error',
          duration: 3000,
        });
        options.error(result);
      }
      // loading完毕
      loading.close();
    }).catch((e) => {
      Message({
        showClose: true,
        message: e.message,
        type: 'error',
        duration: 3000,
      });
      loading.close();
    });
  } catch (e) {
    Message({
      showClose: true,
      message: 'Axios请求出错！',
      type: 'error',
      duration: 3 * 1000,
    });
    loading.close();
  }
};

export default { httpRequest };
