import React, { useState, useRef, useEffect } from 'react';
import './App.css'; // Import your CSS file
import Navbar from './components/Navbar';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';

function App() {
  const [contentZoomLevel, setContentZoomLevel] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const contentRef = useRef(null);

  const handleWheel = (event) => {
    event.preventDefault(); // Prevent the default behavior (page zoom)
    const delta = event.deltaY;
    if (delta < 0) {
      // Zoom In
      setContentZoomLevel(contentZoomLevel + 0.3);
    } else {
      // Zoom Out
      if (contentZoomLevel > 0.1) {
        setContentZoomLevel(contentZoomLevel - 0.3);
      }
    }
  };
  
  

  const handleMouseDown = (event) => {
    if (event.target === contentRef.current) {
      setDragging(true);
      setDragStart({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseMove = (event) => {
    if (dragging) {
      const dx = event.clientX - dragStart.x;
      const dy = event.clientY - dragStart.y;
      setDragPosition({ x: dragPosition.x + dx, y: dragPosition.y + dy });
      setDragStart({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleNavbarWheel = (event) => {
    event.stopPropagation(); // Prevent the wheel event from propagating to the parent container
  };

  useEffect(() => {
    const handleResize = () => {
      // Reset zoom level and drag position on window resize
      setContentZoomLevel(1);
      setDragPosition({ x: 0, y: 0 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Navbar onWheel={handleNavbarWheel} />
      <div className="content-container">
        <LeftSidebar />
        <ContentContainer
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <Content zoomLevel={contentZoomLevel} dragPosition={dragPosition} contentRef={contentRef} />
        </ContentContainer>
        <RightSidebar />
      </div>
    </div>
  );
}







const ContentContainer = ({ children, ...props }) => {
  return <div className="content-container" {...props}>{children}</div>;
};

const Content = ({ zoomLevel, dragPosition, contentRef }) => {
  const contentStyle = {
    transform: `scale(${zoomLevel}) translate(${dragPosition.x}px, ${dragPosition.y}px)`,
  };

  return (
    <div className="content" ref={contentRef} style={contentStyle}>
      <img src="https://extendthemes.com/wp-content/uploads/2018/07/featured-image-layout--1024x546.jpg" alt="" />
      <img src="https://extendthemes.com/wp-content/uploads/2018/07/featured-image-layout--1024x546.jpg" alt="" />
    </div>
  );
};

export default App;
