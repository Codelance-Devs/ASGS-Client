import Image from 'next/image'
import prop4 from '@/public/assets/prop4.svg'
import { ERRORPAGE } from '@/utils/constants';

export default function notfound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen drop-shadow-2xl">
        <div className="relative text-center bg-primaryBg px-5 sm:px-20 py-32 mx-8">
            <div className="text-primaryText text-8xl sm:text-9xl">
                {ERRORPAGE.TITLE_1}
            </div>
            <div className="text-primaryText text-3xl sm:text-5xl my-5">
                {ERRORPAGE.TITLE_2}
            </div>
            <div className="text-primaryText text-lg sm:text-xl">
                {ERRORPAGE.TITLE_3}
            </div>
            <div className='absolute -bottom-8 -right-8'>
                <Image height={150} width={150} src={prop4} alt="prop"/>
            </div>
        </div>
    </div>
  )
}
