"use client";

const Background = ({}) => {
  return (
    <>
      <div className="background-overlay"></div>
      <video className="video" id="fade" autoPlay loop muted playsInline>
        <source src="/background.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default Background;
