import React from 'react'
import { icons } from '../assets'
import { useForm, SubmitHandler } from 'react-hook-form'
import FormInput from '../components/MainComponents/FormInput'
import TextArea from '../components/MainComponents/FormTextArea'
import { images } from '../assets'

const Contact = () => {
  const formMethods = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit: SubmitHandler<{
    name: string
    email: string
    message: string
  }> = (data) => {
    console.log(data)
  }

  return (
    <div className=' min-h-screen py-32 text-white-100 relative overflow-hidden px-5'>
      <img
        src={images.flare}
        alt=''
        className=' absolute top-0 left-[-50px] lg:top-[-150px] lg:left-[-200px] opacity-[0.25]'
      />
      <img
        src={images.flare}
        alt=''
        className=' absolute hidden lg:block bottom-0 right-[-50px] lg:bottom-[-150px] lg:right-[-200px] opacity-[0.25]'
      />
      <div className=' h-full min-h-[550px] block max-w-7xl mx-auto lg:grid grid-cols-2'>
        <div className=' pt-20 hidden lg:flex flex-col gap-5  z-30'>
          <h2 className=' text-2xl text-secondary-500 font-bold'>
            Get in touch
          </h2>
          <p>
            Contat <br /> Information
          </p>
          <p>
            27,Alara Street <br /> Yaba 100012 <br /> Lagos State
          </p>
          <p>Call Us : 07067981819</p>
          <p>
            we are open from Monday-Friday <br /> 08:00am - 05:00pm
          </p>
          <div>
            <p className=' text-secondary-500 mb-5'>Share on:</p>
            <img
              className=' inline mr-4 cursor-pointer'
              src={icons.insta}
              alt=''
            />
            <img
              className=' inline mr-4 cursor-pointer'
              src={icons.twitter}
              alt=''
            />
            <img
              className=' inline mr-4 cursor-pointer'
              src={icons.facebook}
              alt=''
            />
            <img
              className=' inline mr-4 cursor-pointer'
              src={icons.linkedIn}
              alt=''
            />
          </div>
        </div>
        <div className='py-20 lg:px-10 px-5 lg:bg-white-100 rounded-xl lg:bg-opacity-5 lg:backdrop-filter lg:backdrop-blur-lg'>
          <h1 className=' text-2xl text-secondary-500 font-bold'>
            Questions or need assistance? <br /> Let us know about it!
          </h1>
          <p className=' lg:hidden mt-2 '>
            Email us below to any question related to our event
          </p>
          <form
            onSubmit={formMethods.handleSubmit(onSubmit)}
            className=' z-30 mt-10 flex flex-col gap-3'>
            <FormInput
              formMethods={formMethods}
              inputName='name'
              label='Full name'
              placeHolder='Full Name'
              type='text'
              className=' mb-3 h-10 border rounded-lg px-5 py-1 flex items-center  z-30'
              errorClass=' mb-3 h-10 border border-[red] rounded-lg px-5 py-1 flex items-center  z-30'
              required
            />
            <FormInput
              formMethods={formMethods}
              inputName='email'
              label='Email'
              placeHolder='Email'
              type='email'
              className=' mb-3 h-10 border rounded-lg px-5 py-1 flex items-center  z-30'
              errorClass=' mb-3 h-10 border border-[red] rounded-lg px-5 py-1 flex items-center  z-30'
              required
            />
            <TextArea
              formMethods={formMethods}
              inputName='message'
              label='Message'
              placeHolder='Message'
              className=' mb-3 h-44 border rounded-lg px-5 py-1 flex items-center  z-30'
              errorClass=' mb-3 h-44 border border-[red] rounded-lg px-5 py-1 flex items-center  z-30'
              required
            />
            <button
              type='submit'
              className=' mx-auto lg:mx-0 mt-8 bg-gradient-to-r from-tertiary-500  to-primary-500 via-secondary-500 py-2 md:py-2 px-2 rounded-sm outline-none w-28 text-white-100 text-lg '>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
