import React, {useEffect, useState} from 'react';
import Header from "../../companents/Header";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Photo } from "../Home";
import './index.css'

const AboutPhoto = () => {
    const { id } = useParams()
    const [photo, setPhoto] = useState<Photo>({} as Photo)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then((response) => response.json())
            .then((json) => setPhoto(json))
    }, [id])

    return (
        <div>
            <Header />
            <Link to='/'>
                <p className='back'>Back</p>
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
        </div>
    );
};

export default AboutPhoto;