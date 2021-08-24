import React from 'react';
import classes from './MapWidget.module.scss';

const MapWidget = () => {
    return (
        <div className={classes.MapWidget}>
            {
                window.innerWidth < 1050 ?
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.2727988727534!2d30.53348991573089!3d50.43601917947342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0703b1f2c7%3A0x8f8b62b0c83f488!2z0J_QtdGH0LXRgNGB0YzQutC40Lkg0YPQt9Cy0ZbQtywgMTPQkCwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1629093689316!5m2!1suk!2sua"
                        width={`${window.innerWidth - 80}`} height={`${window.innerWidth * 3/4}`} style={{border:0}} allowFullScreen="" loading="lazy"></iframe> : null
            }
            {window.innerWidth >= 1050 ?
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.2727988727534!2d30.53348991573089!3d50.43601917947342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0703b1f2c7%3A0x8f8b62b0c83f488!2z0J_QtdGH0LXRgNGB0YzQutC40Lkg0YPQt9Cy0ZbQtywgMTPQkCwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1629093689316!5m2!1suk!2sua"
                    width={`${window.innerWidth/2 - 30}`} height={`${window.innerWidth/4 }`} style={{border:0}} allowFullScreen="" loading="lazy"></iframe> : null}

        </div>
    );
};

export default MapWidget;