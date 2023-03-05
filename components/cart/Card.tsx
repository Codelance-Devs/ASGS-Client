import { useState } from 'react' 
import Image from 'next/image'
import bg from '../../public/assets/bg.jpg'
import { ProductType } from '../../typings'

interface Props {
  product: ProductType;
}

function Card({product} : Props) {

  const [count, setCount] = useState(0);

  return (
    <div className="w-[330px] h-max bg-primaryBg/60 border border-neutral-200 rounded-lg shadow-md shadow-neutral-300 px-5 my-5 mx-auto">
      <div className="py-5">
        <Image className="max-h-[200px] w-full object-cover rounded-lg drop-shadow-lg drop-shadow-neutral-400" src={product.imageSrc} alt={product.imageAlt} height={300} width={300}/>
      </div>
      <div>
        <h3 className='text-3xl text-primaryText'>
          {product.name}
        </h3>
        <div className="flex text-lg mt-1">
          <p className="mr-2">
            Price
          </p>
          <p>
            &#8377;{product.price}
          </p>
        </div>
      </div>
      <div className='flex justify-center w-full my-5'>
        <button onClick={() => setCount(count - 1)} className='bg-red-400 p-2 rounded-md shadow-md'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
          </svg>
        </button>
        <span className="bg-white py-2 px-4 rounded-md shadow-md mx-5">
          {count}
        </span>
        <button onClick={() => setCount(count + 1)} className='bg-secondaryBg p-2 rounded-md shadow-md'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Card