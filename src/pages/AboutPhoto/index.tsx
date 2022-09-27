import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowRoundBack } from "react-icons/io";
import Header from "../../companents/Header";
import { Photo } from "../Home"
import { routes } from "../../constants";
import './index.css'

const AboutPhoto: React.FC = () => {
    const { id } = useParams()
    const [photo, setPhoto] = useState<Photo>({} as Photo)

    useEffect(() => {
        const fetchPhotos = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            const photos = await response.json()
            setPhoto(photos as Photo)
        }
        fetchPhotos()
    }, [id])

    return (
        <>
            <Header />
            <Link to={routes.home}>
                <IoIosArrowRoundBack className='back'/>
            </Link>
            <div className='information-container'>
                <Link to={`${ Number(id) === 1 ? '12' : Number(id) - 1}`}>
                    <IoIosArrowBack className='icon-back-forward' />
                </Link>
                <div>
                    <img alt='photo' src={photo.url} />
                    <p className='photo-description'>Description: {photo.title}</p>
                </div>
                <Link to={`${ Number(id) === 12 ? '1' : Number(id) + 1}`}>
                    <IoIosArrowForward className='icon-back-forward'/>
                </Link>
            </div>
        </>
    );
};

export default AboutPhoto;