"use client";

import React from "react";

interface VideoPlayerProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
  poster?: string;
}

const VideoPlayer = ({
  src,
  width = 1600,
  height = 358,
  className = "",
  poster,
}: VideoPlayerProps) => {
  return (
    <div className={className}>
      <video
        width={width}
        height={height}
        controls
        playsInline
        className="rounded-lg shadow-lg w-full h-auto"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
