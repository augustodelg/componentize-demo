import { useState } from 'react'
import reactLogo from './assets/react.svg'
import BillSection from './components/BillSection'
import Typography from './components/generals/Typography'
import ItemList from './components/ItemsList'
import THEME from './config/theme'
import { mockData } from './mockData'

function App() {

  return (
    <div className="flex justify-center items-center md:m-10">
      <div className='relative bg-gray-100 md:w-2/5 lg:w-3/12 h-auto p-6 md:rounded-3xl'>
        <Typography
          size={THEME.fonts.size.title}
          color={THEME.colors.text.normal}
          weight='font-extrabold'
          className="pb-5">
          Checkout 🛒
        </Typography>
        <ItemList items={mockData} />
        <div className="mt-10">

          <BillSection />
        </div>
      </div>
    </div>
  )
}

export default App
