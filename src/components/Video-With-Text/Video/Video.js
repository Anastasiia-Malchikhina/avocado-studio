import React from 'react';
import './Video.scss';
const Video = () => {
  return (
    <div className="video-wrapper">
      <div className="video">
        <video  loop autoPlay>
            <source src={require('../../../images/avocado-video.mp4')} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Video;