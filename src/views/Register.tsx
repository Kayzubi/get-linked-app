import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { images } from '../assets'
import man from '../assets/3d-graphic-designer-showing-thumbs-up-png 1.png'
import FormInput from '../components/MainComponents/FormInput'
import useRegister from '../hooks/useRegister'
import congrats from '../assets/congratulation.png'
import { motion, AnimatePresence } from 'framer-motion'
import movement from '../assets/movement.png'

const Register = () => {
  const [categories, setcategories] = useState<{ id: number; name: string }[]>(
    []
  )

  const [showModal, setshowModal] = useState(false)

  const { getCategories, loading, registerUser } = useRegister()

  const formMethods = useForm({
    defaultValues: {
      team_name: '',
      email: '',
      phone_number: '',
      project_topic: '',
      category: 1,
      group_size: 1,
      privacy_poclicy_accepted: false,
    },
  })

  const onSubmit: SubmitHandler<{
    team_name: string
    email: string
    phone_number: string
    project_topic: string
    category: number
    group_size: number
    privacy_poclicy_accepted: boolean
  }> = (data) => {
    console.log(data)
    registerUser({ ...data, group_size: Number(data.group_size) }, () => {
      setshowModal(true)
      formMethods.reset()
    })
  }

  useEffect(() => {
    getCategories(setcategories)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className=' min-h-screen py-32 text-white-100 relative overflow-hidden px-5'>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className=' fixed h-screen top-0 left-0 z-50 w-screen bg-[#000000] bg-opacity-5 backdrop-blur-md flex justify-center items-center'>
            <div className=' flex flex-col gap-10 w-full max-w-[300px] text-center'>
              <img src={congrats} alt='' />
              <h1>Congratulations you have successfully Registered!</h1>
              <p>yes it was....and wink emoji</p>
              <button
                className='mx-auto bg-gradient-to-r from-tertiary-500  to-primary-500 via-secondary-500 py-2 md:py-2 px-2 rounded-sm outline-none w-full text-white-100 text-lg '
                onClick={() => setshowModal(false)}>
                Back
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
        <div className=' lg:pt-20 z-30 relative'>
          <span className='star-sm after:bg-primary-500 before:bg-primary-500 top-[5%] left-0'></span>
          <span className='star-sm after:bg-white-10 before:bg-white-10 bottom-[5%] left-0'></span>
          <span className='star-sm after:bg-primary-500 before:bg-primary-500 bottom-[30%] right-20'></span>

          <h1 className=' lg:hidden text-2xl text-secondary-500 font-bold'>
            Register
          </h1>
          <img src={man} alt='' />
        </div>
        <div className='py-20 lg:px-10 px-5 lg:bg-white-100 rounded-xl lg:bg-opacity-5 lg:backdrop-filter lg:backdrop-blur-lg relative'>
          <span className='star after:bg-white-10 before:bg-white-10 top-[5%] right-[15%]'></span>
          <span className='star-sm after:bg-white-100 before:bg-white-100 bottom-[-5px] right-[20%]'></span>

          <h1 className=' hidden lg:block text-2xl text-secondary-500 font-bold'>
            Register <br /> Let us know about it!
          </h1>
          <p className='my-3 flex gap-2 items-end '>
            Be part of this movement <img src={movement} alt='' />
          </p>
          <h2 className=' text-xl font-medium my-3'>CREATE YOUR ACCOUNT</h2>
          <form
            onSubmit={formMethods.handleSubmit(onSubmit)}
            className=' z-30 mt-10 flex flex-col gap-3'>
            <div className=' lg:grid grid-cols-2 gap-x-3 gap-y-6'>
              <FormInput
                formMethods={formMethods}
                inputName='team_name'
                label="Team's name"
                placeHolder='Enter the name of your group'
                type='text'
                className=' mb-3 h-12 border-2 rounded-md px-5 py-1 flex items-center  z-30'
                errorClass=' mb-3 h-12 border-2 border-[red] rounded-lg px-5 py-1 flex items-center  z-30'
                required
                showLabel
              />
              <FormInput
                formMethods={formMethods}
                inputName='phone_number'
                label='Phone'
                placeHolder='Enter your phone number'
                type='text'
                className=' mb-3 h-12 border-2 rounded-md px-5 py-1 flex items-center  z-30'
                errorClass=' mb-3 h-12 border-2 border-[red] rounded-lg px-5 py-1 flex items-center  z-30'
                required
                showLabel
              />

              <FormInput
                formMethods={formMethods}
                inputName='email'
                label='Email'
                placeHolder='Enter your email address'
                type='email'
                className=' mb-3 h-12 border-2 rounded-md px-5 py-1 flex items-center  z-30'
                errorClass=' mb-3 h-12 border-2 border-[red] rounded-lg px-5 py-1 flex items-center  z-30'
                required
                showLabel
              />
              <FormInput
                formMethods={formMethods}
                inputName='project_topic'
                label='Project Topic'
                placeHolder='What is your group project topic'
                type='text'
                className=' mb-3 h-12 border-2 rounded-md px-5 py-1 flex items-center  z-30'
                errorClass=' mb-3 h-12 border-2 border-[red] rounded-lg px-5 py-1 flex items-center  z-30'
                required
                showLabel
              />
              <div>
                <label htmlFor='group_size'>Category</label>

                <select
                  id='category'
                  disabled={loading}
                  {...formMethods.register('category')}
                  className=' mb-3 h-12 border-2 rounded-md px-5 py-1 flex items-center  z-30 bg-transparent outline-none w-full '>
                  {categories.map((item) => (
                    <option
                      key={item.id}
                      value={item.id}
                      className=' text-[#000000]'>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor='group_size'>Groip Size</label>
                <select
                  id='group_size'
                  disabled={loading}
                  {...formMethods.register('group_size')}
                  className=' mb-3 h-12 border-2 rounded-md px-5 py-1 flex items-center  z-30 bg-transparent outline-none w-full '>
                  <option className=' text-[#000000]' value={1}>
                    1
                  </option>
                  <option className=' text-[#000000]' value={2}>
                    2
                  </option>
                  <option className=' text-[#000000]' value={3}>
                    3
                  </option>
                  <option className=' text-[#000000]' value={4}>
                    4
                  </option>
                  <option className=' text-[#000000]' value={5}>
                    5
                  </option>
                  <option className=' text-[#000000]' value={6}>
                    6
                  </option>
                  <option className=' text-[#000000]' value={7}>
                    7
                  </option>
                  <option className=' text-[#000000]' value={8}>
                    8
                  </option>
                </select>
              </div>
            </div>

            <small className=' text-secondary-500 font-sm font-semibold'>
              Please review your registration details before submitting
            </small>

            <label className=' flex items-center gap-2'>
              <input
                type='checkbox'
                id='privacy_policy'
                {...formMethods.register('privacy_poclicy_accepted', {
                  validate: {
                    matchPattern: (v: any) =>
                      v === true || 'Privacy policy is required',
                  },
                })}
                className=' bg-transparent border rounded-sm'
              />
              <small>
                I agreed with the event terms and conditions and privacy policy
              </small>
            </label>
            {formMethods.formState.errors.privacy_poclicy_accepted && (
              <small className=' text-[red]'>
                {formMethods.formState.errors.privacy_poclicy_accepted.message}
              </small>
            )}

            <button
              type='submit'
              disabled={loading}
              className=' mx-auto lg:mx-0 mt-8 bg-gradient-to-r from-tertiary-500  to-primary-500 via-secondary-500 py-2 md:py-2 px-2 rounded-sm outline-none w-28 text-white-100 text-lg '>
              {loading ? 'Loading...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
