import React from "react";

const VideoComponent = ({ url }) => {
  if (!url) return null;

  // ✅ Convert YouTube URL → embed URL
  const getEmbedUrl = (link) => {
    try {
      const videoId = link.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } catch {
      return null;
    }
  };

  const embedUrl = getEmbedUrl(url);

  if (!embedUrl) return null;

  return (
    <div className="mt-24">
      <h3 className="outfit text-4xl font-bold mb-10 italic">
        Kitchen <span className="text-amber-500">Tutorial</span>
      </h3>

      <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
        <iframe
          src={embedUrl}
          title="Recipe Video"
          className="w-full h-full"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoComponent;