import React from 'react';
import About from '../../components/About/About';
import VideoText from '../../components/Video-With-Text/Video-With-Text';
import Form from '../../components/Form/Form';
import Slideshow from '../Home/Hero/Hero';

const AboutPage = () => {
  return (
    
    <>
    <Slideshow />
    <About/>
    <VideoText/>
    <Form />
    </>
  )    

};

export {AboutPage};
