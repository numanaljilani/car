"use client"
import { CustomButtonProps } from '@/type'
import Image from 'next/image'
import React from 'react'

function CustomButton({ title, containerStyles, handleClick, btnType, rightIcon, textStyle }: CustomButtonProps) {
    return (
        <button
            disabled={false}
            type={btnType || `button`}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >


            <span className={`flex-1 ${textStyle}`}>
                {title}
            </span>

            {
                rightIcon && (
                    <div className="relative w-6 h-6">
                        <Image src={rightIcon} className="object-contain" alt="go to" fill />
                    </div>
                )
            }

        </button>
    )
}

export default CustomButton