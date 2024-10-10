import { useState, useRef, useEffect } from "react";

const DraggablePanel = () => {
  const getInitialPosition = () => {
    const savedPosition = localStorage.getItem("panelPosition");
    return savedPosition ? JSON.parse(savedPosition) : { x: 100, y: 100 };
  };

  const [position, setPosition] = useState(getInitialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedPosition = localStorage.getItem("panelPosition");
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition));
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const panelRect = panelRef.current!.getBoundingClientRect();
    setOffset({
      x: e.clientX - panelRect.left,
      y: e.clientY - panelRect.top,
    });
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    localStorage.setItem("panelPosition", JSON.stringify(position));
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset, position]);

  return (
    <div
      ref={panelRef}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "250px",
        aspectRatio: "1/1",
        backgroundColor: "var(--glass)",
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
        zIndex: "6",
        padding: "1rem",
        border: "1px solid #f5f5f540",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
      onMouseDown={handleMouseDown}
    ></div>
  );
};

export default DraggablePanel;
