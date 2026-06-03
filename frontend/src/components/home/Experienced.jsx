import React from 'react'
import { motion } from 'framer-motion'

const Experienced = () => {
  return (
    <motion.div initial={{ opacity: 0, y:15 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 0.5, delay: 0.2 }} className='mt-10 md:mt-17 flex flex-col items-center justify-center gap-8 px-5'>
        <h1 className='text-xl text-white font-semibold uppercase tracking-wider'>Experience with</h1>

        <div className='md:mt-5'>
            <img src="/Logos.png" alt="" className='w-70 md:w-max'/>
        </div>
    </motion.div>
  )
}

export default Experienced