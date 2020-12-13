import Taro from '@tarojs/taro'
import { BASE_URL } from '@/config/index'
import { HTTP_STATUS } from '@/constants/index'

type Method = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'

const request = async (url: string, data?: any, method: Method = 'GET', headers = {}) => {
  const option = {
    url: BASE_URL + url,
    data,
    method,
    header: {
      'content-type': 'application/json;charset=utf-8',
      ...headers
    }
  }
  return Taro.request(option)
    .then(({ statusCode, data }) => {
      if (statusCode === HTTP_STATUS.SUCCESS) {
      console.log(data)
        return data
      }
      const msg = `Error: code ${statusCode}`
      throw new Error(msg)
    })
    .catch(({ error }) => {
      console.error(error)
    })
}

const get = (url, data = {}, headers = {}) => {
  return request(url, data, 'GET', headers)
}

const post = (url, data = {}, headers = {}) => {
  return request(url, data, 'POST', headers)
}

export { request, get, post }