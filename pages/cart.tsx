import Header from '@/components/cart/Header'
import Card from '@/components/cart/Card'
import { useContext, useState, useEffect } from 'react'
import { ProductType } from '../typings'

interface Props {
  product: [ProductType];
}

const products = [
  {
    id: 1,
    name: 'Sabji',
    href: '#',
    price: '$48',
    imageSrc:
      'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
    imageAlt: 'Veggies',
  },
  {
    id: 2,
    name: 'Sabji',
    href: '#',
    price: '$48',
    imageSrc:
      'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
    imageAlt: 'Veggies',
  },
  {
    id: 3,
    name: 'Sabji',
    href: '#',
    price: '$48',
    imageSrc:
      'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
    imageAlt: 'Veggies',
  },
  {
    id: 4,
    name: 'Sabji',
    href: '#',
    price: '$48',
    imageSrc:
      'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
    imageAlt: 'Veggies',
  },
  {
    id: 5,
    name: 'Sabji',
    href: '#',
    price: '$48',
    imageSrc:
      'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
    imageAlt: 'Veggies',
  },
  {
    id: 6,
    name: 'Sabji',
    href: '#',
    price: '$48',
    imageSrc:
      'https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg',
    imageAlt: 'Veggies',
  },
];

const cart = () => {
  return (
    <div>
        <div className="container mx-auto">
          <div>
            <Header/>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-rows-auto gap-8 px-10 m-10 w-full mx-auto'>
            { products.map( (product) => <Card key={product.id} product={product}/> )}
          </div>
        </div>
    </div>
  )
}

export default cart