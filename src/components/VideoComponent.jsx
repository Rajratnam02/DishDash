import React from 'react'

const VideoComponent = (props) => {
  const vidLink = `https://www.youtube.com/embed/${props.vidId}`

  return (
    <div className="mt-24">
      <h3 className="outfit text-4xl font-bold mb-10 italic">
        Kitchen <span className="text-amber-500">Tutorial</span>
      </h3>

      <div className="video-wrap shadow-2xl">
        <iframe
          src={vidLink}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default VideoComponent
