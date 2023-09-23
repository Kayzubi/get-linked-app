import React, { useState } from 'react'
import useHttps from './useHttps'
import { HttpConfig, SuccessHttpResponse } from '../https'

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

    request(url, onSuccess, setloading)
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

    request(url, onSuccess, setloading)
  }

  return {
    loading,
    getCategories,
    registerUser,
  }
}

export default useRegister
