import { TERMSPAGE } from '@/utils/constants';

export default function terms() {
  return (
    <div className="flex items-center justify-center text-md sm:text-lg text-primaryText mx-10">
        <div className="container my-10 sm:my-32 lg:w-[70%] xl:w-[60%]">
            <div className="mb-5">
                <h1 className='text-5xl sm:text-7xl xl:text-8xl font-primaryFont'>
                    {TERMSPAGE.TITLE_1}
                </h1>
                <p className='my-2'>
                    {TERMSPAGE.SUB_TITLE_1}
                </p>
            </div>
            <div>
                <h2 className='text-4xl font-primaryFont my-2'>
                    {TERMSPAGE.LIST_TITLE}
                </h2>
                <ul className='list-disc'>
                    <li>
                        {TERMSPAGE.LIST_ITEM_1}
                    </li>
                    <li>
                        {TERMSPAGE.LIST_ITEM_2}
                    </li>
                    <li>
                        {TERMSPAGE.LIST_ITEM_3}
                    </li>
                    <li>
                        {TERMSPAGE.LIST_ITEM_4}
                    </li>
                    <li>
                        {TERMSPAGE.LIST_ITEM_5}
                    </li>
                    <li>
                        {TERMSPAGE.LIST_ITEM_6}
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
