import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import VideoList from '@/src/components/lista de video/ListaVideos';
import YouTubePlayer from '@/src/components/lista de video/VerVideo';
import { courseVideos } from '@/src/constants';


const CoursePage: React.FC = () => {
  const router = useRouter();
  const { courseId } = router.query;
  const [currentVideoId, setCurrentVideoId] = useState<string>('');
  const [playlistVideos, setPlaylistVideos] = useState<{ id: string; title: string }[]>([]);

  useEffect(() => {
    if (typeof courseId === 'string') {
      const videos = courseVideos[parseInt(courseId)] || [];
      setPlaylistVideos(videos);
      if (videos.length > 0) {
        setCurrentVideoId(videos[0].id);
      }
    }
  }, [courseId]);

  return (
    <div className="container mx-auto p-4 flex">
      <div className="w-3/4 pr-4">
        <YouTubePlayer videoId={currentVideoId} />
      </div>
      <div className="w-1/4">
        <VideoList videos={playlistVideos} onVideoSelect={setCurrentVideoId} />
      </div>
    </div>
  );
};

export default CoursePage;
