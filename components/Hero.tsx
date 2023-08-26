"use client"
import React from 'react'
import Image from 'next/image'
import { CustomButton } from '.'
function Hero() {
    const handleScroll = () => { }
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">Find, book, rent a car -- quikly and easily!</h1>
                <p className='hero__subtitle'>streamline your car rentalwith our effort less booking process.</p>
                <CustomButton title="Explore Cars" containerStyles={"bg-primary-blue text-white rounded-full mt-10"} handleClick={handleScroll} />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" fill alt="hero image" className='object-contain' />
                </div>
                <div className="hero__image-overlay" />
            </div>
        </div>
    )
}

export default Hero