
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultCharts from './Components/ResultCharts/ResultCharts'
import axios from 'axios'
import MarksChart from './Components/MarksChart/MarksChart'

function App() {

  const pricingPromise = fetch('PricingData.json').then(res => res.json());
  const marksPromise = axios.get('MarksData.json');

  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main className='w-11/12 mx-auto md:mt-10 mt-4'>
        <Suspense fallback={<div className="flex justify-center items-center w-full h-full">
          <span className="loading loading-dots loading-lg"></span>
        </div>
        }>
          <PricingOptions pricingPromise={pricingPromise}> </PricingOptions>
        </Suspense>
        <Suspense fallback={<div className="flex justify-center items-center w-full h-full">
          <span className="loading loading-dots loading-lg"></span>
        </div>
        }>
          <MarksChart marksPromise={marksPromise}></MarksChart>

        </Suspense>
        <ResultCharts></ResultCharts>
      </main>

      <footer>

      </footer>




    </>
  )
}

export default App
