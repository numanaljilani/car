"use client"
import React, { useState } from 'react'
import { SearchManufacturer } from '.'

function SerachBar() {
    const [manufacturer, setManufacturer] = useState("")
    const heandleSearch = () => { }
    return (
        <form className='searchbar' onSubmit={heandleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
            </div>
        </form>
    )
}

export default SerachBar