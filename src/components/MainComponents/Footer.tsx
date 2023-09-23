import React from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../../assets'

const Footer = () => {
  return (
    <div className=' min-h-[550px] bg-ebony-950 text-white-100 flex items-center py-10 px-5'>
      <div className=' max-w-7xl mx-auto'>
        <div className=' min-h-300px  lg:grid grid-cols-3 pb-10'>
          <div className=' flex flex-col gap-5 pb-5'>
            <h1 className=' text-2xl font-bold font-clash'>
              get <span className=' text-secondary-500'>Linked</span>
            </h1>
            <p className=' w-[80%] text-[12px]'>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div className=' mt-auto'>
              <Link
                to='#'
                className=' pe-5 border-e border-e-secondary-500 text-[12px]'>
                Terms of use
              </Link>
              <Link to='#policy' className='ps-5 text-[12px]'>
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className=' pb-10'>
            <ul className=' flex flex-col gap-3 mb-10'>
              <h3 className=' text-secondary-500 font-semibold'>
                Useful Links
              </h3>
              <li className=' text-[12px]'>
                <Link to='#'>Overview</Link>
              </li>
              <li className=' text-[12px]'>
                <Link to='#'>Timeline</Link>
              </li>{' '}
              <li className=' text-[12px]'>
                <Link to='#'>FAQs</Link>
              </li>{' '}
              <li className=' text-[12px]'>
                <Link to='#'>Register</Link>
              </li>
            </ul>
            <p className=' text-[12px] flex items-center gap-3 text-secondary-500'>
              Follow us: <img src={icons.insta} alt='' />{' '}
              <img src={icons.twitter} alt='' />
              <img src={icons.facebook} alt='' />
              <img src={icons.linkedIn} alt='' />
            </p>
          </div>
          <div>
            <ul className=' flex flex-col gap-3 mb-10'>
              <h3 className=' text-secondary-500 font-semibold'>Contact Us</h3>
              <li className=' flex items-start gap-5 text-[12px]'>
                <img src={icons.phone} alt='' />
                <span>+234 6707653444</span>
              </li>
              <li className=' flex items-start gap-5 text-[12px]'>
                <img src={icons.location} alt='' />
                <span>
                  27,Alara Street Yaba 100012 <br /> Lagos State
                </span>
              </li>
            </ul>
          </div>
        </div>
        <p className=' text-center text-[12px] py-6'>
          All rights reserved. © getlinked Ltd.
        </p>
      </div>
    </div>
  )
}

export default Footer
