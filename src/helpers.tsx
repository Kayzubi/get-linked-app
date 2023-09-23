import { AxiosError } from 'axios'
import { ErrorHttpResponse } from './https'
import { toast } from 'react-hot-toast'

export const httpErrorHandlerFunction = (
  err: AxiosError<ErrorHttpResponse>
) => {
  if (!err?.response?.data) {
    toast.error('Something went wrong')
    return
  }

  const errorMessage = err.response.data.message

  if (typeof errorMessage === 'string') {
    return toast.error(errorMessage)
  }

  const message: { [key in string]: string[] } = errorMessage

  for (const key in message) {
    const errormessage = `${key} : ${message[key].join(' ')}`
    toast.error(errormessage, { position: 'top-right' })
  }
}

export const scrollTo = (sectionRef: any) => {
  window.scrollTo({ top: sectionRef.current.offsetTop, behavior: 'smooth' })
}
