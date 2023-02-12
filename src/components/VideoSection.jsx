import React from 'react';

const VideoSection = ({ videoKey, title }) => {
  return (
    <div className="video-section">
      <h1>{`${title} | Oficial Trailer`}</h1>
      <div className="video-box">
        <div>
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
            title="YouTube video"
            allowFullScreen
            className="video"
            style={{ aspectRatio: '160 / 90' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
