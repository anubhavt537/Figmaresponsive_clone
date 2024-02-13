import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Content = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel(Math.max(0.1, zoomLevel - 0.1));
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={4} style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
          {/* Left Sidebar content */}
        </Col>
        <Col xs={12} lg={8} style={{ backgroundColor: '#ffffff', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, magnam?</p>
          <div style={{ transform: `scale(${zoomLevel})`, transformOrigin: '0 0', width: '100%', height: '100%', position: 'absolute' }}>
            <p>hello world</p>
            <img src="your-image-url.jpg" alt="Your Image" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div style={{ position: 'absolute', top: 10, right: 10 }}>
            <button onClick={handleZoomIn}>Zoom In</button>
            <button onClick={handleZoomOut}>Zoom Out</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
