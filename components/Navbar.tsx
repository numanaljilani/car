import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from '.'
function Navbar() {
    return (
        <header className="z-10 w-full absolute">
            <nav className='max-w-[1440] max-auto flex justify-between items-center sm:px-16 px-6 py-4'>
                <Link href="/" className='flex justify-center items-center'>
                    <Image src="/logo.svg" width={118} height={18} alt="car hub logo" className='object-contain' />
                </Link>
                <CustomButton title="Sign in" btnType="button" containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]' />
            </nav>
        </header>
    )
}

export default Navbar