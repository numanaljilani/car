"use client"
import { CarCardDetails } from '@/type'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
function CarDetails({ isOpen, closeModel, car }: CarCardDetails) {

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className="relative z-10" onClose={closeModel}>
                    <Transition.Child as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 '
                        enterTo='opacity-100 '
                        leave='ease-in duration-200'
                        leaveFrom='opactity-100 '
                        leaveTo='opacity-0 '
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"></div>
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto ">
                        <div className="flex min-h-full items-center justify-center p-4 text-center ">
                            <Transition.Child as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opactity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                                    <button type='button' onClick={closeModel} className="w-fit p-2 rounded-full bg-primary-blue-100 absolute top-2 right-2 z-10">
                                        <Image src="/close.svg" alt="close" width={20} height={20} className='object-contain' />
                                    </button>

                                    <div className="flex flex-1 flex-col gap-3">
                                        <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">

                                            <Image src="/hero.png" alt="cars" fill priority className="object-contain" />
                                        </div>

                                        <div className="flex gap-3">
                                            <div className="flex-1  relative w-full h-24 bg-primary-blue-100  rounded-lg">
                                                <Image src="/hero.png" alt="cars" fill priority className="object-contain" />
                                            </div>
                                            <div className="flex-1  relative w-full h-24 bg-primary-blue-100  rounded-lg">
                                                <Image src="/hero.png" alt="cars" fill priority className="object-contain" />
                                            </div>
                                            <div className="flex-1  relative w-full h-24 bg-primary-blue-100  rounded-lg">
                                                <Image src="/hero.png" alt="cars" fill priority className="object-contain" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex-col gap-2">
                                        <h2 className="text-xl capitalize font-semibold">{car.make} {car.model}</h2>
                                        <div className="mt-3 flex flex-wrap gap-4">
                                            {
                                                Object.entries(car).map(([key, value]) => (
                                                    <div className="flex justify-between gap-5 text-right  w-full" key={key.split("_").join(" ")}>
                                                        <h4 className="text-grey capitalize " >{key}</h4>
                                                        <h4 className="text-grey capitalize " >{value}</h4>

                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </div>
                                </Dialog.Panel>

                            </Transition.Child>

                        </div>
                    </div>
                </Dialog>
            </Transition>

        </>
    )
}

export default CarDetails