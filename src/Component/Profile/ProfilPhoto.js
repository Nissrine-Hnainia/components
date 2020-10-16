import React from 'react';
import myPhoto from './my-profile-photo.jpg';
import './ProfilPhoto.css'

const ProfilPhoto = () => {
    return(
        <img className ="pic" src={myPhoto}/>
    );
};

export default ProfilPhoto;