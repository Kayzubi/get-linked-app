import React, { FC } from 'react'

interface Props {
  formMethods: any
  inputName: string
  label: string
  placeHolder?: string
  errorClass?: string
  required?: boolean
  className: string
}

const TextArea: FC<Props> = ({
  formMethods,
  inputName,
  label,
  placeHolder,
  required,
  errorClass,
  className,
}) => {
  return (
    <div className=' w-full'>
      <label htmlFor={inputName} className=' hidden'>
        {label}
        {required && <span>*</span>}
      </label>
      <div
        className={
          formMethods.formState.errors[inputName] ? errorClass : className
        }>
        <textarea
          className='bg-transparent w-full h-full text-white-100 outline-none border-none resize-none'
          name={inputName}
          placeholder={placeHolder}
          {...formMethods.register(inputName, {
            required: required && `Please Enter ${label}`,
          })}
          id={inputName}></textarea>
      </div>
      {!!formMethods.formState.errors && (
        <small className=' text-[red]'>
          {formMethods.formState.errors[inputName]?.message}
        </small>
      )}
    </div>
  )
}

export default TextArea
