import React from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import CustomNavbar from './Navbar';
import './MainHome.css'
import Content from './Content';

const MainComponent = () => {
  return (
    <div>
      <LeftSidebar />
      <CustomNavbar />
      {/* Your main content goes here */}
      <Content/>
      <RightSidebar />
    </div>
  );
};

export default MainComponent;
