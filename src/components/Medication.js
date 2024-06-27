// src/ImagePage.js
import React from 'react';
import '../Styles/mediA.css';

const ImagePage = () => {
    return (
        <div className="image-page">
            <h1>Image Space</h1>
            <div className="image-frame">
                <img src={`${process.env.PUBLIC_URL}/my-image.jpg`} alt="Description" className="displayed-image" />
                <div className="scale-info">
                    <div className="scale-label">
                        <div className="scale-symbol missed-dosage">x</div>
                        <div>Missed Dosage</div>
                    </div>
                    <div className="scale-label">
                        <div className="scale-symbol taken-dosage">.</div>
                        <div>Dosage Taken</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagePage;
