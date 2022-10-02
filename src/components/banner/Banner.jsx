import React from 'react';
import { BannerStyles } from './BannerStyles';
import BannerImage from '../../assets/BannerImage.svg';

const Banner = () => {
  return (
    <BannerStyles>
        <div className='left-side-banner'>
            <h1>
                Send instant heartfelt rewards to your teachers
            </h1>
            <p>
                A digital platform that digitizes the process of sending funds to teachers who have done their work with emphatic kindness.
            </p>
            <button>Get Started</button>
        </div>
        <div className='right-side-banner'>
            <img src={BannerImage} alt="Student teacher picture" />
        </div>
    </BannerStyles>
  )
}

export default Banner