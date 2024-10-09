/* eslint-disable @next/next/no-img-element */
// components/VideoList.tsx
import React from 'react';

interface VideoListProps {
  videos: { id: string; title: string }[];
  onVideoSelect: (videoId: string) => void;
}

const VideoList: React.FC<VideoListProps> = ({ videos, onVideoSelect }) => {
  return (
    <div className="space-y-4 max-h-[calc(5*6rem)] overflow-y-auto">
      {videos.map((video) => (
        <div
          key={video.id}
          className="cursor-pointer p-2 border-b border-gray-200"
          onClick={() => onVideoSelect(video.id)}
        >
          <div className="flex items-center">
            <img
              className="w-24 h-16 object-cover mr-4"
              src={`https://img.youtube.com/vi/${video.id}/default.jpg`}
              alt={video.title}
            />
            <div>
              <h3 className="text-sm font-bold">{video.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
