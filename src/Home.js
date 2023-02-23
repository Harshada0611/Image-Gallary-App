import React, { useState, useEffect } from 'react'
import './assets/home.css'
import axios from 'axios'
import { Icon } from 'react-icons-kit'
import { search } from 'react-icons-kit/icomoon/search'
import Card from './Card'

function Home() {
    const [searchQuery, setSearchQuery] = useState('dog')
    const [name, setName] = useState('')
    const [imagesData, setImagesData] = useState([])

    useEffect(() => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&client_id=ri6sPGjRNboWKHkofvh1AVhBZpuWwhJ2XO50kHaCLFQ`)
            .then(response => setImagesData(response.data.results))
    }, [searchQuery])


    const searchIconClick = () => {
        setSearchQuery(name)
        setName('')
    }

    const eachBtnClick = (value) => {
        setSearchQuery(value)
        setName('')
    }

    return (
        <>
            <div className='container-fluid' id='header'>
                <h1>SNAPSHOT</h1>
                <div className='container searchBar'>
                    <input type='text' placeholder='Search' className='container-sm' value={name} onChange={(e) => setName(e.target.value)}></input>
                    <button onClick={searchIconClick} className='col-sm-1'><Icon icon={search} size={20} ></Icon></button>
                </div>
                <div className='container-sm btnWrapper d-flex justify-content-center'>
                    <button className='btn btn-primary my-3 mx-2 col-sm-1' value='mountain' onClick={(e) => { eachBtnClick(e.target.value) }}>Mountain</button>
                    <button className='btn btn-primary my-3 mx-2 col-sm-1' value='birds' onClick={(e) => { eachBtnClick(e.target.value) }}>Birds</button>
                    <button className='btn btn-primary my-3 mx-2 col-sm-1' value='beaches' onClick={(e) => { eachBtnClick(e.target.value) }}>Beaches</button>
                    <button className='btn btn-primary my-3 mx-2 col-sm-1' value='food' onClick={(e) => { eachBtnClick(e.target.value) }}>Food</button>
                </div>
            </div>

            <div className='container bodyWrapper'>
                <div className='container imageCardWrapper'>
                    {imagesData.map((image, index) => {
                        return (
                            <div key={index + 1}>
                                <Card getimage={image.urls.small} />
                                <Card getimage={image.urls.small} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home