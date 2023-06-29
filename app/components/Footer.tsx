import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='flexStart footer'>

        <div className='flex flex-col gap-12 w-full'>
            <div className='flex items-start flex-col'>

                <Image 
                src="/logo-purple.svg"
                width={115}
                height={38}
                alt="flexibble"
                />

                <p className='text-start text-sm font-normal mt-5 max-w-xs'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Tempore amet dolores dolorum corrupti porro nesciunt iste nihil ex deserunt ea earum unde suscipit rerum nam ipsam aliquam, 
                    voluptatum vitae veritatis?
                </p>

            </div>
        </div>

    </footer>
  )
}

export default Footer