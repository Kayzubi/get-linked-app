import axios from 'axios'
import { useCallback } from 'react'
import { HttpConfig } from '../https'
// eslint-disable-next-line import/no-unresolved

const baseUrl = 'https://backend.getlinked.ai/'

const useHttps = () => {
  const sendRequest = useCallback(
    async (
      httpConfig: HttpConfig,
      callback: (data: any) => void,
      loadingFunc?: (value: boolean) => void,
      errorFunc?: (err: any) => void
    ) => {
      const apiUrl = `${baseUrl}${httpConfig.url}`

      const config = {
        ...httpConfig,
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          ...httpConfig.headers,
        },
      }

      try {
        if (loadingFunc) {
          loadingFunc(true)
        }

        const response = await axios(config)
        callback(response.data)
        if (loadingFunc) {
          loadingFunc(false)
        }
      } catch (err: any) {
        if (errorFunc) {
          errorFunc(err)
        }
        if (loadingFunc) {
          loadingFunc(false)
        }
      }
    },

    []
  )
  return sendRequest
}

export default useHttps
