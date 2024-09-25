import React from 'react';

const VideoPlayer = ({width, height, src, title}) => {
  return (
      <iframe
        width={width}
        height={height}
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
  );
};

export default VideoPlayer;
