import { useState } from 'react'
import toast from 'react-hot-toast'
import { httpErrorHandlerFunction } from '../helpers'
import { HttpConfig, SuccessHttpResponse } from '../https'
import useHttps from './useHttps'

const useRegister = () => {
  const [loading, setloading] = useState(false)
  const request = useHttps()

  const getCategories = (callback: (data: any) => void) => {
    const url: HttpConfig = {
      url: 'hackathon/categories-list',
      method: 'get',
    }

    const onSuccess = (response: SuccessHttpResponse<any>) => {
      callback(response)
    }

    request(url, onSuccess, setloading, httpErrorHandlerFunction)
  }

  const registerUser = (data: any, callback: () => void) => {
    const url: HttpConfig = {
      url: 'hackathon/registration',
      method: 'post',
      data,
    }

    const onSuccess = (response: SuccessHttpResponse<any>) => {
      callback()
    }

    request(url, onSuccess, setloading, httpErrorHandlerFunction)
  }

  const sendMessage = (data: any, callback: () => void) => {
    const url: HttpConfig = {
      url: 'hackathon/contact-form',
      method: 'post',
      data,
    }

    const onSuccess = (response: SuccessHttpResponse<any>) => {
      toast.success('Message Sent Successfully')
      callback()
    }

    request(url, onSuccess, setloading, httpErrorHandlerFunction)
  }

  return {
    loading,
    getCategories,
    registerUser,
    sendMessage,
  }
}

export default useRegister
