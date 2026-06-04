import React from 'react'
import ContactForm from '../../components/contact/ContactForm';
import ContactFooter from "../../components/home/ContactFooter";

const Contact = () => {
  return (
    <div className='w-full mt-25 md:mt-40 flex flex-col items-center justify-center'>
      <ContactForm />
      <ContactFooter />
    </div>
  )
}

export default Contact