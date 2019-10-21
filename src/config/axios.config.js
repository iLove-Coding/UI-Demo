import Vue from 'vue'
import axios from 'axios'

/**
 * 请求配置
 * @see https://github.com/mzabriskie/axios
 */

const service = axios.create({
  timeout: 10000, // 请求超时时间
  withCredentials: true // 跨域
})

// service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
service.interceptors.request.use(async config => {
  // 给请求带基础参数
  // await new ParamsHander(config) // eslint-disable-line

  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    let {data: {status, error, data}, config} = response
    if (config.isLoading) {
      let index = ARR_LOADING.indexOf(config.url)
      ARR_LOADING.splice(index, 1)
      if (ARR_LOADING.length === 0) {
        LOADING && LOADING.hide()
        IS_LOADING = false
      }
    }
    // 如果不是code 返回值
    if (isUndefined(status)) {
      return response.data
    }
    if (status !== 0 && status !== 400) {
      // 是否自动提示消息
      if (config.isAutoMsg) {
        try {
          Vue.prototype.$rrcToast({
            iconClass: 'rc-icon-delete',
            message: createErrMsg(response.data),
            type: 'error'
          }).show()
        } catch (error) {
          console.error('toast', error) // eslint-disable-line
        }
      } else if (config.selfAutoMsg) {
        Vue.prototype.$rrcToast({
          iconClass: 'rc-icon-tip',
          message: response.data.err_msg || '请求失败',
          theme: 'gray',
          duration: 2000
        }).show()
      }
      return Promise.reject({status, data, error}) // eslint-disable-line
    } else if (status === 400) {
      return response.data
    } else {
      return data || response.data
    }
  },
  error => {
    if (error.message !== undefined) {
      // 所有非 200 的请求的提示此错误 如果是业务逻辑的错误消息 请走200状态
      ARR_LOADING = []
      LOADING && LOADING.hide()
      IS_LOADING = false
      Vue.prototype.$rrcToast({
        iconClass: 'rc-icon-delete',
        message: '网络超时，请稍后重试',
        type: 'error'
      }).show()
    }
    return Promise.reject(error)
  }
)

function createErrMsg(data) {
  const { status, error } = data

  if (status !== 500) {
    return error
  }

  if (!__DEVELOPMENT__) {
    return '网络超时，请稍后重试'
  }

  return `(${status})${error}`
}

export default service
