import React, { useRef, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: containerRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3, // Start playing when 30% of video is visible
    rootMargin: "0px",
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isIntersecting) {
      // Play video when it comes into view
      video.play().catch((error) => {
        // Auto-play might be blocked by browser policy
        console.log("Auto-play was prevented:", error);
      });
    } else {
      // Pause video when it goes out of view
      video.pause();
    }
  }, [isIntersecting]);

  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className={`${className}`}
    >
      <video
        ref={videoRef}
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
