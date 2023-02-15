import React from 'react';

const VideoSection = ({ videoKey, title }) => {
  return (
    <div className="video-section">
      <h1>{`${title} | Videos`}</h1>
      <div className="video-box">
        {videoKey ? (
          <div>
            <iframe
              src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
              title="YouTube video"
              allowFullScreen
              className="video"
              style={{ aspectRatio: '160 / 90' }}
            ></iframe>
          </div>
        ) : (
          <h2 style={{ marginTop: '10px' }}>
            There is no video about this movie !!!
          </h2>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
