import { CustomFilter, SearchBar } from '@/components'
import  Hero  from '../components/Hero'
import Image from 'next/image'
import { fetchCars } from '@/utils';

export default async function Home() {
  const allCars = await fetchCars();


  return (
    <main>
      <Hero/>

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='font-extrabold text-4xl'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className='home__filters'>

          <SearchBar/>

          <div className='home__filter-container'>
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  )
}
