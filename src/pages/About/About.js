import React from 'react';
import About from '../../components/About/About';
import VideoText from '../../components/Video-With-Text/Video-With-Text';
import Form from '../../components/Form/Form';
import Spacer from '../../components/Spacer/Spacer';
import Services from '../../components/Services/Services';

const AboutPage = () => {
  return (
    
    <>
    <Spacer/>
    <About/>
    <VideoText/>
    <Services/>
    <Form />
    </>
  )    

};

export {AboutPage};
