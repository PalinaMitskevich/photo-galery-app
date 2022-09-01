import React, {useEffect, useState} from 'react';
import './index.css'
import Header from "../../companents/Header";
import { Link } from "react-router-dom";

export type Photo = {
    albumId: number
    id: number
    thumbnailUrl: string
    title: string
    url: string
}

const Home = () => {
    const [photos, setPhotos] = useState<Array<Photo>>([])

    useEffect( () => {
        const fetchPhotos = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=12')
            const photos = await response.json()
            setPhotos(photos as Photo[])
        }
        fetchPhotos()
    }, [])

    return (
        <div>
            <Header />
            <div className='photos-container'>
                {photos.map(({thumbnailUrl, id}) => (
                    <Link to={`about-photo/${id}`} className='photo' key={id}>
                        <img  alt='photo' src={thumbnailUrl}/>
                    </Link>
                ))}
            </div>
        </div>

    );
};

export default Home;