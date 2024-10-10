"use client";

interface Props {}

const Background = ({}: Props) => {
  return (
    <>
      <video className="video" id="fade" autoPlay loop muted>
        <source src="/Lines.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default Background;
