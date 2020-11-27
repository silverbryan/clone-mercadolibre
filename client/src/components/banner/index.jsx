import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Banner = ({ banners }) => {
    return (
        <ImageGallery
            items={banners}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
        />
    );
}

export default Banner;