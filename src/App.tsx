import BillSection from './components/BillSection'
import Button from './components/generals/Button'
import Typography from './components/generals/Typography'
import ItemList from './components/ItemsList'
import NavBar from './components/NavBar'
import THEME from './config/theme'
import { billMockData, mockData } from './mockData'

function App() {

  return (
    <div className="flex justify-center items-center md:m-10">

      <div className='relative  bg-gray-100 md:w-2/5 lg:w-3/12 h-auto p-6 md:rounded-3xl'>
        <div className='pb-8'>
          <NavBar />
        </div>
        <Typography.Title
          className="pb-5">
          Checkout 🛒
        </Typography.Title>
        <ItemList items={mockData} />
        <div className="mb-6 mt-8 ">
          <BillSection bill={billMockData} />
        </div>
        <Button.Large onClick={() => alert('Snappler 🕺')} className='w-full ' color={THEME.colors.grayDeep.bg} >
          <Typography.Title color={THEME.colors.white.text} >
            PAY
          </Typography.Title>
        </Button.Large>
      </div>
    </div>
  )
}

export default App
