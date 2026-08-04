import React from 'react'
import { ContactForm } from './components/form'
import { Header } from '@/components/layout/Header';

const page = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-[#0a0a0a]">
      <Header />
      <ContactForm/>
    </div>
  )
}

export default page
