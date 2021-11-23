import React, { Component } from 'react';

// COMPONENTS
import HomePage from '../components/pages/HomePage';
import Header from '../components/UI/organisms/Header';
import Footer from '../components/UI/organisms/Footer';

// STYLES
import { DesktopContainer } from './Desktop.styled';

class Desktop extends Component {
  render() {
    return (
      <div id="main">
        <DesktopContainer>
          <Header />,
          <HomePage />
          <Footer />
        </DesktopContainer>
      </div>
    );
  }
}

export default Desktop;
