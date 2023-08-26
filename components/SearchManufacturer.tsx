"use client"
import { SearchManufacturerProps } from '@/type'
import { Combobox, Transition } from "@headlessui/react"
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { manufacturers } from '@/constatns'

function SearchManufacturer({ manufacturer, setManufacturer }: SearchManufacturerProps) {
    const [query, setQuery] = useState("")

    const filteredManufacturers = query === "" ? manufacturers : manufacturers.filter((item) => (item.toLocaleLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))))
    return (
        <div className="search-manufacurer">
            <Combobox value={manufacturer} onChange={setManufacturer}>

                <Combobox.Button className="absolute top-[14px]">
                    <Image src="/car-logo.svg" width={20} height={20} className='ml-4' alt="Car logo" />
                </Combobox.Button>
                <Combobox.Input className="search-manufacturer__input" placeholder='Volkswagen'
                    displayValue={(manufacturer: string) => manufacturer}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Transition as={Fragment} leave='transition ease-in duration-100'
                    leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={() => setQuery("")}>
                    <Combobox.Options>
                        {
                            filteredManufacturers.length === 0 && query !== "" ? <Combobox.Option value={query} className="search-manufacturer__option">
                                create "{query}"
                            </Combobox.Option> : filteredManufacturers.map((item) => (<Combobox.Option key={item} value={item} className={({ active }) => `search-manufacturer__option ${active ? "bg-primary-blue text-white " : "text-gray-900"}`}>
                                {(selected, active) => {
                                    return (<>
                                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                            {item}
                                        </span>

                                        {/* Show an active blue background color if the option is selected */}
                                        {selected ? (
                                            <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-pribg-primary-purple"}`}
                                            ></span>
                                        ) : null}
                                    </>)
                                }}
                            </Combobox.Option>))
                        }

                    </Combobox.Options>
                </Transition>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer