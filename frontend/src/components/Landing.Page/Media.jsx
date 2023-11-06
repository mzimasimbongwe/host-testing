import React from "react";

const MediaScreen = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center py-6 md:py-24">
      <div className="max-w-[500px] w-full">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fequaleducation&tabs=timeline%2C%20events%2C%20messages&width=500&height=800" // Reduce the height for responsiveness
          width="100%"
          height="800"
          style={{ border: "none", overflow: "hidden" }}
          allowFullScreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default MediaScreen;
