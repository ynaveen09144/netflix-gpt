import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-3/4">{overview}</p>
      {/* Align buttons in a row */}
      <div className="flex items-center gap-4">
        {/* Play Button */}
        <button
          className="bg-white text-black p-4 px-12 text-xl flex items-center gap-2 rounded-lg hover:bg-opacity-80"
          style={{
            appearance: "none",
            border: "none",
            outline: "none",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 fill-black"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Play
        </button>
        {/* More Info Button */}
        <button className="text-lg bg-gray-500 text-white p-4 px-12 bg-opacity-50 rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
