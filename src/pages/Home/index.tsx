import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../companents/Header";
import { routes } from "../../constants";
import "./index.css"

export type Photo = {
    albumId: number
    id: number
    thumbnailUrl: string
    title: string
    url: string
}

const Home: React.FC = () => {
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
        <>
            <Header />
            <div className='photos-container'>
                {photos.map(({thumbnailUrl, id}) => (
                    <Link to={`${routes.photo}/${id}`} className='photo' key={id}>
                        <img  alt='photo' src={thumbnailUrl}/>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Home;