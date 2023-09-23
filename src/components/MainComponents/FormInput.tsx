import React, { FC } from 'react'

interface Props {
  formMethods: any
  inputName: string
  type: string
  label: string
  placeHolder?: string
  errorClass?: string
  required?: boolean
  className: string
  showLabel?: boolean
}

const FormInput: FC<Props> = ({
  formMethods,
  inputName,
  type,
  label,
  placeHolder,
  required,
  errorClass,
  className,
  showLabel = false,
}) => {
  return (
    <div className=' w-full'>
      <label htmlFor={inputName} className={!showLabel ? ' hidden' : ''}>
        {label}
        {required && <span>*</span>}
      </label>
      <div
        className={
          formMethods.formState.errors[inputName] ? errorClass : className
        }>
        <input
          className=' bg-transparent w-full h-full text-white-100 outline-none border-none z-30'
          placeholder={placeHolder}
          {...formMethods.register(inputName, {
            required: required && `Please Enter ${label}`,

            validate: {
              matchPattern: (v: any) =>
                type === 'email'
                  ? /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                    'Email address must be a valid address'
                  : null,
            },
          })}
          id={inputName}
          type={type}
        />
      </div>
      {!!formMethods.formState.errors && (
        <small className=' text-[red]'>
          {formMethods.formState.errors[inputName]?.message}
        </small>
      )}
    </div>
  )
}

export default FormInput
