import React from 'react';
import Header from '../header/header';
import MainScreen from '../MainScreen/MainScreen';
import Footer from '../Footer/footer';
import * as C from './AllScreensStyles'

const AllScreens = () => {

  return (
    <div>
      <C.ContainerAllScreens>
      <Header />
      <MainScreen />
      <Footer />
      </C.ContainerAllScreens>

    </div>
  );
};

export default AllScreens;