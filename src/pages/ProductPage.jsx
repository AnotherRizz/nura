import React from 'react'
import Internet from '../section/Internet'

const ProductPage = () => {
  return (
    <div className=' w-full min-h-screen '>
      <div className='w-full mt-20 p-10 grid grid-cols-1 md:grid-cols-3 gap-10'>
        <div className=''>

        <h1 className='text-3xl font-bold'>Pilih Kecepatan <br/> Sesuai Kebutuhan Anda</h1>
        </div>
        <div className='col-span-2 p-3'>
        <Internet/>
        </div>

      </div>
     
    </div>
  )
}

export default ProductPage
