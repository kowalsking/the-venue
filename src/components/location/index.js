import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11040.019833618588!2d-123.10893528231465!3d49.23663561036884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486740e720fbd91%3A0x757a6159f98abf22!2z0JrQu9Cw0LTQsdC40YnQtSDQnNCw0YPQvdGC0LjQvSDQktGM0Y4!5e0!3m2!1sru!2sua!4v1552737315112" 
                width="100%"
                height="500px" 
                frameBorder="0" 
                allowFullScreen
                title="s">
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;